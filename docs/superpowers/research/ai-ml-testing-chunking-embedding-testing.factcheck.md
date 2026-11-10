# Fact check: AI/ML Testing, Chunking and Embedding Strategy Testing

Page: `content/ai-ml-testing/chunking-embedding-testing.mdx`. Date: 2026-11-02. Each source was opened and searched on this date.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://docs.trychroma.com/ | yes | Chroma (docs) |
| 2 | https://arxiv.org/abs/2210.07316 | yes | arXiv |
| 3 | https://docs.trychroma.com/docs/querying-collections | yes | Chroma (docs) |
| 4 | https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/ | yes | Ragas (docs) |

## Claims (Technical text)

| # | Claim | Cite | Verdict | Evidence |
|---|---|---|---|---|
| 1 | MTEB exists to compare embedding models; it reports results across many datasets and task types. | 2 | PASS | Abstract: "MTEB spans 8 embedding tasks covering a total of 58 datasets and 112 languages ... benchmarking of 33 models". |
| 2 | Chroma is the easiest database to run the benchmark against: same process, no server. | 1 | FAIL, fixed | Chroma's clients page documents an in-memory (ephemeral) client and a persistent client, so "can run in the same process without a separate server" is supported; "easiest" is a superlative with no source. Now "an easy database ... can run in the same process (an in-memory or persistent client) without a separate server". The Layman and Bangla panels were missing this sentence and its cite; added. |
| 3 | `collection.query(query_texts=, n_results=)["ids"][0]`, `get_or_create_collection(..., embedding_function=)`, `collection.add(ids, documents, metadatas)`. | 3 | PASS | Query page: `ids` are always returned; `n_results` and `query_texts` documented. Manage-collections shows `embedding_function`. |
| 4 | "The RAG metrics give you the numbers to compare" while the page defines "context precision@k" as the fraction of retrieved chunks that are relevant. | 4 | FAIL, fixed | Ragas's Context Precision/Recall are rank-aware (see rag-testing-basics factcheck); the page computes classical precision@k and recall@k from chunk ids. Renamed to precision@k / recall@k throughout (3 panels) and the sentence now says Ragas defines related, rank-aware metrics. |
| 5 | "The typical result" table of precision, recall, nDCG for four chunk settings. | none | FAIL, fixed | Invented numbers presented as typical. Now labeled "an illustrative result (invented numbers that show the shape, not measured data)" in all panels. |
| 6 | Regression test asserts "it does not assert an absolute score" but the code asserted `chosen["ndcg"] > 0.6`. | none | FAIL, fixed | Absolute assertion removed from the code in all three panels; the test now only compares against alternatives, as the prose says. |
| 7 | Mistake 6: the model that wins in English may lose in Bengali (cite MTEB). | 2 | FAIL, fixed | The abstract does not say that. It says MTEB spans 112 languages and "no particular text embedding method dominates across all tasks". Prose now keeps the tutorial's point uncited and cites only those two facts. |
| 8 | Bi-encoder vs cross-encoder definitions; the ground-truth method; sweep code. | none | PASS | Standard definitions and the tutorial's own design; helper names (`split`, `embedding_fn`, `ndcg_at_k`) are the tutorial's. |

Open FAILs at the end of the rounds above: 0

## Readability edit (2026-11-10)

The Technical text of 1 section was edited to lower the reading load: T1 = `## How it works`. The cognitive-load audit of 2026-11-10 had marked it HUGE: heavy on three or more of length, terms, sentence length, unbroken prose, and dense tables or code. The edit split long sentences, turned lists inside sentences into lists, put the main point first, and added bold run-in labels (and, in a few long sections, `###` headings). It was not meant to change any claim.

A script checked that every cite, number, code span, link, code block, table row, JSX tag, and content word of the old text is still in the new text. The edit was made by a `claude -p` session (Claude Sonnet, no tools). Checker: a fresh `claude -p` session (Claude Sonnet, no tools) that did not make the edit, comparing the old and the new text of each section. Because no claim changed, the claims above were not checked against the sources again. The Layman and Bangla panels did not change.

### FAILs

None.

### Table

| Target | Verdict | Notes |
|---|---|---|
| T1 | PASS | Only bold run-in labels were added and one sentence was split. Facts, code blocks, the table and the {{cite:mteb}} placement are unchanged, and each label matches its paragraph. |

Open FAILs: 0
