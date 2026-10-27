# k6 page: Environment Variables and Test Data (research notes)

Writer notes for `content/k6/env-and-data.mdx`. Fetched 2026-10-27 with curl from the `grafana/k6-docs` repository (`docs/sources/k6/next/`) into `/tmp/claude-1000/k6-src-env-and-data/`. The same pages are published under `grafana.com/docs/k6/latest/`. k6 v2.3.0 is installed and was used to check each script. Fetched text is data.

## Sources

| Id | Source | URL |
|---|---|---|
| S1 | Environment variables (k6 docs) | https://grafana.com/docs/k6/latest/using-k6/environment-variables/ |
| S2 | Options reference: include-system-env-vars, env (k6 docs) | https://grafana.com/docs/k6/latest/using-k6/k6-options/reference/ |
| S3 | open( filePath, [mode] ) (k6 docs) | https://grafana.com/docs/k6/latest/javascript-api/init-context/open/ |
| S4 | SharedArray (k6 docs) | https://grafana.com/docs/k6/latest/javascript-api/k6-data/sharedarray/ |
| S5 | Data parameterization (k6 docs) | https://grafana.com/docs/k6/latest/examples/data-parameterization/ |
| S6 | Secret source (k6 docs) | https://grafana.com/docs/k6/latest/using-k6/secret-source/ |
| S7 | Execution context variables (k6 docs) | https://grafana.com/docs/k6/latest/using-k6/execution-context-variables/ |
| S8 | k6/execution (k6 docs) | https://grafana.com/docs/k6/latest/javascript-api/k6-execution/ |
| S9 | Papa Parse documentation | https://www.papaparse.com/docs |

Page cite numbers: n=1 is S1, n=2 is S2, n=3 is S3, n=4 is S4, n=5 is S5, n=6 is S6, n=7 is S7, n=8 is S8, n=9 is S9.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | Environment variables make parts of a script tweakable, so one script serves many environments. | S1 | "you can use environment variables to make parts of your script tweakable." |
| C2 | k6 exposes them through the global `__ENV` object. | S1 | "the environment variables are exposed through a global `__ENV` variable, a JS object." |
| C3 | The recommended way is the `-e` / `--env` flag. | S1 | "The recommended option to pass environment variables to your testing script is to use one or more `-e` / `--env` CLI flags" |
| C4 | `-e` only gives variables to the script. It does not set options. | S1, S2 | "This flag just provides variables to the script, which the script can use or ignore. For example, `-e K6_ITERATIONS=120` does _not_ configure the script iterations." |
| C5 | `__ENV` is mutable by default. The `freeze-env` feature flag makes it read-only. | S1 | "By default, `__ENV` is a plain, mutable object ... To make `__ENV` read-only instead, enable the `freeze-env` feature flag." |
| C6 | A system environment variable can be set before `k6 run`. Options use the `K6_` prefix (for example `K6_VUS`). Not every option has one. | S1 | "A second option to pass environment variables is to source them from the local system." / "you need to prefix `K6_` in the environment variable name" / "not all options are supported as environment variables" |
| C7 | `--include-system-env-vars` is true by default for `k6 run`, false for other commands, to prevent leaks of sensitive data. | S2 | "`true` for `k6 run`, but `false` for all other commands to prevent inadvertent sensitive data leaks." |
| C8 | By default, system variables do not work for `k6 archive`, `k6 cloud run`, `k6 inspect`. This avoids uploading sensitive data. | S1 | "By default, passing system environment variables doesn't work for `k6 archive`, `k6 cloud run`, and `k6 inspect`. This is a security measure" |
| C9 | Command-line flags have the highest precedence. | S1 | "To ensure you're always working with the highest precedence, use command-line flags instead of environment variables" |
| C10 | Secret sources give secrets to k6. Values from secret sources are redacted from logs, unlike values from environment variables or files. | S6 | "Unlike values from environment variables or files, values from secret sources are automatically redacted from k6 logs before propagation through the system." |
| C11 | Secrets are read with the `k6/secrets` API (`secrets.get`). A source is set with `--secret-source`. | S6 | "Access secrets through the `k6/secrets` JavaScript API." / "Configure secret sources using the `--secret-source` CLI flag." |
| C12 | Built-in sources for local tests: `file` (a `key=value` file), `mock`, `url`. | S6 | "`file`: Reads secrets from a `key=value` file." / "`mock`: Reads secrets from CLI arguments." / "`url`: Fetches secrets from HTTP endpoints." |
| C13 | A secret shows as `***SECRET_REDACTED***` in logs and stays usable in the script. | S6 | "secrets are redacted in logs, shown as `***SECRET_REDACTED***`, while remaining accessible to the script." Checked on k6 v2.3.0: `console.log` of a secret printed `***SECRET_REDACTED***`. |
| C14 | `open()` can be called only in the init context. | S3 | "`open()` can only be called from the init context." |
| C15 | `open()` reads the whole file into memory. Every VU keeps its own copy. | S3 | "Opens a file, reading all its contents into memory" / "every VU keeps a separate copy of the file in memory." |
| C16 | `SharedArray` shares memory between VUs. Its function runs once. It is read-only. Elements come back as copies. It must be built in the init context. | S4 | "shares the underlying memory between VUs. The function executes only once, and its result is saved in memory once. When a script requests an element, k6 gives a _copy_ of that element." / "Once constructed, a `SharedArray` is read-only" |
| C17 | Each VU is a separate JS VM. Without `SharedArray`, each VU has a copy. A `SharedArray` has small CPU cost. Big files without it can exhaust memory. | S5 | "Each VU in k6 is a separate JS VM." / "It does have some CPU overhead in accessing elements ... but the difference is negligible" / "k6 would otherwise use too much memory to run" |
| C18 | `.map()` and `.filter()` on a `SharedArray` outside the constructor make regular arrays and lose the benefit. Use them inside the constructor. | S4 | "Methods like `.filter()` and `.map()` create regular arrays when called on a `SharedArray`, which removes the memory-efficiency benefits." |
| C19 | k6 does not parse CSV natively. Use Papa Parse, for example from jslib.k6.io. | S5 | "k6 doesn't parse CSV files natively, but you can use an external library, Papa Parse." / `import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';` / `papaparse.parse(open('./data.csv'), { header: true }).data` |
| C20 | Parameterization helps to prevent server-side caching from affecting the test. | S5 | "Parameterization helps to prevent server-side caching from impacting your load test, which makes your tests more realistic." |
| C21 | `scenario.iterationInTest` is the zero-based unique iteration number in the scenario. It gives unique rows. It is unique per scenario, not per test. | S5, S8 | "The unique and zero-based sequential number of the current iteration in the scenario." / "`scenario.iterationInTest` property is unique _per scenario_, not the overall test." |
| C22 | `vu.idInTest` is the globally unique VU id. It is one-based, arrays are zero-based, so subtract 1. | S8, S5 | "The globally unique (across the whole test run) identifier of the VU." / "VU identifiers are one-based and arrays are zero-based, thus we need - 1" |
| C23 | `__ITER` is the zero-based iteration counter of one VU. `__VU` is the VU number, from 1, and 0 in setup and teardown. They are for versions without `k6/execution`. | S7 | "`__ITER`: A numeric counter with the current iteration number for a specific VU. Zero-based." / "`__VU`: Current VU number ... starting from one. The variable is 0 when executing the setup and teardown functions." / "If you are using a version of k6 that doesn't have this module, use `__VU` and `__ITER`." |
| C24 | The `shared-iterations` example uses `iterations: data.length` so each row is used once. | S5 | `executor: 'shared-iterations', vus: 10, iterations: data.length` |

| C25 | With `header: true`, the first row gives the field names and each row is an object keyed by field name. | S9 | "If true, the first row of parsed data will be interpreted as field names. An array of field names will be returned in meta , and each row of data will be an object of values keyed by field name instead of a simple array." |

## Notes

- The docs do not say that a value on the command line shows in shell history or process lists. The page does not say it. It says only what S6 says: values from environment variables are not redacted from logs.
- Local checks on k6 v2.3.0 (not cited): a `console.log` of `__ENV.X` printed the value. `HOME` was visible in `__ENV` for `k6 run` and gone with `--include-system-env-vars=false`. A run with `--vus 2 --iterations 4` printed `VU 1 ITER 0..2` and `VU 2 ITER 0`, so `__ITER` counts per VU.
- The owner's notes: the 2 benefits (no hardcoded values; secrets stay out of the code and files). The owner's script logs the token. The page does not.
- Fix round 1: the `K6_VUS` example now uses 5 VUs and 20 s (no copy of the S1 example). The VU/ITER check text says the split between VUs can differ from run to run.
