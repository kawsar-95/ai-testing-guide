# Research notes: AI/ML Testing, Structured Outputs and Validation

Page: `content/ai-ml-testing/structured-outputs.mdx` (data: `scripts/ai_ml_testing_pages_p1b.py`). Accessed 2026-11-02.

## Sources

| ID | Title | Publisher | URL | Accessed |
|---|---|---|---|---|
| S1 | Structured outputs | OpenAI (API docs) | https://platform.openai.com/docs/guides/structured-outputs (301 to developers.openai.com/api/docs/guides/structured-outputs) | 2026-11-02 |
| S2 | Messages API (library title "Temperature") | Anthropic (Claude API docs) | https://docs.anthropic.com/en/api/messages (301 to platform.claude.com/docs/en/api/messages) | 2026-11-02 |
| S3 | Chat API reference | OpenAI (API docs) | https://platform.openai.com/docs/api-reference/chat (now developers.openai.com/api/reference/resources/chat) | 2026-11-02 |

Note: the source library gives S2 the title "Temperature", but the URL is the Messages API reference. The page uses S2 only for `stop_reason`. The title belongs to `scripts/ai_ml_testing_sources.py`, which this check does not edit.

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| C1 | Structured Outputs makes the model follow the supplied JSON Schema. | S1 | "ensures the model will always generate responses that adhere to your supplied JSON Schema" |
| C2 | JSON mode gives valid JSON. | S1 | "JSON mode ensures that model output is valid JSON" |
| C3 | JSON mode does not guarantee a schema. | S1 | "JSON mode will not guarantee the output matches any specific schema" |
| C4 | Edge cases: a max-token limit gives an incomplete response. | S1 | "you reach a max tokens limit and the response is incomplete" |
| C5 | Edge cases: refusals are detectable through a `refusal` field. | S1 | Guide section on refusals. |
| C6 | Strict schemas need `additionalProperties: false`. | S1 | "`additionalProperties: false` must always be set in objects" |
| C7 | A tool call has a function `name` and `arguments`. | S3 | `tool_calls[].function.name`, `function.arguments` |
| C8 | Arguments are JSON text, not always valid, may hold hallucinated parameters; validate them. | S3 | "does not always generate valid JSON, and may hallucinate parameters" |
| C9 | `finish_reason` `length` means the token limit was reached. | S3 | `length`: the maximum token limit was reached |
| C10 | Claude Messages API has `stop_reason` `max_tokens`. | S2 | "stop_reason=max_tokens" |

The three validation layers, the pydantic example, and the test functions are the tutorial's own. pydantic v2 `BaseModel.model_validate` and `ValidationError` are standard pydantic v2 API.
