# Research notes: AI/ML Testing, RAG Testing Fundamentals

Page: `content/ai-ml-testing/rag-testing-basics.mdx` (data in `scripts/ai_ml_testing_pages_p1d.py`). Accessed 2026-11-02.

## Sources

| ID | Title | Publisher | URL | Accessed |
|---|---|---|---|---|
| S1 | Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks | arXiv (paper by its authors) | https://arxiv.org/abs/2005.11401 | 2026-11-02 |
| S2 | What is Ragas? | Ragas (docs) | https://docs.ragas.io/en/stable/ | 2026-11-02 |
| S3 | Available metrics | Ragas (docs) | https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/ | 2026-11-02 |

Also read to check the code (not cited): the Ragas Context Precision and Faithfulness pages, linked from S3 (`.../available_metrics/context_precision/`, `.../available_metrics/faithfulness/`).

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| C1 | RAG combines a model with retrieved passages (non-parametric memory). | S1 | Abstract: parametric memory plus "a dense vector index of Wikipedia" |
| C2 | RAG output is more factual than a parametric-only baseline. | S1 | "more specific, diverse and factual language" |
| C3 | Ragas aims to move from vibe checks to systematic evaluation. | S2 | "move from "vibe checks" to systematic evaluation loops" |
| C4 | Ragas RAG metrics: Context Precision, Context Recall, Response Relevancy, Faithfulness (and others). | S3 | Category "Retrieval Augmented Generation" lists these names |
| C5 | "Context Relevance" in Ragas is an Nvidia metric, not the RAG list. | S3 | Listed under "Nvidia Metrics" |
| C6 | Context Precision: ranks relevant chunks above irrelevant ones. | S3 (linked page) | "rank relevant chunks higher than irrelevant ones" |
| C7 | Faithfulness: consistency of the response with the retrieved context, 0 to 1. | S3 (linked page) | "how factually consistent a response is with the retrieved context" |
| C8 | Current API: `from ragas.metrics.collections import Faithfulness`, `Faithfulness(llm=...)`, `.score()` / `.ascore()`, `result.value`. | S3 (linked page) | Code sample; "you can use `.score()`" |
| C9 | The `ragas.metrics` API is legacy (deprecated in 0.4, removed in 1.0). | S3 (linked page) | "deprecated in version 0.4 and removed in version 1.0" |
