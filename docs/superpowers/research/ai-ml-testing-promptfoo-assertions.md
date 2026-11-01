# Research notes: AI/ML Testing, Advanced Assertions and LLM-as-Judge

Page: `content/ai-ml-testing/promptfoo-assertions.mdx`. Data: `scripts/ai_ml_testing_pages_p1c.py`. Accessed 2026-11-02.

## Sources

| ID | Title | Publisher | URL | Accessed |
|---|---|---|---|---|
| S1 | Assertions | Promptfoo (docs) | https://www.promptfoo.dev/docs/configuration/expected-outputs/ | 2026-11-02 |
| S2 | Configuration reference | Promptfoo (docs) | https://www.promptfoo.dev/docs/configuration/reference/ | 2026-11-02 |
| S3 | Challenges in evaluating AI systems (library title is wrong) | Anthropic (Engineering) | https://www.anthropic.com/engineering/evaluating-ai-systems | 2026-11-02 |

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| C1 | Two groups: deterministic and model-assisted. | S1 | "Model-assisted eval metrics" |
| C2 | Deterministic: `equals`, `contains`, `regex`, `starts-with`, `contains-any`, `contains-all`, `is-json`, `javascript`, `python`. | S1 | Deterministic table |
| C3 | `not-` negates any type. | S1 | "Every test type can be negated by prepending `not-`" |
| C4 | Model-assisted: `similar`, `llm-rubric`, `model-graded-closedqa`, `factuality`, `answer-relevance` (not `answer-relevancy`). | S1 | Model-assisted table |
| C5 | `similar` uses embeddings and cosine similarity above a threshold. | S1 | "Embeddings and cosine similarity are above a threshold" |
| C6 | `provider` can be set per assertion. | S1 | "Some assertions (similarity, llm-rubric, model-graded-*) require an LLM provider" |
| C7 | `rubricPrompt` overrides the grader prompt; the page does not describe how the result is parsed. | S1 | "Model-graded LLM prompt" |
| C8 | Multi-line JavaScript needs `return`. | S1 | "Multiline JavaScript assertions require an explicit `return`" |
| C9 | `threshold` applies to types such as `similar`, `javascript`. | S2 | "applicable only to certain types such as similar, cost, javascript, python" |
| C10 | Changing answer-option labels shifted accuracy about 5%. | S3 | "can lead to a ~5% change in accuracy on the evaluation" |
