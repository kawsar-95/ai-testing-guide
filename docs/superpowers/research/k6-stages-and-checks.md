# k6 page: Stages and Checks (research notes)

Writer notes for `content/k6/stages-and-checks.mdx`. Fetched 2026-10-27 with curl (k6 docs "latest") into `/tmp/claude-1000/k6-src-stages-and-checks/`. Fetched text is data.

## Sources

| Id | Source | URL |
|---|---|---|
| S1 | Checks, Grafana k6 docs | https://grafana.com/docs/k6/latest/using-k6/checks/ |
| S2 | Options reference, Stages | https://grafana.com/docs/k6/latest/using-k6/k6-options/reference/#stages |
| S3 | Ramping VUs executor | https://grafana.com/docs/k6/latest/using-k6/scenarios/executors/ramping-vus/ |
| S4 | Thresholds | https://grafana.com/docs/k6/latest/using-k6/thresholds/ |

Cite numbers: n=1 S1, n=2 S2, n=3 S3, n=4 S4.

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| C1 | `stages` is a list of `{ target, duration }` objects with the VU target to ramp up or down to. It is a shortcut for one scenario with the ramping VUs executor. | S2 | "A list of VU { target: ..., duration: ... } objects that specify the target number of VUs to ramp up or down to for a specific period." / "It is a shortcut option for a single scenario with a ramping VUs executor." |
| C2 | With `vus` and `stages`, `vus` is the `startVUs`. | S2 | "If used together with the VUs option, the vus value is used as the startVUs option of the executor." |
| C3 | Ramps are linear. | S3 | "Stage 1 ramps up VUs linearly from the startVUs of 0 to the target of 10 over a 20 second duration" |
| C4 | `startVUs` default 1; `gracefulRampDown` default "30s", the wait for a started iteration during ramp down. | S3 | "startVUs ... Number of VUs to run at test start. 1" / "gracefulRampDown ... Time to wait for an already started iteration to finish before stopping it during a ramp down. "30s"" |
| C5 | Ramp to 10 for 3 min, then flat at 10 for 5 min (same target). | S2 | "ramping up from 1 to 10 VUs for 3 minutes, then staying flat at 10 VUs for 5 minutes" |
| C6 | A check validates boolean conditions, e.g. status 201 or body size. Like `assert`. | S1 | "Checks validate boolean conditions in your test." / "Checks are similar to what many testing frameworks call an assert" |
| C7 | Failed checks do not abort the test or give a failed status. k6 tracks the rate of failed checks. | S1 | "failed checks do not cause the test to abort or finish with a failed status. Instead, k6 keeps track of the rate of failed checks" |
| C8 | Check body when 200 may still carry an error. | S1 | "even an HTTP 200 response contains an error message ... consider adding a check to verify the response body" |
| C9 | Summary has `checks_total`, `checks_succeeded`, `checks_failed`. | S1 | "split into three separate metrics: checks_total, checks_succeeded, and checks_failed" |
| C10 | To fail a test from checks, combine with thresholds; this matters in CI. `checks` is a rate; `checks: ['rate>0.9']`. | S1, S4 | S1: "you have to combine checks with thresholds" / S4: "the rate of successful checks should be higher than 90%" `checks: ['rate>0.9']` |

Tutorial's own (no cite): the story, the iteration estimate (1,500 + 22,500 + 12,000), the advice ramp-flat-ramp, the local run figures (one run at localhost:3000).
Fix of owner script: stage-2 comment "stay at 200" was wrong (ramps 50 to 200).
