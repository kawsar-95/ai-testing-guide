# Fact check: AI/ML Testing, Vector Database Quality and Performance Testing

Page: `content/ai-ml-testing/vector-db-quality-performance.mdx`. Date: 2026-11-02. Each source was opened and searched on this date.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://qdrant.tech/documentation/search/search/ | yes | Qdrant (docs) |
| 2 | https://en.wikipedia.org/wiki/Discounted_cumulative_gain | yes | Wikipedia |
| 3 | https://docs.trychroma.com/docs/querying-collections | yes | Chroma (docs) |
| 4 | https://docs.locust.io/en/stable/ | yes | Locust |

## Claims (Technical text)

| # | Claim | Cite | Verdict | Evidence |
|---|---|---|---|---|
| 1 | nDCG rewards a relevant result near the top and discounts the same result further down. | 2 | PASS | Wikipedia: "highly relevant documents appearing lower in a search result list should be penalized, as the graded relevance value is reduced logarithmically proportional to the position". |
| 2 | Locust drives the load. | 4 | PASS | Official Locust documentation (load generation, request rate, distributed generation). |
| 3 | Chroma query interface and a Qdrant search return comparable results. | 3, 1 | PASS | Chroma Query page; Qdrant Search page (URL now the current one, see vector-db-basics factcheck). |
| 4 | The load test "measures quality and speed together" at concurrency 1/10/50. | none | FAIL, fixed | The code looped serially and never used `concurrency`, and recall was computed on the last query only. Now a `ThreadPoolExecutor(max_workers=concurrency)` runs 200 queries, p95 comes from all latencies, and recall is the mean over all queries. |
| 5 | "A configuration that recalled 95% of ten thousand documents can recall 70% of a million." | none | FAIL, fixed | Invented numbers presented as fact. Now "For example, a configuration might ... (illustrative numbers, not a measurement)". |
| 6 | "The metrics come from the RAG toolkit: context precision, context recall ..." cited to the nDCG article. | 2 | FAIL, fixed | The cite supports nDCG only, and the page computes precision@k/recall@k. Reworded to "the retrieval metrics from the chunking benchmark (precision@k, recall@k, nDCG@k)". |
| 7 | A filter matching nothing "silently returns the unfiltered top-k" (the classic bug). | none | FAIL, fixed | Chroma does not document that behavior; the failure is application code that retries without the filter. Rewritten in the closing line, Mistake 4, and Bangla panels; the test still asserts the database returns `[]`. |
| 8 | Drift "usually for the worse and never with a clear signal"; Mistake 6 cited to nDCG. | 2 | FAIL, fixed | Absolutes softened ("often", "without a clear signal"); the cite on Mistake 6 did not support the sentence and was removed (nDCG is still cited in plain words). |
| 9 | MRR definition; index-lag test; near-duplicate test. | none | PASS | Standard definition and the tutorial's own tests. |

Open FAILs: 0
