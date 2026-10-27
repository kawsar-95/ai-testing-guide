# Fact-check: k6 / What Is Performance Testing?

Page: `content/k6/what-is-performance-testing.mdx`. I did not write this page. Date: 2026-10-27.

Sources fetched fresh into `/tmp/claude-1000/k6-check-what-is-performance-testing/`. S1 (ISTQB glossary) is a JavaScript app. I read it from its data API: `GET https://api.glossary.istqb.org/v1/terms/performance-testing` with header `Accept-Language: en_US`. S2, S3, S4 are the k6 doc pages, fetched with curl and stripped to text.

| # | Claim (Technical text) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | ISTQB defines performance testing as a test type that determines the performance efficiency of a component or system | S1 | PASS | API: "A test type to determine the performance efficiency of a component or system." |
| 2 | A functional test asks "does it work?"; a performance test asks "how well, how many users" | none | PASS | The tutorial's own framing, not a sourced fact |
| 3 | Efficiency, stability, scalability; many users at once; watch behavior and load capacity | none, labeled "The tutorial's own view" | PASS | The owner's text (notes line 5), labeled as the tutorial's view. The "non-functional testing" claim is dropped. |
| 4 | Different traffic patterns create different risks, so teams use more than one test type | S2 | PASS | "Different patterns of traffic create different risk profiles for the application. ... teams must test the system against different test types." |
| 5 | The k6 docs name six types: smoke, average-load, stress, soak, spike, breakpoint | S2 | PASS | The S2 list names Smoke, Average-load, Stress, Soak, Spike, Breakpoint tests. |
| 6 | Many people use public web apps at once and put pressure on servers | none | PASS | The owner's opinion and example (notes line 9) |
| 7 | The two examples (`shop.example.com`, `bank.example.com`) | none | PASS | The owner's examples, kept with made-up names (privacy rule) |
| 8 | Functional testing alone is not enough; customers leave when slow | none, labeled "The tutorial's own view" | PASS | The owner's view (notes line 11), labeled |
| 9 | k6 docs name two common load-test goals: reliability under expected traffic; problems and limits under unusual traffic | S4 | PASS | "A load test typically aims to do one of two things: Validate reliability under expected traffic / Discover problems and system limits under unusual traffic." |
| 10 | A component that does not meet its performance requirements is a bottleneck | S4 | PASS | "If a component doesn't meet performance requirements, it is a bottleneck." |
| 11 | Table: `http_req_duration` = response time metric | S3 | PASS | Trend: "Total time for the request." |
| 12 | Table: `http_reqs` = throughput metric | S3 | PASS | Counter: "How many total HTTP requests k6 generated." The "throughput" label is the tutorial's mapping. It is close enough. |
| 13 | Table: `http_req_failed` = error rate metric | S3 | PASS | Rate: "The rate of failed requests according to setResponseCallback." |
| 14 | Resource use (CPU, memory) is not a k6 metric | S3 | PASS | The built-in metrics list has no CPU or memory metric (the only "CPU" hit is a browser throttle method). |
| 15 | `http_req_duration` = sending + waiting + receiving | S3 | PASS | "It's equal to http_req_sending + http_req_waiting + http_req_receiving" |
| 16 | The waiting part is the time to first byte | S3 | PASS | "http_req_waiting ... (a.k.a. "time to first byte", or "TTFB")" |
| 17 | `http_reqs` counts all HTTP requests k6 made | S3 | PASS | "How many total HTTP requests k6 generated." |
| 18 | `http_req_failed` is the rate of failed requests | S3 | PASS | "The rate of failed requests" |
| 19 | Resource use is on the server side; k6 measures what the user sees; use a monitoring tool | none, labeled "the tutorial's own advice" | PASS | Labeled as the tutorial's advice |
| 20 | Use thresholds to check the system stays within its SLOs | S4 | PASS | "use Thresholds to ensure that the system performs within your SLOs" |
| 21 | Key words: Performance testing (same as #1) | S1 | PASS | See #1 |
| 22 | Key words: Load = the traffic a test puts on the system; goal sets type, type sets load | S4 | PASS (round 2) | Now cites S4: "The test goal determines the test type, which in turn determines the test load." |
| 23 | Key words: Response time = time a system takes to answer one request | S3 | PASS (round 2) | Now cites S3: `http_req_duration` "Total time for the request." |
| 24 | Key words: Throughput = number of requests a system handles in a period | S3 | PASS (round 2) | Now cites S3: `http_reqs` "How many total HTTP requests k6 generated." |
| 25 | Key words: Error rate = share of requests that fail | S3 | PASS (round 2) | Now cites S3: `http_req_failed` "The rate of failed requests". |
| 26 | Key words: Bottleneck | S4 | PASS | See #10 |
| 27 | Key words: SLO = a target for how well the system must perform | S4 | PASS | S4: SLOs "set reliability goals ... to validate availability, performance" |
| 28 | Key words: Threshold = pass or fail rule on a metric to keep the system within SLOs | S4 | PASS | S4: "Design your load tests with pass/fail criteria to validate SLOs" |
| 29 | Key words: Test type = smoke, average-load, stress, soak, spike, breakpoint | S2 | PASS | See #5 |

## Other checks

- Scripts: the page has no code block. `k6 inspect` does not apply. PASS.
- Page shape (spec §5): 3 `##` sections with `<Voices>`, then `## Key words` last (a table). `tests/k6.test.ts` passes. PASS.
- Images: none on this page. Allowed, since the spec assigns no image to it. PASS.
- Demo targets and privacy: only `shop.example.com` and `bank.example.com`. No credential, token, or real name. PASS.
- Out of date items: none apply.
- Owner's examples kept: the shop-search and bank-statement examples of notes lines 11 are kept (names made up). PASS.
- Owner's number as a general fact: none. PASS.
- Copy check (`scripts/linux_overlap.py`, S2, S3, S4 text): 1 run, "grafana com docs k6 latest using-k6 metrics reference". It is the S3 URL in `page.sources`. A false positive. PASS.
- Writer's concern about S1: now verified from the glossary API (see #1).

Open FAILs: 0
