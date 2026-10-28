# Voices fact-check: content/ai-engineering/vector-databases.mdx

Checked 2026-10-28 by an agent that did not write the voices. Each `<Layman>` and `<Bangla>` panel was compared with the `<Technical>` panel of the same block. `node --test tests/voice-source.test.ts` passes.

| # | Section | Voice | What the panel says (checked against Technical) | Verdict | Reason |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | Embedding, distance [1]; points in space [3]; vector database, search names [3]; products [2][3][4] | PASS | "List of numbers" drops "floating-point"; no fact changes. |
| 2 | In plain words | Bangla | Same | PASS | Search names stay in English. |
| 3 | How it works | Layman | 1536 [1]; Voyage AI [7]; `vector(1536)` [2]; Qdrant [4]; namespace [3]; 3 operators [2]; cosine and length 1 [1]; exact and approximate [2]; HNSW, `ef_search`, IVFFlat [5][2]; filters, 0.8.0 [2] | PASS | "Finds every true match" restates "perfect recall". |
| 4 | How it works | Bangla | Same | PASS | Operators, version, and names stay in English. |
| 5 | A real-life example | Layman | pgvector next to app data [2]; HNSW; 2 problems [2]; split data [6] | PASS | Same facts and cites. |
| 6 | A real-life example | Bangla | Same | PASS | আপনি is not needed (no address to the reader). |
| 7 | Common mistakes | Layman | 6 mistakes; "tutorial's own view" kept | FAIL, fixed | First check: the operator bullet had "A query must use the matching operator", the same unsupported claim as Technical row 27 of the fact-check. |
| 8 | Common mistakes | Bangla | Same | FAIL, fixed | Same as row 7 ("কুয়েরিকে মিলে যাওয়া অপারেটর ব্যবহার করতে হবে"). |
| 9 | What a tester can check | Layman | "Tutorial's own advice" and 7 ideas | PASS | "Customer isolation" restates "Tenant isolation". |
| 10 | What a tester can check | Bangla | Same | PASS | আপনি imperatives. |

## Re-check

- Rows 7 and 8: both now say that in pgvector you add an index for each distance function (for example `vector_cosine_ops`), and that the query must `ORDER BY` a distance operator, not an expression, in ascending order, with `<Cite n={2} />`, as Technical. PASS.

FAILs found: 2. Fixed: 2.

Open FAILs: 0
