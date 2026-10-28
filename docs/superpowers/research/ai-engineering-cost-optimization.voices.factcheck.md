# Voice fact-check: Cost Optimization

Page: `content/ai-engineering/cost-optimization.mdx`. Checked 2026-10-28 by an agent that did not write the page or its voices.

Method: I read the 5 `<Voices>` blocks (`## Key words` has none). For each `<Layman>` and `<Bangla>` panel I compared every sentence with the `<Technical>` panel of the same block. FAIL rules: a fact, number, name or cite that Technical does not give; a lost warning or hedge; a wrong or misleading statement; Bangla that puts code or product names in Bangla letters, or does not use আপনি. An omission is not a FAIL.

Automated checks: every `<Cite n>` in Layman and Bangla is cited in Technical of the same block (PASS); no heading in Layman or Bangla (PASS); no তুমি (PASS); `max_tokens`, `usage`, `cache_read_input_tokens`, Claude model names, Batch API, CI, API stay in English (PASS).

| # | Section | Voice | Checked | Verdict | Reason |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | Tokens, USD per MTok, output costs more, Sonnet 5.5 $2 / $10 [1]; 4 levers; cost per finished task [5] | PASS | Same facts and cites. |
| 2 | In plain words | Bangla | Same | PASS | Same facts; আপনি used. |
| 3 | How it works | Layman | 3 model price rows, Haiku over 100,000 [1]; cache 1.25x / 2x / 0.1x / 0.05x [2]; batch 50 %, async [1][3]; batch and caching combine [2]; token counting [4]; tools, `max_tokens` [5]; spend limits [6] | FAIL | "The caching prices and the batch discount add together": Technical says the multipliers stack. "Add together" suggests the discounts are summed, which is misleading. |
| 4 | How it works | Bangla | Same | FAIL | "ক্যাশিংয়ের দাম ও ব্যাচের ছাড় একসাথে যোগ হয়" ("are added together"): the same misleading wording as row 3. |
| 5 | A real-life example | Layman | 10,000 requests, 3,000 / 2,500 / 500 tokens; 30 M = $60, 5 M = $50, $110; 25 M = $2.50, 5 M = $10, $50, about $62.50 plus cache writes; batch at 50 % [1][3]; marked as the tutorial's own calculation | PASS | All numbers match Technical. |
| 6 | A real-life example | Bangla | Same numbers; marked as the tutorial's own calculation | PASS | All numbers match. |
| 7 | Common mistakes | Layman | 5 mistakes with cites 5, 2, 5, 5, 6 | PASS | Same facts; "no error" warning kept. |
| 8 | Common mistakes | Bangla | Same | PASS | Same facts; warnings kept. |
| 9 | What a tester can check | Layman | 5 test ideas, marked as tutorial advice | PASS | Same ideas, no cite. |
| 10 | What a tester can check | Bangla | Same | PASS | Same ideas, marked as the tutorial's own advice. |

Notes: Layman and Bangla do not repeat the new Technical sentence about the API ID `claude-sonnet-5-5`. That is an omission, not a FAIL; both point to the Python example of the Technical text.

## Fixes

| # | Fix |
|---|---|
| 3 | Now: "The batch discount also applies on top of the caching prices <Cite n={2} />." |
| 4 | Now: "ক্যাশিংয়ের দামের ওপরও ব্যাচের ছাড় খাটে <Cite n={2} />।" ("the batch discount also applies on top of the caching prices") |

## Re-check

| # | Verdict | Reason |
|---|---|---|
| 3 | PASS | Matches S2: "These multipliers stack with other pricing modifiers such as the Batch API discount". |
| 4 | PASS | Same meaning as row 3. |

Open FAILs: 0
