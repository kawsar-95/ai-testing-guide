# Research notes: k6 in CI (`content/k6/k6-in-ci.mdx`)

The owner's notes only say that k6 fits CI/CD. The rest comes from official sources. The tutorial's own advice has no cite.

## Sources

| Id | Cite | Source |
|---|---|---|
| S1 | 1 | Thresholds, Grafana k6 docs: https://grafana.com/docs/k6/latest/using-k6/thresholds/ |
| S2 | 2 | grafana/k6 `errext/exitcodes/codes.go`: https://github.com/grafana/k6/blob/master/errext/exitcodes/codes.go |
| S3 | 3 | Automated performance testing, Grafana k6 docs: https://grafana.com/docs/k6/latest/testing-guides/automated-performance-testing/ |
| S4 | 4 | Web dashboard, Grafana k6 docs: https://grafana.com/docs/k6/latest/results-output/web-dashboard/ |
| S5 | 5 | grafana/setup-k6-action README: https://github.com/grafana/setup-k6-action |
| S6 | 6 | grafana/run-k6-action README: https://github.com/grafana/run-k6-action |
| S7 | 7 | Events that trigger workflows, docs.github.com: https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows |
| S8 | 8 | Using secrets in GitHub Actions, docs.github.com: https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions |
| S9 | 9 | actions/upload-artifact README: https://github.com/actions/upload-artifact |

## Claims

| Claim | Cite | Quote or evidence |
|---|---|---|
| A passing threshold run exits with code 0; a failed one exits non-zero | 1 | "k6 considers this test a pass and exits with an exit code 0" ... "k6 would exit with a non-zero exit code." |
| The failed-threshold exit code is 99 | 2 | `ThresholdsHaveFailed ExitCode = 99`. Also run locally with k6 v2.3.0: a threshold crossed gave exit 99. |
| Automation means pass/fail conditions in CI/CD, but not all tests suit CI/CD; nightly jobs and cron are other ways | 3 | "you could run performance tests from CI/CD pipelines and nightly jobs"; "not all performance tests are suited for CI/CD workflows" |
| Smoke tests can run on project changes / in the CI flow | 3 | "you can also schedule the execution of smoke tests on project changes"; "Schedule these tests as part of the suite of automated tests executed in the CI flow." |
| Smoke tests validate script errors before larger tests | 3 | "smoke tests to validate test script errors before executing larger tests" |
| `K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run script.js` writes an HTML report at the end of the run | 4 | "Filename to automatically export the HTML test report to at the end of the test run." |
| The report has graphs only if the test lasts longer than 3 times the aggregation period | 4 | "The report only includes graphs if the test duration is greater than three times the aggregation period" |
| setup-k6-action installs k6 (latest if `k6-version` is unset) | 5 | inputs table: `k6-version`; "If not set, latest k6 version will be used." Latest release v1.2.2; examples use `@v1`. |
| run-k6-action is a wrapper over `k6 run`; input `path` takes a glob; `flags` passes extra flags; it does not install k6 | 6 | "It is a wrapper over `k6 run`"; "This action won't setup/install k6"; `path`, `flags` rows. Latest release v1.5.0; examples use `@v1`. |
| `pull_request` triggers on pull request activity; `schedule` runs at cron times and only if the workflow file is on the default branch | 7 | "This event will only trigger a workflow run if the workflow file exists on the default branch." |
| Secrets are read with `${{ secrets.NAME }}`; they are not passed to runs triggered from a forked repository | 8 | `${{ secrets.SuperSecret }}`; "secrets are not passed to the runner when a workflow is triggered from a forked repository" |
| upload-artifact uses `name`, `path`, `retention-days`; README example `@v7` | 9 | README usage block |
| actions/checkout current major | - | README example `actions/checkout@v7` (github.com/actions/checkout, not cited on page: shown only in the workflow) |

## Local checks

- `k6 inspect` exit 0 on smoke.js and load.js.
- `k6 run` of a script with `http_req_duration: ['p(95)<1']` against quickpizza.grafana.com (1 VU, 5 s): error line "thresholds on metrics 'http_req_duration' have been crossed", exit 99.
- `k6.yml` parsed with PyYAML.

## Not verified

- Whether run-k6-action passes the step `env:` values to k6. It is a wrapper over `k6 run`, so the process inherits them. The README does not say it.
- That run-k6-action returns a failed step on a threshold failure. The README does not say it. The page states the k6 exit code (S1, S2) and the tutorial's own expectation.

## Fix round 1 additions

| Id | Cite | Source |
|---|---|---|
| S10 | 10 | Variables (environment variables), k6 docs: https://grafana.com/docs/k6/latest/using-k6/environment-variables/ . Shows `__ENV.MY_HOSTNAME` and the `--env`/`-e` flag. |
| S11 | 11 | Evaluate expressions in workflows and actions, docs.github.com (status check function `always()`): https://docs.github.com/en/actions/reference/workflows-and-actions/expressions |
| S12 | 12 | actions/checkout README (`actions/checkout@v7`): https://github.com/actions/checkout |

- `K6_WEB_DASHBOARD_PERIOD` (S4): "Period in seconds to update the web dashboard"; graphs only if the test is longer than 3 times the period. Smoke job sets `1s`; load keeps the default.
- quickpizza: no official page says "meant for learning". The page now says the k6 docs use it in examples, and the smoke use is the tutorial's own choice.
- load.js: no default host; `setup()` calls `fail()` if `BASE_URL` is empty. Run with `BASE_URL=` gave exit 107.
- The load script has 2 thresholds, the smoke script has 3. The text now says so.
