# Fact-check: stages-and-checks (k6 module)

Page: `content/k6/stages-and-checks.mdx`. I did not write this page. Sources were fetched fresh with curl on 2026-10-27 into `/tmp/claude-1000/k6-check-stages-and-checks/`.

Sources: [1] Checks, [2] Options reference (Stages), [3] Ramping VUs executor, [4] Thresholds (all grafana.com/docs/k6/latest).

Automated checks:

- `k6 inspect` on the 3 full scripts (k6 v2.3.0): exit 0 for all 3. Each imports `check` and `sleep`. No duplicate key, no removed option or executor.
- Overlap check (`linux_overlap.py`): 3 runs, all are the source URLs of `page.sources`, not prose. PASS.
- Page shape: `## Key words` last, a `<Voices>` block in each other section, images none, demo targets `quickpizza.grafana.com` and `localhost:3000` only. PASS. Privacy (script name, Windows path, token, login): none found. PASS.
- `node --test tests/voice-source.test.ts tests/k6.test.ts`: 29 pass, 0 fail.

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | `stages` is a list of objects with `duration` and `target`; `target` is the number of VUs to ramp up or down to | [2] | PASS | "A list of VU { target: ..., duration: ... } objects that specify the target number of VUs to ramp up or down to for a specific period" |
| 2 | `stages` is a shortcut for one scenario with the ramping VUs executor | [2] | PASS | "It is a shortcut option for a single scenario with a ramping VUs executor" |
| 3 | k6 ramps the VU count linearly to the target | [3] | PASS | "ramps up VUs linearly from the startVUs of 0 to the target of 10" |
| 4 | `vus` used with `stages` becomes `startVUs` | [2] | PASS | "If used together with the VUs option, the vus value is used as the startVUs option" |
| 5 | `startVUs` default is 1 | [3] | PASS | "startVUs ... Number of VUs to run at test start. 1" |
| 6 | `gracefulRampDown` waits for a started iteration before stopping it; default `30s` | [3] | PASS | "Time to wait for an already started iteration to finish before stopping it during a ramp down. "30s"" |
| 7 | A flat stage is a stage with the same target as the one before; the docs example ramps to 10 for 3 min then holds 10 for 5 min | [2] | PASS | "ramping up from 1 to 10 VUs for 3 minutes, then staying flat at 10 VUs for 5 minutes" |
| 8 | A check tests a true or false condition; examples status 201 and body size | [1] | PASS | "a check could validate that a POST request has a response.status == 201, or that the body is of a certain size" |
| 9 | A check is like an `assert` | [1] | PASS | "similar to what many testing frameworks call an assert" |
| 10 | A 200 status can still carry an error message; add a body check | [1] | PASS | "even an HTTP 200 response contains an error message ... adding a check to verify the response body" |
| 11 | A check creates a rate metric | [1] | PASS | "Each check creates a rate metric" |
| 12 | The summary shows `checks_total`, `checks_succeeded`, `checks_failed` | [1] | PASS | "The check built-in metric is split into three separate metrics: checks_total, checks_succeeded, and checks_failed" |
| 13 | A failed check does not stop the script or give a failed exit status; k6 tracks the failed checks | [1] | PASS | "the script will continue executing successfully and will not return a 'failed' exit status"; "k6 keeps track of the rate of failed checks" |
| 14 | To fail the test, combine the check with a threshold; `checks: ['rate>0.99']` fails below 99 % | [1] [4] | PASS | [4] example `checks: ['rate>0.9']`: "the rate of successful checks should be higher than 90%"; [1] "combine checks with thresholds" |
| 15 | In CI the exit code of k6 decides if the job passes | [1] | PASS | [1] "particularly useful ... integrating k6 into your CI pipelines" with the exit-status note |
| 16 | The `checks` metric is a rate | [1] [4] | PASS | [4] threshold on "the checks metric" with `rate>` |
| 17 | The stage table (1 to 50 in 1 m, 50 to 200 in 3 m, 200 to 0 in 2 m) and the hold script | [2] [3] | PASS | Follows from claims 3 to 5; the tutorial's own numbers |
| 18 | The iteration estimate (1,500 + 22,500 + 12,000 = about 36,000) | none | PASS | Tutorial's own math, labeled. Check: 25x60, 125x180, 100x120 = 36,000. |
| 19 | Owner run: 72,036 checks from 36,018 iterations, 2 checks each | none | PASS | Owner's example run, labeled "one local run". Matches the owner's notes. |
| 20 | Owner run output (1 ms average, `localhost:3000`) is one local run, not a general result | none | PASS | Labeled in the page; matches the notes. |
| 21 | "The first script's stage 2 comment said stay at 200 users" | none | PASS | The owner's notes have "stay at 200 users for 3 minutes". |
| 22 | "This estimate works only because the demo server answers in about 1 ms" | none | FAIL (round 1) -> PASS (round 2) | Fixed: Technical and Layman and Bangla now say "the local server of the owner". The 1 ms came from the owner's server at `localhost:3000`, not from the demo site (the page says so two sections later). It states an owner number as a fact about the demo site. Say "the owner's local server". |
| 23 | "A remote server gives larger times" (section "The owner's local run") | none | PASS (round 2) | Removed from all panels. Round 1: a performance fact with no cite. Remove it or cite a source. |
| 24 | The ramp / flat / ramp down advice (warm up, stable numbers, recovery) | none | PASS | Marked "The tutorial's own advice". |
| 25 | "`iterations` and `http_reqs` are equal because each iteration sends one request" | none | PASS | Reading of the owner's output (36,018 both; the script has one `http.get`). |

Round 2 (2026-10-27): rows 22 and 23 re-checked in the changed text. `k6 inspect` of the 3 scripts still exit 0, overlap still only source URLs, tests 29 pass.

Open FAILs: 0
