# k6 page: VUs, Duration, and Iterations (research notes)

Writer notes for `content/k6/vus-duration-iterations.mdx`. Fetched 2026-10-27 with curl into `/tmp/claude-1000/k6-src-vus-duration-iterations/` (docs path `latest`, k6 v2.3.x installed locally). Fetched text is treated as data.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | k6 options reference (VUs, Duration, Iterations) | https://grafana.com/docs/k6/latest/using-k6/k6-options/reference/ | 2026-10-27 |
| S2 | Shared iterations executor | https://grafana.com/docs/k6/latest/using-k6/scenarios/executors/shared-iterations/ | 2026-10-27 |
| S3 | Constant VUs executor | https://grafana.com/docs/k6/latest/using-k6/scenarios/executors/constant-vus/ | 2026-10-27 |
| S4 | Open and closed models | https://grafana.com/docs/k6/latest/using-k6/scenarios/concepts/open-vs-closed/ | 2026-10-27 |
| S5 | sleep(t) | https://grafana.com/docs/k6/latest/javascript-api/k6/sleep/ | 2026-10-27 |

Page cite numbers: n=1 is S1, n=2 is S2, n=3 is S3, n=4 is S4, n=5 is S5.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | `vus` is the number of VUs that run at the same time. It works with `iterations` or `duration`. Default 1. | S1 | "An integer value specifying the number of VUs to run concurrently, used together with the iterations or duration options." / default `1` |
| C2 | `duration` is the total run time. Each VU runs the script in a loop during it. | S1 | "A string specifying the total duration a test run should be run for. During this time each VU will execute the script in a loop." |
| C3 | `vus` + `duration` is a shortcut for one scenario with the constant-vus executor. | S1, S3 | "Together with the vus option, duration is a shortcut for a single scenario with a constant VUs executor." / "For a shortcut to this executor, use the VUs and duration options." |
| C4 | constant-vus: a fixed number of VUs run as many iterations as possible for a set time. | S3 | "a fixed number of VUs execute as many iterations as possible for a specified amount of time." |
| C5 | `iterations` is a fixed total of runs of the default function, instead of a time. | S1 | "the total number of iterations of the default function to execute in the test run, as opposed to specifying a duration of time" |
| C6 | `vus` + `iterations` is a shortcut for one scenario with the shared-iterations executor. | S1, S2 | "Together with the vus option, iterations is a shortcut for a single scenario with a shared iterations executor." |
| C7 | shared-iterations shares the iterations between the VUs. The test ends when all are done. | S2 | "shared-iterations executor shares iterations between the number of VUs. The test ends once k6 executes all iterations." |
| C8 | Iterations are not evenly distributed: a faster VU completes more. For a fixed number per VU, use per-VU iterations. | S1, S2 | "a VU that executes faster will complete more iterations than others." / "To guarantee that every VU completes a specific, fixed number of iterations, use the per-VU iterations executor." |
| C9 | Default `maxDuration` of a shared-iterations scenario is 10 minutes. It can change with `maxDuration` or the `duration` option. | S1, S2 | "By default, the maximum duration of a shared-iterations scenario is 10 minutes. You can adjust that time via the maxDuration option of the scenario, or by also specifying the duration global shortcut option." |
| C10 | Executor defaults: `vus` 1, `iterations` 1, `maxDuration` "10m". | S2 | table: vus 1; iterations 1; maxDuration "10m" |
| C11 | `--vus N` alone (no duration, iterations, or stages) makes one shared-iterations scenario with N VUs and N iterations. It overrides scenarios in the script and prints a warning. | S1 | "When you pass --vus N on its own (without --duration, --iterations, or --stage), k6 creates a single shared-iterations scenario with N VUs and N iterations. This overrides any scenarios defined in the script and prints a warning" |
| C12 | shared-iterations suits a fixed total of iterations when the time to finish is the concern. | S2 | "If the time to complete a number of test iterations is your concern, this executor should perform best." |
| C13 | constant-vus suits a fixed number of VUs for a set time. | S3 | "Use this executor if you need a specific number of VUs to run for a certain amount of time." |
| C14 | Closed model: the next iteration of a VU starts only when the last one ends. So iteration time sets the iteration count. | S4 | "in the closed model, VU iterations start only when the last iteration finishes." / "the execution time of each iteration dictates the number of iterations executed in your test." |
| C15 | In a closed model, slower responses give longer iterations and fewer new iterations. This is known as coordinated omission. | S4 | "Slower response times means longer iterations and a lower arrival rate of new iterations" / "this problem is known as coordinated omission." |
| C16 | `sleep(t)` suspends VU execution for t seconds. | S5 | "Suspend VU execution for the specified duration." / t: "Duration, in seconds." |
| C17 | In a constant-vus script with `sleep(0.5)`, iteration time is the sleep plus the request time. | S3 | "Total iteration time is sleep + time to finish request." |
| C18 | Do not use `sleep` in async code. | S5 | "Don't use sleep with async code" |

## Owner's data (no cite)

- Run 1 (`vus: 10`, `duration: '10s'`, `http://localhost:3000`): iteration_duration avg 3.26 ms, 30451 iterations, 30451 http_reqs, 0 % failed. Math: 10 / 0.00326 = 3067.48 per VU, x 10 = 30674.8.
- The picture of this run (`vus-duration-output.webp`) shows another run of the same script: 17945 requests, avg 5.55 ms. Check: 10 / 0.00555 x 10 = 18018, close to 17945.
- Run 2 (`vus: 10`, `iterations: 1000`): 1000 iterations in 00m00.4s, avg 4.12 ms. Math: 1 / 0.00412 = 242.71 per s per VU, x 10 = 2427.1 per s, 1000 / 2427.1 = 0.412 s. Output line: "1000 iterations shared among 10 VUs (maxDuration: 10m0s, gracefulStop: 30s)".

## Correction of the owner's sentence

Owner: "Vus & duration must be used together or only 1 is counted." Docs: `vus` defaults to 1 (C1); `duration` and `iterations` are shortcuts that work with `vus` (C3, C6); `--vus N` alone gives N VUs and N iterations (C11). The page says this, and does not say that duration alone is an error.
