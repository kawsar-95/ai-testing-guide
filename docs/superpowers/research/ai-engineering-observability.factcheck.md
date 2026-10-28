# Fact-check: content/ai-engineering/observability.mdx

Checked 2026-10-28 by an agent that did not write the page. All sources were fetched fresh (opentelemetry.io pages as HTML; the GenAI files as raw Markdown from `raw.githubusercontent.com/open-telemetry/semantic-conventions-genai/main/docs/gen-ai/`; the Claude Docs pages as HTML). The quotes of the research notes were not trusted.

## Source status

| Check | Verdict | Evidence |
|---|---|---|
| `open-telemetry/semantic-conventions-genai` is the official home of the GenAI conventions | PASS | The repo is owned by the `open-telemetry` GitHub org (GitHub API: `owner.login` = `open-telemetry`, not archived). The opentelemetry.io page `/docs/specs/semconv/gen-ai/gen-ai-spans/` now has the title "Moved: Generative AI semantic conventions" and says the conventions "have moved to the OpenTelemetry GenAI semantic conventions repository", with a link to this repo. |
| S5, S6 (platform.claude.com) and S1, S7 (opentelemetry.io) are official | PASS | Vendor and project docs. |

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | A trace shows the full path of one request through the application | 1 | PASS | S1: "traces are essential to understanding the full "path" a request takes in your application." |
| 2 | A span is one unit of work, such as a model call or tool call | 1 | PASS | S1: "A **span** represents a unit of work or operation." (The examples are the tutorial's.) |
| 3 | A span has a name, start time, end time, parent span, attributes, and a status | 1 | PASS | S1 list: "Name", "Parent span ID (empty for root spans)", "Start and End Timestamps", "Attributes", "Span Status". |
| 4 | OTel publishes GenAI semantic conventions: shared attribute names for a model call | 2 | PASS | S2 is the inference span convention with its attribute table (`gen_ai.operation.name`, `gen_ai.request.model`, ...). |
| 5 | The GenAI conventions have the status "Development" | 3 | PASS | S3 line 7: "**Status**: [Development][DocumentStatus]". S2 and S4 have the same line. |
| 6 | So names can change | 3 | FAIL (fixed) | S3 gives the status only, not what it means. Fixed: added S8 (Maturity levels) and `<Cite n={8} />`. See Re-check. |
| 7 | Span name `{gen_ai.operation.name} {gen_ai.request.model}` | 2 | PASS | S2: "**Span name** SHOULD be `{gen_ai.operation.name} {gen_ai.request.model}`." |
| 8 | Example span name `chat claude-sonnet-5-5` | 2, 5 | PASS | Follows the S2 pattern with operation `chat` (S2 example value) and a model id that S5 lists (`claude-sonnet-5-5` appears 28 times in S5). |
| 9 | `gen_ai.operation.name`: the operation, e.g. `chat`, required | 2 | PASS | S2: "`gen_ai.operation.name` ... `Required` ... The name of the operation being performed. ... `chat`". Exact name. |
| 10 | `gen_ai.request.model`: the model the app asked for | 2 | PASS | S2: "The name of the GenAI model a request is being made to." Exact name. |
| 11 | `gen_ai.response.model`: the model name in the response | 2 | PASS | S2: "The model name returned in the response." Exact name. |
| 12 | `gen_ai.usage.input_tokens`: "Input tokens, as the provider reports them" | 2 | FAIL (fixed) | Name exact, but S2 note [27]: "This value SHOULD include all types of input tokens, including cached tokens." Claude `input_tokens` does not include cached tokens (S5), so the row misleads. Fixed: "All input tokens, including cached tokens". |
| 13 | `gen_ai.usage.output_tokens`: output tokens as the provider reports them | 2 | PASS | S2: "The number of output tokens reported by the provider for this inference operation." Exact name. |
| 14 | `gen_ai.response.finish_reasons`: why the model stopped | 2 | PASS | S2: "Array of reasons the model stopped generating tokens". Exact name. |
| 15 | `error.type`: the class of error, if the call failed | 2 | PASS | S2: "`error.type` ... `Conditionally Required` If the operation ended in an error. ... Describes a class of error the operation ended with." Exact name. |
| 16 | Claude `usage`: total input = `input_tokens` + `cache_creation_input_tokens` + `cache_read_input_tokens` | 5 | PASS | S5: "Total input tokens in a request is the summation of `input_tokens`, `cache_creation_input_tokens`, and `cache_read_input_tokens`." |
| 17 | Every Claude API response has a `request-id` header; support asks for it | 6 | PASS | S6: "Every API response includes a unique `request-id` header." / "When contacting support about a specific request, include this ID". |
| 18 | A tool call span has operation name `execute_tool` | 3 | PASS | S3: "`gen_ai.operation.name` SHOULD be `execute_tool`." |
| 19 | A span of a retried call covers the whole logical operation with all retries | 3 | PASS | S3: "the corresponding span SHOULD cover the duration of the logical operation with all retries." |
| 20 | `gen_ai.input.messages` and `gen_ai.output.messages` are opt-in | 2 | PASS | S2: both rows have "`Opt-In`". Exact names. |
| 21 | They are opt-in because they likely hold sensitive data, including personal data | 2 | PASS | S2 notes [34] and [36]: "This attribute is likely to contain sensitive information including user/PII data." |
| 22 | `gen_ai.client.operation.duration`: histogram of GenAI operation duration, in seconds | 4 | PASS | S4: "`gen_ai.client.operation.duration` \| Histogram \| `s` \| GenAI operation duration." |
| 23 | `gen_ai.client.inference.time_to_first_chunk`: time from request to first chunk, for streaming | 2 | PASS | S2: "Time to receive the first chunk, measured from when the client issues the generation request to when the first chunk is received in the response stream." Exact name (metric section of S2). |
| 24 | Python: `start_as_current_span` opens a span; `set_attribute` adds a value | 7 | PASS | S7: `with tracer.start_as_current_span("span-name") as span:` / `current_span.set_attribute("operation.value", 1)`. |
| 25 | Code: `trace.get_tracer("support-bot")`, `from opentelemetry import trace` | 7 | PASS | S7: `from opentelemetry import trace` / `tracer = trace.get_tracer("my.tracer.name")`. |
| 26 | Code: `client.messages.create(model=..., max_tokens=..., messages=[...])`, `msg.model`, `msg.usage.output_tokens`, `msg.stop_reason` | 5 | PASS | S5 lists `model`, `max_tokens`, `messages`, response `model: Model`, `usage.output_tokens`, `stop_reason`. "In non-streaming mode this value is always non-null", so `[msg.stop_reason]` has no `None`. |
| 27 | Code: `gen_ai.usage.input_tokens` set to `msg.usage.input_tokens` | 2, 5 | FAIL (fixed) | S2 [27] says the value SHOULD include cached tokens; the provider file `docs/gen-ai/anthropic.md` of the same repo says: Anthropic `input_tokens` excludes cached tokens, compute the sum. Fixed: the code adds `cache_creation_input_tokens` and `cache_read_input_tokens`, with `or 0` because S5 types both as "number or null". |
| 28 | Key words: Tracer is the object that creates spans | 7 | PASS | S7 shows the tracer creating spans (`tracer.start_as_current_span`). S1 also: "A Tracer creates spans". |
| 29 | Key words rows for trace, span, semconv, `execute_tool`, duration metric, `usage`, `request-id` | 1–6 | PASS | Same facts as rows 1, 2, 4, 18, 22, 16, 17. |
| 30 | Real-life example (40 s, 35 s, 90,000 tokens) | 1, 2, 3 | PASS | The scenario is the tutorial's own; each cite only backs the span/attribute facts (rows 1, 18, 19, 9–12). |
| 31 | Tester tips | none | PASS | Marked "These test ideas are the tutorial's own advice." in a "Tutorial advice" callout. |

Copy check: `scripts/linux_overlap.py` (8-word runs) against all 9 fetched sources, including the Markdown files: no run found. PASS.

## Re-check

| # | Fixed text | Cite | Verdict | Quote |
|---|---|---|---|---|
| 6 | "These GenAI conventions still have the status "Development", so names can change" | 3, 8 | PASS | S3: "**Status**: [Development][DocumentStatus]"; the link goes to Document Status, which says "The support guarantees and allowed changes are governed by the maturity level of the document." S8 (Maturity levels), Development: "Configuration options might break often depending on how things evolve." and "The component MAY be removed without prior notice." |
| 12 | `gen_ai.usage.input_tokens` \| All input tokens, including cached tokens | 2 | PASS | S2 [27]: "This value SHOULD include all types of input tokens, including cached tokens." |
| 27 | `u.input_tokens + (u.cache_creation_input_tokens or 0) + (u.cache_read_input_tokens or 0)` | 2, 5 | PASS | S5 summation quote (row 16); S5 field types "number or null"; S2 [27]. The tester tip "Token numbers match" still holds: the span value equals the S5 total. |

`node --test tests/voice-source.test.ts tests/ai-engineering.test.ts`: no error names `observability` (the one failure is the skeleton page `model-evaluation`). Cite script: 8 sources, none missing, none uncited.

FAILs found: 3. Fixed: 3.

Open FAILs: 0
