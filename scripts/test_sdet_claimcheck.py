import sys
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

import sdet_claimcheck as sc


class NormTest(unittest.TestCase):
    def test_case_space_curly_quotes_and_punctuation_spacing_do_not_count(self):
        self.assertEqual(sc.norm("A  locator\u2019s job ,\n is to find (an element )."), "a locator's job, is to find (an element).")

    def test_the_new_tab_marker_and_zero_width_spaces_are_dropped(self):
        self.assertEqual(sc.norm("the request (opens in a new tab) fix\u200bture"), "the request fixture")


class ParseTest(unittest.TestCase):
    MDX = (
        "export const metadata = { title: 'T', description: 'D' }\n"
        "export const page = {\n  updated: '2026-11-15',\n  sources: [\n"
        "    { title: 'a', publisher: 'p', url: 'https://example.com/a', accessed: '2026-11-15' },\n"
        "    { title: 'b', publisher: 'p', url: 'https://example.com/b', accessed: '2026-11-15' },\n  ],\n}\n\n# T\n\n"
        "## One\n\n<Voices>\n<Technical>\n\nA is a thing <Cite n={1} />. B is another <Cite n={2} />.\n\n</Technical>\n<Layman>\n\nx <Cite n={1} />\n\n</Layman>\n"
        "<Bangla>\n\nক\n\n</Bangla>\n</Voices>\n\n## Two\n\n<Voices>\n<Technical>\n\n```js\nconst a = 1 <Cite n={9} />\n```\n\nRun it:\nC works <Cite n={2} />\n\n</Technical>\n"
    )

    def test_source_urls_in_order(self):
        self.assertEqual(sc.source_urls(self.MDX), ["https://example.com/a", "https://example.com/b"])

    def test_every_technical_panel_is_cut_at_each_cite_and_code_and_other_panels_are_skipped(self):
        self.assertEqual(sc.technical_sentences(self.MDX), [("A is a thing", 1), ("B is another", 2), ("C works", 2)])

    def test_claim_rows_have_an_id_and_may_escape_a_bar(self):
        research = '## Claims\n\n| # | Claim | Source | Quote |\n|---|---|---|---|\n| C1 | A \\| B | S2 | "x \\| y" |\n| C2 | no quote | S1 | none |\n'
        self.assertEqual(sc.claims(research), [("A \\| B", 2, "x | y")])

    def test_trigrams_ignore_punctuation(self):
        self.assertEqual(sc.trigrams("Run (CI/CD) now."), ["run ci cd", "ci cd now"])


if __name__ == "__main__":
    unittest.main()
