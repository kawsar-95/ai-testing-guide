# Fact check: AI/ML Testing, Production Observability and Alerting

Page: `content/ai-ml-testing/production-observability.mdx`. Date: 2026-11-02. Each source was opened and searched on this date.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://langfuse.com/docs | yes | Langfuse (docs) |
| 2 | https://arize.com/docs/phoenix/evaluation/llm-evals | yes | Arize Phoenix (docs) |
| 3 | https://langfuse.com/docs/evaluation/evaluation-methods | yes | Langfuse (docs) |
| 4 | https://docs.langchain.com/langsmith/observability-concepts | yes | LangSmith (docs) |

## Claims (Technical text)

| # | Claim | Cite | Verdict | Evidence |
|---|---|---|---|---|
| 1 | Langfuse captures traces with latency and cost; LangSmith describes runs and traces. | 1, 4 | PASS | Langfuse intro: "Log traces ... Understand cost and latency". LangSmith: runs, traces, threads. |
| 2 | Langfuse documents evaluation methods; production traces can be scored. | 3 | PASS | Langfuse: "To score live production traces with an evaluator and a rule, start with Evaluate Production Traffic." |
| 3 | "Arize Phoenix documents the eval-in-production setup" (cite: Phoenix intro). | 2 | FAIL, fixed | The intro does not document it. The Phoenix evaluation page says "You can run evaluations on traces from production, on experiment results, or on any dataset." Reworded and cite repointed. |
| 4 | Stratified sampling advice cited to Phoenix; canary and stored score history cited to Langfuse (3 places). | 2, 3 | FAIL, fixed | Neither source discusses stratified sampling or canary datasets; both are the tutorial's own advice. Cites removed. |
| 5 | "Four alerts ... the fourth alert is a silent model update" and "the canary is the fourth alert". | none | FAIL, fixed | Four alerts were already listed, so the canary was the fifth. Reworded to "one more alert" / "that extra alert" in three panels. |
| 6 | `@observe(name=...)` decorator with no import shown. | 1 | FAIL, fixed | It is Langfuse's decorator; code now shows `# from langfuse import observe`. |
| 7 | `sample_traffic` took `pool[:take]` (the first N) while the prose says to sample. | none | FAIL, fixed | The first N of a time-ordered pool is a biased sample; now `random.sample(pool, take)` with `import random`. Note: `take` can exceed `len(pool)` only when `rate` is above 1, which the default is not. |
| 8 | Alert thresholds, windows, owners; canary test margins (-0.02, +0.01). | none | PASS | Illustrative values; the page says thresholds come from the baseline. |

Open FAILs: 0
