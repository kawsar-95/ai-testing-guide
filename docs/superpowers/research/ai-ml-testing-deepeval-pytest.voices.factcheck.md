# Voices fact check: AI/ML Testing, DeepEval: Pytest for LLMs

Page: `content/ai-ml-testing/deepeval-pytest.mdx`. Checker: an agent that did not write the voices. Date: 2026-11-02. Each Layman and Bangla panel is checked against the Technical panel of the same section.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | FAIL, fixed | FAIL, fixed | Layman was Bangla. Both had the wrong metric families. Rewritten to match Technical: referenceless and reference-based, `assert_test`, `deepeval test run`. |
| How it works | FAIL, fixed | FAIL, fixed | Layman was Bangla. Both had "several metrics compare context and retrieval_context", "evaluate fails the test", and "one model call per metric". Bangla typo "model ডেয়ে". Rewritten. |
| In practice | FAIL, fixed | FAIL, fixed | Layman was Bangla. Both had the `-m slow` split with plain `pytest`, `evaluate()`, and "most metrics" for the 0.5 default. Now the full text, the two files, the `deepeval test run` commands, cites 1, 2, 3 as in Technical. |
| Common mistakes | FAIL, fixed | FAIL, fixed | Layman was Bangla. Mistakes 1–3 follow the Technical fixes. Bangla "স্কোরকে নিরপেক্ষ মনে করা" (neutral) did not mean "absolute"; now "স্কোরকে একা একা পড়া". |
| What a tester can check | FAIL, fixed | FAIL, fixed | `slow` mark and "dashboard" lines follow the Technical change. Bangla "পাশাও" typo removed. |
| Key words | n/a | n/a | No voices (rule). |

## Bangla language

| Check | Verdict |
|---|---|
| Addresses the reader with আপনি | PASS |
| Tool names, code, and acronyms stay in English (DeepEval, Pytest, `assert_test`, `LLMTestCase`, `retrieval_context`, Confident AI, CI) | PASS |
| Grammar and natural wording | FAIL, fixed (see rows above) |
| Numbers match Technical (0 to 1, 0.5, 0.7, 0.8, fifty cases, a hundred calls) | PASS |

Open FAILs at the end of the rounds above: 0

## Lighter সহজ English panels (2026-11-10)

The `সহজ English` (Layman) panel of 1 section was rewritten to lower the reading load: `In plain words`. The cognitive-load audit of 2026-11-10 found it as dense in technical terms as the Technical text, or denser, so a reader who switched voice to escape the load met the same terms. The new text keeps to the facts of the Technical text, says a term in plain words or leaves it out when a beginner does not need it, and uses short sentences and lists.

Writer: a `claude -p` session (Claude Sonnet, no tools). Checker: a fresh `claude -p` session (Claude Sonnet, no tools) that did not write the panels, given only the Technical text and the new panel of each section. The Technical text and the Bangla panels did not change. No person has read the new panels yet.

### FAILs

None.

### Table

| Section | Layman | Notes |
|---|---|---|
| In plain words | PASS | Facts, metric names, code blocks and cites (deepeval-intro, deepeval-metrics) all match the Technical text. Only the "read the metric catalogue" advice is omitted, which is allowed. |

Open FAILs: 0
