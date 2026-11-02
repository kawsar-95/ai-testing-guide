# Research notes: AI/ML Testing, Chunking and Embedding Strategy Testing

Page: `content/ai-ml-testing/chunking-embedding-testing.mdx`. Accessed 2026-11-02. Source text was fetched and searched on this date.

## Sources

| ID | Key | Title | Publisher | URL |
|---|---|---|---|---|
| S1 | `chroma-intro` | Introduction | Chroma (docs) | https://docs.trychroma.com/ |
| S2 | `mteb` | MTEB: Massive Text Embedding Benchmark | arXiv | https://arxiv.org/abs/2210.07316 |
| S3 | `chroma-query` | Querying collections | Chroma (docs) | https://docs.trychroma.com/docs/querying-collections |
| S4 | `ragas-metrics` | Available metrics | Ragas (docs) | https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/ |

## Claims

| # | Claim | Source | Evidence |
|---|---|---|---|
| C1 | MTEB exists to compare embedding models; it reports results across many datasets and task types. | 2 | Abstract: "MTEB spans 8 embedding tasks covering a total of 58 datasets and 112 languages ... benchmarking of 33 models". |
| C2 | Chroma is the easiest database to run the benchmark against: same process, no server. | 1 | Chroma's clients page documents an in-memory (ephemeral) client and a persistent client, so "can run in the same process without a separate server" is supported; "easiest" is a superlative with no source. Now "an easy database ... can run in the same process (an in-memory or persistent client) without a separate server". The Layman and Bangla panels were missing this sentence and its cite; added. |
| C3 | `collection.query(query_texts=, n_results=)["ids"][0]`, `get_or_create_collection(..., embedding_function=)`, `collection.add(ids, documents, metadatas)`. | 3 | Query page: `ids` are always returned; `n_results` and `query_texts` documented. Manage-collections shows `embedding_function`. |
| C4 | "The RAG metrics give you the numbers to compare" while the page defines "context precision@k" as the fraction of retrieved chunks that are relevant. | 4 | Ragas's Context Precision/Recall are rank-aware (see rag-testing-basics factcheck); the page computes classical precision@k and recall@k from chunk ids. Renamed to precision@k / recall@k throughout (3 panels) and the sentence now says Ragas defines related, rank-aware metrics. |
| C5 | "The typical result" table of precision, recall, nDCG for four chunk settings. | none | Invented numbers presented as typical. Now labeled "an illustrative result (invented numbers that show the shape, not measured data)" in all panels. |
| C6 | Regression test asserts "it does not assert an absolute score" but the code asserted `chosen["ndcg"] > 0.6`. | none | Absolute assertion removed from the code in all three panels; the test now only compares against alternatives, as the prose says. |
| C7 | Mistake 6: the model that wins in English may lose in Bengali (cite MTEB). | 2 | The abstract does not say that. It says MTEB spans 112 languages and "no particular text embedding method dominates across all tasks". Prose now keeps the tutorial's point uncited and cites only those two facts. |
| C8 | Bi-encoder vs cross-encoder definitions; the ground-truth method; sweep code. | none | Standard definitions and the tutorial's own design; helper names (`split`, `embedding_fn`, `ndcg_at_k`) are the tutorial's. |
