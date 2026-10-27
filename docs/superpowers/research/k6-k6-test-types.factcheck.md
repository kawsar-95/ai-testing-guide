# Fact-check: content/k6/k6-test-types.mdx

Checked 2026-10-27 by an agent that did not write the page. All 9 sources were fetched fresh with curl (HTML to text). The quotes of the research notes were not trusted. Sources: S1 test-types index, S2 smoke, S3 average-load, S4 stress, S5 spike, S6 soak, S7 breakpoint, S8 thresholds, S9 ramping-arrival-rate. k6 v2.3.0.

## Script checks

| Script | `k6 inspect` | Notes |
|---|---|---|
| smoke | exit 0 | imports `http`, `check`, `sleep`; no duplicate keys. Run once (`--vus 3 --duration 10s`): all 3 thresholds pass. See claims 15 and 16. |
| average-load | exit 0 | See claim 26 (script against its own rule). |
| stress | exit 0 | |
| spike | exit 0 | |
| soak | exit 0 | |
| breakpoint | exit 0 | `scenarios.breakpoint` parses to `ramping-arrival-rate` with `startRate`, `timeUnit`, `preAllocatedVUs`, `maxVUs`, `stages`; both thresholds parse with `abortOnFail` and `delayAbortEval`. No removed option or executor. |

Writer's claim about the docs' breakpoint snippet: CONFIRMED. The S7 snippet puts `executor: 'ramping-arrival-rate'` at the top level of `options`. `k6 inspect` on it prints `unknown fields in the options ... unknown field "executor"`, ignores it, and the test becomes a plain `stages` (ramping-vus) test. So the snippet does not do what S7's text says. S9 (executor page) shows the executor only inside `scenarios`, requires `preAllocatedVUs`, and says "Don't put sleep at the end of an iteration." The page's `scenarios` block and no `sleep()` are correct. The page does not tell the reader that the docs' snippet is invalid; it only says "The docs recommend the `ramping-arrival-rate` executor", which is true (S7).

Only the smoke script was run. No other script was run.

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | The docs name six main types: smoke, average-load, stress, soak, spike, breakpoint | 1 | PASS | S1 "The main types are as follows" and the list of the six. |
| 2 | Each type has its own goal and load shape | 1 | PASS | S1 "Different patterns of traffic create different risk profiles"; each type has its own article. |
| 3 | The docs avoid the plain name "load test" because it can mean any test that simulates traffic | 3 | PASS | S3 "Since 'load test' might refer to all types of tests that simulate traffic, this guide uses the name average-load test to avoid confusion." |
| 4 | Start with a smoke test, then average load, then heavier or longer patterns | 1 | PASS | S1 "Start with smoke tests, then progress to higher loads and longer durations." |
| 5 | No single type removes all risk; the risk profile decides; soak for long use, stress for heavy use | 1 | PASS | S1 "no single test type eliminates all risk"; "Some systems are more at risk of longer use, in which case soaks should be prioritized. Others ... intensive use ... stress tests". |
| 6 | Keep the shape simple: ramp-up, plateau, ramp-down; avoid a rollercoaster; it wastes resources and hides the cause | 1 | PASS | S1 "ramp-up, plateau, ramp-down. Avoid 'rollercoaster' series ... These will waste resources and make it hard to isolate issues." |
| 7 | Names are not standard; no consensus; a stress test for one app is an average-load test for another | 1 | PASS | S1 "A stress test for one application is an average-load test for another. Indeed, no consensus even exists about the names". |
| 8 | Every script has the same default function: one GET, a check, a one-second pause | none | PASS (round 2) | Not true for the breakpoint script: it has no `check` and no `sleep()` (the page itself says later that it has no `sleep()`). Fix: "Most scripts use ... ; the breakpoint script has no check and no pause". Round 2: intro now says every script sends one GET and checks the status; all but breakpoint pause 1 s. Breakpoint script now has a check and no sleep. Matches the scripts. |
| 9 | Only `options` changes; the docs say this keeps the load setup apart from iteration logic | 1 | PASS | S1 note: "configure the load configuration using options or scenarios. This separates workload configuration from iteration logic." |
| 10 | Callout: the other scripts "were only checked with `k6 inspect`, which reads a script and prints its options without sending any request" | none | PASS (round 2) | The statement about what `k6 inspect` does (no request sent) is a tool behavior with no `<Cite>`. No fetched source says it. Fix: cite a k6 CLI page, or say only "were only checked with `k6 inspect`". The safety rule itself is marked as the tutorial's own: PASS. Round 2: the "sends no request" claim is gone; the callout only says the other scripts were checked with `k6 inspect`. |
| 11 | Smoke: checks the script has no errors, the system has no errors under minimal load, and gives baseline response values | 2 | PASS | S2 goals: "Verify that your test script doesn't have errors ... doesn't throw any errors ... Gather baseline performance metrics". |
| 12 | Few VUs; more than 5 VUs is a mini-load test; seconds to a few minutes, or few iterations | 2 | PASS | S2 "more than 5 VUs could be considered a mini-load test ... a low number of iterations or a duration from seconds to a few minutes maximum." |
| 13 | Also called a shakeout test | 2 | PASS | S2 "smoke tests are also called shakeout tests." |
| 14 | Run when a script is created or changed and when the application code changes; first step before larger tests | 2 | PASS | S2 "whenever a test script is created or updated ... whenever the relevant application code is updated"; "run a smoke test as a first step". |
| 15 | Smoke script: `vus: 1`, load-shape chart "3", and "real run with 3 VUs for 10 seconds" | none | PASS (round 2) | Script says `vus: 1`; the chart and the run text say 3 VUs. The reader who copies the script gets 1 VU, not the run shown. S2's own example uses `vus: 3`. Fix: use `vus: 3` in the script (and keep chart and text), or show the `--vus 3` flag. Round 2: script, chart and text all say 3 VUs and 10 s. |
| 16 | Smoke output block is "a real run" of this script (checks 100 % 12 of 12, 12 iterations, `vus_max` 3) | none | PASS (round 2) | k6 v2.3.0 prints `checks_total`, `checks_succeeded`, `checks_failed`, not a `checks....: 100.00% 12 out of 12` line. My run of the same script with `--vus 3 --duration 10s` gave 18 iterations, `checks_succeeded 100.00% 18 out of 18`, `http_req_duration p(95)=702.27ms`, `vus_max 3`. The block is a hand-trimmed or older-format output and the 12 iterations do not match 3 VUs with the page's `sleep(1)`. Fix: paste real lines of a v2.3.0 run, or remove the block. It is correctly labelled one run, so it is not stated as a general fact. Round 2: new output uses `checks_total`/`checks_succeeded` lines of v2.3.0 (24 of 24, 24 iterations, `vus_max` 3), labelled one run; plausible for 3 VUs with a 1 s pause. |
| 17 | Example thresholds: under 1 % failed, `p(95)` under 1 second, over 99 % checks | 2 (idea only) | PASS | Example values, labelled so. `p(95)<800` is under 1 second, true. S2 uses a check on status 200. |
| 18 | Thresholds can fail a run by themselves | 8 | PASS | S8 "Thresholds are the pass/fail criteria that you define for your test metrics"; "k6 would exit with a non-zero exit code". |
| 19 | If errors come from the script, fix the script; if performance is poor at low load, report, fix the environment, run smoke again | 2 | PASS | S2 "correct the script before trying any more extensive tests ... report it, fix your environment, and try again with a smoke test". |
| 20 | Average-load: how the system performs under typical load, such as a normal day | 3 | PASS | S3 "Typical load might be a regular day in production". |
| 21 | Also called day-in-life or volume test | 3 | PASS | S3 "also might be called a day-in-life test or volume test." |
| 22 | When to run: meet goals on a typical day; early degradation during ramp-up or full load; standards after code or infrastructure change | 3 | PASS | S3 bullets "Assess ... Identify early degradation signs during the ramp-up or full load periods. Assure ... after system changes (code and infrastructure)". |
| 23 | Take users and throughput from monitoring or analytics of production, or from the business | 3 | PASS | S3 "look through APMs or analytic tools ... the business must provide these estimations." |
| 24 | Ramp-up 5 % to 15 % of test time (warm up or auto-scale) | 3 | PASS | S3 "usually lasts between 5% and 15% of the total test duration"; "time to warm up or auto-scale". |
| 25 | Plateau at least five times the ramp-up; ramp-down about as long as the ramp-up or a bit less | 3 | PASS | S3 "at least five times longer than the ramp-up"; "usually lasts as long as the ramp up or a bit less". |
| 26 | Average-load script (`stages` 2m/20, 5m/20, 1m/0) and chart (100 VUs, 5/30/5 min) | 3 | PASS (round 2) | The script breaks the page's own rules from claims 24 and 25: ramp-up is 2 of 8 minutes (25 %, not 5 to 15 %), the plateau is 2.5 times the ramp-up (not 5 times). The chart (100 VUs, 5/30/5) does not match the script (20 VUs, 2/5/1). Fix: make the script match the chart (S3 values 5m/30m/5m, 100) or choose values inside the rules (for example 1m, 10m, 1m). Round 2: script is 5m/30m/5m at 100 VUs, the same as the chart; ramp-up is 5/40 = 12.5 %, plateau is 6 times the ramp-up, inside the rules of claims 24 and 25. |
| 27 | Ramp-up shows whether response time gets worse as load grows; plateau shows whether the system and its resources stay stable | 3 | PASS | S3 "find whether the response time degrades as the load increases"; "validates if the system's performance and resource consumption stay stable during the period of full load". |
| 28 | A first test that crashes your system or staging is useful; start small or ramp up slowly | 3 | PASS | S3 note: "start small or configuring the ramp-up to be slow ... thousands of users run load tests that quickly crash their applications (or staging environments)". "Useful result" is the tutorial's mild reading, not a fact. |
| 29 | Thresholds turn the result into pass or fail | 8 | PASS | S8 "pass/fail criteria". |
| 30 | Stress: heavier than usual; same shape as average load, higher load, ramp-up longer in proportion | 4 | PASS | S4 "The main difference is higher load. To account for higher load, the ramp-up period takes longer in proportion". |
| 31 | Also called rush-hour, surge, scale test | 4 | PASS | S4 "rush-hour, surge, or scale tests". |
| 32 | Run for deadlines, paydays, rush hours | 4 | PASS | S4 "process deadlines, paydays, rush hours". |
| 33 | No fixed percentage: a few percent, 50 % to 100 %, twice, triple, or many times | 4 | PASS | S4 "there's no fixed percentage ... a few percentage points ... 50 to 100% higher ... twice, triple, or even orders of magnitude higher." |
| 34 | Run only after smoke and average-load tests; reuse the average-load script and raise the VUs | 4 | PASS | S4 "Only run stress tests after running average-load tests"; note "Run stress tests only after smoke and average-load tests"; "Re-use the Average-Load test script. Modify the parameters to have higher load or VUs." |
| 35 | Stress script: 10m to 200, 30m, 5m down; chart matches | 4 | PASS | S4 example uses the same stages. Chart matches the script. Thresholds are example values (labelled). |
| 36 | Shows how far performance falls under extra load and if the system survives | 4 | PASS | S4 "determines how much the performance degrades with the extra load and whether the system survives it". |
| 37 | A well-built system keeps a steady response time under a constant load | 4 | PASS | S4 "A well-performant system should respond with consistent response times when handling a constant workload". |
| 38 | Do not run a stress test early; it makes a low-load problem hard to find | 4 | PASS | S4 note "Running this test type earlier may be wasteful and make it hard to pinpoint problems ... at low volumes". |
| 39 | Spike: survives and performs under sudden, massive rush | 5 | PASS | S5 first sentence. |
| 40 | Examples: ticket sale, product launch, broadcast ad, deadline, seasonal sale | 5 | PASS | S5 examples list. |
| 41 | The rush may use other processes; script may need different steps; add only high-demand processes | 5 | PASS | S5 "might include different processes ... Add only the processes that will be on high demand". |
| 42 | Very fast ramp-up to very high load; no plateau or very short; fast ramp-down | 5 | PASS | S5 "very short or non-existent ramp-up time ... no plateau period or is very brief ... ramp-down is very fast". |
| 43 | Docs' own example: 2000 users over 2 minutes, 1 minute down, no plateau | 5 | PASS | S5 stages `{ duration: '2m', target: 2000 }`, `{ duration: '1m', target: 0 }`. |
| 44 | Errors are common and the test often does not finish | 5 | PASS | S5 "The test often won't finish. Errors are common". |
| 45 | Look at recovery time and time to return to normal; watch the backend | 5 | PASS | S5 "recovery times after the load rush, time to return to normal"; "Backend monitoring is a must". |
| 46 | Run, tune, and repeat until you trust the system | 5 | PASS | S5 "Run, tune, repeat"; "repeat the test until the system confidence is high". |
| 47 | Soak: long-time check of performance loss, resource use, availability and stability | 6 | PASS | S6 list of two bullets. |
| 48 | Finds defects after long use: slower responses, leaks, saturated data, full storage | 6 | PASS | S6 "response time degradation, memory or other resource leaks, data saturation, and storage depletion". |
| 49 | Also called endurance or stamina test | 6 | PASS | S6 "endurance, constant high load, or stamina test". |
| 50 | For systems that stay on for days, weeks, months; only after smoke and average-load | 6 | PASS | S6 "days, weeks, and months"; "Don't run soak tests before running smoke and average-load tests." |
| 51 | Reuse the average-load script, change only the plateau; typical times 3 hours up to 72 hours | 6 | PASS | S6 "re-use the average-load test script ... Some typical values are 3, 4, 8, 12, 24, and 48 to 72 hours." |
| 52 | Same ramp-up and ramp-down as average load; plateau hours or days | 6 | PASS | S6 "ramp-up and ramp-down periods of a soak test are the same as an average-load test". |
| 53 | Docs' example holds 100 users for 8 hours | 6 | PASS | S6 stages `5m/100`, `8h/100`, `5m/0`. The page script is the same stages. |
| 54 | Watch every metric over time and compare with backend: memory, CPU, network, cloud resources; expected: stable or within normal range | 6 | PASS | S6 "monitor for changes in any performance metric ... RAM consumed, CPU, Network, and growth of cloud resources"; "stays stable or within expected variations". |
| 55 | Backend monitoring matters most for soak tests | 6 | PASS | S6 "Of all test types, backend monitoring is especially important for soak tests." |
| 56 | Breakpoint: finds limits; where and how the system fails; tune or plan | 7 | PASS | S7 opening bullets. |
| 57 | Also called capacity, point load, limit test | 7 | PASS | S7 "capacity, point load, and limit testing". |
| 58 | When: load will grow, resource use high, after big code or infrastructure change; repeat after tuning | 7 | PASS | S7 "When to run" bullets; "repeat the test after the tuning exercise". |
| 59 | Run only when the system performs well under the other types | 7 | PASS | S7 "Run breakpoints only when the system is known to perform under all other test types." |
| 60 | Avoid in an elastic cloud (finds the limit of your cloud bill); if you must, turn elasticity off | 7 | PASS | S7 "finding only the limit of your cloud account bill ... turning off elasticity ... strongly recommended". |
| 61 | Load rises slowly to an unrealistically high level; no plateau, no ramp-down; usually fails before the target; must be stopped | 7 | PASS | S7 "ramps to unrealistically high numbers"; "no plateau, ramp-down, or other steps. And it generally fails before reaching the indicated point"; "The test must be stopped before it completes". |
| 62 | Docs recommend `ramping-arrival-rate`; it keeps raising the rate of new iterations when the system slows | 7 | PASS | S7 "breakpoint load increases even as the system starts to degrade. That makes it recommendable to use ramping-arrival-rate". |
| 63 | No `sleep()` at the end because the executor paces iterations | 9 | PASS | S9 "Don't put sleep at the end of an iteration. The arrival-rate executors already pace the iteration rate". |
| 64 | `preAllocatedVUs` is needed; `startRate`, `timeUnit`, `maxVUs` optional | 9 | PASS | S9 options table: `preAllocatedVUs` (required); `startRate` default 0; `timeUnit` default "1s"; `maxVUs` "If unset, same as preAllocatedVUs". |
| 65 | Stop by hand with Ctrl+C, or by a threshold with `abortOnFail: true` | 7 | PASS | S7 "press Ctrl+C in Linux or Windows"; "you must define abortOnFail as true". |
| 66 | `delayAbortEval` waits before the threshold is checked so the metric has samples | 8 | PASS | S8 "delay the evaluation of the threshold to let some metric samples to be collected". |
| 67 | "When a threshold stops the test, you have found a limit" | 7 | PASS | S7 "as thresholds start to fail. When these problems appear, the system has reached its limits." (no cite at that sentence; same paragraph is cited) |
| 68 | Five failure points: degraded performance, troublesome performance, timeouts, errors, system failure | 7 | PASS | S7 list of the five. |
| 69 | After the run accept the limits and prepare, or tune and run again | 7 | PASS | S7 "accept them or tune the system". |
| 70 | Docs' breakpoint snippet is invalid; the page uses `scenarios` (not stated on the page) | 7, 9 | PASS | Confirmed with `k6 inspect` (see "Script checks"). The page's version is valid. |
| 71 | Key words table (11 rows) | none | PASS | Definitions agree with S1 to S9: soak = average load with a long plateau (S6); breakpoint ends at failure or a threshold (S7); `abortOnFail` stops the test (S7, S8). Terms with no new fact. |

## Other checks

- Page shape (spec §5): `#` title, lede, `<PageMeta />`, `##` sections, `## Key words` last: PASS. Each `##` except Key words has `<Voices>`: PASS (7 of 7).
- Sources: 9 in `page.sources`, each cited at least once (1 to 9), all `https://` official k6 docs: PASS.
- Demo target: `https://quickpizza.grafana.com` only; no `test-api.k6.io`, no `test.k6.io`: PASS.
- Privacy: no token, no email, no home path, no real name (grep `eyJ`, `admin@`, `roadtocareer`, `bkash`: 0): PASS.
- Images: none; none assigned: PASS.
- Safety: the danger callout tells the reader to run only the smoke test against a public host. Threshold values and VU numbers are all called "example values" in the text: PASS.
- A number from the owner's run as a general fact: none. The only run output is labelled "one run, so your numbers will differ": PASS (but see claim 16).
- Copy check (`scripts/linux_overlap.py`, 9 source text files): 8 runs, all of them URL strings of the source links. No prose run of 8 or more words: PASS.
- `node --test tests/voice-source.test.ts tests/k6.test.ts`: pass.

Round 2 (2026-10-27): all 18 code blocks of the page were copied to a new folder and `k6 inspect` exited 0 on each (6 scripts, each in 3 voices). Overlap check: 8 runs, all URLs. `tests/voice-source.test.ts` and `tests/k6.test.ts`: pass. The smoke thresholds are now `p(95)<1000` and the text agrees.

Open FAILs: 0
