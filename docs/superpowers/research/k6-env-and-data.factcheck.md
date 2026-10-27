# Fact-check: k6 env-and-data (Technical text)

Checked 2026-10-27 by an agent that did not write the page. Sources fetched fresh from the `/latest/` URLs of `page.sources` (S1-S8 = cites 1-8). k6 v2.3.0 installed.

## Claims

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Env variables make parts of a script tweakable (base URL, user, VUs are the tutorial's examples) | 1 | PASS | "you can use environment variables to make parts of your script tweakable" |
| 2 | Secret-source values are redacted from logs, unlike env or file values | 6 | PASS | "Unlike values from environment variables or files, values from secret sources are automatically redacted from k6 logs" |
| 3 | A `-e` value is not hidden: a script that prints it shows it in the log | 6 | PASS | Same quote; run on v2.3.0 printed `env is visible` |
| 4 | k6 gives env variables in global JS object `__ENV` | 1 | PASS | "exposed through a global __ENV variable, a JS object" |
| 5 | `-e` / `--env` flags are the recommended way | 1 | PASS | "The recommended option ... is to use one or more -e / --env CLI flags" |
| 6 | `-e` does not set options; `-e K6_ITERATIONS=120` does not set iterations | 1, 2 | PASS | "The -e flag does not configure options ... -e K6_ITERATIONS=120 does not configure the script iterations" (S1 and S2 `-e` entry) |
| 7 | `__ENV` is a plain mutable object by default; `freeze-env` makes it read-only | 1 | PASS | "By default, __ENV is a plain, mutable object ... enable the freeze-env feature flag" |
| 8 | A variable set in the shell before `k6 run` is read from the system | 1 | PASS | "MY_HOSTNAME=test.k6.io k6 run script.js" under "Using System Environment Variables" |
| 9 | `--include-system-env-vars` is `true` for `k6 run`, `false` for all other commands, to prevent leaks | 2 | PASS | "true for k6 run, but false for all other commands to prevent inadvertent sensitive data leaks". Run: `k6 run` saw HOME; with `=false` it did not; `k6 inspect` saw HOME only with the flag |
| 10 | `k6 inspect`, `k6 archive`, `k6 cloud run` get no system variables by default; reason: no sensitive data to k6 Cloud; override with the flag | 1 | PASS | "passing system environment variables doesn't work for k6 archive, k6 cloud run, and k6 inspect. This is a security measure to avoid the risk of uploading sensitive data to k6 Cloud. To override ... specify --include-system-env-vars" |
| 11 | `K6_` prefix makes k6 read a variable as an option; `K6_VUS=10 K6_DURATION=10s` = 10 VUs 10 s | 1 | PASS | "you need to prefix K6_ ... K6_VUS=10 K6_DURATION=10s k6 run script.js" |
| 12 | Not every option has such a variable | 1 | PASS | "not all options are supported as environment variables" |
| 13 | Precedence order exists; command-line flags highest | 1 | PASS | "order of precedence ... use command-line flags" |
| 14 | A secret source gives secrets to k6; set with `--secret-source` | 6 | PASS | "Configure secret sources using the --secret-source CLI flag" |
| 15 | Built-in local sources: `file` (key=value file), `mock` (CLI arguments), `url` (HTTP endpoints) | 6 | PASS | "file: Reads secrets from a key=value file. mock: Reads secrets from CLI arguments. url: Fetches secrets from HTTP endpoints" |
| 16 | Script reads secrets with the `k6/secrets` API | 6 | PASS | "Access secrets through the k6/secrets JavaScript API" |
| 17 | Log shows `***SECRET_REDACTED***`; script can still use the real value | 6 | PASS | "shown as ***SECRET_REDACTED***, while remaining accessible to the script". Own run matched the page output block |
| 18 | Parameterization turns test values into inputs; helps stop server-side caching affecting the test | 5 | PASS | "turning test values into reusable parameters ... helps to prevent server-side caching from impacting your load test" |
| 19 | `open()` reads a whole file into memory; init context only | 3 | PASS | "Opens a file, reading all its contents into memory ... can only be called from the init context" |
| 20 | Every VU keeps its own copy of the file | 3 | PASS | "every VU keeps a separate copy of the file in memory" |
| 21 | Each VU is a separate JS VM; big file can use too much memory | 5 | PASS | "Each VU in k6 is a separate JS VM ... k6 would otherwise use too much memory" |
| 22 | `SharedArray` (`k6/data`) shares memory; function runs once; k6 gives a copy of an element | 4 | PASS | "shares the underlying memory between VUs. The function executes only once ... k6 gives a copy of that element" |
| 23 | CPU cost of `SharedArray` is negligible next to request time | 5 | PASS | "the difference is negligible compared to the time it takes to make requests" |
| 24 | Must build it in init context; read-only; VUs cannot use it to send data to each other | 4 | PASS | "You must construct a SharedArray in the init context ... read-only, so you can't use a SharedArray to communicate data between VUs" |
| 25 | `.map()`/`.filter()` outside the constructor give a regular array and lose the memory benefit | 4 | PASS | "Methods like .filter() and .map() create regular arrays when called on a SharedArray ... use ... inside the SharedArray constructor" |
| 26 | `open('./users.csv')` reads the whole file as one string | 3 | PASS | "By default, the contents of the file are read as text" |
| 27 | `.split`, `.map(trim)`, `.filter(Boolean)` effects; `%` wraps to first row | none | PASS | Plain JavaScript semantics and the owner's explanation, not a k6 fact |
| 28 | `__ITER` is the zero-based iteration number of one VU | 7 | PASS | "A numeric counter with the current iteration number for a specific VU. Zero-based." |
| 29 | k6 does not parse CSV; Papa Parse is an outside library; local file or `jslib.k6.io` import | 5 | PASS | "k6 doesn't parse CSV files natively, but you can use an external library, Papa Parse ... import ... from jslib.k6.io" |
| 30 | With `header: true`, each row becomes an object and the first line gives the keys | 9 | PASS (round 2) |  <!-- was FAIL --> Round 1: S5 did not say it. Round 2: cite 9 (papaparse.com/docs, fetched fresh): "If true, the first row of parsed data will be interpreted as field names ... each row of data will be an object of values keyed by field name" |
| 31 | Parse inside the `SharedArray` function runs once, result shared by all VUs | 5 | PASS | Code comments in S5: without SharedArray, the parse runs "per each VU" |
| 32 | `k6/execution` gives the numbers for unique rows; `scenario.iterationInTest` zero-based and unique per scenario, not the whole test; split data for several scenarios | 5, 8 | PASS | "unique per scenario, not the overall test ... you might need to split your data per scenario" |
| 33 | `shared-iterations` with `iterations: userIds.length` uses each row once | 5 | PASS | S5 example uses `executor: 'shared-iterations'`, `iterations: data.length`; own run of the script ok |
| 34 | `exec.vu.idInTest` is the VU identifier, unique in the whole test run | 8 | PASS | "The globally unique (across the whole test run) identifier of the VU" |
| 35 | VU ids start at 1, arrays at 0, so subtract 1 | 5 | PASS | "VU identifiers are one-based and arrays are zero-based, thus we need - 1" |
| 36 | Older k6 has no `k6/execution`; uses `__VU`, `__ITER`; `__VU` counted from 1, 0 in setup/teardown | 7 | PASS | "k6 v0.34.0 introduced the k6/execution module ... __VU ... starting from one ... 0 when executing the setup and teardown" |
| 37 | Two VUs both have `__ITER` 0 first, so `__ITER` alone is not unique across VUs | 7 | PASS | Follows from "for a specific VU"; own run showed `VU 1 ITER 0` and `VU 2 ITER 0` |
| 38 | Tutorial's own run, 2 VUs and 4 iterations, printed `VU 1 ITER 0/1/2`, `VU 2 ITER 0`; the split can differ between runs | own run | PASS (round 2) | Labelled as the tutorial's own check. My 3 runs gave a 2+2 split, so the new sentence "can differ from run to run" is true |
| 41 | New source 9, Papa Parse documentation, https://www.papaparse.com/docs, `accessed` 2026-10-27 | 9 | PASS | URL fetched (HTTP 200); `https://` link; cited by claim 30 |
| 39 | Key words table rows | 1-8 | PASS | Each row repeats a PASS claim above (rows for `vu.idInTest` "starts at 1" cites 8 and 5) |

## Scripts (`k6 inspect`, k6 v2.3.0)

All 5 JavaScript blocks of the Technical panels (env script, secrets script, users.csv script, papaparse script, unique-rows script): exit 0. No missing import, no duplicate key, no removed option. The papaparse script needs network for the `jslib.k6.io` import and passed. The unique-rows script also ran with `k6 run`.

## Other checks

- URLs: all 8 `/latest/` pages fetched (HTTP 200) and say what the page claims, except claim 30.
- Privacy grep (`eyJ`, `admin@`, `roadtocareer`, `dmoney`, `1234`, `bkash`): 0 lines. Host is `https://api.example.com`; values are placeholders. No token printed.
- Page shape: lede, `<PageMeta />`, `##` sections with `<Voices>`, `## Key words` last, no image. PASS.
- Owner-number check: the page states no number from the owner's runs. PASS.
- Overlap check (`linux_overlap.py`, 9 files): 4 runs. Three are the source URLs in `page.sources` (not prose). One is a copied run of 8 words: `K6_VUS=10 K6_DURATION=10s k6 run script.js` (in the "System environment variables" section, three panels). FAIL (claim 40).

| # | Check | Verdict | Reason |
|---|---|---|---|
| 40 | Copy check: 8-word run equal to the S1 example | PASS (round 2) | Now `K6_VUS=5 K6_DURATION=20s` and "5 VUs for 20 seconds" in all 3 panels. Overlap rerun (10 files): 3 runs, all source URLs, 0 prose |

`node --test tests/voice-source.test.ts tests/k6.test.ts`: 29 pass, 0 fail.

Round 2: `node --test tests/voice-source.test.ts tests/k6.test.ts`: 29 pass, 0 fail.

Open FAILs: 0
