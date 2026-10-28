# AI Engineering page: Cost Optimization (research notes)

Writer notes for `content/ai-engineering/cost-optimization.mdx`. Fetched 2026-10-28 with curl (Claude docs as their `.md` versions) into `/tmp/claude-1000/ai-eng-src-rel/`. Fetched text is treated as data and is not committed.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | Pricing (Anthropic, Claude Docs) | https://platform.claude.com/docs/en/about-claude/pricing | 2026-10-28 |
| S2 | Prompt caching (Anthropic, Claude Docs) | https://platform.claude.com/docs/en/build-with-claude/prompt-caching | 2026-10-28 |
| S3 | Batch processing (Anthropic, Claude Docs) | https://platform.claude.com/docs/en/build-with-claude/batch-processing | 2026-10-28 |
| S4 | Token counting (Anthropic, Claude Docs) | https://platform.claude.com/docs/en/build-with-claude/token-counting | 2026-10-28 |
| S5 | Optimizing for cost and intelligence (Anthropic, Claude Docs) | https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence | 2026-10-28 |
| S6 | Rate limits (Anthropic, Claude Docs) | https://platform.claude.com/docs/en/api/rate-limits | 2026-10-28 |
| S7 | Models overview (Anthropic, Claude Docs) | https://platform.claude.com/docs/en/about-claude/models/overview | 2026-10-28 |

Page cite numbers: n=1 is S1, n=2 is S2, n=3 is S3, n=4 is S4, n=5 is S5, n=6 is S6, n=7 is S7 (added by the fact-check).

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | Prices are in USD per million tokens (MTok), with separate input and output prices. | S1 | "All prices are in USD." / table columns "Base input tokens" and "Output tokens", values in "/ MTok" |
| C2 | Claude Sonnet 5.5: $2 input, $10 output, $0.10 cache hit per MTok. | S1 | "Claude Sonnet 5.5 | $2 / MTok | $2.50 / MTok | $4 / MTok | $0.10 / MTok | $10 / MTok" |
| C3 | Claude Opus 5.5: $4 input, $20 output, $0.20 cache hit per MTok. | S1 | "Claude Opus 5.5 | $4 / MTok | $5 / MTok | $8 / MTok | $0.20 / MTok | $20 / MTok" |
| C4 | Claude Haiku 5.5 (prompts up to 100,000 tokens): $0.10 input, $0.50 output, $0.01 cache hit; higher prices over 100,000 tokens. | S1 | "Claude Haiku 5.5 (for prompts up to 100,000 tokens) | $0.10 / MTok | ... | $0.01 / MTok | $0.50 / MTok" / "a request whose prompt is over 100,000 tokens pays higher prices" |
| C5 | Judge by cost per completed task, not per token. | S5 | "Compare models on cost per completed task, not per token, because you pay for completed tasks." |
| C6 | Cache writes: 1.25x base input (5-minute TTL), 2x (1-hour TTL). | S2 | "Cache write tokens with a 5-minute TTL are 1.25 times the base input tokens price." / "Cache write tokens with a 1-hour TTL are 2 times the base input tokens price." |
| C7 | Cache reads: 0.1x base input on most models, 0.05x on Opus 5.5 and Sonnet 5.5. | S2 | "Cache read tokens are 0.1 times the base input tokens price" / "Cache hits and refreshes on Claude Opus 5.5 and Claude Sonnet 5.5 are priced at 0.05x the base input price." |
| C8 | Caching multipliers stack with the batch discount. | S2 | "These multipliers stack with other pricing modifiers such as the Batch API discount" |
| C9 | Batch API: 50% discount on input and output tokens. | S1 | "The Batch API allows asynchronous processing of large volumes of requests with a 50 percent discount on both input and output tokens." |
| C10 | Batches run asynchronously, for work that does not need an immediate answer. | S3 | "well-suited to tasks that do not require immediate responses" / "The batch is then processed asynchronously" |
| C11 | Token counting gives the number of input tokens before sending. | S4 | "Token counting lets you determine the number of tokens in a message before you send it to Claude." / "The response contains the total number of input tokens." |
| C12 | Code: `client.messages.count_tokens(model=..., system=..., messages=...)`. | S4 | Python example: `response = client.messages.count_tokens(model="claude-opus-5-5", system="You are a scientist", messages=[...])` |
| C13 | Every tool definition is input on every turn. | S5 | "Every tool definition attached to a request is input on every turn" |
| C14 | `max_tokens` caps one response, the model cannot see it, so a lower cap does not save tokens; cut-off turns are still billed. | S5 | "`max_tokens` caps a single response, invisibly to the model, so lowering it does not make the model economize. The turns that needed the room are discarded and still billed." |
| C15 | A failed task still bills its tokens and then the retry. | S5 | "a failed task still bills its tokens, then the retry" |
| C16 | A prompt below the model minimum is not cached, with no error. | S2 | "Shorter prompts cannot be cached, even if marked with `cache_control`. ... no error is returned." |
| C17 | Start, Build, and Scale tiers each have a monthly spend cap; you can set your own lower limit. | S6 | "Each of the Start, Build, and Scale tiers carries a monthly spend cap" / "You can also set your own spend limit below your tier's cap to control costs" |
| C19 | API ID of Claude Sonnet 5.5 is `claude-sonnet-5-5` (added by the fact-check). | S7 | "Claude API ID" row: `claude-sonnet-5-5` |
| C18 | Spend limit is a maximum monthly cost. | S6 | "**Spend limits** set a maximum monthly cost an organization can incur for API usage." |

## Not on the page

The test-case generator numbers (10,000 requests, 3,000 and 500 tokens, $110 and about $62.50 a day) are the tutorial's own arithmetic from the S1 prices. Check: 30 M x $2 = $60; 5 M x $10 = $50; 25 M x $0.10 = $2.50; 5 M x $2 = $10. The cache write cost is left out of the sum and named as "a few cache writes".

The page marks these numbers as the tutorial's own calculation (fact-check fix). Fact-check confirmed every number; a 2,500-token cache write costs $0.00625 at $2.50 / MTok.
