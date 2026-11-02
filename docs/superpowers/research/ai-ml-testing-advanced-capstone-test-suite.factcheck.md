# Fact check: AI/ML Testing, Advanced Capstone: The Test Suite

Page: `content/ai-ml-testing/advanced-capstone-test-suite.mdx`. Date: 2026-11-02. Each source was opened and searched on this date.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/ | yes | Ragas (docs) |
| 2 | https://dspy.ai/ | yes | Stanford NLP |
| 3 | https://docs.giskard.ai/oss/scan | yes | Giskard (docs) |

## Claims (Technical text)

| # | Claim | Cite | Verdict | Evidence |
|---|---|---|---|---|
| 1 | Ragas code: `from ragas import evaluate`, `from ragas.metrics import faithfulness, answer_relevancy, ...`, `result[metric]`. | 1 | FAIL, fixed | The current Ragas pages show `from ragas.metrics.collections import Faithfulness, AnswerRelevancy, ContextPrecision, ContextRecall`, a `scorer = Metric(llm=llm)` constructor, and `await scorer.ascore(user_input=..., response=..., retrieved_contexts=..., reference=...)` returning an object with `.value` (argument sets differ per metric and were copied from each metric's page). Test rewritten to score each case with the four scorers and assert on the mean of each. |
| 2 | Giskard code: `giskard.scan(model, dataset, only=None)` and `report.get_issues(severity="high")`. | 3 | FAIL, fixed | That is the deprecated v2 API (migration guide: "DEPRECATED: Giskard v2 API"); the 535-line scan reference has no severity field. Replaced with `await vulnerability_scan(target=..., description=..., languages=[...])` and `result.failed_count == 0`. "High-severity" wording changed to "failing scenario" (callout, mistake 5) in three panels. |
| 3 | DSPy "is a different approach from Giskard RAGET's template-based generation". | 2, 3 | FAIL, fixed | RAGET is the deprecated v2 tool and "template-based" is unsupported. Reworded to contrast DSPy with the quality scan. |
| 4 | DSPy `Signature` with `dspy.Predict(AnswerFromDocs)`. | 2 | PASS | Standard DSPy usage; an LM must be configured, which the tutorial assumes. |
| 5 | "40+ probes" scale for the red team step. | 3 | NOTE | The figure comes from the course syllabus, not from Giskard; the page says "the scale the course specifies". |
| 6 | Multi-turn test with `agent.invoke({**state, ...})`. | none | PASS | LangGraph graphs expose `invoke`; the state keys are the tutorial's own. |

Open FAILs: 0
