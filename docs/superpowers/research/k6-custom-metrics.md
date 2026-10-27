# Research notes: k6 custom-metrics

Accessed 2026-10-27. Raw copies are in /tmp/claude-1000/k6-src-custom-metrics/ (not committed).

## Sources

| Id | Cite | Source |
|---|---|---|
| S1 | 1 | Create custom metrics, Grafana k6 docs: https://grafana.com/docs/k6/latest/using-k6/metrics/create-custom-metrics/ |
| S2 | 2 | Counter, k6/metrics API: https://grafana.com/docs/k6/latest/javascript-api/k6-metrics/counter/ |
| S3 | 3 | Gauge, k6/metrics API: https://grafana.com/docs/k6/latest/javascript-api/k6-metrics/gauge/ |
| S4 | 4 | Rate, k6/metrics API: https://grafana.com/docs/k6/latest/javascript-api/k6-metrics/rate/ |
| S5 | 5 | Trend, k6/metrics API: https://grafana.com/docs/k6/latest/javascript-api/k6-metrics/trend/ |
| S6 | 6 | k6/metrics module: https://grafana.com/docs/k6/latest/javascript-api/k6-metrics/ |

## Claims

| # | Claim | Cite | Quote |
|---|---|---|---|
| 1 | k6/metrics creates custom metrics of 4 types | S6 | "provides functionality to create custom metrics of various types" |
| 2 | Counter sums added values | S6 | "A metric that cumulatively sums added values." |
| 3 | Gauge keeps the latest value (and min, max) | S3, S6 | "holding only the latest value added"; "stores the min, max and last values added to it" |
| 4 | Rate is the percentage of non-zero values, 0.00 to 1.00 | S4 | "percentage of added values that are non-zero"; "ranges between 0.00 and 1.00" |
| 5 | Trend gives min, max, average, percentiles | S5 | "calculating different statistics on the added values (min, max, average or percentiles)" |
| 6 | Create the metric in the init context | S1 | "Custom metrics must be created in init context." |
| 7 | Call `add` in the VU code to take a measurement | S1 | "use the add method to take a measurement" |
| 8 | `add(value, [tags])` on all 4 types | S2-S5 | "Counter.add(value, [tags])" etc. |
| 9 | `isTime` on Gauge and Trend: values are time or untyped | S3, S5 | "indicating whether the values added to the metric are time values or just untyped values" |
| 10 | Threshold variables: Counter `count`/`rate`; Gauge `value`; Rate `rate`; Trend `avg min max med p(N)` | S2-S5 | "the variable must be called count or rate"; "must be called value"; "must be called rate"; "avg for average ... p(N)" |
| 11 | Trend threshold units are ms | S5 | "The unit of these variables and functions are all in milliseconds." |
| 12 | Do not use min and max in thresholds, use percentiles | S5 | "We don't recommend using min and max ... Use percentiles instead." |
| 13 | A tagged value makes a sub-metric; threshold `error_counter{errorType:authError}` | S2 | "tagged value creates submetric (useful for making thresholds specific)" |
| 14 | Custom metrics show in the end-of-test summary and in the granular data points | S1 | "appear in Results output in both the end-of-test summary and in the granular data points" |
| 15 | Custom metrics are collected from VUs only at the end of an iteration | S1 | "collected from VU threads only at the end of a VU iteration" |
| 16 | Tags can filter results | S1 | "You can use these tags to filter test results." |

## Own run (k6 v2.3.0, 2 VUs, 5 s, quickpizza.grafana.com)

Script: /tmp/claude-1000/k6-check/custom-metrics.js. All 4 thresholds passed, exit 0. Output lines are in the page. Numbers come from one run and change each time.

## Fix round 1

| Id | Cite | Source |
|---|---|---|
| S7 | 7 | Built-in metrics, Grafana k6 docs: https://grafana.com/docs/k6/latest/using-k6/metrics/reference/ |
| S8 | 8 | Tags and groups, Grafana k6 docs: https://grafana.com/docs/k6/latest/using-k6/tags-and-groups/ |

| # | Claim | Cite | Quote |
|---|---|---|---|
| 17 | `http_req_duration` is the time of one request | S7 | "Total time for the request." |
| 18 | `iteration_duration` times one full iteration | S7 | "The time to complete one full iteration" |
| 19 | k6 emits `group_duration` for each group | S8 | "k6 emits a group_duration metric , which contains the total time to execute the group function" |
| 20 | A custom Trend is simpler for one named number per step | none | The tutorial's own view, marked as such. |
