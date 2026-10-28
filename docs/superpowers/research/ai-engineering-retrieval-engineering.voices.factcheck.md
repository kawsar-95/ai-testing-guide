# Voice fact-check: Retrieval Engineering (2026-10-28)

Page: `content/ai-engineering/retrieval-engineering.mdx`. I did not write this page or its voices.

Method: I read the 5 `<Voices>` blocks (the "Key words" section has no voices). For each `<Layman>` and `<Bangla>` panel I compared every sentence with the `<Technical>` panel of the same block. FAIL rules: a fact, number, name, example or cite that Technical does not give; a dropped warning or hedge; a wrong or misleading statement; wrong Bangla; English names (code, product, parameter) not kept in English; the reader not addressed with আপনি. An omission that loses no warning is not a FAIL.

Automated checks:

- Every `<Cite n>` in Layman and Bangla is cited in Technical of the same block: PASS.
- No heading in a Layman or Bangla panel, no তুমি or তোমার: PASS.
- Product, parameter and code names stay in English in Bangla (`rank_constant`, `alpha=1`, `must`, `should`, `must_not`, `max_num_results`, `score_threshold`, `rewrite_query=true`, `product_version`, BM25, RRF, Qdrant, Weaviate, Elasticsearch, Pinecone, OpenAI, Anthropic): PASS.
- `node --test tests/voice-source.test.ts tests/ai-engineering.test.ts`: pass.

| # | Section | Voice | What the panel says (checked against Technical) | Verdict | Reason |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | Retrieval limits the answer; wrong or empty without the right chunk; embedding vs BM25 [1]; TS-999 example [1]; combine, rerank, filter | PASS | Same facts and cites. "A strong model cannot fix this" restates "even with a strong model". |
| 2 | In plain words | Bangla | Same facts in Bangla | PASS | Same facts and cites. |
| 3 | How it works | Layman | Hybrid search [3]; Anthropic flow [1]; RRF no tuning, formula, k = 60 [2]; alpha [3]; reranker, 150 to 20, 67%, latency [5][1]; filters, AND/OR/NOT, index [4]; Top-K 10/50, 20 vs 10/5, threshold, rewrite [6][1] | PASS | Same facts and numbers. The sentence about `a` winning and the BD/staff sentence restate the code blocks of Technical, not new facts. |
| 4 | How it works | Bangla | Same facts in Bangla | PASS | Same facts, numbers, and cites. |
| 5 | A real-life example | Layman | Same 4 steps, ranks 9 and 1, 50/10, version 3, 100 questions, Anthropic top-20 measure | PASS | Same scenario and cites. |
| 6 | A real-life example | Bangla | Same in Bangla | PASS | Same scenario and cites. |
| 7 | Common mistakes | Layman | Six mistakes, before the Technical fix ("use different scales") | FAIL | Repeated the Technical claim that Elastic does not support (Technical FAIL 29). Must change with Technical. |
| 8 | Common mistakes | Bangla | Same, "আলাদা স্কেলে থাকে" | FAIL | Same as row 7. |
| 9 | Common mistakes | Layman, Bangla | Filtering-after-search bullet | FAIL | The "Tutorial's own view" label covered only the advice, as in Technical (Technical FAIL 32). Must move with Technical. |
| 10 | What a tester can check | Layman | Same 6 checks, marked as the tutorial's own advice | PASS | Same advice. The label is kept. |
| 11 | What a tester can check | Bangla | Same in Bangla, marked as the tutorial's own advice | PASS | Same advice. |

## Re-check (after the fixes)

| # | Section | Voice | Changed text | Verdict | Reason |
|---|---|---|---|---|---|
| 7 | Common mistakes | Layman | "BM25 and vector search give different kinds of scores. Rank fusion uses the place in the list, not the raw score. So the two scores do not need to be related [2]." | PASS | Matches the new Technical sentence. |
| 8 | Common mistakes | Bangla | "BM25 আর ভেক্টর সার্চ আলাদা ধরনের স্কোর দেয়। Rank fusion তালিকার অবস্থান ব্যবহার করে, কাঁচা স্কোর নয়। তাই দুটো স্কোরের মধ্যে সম্পর্ক থাকার দরকার নেই [2]।" | PASS | Matches the new Technical sentence. Same wording as the RRF sentence of "How it works". |
| 9 | Common mistakes | Layman, Bangla | The label "Tutorial's own view:" / "টিউটোরিয়ালের নিজের মত:" now starts the bullet | PASS | Matches Technical. |

Open FAILs: 0
