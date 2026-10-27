# Fact check: k6 thresholds

Sources fetched fresh on 2026-10-27 into /tmp/claude-1000/k6-check-thresholds/src/. S1 = thresholds docs, S2 = errext/exitcodes/codes.go, S3 = options reference (Stages). k6 v2.3.0.

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | A threshold is a pass/fail rule on a metric; a broken rule gives a failed status | S1 | PASS | "pass/fail criteria ... the test finishes with a failed status" |
| 2 | Testers often use thresholds to codify SLOs | S1 | PASS | "Often, testers use thresholds to codify their SLOs." (7 words, below the copy limit) |
| 3 | Set in `thresholds` of `options`; key is a metric name; value is a list of expressions | S1 | PASS | "In the thresholds property of the options object, set a key using the name of the metric" |
| 4 | An expression is true or false; false at the end fails the whole test | S1 | PASS | "evaluates to false at the end of the test, k6 considers the whole test a fail" |
| 5 | All pass gives exit code 0; a fail gives non-zero | S1 | PASS | "exits with an exit code 0 ... non-zero exit code" |
| 6 | The code is 99 | S2 | PASS | `ThresholdsHaveFailed ExitCode = 99` |
| 7 | A CI job reads this exit code, so a failed threshold fails the job | none | PASS (round 2) | Now marked "Tutorial's own view" in all 3 panels; it is the tutorial's own advice, not a source fact |
| 8 | Owner script: stages, thresholds `p(99)<500`, `rate<0.01` | S1 | PASS | Own example; `k6 inspect` exit 0 |
| 9 | Each stage names a VU target and a time to reach it | S3 | PASS (round 2) | Reworded; matches S3 "target number of VUs to ramp up or down to for a specific period". Overlap check: no run of 8 words (only the source URL line) |
| 10 | Stage arithmetic (0-50 in 10 s, 50-200 in 30 s, 200-0 in 20 s, run 1 minute) | script | PASS | 10+30+20 = 60 s |
| 11 | Owner output is one local run; numbers differ | owner run | PASS | Labelled as one run; no number is stated as a general fact |
| 12 | THRESHOLDS block is printed first; pass shows a check mark, fail a cross | S1 | PASS | "green checkmark ... would be a red cross" |
| 13 | Expression format `<aggregation_method> <operator> <value>`; examples `avg < 200`, `count >= 500`, `p(90) < 300` | S1 | PASS | Same text in S1 |
| 14 | Table of aggregation methods by type | S1 | PASS | Counter count and rate; Gauge value; Rate rate; Trend avg, min, max, med, p(N) |
| 15 | p(N): N between 0.0 and 100, `p(99.99)` | S1 | PASS | "between 0.0 and 100 ... p(99.99)" |
| 16 | Trend values are in milliseconds | S1 | PASS | "The values are in milliseconds." |
| 17 | A percentile outside 0 to 100 fails parsing; test stops before running | S1 | PASS | "fails parsing with an error, so the test stops before running" |
| 18 | Types script (Counter, Gauge, Rate, Trend, one threshold each) | S1 | PASS | `k6 inspect` exit 0; imports complete; no duplicate key |
| 19 | One metric can have many thresholds in one array (`p(50) < 300`, `p(95) < 900`) | S1 | PASS | "Multiple thresholds on a single metric" |
| 20 | A repeated key: extra keys silently ignored | S1 | PASS | "The rest will be silently ignored." |
| 21 | Long format is an object with extra properties; short format is a string | S1 | PASS | "The short format ... strings in an array. The long format puts each threshold in an object" |
| 22 | A failed check never changes the exit status; use a threshold on `checks` | S1 | PASS | "checks do not affect the exit status of k6" |
| 23 | `checks: ['rate>0.9']`: more than 90% of checks must pass | S1 | PASS | Rate threshold syntax |
| 24 | /api/status/500 returns 500, so all checks fail, rate 0%, exit 99 | S2 | PASS | Demo endpoint; writer ran it: exit 99; S2 gives 99 |
| 25 | `'checks{myTag:hola}': ['rate>0.9']` limits one tagged check | S1 | PASS | Same key in the S1 example |
| 26 | Tagged request creates a sub-metric; key `metric_name{tag_name:tag_value}` | S1 | PASS | "tagged requests create sub-metrics" |
| 27 | `type:API` and `type:static` thresholds apply to their tags | S1 | PASS | S1 example uses `http_req_duration{type:API}` |
| 28 | Group: `group_duration{group:::individualRequests}` with three colons | S1 | PASS | Same key in S1 |
| 29 | Default: judged at the end; `abortOnFail: true` stops at once | S1 | PASS | "the test run stops as soon as the threshold fails" |
| 30 | `delayAbortEval` delays the evaluation; relative time string like `10s`, `1m` | S1 | PASS | "relative time strings like 10s, 1m" |
| 31 | Abort script: after 5 s k6 stops (not 30 s), exit 99 | S1, S2 | PASS | Writer ran it: stopped at 6 s, exit 99 |
| 32 | Property table (`threshold`, `abortOnFail`, `delayAbortEval`; types) | S1 | PASS | S1 table: string, boolean, string |
| 33 | Cloud evaluates thresholds every 60 s; abortOnFail late up to 60 s | S1 | PASS | "evaluated every 60 seconds ... delayed by up to 60 seconds" |
| 34 | Key words table (SLO, percentile, sub-metric, exit code 99) | S1, S2 | PASS | Consistent with the rows above; Key words carry no cites by shape |

## Other checks

- `k6 inspect` on all 5 scripts: exit 0 each. No missing import, no duplicate key, no removed option or executor.
- Page shape: Key words last; links only to /k6/tags-and-groups/; no image; no credential or personal path in the output block (prompt replaced by `$`).
- Owner numbers (2.09ms, 6083 requests) are labelled one local run, not general facts.
- Copy check (`linux_overlap.py`): one real run of 10 words (row 9). The other hits are the URL line of the source file, not page text.
- Tutorial advice line has no cite, by design.

Round 2: rows 7 and 9 re-checked and changed text read; overlap re-run clean.

Open FAILs: 0
