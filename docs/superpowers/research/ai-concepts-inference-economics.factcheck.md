# Fact-check: content/ai-concepts/inference-economics.mdx

Checked 2026-10-28 by an agent that did not write the page. All 10 sources were downloaded fresh as raw Markdown (the `.md` form of each docs URL) and searched with `grep`. The quotes of the research notes were not trusted. The OpenAI model price row was read from the raw pricing table, not from a summary.

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Prices are given per million tokens (MTok) | 1 | PASS | S1: "MTok: Million tokens. $5 / MTok is $5 for every million tokens." |
| 2 | Thinking tokens are billed as output tokens | 5 | PASS | S5 Pricing: "Tokens Claude uses while thinking (billed as output tokens)" |
| 3 | Cache tokens: stored input read again at a lower price | 1 | PASS | S1: "Cache read tokens are charged when a subsequent request retrieves the cached content. A cache hit costs 10% of the standard input price" |
| 4 | Claude Sonnet 5.5: $2 input, $10 output per MTok | 1 | PASS | S1 table row "Claude Sonnet 5.5 \| $2 / MTok \| $2.50 / MTok \| $4 / MTok \| $0.10 / MTok \| $10 / MTok" |
| 5 | OpenAI gpt-6.1-sol: $2.00 / $10.00 per 1M for short prompts | 6 | PASS | S6 raw table: "\| gpt-6.1-sol \| $2.00 \| $10.00 \| $0.10 \| $2.50 \| $5.00 \| $4.00 \| $15.00 \| ..." under the header "Short context input \| Short context output \| ... \| Long context input \| Long context output"; "Short context: ≤272K input tokens." |
| 6 | Output costs 5x input "on the models that this page checked" | 1, 6 | FAIL, fixed | True for Sonnet 5.5, Opus 5.5, Haiku 4.5, and gpt-6.1-sol short context. Not true for gpt-6.1-sol long context: $4.00 / $15.00 (3.75x). Fixed: the sentence now reads "For the two list prices below, an output token costs 5 times an input token", and the OpenAI sentence adds "(272K input tokens or fewer). Above that, it is $4.00 and $15.00". Re-check: PASS against the S6 row in claim 5. |
| 7 | Cost per finished task is the tutorial's own framing | none | PASS | Stated as the tutorial's own, no cite. |
| 8 | Prompt caching reuses a prompt prefix | 2 | PASS | S2: "allowing resuming from specific prefixes in your prompts"; "On subsequent requests with the same prefix, cached content is reused automatically." |
| 9 | 5-minute write 1.25x, 1-hour write 2x base input | 1 | PASS | S1: "5-minute cache write \| 1.25x base input price"; "1-hour cache write \| 2x base input price" |
| 10 | Cache read 0.1x most models, 0.05x Opus 5.5 / Sonnet 5.5, 0.025x Fable 5.1 / Mythos 5.1 | 1 | PASS | S1: "0.1x base input price (0.025x on Claude Fable 5.1 and Claude Mythos 5.1; 0.05x on Claude Opus 5.5 and Claude Sonnet 5.5)" |
| 11 | Default lifetime 5 minutes, refreshed at no cost on each use | 2 | PASS | S2: "By default, the cache has a 5-minute lifetime. The cache is refreshed for no additional cost each time the cached content is used." |
| 12 | `cache_creation_input_tokens` + `cache_read_input_tokens` + `input_tokens` = total input | 2 | PASS | S2: "total_input_tokens = cache_read_input_tokens + cache_creation_input_tokens + input_tokens" |
| 13 | OpenAI caching is on by default, up to 95% off cached input | 7 | PASS | S7: "Prompt caching is enabled by default for supported OpenAI models."; "discounted up to 95%." |
| 14 | OpenAI reports `usage.input_tokens_details.cached_tokens` | 7 | PASS | S7: "Track `usage.input_tokens_details.cached_tokens`" |
| 15 | Claude Message Batches API: 50% off input and output | 1 | PASS | S1: "a 50 percent discount on both input and output tokens." |
| 16 | Most batches finish within 1 hour; a batch expires after 24 hours | 3 | PASS | S3: "most batches completing within 1 hour ... Batches expire if processing does not complete within 24 hours." |
| 17 | OpenAI Batch API: 50% discount, 24-hour window | 8 | PASS | S8: "50% cost discount compared to synchronous APIs"; "Each batch completes within 24 hours"; `completion_window: "24h"` |
| 18 | Cache multipliers stack with the batch discount | 1 | PASS | S1: "These multipliers stack with other pricing modifiers, including the Batch API discount and data residency." |
| 19 | Effort affects all output tokens: text, tool calls, thinking | 4 | PASS | S4: "The effort parameter affects all tokens in the response, including: Text responses ... Tool calls and function arguments ... Thinking (when active)" |
| 20 | Effort is a signal, not a strict budget | 4 | PASS | S4: "Effort is a behavioral signal, not a strict token budget." |
| 21 | Most models default to `high`; Opus 5.5 and Haiku 5.5 default to `medium` | 4 | PASS | S4: "Most Claude models default to high effort ...; Claude Opus 5.5 and Claude Haiku 5.5 default to medium." |
| 22 | `max_tokens` is the hard limit, thinking and text together | 5 | PASS | S5: "`max_tokens` is a hard cap on total output for the request, thinking and response text combined." |
| 23 | Cache write costs more than plain input (1.25x or 2x) | 1 | PASS | Same as claim 9. |
| 24 | Prompts below a minimum length are not cached, no error | 2 | PASS | S2: "Any requests to cache fewer than this number of tokens are processed without caching, and no error is returned." |
| 25 | Batch results can take up to 24 hours | 3 | PASS | S3: "You can access batch results when all messages have completed or after 24 hours, whichever comes first." |
| 26 | Lower effort: fewer output tokens, some loss of capability | 4 | PASS | S4 `low`: "Significant token savings with some capability reduction." |
| 27 | A change of top-level effort between requests breaks the cache | 4 | PASS | S4: "A top-level change restarts the cache"; "set a new top-level value on the next request, which starts the cache over." |
| 28 | Haiku 4.5 $1 / $5, Opus 5.5 $4 / $20 per MTok | 1 | PASS | S1 rows "Claude Haiku 4.5 \| $1 / MTok \| ... \| $5 / MTok"; "Claude Opus 5.5 \| $4 / MTok \| ... \| $20 / MTok" |
| 29 | 5-minute cache pays off after one read, 1-hour after two | 1 | PASS | S1: "caching pays off after one cache read for the 5-minute duration (1.25x write), or after two cache reads for the 1-hour duration (2x write)." |
| 30 | Example prices: Sonnet 5.5 input $2, 5-min write $2.50, read $0.10, output $10 | 1 | PASS | S1 Sonnet 5.5 row (claim 4). $2.50 = 1.25 x $2; $0.10 = 0.05 x $2. |
| 31 | Batch would halve input and output | 1 | PASS | Same as claim 15. |
| 32 | 1,024-token minimum on Claude Sonnet 5 | 2 | PASS | S2: "1,024 tokens for Claude Opus 4.8, Claude Sonnet 5, ..." |
| 33 | You pay for the full thinking, not the summary | 5 | PASS | S5: "What you're billed for is the same regardless of the `display` setting; only what you see changes"; `thinking_tokens` "reflects the raw reasoning ... (not the summarized text returned in the body)" |
| 34 | Claude 4.7+ tokenizer makes about 30% more tokens | 1 | PASS | S1: "This tokenizer produces approximately 30% more tokens for the same text." |
| 35 | `/usage` shows session cost, a local estimate at list price, not the bill | 9 | PASS | S9: "Claude Code computes the dollar figure locally from token counts at list price, unless a `modelPricing` table is in effect ... The figure is an estimate". The `modelPricing` exception is not on the page (harmless for the default case). |
| 36 | `/usage` shows the share of input from cache and the misses | 9 | PASS | S9: "the request count, the share of input tokens served from cache, cache misses" |
| 37 | `--output-format json` in print mode | 10 | PASS | S10: "`--output-format` \| Specify output format for print mode (options: `text`, `json`, `stream-json`)" |
| 38 | `--max-budget-usd` stops at an estimated spend; spend can pass the cap | 10 | PASS | S10: "Stop the run once estimated spend on API calls reaches this amount (print mode only) ... Spend can pass the cap, so leave headroom." |
| 39 | `usage.output_tokens_details.thinking_tokens` | 5 | PASS | S5: "read `usage.output_tokens_details.thinking_tokens` in the response." |

## Worked example (recomputed)

| Line | Page | Recomputed | Verdict |
|---|---|---|---|
| No cache, per call | 23,000 x 2/M + 1,000 x 10/M = 0.046 + 0.010 = $0.056 | 0.046 + 0.010 = 0.056 | PASS |
| No cache, 200 calls | $11.20 | 0.056 x 200 = 11.20 | PASS |
| Batch only | $5.60 | 11.20 / 2 = 5.60 | PASS |
| Cache, call 1 | 0.050 + 0.006 + 0.010 = $0.066 | 20,000 x 2.50/M = 0.050; 3,000 x 2/M = 0.006 | PASS |
| Cache, calls 2-200 | 0.002 + 0.006 + 0.010 = $0.018 | 20,000 x 0.10/M = 0.002 | PASS |
| Cache, total | 0.066 + 199 x 0.018 = $3.648 | 0.066 + 3.582 = 3.648 | PASS |
| Cost per finished task | 3.648 / 160 = $0.0228 | 0.0228 | PASS |
| Low effort total | 0.062 + 199 x 0.014 = $2.848 | call 1: 0.050 + 0.006 + 0.006 = 0.062; others 0.002 + 0.006 + 0.006 = 0.014; 0.062 + 2.786 = 2.848 | PASS |
| Low effort per task | 2.848 / 100 = $0.0285 | 0.02848, rounds to 0.0285 | PASS |
| Prose | "$11.20 to about $3.65" | 3.648 rounds to 3.65 | PASS |

The example says "This is an invented example" and states its assumption (all calls inside the 5-minute lifetime). The 20,000-token prefix is above every minimum cacheable length in S2. PASS.

## Structure checks

| Check | Verdict | Note |
|---|---|---|
| Every source is cited | PASS | Sources 1-10 each have at least one `<Cite>`. |
| Every cite number has a source | PASS | Cites use 1-10 only. |
| Source URLs work and are official | PASS | All 10 URLs returned the page (Markdown form). All are Anthropic or OpenAI docs. |
| "Tutorial advice" tip has no cites | PASS | The tip in "What a tester can check" has no `<Cite>`. |
| Invented example says so | PASS | "This is an invented example." |

FAILs found: 1. Fixed: 1 (claim 6). The research notes row "Output tokens 5x input price" now records the long-context price.

Open FAILs: 0
