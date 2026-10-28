# Voices fact-check: content/ai-engineering/rag-basics.mdx

Checked 2026-10-28 by an agent that did not write the voices. Each `<Layman>` and `<Bangla>` panel was compared with the `<Technical>` panel of the same block. `node --test tests/voice-source.test.ts` passes.

| # | Section | Voice | What the panel says (checked against Technical) | Verdict | Reason |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | 3 steps [2]; 2020 paper, 2 kinds of memory, better text [1]; search and answer can fail | PASS | Same facts and cites. |
| 2 | In plain words | Bangla | Same | PASS | "রিট্রিভার (retriever)" keeps the term. |
| 3 | How it works | Layman | 3 index steps [2]; query time [2]; TS-999, BM25 [2]; lost context, Contextual Retrieval, 50–100 tokens, 49% and 67% "in Anthropic's tests" [2]; 2 rules [3]; under 200,000 tokens "in their article" [2] | FAIL, fixed | First check: "Many systems run both and merge the results", the same unsupported claim as Technical row 10 of the fact-check. |
| 4 | How it works | Bangla | Same | FAIL, fixed | Same as row 3 ("অনেক সিস্টেম দুটোই চালায়"). The numbers and the "তাদের লেখায়" attribution match Technical. |
| 5 | A real-life example | Layman | 900 pages [2]; 3 problems [2][2][3]; partitions [4] | PASS | Same facts and cites. |
| 6 | A real-life example | Bangla | Same | PASS | Quoted questions stay in English. |
| 7 | Common mistakes | Layman | 6 mistakes; "tutorial's own view" kept; poisoning warning kept [4][5] | PASS | Warning kept. |
| 8 | Common mistakes | Bangla | Same | PASS | Warning kept; "data poisoning" stays in English in brackets. |
| 9 | What a tester can check | Layman | "Tutorial's own advice" and 8 ideas | PASS | Same. |
| 10 | What a tester can check | Bangla | Same | PASS | আপনি imperatives. |

## Re-check

- Rows 3 and 4: both now say that Anthropic suggests running both and merging the results, with `<Cite n={2} />`, as Technical. PASS.

FAILs found: 2. Fixed: 2.

Open FAILs: 0
