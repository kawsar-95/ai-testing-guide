# Research notes: k6 / performance-test-types

Raw text: /tmp/claude-1000/k6-src-performance-test-types/ (outside the repo). Accessed 2026-10-27.

## Sources

| # | Source | URL |
|---|---|---|
| S1 | Load test types (overview and cheat sheet), Grafana k6 docs | https://grafana.com/docs/k6/latest/testing-guides/test-types/ |
| S2 | Average-load testing, Grafana k6 docs | https://grafana.com/docs/k6/latest/testing-guides/test-types/load-testing/ |
| S3 | Smoke testing, Grafana k6 docs | https://grafana.com/docs/k6/latest/testing-guides/test-types/smoke-testing/ |
| S4 | Stress testing, Grafana k6 docs | https://grafana.com/docs/k6/latest/testing-guides/test-types/stress-testing/ |
| S5 | Spike testing, Grafana k6 docs | https://grafana.com/docs/k6/latest/testing-guides/test-types/spike-testing/ |
| S6 | Soak testing, Grafana k6 docs | https://grafana.com/docs/k6/latest/testing-guides/test-types/soak-testing/ |
| S7 | Breakpoint testing, Grafana k6 docs | https://grafana.com/docs/k6/latest/testing-guides/test-types/breakpoint-testing/ |
| S8 | load testing, ISTQB Glossary | https://glossary.istqb.org/en_US/term/load-testing |
| S9 | stress testing, ISTQB Glossary | https://glossary.istqb.org/en_US/term/stress-testing |
| S10 | spike testing, ISTQB Glossary | https://glossary.istqb.org/en_US/term/spike-testing |
| S11 | endurance testing, ISTQB Glossary | https://glossary.istqb.org/en_US/term/endurance-testing |
| S12 | capacity testing, ISTQB Glossary | https://glossary.istqb.org/en_US/term/capacity-testing |

ISTQB definitions were read from api.glossary.istqb.org/v1/terms/<slug> (the data of the glossary site). The glossary has no entry for volume testing or soak testing.

## Claims

| # | Claim | Cite | Quote |
|---|---|---|---|
| 1 | k6 names six types: smoke, average-load, stress, soak, spike, breakpoint. | S1 | "The main types are as follows." (six bullets) |
| 2 | No single type removes all risk; the categories are relative; no consensus on names. | S1 | "no consensus even exists about the names of these test types" |
| 3 | Start with a smoke test, then higher loads and longer durations. | S1 | "Start with smoke tests, then progress to higher loads and longer durations." |
| 4 | Cheat sheet: Smoke low / seconds or minutes; Load average production / 5-60 min; Stress above average / 5-60 min; Soak average / hours; Spike very high / a few minutes; Breakpoint increases until break / as long as necessary. | S1 | table "Test-type cheat sheet" |
| 5 | Use simple shapes: ramp-up, plateau, ramp-down; avoid rollercoaster. | S1 | "ramp-up, plateau, ramp-down" |
| 6 | Smoke: minimal load, verify system and script, baseline; more than 5 VUs is a mini-load test; also called shakeout. | S3 | "Smoke tests have a minimal load." |
| 7 | Average-load: typical load, e.g. a regular day; "load test" can mean all traffic tests; also called day-in-life or volume test. | S2 | "also might be called a day-in-life test or volume test" |
| 8 | Average-load ramp-up 5-15% of duration; plateau at least 5x ramp-up. | S2 | "between 5% and 15% of the total test duration" |
| 9 | Stress: load above usual, longer ramp-up; also called rush-hour, surge, scale; run after average-load; no fixed percentage. | S4 | "there's no fixed percentage" |
| 10 | Spike: sudden massive rush; very short ramp-up, brief or no plateau, fast ramp-down; test often does not finish. | S5 | "The test often won't finish." |
| 11 | Soak: average load for hours to days; finds response time degradation, leaks, storage depletion; also endurance, stamina; run after smoke and average-load. | S6 | "memory or other resource leaks, data saturation, and storage depletion" |
| 12 | Breakpoint: ramps to unrealistically high load until thresholds fail; also capacity, point load, limit; avoid in elastic cloud; ramping-arrival-rate recommended. | S7 | "also known as capacity, point load, and limit testing" |
| 13 | ISTQB load testing definition. | S8 | "usually between anticipated conditions of low, typical, and peak usage" |
| 14 | ISTQB stress testing definition. | S9 | "at or beyond the limits of its anticipated or specified workloads" |
| 15 | ISTQB spike testing definition. | S10 | "sudden bursts of peak loads and return to a steady state" |
| 16 | ISTQB endurance testing definition. | S11 | "stability of a system under a significant load over a significant period of time" |
| 17 | ISTQB capacity testing definition. | S12 | "Testing to evaluate the capacity of a system." |

Owner's own text (no cite): the 5 short definitions, the volume test (large data at once). Tutorial's own view: the mapping of owner names to k6 names.
