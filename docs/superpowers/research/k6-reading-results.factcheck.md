# Fact-check: k6 reading-results

Sources fetched fresh on 2026-10-27: S1 metrics/reference, S2 end-of-test, S3 metrics, S4 thresholds (grafana.com/docs/k6/latest).

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | k6 prints a summary of aggregated results to stdout at the end | 2 | PASS | "k6 prints a summary of the aggregated results to stdout" |
| 2 | `--summary-mode`: compact (default), full, disabled, and what each shows | 2 | PASS | "compact (default)... full: Includes everything from the compact format, plus additional k6 metrics and detailed results for each group and scenario... disabled" |
| 3 | Compact shows thresholds, checks, metrics by category | 2 | PASS | "Thresholds results / Checks results / Aggregated metrics results by category" |
| 4 | Thresholds block always at the top | 2 | PASS | "Always displayed at the top of the results" |
| 5 | k6 v2 removed `--no-summary` and the legacy mode; use `--summary-mode=disabled` | 2 | PASS | "The --no-summary flag and the legacy summary mode were removed in k6 v2.0.0" |
| 6 | `--summary-trend-stats` and `--summary-time-unit` meanings | 2 | PASS | "Select which statistics to show for Trend metrics / Set a consistent time unit for all values" |
| 7 | A Trend shows avg, min, med, max, p(90), p(95) | 2 | PASS | Source example output shows `avg= min= med= max= p(90)= p(95)=` (default stats are shown by example, not stated as a rule) |
| 8 | Four metric types and their meanings | 3 | PASS | "Counters sum values. Gauges track the smallest, largest, and latest values. Rates track how frequently a non-zero value occurs. Trends calculates statistics..." |
| 9 | Standard metrics table (checks incl. checks_total/succeeded/failed, data_*, dropped_iterations, iteration_duration, iterations, vus, vus_max) | 1 | PASS | Matches the S1 table, types and descriptions |
| 10 | HTTP metrics only when the test makes HTTP requests; types and descriptions of the 9 http_* metrics | 1 | PASS | Matches S1 table |
| 11 | `http_req_duration` = sending + waiting + receiving; excludes DNS and connection times | 1 | PASS | "equal to http_req_sending + http_req_waiting + http_req_receiving... without the initial DNS lookup/connection times" |
| 12 | Browser, WebSocket, gRPC have own metrics | 1 | PASS | S1 sections "Browser metrics", "Built-in WebSocket metrics", "Built-in gRPC metrics" |
| 13 | Example run: waiting avg + sending avg + receiving avg = duration avg (263.54 + 0.068 + 0.645 = 264.25 ms) | 1 | PASS | Arithmetic checks; owner's run labelled as one example |
| 14 | blocked 621.8 / 10 = 62.18 ms; connecting 261.48/10 ~ 26.14; tls 283.13/10 ~ 28.31 | none | PASS | Own arithmetic, marked "tutorial's own reading" |
| 15 | "A likely cause is the first request, which has to open a connection" | none | PASS | Marked as the tutorial's own reading |
| 16 | `iteration_duration` is longer than request duration because it includes everything else, "such as `sleep()`" | 1 | PASS (round 2) | Fixed: text now says "includes the time in setup and teardown", which S1 states. Was FAIL: S1 says only "time to complete one full iteration, including time spent in setup and teardown". `sleep()` is not in the cited text. Drop the cite for the sleep part or cite a k6 `sleep` doc. |
| 17 | p(N), N between 0 and 100 | 4 | PASS | "expressed as a number between 0.0 and 100" |
| 18 | `p(95)<200` means 95% of requests below 200 ms | 4 | PASS | "95% of requests have a response time below 200ms" |
| 19 | avg/med/p(N)/max definitions | none | PASS | General statistics definitions, not k6 facts |
| 20 | 92 x 65 ms + 8 x 3 s: avg 299.8 ms (29 980/100), med 65 ms, p(95) 3 s | none | PASS | Own arithmetic, labelled as the tutorial's example |
| 21 | Threshold example `http_req_duration: ['p(95)<200']` | 4 | PASS | S4 has this exact line |
| 22 | RED method: http_reqs, http_req_failed, http_req_duration; traffic, availability, latency | 3 | PASS | "start with the metrics that measure the requests, errors, and duration (the criteria of the RED method)... traffic... availability... latency" |
| 23 | Owner's metric list | none | PASS | Labelled the owner's view |
| 24 | "A high `http_req_waiting` points to the back end, the database, or a third-party call" | none | PASS | Owner's advice, labelled |
| 25 | Checklist item 6: "k6 does not measure these on the server" (CPU, memory, DB, network) | none | PASS (round 2) | Fixed: now "the tutorial's own advice", no k6 fact. Was FAIL: a fact about k6 with no cite. Add a cite or reword as advice ("Use your monitoring tools to see the server"). |
| 26 | Thresholds block first; checks block shows failed assertions | 2 | PASS | S2 "Checks: Results of test assertions" under summary components |
| 27 | Key words table | none | PASS | Restates cited claims above; TTFB = `http_req_waiting` matches S1 |

Other checks:
- Scripts: none in the page, so no `k6 inspect` needed. The `text` outputs are labelled as one run.
- Copy check (`linux_overlap.py`): 1 run, only the source URL in `page.sources`. PASS.
- Page shape: Key words is last; no image used (none assigned); no credential, token, or home path found.
- Owner's numbers are stated as one run, not as a k6 rule. PASS.
- `node --test tests/voice-source.test.ts tests/k6.test.ts`: pass 29, fail 0.

Open FAILs: 0
