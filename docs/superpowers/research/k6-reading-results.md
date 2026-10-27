# Research notes: k6 Reading the k6 Results

## Sources

| Id | Source | URL | Cite n |
|---|---|---|---|
| S1 | Built-in metrics, Grafana k6 docs (latest, v2.x) | https://grafana.com/docs/k6/latest/using-k6/metrics/reference/ | 1 |
| S2 | End of test, Grafana k6 docs (latest, v2.x) | https://grafana.com/docs/k6/latest/results-output/end-of-test/ | 2 |
| S3 | Metrics, Grafana k6 docs | https://grafana.com/docs/k6/latest/using-k6/metrics/ | 3 |
| S4 | Thresholds, Grafana k6 docs | https://grafana.com/docs/k6/latest/using-k6/thresholds/ | 4 |

Raw text: /tmp/claude-1000/k6-src-reading-results/ (outside the repo).

## Claims

| # | Claim | Cite | Quote |
|---|---|---|---|
| 1 | k6 prints an aggregated summary to stdout when a test ends | S2 | "When a test finishes, k6 prints a summary of the aggregated results to stdout." |
| 2 | Modes: compact (default), full, disabled, set by --summary-mode | S2 | "compact (default)", "full: Includes everything from the compact format, plus additional k6 metrics and detailed results for each group and scenario.", "disabled: Disables the end-of-test summary." |
| 3 | Compact shows thresholds, checks, aggregated metrics by category | S2 | "Thresholds results / Checks results / Aggregated metrics results by category" |
| 4 | Full adds group and scenario results | S2 | "Group-specific results / Scenario-specific results" |
| 5 | Options --summary-trend-stats, --summary-time-unit | S2 | "--summary-trend-stats: Select which statistics to show for Trend metrics", "--summary-time-unit: Set a consistent time unit for all values" |
| 6 | --no-summary and legacy mode removed in v2.0.0 | S2 | "The --no-summary flag and the legacy summary mode were removed in k6 v2.0.0. Use --summary-mode=disabled" |
| 7 | Thresholds always at top, pass/fail marks | S2 | "Always displayed at the top of the results" |
| 8 | Four metric types | S3 | "Counters sum values. Gauges track the smallest, largest, and latest values. Rates track how frequently a non-zero value occurs. Trends calculates statistics for multiple values" |
| 9 | Start with requests, errors, duration (RED) | S3 | "start with the metrics that measure the requests, errors, and duration" ; http_reqs, http_req_failed, http_req_duration |
| 10 | Built-in metric names, types, meanings (table) | S1 | metric table rows for checks, data_received, data_sent, dropped_iterations, iteration_duration, iterations, vus, vus_max, http_req_* |
| 11 | http_req_duration = sending + waiting + receiving, without DNS/connection times | S1 | "It's equal to http_req_sending + http_req_waiting + http_req_receiving (i.e. ... without the initial DNS lookup/connection times)." |
| 12 | http_req_blocked = waiting for a free TCP connection slot | S1 | "Time spent blocked (waiting for a free TCP connection slot) before initiating the request." |
| 13 | http_req_waiting is TTFB | S1 | "a.k.a. "time to first byte", or "TTFB"" |
| 14 | http_req_failed is a Rate, based on setResponseCallback | S1 | "The rate of failed requests according to setResponseCallback." |
| 15 | iteration_duration includes setup and teardown | S1 | "including time spent in setup and teardown" |
| 16 | checks shown as checks_total, checks_succeeded, checks_failed | S1 | quote in table row of checks |
| 17 | Trend stats avg, min, max, med, p(N); p(N) is a percentile 0 to 100 | S4 | "avg, min, max, med and p(N) where N specifies the threshold percentile value" |
| 18 | p(95)<200 means 95% of requests below 200 ms | S4 | "http_req_duration: ['p(95)<200'], // 95% of requests should be below 200ms" |
| 19 | The summary lists vus and vus_max with min and max | S2 | sample output: "vus.....: 1 min=1 max=1" |

## Tutorial's own text (no cite)

- The 300 ms / 3 s example and its arithmetic (92 requests at 65 ms, 8 at 3 s) are the tutorial's own.
- The owner's run values are one example run. 621.8 ms / 10 requests = 62.18 ms is the tutorial's own arithmetic.
- The checklist is the owner's list and the tutorial's own advice.
- The short run of quickpizza.grafana.com (3 iterations, 1 VU) is a real run on 2026-10-27.

## Fix round 1

- Claim 15 text now matches the S1 quote only: "includes the time in setup and teardown". The "such as sleep()" words are removed.
- Checklist item 6 (server bottleneck) is now marked as the tutorial's own advice. The claim "k6 does not measure these" is removed.
