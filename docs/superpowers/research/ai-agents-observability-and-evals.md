# Research notes: How AI Agents Work, Observability and Evals

Page: `content/ai-agents/observability-and-evals.mdx`. Accessed 2026-10-28.

## Sources

| ID | Title | Publisher | URL | Accessed |
|---|---|---|---|---|
| S1 | Semantic Conventions for GenAI agent and framework spans | OpenTelemetry (GitHub) | https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/gen-ai/gen-ai-agent-spans.md | 2026-10-28 |
| S2 | Semantic conventions for generative AI metrics | OpenTelemetry (GitHub) | https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/gen-ai/gen-ai-metrics.md | 2026-10-28 |
| S3 | Tracing | OpenAI Agents SDK (Python) | https://openai.github.io/openai-agents-python/tracing/ | 2026-10-28 |
| S4 | Monitoring | Anthropic (Claude Code docs) | https://code.claude.com/docs/en/monitoring-usage | 2026-10-28 |
| S5 | Demystifying evals for AI agents | Anthropic (Engineering) | https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents | 2026-10-28 |
| S6 | Semantic conventions for generative AI client inference | OpenTelemetry (GitHub) | https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/gen-ai/client-inference.md | 2026-10-28 |

Note: `https://opentelemetry.io/docs/specs/semconv/gen-ai/` now says the GenAI conventions moved to the `semantic-conventions-genai` repository, so S1 and S2 point there.

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| C1 | The GenAI agent span conventions have the status Development. | S1 | "**Status**: [Development]" |
| C2 | An agent call span has the operation name `invoke_agent`; span name `invoke_agent {gen_ai.agent.name}`. | S1 | "Span name** SHOULD be `invoke_agent {gen_ai.agent.name}`" |
| C3 | A tool call span is `execute_tool {gen_ai.tool.name}`. | S1 | "Span name** SHOULD be `execute_tool {gen_ai.tool.name}`." |
| C4 | Agent spans carry token counts `gen_ai.usage.input_tokens` and `gen_ai.usage.output_tokens` (Recommended). | S1 | attribute table rows, requirement level "`Recommended`" |
| C5 | `error.type` is set when the operation ended in an error. | S1 | "Conditionally Required` If the operation ended in an error." |
| C6 | Message content (`gen_ai.input.messages`, `gen_ai.output.messages`) is Opt-In and likely sensitive. | S1 | "likely to contain sensitive information including user/PII data" |
| C7 | Metric `gen_ai.client.operation.duration`, a histogram in seconds. | S2 | "GenAI operation duration." |
| C8 | Server metric `gen_ai.server.time_to_first_token`. | S2 | "Time to generate first token for successful responses." |
| C9 | The metrics conventions have the status Development. | S2 | "Development" |
| C10 | OpenAI Agents SDK tracing records a full record of events in a run. | S3 | "collecting a comprehensive record of events during an agent run" |
| C11 | A trace is one end-to-end operation; spans have a start and end time and nest. | S3 | "operations that have a start and end time" |
| C12 | Tracing is on by default; disable with `OPENAI_AGENTS_DISABLE_TRACING=1`. | S3 | "Tracing is enabled by default." |
| C13 | Default spans: agent, generation (LLM call), function tool, guardrail, handoff. | S3 | list of default spans |
| C14 | Generation and function spans can hold sensitive inputs and outputs; `trace_include_sensitive_data` controls it. | S3 | "Certain spans may capture potentially sensitive data." |
| C15 | Claude Code telemetry is on only with `CLAUDE_CODE_ENABLE_TELEMETRY=1`. | S4 | "Enables telemetry collection (required)" |
| C16 | Metrics `claude_code.cost.usage` (USD) and `claude_code.token.usage` (tokens). | S4 | "Cost of the Claude Code session" |
| C17 | Event `claude_code.api_request` has `duration_ms` and `cost_usd` (estimated). | S4 | "Estimated cost in USD" |
| C18 | Event `claude_code.tool_result` has `tool_name`, `success`, `duration_ms`. | S4 | "Execution time in milliseconds" |
| C19 | Prompt text is redacted by default; `OTEL_LOG_USER_PROMPTS=1` adds it. | S4 | "Redacted by default." |
| C20 | Claude Code tracing is beta and off by default. | S4 | "Tracing is off by default." |
| C21 | Task: one test with inputs and success criteria. | S5 | "a single test with defined inputs and success criteria" |
| C22 | Trial: each attempt at a task. | S5 | "Each attempt at a task is a **trial**." |
| C23 | Grader: logic that scores part of the agent's performance. | S5 | "logic that scores some aspect of the agent's performance" |
| C24 | Transcript: the complete record of a trial. Outcome: final state of the environment. | S5 | "the complete record of a trial" |
| C25 | Grader types: code-based (fast, cheap, brittle), model-based (flexible, non-deterministic, costlier), human (gold standard, slow). | S5 | "Brittle to valid variations" / "Gold standard quality" |
| C26 | pass@k: chance of at least one success in k tries. pass^k: chance that all k succeed; falls as k grows. | S5 | "the likelihood that an agent gets at least one correct solution" |
| C27 | Capability evals start at a low pass rate; regression evals stay near 100%. | S5 | "Does the agent still handle all the tasks it used to?" |
| C28 | Grade the outcome, not the exact path. | S5 | "better to grade what the agent produced, not the path it took" |
| C29 | Read transcripts to know whether graders work. | S5 | "read the transcripts and grades from many trials" |
| C30 | Start with 20-50 tasks from real failures. | S5 | "20-50 simple tasks drawn from real failures is a great start" |
| C31 | A model call (inference) span is named `{gen_ai.operation.name} {gen_ai.request.model}`; `chat` is an operation name. Added by the fact-checker. | S6 | "Span name SHOULD be `{gen_ai.operation.name} {gen_ai.request.model}`" |

## Not on the page

No prices, no vendor dashboards, and no claim about other tracing vendors.
