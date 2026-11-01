"""Unit tests for ai_ml_course_fetch.py.

Run: python3 -m unittest scripts/test_ai_ml_course_fetch.py
"""

import json
import sys
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

import ai_ml_course_fetch as fetch


class FindBundleTests(unittest.TestCase):
    def test_finds_the_module_script(self):
        html = '<script type="module" crossorigin src="/assets/index-D0TGyTjw.js"></script>'
        self.assertEqual(
            fetch.find_bundle(html),
            "https://www.journeytoautomation.org/assets/index-D0TGyTjw.js",
        )

    def test_raises_when_there_is_no_bundle(self):
        with self.assertRaises(SystemExit):
            fetch.find_bundle("<html></html>")


class SliceArrayTests(unittest.TestCase):
    def test_slices_a_flat_array(self):
        self.assertEqual(fetch.slice_array('["a","b"]', 0), '["a","b"]')

    def test_slices_a_nested_array(self):
        literal = '[{a:["x","y"]},{b:["z"]}]'
        self.assertEqual(fetch.slice_array(literal, 0), literal)

    def test_ignores_brackets_inside_strings(self):
        literal = '["a [not an array] b","c"]'
        self.assertEqual(fetch.slice_array(literal, 0), literal)

    def test_ignores_escaped_quotes(self):
        literal = '["a \\" quoted \\" value","b"]'
        self.assertEqual(fetch.slice_array(literal, 0), literal)

    def test_raises_on_an_unterminated_array(self):
        with self.assertRaises(SystemExit):
            fetch.slice_array('["a","b"', 0)


class JsToJsonTests(unittest.TestCase):
    def test_quotes_unquoted_keys(self):
        self.assertEqual(
            fetch.js_to_json('[{title:"x",desc:"y"}]'),
            [{"title": "x", "desc": "y"}],
        )

    def test_keeps_already_quoted_keys(self):
        self.assertEqual(fetch.js_to_json('[{"title":"x"}]'), [{"title": "x"}])

    def test_does_not_quote_colons_inside_strings(self):
        parsed = fetch.js_to_json('[{title:"Session 1: What is AI/ML"}]')
        self.assertEqual(parsed[0]["title"], "Session 1: What is AI/ML")

    def test_does_not_quote_a_colon_after_a_comma_inside_a_string(self):
        parsed = fetch.js_to_json('[{title:"a, b: c"}]')
        self.assertEqual(parsed[0]["title"], "a, b: c")

    def test_keeps_escapes(self):
        parsed = fetch.js_to_json('[{title:"say \\"hi\\""}]')
        self.assertEqual(parsed[0]["title"], 'say "hi"')


class RenderMarkdownTests(unittest.TestCase):
    def setUp(self):
        self.data = {
            "phase1_learn": ["Learn: one thing"],
            "phase1_tools": [{"category": "Eval", "tools": "PromptFoo", "action": "Compare"}],
            "phase1_modules": [
                {
                    "title": "Module 1: Basics",
                    "desc": "Week 1 · 1 Session",
                    "sections": [{"title": "Session 1: Intro", "items": ["Do a thing."]}],
                }
            ],
            "phase1_careers": ["AI Test Engineer"],
            "phase2_tools": [{"category": "RAG", "tools": "Ragas", "action": "Measure"}],
            "phase2_modules": [
                {
                    "title": "Module 1: Advanced",
                    "desc": "Week 1 · 1 Session",
                    "sections": [{"title": "Session 1: Deep", "items": ["Go deeper."]}],
                }
            ],
            "phase2_careers": ["Senior AI Test Engineer"],
        }

    def test_writes_both_phases(self):
        text = fetch.render_markdown(self.data, "2026-01-01")
        self.assertIn("## Phase 1 — Foundations", text)
        self.assertIn("## Phase 2 — Mastery", text)

    def test_lists_every_session_and_bullet(self):
        text = fetch.render_markdown(self.data, "2026-01-01")
        self.assertIn("Session 1: Intro", text)
        self.assertIn("Do a thing.", text)
        self.assertIn("Session 1: Deep", text)
        self.assertIn("Go deeper.", text)

    def test_includes_the_tool_tables(self):
        text = fetch.render_markdown(self.data, "2026-01-01")
        self.assertIn("| Eval | PromptFoo | Compare |", text)
        self.assertIn("| RAG | Ragas | Measure |", text)

    def test_cites_the_source_and_the_access_date(self):
        text = fetch.render_markdown(self.data, "2026-01-01")
        self.assertIn(fetch.PAGE_URL, text)
        self.assertIn("2026-01-01", text)

    def test_marks_the_text_as_third_party(self):
        text = fetch.render_markdown(self.data, "2026-01-01")
        self.assertIn("Third-party text", text)


class ReadArraysTests(unittest.TestCase):
    def test_reads_each_anchor_from_a_bundle(self):
        bundle = (
            'o=["Learn A","Learn B"],'
            'c=[{category:"Eval",tools:"PromptFoo",action:"Compare"}],'
            'A=[{title:"Module 1",desc:"Week 1",sections:[{title:"S1",items:["x"]}]}],'
            'u=["Role A"],'
            'h=[{category:"RAG",tools:"Ragas",action:"Measure"}],'
            'p=[{title:"Module 9",desc:"Week 8",sections:[{title:"S18",items:["y"]}]}],'
            'g=["Role B"]'
        )
        original = fetch.ANCHORS
        fetch.ANCHORS = {
            "phase1_learn": 'o=["Learn A"',
            "phase1_tools": 'c=[{category:"Eval"',
            "phase1_modules": 'A=[{title:"Module 1"',
            "phase1_careers": 'u=["Role A"',
            "phase2_tools": 'h=[{category:"RAG"',
            "phase2_modules": 'p=[{title:"Module 9"',
            "phase2_careers": 'g=["Role B"',
        }
        try:
            data = fetch.read_arrays(bundle)
        finally:
            fetch.ANCHORS = original
        self.assertEqual(data["phase1_learn"], ["Learn A", "Learn B"])
        self.assertEqual(data["phase1_tools"][0]["tools"], "PromptFoo")
        self.assertEqual(data["phase1_modules"][0]["sections"][0]["items"], ["x"])
        self.assertEqual(data["phase2_careers"], ["Role B"])

    def test_raises_when_an_anchor_is_gone(self):
        original = fetch.ANCHORS
        fetch.ANCHORS = {"phase1_learn": 'zz=["nothing here"'}
        try:
            with self.assertRaises(SystemExit):
                fetch.read_arrays('o=["Learn A"]')
        finally:
            fetch.ANCHORS = original

    def test_every_anchor_is_a_unique_string(self):
        self.assertEqual(len(fetch.ANCHORS), len(set(fetch.ANCHORS.values())))


class JsonRoundTripTests(unittest.TestCase):
    def test_the_written_json_is_valid(self):
        payload = {"phase1_modules": [{"title": "Module 1", "sections": []}]}
        self.assertEqual(json.loads(json.dumps(payload)), payload)


if __name__ == "__main__":
    unittest.main()
