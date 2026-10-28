# Research notes: ai-concepts/inference-economics

Page: `content/ai-concepts/inference-economics.mdx` (title "Inference Economics").
Accessed: 2026-10-28 for all sources. The topic comes from a third-party infographic. No text of the infographic is used. Its claims are only a seed, checked below.

## Sources

| ID | Title | Publisher | URL |
|---|---|---|---|
| S1 | Pricing | Anthropic (Claude Platform docs) | https://platform.claude.com/docs/en/about-claude/pricing |
| S2 | Prompt caching | Anthropic (Claude Platform docs) | https://platform.claude.com/docs/en/build-with-claude/prompt-caching |
| S3 | Batch processing | Anthropic (Claude Platform docs) | https://platform.claude.com/docs/en/build-with-claude/batch-processing |
| S4 | Effort | Anthropic (Claude Platform docs) | https://platform.claude.com/docs/en/build-with-claude/effort |
| S5 | Steering thinking | Anthropic (Claude Platform docs) | https://platform.claude.com/docs/en/build-with-claude/thinking-steering-and-cost |
| S6 | Pricing | OpenAI (API docs) | https://developers.openai.com/api/docs/pricing |
| S7 | Prompt caching | OpenAI (API docs) | https://developers.openai.com/api/docs/guides/prompt-caching |
| S8 | Batch API | OpenAI (API docs) | https://developers.openai.com/api/docs/guides/batch |
| S9 | Manage costs effectively | Anthropic (Claude Code docs) | https://code.claude.com/docs/en/costs |
| S10 | CLI reference | Anthropic (Claude Code docs) | https://code.claude.com/docs/en/cli-reference |

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| 1 | Prices are per million tokens (MTok). | S1 | "MTok: Million tokens. $5 / MTok is $5 for every million tokens." |
| 2 | Claude Sonnet 5.5: input $2, 5m cache write $2.50, 1h write $4, cache hit $0.10, output $10 per MTok. | S1 | Model table row "Claude Sonnet 5.5 \| $2 / MTok \| $2.50 / MTok \| $4 / MTok \| $0.10 / MTok \| $10 / MTok" |
| 3 | Claude Opus 5.5: input $4, output $20 per MTok. Haiku 4.5: $1 / $5. | S1 | Rows "Claude Opus 5.5 \| $4 / MTok ... $20 / MTok"; "Claude Haiku 4.5 \| $1 / MTok ... $5 / MTok" |
| 4 | Cache write multipliers: 5-minute 1.25x, 1-hour 2x base input. | S1 | "5-minute cache write \| 1.25x base input price"; "1-hour cache write \| 2x base input price" |
| 5 | Cache read is 0.1x base input on most models; 0.05x on Opus 5.5 and Sonnet 5.5; 0.025x on Fable 5.1 and Mythos 5.1. | S1 | "0.1x base input price (0.025x on Claude Fable 5.1 and Claude Mythos 5.1; 0.05x on Claude Opus 5.5 and Claude Sonnet 5.5)" |
| 6 | Caching pays off after one read (5-min) or two reads (1-hour). | S1 | "caching pays off after one cache read for the 5-minute duration (1.25x write), or after two cache reads for the 1-hour duration (2x write)" |
| 7 | Cache multipliers stack with the Batch discount. | S1 | "These multipliers stack with other pricing modifiers, including the Batch API discount" |
| 8 | Claude 4.7 and later use a tokenizer that makes about 30% more tokens for the same text. | S1 | "This tokenizer produces approximately 30% more tokens for the same text." |
| 9 | Batch API: 50% off input and output. | S1 | "a 50 percent discount on both input and output tokens" |
| 10 | Caching reuses a prompt prefix. | S2 | "allowing resuming from specific prefixes in your prompts" |
| 11 | Default cache lifetime is 5 minutes; each use refreshes it at no cost. | S2 | "By default, the cache has a 5-minute lifetime. The cache is refreshed for no additional cost each time the cached content is used." |
| 12 | Usage fields: cache_creation_input_tokens, cache_read_input_tokens, input_tokens; total = sum. | S2 | "total_input_tokens = cache_read_input_tokens + cache_creation_input_tokens + input_tokens" |
| 13 | Prompts below a minimum length (for example 1,024 tokens on Sonnet 5) are not cached, and no error is returned. | S2 | "1,024 tokens for Claude Opus 4.8, Claude Sonnet 5, Claude Sonnet 4.6"; "processed without caching, and no error is returned" |
| 14 | Most batches finish in under 1 hour; batches expire after 24 hours. | S3 | "most batches completing within 1 hour"; "Batches expire if processing does not complete within 24 hours." |
| 15 | Effort affects all output tokens: text, tool calls, thinking. | S4 | "The effort parameter affects **all tokens** in the response" |
| 16 | Effort is a signal, not a strict budget. | S4 | "Effort is a behavioral signal, not a strict token budget." |
| 17 | Default effort is high on most models; medium on Opus 5.5 and Haiku 5.5. | S4 | "Most Claude models default to high effort ... Claude Opus 5.5 and Claude Haiku 5.5 default to medium." |
| 18 | A change of top-level effort between requests invalidates the prompt cache. | S4 | "Changing the top-level effort value between requests invalidates prompt caching" |
| 19 | Thinking tokens are billed as output tokens. | S5 | "Tokens Claude uses while thinking (billed as output tokens)" |
| 20 | You pay for the full thinking, not the visible summary; thinking_tokens field. | S5 | "You are billed for the full thinking process, not the thinking content visible in the response." / "read `usage.output_tokens_details.thinking_tokens`" |
| 21 | max_tokens is a hard cap on thinking plus text. | S5 | "`max_tokens` is a hard cap on total output for the request, thinking and response text combined." |
| 22 | OpenAI gpt-6.1-sol: input $2.00, cached input $0.10, output $10.00 per 1M (short context). | S6 | Table row "gpt-6.1-sol \| $2.00 \| $0.10 \| $10.00" |
| 23 | OpenAI caching is on by default; cached input discounted up to 95%; minimum 1,024 tokens for GPT-5.6 and later; field cached_tokens. | S7 | "Prompt caching is enabled by default for supported OpenAI models."; "discounted up to 95%"; "Track `usage.input_tokens_details.cached_tokens`" |
| 24 | OpenAI Batch API: 50% discount, 24h completion window. | S8 | "50% cost discount compared to synchronous APIs"; "the completion window can only be set to `24h`" |
| 25 | Claude Code `/usage` shows the session cost; it is a local estimate at list price. | S9 | "Claude Code computes the dollar figure locally from token counts at list price"; "The figure is an estimate" |
| 26 | `/usage` shows prompt cache stats (share of input from cache, misses). | S9 | "the share of input tokens served from cache, cache misses" |
| 27 | `--max-budget-usd` stops a print-mode run at an estimated spend; spend can pass the cap. | S10 | "Stop the run once estimated spend on API calls reaches this amount (print mode only)"; "Spend can pass the cap" |
| 28 | `--output-format` options: text, json, stream-json. | S10 | "options: `text`, `json`, `stream-json`" |

## Infographic seed: check results

| Seed claim | Verdict | Correct fact |
|---|---|---|
| Cache hit is "~5% cost" | CORRECTED (model-specific) | Anthropic standard cache read is 0.1x (10%) of base input. It is 0.05x only on Opus 5.5 and Sonnet 5.5, and 0.025x on Fable 5.1 and Mythos 5.1 (S1). OpenAI says "up to 95%" off (S7). Also, a cache write costs more than a normal input token on Anthropic: 1.25x (5 min) or 2x (1 h) (S1). |
| Cache miss = full cost | PARTLY | A miss that writes the cache costs 1.25x or 2x on Anthropic, more than the base price (S1). An uncached token is the base price. |
| Output tokens "5x input price" | TRUE for the models checked, but provider- and model-specific | Sonnet 5.5 $2/$10, Opus 5.5 $4/$20, Haiku 4.5 $1/$5 (S1); OpenAI gpt-6.1-sol $2/$10 short context only (S6). Long context (>272K input tokens) is $4.00/$15.00, a 3.75x ratio (S6: "Short context: ≤272K input tokens. Long context: >272K input tokens."). The page says the ratio depends on the provider, model, and prompt length. |
| "Batch jobs: 50% off" | TRUE | Anthropic 50% on input and output (S1); OpenAI 50% (S8). Results are not instant: up to 24 h (S3, S8). |
| "Lower effort = fewer thinking tokens" | INCOMPLETE | Effort affects all output tokens (text, tool calls, thinking) and is a signal, not a budget (S4). Thinking is billed as output (S5). |
| Real metric = cost per finished task | Tutorial framing | No source; the page marks it as the tutorial's own advice and shows the arithmetic in an invented example. |

## Worked example arithmetic (invented numbers, prices from S1, Sonnet 5.5)

200 calls. Each call: 20,000-token shared prefix, 3,000 unique input tokens, 1,000 output tokens.

- No cache: (23,000 x $2 + 1,000 x $10) / 1,000,000 = $0.046 + $0.010 = $0.056 per call. 200 calls = $11.20.
- Batch, no cache: $11.20 / 2 = $5.60.
- Cache (5 min), all calls inside the lifetime: first call 20,000 x $2.50 + 3,000 x $2 + 1,000 x $10 = $0.050 + $0.006 + $0.010 = $0.066. Each later call 20,000 x $0.10 + 3,000 x $2 + 1,000 x $10 = $0.002 + $0.006 + $0.010 = $0.018. Total $0.066 + 199 x $0.018 = $0.066 + $3.582 = $3.648.
- Cost per finished task: 160 useful results: $3.648 / 160 = $0.0228.
- Low effort (600 output tokens): first call $0.050 + $0.006 + $0.006 = $0.062; later $0.002 + $0.006 + $0.006 = $0.014; total $0.062 + 199 x $0.014 = $0.062 + $2.786 = $2.848. 100 useful results: $0.02848 per finished task, more than $0.0228.
