# Fact-check: content/k6/scenarios-and-executors.mdx

Checked 2026-10-27 by an agent that did not write the page. All 12 sources fetched fresh with curl (the research-note quotes were not trusted). k6 v2.3.0 used for `k6 inspect`.

## Claims (Technical text)

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | A scenario configures the VU and iteration schedule in detail, to model a traffic mix | 1 | PASS | "Scenarios configure how VUs and iteration schedules in granular detail. With scenarios, you can model diverse workloads, or traffic patterns" |
| 2 | Many scenarios in one script, each can run a different JS function | 1 | PASS | "declare multiple scenarios in the same script, and each one can independently execute a different JavaScript function" |
| 3 | Each scenario can have its own VU and iteration pattern | 1 | PASS | "Every scenario can use a distinct VU and iteration scheduling pattern" |
| 4 | Scenarios are independent, run in parallel, can look sequential with `startTime` | 1 | PASS | "independent from each other and run in parallel, though they can be made to appear sequential by setting the startTime property" |
| 5 | Env vars and tags per scenario | 1 | PASS | "Different environment variables and metric tags can be set per scenario." |
| 6 | `scenarios` key of `options`; name unique; shows in summary and tags | 1 | PASS | "use the scenarios key in the options object ... each scenario name in the script is unique. The scenario name appears in the result summary, tags" |
| 7 | One k6 instance can run about 30,000 to 40,000 VUs when tuned | 5 | PASS | "a single instance of k6 can run 30,000-40,000 simultaneous users (VUs)" |
| 8 | Larger tests: split load over many k6 instances; Grafana Cloud k6 runs large tests | 5 | PASS | "In k6, you can split the load of a test across m[ultiple machines]"; "Grafana Cloud k6, our commercial offering, provides an instant solution for running large-scale tests" |
| 9 | `constant-vus` keeps a fixed number of VUs for the `duration` | 10 | PASS | "a fixed number of VUs execute as many iterations as possible for a specified amount of time" |
| 10 | `exec` = name of exported function; default is the default function | 1 | PASS | "exec string Name of exported JS function to execute. "default"" |
| 11 | All five scenarios start together (no `startTime`) | 1 | PASS | `startTime` default "0s"; scenarios run in parallel |
| 12 | Common options table: `executor` required; `startTime` "0s"; `gracefulStop` "30s"; `exec` "default"; `env` {}; `tags` {} | 1 | PASS | Scenario options table matches, each default as listed |
| 13 | `gracefulStop` is available for all executors | 12 | PASS (but see C1) | "The gracefulStop option is available for all executors." |
| 14 | A forced stop mid-iteration can skew metrics; graceful stop avoids it | 12 | PASS | "These interruptions can lead to skewed metrics and unexpected test results. To deal with this, k6 scenarios have a gracefulStop." |
| 15 | k6 output gives high-level information about each scenario (reworded) | 1 | PASS (round 2) |  Was FAIL. New text matches S1: "k6 output includes high-level information about each one". Old reason:  S1 says only "k6 output includes high-level information about each one" (the `execution:` header lists each scenario). It does not say the results are shown per scenario in blocks. |
| 16 | You can set tags for each scenario with the `tags` option (reworded) | 1 | PASS (round 2) | Was FAIL. New text matches S1 ("metric tags can be set per scenario"). Old reason:  S1 says only that tags "can be set per scenario" and shows a threshold on the built-in `scenario` tag (`iterations{scenario:api}`). "Every metric" and the link between the `tags` option and thresholds are not stated. Reword to the source, or cite a tags page. |
| 17 | QuickPizza is the demo site the k6 docs use | 3 | PASS | S3 scripts call `https://quickpizza.grafana.com/` |
| 18 | An executor schedules the VU workload; sets duration, constant or changing, VUs or arrival rate | 1 | PASS | "the VU workload is scheduled by an executor. Executors configure how long the test runs, whether traffic stays constant or changes, and whether the workload is modeled by VUs or by arrival rate" |
| 19 | Name goes in `executor` key, with hyphens | 2 | PASS | "The value is the executor name separated by hyphens." |
| 20 | Six current executors with these values | 2 | PASS | Table in S2 lists exactly these six |
| 21 | Shared iterations / per-VU / constant VUs / ramping VUs / constant arrival / ramping arrival descriptions | 2 | PASS | Each matches the S2 table ("fixed amount of iterations are shared", "exact number of iterations", ...) |
| 22 | Shared iterations: test ends when all iterations are done | 8 | PASS | "The test ends once k6 executes all iterations." |
| 23 | Per VU: total is `vus * iterations` | 9 | PASS | "The total number of completed iterations equals vus * iterations." |
| 24 | Model column: arrival-rate = open, other four = closed | 3 | PASS | "Some executors use the closed model, while the arrival-rate executors use the open model." |
| 25 | `shared-iterations` use: fixed work, time to finish matters, quick dev check | 8 | PASS | "If the time to complete a number of test iterations is your concern ... An example use case is for quick performance checks as part of the development cycle" |
| 26 | `per-vu-iterations` use: same iterations per VU, partition fixed test data | 9 | PASS | "a specific number of VUs to complete the same number of iterations ... fixed sets of test data that you want to partition between VUs" |
| 27 | `constant-vus` use: fixed VUs for a set time | 10 | PASS | "a specific number of VUs to run for a certain amount of time" |
| 28 | `ramping-vus` use and options `startVUs`, `gracefulRampDown` | 11 | PASS | "ramp up or down during specific periods of time"; options table lists `startVUs` and `gracefulRampDown` |
| 29 | Arrival-rate use: iterations at a set rate regardless of system; ramping has `stages`, `startRate`, `timeUnit` | 7 | PASS | S4: "independent of the performance of the system under test"; S7 options: stages, startRate, timeUnit |
| 30 | `vus`+`duration`, `vus`+`iterations`, `stages` are shortcuts for constant-vus, shared-iterations, ramping-vus | 10, 8, 11 | PASS | "For a shortcut to this executor, use the VUs and duration options" / "vus and iterations options" / "the stages option" |
| 31 | `externally-controlled` was removed in k6 v2.0.0; script does not start; no replacement | 6 | PASS | "scripts using executor: externally-controlled will no longer run"; "There is no replacement. Any test script with executor: externally-controlled will fail to start." |
| 32 | Release notes: move to `ramping-vus`, `constant-vus`, `constant-arrival-rate` | 6 | PASS | "Migrate to a different executor based on the desired load profile (e.g., ramping-vus, constant-vus, constant-arrival-rate)" |
| 33 | Cannot be sure a given VU runs a given iteration; tenth VU to tenth `SharedArray` item OK, tenth VU to tenth iteration not reliable | 2 | PASS | S2 Note, same facts |
| 34 | Closed: next iteration starts only when last ends; open: iterations start on their own schedule | 3 | PASS | "in the closed model, VU iterations start only when the last iteration finishes. In the open model ... VUs arrive independently" |
| 35 | Closed example: 1 VU, ~6 s request, ~10 iterations in 1 min | 3 | PASS | Script comment: "expect to get 10 iterations completed in total for the full 1m test duration"; output "10 complete" |
| 36 | Closed drawback: slower system lowers new-iteration rate; docs name it coordinated omission | 3 | PASS | "Slower response times means longer iterations and a lower arrival rate ... In some testing literature, this problem is known as coordinated omission." (docs attribute the name to the literature; wording acceptable) |
| 37 | Bad fit for a set arrival rate or requests per second | 3 | PASS | "not ideal when the goal is to simulate a certain arrival rate ... or throughput (e.g. requests per second)" |
| 38 | Open model decouples start of iterations from run time; response time does not change load | 3 | PASS | "The response times of the target system no longer influence the load" |
| 39 | Open example: 1 iteration/s with 6 s request, 60 iterations in 1 min | 3 | PASS | Output "60 complete" for a 1m run at 1 iters/s |
| 40 | Docs output shows 11 VUs for that run (the writer flag) | 3 | PASS | S3 output: "000/011 VUs, 60 complete ... 011/011 VUs 1m0s 1 iters/s". Stated as "the docs output shows", not as a general fact. |
| 41 | `constant-arrival-rate` options: `duration`, `rate`, `preAllocatedVUs` required; `timeUnit` "1s"; `maxVUs` default = preAllocatedVUs; definitions | 4 | PASS | S4 options table matches each row and default |
| 42 | While VUs are free it keeps starting iterations at the rate; slower iterations need more VUs | 4 | PASS | "continues to start iterations at the given rate as long as VUs are available ... To compensate for this, [it allocates more VUs]"; example: "k6 automatically adjusts the number of VUs ... up to the maxVUs" |
| 43 | Arrival-rate executors drop iterations when no VU is free, counted in `dropped_iterations`; a too-low `maxVUs` can cause this | 13 | PASS (round 2) | Was FAIL. S13 fetched fresh: "k6 tracks the number of unsent iterations in a counter metric, dropped_iterations"; "With constant-arrival-rate and ramping-arrival-rate, iterations drop if there are no free VUs." The `maxVUs` link is a hedged inference ("can cause"). Old reason:  Cite 4 does not state this; it says only "Maximum number of VUs to allow during the test run." The fact is true but comes from the Dropped iterations page ("iterations drop if there are no free VUs"), which is not in `page.sources`. Add that source and cite it, or remove the sentence. (Writer flag confirmed.) |
| 44 | If `preAllocatedVUs` is too low, VUs are made during the test, less time at target rate | 4 | PASS | "Using too low of a preAllocatedVUs setting will reduce the test duration at the desired rate, as resources need to continually be allocated" |
| 45 | Do not put `sleep()` at the end of the VU code | 4 | PASS | "Don't put sleep at the end of an iteration." |
| 46 | Rate 10 per second gives about one iteration every 100 ms | 4 | PASS | "each iteration starts about every tenth of a second (that is, each 100ms)" |
| 47 | `ramping-arrival-rate` takes `stages` with target rate, and `startRate` | 7 | PASS | S7 options table |
| 48 | Key words rows (scenario, executor, exec, startTime, gracefulStop, models, arrival rate, preAllocatedVUs, coordinated omission, distributed execution) | 1, 12, 3, 2, 4, 5 | PASS | Consistent with the rows above and S5 "distributed execution happens when a load is distributed across multiple machines" |

Not cited, not a source fact (PASS as the tutorial's own text): the wallet example (100,000 transactions, the 50/20/10/10/10 split) is labelled the owner's example and the tutorial's own assumption (owner notes: "১ লাখ Transaction", 50000/20000/10000/10000/10000 VUs). The "1,000 times smaller" scale and the closing rule of thumb are labelled as the tutorial's own. The `100,000 VUs` is the owner's plan, not claimed as a k6 fact. The statement "the notes use one constant-vus scenario for each operation" matches the owner's notes.

## Other checks

| Check | Result |
|---|---|
| `k6 inspect` on the 3 full scripts (mix, options, arrival-rate), v2.3.0 | PASS (all exit 0). No missing import, no duplicate key, no removed executor in use. |
| Review Focus 1 (removed executor, old option) | PASS: `externally-controlled` appears only in the warning callout. |
| Review Focus 2 (credentials/real names) | PASS: no `eyJ`, `admin@`, `bkash`, `roadtocareer` in the page. Example uses "a mobile wallet" and `wallet.example.com`. |
| Review Focus 3 (owner's number as general fact) | PASS: 11 VUs is attributed to the docs output; wallet numbers are labelled as the example. |
| Spec §5/§6 page shape | PASS: sections in order, `## Key words` (table) last, every `##` except Key words has `<Voices>`, no images, Tutorial advice tip not required for this module. |
| Copy check (`linux_overlap.py`, 17 runs reported) | 16 are not prose copying: 9 are source URLs in `page.sources`; 7 are runs bridged by option names and values (`constant-vus`, `ramping-arrival-rate`, ...) of reworded executor descriptions. Accepted. One real copy: C1. |

C1 (PASS, round 2): now "Every executor accepts `gracefulStop`"; overlap re-run shows no prose run (17 hits, all source URLs or option-name table runs, accepted). Was: the sentence "The `gracefulStop` option is available for all executors" (Technical, Common scenario options) is an 8-word run copied from S12 ("The gracefulStop option is available for all executors"). Reword, for example "All executors accept `gracefulStop`".

## Round 2

Re-checked the 4 FAIL rows, new source 13 (fetched fresh), and the changed text in all 3 panels. All 4 PASS. Overlap re-run: no new prose run. `node --test tests/voice-source.test.ts tests/k6.test.ts` was run (see coordinator).


## Round 2: example-project callout (2026-10-27)

Source: owner repository kawsar-95/k6-performance-testing, commit 51e4b9e (clone read only, nothing run). Facts about the owner project have no Cite.

| Fact | Verdict | Quote |
|---|---|---|
| Pattern is in `dmoney-transactions.k6.js` | PASS | file exists |
| A loop over a list of 13 flows | PASS | lines 47-64 (`const FLOWS = [` 13 rows: 2+3+4+4); line 73 `for (const f of FLOWS) {` |
| One `constant-arrival-rate` scenario for each flow | PASS | line 74-75 `scenarios[...] = { executor: 'constant-arrival-rate',` |
| `startTime` puts each flow in its time window | PASS | line 77 `startTime: `${(f.window - 1) * WINDOW_S}s`` |

Open FAILs: 0
