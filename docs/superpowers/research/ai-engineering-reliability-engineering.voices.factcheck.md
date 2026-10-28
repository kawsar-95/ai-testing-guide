# Voices fact-check: content/ai-engineering/reliability-engineering.mdx

Checked 2026-10-28 by an agent that did not write the voices. Each `<Layman>` and `<Bangla>` panel was compared with the `<Technical>` panel of the same block.

| # | Section | Voice | Check | Verdict | Reason |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | Same facts (error JSON, short vs. permanent codes, four tools, SRE warning); cites 1, 4 | PASS | Split sentences only. |
| 2 | In plain words | Bangla | Same; codes and `type`, `message`, API key in English | PASS | Terms given in Bangla letters with the English word. |
| 3 | How it works | Layman | Retries (2, codes, `retry-after`, `max_retries`), 3 SRE rules, spend cap, timeouts, fallbacks, code summary; cites 1-6 all in Technical | PASS | The code is summarized, no new fact. |
| 4 | How it works | Bangla | Same; `max_retries`, `timeout`, `APITimeoutError`, `stop_reason`, class names in English; আপনি form | PASS | "`max_retries` দিয়ে আপনি সংখ্যাটা বদলান", imperatives in -ুন. |
| 5 | A real-life example | Layman | Same scenario, 3 x 3 = 9 calls, four fixes; cites 1, 3, 4, 5 | PASS | Matches the clarified Technical text. |
| 6 | A real-life example | Bangla | Same | PASS | "সর্বোচ্চ 3 বার", "3 × 3 = 9টা API কল". |
| 7 | Common mistakes | Layman | Six mistakes; cites 1, 2, 3, 4, 6 | PASS | "normal response" for "status 200" keeps the fact (S6 calls it both). |
| 8 | Common mistakes | Bangla | Same | PASS | No warning lost. |
| 9 | What a tester can check | Layman | "Tutorial's own advice" line and five ideas; no cites | PASS | Same ideas. |
| 10 | What a tester can check | Bangla | Same | PASS | আপনি form imperatives; `request-id`, mock, proxy in English. |

## Re-check

The edit to "A real-life example" (all 3 voices, clarifying the 9-call arithmetic) was checked again: the three panels give the same numbers and the same cite n=3. PASS.

FAILs found: 0.

Open FAILs: 0
