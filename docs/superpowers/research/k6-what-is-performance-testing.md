# Research notes: k6 / What Is Performance Testing?

Fetched 2026-10-27 into /tmp/claude-1000/k6-src-what-is-performance-testing/ (outside the repo).

## Sources

| Id | Cite | Source | URL |
|---|---|---|---|
| S1 | 1 | ISTQB Glossary: performance testing | https://glossary.istqb.org/en_US/term/performance-testing |
| S2 | 2 | Grafana k6 docs: Load test types | https://grafana.com/docs/k6/latest/testing-guides/test-types/ |
| S3 | 3 | Grafana k6 docs: Built-in metrics | https://grafana.com/docs/k6/latest/using-k6/metrics/reference/ |
| S4 | 4 | Grafana k6 docs: API load testing | https://grafana.com/docs/k6/latest/testing-guides/api-load-testing/ |

The glossary page is a JavaScript app, so curl returns no text. The S1 quote is the one that the earlier Fundamentals fact-check (fundamentals-test-types.factcheck.md, row 76) recorded from the same glossary entry.

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| 1 | The ISTQB glossary defines performance testing as a test type for the performance efficiency of a component or system. | S1 | "A test type to determine the performance efficiency of a component or system." |
| 2 | Different traffic patterns give different risk profiles, so teams use several test types. | S2 | "Different patterns of traffic create different risk profiles for the application." |
| 3 | The main k6 test types: smoke, average-load, stress, soak, spike, breakpoint. | S2 | "Smoke tests validate ... Average-load test ... Stress tests ... Soak tests ... Spike tests ... Breakpoint tests" |
| 4 | No single test type finds every problem. | S2 | "no single test can uncover all issues" |
| 5 | A load test aims to validate reliability under expected traffic, or to find problems and limits under unusual traffic. | S4 | "Validate reliability under expected traffic / Discover problems and system limits under unusual traffic." |
| 6 | A component that does not meet its performance requirements is a bottleneck. | S4 | "If a component doesn't meet performance requirements, it is a bottleneck." |
| 7 | Good tests set acceptance criteria and assert performance with thresholds against SLOs. | S4 | "what criteria determine acceptable performance? ... use Thresholds to ensure that the system performs within your SLOs" |
| 8 | k6 `http_req_duration` is the total time of a request: sending + waiting + receiving. | S3 | "Total time for the request. It's equal to http_req_sending + http_req_waiting + http_req_receiving" |
| 9 | `http_reqs` counts the HTTP requests k6 generated. | S3 | "How many total HTTP requests k6 generated." |
| 10 | `http_req_failed` is the rate of failed requests. | S3 | "The rate of failed requests according to setResponseCallback." |
| 11 | `http_req_waiting` is the time to first byte. | S3 | "Time spent waiting for response from remote host (a.k.a. 'time to first byte', or 'TTFB')." |
| 12 | `iterations`, `vus`: k6 counts script runs and active virtual users. | S3 | "The aggregate number of times the VUs execute the JS script" / "Current number of active virtual users" |

The tutorial's own text (no cite): the two examples (slow shop search, bank statement), the reader's reaction, the owner's view that functional testing is not enough, the CPU/memory remark.

## Fix round 1

Claim 13 (S4): "The test goal determines the test type, which in turn determines the test load." Used for the Key words row "Load". The Key words rows Response time, Throughput, and Error rate now restate claims 8, 9, and 10 (S3).
