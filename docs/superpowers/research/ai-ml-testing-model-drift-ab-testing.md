# Research notes: AI/ML Testing, Model Drift and A/B Testing

Page: `content/ai-ml-testing/model-drift-ab-testing.mdx`. Accessed 2026-11-02. Source text was fetched and searched on this date.

## Sources

| ID | Key | Title | Publisher | URL |
|---|---|---|---|---|
| S1 | `langfuse-eval` | Evaluation methods | Langfuse (docs) | https://langfuse.com/docs/evaluation/evaluation-methods |
| S2 | `selfconsistency` | Self-Consistency Improves Chain of Thought Reasoning | arXiv | https://arxiv.org/abs/2203.11171 |

## Claims

| # | Claim | Source | Evidence |
|---|---|---|---|
| C1 | Self-consistency "gives you the noise floor for free"; "the noise floor comes from the self-consistency measurement" (4 cites). | 3 | The paper (Wang et al.) samples a diverse set of reasoning paths from one model and aggregates them to improve accuracy; it does not describe a noise floor for evaluation. Repeating the control run to measure spread is sound practice but the tutorial's own, so it is now uncited, with the paper cited only for what it does (sampling several paths from one model). |
| C2 | Phoenix evaluation page cited for "guardrail metric in the A/B test" (Mistake 6). | 2 | The Phoenix page does not discuss A/B tests or guardrail metrics. Cite removed and the source dropped from this page. |
| C3 | `bucket = hash(user_id) % 100` for stable routing. | none | Python's built-in `hash()` of a str is salted per process (PYTHONHASHSEED), so a user would move arms between processes. Replaced with `hashlib.sha256(...)` in three panels. |
| C4 | `baseline.for(category).mean()`. | none | `for` is a Python keyword, so the test was a SyntaxError. Renamed `for_category` in three panels. |
| C5 | `control_refusal_rate` used but never defined; `wasserstein_distance` used without an import. | none | Now `results["control_refusal_rate"]` and `from scipy.stats import wasserstein_distance`. |
| C6 | Scores stored in the evaluation store so the comparison is against history. | 1 | Langfuse evaluation methods store scores against traces. |
| C7 | Drift kinds, distribution-vs-mean advice, decision rule before the test. | none | The tutorial's own guidance. |
