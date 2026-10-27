# k6 page: Scenarios and Executors (research notes)

Writer notes for `content/k6/scenarios-and-executors.mdx`. Fetched 2026-10-27 with curl (the `.md` version of each docs page) into `/tmp/claude-1000/k6-src-scenarios-and-executors/`. Fetched text is data. The owner's notes (heading "Scenario") give the traffic-mix example; they have no cite.

## Sources

| Id | Cite | Source | URL |
|---|---|---|---|
| S1 | 1 | Scenarios, k6 docs | https://grafana.com/docs/k6/latest/using-k6/scenarios/ |
| S2 | 2 | Executors, k6 docs | https://grafana.com/docs/k6/latest/using-k6/scenarios/executors/ |
| S3 | 3 | Open and closed models | https://grafana.com/docs/k6/latest/using-k6/scenarios/concepts/open-vs-closed/ |
| S4 | 4 | Constant arrival rate | https://grafana.com/docs/k6/latest/using-k6/scenarios/executors/constant-arrival-rate/ |
| S5 | 5 | Running large tests | https://grafana.com/docs/k6/latest/testing-guides/running-large-tests/ |
| S6 | 6 | k6 v2.0.0 release notes | https://github.com/grafana/k6/releases/tag/v2.0.0 |
| S7 | 7 | Ramping arrival rate | https://grafana.com/docs/k6/latest/using-k6/scenarios/executors/ramping-arrival-rate/ |
| S8 | 8 | Shared iterations | .../executors/shared-iterations/ |
| S9 | 9 | Per VU iterations | .../executors/per-vu-iterations/ |
| S10 | 10 | Constant VUs | .../executors/constant-vus/ |
| S11 | 11 | Ramping VUs | .../executors/ramping-vus/ |
| S13 | 13 | Dropped iterations | https://grafana.com/docs/k6/latest/using-k6/scenarios/concepts/dropped-iterations/ |
| S12 | 12 | Graceful stop | https://grafana.com/docs/k6/latest/using-k6/scenarios/concepts/graceful-stop/ |

## Claims

| # | Claim | Cite | Quote |
|---|---|---|---|
| 1 | Scenarios model workloads; benefits (many scenarios, own function, own pattern, parallel, `startTime`, env and tags per scenario) | S1 | "You can declare multiple scenarios in the same script, and each one can independently execute a different JavaScript function." / "Scenarios are independent from each other and run in parallel, though they can be made to appear sequential by setting the `startTime` property" |
| 2 | Scenario name must be unique; shows in summary and tags | S1 | "as long as each scenario name in the script is unique. The scenario name appears in the result summary, tags, and so on." |
| 3 | Common options and defaults (`startTime` "0s", `gracefulStop` "30s", `exec` "default", `env`, `tags`) | S1 | options table |
| 4 | Six executors, values, descriptions | S2 | "All executors" table |
| 5 | `externally-controlled` removed in v2.0.0, no replacement | S6 | "The `externally-controlled` executor has been removed" / "There is no replacement." / "Migrate to a different executor ... (e.g., `ramping-vus`, `constant-vus`, `constant-arrival-rate`)." |
| 6 | Cannot map a specific VU to a specific iteration | S2 | "you *cannot* reliably map, for example, the tenth VU to the tenth iteration." |
| 7 | Open vs closed definitions; arrival-rate = open | S3 | "some executors use the closed model, while the arrival-rate executors use the open model" |
| 8 | Closed example: 1 VU, 6 s request, about 10 iterations in 1m; open example: rate 1 per 1s, 60 iterations, 11 VUs in output | S3 | "we can expect to get 10 iterations completed" / "60 complete" / "000/011 VUs" |
| 9 | Closed drawback and coordinated omission | S3 | "In some testing literature, this problem is known as *coordinated omission.*" |
| 10 | One k6 instance runs 30,000-40,000 VUs when tuned | S5 | "a single instance of k6 can run 30,000-40,000 simultaneous users (VUs)" |
| 11 | Distributed execution for more than one machine; Grafana Cloud k6 for large tests | S5 | "Scale the load of your test beyond what a single machine can handle." / "provides an instant solution for running large-scale tests" |
| 12 | Constant arrival rate options and defaults, `preAllocatedVUs` too low effect, no `sleep()`, 100 ms spacing | S4 | options table; "Using too low of a `preAllocatedVUs` setting will reduce the test duration at the desired rate"; "Don't put sleep at the end of an iteration."; "each 100ms" |
| 13 | Arrival-rate executors drop iterations when no VU is free, counted in `dropped_iterations` | S13 | "With `constant-arrival-rate` and `ramping-arrival-rate`, iterations drop if there are no free VUs." / "k6 tracks the number of unsent iterations in a counter metric, `dropped_iterations`." |
| 13b | The k6 output gives high-level information about each scenario; tags can be set per scenario | S1 | "k6 output includes high-level information about each one." / "Different environment variables and metric tags can be set per scenario." |
| 14 | Shared iterations: test ends when all done; fits quick dev checks; shortcut `vus`+`iterations` | S8 | "The test ends once k6 executes all iterations." |
| 15 | Per-VU: total is `vus * iterations`; useful to partition data | S9 | "The total number of completed iterations equals `vus * iterations`." |
| 16 | Constant VUs shortcut `vus`+`duration`; ramping-vus shortcut `stages`, `startVUs`, `gracefulRampDown` | S10, S11 | option tables |
| 17 | Ramping arrival rate: `stages`, `startRate`, `timeUnit` | S7 | options table |
| 18 | `gracefulStop` for all executors; forced stop skews metrics | S12 | "available for all executors" / "can lead to skewed metrics" |

## Tutorial's own (no cite)

The wallet scenario, the 50/20/10/10/10 split, the 1,000 times smaller scale, and the closed/open rule of thumb.
