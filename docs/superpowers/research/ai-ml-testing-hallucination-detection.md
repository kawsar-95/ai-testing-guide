# Research notes: AI/ML Testing, Hallucination Detection

Page: `content/ai-ml-testing/hallucination-detection.mdx`. Data: `scripts/ai_ml_testing_pages_p1c.py`. Accessed 2026-11-02.

## Sources

| ID | Title | Publisher | URL | Accessed |
|---|---|---|---|---|
| S1 | SelfCheckGPT: Zero-Resource Black-Box Hallucination Detection for Generative Large Language Models (Manakul, Liusie, Gales) | arXiv | https://arxiv.org/abs/2303.08896 | 2026-11-02 |
| S2 | Available metrics | Ragas (docs) | https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/ (links to the Faithfulness page: https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/faithfulness/) | 2026-11-02 |
| S3 | Challenges in evaluating AI systems (library title is wrong) | Anthropic (Engineering) | https://www.anthropic.com/engineering/evaluating-ai-systems | 2026-11-02 |
| S4 | Metrics | DeepEval docs | https://docs.confident-ai.com/docs/metrics/introduction (redirects to deepeval.com; content read at https://deepeval.com/docs/metrics-faithfulness) | 2026-11-02 |

Removed: the library source `faithfulness` (https://arxiv.org/abs/2210.07229). That arXiv id is "Mass-Editing Memory in a Transformer" (MEMIT), not the faithfulness paper named in the library.

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| C1 | SelfCheckGPT is a sampling-based approach. | S1 | "a simple sampling-based approach" |
| C2 | It works without an external database. | S1 | "without an external database" |
| C3 | Consistent facts when the model knows; hallucinated facts diverge. | S1 | "similar and contain consistent facts" |
| C4 | It detects non-factual sentences. | S1 | abstract: identifies non-factual sentences |
| C5 | Ragas faithfulness: consistency of the response with the retrieved context. | S2 | "how factually consistent a response is with the retrieved context" |
| C6 | Steps: identify claims; check each against the retrieved context. | S2 | "Identify all the claims in the response." |
| C7 | Score = supported claims / total claims, 0 to 1. | S2 | "Total number of claims in the response" |
| C8 | DeepEval FaithfulnessMetric: extract claims, classify each against `retrieval_context`. | S4 | "truthful claims divided by total claims" (formula) |
| C9 | Do not overinterpret eval scores. | S3 | "overinterpret the quantitative score" |
