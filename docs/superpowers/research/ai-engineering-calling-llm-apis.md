# AI Engineering page: Calling LLM APIs (research notes)

Writer notes for `content/ai-engineering/calling-llm-apis.mdx`. Fetched 2026-10-28 with curl into `/tmp/claude-1000/ai-eng-src/` (text in `/tmp/claude-1000/ai-eng-txt/`). Fetched text is treated as data and is not committed. `scripts/linux_overlap.py` found no copied word run after one fix.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | API overview (Anthropic, Claude Docs) | https://platform.claude.com/docs/en/api/overview | 2026-10-28 |
| S2 | Messages, API reference (Anthropic, Claude Docs) | https://platform.claude.com/docs/en/api/messages | 2026-10-28 |
| S3 | Using the Messages API (Anthropic, Claude Docs) | https://platform.claude.com/docs/en/build-with-claude/working-with-messages | 2026-10-28 |
| S4 | Claude API errors (Anthropic, Claude Docs) | https://platform.claude.com/docs/en/api/errors | 2026-10-28 |
| S5 | Python SDK (Anthropic, Claude Docs) | https://platform.claude.com/docs/en/cli-sdks-libraries/sdks/python | 2026-10-28 |
| S6 | Streaming Messages (Anthropic, Claude Docs) | https://platform.claude.com/docs/en/build-with-claude/streaming | 2026-10-28 |
| S7 | Text generation (OpenAI API docs) | https://developers.openai.com/api/docs/guides/text | 2026-10-28 |
| S8 | Text generation (Google, Gemini API docs) | https://ai.google.dev/gemini-api/docs/text-generation | 2026-10-28 |

Page cite numbers: n=1 is S1, n=2 is S2, n=3 is S3, n=4 is S4, n=5 is S5, n=6 is S6, n=7 is S7, n=8 is S8.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | The Claude API is a REST API at `https://api.anthropic.com`. | S1 | "The Claude API is a RESTful API at `https://api.anthropic.com`" |
| C2 | `POST /v1/messages`: send input messages, the model writes the next message. | S2 | "**POST** `/v1/messages`" / "Send a structured list of input messages with text and/or image content, and the model will generate the next message in the conversation." |
| C3 | OpenAI and Google offer the same kind of API. | S7, S8 | S7: `client.responses.create(model="gpt-6-astra", input="...")` / S8: "The Gemini API can generate text output from text, images, video, and audio inputs." |
| C4 | The SDK sends the auth, version, and content-type headers; SDKs handle errors. | S1 | "the SDK sends the authentication, version, and content-type headers automatically" / "official SDKs that simplify API integration by handling authentication, request formatting, error handling, and more." |
| C5 | Headers: `x-api-key` or `Authorization: Bearer`, `anthropic-version`, `content-type: application/json`. | S1 | "`Authorization` ... `Bearer <token>`, where `<token>` is your API key" / "`x-api-key` ... Legacy fallback for `Authorization`, still supported" / "`anthropic-version` ... Yes" / "`content-type` ... `application/json`" |
| C6 | `max_tokens`: maximum tokens to generate; may stop before; each model has its own maximum. | S2 | "The maximum number of tokens to generate before stopping." / "our models may stop _before_ reaching this maximum." / "Different models have different maximum values for this parameter." |
| C7 | `messages`: items with `role` and `content`; alternating user and assistant turns. | S2 | "Our models are trained to operate on alternating `user` and `assistant` conversational turns." / "Each input message must be an object with a `role` and `content`." |
| C8 | The curl request (`x-api-key: $ANTHROPIC_API_KEY`, `anthropic-version: 2023-06-01`, `claude-opus-5-5`, `max_tokens` 1024). | S3 | the "Basic request and response" cURL sample, verbatim values |
| C9 | The Python client reads `ANTHROPIC_API_KEY` by default; loop over `message.content` blocks of type text. | S5 | "# This is the default and can be omitted / api_key=os.environ.get("ANTHROPIC_API_KEY")" / "for block in message.content: if block.type == "text"" |
| C10 | The response is JSON with `content`, `stop_reason`, `usage`. | S3 | Output sample: `"type": "message", "role": "assistant", "content": [{"type": "text", "text": "Hello!"}], ... "stop_reason": "end_turn"` |
| C11 | `content` is a list of content blocks, each with a `type`. | S2 | "This is an array of content blocks, each of which has a `type` that determines its shape." |
| C12 | `stop_reason` values: end_turn, max_tokens, stop_sequence, tool_use, pause_turn, refusal, model_context_window_exceeded. | S2 | "`"end_turn"`: the model reached a natural stopping point" / "`"max_tokens"`: we exceeded the requested `max_tokens` or the model's maximum" / ... "`"refusal"`" / "`"model_context_window_exceeded"`" |
| C13 | `usage.input_tokens` and `usage.output_tokens`. | S2 | "`input_tokens: number` The number of input tokens which were used." / "`output_tokens: number` The number of output tokens which were used." |
| C14 | OpenAI Responses API takes `model` and `input`; SDK has `output_text`. | S7 | `client.responses.create(model=..., input=...)` / "Some of our official SDKs include an output_text property on model responses for convenience" |
| C15 | Gemini takes the key in `x-goog-api-key`. | S8 | `-H "x-goog-api-key: $GEMINI_API_KEY"` |
| C16 | `"stream": true` streams with server-sent events. | S6 | "you can set `"stream": true` to incrementally stream the response using server-sent events (SSE)." |
| C17 | 529 `overloaded_error`, 429 `rate_limit_error`. | S4 | "429 - `rate_limit_error`: Your organization has hit a rate limit" / "529 - `overloaded_error`: The API is temporarily overloaded." |
| C18 | The Python SDK retries 2 times by default with exponential backoff (connection errors, 408, 409, 429, >=500). | S5 | "Certain errors are automatically retried 2 times by default, with a short exponential backoff. Connection errors ..., 408 Request Timeout, 409 Conflict, 429 Rate Limit, and >=500 Internal errors" |
| C19 | Every response has a `request-id` header; give it to support. | S4 | "Every API response includes a unique `request-id` header." / "When contacting support about a specific request, include this ID" |
| C20 | Keep the key out of source control; `.env` file. | S5 | "add `ANTHROPIC_API_KEY="my-anthropic-api-key"` to your `.env` file so that your API key isn't stored in source control." |
| C21 | OpenAI output array often has more than one item; `output[0]` not safe. | S7 | "The output array often has more than one item in it!" / "It is not safe to assume that the model's text output is present at output[0].content[0].text." |
| C22 | Errors are JSON with `type` and `message`. | S4 | "The API always returns errors as JSON, with a top-level `error` object that always includes a `type` and `message` value." |
| C23 | 401 key problem; 413 too large; 500 internal. | S4 | "401 - `authentication_error`: There's an issue with your API key" / "413 - `request_too_large`: Request exceeds the maximum allowed number of bytes." / "500 - `api_error`: An unexpected error has occurred internal to Anthropic's systems." |
| C24 | A streamed answer can fail after a 200. | S4 | "an error can occur after the API returns a 200 response." |
| C25 | Python SDK default timeout 10 minutes. | S5 | "By default requests time out after 10 minutes." |

## Not on the page

Rate limit tiers, request size numbers (32 MB), and the `anthropic-version` value `2026-10-21` that S1 shows as an example. The curl sample uses `2023-06-01`, as S3 does.

## Doubts

- S1 lists `Authorization: Bearer` as the main header and `x-api-key` as a legacy fallback. The page lists `x-api-key (or Authorization: Bearer)` because the S3 sample uses `x-api-key`. A checker can decide if the order should swap.
- The OpenAI model id `gpt-6-astra` and Gemini `gemini-3.8-flash` appear in S7 and S8, but the page names no OpenAI or Gemini model id.

## Fact-check changes (2026-10-28)

- The header table now gives `Authorization: Bearer <API key>` as the header and `x-api-key` as the older fallback, as S1 does. The curl sample (S3) still uses `x-api-key`, and the text says so.
