# Research notes: k6-test-types

Fetched 2026-10-27 from the k6 docs "latest" (v2.3.x). Raw text is in /tmp/claude-1000/k6-src-k6-test-types/ (not committed).

## Sources

| Cite | Source |
|---|---|
| S1 [1] | https://grafana.com/docs/k6/latest/testing-guides/test-types/ |
| S2 [2] | .../test-types/smoke-testing/ |
| S3 [3] | .../test-types/load-testing/ (titled "Average-load testing") |
| S4 [4] | .../test-types/stress-testing/ |
| S5 [5] | .../test-types/spike-testing/ |
| S6 [6] | .../test-types/soak-testing/ |
| S7 [7] | .../test-types/breakpoint-testing/ |
| S8 [8] | https://grafana.com/docs/k6/latest/using-k6/thresholds/ |
| S9 [9] | https://grafana.com/docs/k6/latest/using-k6/scenarios/executors/ramping-arrival-rate/ |

## Claims

| Claim | Cite | Quote (short) |
|---|---|---|
| Six main types | 1 | "Smoke ... Average-load ... Stress ... Soak ... Spike ... Breakpoint" |
| Start with smoke, then average load | 1 | "Start with smoke tests, then progress to higher loads and longer durations." |
| No consensus on names; stress for one app is average load for another | 1 | "no consensus even exists about the names of these test types" |
| Simple shape, avoid rollercoaster | 1 | "ramp-up, plateau, ramp-down. Avoid 'rollercoaster' series" |
| Options/scenarios separate load setup from iteration logic | 1 | "This separates workload configuration from iteration logic." |
| "Load test" can mean all traffic tests | 3 | "'load test' might refer to all types of tests that simulate traffic" |
| Smoke: few VUs, >5 is mini-load, seconds to minutes, shakeout | 2 | "more than 5 VUs could be considered a mini-load test" |
| Smoke goals; run on script/app change | 2 | "whenever a test script is created or updated" |
| Smoke results analysis | 2 | "report it, fix your environment, and try again" |
| Average-load: day-in-life, volume; ramp-up 5-15 %; plateau 5x ramp-up; ramp-down | 3 | "between 5% and 15% of the total test duration" |
| Average-load: first test may crash app | 3 | "quickly crash their applications (or staging environments)" |
| Stress: rush-hour, surge, scale; no fixed percentage; after average-load; reuse script | 4 | "there's no fixed percentage" |
| Stress: longer ramp-up; steady response time under constant load | 4 | "should respond with consistent response times" |
| Spike: events; no/short plateau; fast ramp-down; other processes; errors common; recovery metrics | 5 | "The test often won't finish." |
| Spike docs example 2000 users, 2m up, 1m down | 5 | `{ duration: '2m', target: 2000 }` |
| Soak: leaks, saturation, storage; endurance/stamina; typical hours; reuse script | 6 | "3, 4, 8, 12, 24, and 48 to 72 hours" |
| Soak example 8 h at 100 | 6 | `{ duration: '8h', target: 100 }` |
| Breakpoint: capacity/point load/limit; avoid elastic cloud; five failure points; ramping-arrival-rate; Ctrl+C; abortOnFail | 7 | "recommendable to use ramping-arrival-rate" |
| delayAbortEval waits before evaluating | 8 | "delay the evaluation of the threshold" |
| abortOnFail stops the run | 8 | "the test run stops as soon as the threshold fails" |
| preAllocatedVUs required; startRate, timeUnit, maxVUs options; no sleep at end | 9 | "Don't put sleep at the end of an iteration." |

## Own text (no cite)
The danger callout (run only smoke on a public host), the example threshold values, and the "stress thresholds looser" remarks are the tutorial's own advice. Note: the docs' breakpoint snippet puts `executor` at the top level of `options`, which is not valid k6; the page uses a `scenarios` block instead.

## Fix round 1 (2026-10-27)
- Scripts moved to /tmp/claude-1000/k6-check-test-types/ (the shared k6-check folder had been overwritten by another writer, which caused the vus:1 and 20-VU scripts).
- Smoke: 3 VUs, 10 s; real k6 v2.3.0 output re-run and pasted (one run).
- Average-load: 100 VUs, 5m/30m/5m (ramp-up 12.5 %, plateau 6x ramp-up); matches the chart and rules [3].
- Breakpoint script now has a check; no sleep (arrival-rate executors pace iterations [9]). Intro sentence says so.
- Removed the claim that `k6 inspect` sends no request (no cite); the callout says only that the other scripts were checked with it.
- Soak Bangla: removed the list of hours; now "3 hours up to 72 hours", as in Technical.
