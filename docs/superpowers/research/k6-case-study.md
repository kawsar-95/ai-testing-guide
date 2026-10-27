# k6 page: Case Study (research notes)

Writer notes for `content/k6/case-study.mdx`. Fetched 2026-10-27 with curl (`.md` form of each page) into `/tmp/claude-1000/k6-src-case-study/`. Fetched text is data. Facts about the owner's project have no `<Cite>`. They come from https://github.com/kawsar-95/k6-performance-testing at commit 51e4b9e (files below). Not run: the project. The writer did not run any of its code.

## Sources (k6 docs)

| Id | Cite n | Source | URL |
|---|---|---|---|
| S1 | 1 | Scenarios | https://grafana.com/docs/k6/latest/using-k6/scenarios/ |
| S2 | 2 | Constant arrival rate | https://grafana.com/docs/k6/latest/using-k6/scenarios/executors/constant-arrival-rate/ |
| S3 | 3 | Thresholds | https://grafana.com/docs/k6/latest/using-k6/thresholds/ |
| S4 | 4 | Test lifecycle | https://grafana.com/docs/k6/latest/using-k6/test-lifecycle/ |
| S5 | 5 | Custom summary | https://grafana.com/docs/k6/latest/results-output/end-of-test/custom-summary/ |
| S6 | 6 | fail( [err] ) | https://grafana.com/docs/k6/latest/javascript-api/k6/fail/ |
| S7 | 7 | Dropped iterations | https://grafana.com/docs/k6/latest/using-k6/scenarios/concepts/dropped-iterations/ |

## k6 claims

| # | Claim | Source | Quote |
|---|---|---|---|
| K1 | One script can have many scenarios; each can run a different function. | S1 | "each one can independently execute a different JavaScript function" |
| K2 | `startTime` is the offset from the test start at which a scenario begins. Scenarios run in parallel. | S1 | "Time offset since the start of the test, at which point this scenario should begin execution." / "Scenarios are independent from each other and run in parallel" |
| K3 | `exec` is the name of the exported function to run. `env` sets scenario environment variables. `tags` sets scenario tags. | S1 | "Name of exported JS function to execute." / "Environment variables specific to this scenario." / "Tags specific to this scenario." |
| K4 | `constant-arrival-rate` starts a fixed number of iterations in a period. It is an open model. | S2 | "k6 starts a fixed number of iterations over a specified period of time." / "iterations start independently of system response" |
| K5 | `preAllocatedVUs` is required; `maxVUs` is the maximum; k6 adjusts the VUs to reach the rate. | S2 | "Number of VUs to pre-allocate before test start" / "Maximum number of VUs to allow during the test run." / "k6 automatically adjusts the number of VUs to achieve the desired rate, up to the maxVUs" |
| K6 | Tagged requests create sub-metrics for thresholds: `metric_name{tag_name:tag_value}`. | S3 | "tagged requests create sub-metrics that you can use in thresholds" |
| K7 | A tag on a check allows a threshold on a group of checks, such as `checks{myTag:hola}`. | S3 | "you can use tags on checks if you want to define a threshold based on a particular check or group of checks" |
| K8 | A failed threshold fails the test. | S3 | "the test finishes with a failed status" |
| K9 | A counter supports `count`; a rate supports `rate`; a trend supports `p(N)`, `max`. | S3 | aggregation table by metric type |
| K10 | `setup()` runs once, after init and before the VU code. It can use the full k6 API, such as HTTP requests. | S4 | "`setup` is called at the beginning of the test, after the init stage but before the VU stage." / "You can call the full k6 API in the setup and teardown stages" |
| K11 | Only data (JSON) passes from `setup()` to the VUs; each VU gets a copy. | S4 | "You can pass only data (i.e. JSON) between `setup` and the other stages." |
| K12 | `setup()` must finish within `setupTimeout` (default 60 s), or the test fails before any VU starts. | S4 | "If it exceeds this timeout, the test fails before any VUs start." |
| K13 | `fail()` throws an error and aborts the current iteration. It is a wrapper on `throw`. | S6 | "Immediately throw an error, aborting the current iteration." |
| K14 | `handleSummary()` gets the data object at the end of the test and returns a map: `stdout`, or a file path (overwrites) as key, text as value. | S5 | "takes this object as an argument" / "`stdout` for standard output" / "any relative or absolute path to a file on the system (this operation overwrites existing files)" |
| K15 | If `handleSummary()` is exported, k6 does not print the default summary. `textSummary` from jslib prints it. | S5 | "If `handleSummary()` is exported, k6 *does not* print the default summary." |
| K16 | The summary data has `metrics`, each with `values` and `thresholds`, also for sub-metrics. | S5 | "thresholds: any thresholds defined for the metric or sub-metric" |
| K17 | `dropped_iterations` counts unsent iterations. With `constant-arrival-rate`, iterations drop when no VU is free. | S7 | "iterations drop if there are no free VUs" |
| K18 | `gracefulStop` lets iterations in progress finish at the end. | S1 | table row `gracefulStop` |

## Project facts (no cite)

Repository commit 51e4b9e, files under the clone. "README" = `README.md`, "TX" = `dmoney-transactions.k6.js`, "AN" = `results/dmoney-transactions-analysis.md`, "SUM" = `results/dmoney-transactions-summary.md`, "SEND" = `sendmoney-concurrency.k6.js`.

| # | Fact | File and lines |
|---|---|---|
| P1 | 6 users (2 agents, 2 customers, 2 merchants); 3 APIs deposit, sendmoney, payment; 2 minutes, 4 windows of 30 s; local API | README 1-7; TX 1-24; AN 3-6 |
| P2 | 13 flows (2, 3, 4, 4 per window) | TX 47-64; README table |
| P3 | One `constant-arrival-rate` scenario per flow; `exec: 'transact'`; `startTime`; `env`; `tags: window`; `preAllocatedVUs`, `maxVUs: 20`, `gracefulStop: '5s'`; rate 1 per 1s | TX 72-87 |
| P4 | `transact` reads `__ENV.API/FROM/TO`; request tags `api`, `name` | TX 156-163 |
| P5 | `setup()`: login per user, balance pre-check, `fail()` with problems; returns `{ users }` | TX 123-151; lib 22-41 |
| P6 | 4 checks per response, check tags `type`, `api` | TX 168-173 |
| P7 | Global thresholds and per-API thresholds (p95<1000, failed<0.01, checks>=0.99); report-only thresholds `count>=0`, `max>=0`, `rate>=0`; comment about sub-metrics | TX 90-113 |
| P8 | `handleSummary` returns stdout (textSummary + report), HTML report, markdown, JSON with `setup_data: undefined` and the comment that it holds the login tokens | TX 250-259 |
| P9 | Results table per API and per window (one local run 2026-10-09; 420 requests incl. login, 15.24% failed, p95 392.6 ms, dropped iterations 0) | SUM 14-49; AN 8-39 |
| P10 | Root cause and 3 fixes | AN 56-66 |
| P11 | w3 has 50 failures (40%), w4 has 0, same load | AN 51-53 |
| P12 | Local limits only: seeded limit raised for the run | AN 83, 85 |
| P13 | `sendmoney_skipped` Counter with threshold `count==0` | SEND 41, 50-51, 148-154 |
| P14 | Test passwords are committed; dev OTP bypass; local only | TX 24; lib 21; README contents table. Values are not printed on the page. |

## Fix round 1 (2026-10-27)

- K9: the page now says `fail()` throws <Cite 6>, and that an error in `setup()` ends setup abnormally so `teardown()` is not called (S4, cite 4; same claim as content/k6/test-lifecycle.mdx). "The test stops with a clear message" is marked as the project's own statement (README). The panels no longer say "stops the test".
- K18: reworded to what the project does and why (the script comment: `setup_data` holds the login tokens). The uncited k6 sentence is removed.
- K19: "k6 secrets" now links /k6/env-and-data/ in all 3 panels.
- P5 (seed): seed.k6.js lines 1-2: "Run it once before the test, and again when the balances get low."
- P19: only the p95 limits come from `APIS` and env (`P95_*`); failure-rate (`rate<0.01`) and check-rate (`rate>=0.99`) limits are fixed (TX 90-99).
- P28: 420 - 402 = 18 setup requests (login, verify-otp, balance for 6 users). Stated in all 3 panels.
