# Fact-check: k6 reports-and-dashboard

Checker: not the writer. Sources fetched fresh on 2026-10-27 (curl, saved outside the repo). Sources: S1 custom-summary, S2 web-dashboard, S3 end-of-test, S4 JSON, S5 CSV, S6 options reference, S7 v2.0.0 release notes. k6 v2.3.0 installed.

## Claims

| # | Claim (Technical text) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | 4 ways to get results; `handleSummary` gives JSON, text, XML, HTML | S1 | PASS | "transform the summary data into any text format: JSON, HTML, console, XML" |
| 2 | Dashboard gives a live view and an HTML report | S2 | PASS | "visualize and monitor your tests results in real-time"; "downloadable HTML reports" |
| 3 | `--out json=` / `--out csv=` write every data point | S4, S5 | PASS | "You can output granular data points in JSON format" |
| 4 | `--summary-export` writes the summary as one JSON file | S6 | PASS | "Save the end-of-test summary report to a JSON file" |
| 5 | `handleSummary()` is optional; called at end of lifecycle | S1 | PASS | "k6 calls handleSummary() at the end of the test lifecycle" ("optional" is also implied: "If handleSummary() is exported") |
| 6 | Returns a map; keys are `stdout`, `stderr`, or a file path; k6 overwrites files | S1 | PASS | "this operation overwrites existing files" |
| 7 | Value is a string or `ArrayBuffer`; many keys allowed | S1 | PASS | "either string or ArrayBuffer"; "You can return multiple summary outputs" |
| 8 | Exporting `handleSummary()` removes the default summary | S1 | PASS | "If handleSummary() is exported, k6 does not print the default summary." |
| 9 | Import `textSummary` from the k6 JS utilities library; docs version 0.0.2; helpers can change, check jslib.k6.io | S1 | PASS (note) | "These functions might change, so keep an eye on jslib.k6.io". Round 2: the page now says "The k6 docs say" in all 3 panels. See row 33 for the copy FAIL on this sentence. |
| 10 | `textSummary` has 2 options: `indent`, `enableColors` | S1 | PASS | Options table lists exactly these two |
| 11 | Full script (`k6 inspect`) | none | PASS | Copied to scratch, `k6 inspect` exit 0. Run against quickpizza (2 VUs, 5 s): printed text summary, wrote `summary.json`. |
| 12 | Output block is one run on the tutorial's machine | none (observed) | PASS | Labeled as one run, "Your numbers will differ". Own run gave similar shape (24 iterations, ~4.6/s). |
| 13 | Metrics are in top-level `metrics`; `data.metrics.http_req_duration`; each has `type`, `contains`, `values`; `thresholds.{name}.ok` | S1 | PASS | "All metrics are in a top-level metrics object"; schema table |
| 14 | Trend keys in `values` follow `summaryTrendStats` | S1 | PASS | "the keys for the values of the trend will change accordingly" |
| 15 | In the run, `summary.json` keys were `root_group`, `options`, `state`, `metrics` | none (observed) | PASS | Reproduced on v2.3.0: `['root_group','options','state','metrics']`. Labeled "In the same run". |
| 16 | k6 v1.5.0 added a new format; flag `--new-machine-readable-summary`; becomes default in v2 | S1 | PASS | "k6 v1.5.0 introduced a new format"; "This new format will become the default in k6 v2." |
| 17 | Can send data to a remote server; `jUnit` helper makes JUnit XML of threshold failures | S1 | PASS | "send it to a remote server"; "short XML file that reports whether the test thresholds failed" |
| 18 | Built-in dashboard shows results in real time | S2 | PASS | "real-time" |
| 19 | Since v2.0.0 dashboard is in the binary, no extension | S7 | PASS | "making the web dashboard a built-in part of the k6 binary without requiring a separate extension" |
| 20 | `K6_WEB_DASHBOARD=true` turns it on; example command | S2 | PASS | Same command in S2 |
| 21 | k6 prints the dashboard address in its header; default localhost:5665 | S2 | PASS | S2 shows the header line; "available on localhost port 5665" |
| 22 | Observed header line `web dashboard: http://127.0.0.1:5665` / `output: -` on v2.3.0 | none (observed) | PASS | Reproduced exactly. Labeled "In the check run of this page". |
| 23 | Env var table: names, meanings, defaults (`false`, `localhost`, `5665`, `10s`, `false`, empty) | S2 | PASS | Matches the S2 table. (S2 says "Period in seconds"; default `10s`. Page matches the default.) |
| 24 | k6 waits while a browser window is open; in CI set the port to `-1` to turn off HTTP port | S2 | PASS | "advisable to disable the HTTP port by setting it to -1" |
| 25 | Report is one self-contained HTML file; 2 ways: Report button, `K6_WEB_DASHBOARD_EXPORT` | S2 | PASS | "These reports are self-contained"; "click Report on the dashboard's menu" |
| 26 | Report has graphs only if the test lasts more than 3 times the period; default 10 s so more than 30 s | S2 | PASS | "only includes graphs if the test duration is greater than three times the aggregation period" |
| 27 | Run: 2 VUs, 10 s, default period: warning and no file | none (observed) | PASS | Reproduced: `level=warning msg="The test run was short, report generation was skipped (not enough data)"`, file absent. Labeled "This page checked the rule". Note: S2 says graphs are missing; the run shows the whole file is skipped. The page states what it saw, as an observed result. |
| 28 | Same script with `K6_WEB_DASHBOARD_PERIOD=1s`: HTML file written | none (observed) | PASS | Reproduced: 167 KB file. |
| 29 | `--out ...gz` gives gzip; `tail -f` follows live | S4, S5 | PASS | "get the result gzipped"; "tail -f" |
| 30 | JSON: one object per line; `Metric` and `Point` lines; `time`, `value`, `tags`; ms; `jq` | S4 | PASS | "Each line either has information about a metric, or logs a data point"; "time values are in milliseconds" |
| 31 | JSON sample lines | none (observed) | PASS (round 2) | Now 2 lines from the writer's own run, labeled as one run with shortened URL and tags. Shape matches my own `--out json` run (Metric line with `name`, Point line with `time`, `value`, `tags`). |
| 32 | CSV header columns; tags; `error` and `error_code` populated on error | S5 | PASS | S5 header line; "If an error happens, then the error along with the error_code fields will be populated." |
| 33 | Prose: "import `textSummary` from the k6 JS utilities library" | S1 | PASS (round 2) | Round 2: sentence rephrased in all 3 panels ("use `textSummary`, which the k6 JS utilities library exports"). Overlap re-run: 6 runs, all source URLs. Meaning matches S1. |
| 34 | "These files get large... one line for each sample" | none | PASS | Follows from claim 30 (one line per Metric or Point). Tutorial's own advice. |
| 35 | `--summary-export` env var `K6_SUMMARY_EXPORT` | S6 | PASS | S6 table |
| 36 | v2.3.0 still has the flag; not deprecated, but discouraged; `handleSummary()` more flexible | S6 | PASS | "While this feature is not deprecated yet, we now discourage it." `k6 run --help` lists `--summary-export`. |
| 37 | v2.0.0 removed `--no-summary`; use `--summary-mode=disabled` | S7 | PASS | "Replace --no-summary with --summary-mode=disabled" |
| 38 | `legacy` mode removed; use `compact` (default) or `full` | S7, S3 | PASS | S7: "compact (the default) or full"; S3 same |
| 39 | `disabled` also turns off `handleSummary()` and `--summary-export` | S6 | PASS | "Completely disables the summary generation, including: Calls to handleSummary(); The use of --summary-export" |
| 40 | `vus` + `duration` = constant-VUs shortcut; `vus` + `iterations` = shared-iterations shortcut | S6 | PASS | S6 option entries |
| 41 | All three given: `iterations` shortcut wins, `duration` becomes `maxDuration`; default `maxDuration` 10 min | S6 | PASS | "By default, the maximum duration of a shared-iterations scenario is 10 minutes. ... or by also specifying the duration global shortcut option." |
| 42 | Owner's options mean 100 iterations among 100 VUs, stop at 10 s | S6 | PASS | Follows from 41. Owner's options, not a number about k6 in general. |
| 43 | Observed line `default: 6 iterations shared among 2 VUs (maxDuration: 5s, gracefulStop: 30s)` and the run ended before 5 s | none (observed) | PASS | Reproduced exactly; 6 iterations done at 1.6 s. Labeled as a check run. |
| 44 | A faster VU completes more iterations | S6 | PASS | "a VU that executes faster will complete more iterations than others" |
| 45 | `--summary-mode`: compact (default), full, disabled (Key words) | S7, S6 | PASS | S3/S6 list the same modes |
| 46 | Key words rows: `handleSummary`, `textSummary`, dashboard, export, period, `--out`, `--summary-export`, shared iterations | S1, S2, S4-S7 | PASS | Each restates rows above |

## Other checks

| Check | Verdict | Note |
|---|---|---|
| Page shape (lede, `<PageMeta />`, free `##` sections, `## Key words` last) | PASS | 8 sections, Key words last |
| `k6 inspect` of the full script | PASS | exit 0. Other blocks are shell lines, an options fragment, or output text. |
| Duplicate keys, removed options or executors, missing imports | PASS | None |
| No `benc-uk/k6-reporter`; owner's report approach only described, not used | PASS | Described without a name or URL |
| Owner's numbers stated as k6 facts | PASS | All run numbers are labeled as one run or a check run |
| Observed results labeled | PASS | Rows 12, 15, 22, 27, 28, 43 are labeled on the page |
| Privacy and out-of-date grep (`eyJ`, `admin@`, `1234`, `roadtocareer`, `bkash`, `test-api`, home path, `.webp`) | PASS | 0 hits |
| Images | PASS | None used (correct for this page) |
| Copy check (`linux_overlap.py`) | PASS (round 2) | 6 runs, all source URLs in `page.sources` |
| `node --test tests/voice-source.test.ts tests/k6.test.ts` | PASS | 29 pass, 0 fail |


## Round 2: example-project callout (2026-10-27)

Source: owner repository kawsar-95/k6-performance-testing, commit 51e4b9e (clone read only, nothing run). Facts about the owner project have no Cite.

| Fact | Verdict | Quote |
|---|---|---|
| `handleSummary()` builds Markdown tables for each API and each time window | PASS | lines 205, 217 `## Per API (whole run)`, `## Per window`; table() lines 183-187 |
| It saves them as a `.md` file | PASS | line 255 `[`${RESULTS_DIR}/dmoney-transactions-summary.md`]: report` |
| Round 3: it saves the Markdown tables as a `.md` file and the summary data as a `.json` file | PASS | line 255 `summary.md`: report (the tables); line 257 `JSON.stringify({ ...data, setup_data: undefined }, null, 2)` (summary data). Earlier FAIL fixed in all 3 panels. |
| It removes `setup_data` from the JSON file | PASS | line 257 `setup_data: undefined` |
| ... because that data holds the login tokens | PASS | line 256 `// setup_data holds the login tokens, so it is left out of the saved file.` |
| The repository uses a third-party HTML reporter | PASS | line 28 `import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/3.0.4/dist/bundle.js'` |


Round 3 re-check (2026-10-27): the FAIL row is fixed. All 3 panels (lines 108, 133, 158 of the MDX) match lines 255 and 257 of dmoney-transactions.k6.js.

Open FAILs: 0
