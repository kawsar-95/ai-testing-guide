# Fact-check: content/k6/k6-in-ci.mdx

Checked 2026-10-27 by an agent that did not write the page. All 9 sources were fetched fresh into /tmp/claude-1000/k6-check-k6-in-ci/ (the two action READMEs and the `run-k6-action` source files `src/index.ts` and `src/k6helper.ts` as raw text; the k6 docs and GitHub docs as HTML text). The research-note quotes were not trusted. k6 v2.3.0 is installed.

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Automation = plan performance tests as part of the software life cycle; often runs tests with pass/fail conditions in CI/CD | 3 | PASS | "Automation often refers to running tests with pass/fail conditions as part of the release process within CI/CD pipelines." |
| 2 | Nightly jobs and cron jobs are other ways to run tests regularly | 3 | PASS | "you could run performance tests from CI/CD pipelines and nightly jobs". The words "cron jobs" are not in the source text I fetched; "nightly jobs" are. Minor wording drift. |
| 3 | Not all performance tests suit CI/CD | 3 | PASS | "not all performance tests are suited for CI/CD workflows" |
| 4 | All thresholds pass: exit code 0; a failed threshold: non-zero | 1 | PASS | "k6 considers this test a pass and exits with an exit code 0 ... k6 would exit with a non-zero exit code." |
| 5 | The threshold exit code is 99 | 2 | PASS | codes.go: `ThresholdsHaveFailed ExitCode = 99` |
| 6 | A CI step fails when its command exits non-zero, so a failed threshold fails the job | none (marked "tutorial's own reasoning") | PASS | Marked as own reasoning. Also true for this action: `run-k6-action` `src/index.ts` sets `allTestsPassed = false` on `code !== 0` and calls `process.exit(1)`. The page could cite this; not required. |
| 7 | Test run: `p(95)<1` gives the message "thresholds on metrics 'http_req_duration' have been crossed" and exit 99 on k6 v2.3.0 | none (the writer's own run) | PASS | Re-ran with an impossible threshold (`iterations: count<0`): `level=error msg="thresholds on metrics 'iterations' have been crossed"`, exit 99. The message format matches. |
| 8 | k6 docs: schedule smoke tests as part of the automated tests in the CI flow; can schedule smoke tests on project changes | 3 | PASS | "Schedule these tests as part of the suite of automated tests executed in the CI flow." and "you can also schedule the execution of smoke tests on project changes." |
| 9 | A smoke test finds script errors before a larger test | 3 | PASS | "smoke tests to validate test script errors before executing larger tests" |
| 10 | Table (PR / schedule / before release) | none (marked "tutorial's own advice") | PASS | Marked as own advice, not a fact. The "1 VU, about 10 seconds" matches `smoke.js`. |
| 11 | `setup-k6-action` installs k6; latest k6 unless `k6-version` is set | 5 | PASS | "Installing a specific version of k6." and "If not set, latest k6 version will be used." |
| 12 | `run-k6-action` is a wrapper over `k6 run`; `path` takes a glob; `flags` = extra flags; does not install k6 | 6 | PASS | "It is a wrapper over `k6 run`, with support for globs"; `flags`: "Additional flags to be passed on to the `k6 run` command."; "This action won't setup/install k6." |
| 13 | Both READMEs show `@v1` | 5, 6 | PASS | Both READMEs use `grafana/setup-k6-action@v1` and `grafana/run-k6-action@v1`. |
| 14 | `K6_WEB_DASHBOARD=true` + `K6_WEB_DASHBOARD_EXPORT=<file>.html` write an HTML report when the test ends | 4 | PASS | "To automatically generate a report from the command line once the test finishes running, use the K6_WEB_DASHBOARD_EXPORT option." |
| 15 | The report has graphs only if the test runs longer than 3 times the aggregation period | 4 | PASS | "only includes graphs if the test duration is greater than three times the aggregation period value". See note N1. |
| 16 | The upload step publishes the file as an artifact | 9 | PASS | "Upload Actions Artifacts from your Workflow Runs." |
| 17 | `actions/checkout@v7`, `actions/upload-artifact@v7` are the current majors | 9 (upload); checkout has no cite | PASS (see note N2) | upload-artifact README uses `@v7` throughout; checkout README title "Checkout v7" and `uses: actions/checkout@v7`. checkout is not in `page.sources`. |
| 18 | The `with:` inputs `path` (run-k6-action) and `name`, `path` (upload-artifact) exist; `env:` of the step | 6, 9 | PASS | run-k6-action inputs table has `path`; upload-artifact README `with: name:, path:` |
| 19 | A step `env:` reaches k6 | 6 | PASS | README examples set `K6_CLOUD_TOKEN`/`K6_CLOUD_PROJECT_ID` in the step `env:`. Source `src/k6helper.ts`: `spawn(cmd, args, { ..., env: process.env })`. |
| 20 | `on: pull_request` runs on pull request activity | 7 | PASS | "if no activity types are specified, the workflow runs when a pull request is opened or reopened or when the head branch of the pull request is updated." |
| 21 | `on: schedule` with `cron` starts the job at the set time | 7 | PASS | "The schedule event allows you to trigger a workflow at a scheduled time." "Use POSIX cron syntax". |
| 22 | A scheduled run starts only when the default branch has the workflow file | 7 | PASS | "Scheduled workflows run on the latest commit on the default branch." (a fair reading) |
| 23 | `if: always()` runs the upload step even when the test step failed | 11 | PASS (round 2) | A GitHub Actions fact (status check function `always()`), not in any source. Add a GitHub docs source (for example the "Evaluate expressions in workflows" docs) or reword as the tutorial's own advice with no fact claim. |
| 24 | Pass the value as an env var and read it with `__ENV.NAME`; the `-e NAME=value` flag of `k6 run` | 10, 6 | PASS (round 2) | Cite 6 supports only "flags are passed to `k6 run`". `__ENV` and `-e` are k6 facts with no k6 source. Add the k6 "Environment variables" docs page to `page.sources` and cite it. (The script runs; `__ENV` works. This is a cite gap, not a wrong claim.) |
| 25 | GitHub does not pass secrets to the runner when a workflow starts from a forked repository | 8 | PASS | "With the exception of GITHUB_TOKEN, secrets are not passed to the runner when a workflow is triggered from a forked repository." |
| 26 | So a fork PR cannot read `TEST_BASE_URL`, and the smoke job falls back to the script default | 8 (inference) | PASS | Follows from 25 and `__ENV.BASE_URL \|\| default` (an empty string is falsy). |
| 27 | Read secrets with `${{ secrets.NAME }}` | 8 | PASS | The secrets doc "Using secrets in a workflow" uses this form. |
| 28 | "The k6 docs use `quickpizza.grafana.com` in examples" (now); its use in the smoke job is the tutorial's own choice | none (thresholds docs show the host) | PASS (round 2) | No source in `page.sources` says this. The k6 docs only use it in examples. Cite a k6 page that calls it a demo/test app, or reword to "the k6 docs use it in examples". |
| 29 | Never load-test production (danger callout) | none (marked "tutorial's own safety advice") | PASS | Marked as own advice. See note N3. |
| 30 | The load script has "the first two thresholds" of the smoke script | none | PASS (round 2) | It does not. `smoke.js` has 3 thresholds (`http_req_failed`, `http_req_duration`, `checks`); `load.js` shows 2 (no `checks`). Say "the same body and the first two thresholds", or add the third threshold. (A wrong statement about the page's own code.) |
| 31 | The load script uses 2 min up to 20 VUs, 5 min at 20, 1 min down to 0 | none (own code) | PASS | `k6 inspect` of the assembled `load.js` shows stages `2m0s -> 20`, `5m0s -> 20`, `1m0s -> 0`. |
| 32 | Key words table: "A failed threshold gives exit code 99" | 2 | PASS | Same as claim 5 (table has no cite; the fact is cited above). |

## Scripts and workflow

- `smoke.js` (page block 2): `k6 inspect` exit 0. Imports `http`, `check`, `sleep` are all used. No duplicate keys. No removed option.
- `load.js` (page block 3 is a fragment: only `options`): I assembled it with the imports and the body of `smoke.js`: `k6 inspect` exit 0. The fragment alone is not a runnable script. The text says "the same body", so this is acceptable (see note N4).
- Workflow YAML: `yaml.safe_load` OK. Keys `name`, `on` (parsed as `True`, normal for PyYAML), `jobs`. The `on:` has `pull_request` and `schedule` with one `cron: '0 2 * * *'`.
- Action names and inputs: `grafana/setup-k6-action@v1` (no inputs used; `k6-version`, `browser` exist), `grafana/run-k6-action@v1` (`path` exists), `actions/checkout@v7`, `actions/upload-artifact@v7` (`name`, `path`; `if-no-files-found` defaults to `warn`). All match the READMEs fetched today.
- run-k6-action fails on exit 99: confirmed in the action source, `src/index.ts`: for `code !== 0` it sets `allTestsPassed = false`, and at the end `if (!allTestsPassed) { process.exit(1) }`. The README does not say this.

## Other checks

- Page shape (spec 5): `#` title, lede, `<PageMeta />`, 4 `##` sections each with `<Voices>`, `## Key words` last (table). PASS.
- Privacy and out-of-date items: no real host, login, token, or home path. `quickpizza.grafana.com` is used, not `test-api.k6.io`. PASS.
- Images: none, as assigned. PASS.
- Copy check: `python3 scripts/linux_overlap.py content/k6/k6-in-ci.mdx /tmp/claude-1000/k6-check-k6-in-ci/` (9 files read): no run of 8 or more words. PASS.
- A number from the owner's run stated as a general fact: none. PASS.
- `node --test tests/voice-source.test.ts tests/k6.test.ts`: 29 pass, 0 fail.

## Notes (not FAILs)

- N1: With the default `K6_WEB_DASHBOARD_PERIOD` of 10s, a graph needs a test longer than 30 s. The 10 s smoke test therefore writes a report with no graphs. The page states the rule but not this consequence. Consider a sentence, or a longer smoke duration, or drop the dashboard export from the smoke job.
- N2: Add `actions/checkout` to `page.sources`, or accept that the version claim has no cite.
- N3: The k6 docs (source 3) say that "Testing production with minimal load is safe" with smoke tests. The page's "not against production" is the tutorial's own, stricter advice and is marked so. Acceptable.
- N4: When the secret is not set, the scheduled `load` job runs 20 VUs for 8 minutes against the public demo host. The callout says to keep load low. Consider a line that says to set `TEST_BASE_URL` before enabling the schedule.


## Round 2 (2026-10-27)

Changed text compared with the round-1 text. New sources 10 (k6 environment variables), 11 (GitHub expressions), 12 (actions/checkout) fetched fresh.

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 23 | `if: always()` | 11 | PASS (round 2) | "always: Causes the step to always execute, and returns true, even when canceled." |
| 24 | `__ENV` and `-e` | 10 | PASS (round 2) | "the environment variables are exposed through a global __ENV variable"; "use one or more -e / --env CLI flags ... k6 run -e MY_HOSTNAME=test.k6.io script.js" |
| 28 | quickpizza wording | none | PASS (round 2) | The k6 thresholds docs use `https://quickpizza.grafana.com` in examples. The smoke-job use is marked as the tutorial's own choice. |
| 30 | load thresholds | none | PASS (round 2) | `load.js` shows `http_req_failed` and `http_req_duration` only: the first two of `smoke.js`. |
| 33 | checkout@v7 | 12 | PASS (round 2) | The checkout README says "Checkout v7" and uses `actions/checkout@v7`. (This closes note N2.) |
| 34 | `K6_WEB_DASHBOARD_PERIOD: 1s` makes the 10 s smoke report show graphs; default period is 10 s | 4 | PASS | Docs table: "K6_WEB_DASHBOARD_PERIOD Period in seconds to update the web dashboard 10s"; rule "more than three times the aggregation period". 10 s > 3 s. (Closes N1.) |
| 35 | `load.js` has no default host; `setup()` calls `fail()` when `BASE_URL` is empty; k6 stops with a non-zero code (107) | none (own test) | PASS | `BASE_URL= k6 run load.js`: `GoError: BASE_URL is empty ... at setup`, summary shows `http_req_failed 0 out of 0` (no request), exit 107. 107 = `ScriptException` in codes.go (source 2). (Closes N4.) |
| 36 | The load job keeps the default period because it runs 8 minutes | none | PASS | 2+5+1 = 8 minutes. |
| 37 | Link `/k6/reports-and-dashboard/` | none | PASS | `content/k6/reports-and-dashboard.mdx` exists. |

Re-checks: YAML parses (`yaml.safe_load`; smoke step 3 has the 4 env keys). `k6 inspect` of `smoke.js` and of the full `load.js` (the page block is now a full script with `check`, `fail`, `sleep`, `http` imported): exit 0 for both. Overlap check (12 files): no run of 8 or more words. `node --test tests/voice-source.test.ts tests/k6.test.ts`: 29 pass, 0 fail. Layman sentences: none over 25 words.

Open FAILs: 0
