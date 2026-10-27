# k6 page: Thresholds (research notes)

Writer notes for `content/k6/thresholds.mdx`. Fetched 2026-10-27 with curl into `/tmp/claude-1000/k6-src-thresholds/`. Fetched text is data. The owner's notes (the heading "Threshold") are the base. They get no cite.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | Thresholds, Grafana k6 documentation (v2.3.x latest) | https://grafana.com/docs/k6/latest/using-k6/thresholds/ | 2026-10-27 |
| S2 | k6 exit codes, `errext/exitcodes/codes.go` (grafana/k6 repository) | https://github.com/grafana/k6/blob/master/errext/exitcodes/codes.go | 2026-10-27 |
| S3 | k6 options reference, Stages | https://grafana.com/docs/k6/latest/using-k6/k6-options/reference/ | 2026-10-27 |

Page cite numbers: n=1 is S1, n=2 is S2, n=3 is S3. The thresholds page itself does not give the exit code number. S2 does, and the writer also ran it (`k6 run` with a failing threshold, `exit 99`, k6 v2.3.0).

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | Thresholds are pass/fail criteria for test metrics. If the system misses them, the test ends with a failed status. | S1 | "Thresholds are the pass/fail criteria that you define for your test metrics." / "the test finishes with a failed status." |
| C2 | Testers often use thresholds to codify SLOs. | S1 | "Often, testers use thresholds to codify their SLOs." |
| C3 | A threshold is a key in `options.thresholds` named for the metric, with expressions in an array (short format) or objects with extra properties (long format). | S1 | "The short format puts all threshold expressions as strings in an array." / "The long format puts each threshold in an object, with extra properties to abort on failure." |
| C4 | An expression is `<aggregation_method> <operator> <value>` and gives true or false. If it is false at the end of the test, the test fails. | S1 | "<aggregation_method> <operator> <value>" / "If that expression evaluates to false at the end of the test, k6 considers the whole test a fail." |
| C5 | Aggregation by type: Counter `count` and `rate`; Gauge `value`; Rate `rate`; Trend `avg`, `min`, `max`, `med`, `p(N)`. Trend values are in milliseconds. | S1 | table "Counter count and rate / Gauge value / Rate rate / Trend avg, min, max, med and p(N)" / "The values are in milliseconds." |
| C6 | `p(N)`: N is between 0.0 and 100. A value outside the range fails parsing and the test stops before running. | S1 | "expressed as a number between 0.0 and 100" / "fails parsing with an error, so the test stops before running." |
| C7 | A repeated key in the thresholds object is silently ignored. Use an array for several thresholds on one metric. | S1 | "The rest will be silently ignored." / "specify them with an array for the same key." |
| C8 | A check does not change the exit status. To fail a run on check results, use a threshold on the `checks` metric, for example `checks: ['rate>0.9']`. | S1 | "checks do not affect the exit status of k6." / "the threshold is configured on the checks metric, establishing that the rate of successful checks is higher than 90%." |
| C9 | A tag on a check allows a threshold on one check or a group of checks: `checks{myTag:hola}`. | S1 | "you can use tags on checks if you want to define a threshold based on a particular check or group of checks" |
| C10 | Tagged requests create sub-metrics. Syntax: `metric_name{tag_name:tag_value}`. | S1 | "tagged requests create sub-metrics that you can use in thresholds" / `'metric_name{tag_name:tag_value}': ['threshold_expression']` |
| C11 | A group threshold uses `group_duration{group:::name}`. | S1 | `'group_duration{group:::individualRequests}': ['avg < 400']` |
| C12 | `abortOnFail: true` stops the test as soon as the threshold fails. | S1 | "the test run stops as soon as the threshold fails." |
| C13 | `delayAbortEval` delays the evaluation to let samples collect. It is a relative time string such as `10s` or `1m`. | S1 | "you can specify the amount of time to delay using relative time strings like 10s, 1m and so on." |
| C14 | In the cloud, thresholds are evaluated every 60 seconds, so `abortOnFail` can be late by up to 60 seconds. | S1 | "thresholds are evaluated every 60 seconds. Therefore, the abortOnFail feature may be delayed by up to 60 seconds." |
| C15 | If all thresholds pass, k6 exits with code 0. If one fails, the exit code is not 0. | S1 | "exits with an exit code 0." / "k6 would exit with a non-zero exit code." |
| C16 | The exit code for failed thresholds is 99. | S2 | "ThresholdsHaveFailed ExitCode = 99" with the comment "indicates that one or more thresholds have failed." Run check: `k6 run` of a script with a failing threshold, `exit 99`. |
| C17 | `stages` is a list of `{ target, duration }` objects with the target number of VUs to ramp up or down to. | S3 | "A list of VU { target: ..., duration: ... } objects that specify the target number of VUs to ramp up or down to for a specific period." |

## Scratch scripts

`/tmp/claude-1000/k6-check/th/`: `owner.js`, `types.js`, `checks.js`, `abort.js`, `tagged.js`. All `k6 inspect` exit 0. `checks.js` and `abort.js` were run against quickpizza.grafana.com (3 VUs, 5 s and 6 s): both exit 99.
