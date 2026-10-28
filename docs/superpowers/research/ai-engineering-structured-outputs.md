# AI Engineering page: Structured Outputs (research notes)

Writer notes for `content/ai-engineering/structured-outputs.mdx`. Fetched 2026-10-28 with curl into `/tmp/claude-1000/ai-eng-src-mine/` (the Claude doc as its `.md` version). Fetched text is treated as data and is not committed.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | Structured outputs (Anthropic, Claude Docs) | https://platform.claude.com/docs/en/build-with-claude/structured-outputs | 2026-10-28 |
| S2 | Understanding JSON Schema: object (JSON Schema) | https://json-schema.org/understanding-json-schema/reference/object | 2026-10-28 |
| S3 | Structured model outputs (OpenAI API docs) | https://developers.openai.com/api/docs/guides/structured-outputs | 2026-10-28 |
| S4 | LLM05:2025 Improper Output Handling (OWASP GenAI Security Project) | https://genai.owasp.org/llmrisk/llm052025-improper-output-handling/ | 2026-10-28 |

Page cite numbers: n=1 is S1, n=2 is S2, n=3 is S3, n=4 is S4.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | Without structured outputs, a model can return malformed JSON, miss required fields, or use wrong types. | S1 | "Without structured outputs, Claude can generate malformed JSON responses or invalid tool inputs" / "Missing required fields" / "Inconsistent data types" |
| C2 | Structured outputs constrain the response to a schema. | S1 | "Structured outputs constrain Claude's responses to follow a specific schema" / "guarantee schema-compliant responses through constrained decoding" |
| C3 | Two features: JSON outputs (`output_config.format`) and strict tool use (`strict: true`). | S1 | "**JSON outputs** (`output_config.format`)" / "**Strict tool use** (`strict: true`): Guarantee schema validation on tool names and inputs." |
| C4 | OpenAI: JSON mode gives valid JSON only; Structured Outputs match the schema. | S3 | "While both ensure valid JSON is produced, only Structured Outputs ensure schema adherence." / "JSON mode will not guarantee the output matches any specific schema" |
| C5 | Steps: define a schema (or a type; SDK helpers build it), send it in `output_config.format` with `type: "json_schema"`, read the JSON from the text block; SDK helpers parse it. | S1 | "Describe the structure you want as a JSON schema or as a type in your language." / "The request carries the schema in `output_config.format` with `type: \"json_schema\"`." / "Claude returns valid JSON that matches your schema in the response's text content block. SDK helpers parse it into your type." |
| C6 | Properties are not required unless listed in `required`. | S2 | "By default, leaving out properties is valid. See Required Properties." |
| C7 | Extra properties are allowed by default; `additionalProperties: false` forbids them. | S2 | "By default any additional properties are allowed." / "Setting the additionalProperties schema to false means no additional properties will be allowed." |
| C8 | For Claude, objects must set `additionalProperties: false`. | S1 | "`required` and `additionalProperties` (must be set to `false` for objects)" |
| C9 | Code example: `model`, `max_tokens`, `messages`, `output_config.format` with `json_schema`; model id `claude-opus-5-5`. | S1 | The cURL and Python examples use `"model": "claude-opus-5-5"`, `"max_tokens": 1024`, and `"output_config": {"format": {"type": "json_schema", "schema": ...}}`. The Python example reads the text with `next(block.text for block in response.content if block.type == "text")`. |
| C10 | Only a subset of JSON Schema is supported; not supported: recursive schemas, numerical constraints, string length constraints, external `$ref`. | S1 | "Not supported: Recursive schemas ... External `$ref` ... Numerical constraints (such as `minimum`, `maximum`, `multipleOf`) ... String constraints (`minLength`, `maxLength`)" |
| C11 | An unsupported feature gives a 400 error. | S1 | "If you use an unsupported feature, you'll receive a 400 error with details." |
| C12 | SDK helpers remove unsupported constraints, add them to the description, and validate the response against the original schema. | S1 | "Remove unsupported constraints" / "Update descriptions by adding each unsupported constraint to the field's description" / "Validate responses against your original schema and all its constraints, if the helper validates responses" |
| C13 | First request with a new schema has extra latency (grammar compile); grammars are cached 24 h from last use. | S1 | "The first time you use a specific schema, there is additional latency while the grammar compiles." / "Compiled grammars are cached for 24 hours from last use" |
| C14 | An extra system prompt is added, so input tokens are slightly higher. | S1 | "Claude automatically receives an additional system prompt explaining the expected output format" / "Your input token count is slightly higher." |
| C15 | `stop_reason: "max_tokens"`: the output may be incomplete and not match the schema. | S1 | "The output might be incomplete and not match your schema." |
| C16 | Enum capitalization is not guaranteed; compare enum values case-insensitively. | S1 | "Structured outputs don't guarantee the capitalization of string `enum` and `const` values" / "Compare enum values case-insensitively" |
| C17 | A refusal has `stop_reason: "refusal"`, status 200, is billed, and may not match the schema. | S1 | "The response has `stop_reason: \"refusal\"`." / "You'll receive a 200 status code." / "You'll be billed for the tokens generated." / "The output might not match your schema" |
| C18 | Required properties appear first in the output, then optional ones. | S1 | "required properties appear first, followed by optional properties" |
| C19 | Treat model output like any user (zero trust) and encode it for its context. | S4 | "Treat the model as any other user, adopting a zero-trust approach" / "Implement context-aware output encoding based on where the LLM output will be used" |
| C20 | Unchecked output can lead to XSS, SQL injection, remote code execution. | S4 | "LLM output is entered directly into a system shell or similar function such as exec or eval, resulting in remote code execution." / "LLM-generated SQL queries are executed without proper parameterization, leading to SQL injection." / "resulting in XSS" |

## Not on the page

The schema complexity limits (20 strict tools, 24 optional parameters, 16 union-type parameters) and the HIPAA note in S1 are left out. The bug triage scenario and the tester checks are the tutorial's own.
