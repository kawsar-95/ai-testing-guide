# Fact-check: content/k6/case-study.mdx

Checked 2026-10-27 by an agent that did not write the page. Project files: kawsar-95/k6-performance-testing, commit 51e4b9e (clone read only, nothing run). k6 sources fetched fresh with curl; k6 v2.3.0 used for local behavior checks of my own scripts. Project facts have no cite (rule). S1 Scenarios, S2 Constant arrival rate, S3 Thresholds, S4 Test lifecycle, S5 Custom summary, S6 fail(), S7 Dropped iterations.

## k6 facts (need a cite)

| # | Claim | Source | Verdict | Quote or reason |
|---|---|---|---|---|
| K1 | constant-arrival-rate starts a fixed number of iterations in a period, independent of system response [2] | S2 | PASS | "k6 starts a fixed number of iterations over a specified period of time. It is an open-model executor, meaning iterations start independently of system response" |
| K2 | preAllocatedVUs required; maxVUs is the upper limit of VUs [2] | S2 | PASS | "preAllocatedVUs (required)"; "maxVUs ... Maximum number of VUs to allow during the test run" |
| K3 | startTime, exec, env, tags scenario options [1] | S1 | PASS | Option table: startTime "Time offset since the start of the test"; exec "Name of exported JS function to execute"; env "Environment variables specific to this scenario"; tags "Tags specific to this scenario" |
| K4 | Scenarios run in parallel [1] | S1 | PASS | "Scenarios are independent from each other and run in parallel" |
| K5 | Dropped iteration; with constant-arrival-rate iterations drop when no VU is free [7] | S7 | PASS | "With constant-arrival-rate and ramping-arrival-rate, iterations drop if there are no free VUs." The step "0 dropped = API kept up" is also the project's analysis line 38. |
| K6 | setup() runs one time, can make HTTP requests, returns JSON-only data, each VU gets a copy [4] | S4 | PASS | "Setup ... Once"; "You can pass only data (i.e. JSON) between setup and the other stages"; "Give each VU access to an identical copy of the data"; init "cannot make HTTP requests" and setup example calls http.get |
| K7 | setupTimeout default 60 s; test fails before any VU starts [4] | S4 | PASS | "must complete within the configured setupTimeout (default: 60 seconds). If it exceeds this timeout, the test fails before any VUs start." |
| K8 | fail() throws an error [6] | S6 | PASS | "fail() is a simple convenience wrapper on top of JavaScript's throw()" |
| K9 | A fail() in setup() "stops the test" (Technical lines 224 and 241; Layman; Bangla; checklist item 2 "Stop with a message") | none | FAIL | Not stated by any cited source. S6 says the opposite for fail() in general: "fail() does not abort the test, nor does it make the test exit with non-0 status." The page cites S6 next to this claim and does not say how setup differs. README line 48 ("the test stops with a clear message") is only the project's statement. (Local check, k6 v2.3.0: fail() in setup() ends the run before the VU code; this is not in the docs.) Fix: say what S6 says (fail() aborts the iteration, not the test), say the project's README says the run stops, and add a doc cite for the setup-error behavior or drop the claim from the checklist. |
| K10 | Tagged requests create sub-metrics; key `metric_name{tag_name:tag_value}` [3] | S3 | PASS | "tagged requests create sub-metrics that you can use in thresholds" |
| K11 | Tags on checks let a threshold look at a group of checks [3] | S3 | PASS | "you can use tags on checks if you want to define a threshold based on a particular check or group of checks" |
| K12 | A failed threshold fails the test [3] | S3 | PASS | "k6 would exit with a non-zero exit code" |
| K13 | A counter supports the `count` aggregation [3] | S3 | PASS | "Counter count and rate" |
| K14 | handleSummary returns a map; keys stdout or file path; file write overwrites [5] | S5 | PASS | "stdout for standard output ... any relative or absolute path to a file on the system (this operation overwrites existing files)" |
| K15 | With handleSummary exported, k6 does not print the default summary; textSummary keeps it [5] | S5 | PASS | "If handleSummary() is exported, k6 does not print the default summary. ... import textSummary" |
| K16 | Summary `metrics` object: each metric and sub-metric has `values` and `thresholds` [5] | S5 | PASS | "metrics: A map with metric and sub-metric names as the keys ... values ... thresholds: any thresholds defined for the metric or sub-metric" |
| K17 | "A sub-metric appears in the summary only when a threshold names it" (writer item 1) | project comment | PASS | Page says "The script's own comment says" (dmoney-transactions.k6.js lines 102-103: "k6 adds a sub-metric to the summary only when a threshold names it"). It is clearly the project's statement and is not repeated in the checklist. Key words entry says "This project uses it". Local check on k6 v2.3.0 agrees (an unnamed `{api:b}` sub-metric was absent). Optional: reword to "in this project's tests, the report needed ..." |
| K18 | "Whatever you return from setup() can end up in a saved file" (Technical, line 455) and "Never save secrets in a report" | none | FAIL | General k6 fact with no cite. S5 does not mention `setup_data`. The project's comment (line 256) only says its own `setup_data` holds tokens. (Local check on k6 v2.3.0: `data.setup_data` exists.) Fix: limit the sentence to the project ("In this project the summary data holds the tokens") or add a cite. |
| K19 | "k6 secrets" in Tutorial advice callout (writer item 3) | none | FAIL | Uncited k6 feature (callout lines 270, 294, 318). content/k6/env-and-data.mdx cites the Secret source page. Fix: link [Environment Variables and Data](/k6/env-and-data/) in the callout. |
| K20 | `check()` call with tags, `res.json()`, `__ENV` use in excerpts | none (code) | PASS | Code excerpts of the project; the page states no k6 rule for them except K11. |

## Project facts (checked against the project, no cite)

| # | Claim | Project file | Verdict | Quote or reason |
|---|---|---|---|---|
| P1 | Repo and commit 51e4b9e | `git log` | PASS | HEAD 51e4b9e |
| P2 | 3 APIs, 6 users (2 agents, 2 customers, 2 merchants), 2 min, 4 windows of 30 s | README.md 5 | PASS | "6 users (Agent 1-2, Customer 1-2, Merchant 1-2) ... 4 windows of 30 s" |
| P3 | Practice wallet API (dMoney) on the local machine | README.md 75, 134 | PASS | "local API (http://localhost:5000)" |
| P4 | File table: seed, main test, lib/dmoney.js, concurrency test, results/ | listing, README.md 9-20 | PASS | All files exist. |
| P5 | Seed "You run it one time" | dmoney-seed.k6.js 1-2; README.md 144 | FAIL | "Run it once before the test, and again when the balances get low. It is safe to run many times." Fix: "You run it before the test, and again when balances get low." |
| P6 | 13-flow table (windows, APIs, from, to) | README.md 28-42; script 47-64 | PASS | All 13 rows match. Page "Window w4 same load as w3: 4 flows, 4 req/s, all payments from 4 different senders" matches analysis 51-53 and README 100. |
| P7 | Each flow 1 request per second for 30 s | script 34-36, README.md 46 | PASS | RATE 1, TIME_UNIT 1s, WINDOW_S 30 |
| P8 | Excerpt: scenarios loop | script 72-87 | PASS | Identical. |
| P9 | `transact` stub | script 156-160 | PASS | First 4 lines match; `// ... the http.post call and the checks` marks the cut. Not labeled with its file (the loop excerpt above is); minor. |
| P10 | startTime 60s for w3; all 13 run the same function; env gives API, FROM, TO; `window` tag w1-w4 | script 77, 76, 84, 85 | PASS | |
| P11 | The project's analysis says 0 dropped iterations | analysis 38, summary.md last line | PASS | "k6 dropped 0 iterations, so the API kept up with the arrival rate." |
| P12 | setup(): each of 6 users logs in once, returns tokens; the 13 scenarios use the sender token | script 123-127, 161-163; README.md 47 | PASS | |
| P13 | Pre-check: max send/receive per user, real balances, stops when data not enough; error tells to run the seed | script 129-145 | PASS | Excerpt lines 136-145 identical. "stops" is the project behavior (see K9 for the k6 side). |
| P14 | Pre-check upper bound of iterations and fee estimate | script 68-69, 133 | PASS | ITERATIONS_PER_FLOW "+ 1", FEE 5 |
| P15 | setupTimeout 60s in options | script 116 | PASS | |
| P16 | 4 checks table | README.md 53-60; script 168-173 | PASS | Excerpt lines 165-173 identical. |
| P17 | Each failed request failed all 4 checks; failure is HTTP 500 with an error body | analysis 27, 61 | PASS | "Each failed request fails all 4 checks"; "return HTTP 500 'Internal server error'" |
| P18 | Thresholds excerpt | script 90-99 | PASS | Identical. |
| P19 | "Each API gets 3 limits ... The limits are in `APIS`, so you can change them with environment variables" | script 41-44, 96-98 | FAIL | Only the p95 limit is in `APIS` (env `P95_*`). The failure-rate (`rate<0.01`) and check (`rate>=0.99`) limits are fixed in the loop. README.md 187 lists only `P95_*`. Fix: "The p95 limit is in `APIS` and has an environment variable." |
| P20 | reportOnly thresholds; `sel` example; PASS_FAIL set | script 100-113, 198 | PASS | Page shows a shortened form with "// for each flow:"; `window:w3,api:deposit` format matches. |
| P21 | sendmoney_skipped Counter; threshold `count==0`; fails when reusable customers ran out of limit or balance | sendmoney-concurrency.k6.js 41, 50-51, 150-153 | PASS | "Fails the run if the reusable customers ran out of limit or balance." |
| P22 | handleSummary excerpt (HTML line removed, stated on page); textSummary; setup_data removed because it holds tokens | script 250-258 | PASS | Lines match except the removed htmlReport line, which the page says. |
| P23 | The project writes an HTML report with a third-party library | script 28, 254 | PASS | k6-reporter |
| P24 | Image 1 alt (terminal report; thresholds; 420 requests, 15.24%, 0 dropped) | image opened | PASS | Threshold table shows 4 duration PASS and failed/check FAIL; per-API, per-window tables; last line "Overall: 420 requests (incl. login), 15.24% failed ... dropped iterations 0." EN and BN alt agree. |
| P25 | Image 2 alt (web dashboard: overview chart, VUs, transfer rate, request duration, iteration duration; failure rises mid-run, falls to zero) | image opened; README.md 127 | PASS | Charts match; the failure line falls to 0 at about 02:06:00. EN and BN alt agree. |
| P26 | Results: one run on 2026-10-09, API and MySQL on same host, not a benchmark | analysis 3; README.md 75, 199 | PASS | |
| P27 | Test failed; durations passed; failure and checks failed | analysis 12-13; summary.md thresholds | PASS | |
| P28 | 420 requests "with the 6 logins included" (Technical line 106; Layman line 143 "with the logins included"; Bangla "লগইন সহ") | summary.md; analysis 13 | FAIL | 420 total less 402 transactions (93+93+216) = 18 non-transaction requests: per user a login, a verify-otp, and a balance call (`lib/dmoney.js` 22-41, script 138). The summary says "incl. login". Fix: "with the setup requests (login and balance) included". Also line 223 "does not include 6 logins for each request" reads wrongly; say "does not log in again for each request". |
| P29 | 15.24% failed, p95 392.6 ms, dropped 0 | summary.md last line | PASS | |
| P30 | Per-API table (requests, req/s, median, p95, max, failed) | summary.md Per API | PASS | All 18 values match. |
| P31 | Per-window table (flows, requests, p95, failed) | summary.md Per window | PASS | All 9 rows match. |
| P32 | Worst p95 417.9 ms vs limit 1000 ms; failures in w2 and w3, none in w4 | summary.md | PASS | |
| P33 | w3 has 50 failures (40%); w4 0; failures depend on lock conflicts, not load | analysis 51 | PASS | 21 + 11 + 18 = 50 of 124. |
| P34 | Reason: deposits write to Customer 1 and 2 while the same customers send and pay; w4 4 different senders | analysis 52-53 | PASS | |
| P35 | All 64 failures HTTP 500; MySQL deadlock ER_LOCK_DEADLOCK; log 66 errors, 64 in this run, 2 smoke | analysis 14, 58 | PASS | |
| P36 | Root cause: only PRIMARY index; locked read SQL; no index on account; full-table scan locks PRIMARY rows; no retry, HTTP 500 (writer item 4) | analysis 59-61 | PASS | Attributed to the project's analysis ("The analysis also gives the root cause, from the project's own investigation"). It is a MySQL fact, not a k6 fact, so no k6 cite is needed. The SQL text matches. Key words "Deadlock" definition is general database knowledge in the tutorial's own words; acceptable. |
| P37 | 3 possible fixes, not applied, dev team decides | analysis 63-66 | PASS | |
| P38 | 3 runs on 2026-10-09; 39, 32, 64 failed; same pass/fail; timing | analysis 68-78 | PASS | |
| P39 | Callout: example commits test passwords; dev OTP shortcut; writes real records; local only | data/dmoney-users.json (6 "password" fields); README.md 135, 195 | PASS | |
| P40 | Both images in all 3 panels (writer item 5) | page | PASS | Each panel has its own copy; hidden panels are not shown, so the reader sees one image. Bangla panels have Bangla alt. |

## Other checks

- Privacy grep (email, password value, partner key value, phone, NID, token value): none. Words "password", "token", "secret" appear only as generic words. PASS.
- Code: no full script on the page, only excerpts, so `k6 inspect` does not apply. Excerpts match their file (P8, P9, P13, P16, P18, P22). PASS.
- Copy check (`linux_overlap.py`, 8 files): 6 runs, all of them source URLs in `page.sources`; no prose run of 8+ words. PASS.
- Page shape: `# Case Study: Testing a Money-Transfer API`, `<PageMeta />`, `## Key words` last, `<Voices>` in each other `##`. Image `src` values are `/images/k6/case-study-terminal-report.webp` and `/images/k6/case-study-web-dashboard.webp`; files exist. PASS.
- `node --test tests/voice-source.test.ts tests/k6.test.ts`: 30 pass, 0 fail.


## Round 2 (2026-10-27)

Only the 6 FAIL rows and the changed text were re-checked against the page and the fresh sources.

| # | Verdict | Re-check |
|---|---|---|
| K9 | PASS | Page now says: "`fail()` throws an error [6]. An error in `setup()` means that setup ends abnormally, and k6 does not call `teardown()` [4]." S4: "If the Setup function ends abnormally (e.g throws an error), the teardown() function isn't called." S6: "convenience wrapper on top of JavaScript's throw()". "The test stops with a clear message" is marked "the project's own statement" (README.md 48). Item 2 of the setup text now says "calls `fail()`", not "stops the test". The checklist line "Stop with a message that tells the reader what to fix" is the tutorial's advice, not a k6 rule. The page no longer claims that fail() aborts the test. |
| K18 | PASS | Now: "The project's script says that the data holds the login tokens, so it removes `setup_data` ... This keeps the tokens out of the saved file." This is the project's behavior (script 256-257). The general k6 sentence is gone. "Never save secrets in a report" is advice. |
| K19 | PASS | Callout links `[Environment and Data](/k6/env-and-data/)` in all 3 panels; the file exists and cites the Secret source page. |
| P5 | PASS | Table row: "You run it before the test, and again when the balances get low." Matches seed script lines 1-2. |
| P19 | PASS | "The p95 limits are in `APIS`, so you can change them with environment variables. The failure-rate and check-rate limits are fixed in the script." Matches script 41-44, 96-98. |
| P28 | PASS | "420 requests. Of these, 402 were transactions and 18 were setup requests (login, verify-otp, and balance for each of the 6 users)." 93+93+216 = 402; 6 x 3 = 18. Layman and Bangla agree. Minor wording note, not a FAIL: line 223 "does not include 6 logins for each request" is unclear; "does not log in again for each request" is better. |

Other re-checks: the overlap check (8 files) gives 6 runs, all source URLs, no prose run. `node --test tests/voice-source.test.ts tests/k6.test.ts`: 30 pass, 0 fail. No new privacy items. Cites used are still 1 to 7 and each is in `page.sources`.

Open FAILs: 0
