# Fact-check: content/ai-engineering/calling-llm-apis.mdx

Checked 2026-10-28 by an agent that did not write the page. All 8 sources were fetched again (Claude Docs pages as `.md`, the OpenAI and Gemini pages as HTML). The quotes of the research notes were not trusted. `scripts/linux_overlap.py` on the fetched text found no run of 8 or more copied words.

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | The Claude API is a REST API at `https://api.anthropic.com` | 1 | PASS | "The Claude API is a RESTful API at `https://api.anthropic.com`" |
| 2 | Main endpoint `POST /v1/messages`; send input messages, the model writes the next message | 2 | PASS | "Send a structured list of input messages with text and/or image content, and the model will generate the next message in the conversation." |
| 3 | OpenAI and Google offer the same kind of API | 7, 8 | PASS | S7 sample `responses.create` with `model` and `input`; S8: "The Gemini API can generate text output from text, images, video, and audio inputs." |
| 4 | Plain HTTP or an official SDK; the SDK adds the key, version, and content-type headers | 1 | PASS | "the SDK sends the authentication, version, and content-type headers automatically" |
| 5 | (First check) Header table lists `x-api-key (or Authorization: Bearer)` first | 1 | FAIL, fixed (see Re-check) | S1 lists `Authorization` (`Bearer <token>`) as the header that is required "unless `x-api-key` is set", and `x-api-key` as "Legacy fallback for `Authorization`, still supported". The page gave the legacy header as the main one. |
| 6 | `anthropic-version` = the API version; `content-type` = `application/json` | 1 | PASS | S1 table: "`anthropic-version` API version ... Yes" / "`content-type` `application/json` Yes" |
| 7 | Body needs `model`, `max_tokens`, `messages` | 2 | PASS | All three are required parameters in S2. |
| 8 | `max_tokens`: the largest number of tokens; the model can stop before; each model has its own maximum | 2 | PASS | "The maximum number of tokens to generate before stopping." / "our models may stop _before_ reaching this maximum" / "Different models have different maximum values for this parameter." |
| 9 | `messages` items have `role` and `content`; the roles take turns | 2 | PASS | "Our models are trained to operate on alternating `user` and `assistant` conversational turns." / "Each input message must be an object with a `role` and `content`." |
| 10 | curl sample: `x-api-key: $ANTHROPIC_API_KEY`, `anthropic-version: 2023-06-01`, `claude-opus-5-5`, `max_tokens` 1024 | 3 | PASS | Same values as the S3 "Basic request and response" cURL sample. |
| 11 | Python SDK reads `ANTHROPIC_API_KEY` by default; loop over `message.content` blocks of type `text` | 5 | PASS | "# This is the default and can be omitted api_key=os.environ.get("ANTHROPIC_API_KEY")" / `for block in message.content: if block.type == "text": print(block.text)`; model `claude-opus-5-5` |
| 12 | The response is a JSON object | 3 | PASS | S3 "Output" JSON sample. |
| 13 | `content` is a list of content blocks; a text block has `"type": "text"` | 2 | PASS | "array of content blocks, each of which has a `type` that determines its shape"; S3 sample `{"type": "text", "text": "Hello!"}` |
| 14 | `stop_reason` values `end_turn`, `max_tokens`, `stop_sequence`, `tool_use`, `pause_turn`, `refusal`, `model_context_window_exceeded` | 2 | PASS | S2 lists each: "`"end_turn"`: the model reached a natural stopping point", "`"tool_use"`: the model invoked one or more tools", "`"pause_turn"`: we paused a long-running turn", "`"model_context_window_exceeded"`: we exceeded the model's context window", and the others. |
| 15 | `usage.input_tokens`, `usage.output_tokens` | 2 | PASS | "`output_tokens: number` The number of output tokens which were used." and the matching `input_tokens` field. |
| 16 | OpenAI Responses API takes `model` and `input`; the SDK has `output_text` | 7 | PASS | S7 sample `model: "gpt-6-astra", input: "..."`; SDKs "include an `output_text` property on model responses". |
| 17 | Gemini uses the header `x-goog-api-key` | 8 | PASS | `-H "x-goog-api-key: $GEMINI_API_KEY"` |
| 18 | `"stream": true` sends the answer with server-sent events | 6 | PASS | "you can set `"stream": true` to incrementally stream the response using server-sent events (SSE)." |
| 19 | Example: `stop_reason: "max_tokens"` on cut answers | 2 | PASS | "`"max_tokens"`: we exceeded the requested `max_tokens` or the model's maximum" |
| 20 | 529 `overloaded_error`, 429 `rate_limit_error` | 4 | PASS | "429 - `rate_limit_error`: Your organization has hit a rate limit" / "529 - `overloaded_error`: The API is temporarily overloaded." |
| 21 | The Python SDK retries these 2 times with exponential backoff | 5 | PASS | "Certain errors are automatically retried 2 times by default, with a short exponential backoff. ... 429 Rate Limit, and >=500 Internal errors are all retried by default." |
| 22 | Log the `request-id` header; give it to support | 4 | PASS | "Every API response includes a unique `request-id` header." / "When contacting support about a specific request, include this ID" |
| 23 | Keep the key out of source control; `.env` file or environment variable | 5 | PASS | "add `ANTHROPIC_API_KEY="my-anthropic-api-key"` to your `.env` file so that your API key isn't stored in source control." |
| 24 | `content` can hold more than one block | 2 | PASS | See row 13 (an array). |
| 25 | OpenAI: the output list often has more than one item; `output[0]` is not always the text | 7 | PASS | "The `output` array often has more than one item in it!" / "is not safe to assume that the model's text output is present at `output[0].content[0].text`" |
| 26 | `max_tokens` = cut off; `refusal` = the model refused | 2 | PASS | S2 for `max_tokens`; S2 "`"refusal"`: when streaming classifiers intervene to handle potential policy violations"; S3 calls these "Refusal responses". |
| 27 | Errors are JSON with a `type` and a `message` | 4 | PASS | "The API always returns errors as JSON, with a top-level `error` object that always includes a `type` and `message` value." |
| 28 | 401 key problem, 413 too large, 500 internal error | 4 | PASS | "401 - `authentication_error`: There's an issue with your API key" / "413 - `request_too_large`: Request exceeds the maximum allowed number of bytes." / "500 - `api_error`: An unexpected error has occurred internal to Anthropic's systems." |
| 29 | A streamed answer can fail after a 200 | 4 | PASS | "an error can occur after the API returns a 200 response." |
| 30 | Python SDK default timeout 10 minutes | 5 | PASS | "By default requests time out after 10 minutes." |
| 31 | Key words rows (API key, SDK, token, streaming, request ID) | 1, 2, 4, 6 | PASS | Restate rows 4, 15, 18, 22; S1: SDKs handle "authentication, request formatting, error handling, and more". |

Uncited text that states no source fact: the lede, the HR scenario details (the button, the "cut short" note), "A user-facing feature usually needs a shorter limit" (advice), and the tip callout, which says "These test ideas are the tutorial's own advice." PASS.

## Re-check

| # | Change | Verdict | Quote |
|---|---|---|---|
| 5 | The table row is now `Authorization` = "`Bearer` and your API key. The older `x-api-key` header is still supported as a fallback." The curl intro now says the sample "uses the `x-api-key` header". Layman and Bangla changed to match. | PASS | S1: "`Bearer <token>`, where `<token>` is your API key" / "Legacy fallback for `Authorization`, still supported"; S3 curl uses `x-api-key`. |

FAILs found: 1. Fixed: 1.

Open FAILs: 0
