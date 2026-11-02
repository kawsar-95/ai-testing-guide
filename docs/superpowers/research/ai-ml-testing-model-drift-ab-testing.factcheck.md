# Fact check: AI/ML Testing, Model Drift and A/B Testing

Page: `content/ai-ml-testing/model-drift-ab-testing.mdx`. Date: 2026-11-02. Each source was opened and searched on this date.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://langfuse.com/docs/evaluation/evaluation-methods | yes | Langfuse (docs) |
| 2 | https://arxiv.org/abs/2203.11171 | yes | arXiv |

## Claims (Technical text)

| # | Claim | Cite | Verdict | Evidence |
|---|---|---|---|---|
| 1 | Self-consistency "gives you the noise floor for free"; "the noise floor comes from the self-consistency measurement" (4 cites). | 3 | FAIL, fixed | The paper (Wang et al.) samples a diverse set of reasoning paths from one model and aggregates them to improve accuracy; it does not describe a noise floor for evaluation. Repeating the control run to measure spread is sound practice but the tutorial's own, so it is now uncited, with the paper cited only for what it does (sampling several paths from one model). |
| 2 | Phoenix evaluation page cited for "guardrail metric in the A/B test" (Mistake 6). | 2 | FAIL, fixed | The Phoenix page does not discuss A/B tests or guardrail metrics. Cite removed and the source dropped from this page. |
| 3 | `bucket = hash(user_id) % 100` for stable routing. | none | FAIL, fixed | Python's built-in `hash()` of a str is salted per process (PYTHONHASHSEED), so a user would move arms between processes. Replaced with `hashlib.sha256(...)` in three panels. |
| 4 | `baseline.for(category).mean()`. | none | FAIL, fixed | `for` is a Python keyword, so the test was a SyntaxError. Renamed `for_category` in three panels. |
| 5 | `control_refusal_rate` used but never defined; `wasserstein_distance` used without an import. | none | FAIL, fixed | Now `results["control_refusal_rate"]` and `from scipy.stats import wasserstein_distance`. |
| 6 | Scores stored in the evaluation store so the comparison is against history. | 1 | PASS | Langfuse evaluation methods store scores against traces. |
| 7 | Drift kinds, distribution-vs-mean advice, decision rule before the test. | none | PASS | The tutorial's own guidance. |

Open FAILs: 0
