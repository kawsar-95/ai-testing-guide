# Research notes: AI/ML Testing, AI Quality Metrics and Reporting

Page: `content/ai-ml-testing/ai-quality-metrics.mdx` (data: `scripts/ai_ml_testing_pages_p1g.py`). Accessed 2026-11-02.

## Sources

| ID | Key | Title | Publisher | URL | Accessed |
|---|---|---|---|---|---|
| S1 | `deepeval-metrics` | Metrics | DeepEval docs | https://deepeval.com/docs/metrics-introduction | 2026-11-02 (URL already verified in two earlier factchecks) |
| S2 | `ragas-metrics` | Available metrics | Ragas (docs) | https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/ | 2026-11-02 |
| S3 | `anthropic-tokens` | Token counting | Anthropic (Claude API docs) | https://platform.claude.com/docs/en/build-with-claude/token-counting | 2026-11-02 |

## Claims

| # | Claim | Source | Quote / evidence |
|---|---|---|---|
| C1 | DeepEval has Faithfulness and Answer Relevancy as generator-focused RAG metrics. | S1 | "RAG metrics focus on the retriever and generator components independently. Retriever: Contextual Relevancy Contextual Precision Contextual Recall Generator: Answer Relevancy Faithfulness" |
| C2 | Ragas has a Faithfulness metric. | S2 | "Retrieval Augmented Generation ... Noise Sensitivity Response Relevancy Faithfulness" |
| C3 | Ragas's current relevancy metric is named "Response Relevancy", not "Answer Relevancy". | S2 | Same list as C2; a full-text search of the fetched page for "answer relevancy" (case-insensitive) returns no match, while "Response Relevancy" is listed. |
| C4 | Anthropic has a dedicated "Token counting" docs page and a `count_tokens` endpoint. | S3 | Page title "Token counting - Claude Platform Docs"; body includes "Count tokens in a Message POST /v1/messages/count_tokens Count the number of tokens in a Message" and references to "input tokens" / "output tokens" framing used for pricing. |
| C5 | Cost per session = sum of (input_tokens * input_price + output_tokens * output_price) across every call in a conversation. | S3 | Consistent with Anthropic's documented input/output token split and the standard per-1K-token pricing model; the specific formula is the tutorial's own aggregation logic, not a quoted Anthropic formula, and the page's example prices are explicitly marked "illustrative, check current pricing". |
| C6 | Latency P95 needs the full distribution, not the average. | none | Standard testing/SRE practice, not attributed to a specific source. |

## Correction made during this pass

The original "In plain words" text said "Hallucination rate, faithfulness, and answer relevancy come from DeepEval's metric set and Ragas's RAG-specific metrics directly", citing both tools for all three names as if they shared identical terminology. Ragas's current docs (C3) name the relevancy metric "Response Relevancy", not "Answer Relevancy" (DeepEval's name, confirmed in C1). Fixed to attribute "answer relevancy" specifically to DeepEval, keep "faithfulness" as genuinely shared (both tools use that exact name), and add one clarifying sentence that Ragas's current docs use "Response Relevancy" for the same concept.

Not changed: "hallucination rate" is treated as DeepEval's named metric throughout (consistent with the existing, previously-verified `ai-ml-testing-hallucination-detection.md`, which treats Ragas's contribution to hallucination detection as its Faithfulness metric, not a separately-named "Hallucination" metric).
