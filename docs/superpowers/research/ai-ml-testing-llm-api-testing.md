# Research notes: AI/ML Testing, Testing LLM APIs

Page: `content/ai-ml-testing/llm-api-testing.mdx` (data in `scripts/ai_ml_testing_pages_p1d.py`). Accessed 2026-11-02.

## Sources

| ID | Title | Publisher | URL | Accessed |
|---|---|---|---|---|
| S1 | Chat API reference | OpenAI (API docs) | https://platform.openai.com/docs/api-reference/chat | 2026-11-02 |
| S2 | Temperature (the Messages API reference) | Anthropic (Claude API docs) | https://docs.anthropic.com/en/api/messages | 2026-11-02 |
| S3 | Token counting | Anthropic (Claude API docs) | https://docs.anthropic.com/en/docs/build-with-claude/token-counting | 2026-11-02 |
| S4 | Gemini API documentation | Google (AI for Developers) | https://ai.google.dev/gemini-api/docs | 2026-11-02 |

S1 returns 403 to scripts. The same reference was read at its official mirror, https://developers.openai.com/api/reference/resources/chat/subresources/completions/methods/create. S2 and S3 redirect (301) to platform.claude.com/docs; the content is the same document.

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| C1 | Chat Completions takes `model` and `messages` (required), `temperature`, max tokens, `stream`. | S1 | "A list of messages comprising the conversation so far." |
| C2 | `stream`: the response is streamed as it is generated. | S1 | "streamed to the client as it is generated" |
| C3 | Newer OpenAI models use `developer` messages in place of `system`. | S1 | "`developer` messages replace the previous `system` messages" |
| C4 | Claude takes the system prompt as a top-level `system` parameter. | S2 | "A system prompt is a way of providing context and instructions" |
| C5 | Claude `stream` uses server-sent events. | S2 | "incrementally stream the response using server-sent events" |
| C6 | Claude `usage` is billing and rate-limit usage (`input_tokens`, `output_tokens`). | S2 | "Billing and rate-limit usage." |
| C7 | Token counting counts tokens before sending, to manage limits and costs. | S3 | "Count the tokens in a message before you send it to Claude." |
| C8 | Gemini has its own SDKs and request format (quickstart uses an `input` field). | S4 | "Go from a quick prompt to production apps and agents" |
