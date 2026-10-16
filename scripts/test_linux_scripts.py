import io
import sys
import tempfile
import unittest
import urllib.error
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
