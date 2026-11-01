# Fact check: AI/ML Testing, Advanced Assertions and LLM-as-Judge

Page: `content/ai-ml-testing/promptfoo-assertions.mdx`. Data: `scripts/ai_ml_testing_pages_p1c.py`. Checker: an agent that did not write the page. Date: 2026-11-02. Each source was opened on this date.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://www.promptfoo.dev/docs/configuration/expected-outputs/ | yes | Promptfoo docs |
| 2 | https://www.promptfoo.dev/docs/configuration/reference/ | yes | Promptfoo docs |
| 3 | https://www.anthropic.com/engineering/evaluating-ai-systems | yes | Anthropic engineering (title in the library is wrong) |

Each source 1–3 is cited at least one time.

## Claims (Technical text)

| # | Claim | Cite | Verdict | Quote from the source |
|---|---|---|---|---|
| 1 | "The assertion reference lists several families" | 1 | FAIL, fixed: the docs have two groups. Now "deterministic and model-assisted". | "Deterministic eval metrics" |
| 2 | Text assertions list. | 1 | PASS | Deterministic table; `not-` prefix |
| 3 | "Reference assertions … `javascript`, `python`, `similar`, `llm-rubric`, `model-graded-closedqa`, `factuality`, `answer-relevancy`" | 1 | FAIL, fixed: `javascript` and `python` are deterministic; the type is `answer-relevance`. Now "Code assertions" (deterministic) and "Model-assisted assertions". | Model-assisted table lists `answer-relevance` |
| 4 | `llm-rubric` uses a judge model to grade against your rubric. | 1 | PASS | "using a Language Model to grade output" |
| 5 | `similar` compares with a reference for semantic similarity. | 1 | PASS (now names embeddings, cosine, threshold) | "Embeddings and cosine similarity are above a threshold" |
| 6 | Drift fixes (binary rubric, pin judge, judge test) | 3 | FAIL, fixed: source 3 does not give these. Now labeled tutorial advice, no cite. | — |
| 7 | Judge pipeline (build, call, parse, record). | none | PASS (tutorial model) | — |
| 8 | "Step 3 is where most implementations get it wrong" | none | FAIL, fixed: unsupported count. Now "Step 3 is the weak point"; parsing rule labeled tutorial advice. | — |
| 9 | "The assertion reference documents how the rubric prompt is written and how the result is parsed" | 1 | FAIL, fixed: the page does not describe parsing. Now "replace the judge prompt with `rubricPrompt`, choose the judge with `provider`". | "Model-graded LLM prompt" |
| 10 | Drift table (vague rubric, model change, noise, low temperature) | none | PASS (labeled tutorial advice) | — |
| 11 | New: label changes moved accuracy about 5%. | 3 | PASS | "~5% change in accuracy on the evaluation" |
| 12 | Semantic similarity suits free-wording answers. | 1 (was 2) | FAIL, fixed: the config reference does not describe `similar`. Cite moved to source 1. | "Embeddings and cosine similarity" |
| 13 | YAML: `llm-rubric` with `provider:` | 1 | PASS | `provider` per assertion |
| 14 | `similar` with `threshold: 0.8` | 2 | PASS (cite added) | "applicable only to certain types such as similar" |
| 15 | Multi-line `javascript` with `return` | 1 | PASS (cite added) | "Multiline JavaScript assertions require an explicit `return`" |
| 16 | "catches three of the most common production complaints" | none | FAIL, fixed: unsupported. Now "covers three rules at once: length, sentence count, and a banned word". | — |
| 17 | Judge test Python code | none | PASS (illustration; `judge` and `RUBRIC` are the reader's own) | — |
| 18 | Mistake 1: "the judge decides differently each run" | 1 | FAIL, fixed: source 1 does not say this. Cite now on "`llm-rubric` grades against the rubric you write"; "can decide differently" is reasoning. | "LLM output matches a given rubric" |
| 19 | Mistake 3: "Pin the judge id in the config" | 1 | PASS (now "with the `provider` key of the assertion") | per-assertion `provider` |
| 20 | Mistake 6: "it costs money" | none | FAIL, fixed: no price talk. Now "it costs a model call". | — |
| 21 | Mistakes 2, 4, 5 | none | PASS (tutorial reasoning) | — |
| 22 | "What a tester can check" | none | PASS (Tutorial advice) | — |

Open FAILs: 0
