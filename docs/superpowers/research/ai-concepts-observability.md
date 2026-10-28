# Research notes: Observability for AI Agents (`/ai-concepts/observability/`)

Accessed: 2026-10-28. The OpenTelemetry GenAI pages on opentelemetry.io (`/docs/specs/semconv/gen-ai/...`) now show only a notice: "This page has moved and is no longer maintained in this repository." The current text is in the GitHub repo `open-telemetry/semantic-conventions-genai`, folder `docs/gen-ai/`. The page cites those files.

## Sources

| ID | Title | Publisher | URL |
|---|---|---|---|
| S1 | Observability primer | OpenTelemetry | https://opentelemetry.io/docs/concepts/observability-primer/ |
| S2 | Signals | OpenTelemetry | https://opentelemetry.io/docs/concepts/signals/ |
| S3 | Semantic conventions for generative AI systems (README) | OpenTelemetry (GitHub) | https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/gen-ai/README.md |
| S4 | Semantic Conventions for GenAI agent and framework spans | OpenTelemetry (GitHub) | https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/gen-ai/gen-ai-agent-spans.md |
| S5 | Semantic conventions for generative client AI spans | OpenTelemetry (GitHub) | https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/gen-ai/gen-ai-spans.md |
| S6 | Semantic conventions for generative AI metrics | OpenTelemetry (GitHub) | https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/gen-ai/gen-ai-metrics.md |
| S7 | Semantic conventions for Generative AI events | OpenTelemetry (GitHub) | https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/gen-ai/gen-ai-events.md |
| S8 | Versioning and stability for OpenTelemetry clients | OpenTelemetry | https://opentelemetry.io/docs/specs/otel/versioning-and-stability/ |
| S9 | Monitoring (Claude Code docs) | Anthropic | https://code.claude.com/docs/en/monitoring-usage |
| S10 | Demystifying evals for AI agents (2026-01-09) | Anthropic Engineering | https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents |

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| C1 | Observability lets you understand a system from the outside. | S1 | "Observability lets you understand a system from the outside" |
| C2 | Telemetry is data that a system emits about its behavior. | S1 | "Telemetry refers to data emitted from a system and its behavior." |
| C3 | A span is one unit of work. A distributed trace records the path of one request. | S1 | "A span represents a single unit of work or operation." / "records the path taken by a single request" |
| C4 | A log is a timestamped message. | S1 | "A log is a timestamped message emitted by services or other components." |
| C5 | OpenTelemetry supports four signals: traces, metrics, logs, baggage (the page uses the first three; fact-check 2026-10-28 removed "three main signals" and "the open standard", which the source does not say). Trace = path of a request; metric = a measurement at runtime; log = a recording of an event. | S2 | "The path of a request through your application." / "A measurement captured at runtime." / "A recording of an event." |
| C6 | The GenAI semantic conventions have status Development. They cover spans, events, and metrics, with model spans and agent spans as separate documents. | S3 | "**Status**: [Development]" / "Agent spans ... Semantic Conventions for Generative AI agent operations - *spans*." |
| C7 | While in development, breaking changes may occur. | S8 | "While signals are in development, breaking changes and performance issues MAY occur." |
| C8 | Operation names include `invoke_agent` (invoke a GenAI agent), `execute_tool` (execute a tool), and `chat` (chat completion). | S5 | "`invoke_agent` \| Invoke GenAI agent" / "`execute_tool` \| Execute a tool" / "`chat` \| Chat completion operation" |
| C9 | Invoke agent span name: `invoke_agent {gen_ai.agent.name}`. | S4 | "**Span name** SHOULD be `invoke_agent {gen_ai.agent.name}` if `gen_ai.agent.name` is readily available." |
| C10 | Agent spans can carry token counts `gen_ai.usage.input_tokens` and `gen_ai.usage.output_tokens`. | S4 | "`gen_ai.usage.input_tokens` ... The number of tokens used in the GenAI input (prompt)." / "`gen_ai.usage.output_tokens` ... The number of tokens used in the GenAI response (completion)." |
| C11 | `error.type` is set if the operation ended in an error (agent spans: S4; tool spans: S5, which the example now cites). | S4, S5 | "`Conditionally Required` If the operation ended in an error." |
| C12 | Execute tool span name: `execute_tool {gen_ai.tool.name}`; `gen_ai.tool.name` is required. | S5 | "**Span name** SHOULD be `execute_tool {gen_ai.tool.name}`." / "`gen_ai.tool.name` ... `Required`" |
| C13 | Instrumentations that can trace tool calls should do so; developers should manually instrument tool calls that automatic instrumentation does not cover. | S5 | "GenAI instrumentations that can instrument tool execution calls SHOULD do so" / "manually instrument any tool calls that automatic instrumentations do not cover." |
| C14 | Tool call arguments and results are Opt-In attributes. | S5 | "`gen_ai.tool.call.arguments` ... `Opt-In`" / "`gen_ai.tool.call.result` ... `Opt-In`" |
| C15 | Instructions, user messages, and model outputs are sensitive. Instrumentations should not capture them by default. The default is not to record them. | S5 | "Model instructions, user messages, and model outputs are considered sensitive" / "SHOULD NOT capture them by default, but SHOULD provide an option for users to opt in." / "[Default] Don't record instructions, inputs, or outputs." |
| C16 | Storing content outside telemetry and recording references is recommended in production when sensitive data needs secure handling. | S5 | "This pattern is recommended in production environments where telemetry volume is a concern or sensitive data needs to be handled securely." |
| C17 | `gen_ai.input.messages` is likely to contain user/PII data. | S4 | "This attribute is likely to contain sensitive information including user/PII data." |
| C18 | Metrics: `gen_ai.invoke_agent.duration` (end-to-end duration of one agent invocation), `gen_ai.invoke_agent.tool_calls` (tool calls per invocation), `gen_ai.execute_tool.duration` (duration of one tool execution). All Development. | S6 | "The end-to-end duration of a single in-process agent invocation" / "The number of tool calls a GenAI agent makes during a single invocation." / "The duration of a single tool execution." |
| C18b | The GenAI metrics document lists no cost metric (its metrics are durations, time per token, inference and tool-call counts). | S6 | Table of contents: "`gen_ai.client.operation.duration`" ... "`gen_ai.execute_tool.duration`"; no metric name contains "cost". |
| C19 | The event `gen_ai.evaluation.result` records the result of an evaluation of GenAI output, with a name, a score, and a label such as pass or fail. | S7 | "This event captures the result of evaluating GenAI output for quality, accuracy, or other characteristics." / "`pass`; `fail`" |
| C20 | Claude Code exports metrics, events, and optional distributed traces through OpenTelemetry. | S9 | "Claude Code exports metrics as time series data via the standard metrics protocol, events via the logs/events protocol, and optionally [distributed traces via OpenTelemetry]" |
| C21 | `CLAUDE_CODE_ENABLE_TELEMETRY=1` is required. | S9 | "Enables telemetry collection (required)." |
| C22 | Metrics `claude_code.token.usage` (tokens) and `claude_code.cost.usage` (USD). | S9 | "`claude_code.cost.usage` ... Cost of the Claude Code session" / "`claude_code.token.usage` ... Number of tokens used" |
| C23 | The `api_request` event has `cost_usd`, an estimated cost. | S9 | "`cost_usd`: Estimated cost in USD." |
| C24 | `prompt.id` links all events of one user prompt. | S9 | "UUID v4 identifier linking all events produced while processing a single user prompt" |
| C25 | Tracing is beta and off by default; it needs `CLAUDE_CODE_ENABLE_TELEMETRY=1`, `CLAUDE_CODE_ENHANCED_TELEMETRY_BETA=1`, and `OTEL_TRACES_EXPORTER`. | S9 | "Tracing is off by default. To enable it, set both `CLAUDE_CODE_ENABLE_TELEMETRY=1` and `CLAUDE_CODE_ENHANCED_TELEMETRY_BETA=1`, then set `OTEL_TRACES_EXPORTER`" |
| C26 | Each prompt starts a `claude_code.interaction` root span; API calls and tool calls are its children (`claude_code.llm_request`, `claude_code.tool`). Subagent spans nest under the parent's tool span. | S9 | "Each user prompt starts a `claude_code.interaction` root span. API calls, tool calls, and hook executions are recorded as its children." / "the subagent's API and tool spans nest under the parent's `claude_code.tool` span." |
| C27 | Prompt text is redacted by default (`OTEL_LOG_USER_PROMPTS`). Tool details are off by default (`OTEL_LOG_TOOL_DETAILS`); arguments can still contain sensitive values. | S9 | "Redacted by default. Set `OTEL_LOG_USER_PROMPTS=1` to include it." / "Arguments may still contain sensitive values, so configure your telemetry backend to filter or redact these attributes as needed." |
| C28 | With OAuth, `user.email` is in telemetry attributes, sent only to your OTel endpoint. | S9 | "When authenticated via OAuth, `user.email` is included in telemetry attributes, sent only to the OTel endpoint you configure, never to Anthropic." |
| C29 | A transcript (trace, trajectory) is the complete record of a trial: outputs, tool calls, reasoning, intermediate results. | S10 | "the complete record of a trial, including outputs, tool calls, reasoning, intermediate results, and any other interactions." |
| C30 | Read transcripts to know if graders work. | S10 | "You won't know if your graders are working well unless you read the transcripts and grades from many trials." |
| C31 | Turn user-reported failures into eval test cases. | S10 | "Converting user-reported failures into test cases ensures your suite reflects actual usage." |
| C32 | Production monitoring finds drift and unexpected real-world failures after launch. | S10 | "detect distribution drift and unanticipated real-world failures." |

## Infographic seed: check and corrections

| Seed point | Verdict |
|---|---|
| Agent run with steps 1..4 | OK as a picture. The standard shape is one `invoke_agent` span with child spans for model calls (`chat`) and tool calls (`execute_tool`) (C8, C9, C12). The number of steps is not fixed. |
| Traces, logs, metrics | OK (C5). OpenTelemetry also lists baggage as a signal; the page does not need it. |
| Metrics: tokens, cost, latency | Partly corrected. Tokens and latency have standard GenAI metrics/attributes (C10, C18). **Cost is not a standard OpenTelemetry GenAI metric**; the token-metrics doc (https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/gen-ai/gen-ai-token-metrics.md, not cited on the page) calls token usage counters "a proxy for cost approximation". Some tools export their own cost metric: Claude Code has `claude_code.cost.usage` and an *estimated* `cost_usd` per request (C22, C23). The page says this. |
| Feedback | OK with a qualifier: OpenTelemetry has a `gen_ai.evaluation.result` event for a score or pass/fail label (C19). |
| Dashboard | Not a standard; the page treats it as the backend where you query the data. |
| "Feeds your evals" | OK: Anthropic recommends converting user-reported failures into eval test cases (C31). |
| Stability | The GenAI conventions are **Development**, not stable (C6, C7). Claude Code tracing is **beta** (C25). The page says both. |

## Not on the page

No vendor LLM-tracing product is named. Baggage, span kinds, and the MCP conventions are left out.
