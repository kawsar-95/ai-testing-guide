# Fact-check: content/k6/custom-metrics.mdx

Checked 2026-10-27 by an agent that did not write the page. The 6 sources were fetched fresh from grafana.com (Markdown version). The quotes of the research notes were not trusted. k6 v2.3.0 was installed.

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | `http_req_duration` is a built-in HTTP metric: the time of one request | 7 | PASS (round 2) | S7 fetched fresh: "http_req_duration Trend Total time for the request." (was FAIL: no cite) |
| 2 | `k6/metrics` creates custom metrics of several types | 6 | PASS | "provides functionality to create custom metrics of various types." |
| 3 | Built-in `group_duration` times a group (cite 8); `iteration_duration` times a full iteration (cite 7); a custom `Trend` is simpler for one step (tutorial's own view, labelled) | 7, 8 | PASS (round 2) | S8: "k6 emits a group_duration metric, which contains the total time to execute the group function." S7: "iteration_duration Trend The time to complete one full iteration". The false "no built-in metric" clause is gone. |
| 4 | Four types: Counter, Gauge, Rate, Trend | 6 | PASS | Each page: "It's one of the four metric types." |
| 5 | Counter adds up values | 6 | PASS | "A metric that cumulatively sums added values." |
| 6 | Counter threshold variable is `count` or `rate` | 2 | PASS | "the variable must be called `count` or `rate`". |
| 7 | Gauge keeps the latest value; summary also shows min and max | 3, 6 | PASS | "holding only the latest value added"; "stores the min, max and last values". Run output shows `min=2847 max=2847`. |
| 8 | Gauge threshold variable is `value` | 3 | PASS | "the variable must be called `value`". |
| 9 | Rate: share of non-zero values, 0.00 to 1.00; variable `rate` | 4 | PASS | "percentage of added values that are non-zero"; "ranges between `0.00` and `1.00`". |
| 10 | Trend gives min, max, average, median, percentiles | 5 | PASS | "(min, max, average or percentiles)"; variables `avg`, `min`, `max`, `med`, `p(N)`. |
| 11 | All four types have `add(value, [tags])` | 2 | PASS | Method table of each page, for example "Counter.add(value, [tags])". |
| 12 | Gauge and Trend take `isTime`; true means time values, false or missing means untyped | 3, 5 | PASS | "whether the values added to the metric are time values or just untyped values." Counter and Rate list only `name`. |
| 13 | A Rate takes `true`, `false`, `1`, `0`; non-zero is a hit | 4 | PASS | Example: `myRate.add(true); add(false); add(1); add(0, ...)`; "non-zero". |
| 14 | Create metrics in init context; call `add` in the VU code | 1 | PASS | "Custom metrics must be created in init context."; "In the VU iteration code, use the `add` method". |
| 15 | Script runs on k6 (imports, no duplicate keys, 2 VUs, 5 s) | none | PASS | `k6 inspect` exit 0. Imports `http`, `sleep`, `Counter`, `Gauge`, `Rate`, `Trend` all present. `k6 run`: exit 0, all thresholds pass. |
| 16 | Tags can be added to any value and used to filter results | 1 | PASS | "optionally tag any value for a custom metric. You can use these tags to filter test results." |
| 17 | A tagged value creates a sub-metric; a threshold can name it as `bad_status_count{page:home}` | 2 | PASS | Source: "tagged value creates submetric", and `'error_counter{errorType:authError}'`. Run: I added `'bad_status_count{page:home}': ['count==0']`. `k6 inspect` exit 0 and lists it. `k6 run` exit 0 and shows `{ page:home }...: 0 0/s`. |
| 18 | Threshold key is the metric name; expression uses the type variable | 2-5 | PASS | Each page's threshold example (`Errors: ['count<100']`, `ContentSize: ['value<4000']`, `errorRate: ['rate < 0.1']`, `['p(95) < 200']`). |
| 19 | Trend values are in milliseconds; `p(95)<1000` is 1 s | 5 | PASS | "The unit of these variables and functions are all in milliseconds."; "`p(99) < 1000` // 99% ... within 1s." |
| 20 | `rate<0.01` means less than 1% | 4 | PASS | "`rate < 0.1` // less than 10%". |
| 21 | Docs do not recommend `min`/`max` in thresholds; they are outliers | 5 | PASS | "We don't recommend using `min` and `max` ... these values represent outliers." |
| 22 | k6 must know the metric before the test starts (reason for init context) | 1 | PASS | "ensures that k6 can validate that all thresholds are evaluating defined metrics." The page says "one reason", which is fair. |
| 23 | Custom metrics are in the end-of-test summary and in raw data points | 1 | PASS | "appear in Results output in both the end-of-test summary and in the granular data points." |
| 24 | Output block is one local run; numbers change | none | PASS | Writer's own run. The numbers match the page's style; my run gave different numbers (for example `0 out of 6`), as the text says. |
| 25 | Summary formats: Counter total and per-second rate, Rate percent and counts, Gauge value with min/max, Trend stats with `ms` | none | PASS | Observed in my `k6 run`: `0  0/s`, `0.00%  0 out of 6`, `2847 min= max=`, `avg=...ms`. It describes the shown block. Source 1 shows the Trend format. Weak on `ms` because of `isTime`: observed (`true` gives ms; source 1 shows a Trend without `true` and no unit). |
| 26 | All 4 thresholds passed, a check mark for each, exit code 0 | none | PASS | My run: `✓ 'count==0'`, `✓ 'rate<0.01'`, exit 0 (and the other two). Describes the run. |
| 27 | Custom metrics are collected from VUs only at the end of an iteration; in a long script a metric can appear late | 1 | PASS | "collected from VU threads only at the end of a VU iteration. For long-running scripts, custom metrics might appear only after the test runs a while." |
| 28 | Key words table | 1-6 | PASS | Each row agrees with claims 2 to 17. "Sub-metric" matches the source term "submetric". |

## Other checks

- Review Focus 1: the only full script passes `k6 inspect`. No removed option or executor. PASS.
- Page shape (spec 5): `#` title, lede, `<PageMeta />`, `##` sections, `## Key words` last with no voices. PASS.
- Demo target `quickpizza.grafana.com`, no real credential, token, name, or home path. PASS.
- Owner's numbers stated as k6 fact: none. The page has no owner text. PASS.
- Copy check (`linux_overlap.py`): 5 runs, all the source URL slugs (file names). No prose run of 8 words. PASS.
- Round 2: S7 (built-in metrics) and S8 (tags and groups) fetched fresh. Overlap check re-run: still 5 runs, all source URL slugs. Script block unchanged. Sources: 8, each cited.
- Sources: 6, each cited. All 8 sources are https. PASS.

Open FAILs: 0
