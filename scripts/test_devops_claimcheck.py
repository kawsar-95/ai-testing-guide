import sys
import tempfile
import unittest
import urllib.error
from pathlib import Path
from unittest import mock

sys.path.insert(0, str(Path(__file__).resolve().parent))

import devops_claimcheck as dc


class NormTest(unittest.TestCase):
    def test_case_space_curly_quotes_and_punctuation_spacing_do_not_count(self):
        self.assertEqual(dc.norm("An  organization\u2019s ability ,\n to deliver (CI/CD )."), "an organization's ability, to deliver (ci/cd).")

    def test_the_new_tab_marker_is_dropped(self):
        self.assertEqual(dc.norm("container images (opens in a new tab) that can run"), "container images that can run")


class ParseTest(unittest.TestCase):
    MDX = (
        "export const metadata = { title: 'T', description: 'D' }\n"
        "export const page = {\n  updated: '2026-11-05',\n  sources: [\n"
        "    { title: 'a', publisher: 'p', url: 'https://example.com/a', accessed: '2026-11-05' },\n"
        "    { title: 'b', publisher: 'p', url: 'https://example.com/b', accessed: '2026-11-05' },\n  ],\n}\n\n# T\n\n"
        "<Voices>\n<Technical>\n\nA is a thing <Cite n={1} />. B is another <Cite n={2} />.\n\n</Technical>\n<Layman>\n\nx\n\n</Layman>\n"
    )

    def test_source_urls_in_order(self):
        self.assertEqual(dc.source_urls(self.MDX), ["https://example.com/a", "https://example.com/b"])

    def test_cited_text_of_the_technical_panel_is_split_at_each_cite(self):
        self.assertEqual(dc.technical_sentences(self.MDX), [("A is a thing", 1), ("B is another", 2)])
        two = "<Technical>\n\nX is a tool <Cite n={2} />, and Y is another <Cite n={3} />.\n\n</Technical>"
        self.assertEqual(dc.technical_sentences(two), [("X is a tool", 2), (", and Y is another", 3)])

    def test_every_technical_panel_of_a_page_counts(self):
        page = self.MDX + "</Voices>\n\n## Next\n\n<Voices>\n<Technical>\n\nC runs D <Cite n={2} />.\n\n</Technical>\n"
        self.assertEqual(dc.technical_sentences(page), [("A is a thing", 1), ("B is another", 2), ("C runs D", 2)])

    def test_claim_rows_with_an_escaped_bar(self):
        research = '## Claims\n\n| Claim | Source | Quote |\n|---|---|---|\n| A \\| B | S2 | "x \\| y" |\n'
        self.assertEqual(dc.claims(research), [("A \\| B", 2, "x | y")])

    def test_trigrams_ignore_punctuation(self):
        self.assertEqual(dc.trigrams("Run (CI/CD) now."), ["run ci cd", "ci cd now"])


class FetchTest(unittest.TestCase):
    PAGE = b"<p>Hello world. " + b"This page is long enough to be cached. " * 10 + b"</p>"

    def run_fetch(self, fail_with):
        seen = []

        class Response:
            def __enter__(self):
                return self

            def __exit__(self, *args):
                return False

            def read(self):
                return FetchTest.PAGE

        def fake_urlopen(request, timeout):
            seen.append(request.get_header("User-agent"))
            if request.get_header("User-agent") == dc.UA and fail_with:
                raise urllib.error.HTTPError(request.full_url, fail_with, "error", {}, None)
            return Response()

        with tempfile.TemporaryDirectory() as tmp, mock.patch.object(dc.urllib.request, "urlopen", fake_urlopen), mock.patch.object(dc.time, "sleep"):
            try:
                text = dc.fetch("https://example.org/a", Path(tmp))
            except urllib.error.HTTPError as error:
                text = error.code
        return text, seen

    def test_a_403_is_retried_once_with_the_plain_user_agent(self):
        text, seen = self.run_fetch(403)
        self.assertIn("Hello world.", text)
        self.assertEqual(seen, [dc.UA, dc.FALLBACK_UA])

    def test_a_404_is_not_retried(self):
        text, seen = self.run_fetch(404)
        self.assertEqual(text, 404)
        self.assertEqual(seen, [dc.UA])

    def test_a_page_that_answers_the_browser_user_agent_is_fetched_once(self):
        text, seen = self.run_fetch(None)
        self.assertIn("Hello world.", text)
        self.assertEqual(seen, [dc.UA])


class RetryTest(unittest.TestCase):
    PAGE = b"<p>" + b"This page is long enough to be cached. " * 12 + b"</p>"

    def run_fetch(self, answers):
        """answers: one entry per request, an HTTP status to raise or None for the page. Returns the text or the error code, and the waits."""
        calls = []
        waits = []

        class Response:
            def __enter__(self):
                return self

            def __exit__(self, *args):
                return False

            def read(self):
                return RetryTest.PAGE

        def fake_urlopen(request, timeout):
            status = answers[min(len(calls), len(answers) - 1)]
            calls.append(request.get_header("User-agent"))
            if status:
                raise urllib.error.HTTPError(request.full_url, status[0], "error", {"Retry-After": status[1]} if len(status) > 1 else {}, None)
            return Response()

        with tempfile.TemporaryDirectory() as tmp, mock.patch.object(dc.urllib.request, "urlopen", fake_urlopen), mock.patch.object(dc.time, "sleep", waits.append):
            try:
                result = dc.fetch("https://example.org/b", Path(tmp))
            except urllib.error.HTTPError as error:
                result = error.code
        return result, len(calls), [w for w in waits if w != 0.3]

    def test_a_429_is_tried_again_after_the_wait_that_the_server_asks_for(self):
        result, calls, waits = self.run_fetch([(429, "2"), None])
        self.assertIn("This page is long enough", result)
        self.assertEqual((calls, waits), (2, [2]))

    def test_a_429_without_a_wait_uses_5_15_and_45_seconds(self):
        result, calls, waits = self.run_fetch([(429,), (429,), (429,), None])
        self.assertIn("This page is long enough", result)
        self.assertEqual((calls, waits), (4, [5, 15, 45]))

    def test_a_429_that_does_not_stop_is_raised_after_three_tries_again(self):
        result, calls, waits = self.run_fetch([(429,)])
        self.assertEqual((result, calls, waits), (429, 4, [5, 15, 45]))

    def test_a_wait_of_more_than_a_minute_is_cut_to_a_minute(self):
        result, calls, waits = self.run_fetch([(429, "600"), None])
        self.assertEqual(waits, [60])


if __name__ == "__main__":
    unittest.main()
