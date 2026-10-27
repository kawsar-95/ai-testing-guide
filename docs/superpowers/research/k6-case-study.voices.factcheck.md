# Voices fact-check: content/k6/case-study.mdx

Checked 2026-10-27 by an agent that did not write the voices. Each `<Layman>` and `<Bangla>` panel was compared with the `<Technical>` panel of the same block (8 sections with voices; Key words has none).

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| The project in plain words | PASS | PASS | Same facts (3 APIs, 6 users, 2 minutes, 4 windows). File table is turned into one sentence with no change of meaning. |
| The traffic plan: 13 flows | PASS | PASS | Counts 2/3/4/4 and the w3/w4 point match the table. |
| Pattern: scenarios built from a list of flows | PASS | PASS | Cites 2, 1, 7 are all cited in Technical. The four options and the dropped-iteration point match. Bangla keeps `constant-arrival-rate`, `startTime`, `exec`, `env`, `tags`, `FLOWS` in Latin. |
| Pattern: log in once in setup() and check the test data | FAIL | FAIL | Both panels repeat "stops the test when the money is not enough" (Technical FAIL K9 in the fact-check report). Both also repeat the Technical wording of the pre-check. Cites 4 and 6 are cited in Technical. Change both panels with the Technical fix. |
| Pattern: strict checks on the response body | PASS | PASS | 4 checks, `try` block, check names, tags, cite 3 match. Layman drops the HTTP 500 sentence; that loses no fact. |
| Pattern: tags, thresholds for each API, and report-only thresholds | PASS | PASS | Same 3 limits, project-comment attribution, `count>=0`, `sendmoney_skipped`, cite 3. If Technical changes the "limits are in `APIS`" sentence (FAIL P19), these panels already do not repeat it. |
| Pattern: a custom report with handleSummary() | PASS | PASS | Cite 5 in both. They repeat "Never save secrets in a report" and the `setup_data` statement as the project's script says it; if Technical softens the general sentence (K18), no change is needed here. Image alt in each panel matches its language and the image. |
| The results of one local run | FAIL | FAIL | Layman "with the logins included" and Bangla "লগইন সহ" repeat the Technical error (FAIL P28: 420 includes 18 setup requests: login, verify-otp, balance). All other numbers match (392.6 ms, 15.24%, 0 dropped, per-API p95 and failure rates, windows 2 and 3). |
| How the test found a deadlock | PASS | PASS | 50 failures (40%), 64 HTTP 500, root cause, 3 fixes, 3 runs (Bangla keeps 39, 32, 64), same attribution to the project's analysis. Layman states the deadlock meaning in a sentence that equals Technical's "each hold a lock that the other one needs". |
| What to copy into your own project | PASS | PASS | Same 7 items in the same order. |
| Tutorial advice callout (in the section above) | FAIL | FAIL | Both repeat "k6 secrets" with no link or cite (FAIL K19). Change all 3 panels the same way. |

Other checks:

- Cites: every `<Cite n>` in Layman and Bangla (1 to 7) is also used in the Technical panel of the same block. PASS.
- Layman: no sentence over 25 words (script check after removing code, tags, and link URLs). PASS.
- Bangla: commands, flags, metrics, and product names are in Latin (`handleSummary()`, `setup()`, `fail()`, `p95`, `sendmoney_skipped`, `ER_LOCK_DEADLOCK`, MySQL, k6). The reader is addressed with আপনি; no তুমি. PASS.
- No new fact, number, name, or example in a Layman or Bangla panel. PASS.


## Round 2 (2026-10-27)

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| Pattern: log in once in setup() ... | PASS | PASS | Both now say `setup()` "calls `fail()`" (Bangla: `fail()` ডাকে), then "`fail()` throws an error [6]", "setup ends abnormally, and k6 does not call `teardown()` [4]", and the README statement is marked as the project's own. Same as Technical; cites 4 and 6 are cited there. |
| The results of one local run | PASS | PASS | 420 = 402 transactions + 18 setup requests; Bangla has ৪২০, ৪০২, ১৮ and keeps login, verify-otp, balance in Latin. Layman drops the parenthesis (login, verify-otp, balance); this loses no fact. |
| Tutorial advice callout | PASS | PASS | Both link `/k6/env-and-data/` as Technical does; no new fact. |

Layman sentences: none over 25 words (script check). Bangla keeps commands and metric names in Latin; আপনি is used. Cites in Layman and Bangla are all cited in Technical.

Open FAILs: 0
