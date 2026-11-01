# Research notes: AI/ML Testing, DeepEval: Pytest for LLMs

Page: `content/ai-ml-testing/deepeval-pytest.mdx`. Data: `scripts/ai_ml_testing_pages_p1c.py`. Accessed 2026-11-02.

## Sources

| ID | Title | Publisher | URL | Accessed |
|---|---|---|---|---|
| S1 | Getting started | DeepEval (Confident AI docs) | https://docs.confident-ai.com/ (301 to https://deepeval.com/; content read at https://deepeval.com/docs/getting-started) | 2026-11-02 |
| S2 | Metrics | DeepEval (Confident AI docs) | https://docs.confident-ai.com/docs/metrics/introduction (301 to the deepeval.com home page; content read at https://deepeval.com/docs/metrics-introduction and the metric pages below) | 2026-11-02 |
| S3 | Challenges in evaluating AI systems (library title is wrong) | Anthropic (Engineering) | https://www.anthropic.com/engineering/evaluating-ai-systems | 2026-11-02 |

Metric pages read for S2: https://deepeval.com/docs/metrics-faithfulness, https://deepeval.com/docs/metrics-hallucination, https://deepeval.com/docs/metrics-answer-relevancy. Also read (no library entry): https://deepeval.com/docs/evaluation-unit-testing-in-ci-cd and https://deepeval.com/docs/evaluation-flags-and-configs.

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| C1 | DeepEval plugs into Pytest; `deepeval test run` runs eval files like `pytest`. | S1 | "`deepeval` plugs into Pytest" |
| C2 | Example uses `assert_test(test_case, [metric])`, `LLMTestCase`, `GEval` with `expected_output`. | S1 | example code |
| C3 | Run with `deepeval test run test_example.py`. | S1 | command |
| C4 | Runs locally; results appear on Confident AI if logged in. | S1 | "If you're logged in, they also appear on Confident AI" |
| C5 | Score between 0 and 1. | S2 | "score between 0-1" |
| C6 | Default threshold 0.5 for all metrics. | S2 | "defaulted to `0.5` for all metrics" |
| C7 | Every metric gives a reason. | S2 | "give a `reason` alongside its score" |
| C8 | Reference-based metrics need ground truth; referenceless work without labeled data. | S2 | "work without labeled data" |
| C9 | Almost all predefined metrics are LLM-as-a-judge. | S2 | metrics introduction |
| C10 | AnswerRelevancy is referenceless; needs `input`, `actual_output`. | S2 | "It's referenceless" |
| C11 | Faithfulness is referenceless; reads `retrieval_context`; extracts claims, then classifies each. | S2 | "truthful claims divided by total claims" (paraphrase of formula) |
| C12 | Hallucination is reference-based; needs `context` (ground truth). | S2 | "Higher is better" / required `context` |
| C13 | `evaluate()` does not fail anything; plain `pytest` "highly not recommended". | CI docs (not in library) | "collects results without failing anything" |
| C14 | Do not overinterpret eval scores. | S3 | "overinterpret the quantitative score" |
