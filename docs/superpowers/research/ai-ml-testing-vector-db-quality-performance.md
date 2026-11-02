# Research notes: AI/ML Testing, Vector Database Quality and Performance Testing

Page: `content/ai-ml-testing/vector-db-quality-performance.mdx`. Accessed 2026-11-02. Source text was fetched and searched on this date.

## Sources

| ID | Key | Title | Publisher | URL |
|---|---|---|---|---|
| S1 | `qdrant-search` | Search | Qdrant (docs) | https://qdrant.tech/documentation/search/search/ |
| S2 | `ndcg` | Discounted cumulative gain | Wikipedia | https://en.wikipedia.org/wiki/Discounted_cumulative_gain |
| S3 | `chroma-query` | Querying collections | Chroma (docs) | https://docs.trychroma.com/docs/querying-collections |
| S4 | `locust` | Locust documentation | Locust | https://docs.locust.io/en/stable/ |

## Claims

| # | Claim | Source | Evidence |
|---|---|---|---|
| C1 | nDCG rewards a relevant result near the top and discounts the same result further down. | 2 | Wikipedia: "highly relevant documents appearing lower in a search result list should be penalized, as the graded relevance value is reduced logarithmically proportional to the position". |
| C2 | Locust drives the load. | 4 | Official Locust documentation (load generation, request rate, distributed generation). |
| C3 | Chroma query interface and a Qdrant search return comparable results. | 3, 1 | Chroma Query page; Qdrant Search page (URL now the current one, see vector-db-basics factcheck). |
| C4 | The load test "measures quality and speed together" at concurrency 1/10/50. | none | The code looped serially and never used `concurrency`, and recall was computed on the last query only. Now a `ThreadPoolExecutor(max_workers=concurrency)` runs 200 queries, p95 comes from all latencies, and recall is the mean over all queries. |
| C5 | "A configuration that recalled 95% of ten thousand documents can recall 70% of a million." | none | Invented numbers presented as fact. Now "For example, a configuration might ... (illustrative numbers, not a measurement)". |
| C6 | "The metrics come from the RAG toolkit: context precision, context recall ..." cited to the nDCG article. | 2 | The cite supports nDCG only, and the page computes precision@k/recall@k. Reworded to "the retrieval metrics from the chunking benchmark (precision@k, recall@k, nDCG@k)". |
| C7 | A filter matching nothing "silently returns the unfiltered top-k" (the classic bug). | none | Chroma does not document that behavior; the failure is application code that retries without the filter. Rewritten in the closing line, Mistake 4, and Bangla panels; the test still asserts the database returns `[]`. |
| C8 | Drift "usually for the worse and never with a clear signal"; Mistake 6 cited to nDCG. | 2 | Absolutes softened ("often", "without a clear signal"); the cite on Mistake 6 did not support the sentence and was removed (nDCG is still cited in plain words). |
| C9 | MRR definition; index-lag test; near-duplicate test. | none | Standard definition and the tutorial's own tests. |
