"""Unit tests for ai_ml_testing_pages_gen.py.

Run: python3 -m unittest scripts/test_ai_ml_testing_pages_gen.py
"""

import sys
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

import ai_ml_testing_pages_gen as gen


class JsEscapeTests(unittest.TestCase):
    def test_escapes_a_single_quote(self):
        self.assertEqual(gen._js_escape("agent's decision"), "agent\\'s decision")

    def test_escapes_a_backslash_before_escaping_the_quote(self):
        # A literal backslash must not eat the quote's escape.
        self.assertEqual(gen._js_escape("a\\'b"), "a\\\\\\'b")

    def test_leaves_a_plain_string_untouched(self):
        self.assertEqual(gen._js_escape("no quotes here"), "no quotes here")

    def test_escapes_every_quote_in_a_string(self):
        self.assertEqual(gen._js_escape("it's the agent's tool"), "it\\'s the agent\\'s tool")


class RenderSourcesEscapingTests(unittest.TestCase):
    def test_a_source_title_with_an_apostrophe_is_escaped(self):
        original = gen.source

        def fake_source(key):
            return type(
                "Source",
                (),
                {
                    "title": "Dynamo: Amazon's Highly Available Key-value Store",
                    "publisher": "DeCandia et al.",
                    "url": "https://example.com",
                    "accessed": "2026-01-01",
                },
            )()

        gen.source = fake_source
        try:
            block, numbers = gen.render_sources(["fake-key"])
        finally:
            gen.source = original

        self.assertIn("Amazon\\'s Highly Available", block)
        self.assertNotIn("Amazon's Highly Available", block)
        self.assertEqual(numbers, {"fake-key": 1})


class PageFixture(unittest.TestCase):
    """A page with an apostrophe in its title, rendered with a fake source library. No tests."""

    page: dict

    def setUp(self):
        self.page = {
            "slug": "test-page",
            "title": "Agent Architecture: What You're Testing",
            "description": "Map an agent's decision tree before you test it.",
            "lede": "A lede with no apostrophe.",
            "sources": ["fake-key"],
            "sections": {
                heading: {"technical": "Text.", "layman": "Text.", "bangla": "লেখা।"}
                for heading in gen.SECTION_ORDER
            },
            "key_words": [("Word", "Meaning")],
        }
        self.original_source = gen.source

        def fake_source(key):
            return type(
                "Source",
                (),
                {
                    "title": "A Source",
                    "publisher": "A Publisher",
                    "url": "https://example.com",
                    "accessed": "2026-01-01",
                },
            )()

        gen.source = fake_source

    def tearDown(self):
        gen.source = self.original_source


class RenderPageEscapingTests(PageFixture):
    def test_a_title_apostrophe_does_not_break_the_metadata_line(self):
        rendered = gen.render_page(self.page)
        first_line = rendered.split("\n")[0]
        # The line must have an even number of un-escaped single quotes, or
        # the generated MDX is a broken JS object literal (the regression
        # this test guards: "What You're" inside a '...' string).
        import re

        unescaped = len(re.findall(r"(?<!\\)'", first_line))
        self.assertEqual(unescaped % 2, 0, first_line)

    def test_a_description_apostrophe_is_escaped(self):
        rendered = gen.render_page(self.page)
        self.assertIn("agent\\'s decision tree", rendered)

    def test_the_plain_title_still_appears_unescaped_in_the_heading(self):
        rendered = gen.render_page(self.page)
        # The Markdown `# Title` line is not inside a JS string, so it must
        # NOT be escaped there.
        self.assertIn("# Agent Architecture: What You're Testing", rendered)


class RenderPageUpdatedTests(PageFixture):
    def test_a_page_without_updated_gets_the_module_date(self):
        self.assertIn(f"  updated: '{gen.UPDATED}',", gen.render_page(self.page))

    def test_a_page_with_updated_gets_its_own_date(self):
        rendered = gen.render_page({**self.page, "updated": "2030-01-02"})
        self.assertIn("  updated: '2030-01-02',", rendered)
        self.assertNotIn(f"updated: '{gen.UPDATED}'", rendered)


if __name__ == "__main__":
    unittest.main()
