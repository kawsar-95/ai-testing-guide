import io
import sys
import tempfile
import unittest
import urllib.error
import urllib.request
from email.message import Message
from unittest import mock
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

import linux_fetch
import linux_overlap

EIGHT = "the quick brown fox jumps over the lazy"


class ParseLinksTest(unittest.TestCase):
    def test_parse_links_reads_topic_type_title_url(self):
        md = (
            "# Title\n\n## AWK\n\n"
            "- [article] [AWK Tutorial](https://x.test/a)\n"
            "- [video] [V](https://youtu.be/1)\n"
            "\n## Sed\n\n- [official] [Sed](https://x.test/s)\n"
        )
        self.assertEqual(
            linux_fetch.parse_links(md),
            [
                {"topic": "AWK", "type": "article", "title": "AWK Tutorial", "url": "https://x.test/a"},
                {"topic": "AWK", "type": "video", "title": "V", "url": "https://youtu.be/1"},
                {"topic": "Sed", "type": "official", "title": "Sed", "url": "https://x.test/s"},
            ],
        )

    def test_parse_links_ignores_other_lines(self):
        md = "## T\n\nSource: x\n- plain item\n- [article] [A](https://x.test/a)\n"
        self.assertEqual(len(linux_fetch.parse_links(md)), 1)


class HtmlToTextTest(unittest.TestCase):
    def test_html_to_text_drops_chrome_and_keeps_code(self):
        html = "<nav>menu</nav><p>Use <code>ls -l</code></p><script>x()</script>"
        text = linux_fetch.html_to_text(html)
        self.assertIn("Use ls -l", text)
        self.assertNotIn("menu", text)
        self.assertNotIn("x()", text)

    def test_html_to_text_drops_all_chrome_tags(self):
        for tag in ("script", "style", "nav", "header", "footer", "aside", "form", "svg"):
            text = linux_fetch.html_to_text(f"<{tag}>junk</{tag}><p>kept</p>")
            self.assertNotIn("junk", text, tag)
            self.assertIn("kept", text, tag)

    def test_html_to_text_keeps_pre_lines_and_collapses_blank_lines(self):
        html = "<p>a</p>\n\n\n<p>b</p><pre>line1\n  line2</pre>"
        text = linux_fetch.html_to_text(html)
        self.assertNotIn("\n\n", text)
        self.assertIn("line1\n  line2", text)


class ShouldFetchTest(unittest.TestCase):
    def test_should_fetch_skips_video_course_roadmap_and_youtube(self):
        def link(type_, url="https://x.test/a"):
            return {"topic": "T", "type": type_, "title": "t", "url": url}

        self.assertTrue(linux_fetch.should_fetch(link("article")))
        self.assertTrue(linux_fetch.should_fetch(link("official")))
        self.assertTrue(linux_fetch.should_fetch(link("opensource")))
        for type_ in ("video", "course", "roadmap"):
            self.assertFalse(linux_fetch.should_fetch(link(type_)), type_)
        self.assertFalse(linux_fetch.should_fetch(link("article", "https://www.youtube.com/watch?v=1")))
        self.assertFalse(linux_fetch.should_fetch(link("article", "https://youtu.be/1")))


class _FakeResponse:
    def __init__(self, body: bytes):
        self._body = body
        self.headers = Message()
        self.headers["Content-Type"] = "text/html; charset=utf-8"

    def read(self, size=-1):
        return self._body

    def __enter__(self):
        return self

    def __exit__(self, *exc):
        return False


def _fake_open(self, url):
    if url.endswith("/robots.txt"):
        raise urllib.error.HTTPError(url, 404, "nf", Message(), io.BytesIO(b""))
    return _FakeResponse(b"<p>hello</p>")


class RunTest(unittest.TestCase):
    LINKS = [
        {"topic": "T", "type": "article", "title": "A", "url": "http://one.test/a"},
        {"topic": "T", "type": "article", "title": "B", "url": "http://[bad"},
        {"topic": "T", "type": "article", "title": "C", "url": "http://two.test/c"},
    ]

    def test_run_turns_a_malformed_url_into_an_error_row(self):
        with tempfile.TemporaryDirectory() as tmp, \
                mock.patch.object(linux_fetch.Fetcher, "_open", _fake_open), \
                mock.patch("sys.stdout", new_callable=io.StringIO):
            linux_fetch.run(self.LINKS, Path(tmp))
            rows = (Path(tmp) / "report.tsv").read_text().splitlines()
        self.assertEqual(len(rows), 4)  # header + 3 links
        cols = [row.split("\t") for row in rows[1:]]
        self.assertEqual(cols[0][3], "ok")
        self.assertTrue(cols[1][3].startswith("error:"))
        self.assertNotRegex(cols[1][3], r"\s")
        self.assertEqual(cols[2][3], "ok")

    def test_run_keeps_finished_rows_when_the_run_crashes(self):
        calls = []

        def crash(self, url):
            calls.append(url)
            if len(calls) > 1:
                raise KeyboardInterrupt
            return "text"

        with tempfile.TemporaryDirectory() as tmp, \
                mock.patch.object(linux_fetch.Fetcher, "_open", _fake_open), \
                mock.patch.object(linux_fetch.Fetcher, "get_text", crash), \
                mock.patch("sys.stdout", new_callable=io.StringIO):
            with self.assertRaises(KeyboardInterrupt):
                linux_fetch.run([self.LINKS[0], self.LINKS[2]], Path(tmp))
            rows = (Path(tmp) / "report.tsv").read_text().splitlines()
        self.assertEqual(len(rows), 2)  # header + the first link


def _http_error(url, code):
    return urllib.error.HTTPError(url, code, "x", Message(), io.BytesIO(b""))


class RobotsTest(unittest.TestCase):
    def _fetcher(self, robots):
        """Return a Fetcher whose robots.txt is `robots`: text, an int status, or an exception."""
        def fake_open(self, url):
            if url.endswith("/robots.txt"):
                if isinstance(robots, int):
                    raise _http_error(url, robots)
                if isinstance(robots, Exception):
                    raise robots
                return _FakeResponse(robots.encode())
            return _FakeResponse(b"<p>hello</p>")

        patcher = mock.patch.object(linux_fetch.Fetcher, "_open", fake_open)
        patcher.start()
        self.addCleanup(patcher.stop)
        return linux_fetch.Fetcher()

    def test_rules_for_our_agent_token_apply(self):
        fetcher = self._fetcher("User-agent: linux-notes-research\nDisallow: /private\n")
        self.assertFalse(fetcher.allowed("http://a.test/private/x"))
        self.assertTrue(fetcher.allowed("http://a.test/public"))

    def test_star_rules_still_apply(self):
        fetcher = self._fetcher("User-agent: *\nDisallow: /private\n")
        self.assertFalse(fetcher.allowed("http://a.test/private/x"))

    def test_robots_5xx_skips_the_origin(self):
        for code in (500, 503):
            fetcher = self._fetcher(code)
            self.assertFalse(fetcher.allowed("http://a.test/x"), code)

    def test_robots_network_error_skips_the_origin(self):
        for error in (TimeoutError(), urllib.error.URLError("down")):
            fetcher = self._fetcher(error)
            self.assertFalse(fetcher.allowed("http://a.test/x"), type(error))

    def test_robots_401_and_403_disallow_all(self):
        for code in (401, 403):
            self.assertFalse(self._fetcher(code).allowed("http://a.test/x"), code)

    def test_robots_404_410_and_other_4xx_allow_all(self):
        for code in (404, 410, 429):
            self.assertTrue(self._fetcher(code).allowed("http://a.test/x"), code)

    def test_fetch_one_reports_robots_for_a_5xx_robots_file(self):
        fetcher = self._fetcher(503)
        link = {"topic": "T", "type": "article", "title": "A", "url": "http://a.test/x"}
        self.assertEqual(linux_fetch.fetch_one(fetcher, link), ("robots", ""))


class RedirectTest(unittest.TestCase):
    def _handler(self, robots):
        def fake_open(self, url):
            if url.endswith("/robots.txt"):
                return _FakeResponse(robots.encode())
            return _FakeResponse(b"<p>hello</p>")

        patcher = mock.patch.object(linux_fetch.Fetcher, "_open", fake_open)
        patcher.start()
        self.addCleanup(patcher.stop)
        return linux_fetch._RobotsRedirect(linux_fetch.Fetcher())

    def _redirect(self, handler, new_url):
        request = urllib.request.Request("http://a.test/old")
        return handler.redirect_request(request, None, 302, "Found", Message(), new_url)

    def test_redirect_to_a_disallowed_other_host_is_blocked(self):
        handler = self._handler("User-agent: *\nDisallow: /\n")
        with self.assertRaises(linux_fetch.RobotsBlocked):
            self._redirect(handler, "http://b.test/new")

    def test_redirect_to_an_allowed_other_host_is_followed(self):
        handler = self._handler("User-agent: *\nDisallow: /secret\n")
        self.assertIsNotNone(self._redirect(handler, "http://b.test/new"))

    def test_redirect_to_a_disallowed_path_on_the_same_host_is_blocked(self):
        handler = self._handler("User-agent: *\nDisallow: /new\n")
        with self.assertRaises(linux_fetch.RobotsBlocked):
            self._redirect(handler, "http://a.test/new")

    def test_redirect_waits_for_the_host_delay_and_records_the_request(self):
        for cached in (False, True):
            clock = [100.0]
            sleeps = []

            def fake_sleep(seconds):
                sleeps.append(seconds)
                clock[0] += seconds

            handler = self._handler("User-agent: *\nDisallow: /secret\n")
            fetcher = handler.fetcher
            if cached:
                # The robots.txt of host B is cached. The last request to B was 0.5 s ago.
                fetcher.allowed("http://b.test/x")
                fetcher.last_request["b.test"] = 99.5
            with mock.patch.object(linux_fetch.time, "monotonic", lambda: clock[0]), \
                    mock.patch.object(linux_fetch.time, "sleep", fake_sleep):
                if not cached:
                    # The robots.txt fetch (patched _open) is not timed. Mark it 0.5 s ago.
                    original = linux_fetch.Fetcher.allowed

                    def allowed(url):
                        result = original(fetcher, url)
                        fetcher.last_request["b.test"] = 99.5
                        return result

                    fetcher.allowed = allowed
                self.assertIsNotNone(self._redirect(handler, "http://b.test/new"))
            self.assertEqual(sleeps, [1.5], cached)
            self.assertEqual(fetcher.last_request["b.test"], 101.5, cached)

    def test_redirect_of_a_robots_file_to_another_path_does_not_check_robots_again(self):
        handler = self._handler("User-agent: *\nDisallow: /\n")
        request = urllib.request.Request("http://a.test/robots.txt")
        result = handler.redirect_request(request, None, 302, "Found", Message(), "http://a.test/other")
        self.assertIsNotNone(result)

    def test_open_records_the_time_for_the_host_after_a_redirect(self):
        class Opener:
            def open(self, request, timeout):
                response = _FakeResponse(b"x")
                response.geturl = lambda: "http://b.test/final"
                return response

        fetcher = linux_fetch.Fetcher()
        with mock.patch.object(linux_fetch.urllib.request, "build_opener", lambda *a: Opener()), \
                mock.patch.object(linux_fetch.time, "monotonic", lambda: 50.0):
            fetcher._open("http://a.test/old")
        self.assertEqual(fetcher.last_request["a.test"], 50.0)
        self.assertEqual(fetcher.last_request["b.test"], 50.0)

    def test_fetch_one_reports_robots_when_a_redirect_is_blocked(self):
        def blocked(self, url):
            if url.endswith("/robots.txt"):
                raise _http_error(url, 404)
            raise linux_fetch.RobotsBlocked(url)

        link = {"topic": "T", "type": "article", "title": "A", "url": "http://a.test/x"}
        with mock.patch.object(linux_fetch.Fetcher, "_open", blocked):
            self.assertEqual(linux_fetch.fetch_one(linux_fetch.Fetcher(), link), ("robots", ""))


class OverlapTest(unittest.TestCase):
    def test_overlap_finds_a_copied_run_of_8_words_and_ignores_code_fences(self):
        corpus = [f"Intro text. {EIGHT} and more words follow."]
        copied = f"My page.\n\nSo {EIGHT} is here.\n"
        hits = linux_overlap.overlap(copied, corpus)
        self.assertIn(EIGHT, hits)
        fenced = f"My page.\n\n```bash\n{EIGHT}\n```\n"
        self.assertEqual(linux_overlap.overlap(fenced, corpus), [])

    def test_overlap_is_empty_for_a_rewritten_text(self):
        corpus = [f"Intro text. {EIGHT} and more words follow."]
        mdx = "A fast auburn fox leaps across a sleepy dog near the river bank today."
        self.assertEqual(linux_overlap.overlap(mdx, corpus), [])

    def test_shingles_lowercase_and_skip_fences(self):
        got = linux_overlap.shingles("One Two Three\n```\nfour five\n```\nsix", n=3)
        self.assertEqual(got, {("one", "two", "three")})


if __name__ == "__main__":
    unittest.main()
