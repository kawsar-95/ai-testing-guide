# Voice fact-check: k6 test lifecycle (round 1, 2026-10-27)

Page: `content/k6/test-lifecycle.mdx`. I did not write it. 4 `<Voices>` blocks (Key words has none). Each `<Layman>` and `<Bangla>` panel was compared with `<Technical>` of the same block.

Automated checks: every `<Cite n>` in Layman and Bangla is cited in Technical of the same block (PASS); no heading in a panel (PASS); no তুমি (PASS); no Layman sentence over 25 words (PASS); commands, flags, metric names, `__ENV`, and product names stay in Latin letters in Bangla (PASS).

| # | Section | Voice | Verdict | Reason |
|---|---|---|---|---|
| 1 | The four stages | Layman | PASS | Same stages, table, data flow, HTTP rule, cookies, 60 s, throw gives no teardown. |
| 2 | The four stages | Bangla | PASS (round 2) | "VU code (যাকে main function বা default function-ও বলা হয়)": block 1 of Technical does not give the name "main function". Remove it, or put it in Technical. |
| 3 | A login and token example | Layman | PASS | Same example, run numbers (5 of 5, 7 requests, 5 + 2), `__ENV`, "your numbers will differ". |
| 4 | A login and token example | Bangla | PASS | Same facts; numbers 3 VU, 5 s, 5 of 5, 7, 5 + 2 match. |
| 5 | How the example works | Layman | PASS | Same four steps, 100 VUs over 60 s, `check` import, no token in logs. |
| 6 | How the example works | Bangla | PASS | Same. |
| 7 | Five good practices | Layman | PASS | Same five points and cites. |
| 8 | Five good practices | Bangla | PASS | Same five points and cites. |

Note: rows 5 and 6 repeat the Technical claim that a failed login stops the test before any VU starts. That claim is FAIL 30 in the Technical report. It is not a voices FAIL.

## Round 2

"main function" is gone from block 1 Bangla (grep: 0). Changed panels checked against the new Technical text: the QuickPizza "own test" note, the `__ENV` and `-e` text with [2], the `check` import with [3], "setup ends abnormally" and "default or scenario function" with [1] (Layman and Bangla). All match Technical, cites are cited in Technical, no new fact, no তুমি. All PASS.

Open FAILs: 0
