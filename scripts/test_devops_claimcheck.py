import sys
import unittest
from pathlib import Path

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

    def test_claim_rows_with_an_escaped_bar(self):
        research = '## Claims\n\n| Claim | Source | Quote |\n|---|---|---|\n| A \\| B | S2 | "x \\| y" |\n'
        self.assertEqual(dc.claims(research), [("A \\| B", 2, "x | y")])

    def test_trigrams_ignore_punctuation(self):
        self.assertEqual(dc.trigrams("Run (CI/CD) now."), ["run ci cd", "ci cd now"])


if __name__ == "__main__":
    unittest.main()
