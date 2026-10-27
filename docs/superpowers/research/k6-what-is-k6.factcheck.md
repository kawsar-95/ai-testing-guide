# Fact check: k6 / what-is-k6 (round 1)

Sources fetched fresh with curl on 2026-10-27 into /tmp/claude-1000/k6-check-what-is-k6/ (S1 docs overview, S2 README, S3 Protocols, S4 Modules, S5 InfluxDB, S6 Thresholds, S7 Checks, S8 Extensions). Checker did not write the page.

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | k6 is an open-source performance testing tool, easy for developers, extensible | S1 | PASS | "Grafana k6 is an open-source, developer-friendly, and extensible performance testing tool" |
| 2 | Developers, QA engineers, SDETs, SREs use it | S1 | PASS | "Engineering teams, including Developers, QA Engineers, SDETs, and SREs, commonly use k6" |
| 3 | Modern load-testing tool, key goal best developer experience | S2 | PASS | "k6 is a modern load-testing tool ... The key design goal is to provide the best developer experience" |
| 4 | k6 is written in Go | S2 | PASS (round 2) | No fetched source says "written in Go". S2 only says "The performance of Go, the scripting familiarity of JavaScript." Reword or cite a source that says it. Same claim in Key words row "k6" (cites S1, S2). |
| 5 | Scripts are JavaScript, run in an embedded JavaScript engine | S2 | PASS | "An embedded JavaScript engine." |
| 6 | The Go part generates the load; the JavaScript part describes what one user does | none | PASS (round 2) | Fact with no cite, and no source states this split. |
| 7 | Optimized for minimal resource consumption; suits spike, stress, soak tests | S1 | PASS | "k6 is optimized for minimal resource consumption and designed for running high-load performance tests such as spike, stress, or soak tests" |
| 8 | License is AGPL-3.0 | S2 | PASS | "k6 is distributed under the AGPL-3.0 license" |
| 9 | Grafana Labs builds k6; docs call it Grafana k6 | S1 | PASS (round 2) | Fact with no cite. "Grafana k6" is in S1, but "Grafana Labs builds" is only in site footer text, not in S1 or S2 content. Add a cite or drop. |
| 10 | Script block (3 lines) | - | PASS | `k6 inspect` exit 0. Imports present, no duplicate keys. Demo target is quickpizza.grafana.com. |
| 11 | k6 is not Node.js and not a browser | S4 | PASS | "k6 isn't Node.js or a browser." |
| 12 | Packages needing Node.js APIs such as os and fs do not work | S4 | PASS | "Packages that rely on APIs provided by Node.js, for instance the os and fs m[odules]" |
| 13 | Browser-like module resolution; full file names such as ./helpers.js | S4 | PASS | "k6 adopts a browser-like module resolution ... File names for imports must be fully specified, such as ./helpers.js" |
| 14 | npm packages need a bundler | S4 | PASS | "you can utilize a Bundler to load npm dependencies" |
| 15 | Built-in modules such as k6/http come with k6 | S4 | PASS | "k6 provides many built-in modules" ... `import http from 'k6/http'` |
| 16 | Table 1: JS based, not Node.js | S2, S4 | PASS | See 5, 11. |
| 17 | Table 2: combines the performance of Go with JS scripting | S2 | PASS | "The performance of Go, the scripting familiarity of JavaScript." |
| 18 | Table 3: integrates with CI/CD and automation tools | S1 | PASS | "k6 integrates seamlessly with CI/CD and automation tools" |
| 19 | Table 4: threshold is a pass/fail rule; failure ends test with failed status | S6 | PASS | "the test finishes with a failed status" |
| 20 | Table 4: a check does not fail the test; k6 tracks rate of failed checks | S7 | PASS | "failed checks do not cause the test to abort or finish with a failed status. Instead, k6 keeps track of the rate of failed checks" |
| 21 | Table 5: built-in InfluxDB output for v1 only; v2 needs an extension build | S5 | PASS | "built-in support to send metrics to InfluxDB v1.0"; v2.0 "Using the InfluxDB extension ... xk6 build --with github.com/grafana/xk6-output-influxdb" |
| 22 | Command `k6 run --out influxdb=http://localhost:8086/k6 script.js` | S5 | PASS | S5 form is `--out influxdb=http://localhost:8086/myk6db`; path segment is the database name, default name is k6. |
| 23 | Table 6: HTTP/1.1, HTTP/2, WebSockets, gRPC out of the box | S3 | PASS | "Out of the box, k6 supports the following protocols: HTTP/1.1 HTTP/2 WebSockets gRPC" |
| 24 | k6 browser API runs browser tests, collects browser metrics | S1 | PASS | "Through the k6 browser API, you can run browser-based performance tests and collect browser metrics" |
| 25 | Extensions add more protocols | S3 | PASS | "You can use k6 on more protocols with xk6." |
| 26 | Table 7: tests are code, reuse, modularize, version control | S2 | PASS | "Tests as code. Reuse scripts, modularize logic, version control" |
| 27 | Table 8: scripting API is full-featured | S2 | PASS | "A full-featured API." |
| 28 | Table 9: run on CLI, in CI, or across a Kubernetes cluster | S2 | PASS | "You can run scripts like this on the CLI, or in your CI, or across a Kubernetes cluster." |
| 29 | Grafana Cloud k6 runs k6 OSS capabilities in the cloud | S1 | PASS | "Leverage the k6 OSS capabilities in Grafana Cloud" |
| 30 | Table 10: open under AGPL-3.0; contributions on GitHub | S2 | PASS | License line; "If you want to contribute ... GitHub issue" |
| 31 | Default HTTP/1.1; automatic upgrade to HTTP/2 | S3 | PASS | "By default, k6 uses HTTP/1.1 ... k6 upgrades the connection to HTTP/2" |
| 32 | 4 extension types: JavaScript, output, secret source, subcommand | S8 | PASS | "k6 supports four types of extensions" |
| 33 | Community extensions add SQL, Kafka, ZeroMQ, Redis; xk6 builds a binary | S3 | PASS | "extensions for SQL, Kafka, ZeroMQ, Redis, and more"; "xk6 ... lets you build custom k6 binaries" |
| 34 | k6 Studio is a desktop app that generates scripts | S2 | PASS | "k6 Studio, a desktop application made to help you generate k6 scripts" |
| 35 | Key words: threshold, check, extension, xk6, Grafana Cloud k6 rows | S6, S7, S8, S3, S1 | PASS | Match rows 19, 20, 32, 33, 29. |

Other checks:
- Page shape: lede, PageMeta, free `##` sections, `## Key words` last, Voices on each other section. PASS.
- Owner's claims fixed: not Node.js; InfluxDB v1 only; threshold vs check. Owner's own view marked as tutorial opinion. PASS. No owner run numbers. PASS.
- Privacy: no login, token, home path, name. Demo target quickpizza.grafana.com. PASS.
- Copy check (`linux_overlap.py`): 1 run, the docs URL in `page.sources` (not prose). PASS.
- Voices tests: `node --test tests/voice-source.test.ts tests/k6.test.ts` not rerun by checker beyond instructions.

FAIL summary: 4 (written in Go, no source), 6 (Go/JS split, no cite), 9 (Grafana Labs builds, no cite).

## Round 2

Re-checked the changed text against the page (`grep` of content/k6/what-is-k6.mdx).
- #4 and #6: "written in Go" no longer appears (0 matches), nor the Go/JavaScript load split. The page now says "an embedded JavaScript engine ... the performance of Go with the scripting familiarity of JavaScript" with Cite 2. README quote: "An embedded JavaScript engine. The performance of Go, the scripting familiarity of JavaScript." PASS. Key words row "k6" now says "with tests in JavaScript". PASS.
- #9: now "The docs call it Grafana k6" with Cite 1; S1 says "Grafana k6 is an open-source ... tool". PASS.
- Table row 2 (Technical "performance of Go", Bangla "Go-এর performance") matches S2. Layman says "speed of Go", a synonym of "performance of Go" with the same meaning. PASS.
- Script block unchanged. Overlap check: still only the docs URL in `page.sources`. PASS.

Open FAILs: 0
