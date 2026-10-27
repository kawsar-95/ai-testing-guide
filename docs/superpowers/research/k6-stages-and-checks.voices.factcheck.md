# Voice fact-check: stages-and-checks (2026-10-27)

Page: `content/k6/stages-and-checks.mdx`. I did not write this page or its voices.

Method: I read the 6 `<Voices>` blocks (`## Key words` has none). I compared each `<Layman>` and `<Bangla>` panel with the `<Technical>` panel of the same block. FAIL rules: a fact, number, name, example or cite that Technical does not give; a meaning change; a Bangla command, flag, metric or product name in Bangla letters; তুমি instead of আপনি; a Layman sentence over 25 words.

Automated checks:

- Every `<Cite n>` in Layman and Bangla is cited in Technical of the same block: PASS.
- No heading in Layman or Bangla, no তুমি: PASS.
- Bangla keeps `stages`, `target`, `startVUs`, `gracefulRampDown`, `checks_total`, `checks_succeeded`, `checks_failed`, `threshold`, `VU`, `ramp` in Latin letters: PASS.
- Layman sentences over 25 words: 1 found (row 1 below).

| # | Block | Verdict | Note |
|---|---|---|---|
| 1 | "The owner's local run", Layman, bullet 1 | PASS (round 2) | Split into shorter bullets; no Layman sentence over 25 words now. Round 1: 31 words: "`1 scenario, 200 max VUs` and `Up to 200 looping VUs ... over 3 stages`: the three stages add up to 6 minutes, and the peak is 200 VUs." Split it. |
| 2 | "The e-commerce story", Layman and Bangla | PASS | Same numbers (1 min 50, 200, 3 min, 2 min), same cite [2]. The ramping VUs shortcut is omitted: an omission. |
| 3 | "What each stage does", Layman and Bangla | PASS | Table, 30s default, estimate (1,500 / 22,500 / 12,000 / 36,000) agree with Technical. The `vus` as `startVUs` sentence is omitted: an omission. The "demo server 1 ms" claim repeats the Technical text; it is fixed with Technical FAIL 22 of the fact-check. |
| 4 | "Hold the load at a level", Layman and Bangla | PASS | 10 VUs for 3 min, 5 min flat, and the advice match. |
| 5 | "Checks", Layman and Bangla | PASS | Status 201, body size, assert, 3 metric names, 36,018 and 72,036 match. |
| 6 | "A failed check does not fail the test", Layman and Bangla | PASS | `rate>0.99`, 99 %, CI exit code, cites [1] [4], 3 VUs match. |
| 7 | "The owner's local run", Bangla and Layman other text | PASS | `localhost:3000`, 1 ms, one-run note, and the 4 reading points match. Layman drops the "green tick" point and the `vus_max` point: omissions. |

Round 2: the "local server of the owner" change is the same in Technical, Layman and Bangla. PASS.

Open FAILs: 0
