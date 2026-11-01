# Research notes: AI/ML Testing, AI Observability and Production Monitoring

Page: `content/ai-ml-testing/ai-observability.mdx` (data: `scripts/ai_ml_testing_pages_p1g.py`). Accessed 2026-11-02.

## Sources

| ID | Key | Title | Publisher | URL | Accessed |
|---|---|---|---|---|---|
| S1 | `phoenix-intro` | Introduction | Arize (Phoenix docs) | https://arize.com/docs/phoenix | 2026-11-02 |
| S2 | `langfuse-intro` | Introduction | Langfuse (docs) | https://langfuse.com/docs | 2026-11-02 |

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| C1 | Phoenix is an open-source LLM observability tool that traces calls and runs evaluations to find failures and regressions. | S1 | "Phoenix helps you understand and improve AI applications by giving you a workflow for debugging and iteration. You can send detailed logging information, known as traces, from your app to see exactly what happened during a run, score outputs using evaluation tests to identify failures and regressions, iterate on your prompts using real production examples, and optimize your app with experiments" |
| C2 | LangFuse does tracing and prompt management, and the two tools can sit alongside each other or substitute for one another. | S2 | "Langfuse is an open-source AI engineering platform ... Observability: Log traces ... Prompts: Version control and deploy, Collaborate on prompts, Test prompts and models ... Evaluation: Measure output quality" |
| C3 | A trace/span/session vocabulary (one call, a sub-step, a conversation group). | none | Standard observability terminology (shared with general distributed-tracing practice, e.g. OpenTelemetry, which Phoenix explicitly builds on: "Phoenix ... is built on top of OpenTelemetry"); not a direct quote from either source, not misattributed as one. |
| C4 | Both tools instrument an application by wrapping existing calls (a decorator or context manager), no rewrite needed. | S1, S2 | Consistent with the documented `OpenAIInstrumentor().instrument()` (Phoenix) and `@observe()` decorator (LangFuse) patterns shown in "In practice"; both are real, standard instrumentation patterns for these tools. |
| C5 | Phoenix "surfaces drift" as one of its core functions. | S1 | FAIL: a full-text search of the fetched Phoenix introduction page (74,773 characters) for "drift" (case-insensitive) returns zero matches. The page's own description of Phoenix centers on traces, evaluation tests for failures/regressions, prompt iteration, and experiments; it explicitly distinguishes Phoenix (open source) from "Arize AX, a managed enterprise platform". Drift monitoring is more associated with Arize's broader product line; this specific introduction page does not claim it for Phoenix. Removed the claim, replaced with what the page actually says. |
| C6 | Code examples: `phoenix.launch_app()` + `OpenAIInstrumentor().instrument()`; `langfuse.decorators.observe` decorator. | S1, S2 | Both match standard, documented instrumentation patterns for these libraries (not independently re-verified line-by-line against a current quickstart page in this pass; flagged as a minor follow-up, not changed, since the general pattern names are correct and widely documented). |

## Correction made during this pass

Removed "and surfaces drift" from the description of Arize Phoenix. The fetched introduction page never uses the word "drift"; Phoenix's own stated scope is tracing, evaluation (failures/regressions), prompt iteration, and experiments. Drift detection is more closely associated with Arize's separate enterprise platform (Arize AX) for traditional ML monitoring, not confirmed as a current Phoenix OSS feature on this page. The later forward-reference in the same section ("the deeper version... drift detection... is in the Phase 2 module on production observability") was left unchanged, since it refers to a topic covered by a later page in the course, not a claim about what Phoenix itself currently does.
