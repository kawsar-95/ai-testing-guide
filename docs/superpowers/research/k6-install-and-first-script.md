# Research notes: k6 / install-and-first-script

Fetched 2026-10-27 into /tmp/claude-1000/k6-src-install-and-first-script/ (outside the repo). Local check: k6 v2.3.0.

## Sources

| Id | Cite | Source | URL |
|---|---|---|---|
| S1 | 1 | Install k6, Grafana k6 docs | https://grafana.com/docs/k6/latest/set-up/install-k6/ |
| S2 | 2 | Running k6, Grafana k6 docs | https://grafana.com/docs/k6/latest/get-started/running-k6/ |
| S3 | 3 | End-of-test summary, Grafana k6 docs | https://grafana.com/docs/k6/latest/results-output/end-of-test/ |
| S4 | 4 | Built-in metrics, Grafana k6 docs | https://grafana.com/docs/k6/latest/using-k6/metrics/reference/ |

## Claims

| # | Claim | Cite | Quote |
|---|---|---|---|
| 1 | k6 has packages for Linux, Mac, Windows; also Docker and a standalone binary | S1 | "k6 has packages for Linux, Mac, and Windows. Alternatively, you can use a Docker container or a standalone binary." |
| 2 | Debian/Ubuntu steps (key, repo line, apt-get) | S1 | "curl -fsSL https://dl.k6.io/key.gpg \| sudo gpg --dearmor -o /usr/share/keyrings/k6-archive-keyring.gpg" ... "sudo apt-get install k6" |
| 3 | Fedora/CentOS: dnf | S1 | "sudo dnf install https://dl.k6.io/rpm/repo.rpm" / "sudo dnf install k6" |
| 4 | macOS: Homebrew | S1 | "brew install k6" |
| 5 | Windows: choco is an unofficial package | S1 | "you can install the unofficial k6 package with: choco install k6" |
| 6 | Windows: winget, official packages from manifests created by the community | S1 | "install the official packages from the k6 manifests (created by the community): winget install k6 --source winget" |
| 7 | Windows: an official MSI installer | S1 | "you can download and run the latest official installer" |
| 8 | Docker: pull grafana/k6 | S1 | "docker pull grafana/k6" |
| 9 | Standalone binary on GitHub Releases, put in PATH | S1 | "place the k6 or k6.exe binary in your PATH" |
| 10 | Docker run reads the script from stdin with `-` | S2 | "docker run --rm -i grafana/k6 run - <script.js" |
| 11 | `k6 run script.js` runs a local script; options can be set in the script | S2 | "you can set the options in your JavaScript file" |
| 12 | `iterations` counter = times VUs run the default function | S4 | "The aggregate number of times the VUs execute the JS script (the default function)." |
| 13 | http_req_duration = sending + waiting + receiving | S4 | "It's equal to http_req_sending + http_req_waiting + http_req_receiving" |
| 14 | http_reqs counts requests; http_req_failed is a Rate | S4 | "How many total HTTP requests k6 generated." |
| 15 | data_sent / data_received | S4 | "The amount of received data." / "The amount of data sent." |
| 16 | iteration_duration includes sleep (whole iteration) | S4 | "The time to complete one full iteration" |
| 17 | vus, vus_max gauges | S4 | "Current number of active virtual users" |
| 18 | End-of-test summary printed to stdout; default is compact mode | S3 | "k6 prints a summary of the aggregated results to stdout. By default, k6 uses a "compact" summary mode" |
| 19 | Summary groups metrics: protocol-specific, execution, network | S3 | "Protocol-specific metrics / Execution metrics / Network metrics" |

## Local observations (no cite)

- `k6 version` prints the version (k6 v2.3.0). The tutorial's own tip.
- Without `vus` or `duration`, the run used 1 VU and the progress bar showed "shared iters" (observed in k6 v2.3.0). Not stated as a doc fact on the page; the page says "in this run".
- Real run of the first script against quickpizza.grafana.com: 10 iterations, http_req_failed 0.00%, slow network that day (iteration_duration avg 2.35s). Shown as one example run.

## Fix round 1

- S5 added (cite 5): Options, https://grafana.com/docs/k6/latest/using-k6/k6-options/reference/. Quote: "specifying the total number of iterations of the default function to execute in the test run".
- Removed: "open PowerShell as administrator" (not in S1), "k6 prints a progress line" (not in S2/S3).
- quickpizza: now "the tutorial's own choice"; S2 uses https://quickpizza.grafana.com/ in its example script.
- Gap: avg iteration_duration 2.35 s - avg http_req_duration 645 ms = about 1.7 s; 1 s is sleep; the rest is not claimed.
