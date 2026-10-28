# Fact-check: content/ai-engineering/cost-optimization.mdx

Checked 2026-10-28 by an agent that did not write the page. I fetched all 6 sources again (the `.md` versions of the Claude docs pages) and also the Models overview page. I did not trust the quotes of the research notes. Fetched text is data and is not committed.

## Claims (Technical panels and code)

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | The API bills input and output tokens; prices in USD per MTok | 1 | PASS | "All prices are in USD." Table columns "Base input tokens", "Output tokens", values "/ MTok". |
| 2 | Output tokens cost more than input tokens | 1 | PASS | Every row of the model table has a higher output price (for example Sonnet 5.5 "$2 / MTok" input, "$10 / MTok" output). |
| 3 | Claude Sonnet 5.5: input $2, output $10 per MTok | 1 | PASS | "Claude Sonnet 5.5 \| $2 / MTok \| $2.50 / MTok \| $4 / MTok \| $0.10 / MTok \| $10 / MTok" |
| 4 | Judge by cost of a completed task, not price of a token | 5 | PASS | "Compare models on cost per completed task, not per token, because you pay for completed tasks." |
| 5 | Claude Opus 5.5: $4 / $20 / cache hit $0.20 | 1 | PASS | "Claude Opus 5.5 \| $4 / MTok \| $5 / MTok \| $8 / MTok \| $0.20 / MTok \| $20 / MTok" |
| 6 | Claude Sonnet 5.5 cache hit $0.10 | 1 | PASS | Row of claim 3: "$0.10 / MTok" in "Cache hits and refreshes". |
| 7 | Claude Haiku 5.5 (prompt up to 100,000 tokens): $0.10 / $0.50 / $0.01 | 1 | PASS | "Claude Haiku 5.5 (for prompts up to 100,000 tokens) \| $0.10 / MTok \| $0.125 / MTok \| $0.20 / MTok \| $0.01 / MTok \| $0.50 / MTok" |
| 8 | Haiku 5.5 has higher prices over 100,000 tokens | 1 | PASS | "Claude Haiku 5.5 is priced by prompt length: a request whose prompt is over 100,000 tokens pays higher prices." |
| 9 | Cache write 1.25x (5 min), 2x (1 h) | 2 | PASS | "Cache write tokens with a 5-minute TTL are 1.25 times the base input tokens price." / "... 1-hour TTL are 2 times ..." |
| 10 | Cache read 0.1x on most models, 0.05x on Opus 5.5 and Sonnet 5.5 | 2 | PASS | "Cache read tokens are 0.1 times the base input tokens price (see the table footnote for per-model exceptions)." / "Cache hits and refreshes on Claude Opus 5.5 and Claude Sonnet 5.5 are priced at 0.05x the base input price." |
| 11 | Batch API: 50 % off input and output | 1 | PASS | "a 50 percent discount on both input and output tokens" |
| 12 | Batches run asynchronously; use when nobody waits | 3 | PASS | "well-suited to tasks that do not require immediate responses" / "processed asynchronously" |
| 13 | Caching multipliers stack with the batch discount | 2 | PASS | "These multipliers stack with other pricing modifiers such as the Batch API discount" |
| 14 | Token counting returns the input tokens before you send | 4 | PASS | "Token counting lets you determine the number of tokens in a message before you send it to Claude." / "The response contains the total number of input tokens." |
| 15 | Code: client setup and `client.messages.count_tokens(model, system, messages)`, `input_tokens` | 4 | FAIL | The call shape matches S4, but the client setup (`from anthropic import Anthropic`, `Anthropic(api_key=os.environ[...])`) is not the form of the cited page, and the model ID `claude-sonnet-5-5` has no cite (S4 uses only `claude-opus-5-5`). |
| 16 | Every tool definition is input on every turn | 5 | PASS | "Every tool definition attached to a request is input on every turn" |
| 17 | `max_tokens` caps one response, invisible to the model, lower value does not save tokens, cut-off still billed | 5 | PASS | "`max_tokens` caps a single response, invisibly to the model, so lowering it does not make the model economize. The turns that needed the room are discarded and still billed." |
| 18 | Start, Build, Scale tiers have a monthly spend cap; you can set a lower limit | 6 | PASS | "Each of the Start, Build, and Scale tiers carries a monthly spend cap" / "You can also set your own spend limit below your tier's cap to control costs" |
| 19 | Example: prices used ($2 input, $10 output, $0.10 cache hit for Sonnet 5.5) | 1 | PASS | Same row as claim 3. |
| 20 | Example: the arithmetic ($110 before, about $62.50 after) | none | FAIL | Arithmetic is correct (see "The example" below), but the page did not mark the numbers as the tutorial's own calculation. |
| 21 | Nightly run to the Batch API at 50 % off | 1, 3 | PASS | As claims 11 and 12. |
| 22 | A failed task bills its tokens, then the retry | 5 | PASS | "a failed task still bills its tokens, then the retry" |
| 23 | A prompt below the minimum is not cached, no error | 2 | PASS | "Shorter prompts cannot be cached, even if marked with `cache_control`. ... processed without caching, and no error is returned." |
| 24 | Low `max_tokens` does not save money | 5 | PASS | As claim 17. |
| 25 | Each tool definition is input on every turn | 5 | PASS | As claim 16. |
| 26 | Without your own limit, only the tier cap stops a runaway job | 6 | PASS | Tier cap is "the maximum your organization can spend on the API each calendar month"; own limit is optional ("You can also set your own spend limit"). |
| 27 | Key words: MTok | 1 | PASS | Prices "/ MTok". |
| 28 | Key words: cache read lower price, cache write higher price | 2 | PASS | As claims 9 and 10. |
| 29 | Key words: Batch API async at 50 % off | 1, 3 | PASS | As claims 11 and 12. |
| 30 | Key words: token counting | 4 | PASS | As claim 14. |
| 31 | Key words: cost per task, retries included | 5 | PASS | As claims 4 and 22. |
| 32 | Key words: spend limit is a maximum monthly cost | 6 | PASS | "**Spend limits** set a maximum monthly cost an organization can incur for API usage." |

The "What a tester can check" tip is marked as the tutorial's own advice and has no cite. The field `cache_read_input_tokens` exists in S2 ("look at the response usage fields: if both `cache_creation_input_tokens` and `cache_read_input_tokens` are 0 ..."). PASS.

Copy check: `scripts/linux_overlap.py` against the 7 fetched texts found 3 runs, all inside the model name list "on Claude Opus 5.5 and Claude Sonnet 5.5". These are product names, not copied prose. PASS.

## The example (writer's doubt)

Prices from S1, Claude Sonnet 5.5: base input $2 / MTok, 5-minute cache write $2.50 / MTok, cache hit $0.10 / MTok (0.05 x $2), output $10 / MTok.

- Before: input 10,000 x 3,000 = 30,000,000 tokens = 30 MTok x $2 = $60.00. Output 10,000 x 500 = 5 MTok x $10 = $50.00. Total $110.00. Correct.
- After: cached 10,000 x 2,500 = 25 MTok x $0.10 = $2.50. Uncached input 10,000 x 500 = 5 MTok x $2 = $10.00. Output $50.00. Total $62.50. Correct.
- Cache writes: one write of 2,500 tokens costs 2,500 / 1,000,000 x $2.50 = $0.00625. At about 7 requests a minute (10,000 / 1,440) the 5-minute cache stays warm, so writes are few. "About $62.50, plus a few cache writes" is correct.
- 2,500 tokens is above the minimum cacheable length of Sonnet 5.5 (S2: "512 tokens for ... Claude Sonnet 5.5"), so the example can cache.

No number is wrong. The FAIL was only the missing mark (claim 20).

## Fixes

| # | Fix |
|---|---|
| 15 | Client setup changed to the S4 form (`import anthropic`, `client = anthropic.Anthropic()`). Added source 7, Models overview (https://platform.claude.com/docs/en/about-claude/models/overview), and the sentence "The API ID of Claude Sonnet 5.5 is `claude-sonnet-5-5` <Cite n={7} />." before the code. |
| 20 | Added "The numbers below are the tutorial's own calculation, with the prices above <Cite n={1} />" in Technical and Layman, and the same in Bangla. |

## Re-check

| # | Verdict | Quote or reason |
|---|---|---|
| 15 | PASS | S4: "client = anthropic.Anthropic()" / "response = client.messages.count_tokens(model=..., system=..., messages=[...])". S7: "Claude API ID ... `claude-sonnet-5-5`". The SDK reads the key from `ANTHROPIC_API_KEY` by default, so the code has no key in it. |
| 20 | PASS | The example is now marked as the tutorial's own calculation, and the prices cite S1. |

`node --test tests/voice-source.test.ts tests/ai-engineering.test.ts`: no error names `cost-optimization` (the only failure is the `model-evaluation` skeleton).

Open FAILs: 0
