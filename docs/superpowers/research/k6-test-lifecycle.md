# k6 page: The k6 Test Lifecycle (research notes)

Writer notes for `content/k6/test-lifecycle.mdx`. Fetched 2026-10-27 with curl into `/tmp/claude-1000/k6-src-test-lifecycle/` (`lc.html`, `lc.txt`). Fetched text is treated as data. The owner's notes (headings "K6 Life Cycle", "Code Structure", "Good Practices") are the base and have no cite.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | Test lifecycle, Grafana k6 documentation (latest) | https://grafana.com/docs/k6/latest/using-k6/test-lifecycle/ | 2026-10-27 |

| S2 | Environment variables, Grafana k6 documentation | https://grafana.com/docs/k6/latest/using-k6/environment-variables/ | 2026-10-27 |
| S3 | Checks, Grafana k6 documentation | https://grafana.com/docs/k6/latest/using-k6/checks/ | 2026-10-27 |

Page cite numbers: n=1 is S1, n=2 is S2, n=3 is S3.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | A script always runs the stages in the same order: init, setup, VU code, teardown. | S1 | "a script always runs through these stages in the same order" |
| C2 | Init and VU code are required. Setup and teardown are optional. | S1 | "Required" (init, VU code); "Optional" (setup, teardown) |
| C3 | Except for init, each stage is a lifecycle function. | S1 | "Except for init code, each stage occurs in a lifecycle function" |
| C4 | Init runs once per VU (in cloud scripts, it can run more often). | S1 | "Once per VU*" / "In cloud scripts, init code might be called more often." |
| C5 | Init loads files, imports modules, sets options, and defines the lifecycle functions. All code outside a lifecycle function is init code and runs first. | S1 | "Import modules / Load files from the local file system / Configure the test for all options / Define lifecycle functions" / "All code that is outside of a lifecycle function is code in the init context." |
| C6 | Init cannot make HTTP requests, so it is reproducible. | S1 | "One limitation of init code is that it cannot make HTTP requests." |
| C7 | Setup runs once, after init and before the VU stage. Teardown runs once, after the VU stage. | S1 | "setup is called at the beginning of the test, after the init stage but before the VU stage." / "teardown is called at the end of a test, after the VU stage" |
| C8 | Setup and teardown can use the full k6 API, for example HTTP requests. | S1 | "You can call the full k6 API in the setup and teardown stages, unlike the init stage." |
| C9 | VU code runs in the default function or a scenario function. It runs once per iteration, as many times as the options need. | S1 | "Typically, VU code is inside the default function, but it can also be inside the function defined by a scenario" / "Once per iteration, as many times as the test options require" |
| C10 | A VU runs default from start to end, then loops back. k6 resets the VU: cookies are cleared, TCP connections might be torn down. | S1 | "Cookies are cleared, and TCP connections might be torn down (depending on your test configuration options)." |
| C11 | VU code does not load local files or import modules. | S1 | "VU code does not load files from your local filesystem. VU code does not import any other modules." |
| C12 | Setup must finish within `setupTimeout` (default 60 s). If it takes longer, the test fails before any VU starts. | S1 | "must complete within the configured setupTimeout (default: 60 seconds)" / "the test fails before any VUs start" |
| C13 | If setup ends abnormally (throws), teardown is not called. | S1 | "If the Setup function ends abnormally (e.g throws an error), the teardown() function isn't called." |
| C14 | `--no-setup` and `--no-teardown` skip the stages. | S1 | "k6 run --no-setup --no-teardown ..." |
| C15 | `default(data)` and `teardown(data)` receive the value that setup returns. | S1 | "the function signatures of the default() and teardown() functions take an argument, referred to here as data" |
| C16 | You can pass only data (JSON), not functions, between setup and the other stages. | S1 | "You can pass only data (i.e. JSON) between setup and the other stages. You cannot pass functions." |
| C17 | Large setup data uses more memory. | S1 | "If the data returned by the setup() function is large, it will consume more memory." |
| C18 | You cannot change data in default and pass it to teardown. Each stage and each VU gets a fresh copy. | S1 | "You cannot manipulate data in the default() function, then pass it to the teardown() function." / "each stage and each VU has access to a fresh "copy" of whatever data the setup() function returns" |
| C19 | Reason: passing mutable data between all VUs and teardown is complex, especially in distributed setups. | S1 | "It would be extremely complicated and computationally intensive to pass mutable data between all VUs and then to teardown, especially in distributed setups." |
| C20 | `handleSummary()` runs once more at the very end. | S1 | "k6 calls one more lifecycle function at the very end of the test" |
| C21 | k6 exposes environment variables in the global `__ENV` object. `k6 run -e NAME=value script.js` passes them. | S2 | "the environment variables are exposed through a global __ENV variable, a JS object" / "k6 run -e MY_HOSTNAME=test.k6.io script.js" |
| C22 | Import `check` from `k6`. | S3 | "import { check } from 'k6';" |

## Notes on claims without a cite

- QuickPizza endpoints and the 201/200 statuses come from the author's own test run, and the page says so. S1 shows only `/api/json`.
- The page does not claim that a throw in setup stops the test before any VU starts. It says only what S1 says (C13).
- The page does not say that k6 needs a default export. It says VU code can be in the default function or a scenario function (C9).

## Owner's notes: corrections

- The example used `check` without importing it. The page imports it from `k6`.
- The example used `export let options`. The page uses `export const options`.
- Code block 3 text said the main function hits `/user/login`. The code calls `/users/list`. The login happens in setup. The page says so.
- The example used a real-looking email and password and printed the token in teardown. The page uses QuickPizza (`https://quickpizza.grafana.com`) with a generated user and does not print the token.
- The owner's practice 3 and 4 say the same thing as C18. The page merges the reasoning but keeps 5 points.
