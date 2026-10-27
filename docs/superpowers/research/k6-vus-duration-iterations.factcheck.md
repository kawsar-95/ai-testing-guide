# Fact check: k6 / vus-duration-iterations

Checker: a different agent than the writer. Sources fetched fresh on 2026-10-27 (grafana.com/docs/k6/latest). S1 options reference, S2 shared-iterations, S3 constant-vus, S4 open-vs-closed, S5 sleep.

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | `vus` = number of VUs run concurrently | S1 | PASS | "number of VUs to run concurrently, used together with the iterations or duration options" |
| 2 | `vus` default is 1 | S1 | PASS | table: `K6_VUS --vus, -u vus 1` |
| 3 | An iteration is one run of the `default` function | S1 | PASS | "total number of iterations of the default function" |
| 4 | `duration`: total run time, each VU loops the script | S1 | PASS | "During this time each VU will execute the script in a loop" |
| 5 | `vus`+`duration` is a shortcut for a constant-vus scenario | S1, S3 | PASS | "Together with the vus option, duration is a shortcut for a single scenario with a constant VUs executor" |
| 6 | constant-vus keeps fixed VUs running as many iterations as possible in the time | S3 | PASS | "a fixed number of VUs execute as many iterations as possible for a specified amount of time" |
| 7 | `iterations` replaces a run time | S1 | PASS | "as opposed to specifying a duration of time" |
| 8 | `vus`+`iterations` is a shortcut for shared-iterations | S1, S2 | PASS | "iterations is a shortcut for a single scenario with a shared iterations executor" |
| 9 | shared-iterations shares iterations between VUs; ends when all are run | S2 | PASS | "shares iterations between the number of VUs. The test ends once k6 executes all iterations." |
| 10 | Default `maxDuration` of shared-iterations is 10 minutes | S1, S2 | PASS | S1 "the maximum duration of a shared-iterations scenario is 10 minutes"; S2 table `maxDuration ... "10m"` |
| 11 | k6 stops a very slow test at that limit | S2 | PASS | "Maximum scenario duration before it's forcibly stopped" |
| 12 | A faster VU completes more iterations; use per-vu-iterations for a fixed number per VU | S1, S2 | PASS | "a VU that executes faster will complete more iterations than others"; "use the per-VU iterations executor". The "takes the next iteration when it is free" wording is a light paraphrase of the shared pool; accepted. |
| 13 | `--vus N` alone makes one shared-iterations scenario, N VUs, N iterations, replaces script scenarios, prints a warning | S1 | PASS | quote matches the end of the VUs section |
| 14 | `vus`/`iterations`/`duration` are shortcuts; use `scenarios` for more control | S1 | PASS | "If you'd like more control look at the stages option or scenarios" |
| 15 | Table: constant-vus use when a fixed number of VUs run for a time | S3 | PASS | "specific number of VUs to run for a certain amount of time" |
| 16 | Table: shared-iterations use when time to finish a fixed number of iterations is the concern | S2 | PASS | "If the time to complete a number of test iterations is your concern" |
| 17 | Closed model: next iteration starts only when the last ends; server speed sets iteration count | S4 | PASS | "in the closed model, VU iterations start only when the last iteration finishes" |
| 18 | Coordinated omission names the slow-server problem in a closed model | S4 | PASS | "In some testing literature, this problem is known as coordinated omission" |
| 19 | Arrival-rate executors use the open model, for a fixed rate | S4 | PASS | "the arrival-rate executors use the open model" |
| 20 | `sleep(t)` suspends the VU for t seconds | S5 | PASS | "Suspend VU execution for the specified duration ... Duration, in seconds" |
| 21 | Iteration time = sleep + request time | S3 | PASS | example comment "Total iteration time is sleep + time to finish request" |
| 22 | Do not use `sleep()` in async code; it blocks the VU and stops promises resolving | S5 | PASS | "sleep blocks VU execution and prevents promises from resolving" |
| 23 | Owner's run 1: 30451 requests, avg 3.26 ms, math 3067.48 / 30674.8 | none (owner's run) | PASS | Framed as one run, not a k6 rule. Math checked: 10/0.00326=3067.48; x10=30674.8. Matches owner notes. |
| 24 | Picture check: 10/0.00555 x 10 = 18018; run shows 17945 | image | PASS | Image: iteration_duration avg 5.55ms, iterations 17945, 10 looping VUs for 10s. 10/0.00555x10=18018. Alt text matches the image. |
| 25 | Owner's run 2: 1000 iterations, avg 4.12 ms, 00m00.4s, header lines | none (owner's run) | PASS | Matches notes exactly. Math: 1/0.00412=242.72 (page truncates to 242.71), x10=2427.1, 1000/2427.1=0.412 s. Truncation is harmless. |
| 26 | `sleep(1)`: a little under 100 iterations | own | PASS | Marked "the tutorial's own estimate, not a measured result". |
| 27 | "Without sleep a few VUs ... closer to a stress test" and sleep advice | own | PASS | Marked as the tutorial's own view/advice. |
| 28 | Key words table: every fact row has a cite; VU, Iteration, Think time are definitions | S1-S5 | PASS | Cites present on all fact rows. |

Script checks (`k6 inspect`, k6 v2.3.0): block 1 (vus+duration) exit 0; block 2 (vus+iterations) exit 0; block 3 (sleep) exit 0. Imports present (`http`, `sleep`). No duplicate keys. No removed options.

Other checks:
- Page shape: sections end with `## Key words`; Voices on every section except Key words. `node --test tests/voice-source.test.ts tests/k6.test.ts`: pass 29, fail 0.
- Owner's sentence ("vus and duration must be used together, or only one user is counted") is corrected against S1, not repeated as fact. PASS.
- Owner numbers are labelled as one local run in both runs. PASS.
- Demo target `localhost:3000` with an "own server only" warning. PASS.
- Privacy: no credentials or tokens. The image `vus-duration-output.webp` shows the prompt `PS D:\k6-practice\visitor-counter>` (a drive path, not a home path or login). Not a FAIL; the controller may crop it.
- Copy check (`linux_overlap.py`): 7 runs, all URL tokens from the page's own source list. No prose run of 8 words. PASS.
- Image use: only the assigned `vus-duration-output.webp`.

Open FAILs: 0
