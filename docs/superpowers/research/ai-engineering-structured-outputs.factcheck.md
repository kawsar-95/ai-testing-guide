# Fact-check: AI Engineering, Structured Outputs

Page: `content/ai-engineering/structured-outputs.mdx`. Checked 2026-10-28 by an agent that did not write the page. Each source was fetched again (the Claude doc as its `.md` version). Fetched text is data and is not committed.

| n | Source | Official? |
|---|---|---|
| 1 | https://platform.claude.com/docs/en/build-with-claude/structured-outputs | yes (Anthropic docs) |
| 2 | https://json-schema.org/understanding-json-schema/reference/object | yes (JSON Schema project) |
| 3 | https://developers.openai.com/api/docs/guides/structured-outputs | yes (OpenAI docs) |
| 4 | https://genai.owasp.org/llmrisk/llm052025-improper-output-handling/ | yes (OWASP GenAI) |

`scripts/linux_overlap.py` against the 4 fetched texts found no copied run of 8 or more words.

## Claims (Technical panels, code, Key words)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Without help, a model can return broken JSON, leave out a required field, or use the wrong data type. | 1 | PASS | "Without structured outputs, Claude can generate malformed JSON responses" / "Missing required fields" / "Inconsistent data types" |
| 2 | You give a JSON Schema and the API limits the output to text that matches it. | 1 | PASS | "Structured outputs constrain Claude's responses to follow a specific schema" / "through constrained decoding" |
| 3 | Two related features: JSON outputs (`output_config.format`) and strict tool use (`strict: true`) on tool name and input. | 1 | PASS | "two complementary features" / "**JSON outputs** (`output_config.format`)" / "**Strict tool use** (`strict: true`): Guarantee schema validation on tool names and inputs." |
| 4 | OpenAI separates JSON mode (valid JSON only) from Structured Outputs (also match the schema). | 3 | PASS | "While both ensure valid JSON is produced, only Structured Outputs ensure schema adherence." |
| 5 | A valid shape is not a true answer. | none | PASS | Tutorial's own reasoning, not a source fact. |
| 6 | Step 1: describe the shape with a JSON Schema; an SDK can build it from a type. | 1 | PASS | "Describe the structure you want as a JSON schema or as a type in your language." |
| 7 | Step 2: send it in `output_config.format` with `type: "json_schema"`. | 1 | PASS | "The request carries the schema in `output_config.format` with `type: \"json_schema\"`." |
| 8 | Step 3: read JSON from the text block; an SDK helper can parse it into your type. | 1 | PASS | "matches your schema in the response's text content block. SDK helpers parse it into your type." |
| 9 | A property is optional unless listed in `required`. | 2 | PASS | "By default, leaving out properties is valid. See Required Properties." |
| 10 | Extra properties are allowed unless `additionalProperties` is `false`. | 2 | PASS | "By default any additional properties are allowed." / "Setting the additionalProperties schema to false means no additional properties will be allowed." |
| 11 | For Claude, every object must set `additionalProperties: false`. | 1 | PASS | "`required` and `additionalProperties` (must be set to `false` for objects)" |
| 12 | Code: `Anthropic` client, `messages.create`, `model="claude-opus-5-5"`, `max_tokens=1024`, `output_config={"format": {"type": "json_schema", "schema": ...}}`. | 1 | PASS | The Python example: `model="claude-opus-5-5"`, `max_tokens=1024`, `output_config={"format": {"type": "json_schema", "schema": {...}}}`. |
| 13 | Code: reads the text with `response.content[0].text`. | 1 | FAIL | The docs read the text block with `next(block.text for block in response.content if block.type == "text")`. The first content block is not always a text block. |
| 14 | The API supports a subset of JSON Schema. | 1 | PASS | "Structured outputs support standard JSON Schema with some limitations." / "a subset of the JSON Schema language" |
| 15 | Not supported: recursive schemas, `minimum`/`maximum`/`multipleOf`, `minLength`/`maxLength`, external `$ref`. | 1 | PASS | "Recursive schemas" / "External `$ref` (for example, `'$ref': 'http://...'`)" / "Numerical constraints (such as `minimum`, `maximum`, `multipleOf`)" / "String constraints (`minLength`, `maxLength`)" |
| 16 | "A comment that holds a list of comments" as an example of a recursive schema. | none | PASS | An illustration of the term, not a source fact. |
| 17 | An unsupported feature gives a 400 error. | 1 | PASS | "If you use an unsupported feature, you'll receive a 400 error with details." |
| 18 | Some SDK helpers remove these limits, write them into the description, and check the response against the full schema. | 1 | PASS | "Remove unsupported constraints" / "Update descriptions by adding each unsupported constraint to the field's description" / "Validate responses against your original schema and all its constraints, if the helper validates responses" |
| 19 | The first request with a new schema is slower (grammar compile); the grammar is cached 24 hours after last use. | 1 | PASS | "there is additional latency while the grammar compiles" / "Compiled grammars are cached for 24 hours from last use" |
| 20 | The API adds a system prompt about the format, so a few more input tokens. | 1 | PASS | "Claude automatically receives an additional system prompt explaining the expected output format" / "Your input token count is slightly higher." |
| 21 | Bug triage helper scenario. | none | PASS | The tutorial's own example. |
| 22 | `stop_reason: "max_tokens"`: JSON cut off, can be incomplete and not match the schema. | 1 | PASS | "The response has `stop_reason: \"max_tokens\"`." / "The output might be incomplete and not match your schema." |
| 23 | Enum capitalization is not guaranteed, so `"High"` can come back for `"high"`. | 1 | PASS | "Structured outputs don't guarantee the capitalization of string `enum` and `const` values: Claude might return a value that differs from your schema only in capitalization" |
| 24 | Compare enum values without case, as the docs advise. | 1 | PASS | "Compare enum values case-insensitively" |
| 25 | OWASP: treat model output like input from any user; encode it for where it is used. | 4 | PASS | "Treat the model as any other user, adopting a zero-trust approach" / "Implement context-aware output encoding based on where the LLM output will be used" |
| 26 | JSON mode makes JSON valid, not schema-matching. | 3 | PASS | "JSON mode will not guarantee the output matches any specific schema, only that it is valid and parses without errors" |
| 27 | A refusal or `max_tokens` can give output that does not match the schema. | 1 | PASS | "The output might not match your schema because the refusal message takes precedence over schema constraints." / "The output might be incomplete and not match your schema." |
| 28 | A refusal still has status 200 and still costs tokens. | 1 | PASS | "You'll receive a 200 status code." / "You'll be billed for the tokens generated." |
| 29 | Recursive schemas and number limits get a 400 error. | 1 | PASS | Same as rows 15 and 17. |
| 30 | Required properties come first in the output, then optional ones. | 1 | PASS | "required properties appear first, followed by optional properties" |
| 31 | Unchecked output into HTML, SQL, or a shell can cause XSS, SQL injection, or code execution. | 4 | PASS | "resulting in XSS" / "leading to SQL injection" / "entered directly into a system shell or similar function such as exec or eval, resulting in remote code execution" |
| 32 | Tester tips. | none | PASS | Marked "These test ideas are the tutorial's own advice." |
| 33 | Key words: Structured outputs, Strict tool use, `stop_reason`. | 1 | PASS | Same quotes as rows 2, 3, 22, 27. |
| 34 | Key words: JSON Schema with `required`; `additionalProperties: false`. | 2 | PASS | Same quotes as rows 9 and 10. |
| 35 | Key words: JSON mode. | 3 | PASS | Same quote as row 26. |
| 36 | Key words: Improper output handling = passing output to other systems without checks. | 4 | PASS | "insufficient validation, sanitization, and handling of the outputs generated by large language models before they are passed downstream to other components and systems" |

Note on row 23: the docs say the case change is "typically in the first letter of a word following a space". `"High"` for `"high"` is a case change of a first letter, so the claim "can come back" holds.

## Fixes

| # | Fix |
|---|---|
| 13 | The code now reads the text with `text = next(block.text for block in response.content if block.type == "text")`, as in the docs. The research notes (C9) record this. The notes quotes for C4 and C6 were also changed to the exact text of the current pages. |

## Re-check

| # | Claim | Cite | Verdict | Quote |
|---|---|---|---|---|
| 13 | Code reads the first text block with `next(block.text for block in response.content if block.type == "text")`. | 1 | PASS | Docs Python example: `text = next(block.text for block in response.content if block.type == "text")` |

Open FAILs: 0
