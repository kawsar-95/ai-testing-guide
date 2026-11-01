# Voices fact check: AI/ML Testing, RAG Testing Fundamentals

Page: `content/ai-ml-testing/rag-testing-basics.mdx`. Checker: an agent that did not write the voices. Date: 2026-11-02. Each Layman and Bangla panel is checked against the Technical panel of the same section, after the Technical fixes.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | FAIL, fixed | FAIL, fixed | Layman was a copy of the Bangla text, not plain English. Rewritten in plain English from the fixed Technical text. Bangla: the context-precision and Ragas-metric sentences had the same errors as Technical; fixed to match. "model বানিয়ে একটা বানিয়ে দিল" was garbled; rewritten. |
| How it works | FAIL, fixed | FAIL, fixed | Layman was Bangla; rewritten. Bangla: "চুক্তা" typo (now চুক্তি), "যেদের" (now যাদের), "ব্যবহৃত context" (Technical says retrieved), metric names and the RAG-paper claim fixed to match Technical. |
| In practice | FAIL, fixed | FAIL, fixed | Layman was Bangla; rewritten (no code; 800-token limit and the yacht question match). Bangla code blocks copied from the fixed Technical code. |
| Common mistakes | FAIL, fixed | FAIL, fixed | Layman was Bangla with English labels; rewritten. Bangla Mistake 4 fixed to match the new Technical claim. |
| What a tester can check | PASS | PASS | Layman is the Technical text (no new fact). Bangla: "পাশাই" (now পাশেই), "পৌঁছান যায়" (now পৌঁছানো যায়). Same 6 tips. |
| Key words | n/a | n/a | No voices (rule). |

Cites in Layman and Bangla use only numbers that Technical cites in the same section (`tests/voice-source.test.ts` passes).

## Bangla language

| Check | Verdict |
|---|---|
| Addresses the reader with আপনি | PASS |
| Tool names, code, and acronyms stay in English (RAG, Ragas, Precision@k, Faithfulness, chunk, CI) | PASS |
| Grammar and natural wording | FAIL, fixed (typos and garbled sentences listed above) |
| Numbers match Technical (k=5, 0.9, 0.6, 800 tokens, 4 failure modes) | PASS |

Open FAILs: 0
