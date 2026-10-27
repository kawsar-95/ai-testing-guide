# Fact-check: content/k6/install-and-first-script.mdx

Checked 2026-10-27 by an agent that did not write the page. The 4 sources were fetched fresh with curl (text copies in /tmp/claude-1000/k6-check-install-and-first-script/). The quotes of the research notes were not trusted.

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Install from a package on Linux, Mac, Windows; Docker image and standalone binary also work | 1 | PASS | S1 has sections for Linux, macOS, Windows, Docker, and "Download the k6 binary". |
| 2 | Windows: open PowerShell as administrator | 1 | PASS (round 2) | removed from the page (no "administrator" in the text) |
| 3 | `choco` package is unofficial; `winget` packages are official, manifests made by the community | 1 | PASS | S1: "install the unofficial k6 package" (choco); "install the official packages from the k6 manifests (created by the community)". |
| 4 | `winget install k6 --source winget`, `choco install k6` | 1 | PASS | Same commands in S1. |
| 5 | Official MSI installer; use the docs link for the latest | 1 | PASS | S1: "download and run the latest official installer". |
| 6 | macOS: `brew install k6` | 1 | PASS | S1: "Using Homebrew: brew install k6". |
| 7 | Debian/Ubuntu key + repo + apt commands | 1 | PASS | The 4 commands match S1 exactly. |
| 8 | Fedora/CentOS `dnf` commands | 1 | PASS | `sudo dnf install https://dl.k6.io/rpm/repo.rpm`, `sudo dnf install k6`. |
| 9 | `docker pull grafana/k6` | 1 | PASS | S1. |
| 10 | Binary on GitHub Releases; put `k6`/`k6.exe` in `PATH` | 1 | PASS | S1: "place the k6 or k6.exe binary in your PATH". |
| 11 | Commands can change; the install page is the place to check | 1 | PASS | Advice, not a source fact. |
| 12 | `k6 version` output format | none | PASS | Marked as the tutorial's own tip, placeholder output. |
| 13 | First script: `import http from 'k6/http'`, `sleep` from `k6`, `export const options`, `export default function` | none | PASS | `k6 inspect` exit 0 (options show `iterations: 10`). No missing import, no duplicate key, no removed option. |
| 14 | `default` function is run once per iteration | 4 | PASS | S4: "aggregate number of times the VUs execute the JS script (the default function)". |
| 15 | `iterations` option sets how many times the VUs run it in total | 5 | PASS (round 2) | S5 Options: "specifying the total number of iterations of the default function to execute in the test run" |
| 16 | Counter metric `iterations` counts the runs | 4 | PASS | S4: "iterations Counter". |
| 17 | `quickpizza.grafana.com` is a demo app for k6 tests | none | PASS (round 2) | now the tutorial's own choice; the S2 example uses https://quickpizza.grafana.com/ |
| 18 | "Run load tests only against a system you own or have permission to test" | none | PASS | Tutorial advice. |
| 19 | `k6 run first-script.js` | 2 | PASS | S2 uses `k6 run script.js`. |
| 20 | Docker: file is not in the container; read from `stdin` with `-`; `docker run --rm -i grafana/k6 run - <first-script.js` | 2 | PASS | S2: "you must tell k6 to read `stdin` by passing the file name as `-`" and `docker run --rm -i grafana/k6 run - <script.js`. |
| 21 | k6 prints a progress line while the test runs | none | PASS (round 2) | sentence removed (no "progress" in the text) |
| 22 | When the test ends, k6 prints a summary to `stdout` | 3 | PASS | S3: "When a test finishes, k6 prints a summary of the aggregated results to stdout". |
| 23 | Output is one real run on k6 v2.3.0, numbers differ | none | PASS | The owner's run is labelled as one run. k6 v2.3.0 is installed. |
| 24 | Summary groups metrics by source: HTTP (protocol), execution, network | 3 | PASS | S3: "Protocol-specific metrics ... Execution metrics ... Network metrics". |
| 25 | Default summary is compact, with the most important metrics | 3 | PASS | S3: "By default, k6 uses a 'compact' summary mode that focuses on the most important metrics". |
| 26 | `http_reqs` = total HTTP requests made | 4 | PASS | S4: "How many total HTTP requests k6 generated". |
| 27 | `http_req_failed` = rate of failed requests | 4 | PASS | S4: "The rate of failed requests". |
| 28 | `http_req_duration` = sending + waiting + receiving, no DNS/connection | 4 | PASS | S4: "equal to http_req_sending + http_req_waiting + http_req_receiving ... without the initial DNS lookup/connection times". |
| 29 | `iterations` = how many times VUs ran `default` | 4 | PASS | S4 (see 14). |
| 30 | `iteration_duration` = time of one full iteration; longer because of `sleep` | 4 | PASS | S4: "The time to complete one full iteration". The sleep reasoning follows from it. |
| 31 | `vus` current, `vus_max` max | 4 | PASS | S4: "Current number of active virtual users"; "Max possible number of virtual users". |
| 32 | `data_sent`, `data_received` | 4 | PASS | S4: "The amount of data sent / received data". |
| 33 | In this run `iteration_duration` is about 2 seconds more than `http_req_duration`; 1 s is sleep, the other part is connect time | none | PASS (round 2) | page now gives the measured gap (2.35 s vs 645 ms, about 1.7 s); 1 s is sleep; says the output does not show the rest |
| 34 | Do not read one run of 10 requests as a result | none | PASS | Marked as the tutorial's own view. |
| 35 | Owner's first run is older; summary layout differs between versions | none | PASS | Owner's example, stated as one older run. Image exists (`public/images/k6/first-run-output.webp`), assigned to this page. |
| 36 | Key words table (`k6 run`, `sleep()`, `stdin`, etc.) | none | PASS | Consistent with the body. Table is last. |

## Other checks

- `k6 inspect` on the full script: exit 0.
- Page shape: `#`, lede, `<PageMeta />`, free `##` sections, `## Key words` last. Voices on every other `##`. PASS.
- Demo target `https://quickpizza.grafana.com`; no `test-api.k6.io`; no pinned version download link; no token, login, or home path. PASS.
- Copy check (`linux_overlap.py`, 4 sources): 1 run, the S4 URL in `page.sources` only. Not prose. PASS.
- Owner's numbers: the run output is stated as one run. PASS.
- `node --test tests/voice-source.test.ts tests/k6.test.ts`: 29 pass, 0 fail.

## Round 2

Re-checked the 5 FAIL rows and the changed text. `k6 inspect` exit 0, overlap check still only the S4 URL, tests 29 pass. S5 (Options) fetched fresh and added to the source count (5 sources, each cited).

Open FAILs: 0
