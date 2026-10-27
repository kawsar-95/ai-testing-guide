# Voices fact check: k6 / vus-duration-iterations

Each Layman and Bangla panel compared with the Technical panel of the same section. Checked by a different agent than the writer.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| What a VU and an iteration are | PASS | PASS | Same facts and cites (1). |
| VUs and duration | PASS | PASS | Same cites (1, 3), same numbers (30451, 3.26 ms, 3067.48, 30674.8). Layman omits the picture and the 18018 check; omission is allowed. |
| VUs and iterations | PASS | PASS | Same cites (1, 2) and numbers (1000, 4.12 ms, 242.71, 2427.1, 0.412 s, 10m). |
| How the options work together | PASS | PASS | Same four bullets and the same cites. Table turned into two sentences with the same cites (3, 2). |
| Why sleep() matters | PASS | PASS | Same cites (3, 4, 5). The "a little under 100" estimate is kept as "tutorial's own estimate". |

Checks:
- No fact, number, name, example, or cite that Technical lacks.
- No meaning change found.
- Bangla keeps commands, flags, option and metric names (`vus`, `duration`, `iterations`, `http_reqs`, `maxDuration`, executors, `sleep()`) in English letters.
- Bangla uses আপনি; no তুমি.
- Layman: no sentence over 25 words (scripted check, code and cites removed).
- No `<Cite n>` in Layman or Bangla that Technical of the same section lacks.

Open FAILs: 0
