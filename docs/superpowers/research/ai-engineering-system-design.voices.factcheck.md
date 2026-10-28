# Voice fact-check: System Design for AI (2026-10-28)

Page: `content/ai-engineering/system-design.mdx`. I did not write this page or its voices.

Method: I read the 5 `<Voices>` blocks (the "Key words" section has no voices). For each `<Layman>` and `<Bangla>` panel I compared every sentence with the `<Technical>` panel of the same block. FAIL rules: a fact, number, name, example, or cite that Technical does not give; a lost warning or hedge; a wrong statement; a Bangla panel that puts code or product names in Bangla letters or does not use আপনি. An omission is not a FAIL.

Automated checks (script, all blocks):

- Every `<Cite n>` in Layman and Bangla is cited in Technical of the same block: PASS for 5 of 5.
- No তুমি in any panel: PASS.
- API, LLM, RAG, FAQ, router, batch API, Message Batches API, staging, stack trace, edge case, and 429 stay in Latin letters in Bangla: PASS.

Notes:

- The `text` diagram of Technical is restated in words in Layman and Bangla: API with rate limit, auth, and logging; a router (cheap model or rules) to a cached FAQ answer; the RAG path retrieve, rerank, LLM, checks; read-only tools; offline pipeline to a vector index; nightly jobs on the batch API. All agree with the diagram, and both keep the "tutorial's own view" marker.
- Numbers match: 2 shapes, 5 minutes, 1 hour, 50%, 24 hours, 20,000 articles, 50,000 users, 12 other tools, 3 article links, 20 answers.

| # | Section | Voice | What the panel says (checked against Technical) | Verdict | Reason |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | Simplest solution; maybe no agent; better results for more cost and time; augmented LLM; workflow vs agent; workflows predictable for well-defined tasks [1] | PASS | Same facts and cites. The table becomes a list. |
| 2 | In plain words | Bangla | Same facts in Bangla | PASS | "ভালো ফলাফলের বদলে বেশি latency আর খরচ নেয়" keeps the trade-off. |
| 3 | How it works | Layman | Diagram in words; RAG [2]; routing [1]; caching 5 min, 1 h [3]; batch 50%, 24 h [4]; limits per minute [6]; degraded responses, errors, per-customer quotas [5]; AI-app degraded example as tutorial's view | PASS | Same facts and cites. "fewer documents" for "fewer retrieved chunks" is a plain-word restatement. |
| 4 | How it works | Bangla | Same facts in Bangla | PASS | Same facts and cites; the tutorial-view markers stay. |
| 5 | A real-life example | Layman | Same scenario and 5 steps, cites 1 to 6 | PASS | Same facts and cites. |
| 6 | A real-life example | Bangla | Same scenario and 5 steps | PASS | Same facts and cites. |
| 7 | Common mistakes | Layman | Same 6 mistakes, cites 1 to 5 | PASS | The overload advice keeps "The tutorial's own view". |
| 8 | Common mistakes | Bangla | Same 6 mistakes | PASS | The warning about errors under load and the tutorial-view marker stay. |
| 9 | What a tester can check | Layman | Same 6 tips, marked as the tutorial's own advice | PASS | No cites, as in Technical. "fills up first" restates "saturates first". |
| 10 | What a tester can check | Bangla | Same 6 tips, marked | PASS | Imperatives use the আপনি form (চান, করুন, দিন). |

## Re-check after the Technical fixes

The Technical fix of claim 24 (fact-check report) moved the "tutorial's own view" marker to the start of the AI-app degraded example. Layman and Bangla got the same change, so rows 3 and 4 stay PASS. The new `<Cite n={5} />` of claim 20 is in Technical only; the voices do not need it.

Open FAILs: 0
