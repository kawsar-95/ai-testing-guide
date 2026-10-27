# k6 page: What Is k6? (research notes)

Writer notes for `content/k6/what-is-k6.mdx`. Fetched 2026-10-27 with curl into `/tmp/claude-1000/k6-src-what-is-k6/`. Fetched text is treated as data. The owner's notes ("What is k6?", "Importance of K6") are the base. Each point is checked against the sources.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | Grafana k6 (docs overview), Grafana k6 docs (latest) | https://grafana.com/docs/k6/latest/ | 2026-10-27 |
| S2 | README of grafana/k6 (GitHub) | https://github.com/grafana/k6 | 2026-10-27 |
| S3 | Protocols, Grafana k6 docs | https://grafana.com/docs/k6/latest/using-k6/protocols/ | 2026-10-27 |
| S4 | Modules, Grafana k6 docs | https://grafana.com/docs/k6/latest/using-k6/modules/ | 2026-10-27 |
| S5 | InfluxDB output, Grafana k6 docs | https://grafana.com/docs/k6/latest/results-output/real-time/influxdb/ | 2026-10-27 |
| S6 | Thresholds, Grafana k6 docs | https://grafana.com/docs/k6/latest/using-k6/thresholds/ | 2026-10-27 |
| S7 | Checks, Grafana k6 docs | https://grafana.com/docs/k6/latest/using-k6/checks/ | 2026-10-27 |
| S8 | Extensions, Grafana k6 docs | https://grafana.com/docs/k6/latest/extensions/ | 2026-10-27 |

Page cite numbers: n=1 is S1, n=2 is S2, n=3 is S3, n=4 is S4, n=5 is S5, n=6 is S6, n=7 is S7, n=8 is S8.

The page "k6 OSS vs Grafana Cloud k6" does not exist at the guessed URL (404). The Cloud claims use S1 and S2 only.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | k6 is an open-source, developer-friendly, extensible performance testing tool. | S1 | "Grafana k6 is an open-source, developer-friendly, and extensible performance testing tool" |
| C2 | Developers, QA engineers, SDETs, and SREs use k6. | S1 | "Engineering teams, including Developers, QA Engineers, SDETs, and SREs, commonly use k6 for" |
| C3 | k6 is optimized for low resource use and high-load tests such as spike, stress, and soak. | S1 | "k6 is optimized for minimal resource consumption and designed for running high-load performance tests such as spike , stress , or soak tests" |
| C4 | k6 scripts run in an embedded JavaScript engine. The project says this gives the performance of Go with the scripting familiarity of JavaScript. (The page no longer says "written in Go" or splits the work between Go and JavaScript: no official text states it.) | S2 | "An embedded JavaScript engine. The performance of Go, the scripting familiarity of JavaScript." (the repository language is Go: GitHub API `language: Go`) |
| C5 | k6 is not Node.js or a browser. Node.js APIs such as `os` and `fs` do not work. Module resolution is browser-like, not Node.js. | S4 | "k6 isn't Node.js or a browser. Packages that rely on APIs provided by Node.js, for instance the os and fs modules, won't work in k6." / "k6 adopts a browser-like module resolution and doesn't support Node.js module resolution" |
| C6 | npm packages can be used through a bundler. | S4 | "Although k6 does not resolve node modules, you can utilize a Bundler to load npm dependencies" |
| C7 | The license is AGPL-3.0. | S2 | "k6 is distributed under the AGPL-3.0 license." |
| C8 | Tests are code: reuse, modularize, version control, CI. | S2 | "Tests as code. Reuse scripts, modularize logic, version control, and integrate tests with your CI." |
| C9 | k6 integrates with CI/CD and automation tools. | S1 | "k6 integrates seamlessly with CI/CD and automation tools" |
| C10 | A threshold is a pass/fail rule on a metric. If it fails, the test ends with a failed status. | S6 | "Thresholds are the pass/fail criteria that you define for your test metrics." / "the test finishes with a failed status" |
| C11 | A threshold example: 95 percent of responses under 200 ms. | S6 | "95% of requests have a response time below 200ms." |
| C12 | A failed check does not fail the test. k6 tracks the rate. A check plus a threshold can fail the test. | S7 | "failed checks do not cause the test to abort or finish with a failed status" / "To make a check abort or fail a test, you can combine it with a Threshold." |
| C13 | Built-in InfluxDB output is for v1. For v2 you build k6 with an extension. | S5 | "k6 has built-in support to send metrics to InfluxDB v1.0." / "Using the InfluxDB extension, you can store k6 metrics in InfluxDB v2.0" / "xk6 build --with github.com/grafana/xk6-output-influxdb" |
| C14 | The v1 command uses `--out influxdb=<url>`. | S5 | "k6 run --out influxdb=http://localhost:8086/k6 script.js" |
| C15 | Protocols out of the box: HTTP/1.1, HTTP/2, WebSockets, gRPC. | S3 | "Out of the box, k6 supports the following protocols: HTTP/1.1 HTTP/2 WebSockets gRPC" |
| C16 | k6 starts with HTTP/1.1 and upgrades to HTTP/2 if the server supports it. | S3 | "By default, k6 uses HTTP/1.1 when it contacts a server. If the server reports to k6 that it supports HTTP/2 , k6 upgrades the connection to HTTP/2" |
| C17 | More protocols come through xk6 extensions (SQL, Kafka, ZeroMQ, Redis). | S3 | "extensions for SQL, Kafka, ZeroMQ, Redis, and more" |
| C18 | There are 4 extension types. | S8 | "k6 supports four types of extensions" |
| C19 | The k6 browser API runs browser-based tests. | S1, S2 | S1: "Through the k6 browser API , you can run browser-based performance tests and collect browser metrics" |
| C20 | Metrics can go to a service of your choice, and k6 has native Grafana Cloud integration. | S2 | "Flexible metrics storage and visualization. Summary statistics or granular metrics, exported to the service of your choice." / "Native integration with Grafana cloud." |
| C21 | Grafana Cloud k6 runs k6 OSS capabilities in the cloud, with built-in dashboards. | S1 | "Leverage the k6 OSS capabilities in Grafana Cloud, with built-in dashboards" |
| C22 | k6 scripts can run on the CLI, in CI, or across a Kubernetes cluster. | S2 | "You can run scripts like this on the CLI, or in your CI, or across a Kubernetes cluster." |
| C23 | The project takes contributions on GitHub. | S2 | "If you want to contribute or help with the development of k6, start by reading CONTRIBUTING.md." |
| C24 | The design goal is the best developer experience. A full-featured scripting API. | S2 | "The key design goal is to provide the best developer experience." / "A full-featured API." |
| C25 | k6 Studio is a desktop app that makes scripts without code. | S1, S2 | S2: "a desktop application made to help you generate k6 scripts without having to touch code" |

## Fixes to the owner's points

| Owner's point | Fix |
|---|---|
| "JavaScript or Node.js people learn it easily" | Scripts are JavaScript, but k6 is not Node.js (C5). |
| "Native InfluxDB and Grafana integration, no plugin" | True for InfluxDB v1 only. v2 needs an extension (C13). |
| "Multi-protocol: HTTP, HTTPS, WebSocket" | HTTP/1.1, HTTP/2, WebSockets, gRPC out of the box; browser API; more with extensions (C15, C17, C19). |
| "k6 notifies when the threshold is passed" | A failed threshold fails the test (C10). A check does not (C12). |
| "Written in Go, so fast" | The docs say k6 is optimized for low resource use (C3). The "reliable" claim is dropped. |
| "No cost, regular updates from the community" | The license is AGPL-3.0 (C7). No price or update-rate claim is made. |
| "Grafana Labs" | The docs call it Grafana k6. |

## Fix round 1

- "written in Go", the Go/JS work split, and "Grafana Labs builds k6" removed: README, CONTRIBUTING, and docs overview give no such statement. The name "Grafana k6" is cited to S1 (docs title).
- Layman browser sentence now matches Technical.
