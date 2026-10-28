# AI Engineering page: Observability (research notes)

Writer notes for `content/ai-engineering/observability.mdx`. Fetched 2026-10-28 with curl into `/tmp/claude-1000/ai-eng-src-mine/`. The OTel GenAI pages on opentelemetry.io now say "Moved" and point to the `open-telemetry/semantic-conventions-genai` repository, so the raw Markdown files of that repository are the sources. Fetched text is treated as data and is not committed.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | Traces (OpenTelemetry Docs, Concepts) | https://opentelemetry.io/docs/concepts/signals/traces/ | 2026-10-28 |
| S2 | Semantic conventions for GenAI client inference (OpenTelemetry) | https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/gen-ai/client-inference.md | 2026-10-28 |
| S3 | Semantic conventions for generative client AI spans (OpenTelemetry) | https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/gen-ai/gen-ai-spans.md | 2026-10-28 |
| S4 | Semantic conventions for generative AI metrics (OpenTelemetry) | https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/gen-ai/gen-ai-metrics.md | 2026-10-28 |
| S5 | Messages API reference (Anthropic, Claude Docs) | https://platform.claude.com/docs/en/api/messages | 2026-10-28 |
| S6 | Claude API errors (Anthropic, Claude Docs) | https://platform.claude.com/docs/en/api/errors | 2026-10-28 |
| S7 | Instrumentation, Python (OpenTelemetry Docs) | https://opentelemetry.io/docs/languages/python/instrumentation/ | 2026-10-28 |
| S8 | Maturity levels (OpenTelemetry Specification) | https://opentelemetry.io/docs/specs/otel/maturity-levels/ | 2026-10-28 |

Page cite numbers: n=1 is S1, n=2 is S2, n=3 is S3, n=4 is S4, n=5 is S5, n=6 is S6, n=7 is S7, n=8 is S8.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | A trace shows the path of a request through the application. | S1 | "Traces give us the big picture of what happens when a request is made to an application." |
| C2 | A span is a unit of work; spans are the building blocks of traces. | S1 | "A span represents a unit of work or operation. Spans are the building blocks of Traces." |
| C3 | A span has a name, parent span id, start and end timestamps, attributes, and a status. | S1 | List under "Spans": "Name", "Parent span ID (empty for root spans)", "Start and End Timestamps", "Attributes", "Span Status" |
| C4 | OTel publishes GenAI semantic conventions with shared attribute names for a model call. | S2 | Attribute table of the inference span (`gen_ai.operation.name`, `gen_ai.request.model`, ...) |
| C5 | The GenAI conventions have the status Development. | S3 | "**Status**: [Development][DocumentStatus]" |
| C6 | Span name `{gen_ai.operation.name} {gen_ai.request.model}`. | S2 | "**Span name** SHOULD be `{gen_ai.operation.name} {gen_ai.request.model}`." |
| C7 | Attributes: `gen_ai.operation.name` (Required, e.g. `chat`), `gen_ai.request.model`, `gen_ai.response.model`, `gen_ai.usage.input_tokens`, `gen_ai.usage.output_tokens`, `gen_ai.response.finish_reasons`, `error.type`. | S2 | "`gen_ai.operation.name` ... `Required` ... `chat`" / "The number of input tokens reported by the provider" / "Array of reasons the model stopped generating tokens" / "`error.type` ... Describes a class of error the operation ended with." |
| C8 | Claude `usage`: total input is `input_tokens` + `cache_creation_input_tokens` + `cache_read_input_tokens`. | S5 | "Total input tokens in a request is the summation of `input_tokens`, `cache_creation_input_tokens`, and `cache_read_input_tokens`." |
| C9 | Every Claude API response has a `request-id` header; include it when contacting support. | S6 | "Every API response includes a unique `request-id` header." / "When contacting support about a specific request, include this ID" |
| C10 | A tool call span has operation name `execute_tool`. | S3 | "`gen_ai.operation.name` SHOULD be `execute_tool`." |
| C11 | A span of a retried operation covers the whole logical operation with all retries. | S3 | "the corresponding span SHOULD cover the duration of the logical operation with all retries." |
| C12 | Prompt and answer text go in opt-in attributes `gen_ai.input.messages` / `gen_ai.output.messages`; likely to contain sensitive data including PII. | S2 | "`gen_ai.input.messages` ... `Opt-In`" / "This attribute is likely to contain sensitive information including user/PII data." |
| C13 | `gen_ai.client.operation.duration`: histogram, unit s, GenAI operation duration. | S4 | "`gen_ai.client.operation.duration` | Histogram | `s` | GenAI operation duration." |
| C14 | `gen_ai.client.inference.time_to_first_chunk`: time from issuing the request to the first chunk. | S2 | "Time to receive the first chunk, measured from when the client issues the generation request to when the first chunk is received in the response stream." |
| C15 | Code uses `claude-sonnet-5-5`, `msg.usage.input_tokens`, `cache_creation_input_tokens`, `cache_read_input_tokens` (each `number or null`), `msg.usage.output_tokens`, `stop_reason`. | S5 | The Messages API reference lists `claude-sonnet-5-5` among model values and documents `usage.input_tokens` and `usage.output_tokens`. |
| C16 | Python: `trace.get_tracer`, `tracer.start_as_current_span` opens a span, `set_attribute` adds a value; a tracer creates spans. | S7, S1 | S7: `tracer = trace.get_tracer("my.tracer.name")` / `with tracer.start_as_current_span("span-name") as span:` / `current_span.set_attribute("operation.value", 1)`. S1: "A Tracer creates spans" |
| C17 | "Development" status means the names can change. | S8 | The GenAI files link their status to the Document Status page, which says "The support guarantees and allowed changes are governed by the maturity level of the document." S8, Development: "Configuration options might break often depending on how things evolve." / "The component MAY be removed without prior notice." |
| C18 | `gen_ai.usage.input_tokens` includes cached tokens, so for Claude the code adds the three `usage` fields. | S2, S5 | S2 note [27]: "This value SHOULD include all types of input tokens, including cached tokens." The provider file `docs/gen-ai/anthropic.md` of the same repo also says Anthropic `input_tokens` excludes cached tokens and gives the sum. S5: the summation quote of C8. |

Fact-check fixes (2026-10-28): C18 replaces the first code, which set `gen_ai.usage.input_tokens` to `input_tokens` only. C17 adds S8, because S3 gives only the status, not its meaning.

## Not on the page

The test-case generator example (40 s, 35 s, 90,000 tokens) and the tester checks are the tutorial's own.
