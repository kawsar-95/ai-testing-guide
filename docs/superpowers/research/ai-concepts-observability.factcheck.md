# Fact-check: Observability for AI Agents (2026-10-28)

Page: `content/ai-concepts/observability.mdx`. I did not write this page. On 2026-10-28 I downloaded each source (the GenAI files as raw Markdown from `raw.githubusercontent.com/open-telemetry/semantic-conventions-genai/main/docs/gen-ai/`, the other pages as HTML) and checked each claim of the Technical text against it. I did not use the quotes of the research notes as evidence.

Doc location: `https://opentelemetry.io/docs/specs/semconv/gen-ai/` now shows "This page has moved and is no longer maintained in this repository." The current GenAI text is in the GitHub repo `open-telemetry/semantic-conventions-genai`, folder `docs/gen-ai/`. Sources 3–7 point there. PASS.

Sources:

| n | Source | URL works | Official or primary |
|---|---|---|---|
| 1 | OpenTelemetry, "Observability primer" | yes (200) | yes |
| 2 | OpenTelemetry, "Signals" | yes (200) | yes |
| 3 | OpenTelemetry GitHub, GenAI README | yes (200) | yes |
| 4 | OpenTelemetry GitHub, GenAI agent and framework spans | yes | yes |
| 5 | OpenTelemetry GitHub, generative client AI spans | yes | yes |
| 6 | OpenTelemetry GitHub, GenAI metrics | yes | yes |
| 7 | OpenTelemetry GitHub, GenAI events | yes | yes |
| 8 | OpenTelemetry, "Versioning and stability" | yes (200) | yes |
| 9 | Claude Code Docs, "Monitoring" | yes (200) | yes |
| 10 | Anthropic Engineering, "Demystifying evals for AI agents" | yes (200) | yes (Anthropic) |

Structure checks:

- Every source is cited: [1]–[10] all cited. PASS.
- Every cite number has a source: only n = 1–10 used. PASS.
- "Tutorial advice" tip ("What a tester can check") has no `<Cite>` in any voice and says it is the tutorial's own advice. PASS.
- Invented example: "A real-life example" starts with "This is an invented example." The span trees use the example names `test-fixer`, `read_file`, `run_tests`. PASS.
- Step 5 ("A backend shows it all") and the trade-off advice "Decide per environment" have no cite; they are general advice, not facts from a source. PASS.

| # | Claim (Technical) | Cite | Verdict | Quote from the source |
|---|---|---|---|---|
| 1 | Observability lets you understand a system from the outside | 1 | PASS | "Observability lets you understand a system from the outside by letting you ask questions about that system" |
| 2 | Telemetry is the data a system emits about its behavior | 1 | PASS | "Telemetry refers to data emitted from a system and its behavior." |
| 3 | OpenTelemetry names three main signals (and "the open standard for telemetry") | 2 | FAIL → fixed | "OpenTelemetry currently supports: Traces Metrics Logs Baggage". The source lists four signals and does not say "three main" or "open standard". Fixed in all 3 voices: "OpenTelemetry supports four signals: traces, metrics, logs, and baggage [2]. This page uses the first three:". Re-check: PASS. |
| 4 | A trace is the path of one request through your application | 2 | PASS | "Traces The path of a request through your application." |
| 5 | A span is one unit of work | 1 | PASS | "A span represents a single unit of work or operation." |
| 6 | A metric is a measurement captured at run time | 2 | PASS | "A measurement captured at runtime." |
| 7 | A log is a timestamped message about an event | 1 | PASS | "A log is a timestamped message emitted by services or other components." |
| 8 | A transcript is the complete record: outputs, tool calls, reasoning, intermediate results | 10 | PASS | "the complete record of a trial, including outputs, tool calls, reasoning, intermediate results, and any other interactions." |
| 9 | OpenTelemetry has GenAI semantic conventions for spans, metrics, events of model calls and agents | 3 | PASS | "Semantic conventions for Generative AI operations are defined for the following signals" (Events, Metrics, Model spans, Agent spans) |
| 10 | Their status is Development, not Stable | 3 | PASS | "**Status**: [Development]" |
| 11 | In Development, breaking changes can occur | 8 | PASS | "While signals are in development, breaking changes and performance issues MAY occur." |
| 12 | Operation names `invoke_agent`, `chat`, `execute_tool` | 5 | PASS | "`chat` \| Chat completion operation" / "`execute_tool` \| Execute a tool" / "`invoke_agent` \| Invoke GenAI agent" (all Development) |
| 13 | Agent span name `invoke_agent {gen_ai.agent.name}` | 4 | PASS | "**Span name** SHOULD be `invoke_agent {gen_ai.agent.name}` if `gen_ai.agent.name` is readily available." |
| 14 | Tool span name `execute_tool {gen_ai.tool.name}` | 5 | PASS | "**Span name** SHOULD be `execute_tool {gen_ai.tool.name}`." |
| 15 | Agent span can record `gen_ai.usage.input_tokens` and `gen_ai.usage.output_tokens` | 4 | PASS | "`gen_ai.usage.input_tokens` ... `Recommended` ... The number of tokens used in the GenAI input (prompt)." / "`gen_ai.usage.output_tokens` ... The number of tokens used in the GenAI response (completion)." |
| 16 | On error, the (agent) span gets `error.type` | 4 | PASS | "`error.type` ... `Conditionally Required` If the operation ended in an error." |
| 17 | A tool span must have `gen_ai.tool.name` | 5 | PASS | "`gen_ai.tool.name` ... `Required` ... Name of the tool utilized by the agent." |
| 18 | Metrics `gen_ai.invoke_agent.duration` (end-to-end time of one run), `gen_ai.invoke_agent.tool_calls`, `gen_ai.execute_tool.duration` | 6 | PASS | "The end-to-end duration of a single in-process agent invocation" / "The number of tool calls a GenAI agent makes during a single invocation." / "The duration of a single tool execution." |
| 19 | `gen_ai.evaluation.result` records an evaluation result with a score or a label such as `pass` or `fail` | 7 | PASS | "This event captures the result of evaluating GenAI output for quality, accuracy, or other characteristics." / `gen_ai.evaluation.score.value`; `gen_ai.evaluation.score.label` examples "`pass`; `fail`" |
| 20 | The GenAI metrics list has no cost metric | 6 | PASS | Metrics: `gen_ai.client.operation.duration`, `gen_ai.server.request.duration`, `gen_ai.server.time_per_output_token`, `gen_ai.server.time_to_first_token`, `gen_ai.invoke_workflow.duration`, `gen_ai.invoke_agent.duration`, `gen_ai.invoke_agent.inference_calls`, `gen_ai.invoke_agent.tool_calls`, `gen_ai.execute_tool.duration`. The word "cost" does not occur in the file. |
| 21 | Claude Code exports metrics, events, and optionally traces through OpenTelemetry | 9 | PASS | "Claude Code exports metrics as time series data via the standard metrics protocol, events via the logs/events protocol, and optionally distributed traces via OpenTelemetry." |
| 22 | Turned on with `CLAUDE_CODE_ENABLE_TELEMETRY=1` | 9 | PASS | "`CLAUDE_CODE_ENABLE_TELEMETRY` \| Enables telemetry collection (required) \| `1`" |
| 23 | Metrics `claude_code.token.usage` and `claude_code.cost.usage` (USD) | 9 | PASS | "`claude_code.cost.usage` \| Cost of the Claude Code session \| USD" / "`claude_code.token.usage` \| Number of tokens used \| tokens" |
| 24 | `api_request` event has `cost_usd`, an estimate | 9 | PASS | "`cost_usd`: Estimated cost in USD" |
| 25 | All events of one prompt share one `prompt.id` | 9 | PASS | "`prompt.id` \| UUID v4 identifier linking all events produced while processing a single user prompt" |
| 26 | Tracing is beta, off by default, needs `CLAUDE_CODE_ENHANCED_TELEMETRY_BETA=1` and `OTEL_TRACES_EXPORTER` | 9 | PASS | "### Traces (beta)" / "Tracing is off by default. To enable it, set both `CLAUDE_CODE_ENABLE_TELEMETRY=1` and `CLAUDE_CODE_ENHANCED_TELEMETRY_BETA=1`, then set `OTEL_TRACES_EXPORTER`" |
| 27 | Each prompt starts a `claude_code.interaction` root span, API and tool calls as children | 9 | PASS | "Each user prompt starts a `claude_code.interaction` root span. API calls, tool calls, and hook executions are recorded as its children." |
| 28 | Instructions, user messages, model outputs are sensitive | 5 | PASS | "Model instructions, user messages, and model outputs are considered sensitive" |
| 29 | Agent span input messages likely contain user and personal data | 4 | PASS | "`gen_ai.input.messages` ... This attribute is likely to contain sensitive information including user/PII data." |
| 30 | Do not capture by default; give an opt-in option | 5 | PASS | "OpenTelemetry instrumentations SHOULD NOT capture them by default, but SHOULD provide an option for users to opt in." |
| 31 | Tool call arguments and results are opt-in | 5 | PASS | "`gen_ai.tool.call.arguments` ... `Opt-In`" / "`gen_ai.tool.call.result` ... `Opt-In`" |
| 32 | Production: store content outside telemetry, record a reference, when sensitive data needs secure handling | 5 | PASS | "Store content externally and record references on the spans. This pattern is recommended in production environments where telemetry volume is a concern or sensitive data needs to be handled securely." |
| 33 | Claude Code prompt text redacted by default (`OTEL_LOG_USER_PROMPTS`) | 9 | PASS | "`prompt`: Prompt content. Redacted by default. Set `OTEL_LOG_USER_PROMPTS=1` to include it" |
| 34 | Tool details off by default (`OTEL_LOG_TOOL_DETAILS`); arguments can still contain sensitive values | 9 | PASS | "Tool input arguments and parameters are not logged by default. To include them, set `OTEL_LOG_TOOL_DETAILS=1`. ... Arguments may still contain sensitive values, so configure your telemetry backend to filter or redact these attributes as needed." |
| 35 | Example: the tool span has `error.type`, so the test run ended in an error | 4 | FAIL → fixed | The tool span is defined in source 5, not 4 (source 4: "If you are using tools in your agent, refer to Execute Tool Span" in gen-ai-spans.md). Source 5, execute tool span: "`error.type` ... `Conditionally Required` If the operation ended..." Fixed: cite changed to [5] in all 3 voices. `timeout` is an example value of `error.type` in the sources. Re-check: PASS. |
| 36 | User-reported failures that become test cases keep an eval suite close to real use | 10 | PASS | "Converting user-reported failures into test cases ensures your suite reflects actual usage" |
| 37 | Only the final answer logged: a transcript needs tool calls and intermediate results | 10 | PASS | Same quote as claim 8. |
| 38 | Automatic instrumentation does not cover every tool; developers should instrument the missed calls by hand | 5 | PASS | "Application developers are encouraged ... to manually instrument any tool calls that automatic instrumentations do not cover." |
| 39 | With OAuth sign-in, Claude Code puts `user.email` in its telemetry attributes | 9 | PASS | "When authenticated via OAuth, `user.email` is included in telemetry attributes, sent only to the OTel endpoint you configure, never to Anthropic." |
| 40 | `cost_usd` is an estimate | 9 | PASS | Same quote as claim 24. |
| 41 | GenAI names are Development; breaking changes can occur | 3, 8 | PASS | Same quotes as claims 10 and 11. |
| 42 | Read the transcripts, else you cannot know if graders work | 10 | PASS | "You won't know if your graders are working well unless you read the transcripts and grades from many trials." |

Claims checked: 42. FAILs found: 2. Fixed: 2. Notes updated (C5, C11).

Open FAILs: 0
