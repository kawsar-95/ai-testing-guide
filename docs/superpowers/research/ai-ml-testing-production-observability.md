# Research notes: AI/ML Testing, Production Observability and Alerting

Page: `content/ai-ml-testing/production-observability.mdx`. Accessed 2026-11-02. Source text was fetched and searched on this date.

## Sources

| ID | Key | Title | Publisher | URL |
|---|---|---|---|---|
| S1 | `langfuse-intro` | Introduction | Langfuse (docs) | https://langfuse.com/docs |
| S2 | `phoenix-eval` | Evaluation (replaces phoenix-intro on this page) | Arize Phoenix (docs) | https://arize.com/docs/phoenix/evaluation/llm-evals |
| S3 | `langfuse-eval` | Evaluation methods | Langfuse (docs) | https://langfuse.com/docs/evaluation/evaluation-methods |
| S4 | `langsmith-trace` | Observability concepts | LangSmith (docs) | https://docs.langchain.com/langsmith/observability-concepts |

## Claims

| # | Claim | Source | Evidence |
|---|---|---|---|
| C1 | Langfuse captures traces with latency and cost; LangSmith describes runs and traces. | 1, 4 | Langfuse intro: "Log traces ... Understand cost and latency". LangSmith: runs, traces, threads. |
| C2 | Langfuse documents evaluation methods; production traces can be scored. | 3 | Langfuse: "To score live production traces with an evaluator and a rule, start with Evaluate Production Traffic." |
| C3 | "Arize Phoenix documents the eval-in-production setup" (cite: Phoenix intro). | 2 | The intro does not document it. The Phoenix evaluation page says "You can run evaluations on traces from production, on experiment results, or on any dataset." Reworded and cite repointed. |
| C4 | Stratified sampling advice cited to Phoenix; canary and stored score history cited to Langfuse (3 places). | 2, 3 | Neither source discusses stratified sampling or canary datasets; both are the tutorial's own advice. Cites removed. |
| C5 | "Four alerts ... the fourth alert is a silent model update" and "the canary is the fourth alert". | none | Four alerts were already listed, so the canary was the fifth. Reworded to "one more alert" / "that extra alert" in three panels. |
| C6 | `@observe(name=...)` decorator with no import shown. | 1 | It is Langfuse's decorator; code now shows `# from langfuse import observe`. |
| C7 | `sample_traffic` took `pool[:take]` (the first N) while the prose says to sample. | none | The first N of a time-ordered pool is a biased sample; now `random.sample(pool, take)` with `import random`. Note: `take` can exceed `len(pool)` only when `rate` is above 1, which the default is not. |
| C8 | Alert thresholds, windows, owners; canary test margins (-0.02, +0.01). | none | Illustrative values; the page says thresholds come from the baseline. |
