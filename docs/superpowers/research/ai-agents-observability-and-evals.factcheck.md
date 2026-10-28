# Fact check: How AI Agents Work, Observability and Evals

Page: `content/ai-agents/observability-and-evals.mdx`. Checker: an agent that did not write the page. Date: 2026-10-28. Each source was opened on this date (GitHub files read as raw Markdown).

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/gen-ai/gen-ai-agent-spans.md | yes | OpenTelemetry (own GitHub repo) |
| 2 | https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/gen-ai/gen-ai-metrics.md | yes | OpenTelemetry (own GitHub repo) |
| 3 | https://openai.github.io/openai-agents-python/tracing/ | yes | OpenAI SDK docs |
| 4 | https://code.claude.com/docs/en/monitoring-usage | yes | Anthropic docs |
| 5 | https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents | yes | Anthropic engineering (vendor primary) |
| 6 | https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/gen-ai/client-inference.md | yes | OpenTelemetry (own GitHub repo). Added by this check. |

The move is confirmed: `open-telemetry/semantic-conventions` `docs/gen-ai/README.md` is titled "Moved: Generative AI semantic conventions" and points to `semantic-conventions-genai`. Each source 1–6 is cited at least one time.

## Claims (Technical text)

| # | Claim | Cite | Verdict | Quote from the source |
|---|---|---|---|---|
| 1 | OpenAI Agents SDK: tracing is a full record of the events of a run | 3 | PASS | "a comprehensive record of events during an agent run" |
| 2 | Trace = one end-to-end operation | 3 | PASS | "Traces represent a single end-to-end operation" |
| 3 | Span has a start and end time; spans nest | 3 | PASS | "operations that have a start and end time" / "parent_id" |
| 4 | Task: one test with defined inputs and success criteria | 5 | PASS | "a single test with defined inputs and success criteria" |
| 5 | Trial: one attempt at a task | 5 | PASS | "Each attempt at a task is a trial" |
| 6 | Grader: logic that scores some part of the work | 5 | PASS | "logic that scores some aspect of the agent's performance" |
| 7 | Transcript: complete record of a trial; outcome: final state of the environment | 5 | PASS | "the final state in the environment at the end" |
| 8 | GenAI conventions status is Development | 1 | PASS | "Status: Development" (also S2, S6) |
| 9 | Span names `invoke_agent {gen_ai.agent.name}` and `execute_tool {gen_ai.tool.name}` | 1 | PASS | "Span name SHOULD be `execute_tool {gen_ai.tool.name}`" |
| 10 | Agent span can carry `gen_ai.usage.input_tokens` / `output_tokens` | 1 | PASS | "The number of tokens used in the GenAI input" (Recommended) |
| 11 | `error.type` if the operation ended in an error | 1 | PASS | "Conditionally Required If the operation ended in an error" |
| 12 | `gen_ai.client.operation.duration`, unit seconds | 2 | PASS | "Histogram, `s`, GenAI operation duration" |
| 13 | Server metric `gen_ai.server.time_to_first_token` | 2 | PASS | "Time to generate first token for successful responses" |
| 14 | OpenAI SDK tracing on by default; `OPENAI_AGENTS_DISABLE_TRACING=1` turns it off | 3 | PASS | "Tracing is enabled by default." |
| 15 | Default spans: agent runs, generations, function tools, guardrails, handoffs | 3 | PASS | "Handoffs are wrapped in handoff_span()" |
| 16 | Claude Code exports only with `CLAUDE_CODE_ENABLE_TELEMETRY=1` | 4 | PASS | "Enables telemetry collection (required)" |
| 17 | Metrics `claude_code.cost.usage` (USD), `claude_code.token.usage` (tokens) | 4 | PASS | "Cost of the Claude Code session / USD" |
| 18 | `claude_code.api_request` has `duration_ms`, `cost_usd`; cost is an estimate | 4 | PASS | "`cost_usd`: Estimated cost in USD" |
| 19 | `claude_code.tool_result` has `tool_name`, `success`, `duration_ms` | 4 | PASS | "`duration_ms`: Execution time in milliseconds" |
| 20 | Claude Code tracing is beta and off by default | 4 | PASS | "Traces (beta)" / "Tracing is off by default." |
| 21 | Evals run tasks, often several trials each | 5 | PASS | "we run multiple trials to produce more consistent results" |
| 22 | Grader table (code / model / human strengths and weaknesses) | 5 | PASS | "Brittle to valid variations" / "Gold standard quality" |
| 23 | pass@k and pass^k definitions; pass^k falls as k grows | 5 | PASS | "As k increases, pass^k falls" |
| 24 | Example: model call span name `{gen_ai.operation.name} {gen_ai.request.model}`, `chat` | 6 | FAIL, fixed | "Span name SHOULD be `{gen_ai.operation.name} {gen_ai.request.model}`" |
| 25 | Example: `duration_ms` of `claude_code.tool_result` per tool | 4 | PASS | see 19 |
| 26 | 20 to 50 simple tasks from real failures are a great start | 5 | PASS | "20-50 simple tasks drawn from real failures" |
| 27 | Example uses pass@5 and pass^5 | 5 | PASS | definitions in 23 |
| 28 | You only know graders work if you read many transcripts and grades | 5 | PASS | "unless you read the transcripts and grades from many trials" |
| 29 | Message content is opt-in; likely contains user data | 1 | FAIL, fixed | "Opt-In" / "likely to contain sensitive information including user/PII data" |
| 30 | Generation and function spans can hold sensitive data | 3 | PASS | "These may contain sensitive data" |
| 31 | Claude Code redacts prompt text by default | 4 | PASS | "Spans redact user prompt text ... by default" |
| 32 | Grade what the agent produced; strict step order fails valid approaches | 5 | PASS | "grade what the agent produced, not the path it took" |
| 33 | pass@k when one success matters, pass^k when consistency is needed | 5 | PASS | "pass@k for tools where one success matters" |
| 34 | Key words "Regression eval": still does what it did before | 5 | PASS | "Does the agent still handle all the tasks it used to?" |
| 35 | Key words "Eval": a test of an AI system that scores its output | 5 | PASS | "a test for an AI system" |

## Fixes

| # | Problem | Fix |
|---|---|---|
| 24 | The invented trace used `chat (model call)` as a span label. The OpenTelemetry inference span name is `{gen_ai.operation.name} {gen_ai.request.model}` (S6), so the label was not a valid span name, and no source was cited for it. | The trace lines are now `chat example-model`. Technical adds one sentence on the inference span name with `<Cite n={6} />`. Source 6 (`client-inference.md`) added to `page.sources` and to the research notes (S6, C31). Layman and Bangla updated to match. |
| 29 | "opt-in, because it is likely to contain user data": S1 marks the attributes Opt-In and warns about sensitive data, but does not state the "because". | Now "is opt-in, and the conventions warn that it is likely to contain sensitive user data" (all 3 voices). |

## Other checks

| Check | Verdict |
|---|---|
| Every source is cited; every cite has a source | PASS |
| Official / primary sources only | PASS |
| The example says it is invented | PASS |
| "Tutorial advice" tips have no `<Cite>` (3 voices) | PASS |
| No run of more than 10 words copied from a source | PASS |
| "Regression evals run in CI" in the tip is tutorial advice, not a cited fact | PASS |
| Example numbers add up (1.2 + 7.9 + 0.7 = 9.8 s) | PASS |

Open FAILs: 0
