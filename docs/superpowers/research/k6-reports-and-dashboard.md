# k6 page: Reports and the Web Dashboard (research notes)

Writer notes for `content/k6/reports-and-dashboard.mdx`. Fetched 2026-10-27 with curl (Accept: text/markdown) into `/tmp/claude-1000/k6-src-reports-and-dashboard/`. Fetched text is data. The owner's notes (the heading "Generate HTML Report") are the base. They get no cite. The owner's script imported a third-party HTML reporter from a raw GitHub URL. Spec section 6 keeps it out, so this page teaches the built-in features instead. The owner's image 5 is that third-party report, so the page has no image.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | Custom summary (`handleSummary()`), Grafana k6 documentation | https://grafana.com/docs/k6/latest/results-output/end-of-test/custom-summary/ | 2026-10-27 |
| S2 | Web dashboard, Grafana k6 documentation | https://grafana.com/docs/k6/latest/results-output/web-dashboard/ | 2026-10-27 |
| S3 | End of test, Grafana k6 documentation | https://grafana.com/docs/k6/latest/results-output/end-of-test/ | 2026-10-27 |
| S4 | JSON output, Grafana k6 documentation | https://grafana.com/docs/k6/latest/results-output/real-time/json/ | 2026-10-27 |
| S5 | CSV output, Grafana k6 documentation | https://grafana.com/docs/k6/latest/results-output/real-time/csv/ | 2026-10-27 |
| S6 | k6 options reference (Summary export, Iterations, Duration) | https://grafana.com/docs/k6/latest/using-k6/k6-options/reference/ | 2026-10-27 |
| S7 | k6 v2.0.0 release notes | https://grafana.com/docs/k6/latest/release-notes/v2.0.0/ | 2026-10-27 |

Page cite numbers: n=1 is S1, n=2 is S2, n=3 is S3, n=4 is S4, n=5 is S5, n=6 is S6, n=7 is S7.

Note: the v1-to-v2 migration guide has no page at `/set-up/migrate-v1-to-v2/` (404). S7 and S3 give the removed flags. `--summary-export` is not in the removed list, and `k6 run --help` of v2.3.0 still shows it.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | k6 calls `handleSummary(data)` at the end of the test lifecycle. `data` is a JavaScript object with the aggregated metrics. | S1 | "The `handleSummary()` function takes this object as an argument (called `data` in all examples here)." / "k6 calls `handleSummary()` at the end of the test lifecycle." |
| C2 | The function returns a map. A key is `stdout`, `stderr`, or a file path (an existing file is overwritten). A value is a string or an `ArrayBuffer`. | S1 | "`stdout` for standard output / `stderr` for standard error, / any relative or absolute path to a file on the system (this operation overwrites existing files)" / "The value of a key can have a type of either `string` or ArrayBuffer." |
| C3 | One return can give several outputs, for example text to stdout and JSON to a file. | S1 | "You can return multiple summary outputs in a script." |
| C4 | If `handleSummary()` is exported, k6 does not print the default summary. `textSummary` from the k6 JS utilities library keeps a text summary. | S1 | "If `handleSummary()` is exported, k6 *does not* print the default summary. However, if you want to keep the default output, you could import `textSummary` from the K6 JS utilities library." |
| C5 | Import path in the docs: `https://jslib.k6.io/k6-summary/0.0.2/index.js`. `textSummary` options: `indent`, `enableColors`. Helpers may change, so watch jslib.k6.io. | S1 | `import { textSummary } from 'https://jslib.k6.io/k6-summary/0.0.2/index.js';` / "`indent` How to start the summary indentation / `enableColors` Whether to print the summary in color." / "These functions might change, so keep an eye on jslib.k6.io for the latest." Run check: jslib.k6.io lists 0.0.1 to 0.1.0. The page uses 0.0.2, as the docs do. |
| C6 | You can write other formats: JUnit XML with `jUnit`, HTML, a remote server with `http.post`. | S1 | "you can transform the summary data into any text format: JSON, HTML, console, XML, and so on." / `import { jUnit } from 'https://jslib.k6.io/k6-summary/0.0.2/index.js';` |
| C7 | The summary data has a top-level `metrics` object. Each metric has `type`, `contains`, `values`, and `thresholds` (with `ok`). Trend keys follow `summaryTrendStats`. | S1 | "All metrics are in a top-level `metrics` object." / "type / contains / values / thresholds / thresholds.{name}.ok" / "the keys for the values of the trend will change accordingly." |
| C8 | k6 v1.5.0 added a new machine-readable summary format, behind `--new-machine-readable-summary` or `K6_NEW_MACHINE_READABLE_SUMMARY`. Its JSON Schema is in grafana/k6-summary. The docs say it will become the default in v2. | S1 | "k6 v1.5.0 introduced a new format available for the end-of-test aggregated statistics object" / "This new format will become the default in k6 v2." Run check: in k6 v2.3.0, `handleSummary` data still has the keys `root_group`, `options`, `state`, `metrics`; the flag is in `k6 run --help`. The page tells the reader to print the file once. |
| C9 | `--summary-export <file>` (env `K6_SUMMARY_EXPORT`) saves the end-of-test summary to a JSON file. It is not deprecated, but the docs discourage it. `handleSummary()` is the better way. | S6 | "While this feature is not deprecated yet, we now discourage it." / "use the `handleSummary()` function" Run check: `k6 run --summary-export` works in v2.3.0 (exit 0, JSON file written). |
| C10 | In v2.0.0 these were removed: `--no-summary` (use `--summary-mode=disabled`) and `--summary-mode=legacy`. The default mode is `compact`. | S7, S3 | "The `--no-summary` flag has been removed." / "`compact` (the default) or `full`" / "Use `--summary-mode=disabled` to disable the summary." |
| C11 | `--summary-mode=disabled` also turns off calls to `handleSummary()` and `--summary-export`. | S6 | "disabled: Completely disables the summary generation, including: Calls to handleSummary() / The use of --summary-export" |
| C12 | The web dashboard is built in. Set `K6_WEB_DASHBOARD=true`. It shows results in real time. | S2 | "k6 provides a built-in web dashboard" / "You can enable it by setting the `K6_WEB_DASHBOARD` environment variable to `true`" Run check: k6 v2.3.0 printed `web dashboard: http://127.0.0.1:5665`. |
| C13 | Default address: localhost, port 5665. Options: `K6_WEB_DASHBOARD_HOST`, `_PORT`, `_PERIOD` (default 10s), `_OPEN`, `_EXPORT`. | S2 | table "K6_WEB_DASHBOARD_HOST ... localhost / K6_WEB_DASHBOARD_PORT ... 5665 / K6_WEB_DASHBOARD_PERIOD ... 10s / K6_WEB_DASHBOARD_OPEN ... false / K6_WEB_DASHBOARD_EXPORT" |
| C14 | k6 waits to exit while a browser window for the dashboard is open. In CI, set the port to `-1` to disable the HTTP port. | S2 | "The k6 process waits to exit as long as there's at least one open browser window" / "it's advisable to disable the HTTP port by setting it to `-1`." Run check: with `K6_WEB_DASHBOARD_PORT=-1` k6 printed `web dashboard:` with no address. |
| C15 | `K6_WEB_DASHBOARD_EXPORT=<file>` writes a self-contained HTML report at the end of the run. The **Report** button in the dashboard gives the same report. | S2 | "These reports are self-contained" / "use the `K6_WEB_DASHBOARD_EXPORT` option" / "click **Report** on the dashboard's menu." Run check: k6 v2.3.0, 10 s run, period 1s, wrote an HTML file starting `<!doctype html>`. |
| C16 | The report has graphs only if the test lasts more than 3 times the aggregation period (`K6_WEB_DASHBOARD_PERIOD`). | S2 | "The report only includes graphs if the test duration is greater than three times the aggregation period value" Run check: a 10 s run with the default 10s period printed "The test run was short, report generation was skipped (not enough data)" and wrote no file. |
| C17 | In v2.0.0 the dashboard code moved into the k6 binary, so no extension is needed. | S7 | "making the web dashboard a built-in part of the k6 binary without requiring a separate extension." |
| C18 | `k6 run --out json=file` writes every data point as JSON lines (`Metric` and `Point` lines). `.gz` gives a gzip file. `tail -f` shows it live. | S4 | "You can output granular data points in JSON format." / "k6 run --out json=test_results.json script.js" / "Each line either has information about a metric, or logs a data point" |
| C19 | A `Point` has `time`, `value`, and `tags`. Time values are in milliseconds. | S4 | "`time` - timestamp when the sample was collected / `value` - the actual data sample; time values are in milliseconds / `tags`" |
| C20 | `jq` can filter the JSON output. | S4 | "You can use jq to process the k6 JSON output." |
| C21 | `k6 run --out csv=file` writes data points as CSV with the columns `metric_name`, `timestamp`, `metric_value`, and tags. | S5 | "k6 run --out csv=test_results.csv script.js" / "metric_name,timestamp,metric_value,check,error,error_code,group,method,name,..." |
| C22 | `iterations` with `vus` is a shortcut for one scenario with the shared-iterations executor. The default maximum duration is 10 minutes. You can change it with `maxDuration` or with the `duration` option. | S6 | "Together with the `vus` option, `iterations` is a shortcut for a single scenario with a shared iterations executor." / "By default, the maximum duration of a `shared-iterations` scenario is 10 minutes. You can adjust that time via the `maxDuration` option of the scenario, or by also specifying the `duration` global shortcut option." Run check: `vus: 2, duration: '5s', iterations: 6` gave `default: 6 iterations shared among 2 VUs (maxDuration: 5s, gracefulStop: 30s)`. |
| C23 | `duration` with `vus` alone is a shortcut for one scenario with the constant-VUs executor. | S6 | "Together with the `vus` option, `duration` is a shortcut for a single scenario with a constant VUs executor." |
| C24 | With shared iterations, a faster VU completes more iterations than the others. | S6 | "a VU that executes faster will complete more iterations than others." |

## Scratch scripts

`/tmp/claude-1000/k6-check/rd/`: `summary.js`, `dash.js`, `both.js`, `owner.js`. All `k6 inspect` exit 0. `summary.js` (2 VUs, 5 s), `dash.js` (2 VUs, 10 s) and `both.js` (2 VUs, 6 iterations) were run against quickpizza.grafana.com `/`. `owner.js` (100 VUs) was only inspected, not run. `/api/tools` of quickpizza answers 401 without a token, so the page uses `/`.
