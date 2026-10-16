import sys
import unittest
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
