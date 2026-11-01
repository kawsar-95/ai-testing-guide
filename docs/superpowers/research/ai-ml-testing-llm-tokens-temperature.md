# Research notes: AI/ML Testing, Tokens, Probabilities, and Temperature

Page: `content/ai-ml-testing/llm-tokens-temperature.mdx` (data: `scripts/ai_ml_testing_pages_p1a.py`). Accessed 2026-11-02.

## Sources

| ID | Key | Title | Publisher | URL | Accessed |
|---|---|---|---|---|---|
| S1 | `anthropic-tokens` | Token counting | Anthropic (Claude API docs) | https://docs.anthropic.com/en/docs/build-with-claude/token-counting (301 to platform.claude.com) | 2026-11-02 |
| S2 | `anthropic-temp` | Messages API reference (library title "Temperature") | Anthropic (Claude API docs) | https://docs.anthropic.com/en/api/messages (301 to platform.claude.com/docs/en/api/messages) | 2026-11-02 |
| S3 | `lostmiddle` | Lost in the Middle: How Language Models Use Long Contexts (Liu et al.) | arXiv | https://arxiv.org/abs/2307.03172 | 2026-11-02 |

Removed: `anthropic-prompt` (Prompt engineering overview). It says nothing about long contexts or system prompt tokens.

Note on S2: the Messages API reference no longer documents `temperature` (0 matches on 2026-11-02). It documents `max_tokens`, `system`, and the `stop_reason` values. The library title "Temperature" does not match.

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| C1 | Token counting gives the input tokens of a message before sending it. | S1 | "determine the number of tokens in a message before you send it" |
| C2 | The count is an estimate. | S1 | "The token count is an **estimate**." |
| C3 | Claude 4.7 and later produce about 30% more tokens for the same text. | S1 | "approximately 30 percent more tokens than on earlier models" |
| C4 | Token counting helps manage rate limits and costs. | S1 | "Proactively manage rate limits and costs" |
| C5 | The counting endpoint accepts system prompts; response has `input_tokens`. | S1 | "including support for system prompts" |
| C6 | Python method `client.messages.count_tokens(...)`, field `input_tokens`. | S1 | `response = client.messages.count_tokens(` / `{ "input_tokens": 14 }` |
| C7 | `max_tokens` is the maximum number of tokens to generate. | S2 | "The maximum number of tokens to generate before stopping." |
| C8 | `stop_reason` `"max_tokens"` when the cap is reached. | S2 | "we exceeded the requested `max_tokens` or the model's maximum" |
| C9 | Performance is highest with relevant info at start or end, drops in the middle. | S3 | "performance is often highest when relevant information occurs at the beginning or end" |
| C10 | Temperature mechanics, embeddings, the 4-step loop, argmax. | none | Labeled as the tutorial's own simplified explanation. |
| C11 | `claude-sonnet-4-6` is a valid model id that still accepts `temperature`. | Messages API enum; Sonnet 5.5 migration guide (checked, not cited) | "Claude Sonnet 4.6 or earlier ... Remove `temperature`" |
