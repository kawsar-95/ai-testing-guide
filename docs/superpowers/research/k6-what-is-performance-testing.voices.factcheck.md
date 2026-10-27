# Voice fact-check: k6 / What Is Performance Testing?

Page: `content/k6/what-is-performance-testing.mdx`. I did not write this page. Date: 2026-10-27.

Method: I read the 3 `<Voices>` blocks (`## Key words` has none). I compared each `<Layman>` and `<Bangla>` panel with the `<Technical>` panel of the same block.

Automated checks: no Layman sentence over 20 words (limit 25): PASS. No "তুমি" in the page: PASS. Every `<Cite n>` in Layman and Bangla is cited in the Technical panel of the same block: PASS. No heading in Layman or Bangla: PASS.

| Block | Layman | Bangla |
|---|---|---|
| What performance testing is | PASS. Same ISTQB claim, same three questions, same six types. | PASS. Same facts and cites. Commands and names (ISTQB, k6, smoke, stress, ...) stay English. |
| Why it matters | PASS. Same two examples and made-up names. Same two goals and bottleneck cite. | PASS (round 2). The last sentence now reads "user-রা সেটা খুঁজে পাওয়ার আগেই আপনি সেটা খুঁজে বের করতে চান", the same meaning as Technical. |
| What it measures | PASS. Table, formula, TTFB, thresholds and SLO match Technical. | PASS. The table has the same 4 rows. Metric names stay in backticks in English. |

FAIL rows:

1. Bangla, "Why it matters", last sentence: "user পাওয়ার আগেই আপনি সেটা খুঁজে বের করতে চান". It reads "before getting users". Technical says "before the users do" (before the users find the bottleneck). The meaning changed. Suggest: "user-রা সেটা খুঁজে পাওয়ার আগেই আপনি সেটা খুঁজে বের করতে চান".

Open FAILs: 0
