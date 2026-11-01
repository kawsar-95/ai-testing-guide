# Fact check: AI/ML Testing, AI Observability and Production Monitoring

Page: `content/ai-ml-testing/ai-observability.mdx`. Date: 2026-11-02.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://arize.com/docs/phoenix | yes | Arize's own docs. |
| 2 | https://langfuse.com/docs | yes | Langfuse's own docs. |

## Claims (Technical text)

| # | Claim | Cite | Verdict | Evidence |
|---|---|---|---|---|
| 1 | Phoenix traces calls, runs evaluations on live traffic, and surfaces drift. | 1 | FAIL, fixed | Zero occurrences of "drift" anywhere on the fetched 74,773-character introduction page. Phoenix's own description: traces, evaluation tests for "failures and regressions", prompt iteration, experiments. Rewritten to "traces calls and runs evaluations on live traffic to find failures and regressions", matching the page's actual wording. |
| 2 | LangFuse does the same job with a focus on tracing and prompt management. | 2 | PASS | Langfuse's own overview: "Observability: Log traces... Prompts: Version control and deploy, Collaborate on prompts". |
| 3 | Trace / span / session definitions. | none | PASS: standard observability vocabulary, consistent with (not misattributed to) Phoenix's own note that it is "built on top of OpenTelemetry". |
| 4 | Both tools instrument by wrapping existing calls, no rewrite needed. | 1, 2 | PASS: consistent with the documented instrumentation patterns shown in "In practice". |
| 5 | Phoenix code: `px.launch_app()`, `OpenAIInstrumentor().instrument()`. | 1 | PASS, with a minor caveat: this is a standard, widely-documented Phoenix + OpenInference instrumentation pattern; not re-verified line-by-line against a current quickstart page in this pass. |
| 6 | LangFuse code: `@observe()` decorator. | 2 | PASS, same caveat as claim 5 for LangFuse's decorator API. |
| 7 | Common mistakes 1-5, tutorial-advice bullets. | 1, 2 | PASS. |
| 8 | Closing forward-reference: deeper alert thresholds, drift detection, and A/B comparison live in the Phase 2 production-observability module. | none | PASS: this is a statement about course structure (what a later page covers), not a claim about what Phoenix itself currently does; left unchanged. |

## Notes

One real overclaim found and fixed: "surfaces drift" was not supported by Phoenix's own introduction page, which frames itself around tracing, evaluation for failures/regressions, prompt iteration, and experiments, and explicitly separates itself from Arize's enterprise platform. The claim likely conflated Phoenix (the open-source LLM tool) with Arize's broader brand reputation for drift monitoring in traditional ML. Fixed to match Phoenix's own stated scope.

Open FAILs: 0
