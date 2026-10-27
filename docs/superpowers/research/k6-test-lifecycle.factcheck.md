# Fact-check: k6 test lifecycle (round 1, 2026-10-27)

Page: `content/k6/test-lifecycle.mdx`. I did not write it. Source S1 = https://grafana.com/docs/k6/latest/using-k6/test-lifecycle/ (fetched fresh with curl; the page text was read, not the research quotes).

Automated checks:

- `k6 inspect` on the 3 full scripts (skeleton, QuickPizza login, api.example.com pattern): exit 0 for all 3. No missing import (`check` is imported in both scripts that use it), no duplicate key, no removed option or executor.
- Overlap check (`scripts/linux_overlap.py`, S1 text): no run of 8 or more words.
- Privacy grep (`eyJ`, `admin@`, `roadtocareer`, `bkash`): 0 lines. The token is not printed (only its length).
- Page shape: lede, `<PageMeta />`, 4 `##` sections with `<Voices>`, `## Key words` last. Demo targets: QuickPizza and `api.example.com` with `__ENV`. No image. `node --test voice-source k6`: pass.
- Owner's run numbers (5 out of 5, 7 requests, 0.657/s, 16 characters) are labeled "one local run, your numbers will differ": PASS.

| # | Claim (Technical) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | A script runs through the same stages in the same order | [1] | PASS | "a script always runs through these stages in the same order" |
| 2 | Init prepares the script; setup prepares environment and data; VU code is the test; teardown post-processes | [1] | PASS | stage list of S1 |
| 3 | Except init, each stage is a lifecycle function called at a set point | [1] | PASS | "Except for init code, each stage occurs in a lifecycle function" |
| 4 | Init: load files, import modules, set options, define lifecycle functions; required | [1] | PASS | S1 table and "The init stage is required" |
| 5 | Init runs once for each VU | [1] | PASS | "Once per VU*" |
| 6 | Setup: prepare and share data, optional, runs once | none on rows | PASS | S1 table: "Once"; the section cites [1] |
| 7 | VU code required, once for each iteration | none on row | PASS | S1 table; "VU code runs over and over" |
| 8 | Teardown optional, once | none on row | PASS | S1 table: "Once **" |
| 9 | In a cloud run, init can run more often | [1] | PASS | "In cloud scripts, init code might be called more often." |
| 10 | Data flow: setup returns data (JSON only), VUs and teardown get a copy, nothing flows back | [1] | PASS | "pass only data (i.e. JSON)", "fresh copy", mutable data not passed to teardown |
| 11 | Teardown runs once after all VUs stop | [1] | PASS | "teardown ... called at the end of the test, after the VU stage" |
| 12 | Skeleton is the skeleton of every k6 script | [1] | PASS | S1 shows the same four-part skeleton |
| 13 | Init is code outside every lifecycle function | [1] | PASS | "All code that is outside of a lifecycle function is code in the init context" |
| 14 | Init cannot make HTTP requests; this makes init the same in every run | [1] | PASS | "cannot make HTTP requests ... init stage is reproducible" |
| 15 | Setup runs after init and before VU stage; teardown after VU stage | [1] | PASS | S1 |
| 16 | Setup and teardown can use the full k6 API, for example HTTP | [1] | PASS | "You can call the full k6 API in the setup and teardown stages" |
| 17 | VU code is `default` or a scenario function; runs start to end, then again | [1] | PASS | S1 |
| 18 | Each time k6 resets the VU: clears cookies, can close TCP connections | [1] | PASS | "Cookies are cleared, and TCP connections might be torn down" |
| 19 | VU code does not load local files or import modules | [1] | PASS | S1 |
| 20 | `setupTimeout` default 60 s; slower setup fails the test before any VU starts | [1] | PASS | "(default: 60 seconds) ... the test fails before any VUs start" |
| 21 | If setup throws, k6 does not call teardown | [1] | PASS | "the teardown() function isn't called" |
| 22 | `k6 run --no-setup --no-teardown script.js` skips both | [1] | PASS | S1 "Skip setup and teardown execution" |
| 23 | `handleSummary()` is one more lifecycle function, called at the very end | [1] | PASS | S1 "Additional lifecycle functions" |
| 24 | QuickPizza is the public demo app of Grafana k6 | none | PASS | Used by S1's own example (`quickpizza.grafana.com`); descriptive |
| 25 | QuickPizza endpoints `/api/users`, `/api/users/token/login`, `/api/ratings`; register gives 201, login gives 200; no fixed test account | none | PASS (round 2) | Facts about a third-party app with no cite. S1 does not mention these endpoints. Add a cite (github.com/grafana/quickpizza) or say they were seen in a run. |
| 26 | Output block (5 of 5, 7 requests, 5 + 2, 16 characters) | none | PASS | The owner's one run, labeled as such; 5 iterations plus 2 setup calls = 7 matches |
| 27 | Credentials from `__ENV`, passed with `k6 run -e NAME=value` | none | PASS (round 2) | The `__ENV` object and the `-e` flag are k6 facts with no cite and not in S1. Add the k6 environment-variables doc as a source. Also in Key words (`__ENV`). |
| 28 | Owner's version: ramp to 100 VUs over 60 s; `GET /users/list`; status 200 check | [1] | PASS | Owner's notes (`'60s'`, `target: 100`, `/users/list`). The [1] cite on an owner fact is harmless |
| 29 | Fix: `check` without an import fails because `check` is not a global name | none | PASS (round 2) | A k6 behavior with no cite. Cite the checks doc or the k6/ imports page. |
| 30 | Setup failure by `throw` stops the test before any VU starts | [1] | PASS (round 2) | S1 gives this only for the `setupTimeout` case. For a throw, S1 says only that teardown is not called. Cite does not support it. |
| 31 | "k6 needs it [the default function] as a default export" | none | PASS (round 2) | No cite. S1 says VU code can also be a scenario function (`exec`), so the statement is too strong. |
| 32 | Teardown can call a logout API or write a short log line; do not print tokens | none | PASS | Labeled as the tutorial's own view |
| 33 | Good practice 1: only data (JSON), no functions | [1] | PASS | "You cannot pass functions" |
| 34 | Good practice 1: objects, arrays, strings, numbers, booleans are fine | none | PASS | The JSON types; follows from claim 33 |
| 35 | Good practice 2: large setup data uses more memory | [1] | PASS | "If the data returned by the setup() function is large, it will consume more memory" |
| 36 | Good practice 3: cannot change data in default and pass it to teardown; complex and costly, especially distributed | [1] | PASS | S1 |
| 37 | Good practice 4: fresh copy for each stage and VU; teardown gets a copy of the original | [1] | PASS | S1 |
| 38 | Good practice 5: owner's view | none | PASS | Labeled as the owner's view, not a k6 rule |
| 39 | Key words table (init context, lifecycle functions, setup, VU code, iteration, teardown, `setupTimeout` 60 s) | none | PASS | Same as claims 3, 4, 13, 20 |
| 40 | Key words: `__ENV` is an object with the environment variables | none | PASS (round 2) | Same as claim 27. |

## Round 2

`k6 inspect` on the 3 changed scripts: exit 0. Overlap: no run. Sources S2 (environment-variables) and S3 (checks) fetched fresh.

- 25: the text now says endpoints and status codes are the tutorial's own test, not from k6 docs. PASS.
- 27 and 40: S2 says "exposed through a global __ENV variable, a JS object" and "-e / --env CLI flags". Cite [2] on both. PASS.
- 29: S3 examples use `import { check } from 'k6'`. Cite [3]. PASS.
- 30: now "setup ends abnormally, and k6 does not call teardown" [1]. Matches S1. PASS.
- 31: "default function holds the VU code; a scenario function can hold it too" [1]. Matches S1. PASS.

Open FAILs: 0
