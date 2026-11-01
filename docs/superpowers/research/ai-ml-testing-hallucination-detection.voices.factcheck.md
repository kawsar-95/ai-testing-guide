# Voices fact check: AI/ML Testing, Hallucination Detection

Page: `content/ai-ml-testing/hallucination-detection.mdx`. Checker: an agent that did not write the voices. Date: 2026-11-02. Each Layman and Bangla panel is checked against the Technical panel of the same section.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | FAIL, fixed | FAIL, fixed | Layman was Bangla. Both cited the wrong faithfulness paper and stated the ranking and the blind spot as facts. Bangla typos "শনাক্তরানর", "এটে". Rewritten to match Technical (cites 1, 2, 4; reasoning labeled). |
| How it works | FAIL, fixed | FAIL, fixed | Layman was Bangla. Both had "most production hallucinations are caught" and the old faithfulness cite. Bangla typo "আজকর". Rewritten; cite 3 added where Technical has it. |
| In practice | FAIL, fixed | FAIL, fixed | Layman was Bangla. The code in both voices now matches the fixed Technical code (`assert_test`, `frozenset`, `import pytest`). |
| Common mistakes | FAIL, fixed | FAIL, fixed | Layman was Bangla. Old faithfulness cite removed in both. Mistake 2 follows Technical. Bangla "তাই চাপ কম" (so less pressure) did not mean "tempting"; now "লোভনীয়". Mistake 4 and 5 Bangla grammar fixed. |
| What a tester can check | PASS | FAIL, fixed | Bangla "ছাড়া সেই সংখ্যা" lacked its object; now "temperature ছাড়া". |
| Key words | n/a | n/a | No voices (rule). |

## Bangla language

| Check | Verdict |
|---|---|
| Addresses the reader with আপনি | PASS |
| Tool names, code, and acronyms stay in English (SelfCheckGPT, Ragas, DeepEval, `FaithfulnessMetric`, API, temperature) | PASS |
| Grammar and natural wording | FAIL, fixed (see rows above) |
| Numbers match Technical (three techniques, 30 days, 0.9, 0.0/0.7/1.0, 5 samples) | PASS |

Open FAILs: 0
