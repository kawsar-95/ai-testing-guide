# Fact check: k6 / performance-test-types

Checker: fresh agent (not the writer). Sources fetched 2026-10-27 into /tmp/claude-1000/k6-check-performance-test-types/ (k6 docs HTML; ISTQB data from api.glossary.istqb.org/v1/terms/<slug>).
Cites: 1 = test-types overview, 2 = average-load, 3 = smoke, 4 = stress, 5 = spike, 6 = soak, 7 = breakpoint, 8-12 = ISTQB load, stress, spike, endurance, capacity.

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Different traffic patterns create different risks | 1 | PASS | "Different patterns of traffic create different risk profiles for the application." |
| 2 | "A system can pass a test at normal load and still fail at a rush, or after many hours" | 1 | PASS (round 2) | The overview says only that patterns create different risk profiles. The pass-then-fail example is not in the source. Cite it as the tutorial's own reading or reword. |
| 3 | No single type removes all risk | 1 | PASS | "no single test type eliminates all risk." |
| 4 | k6 names six types: smoke, average-load, stress, soak, spike, breakpoint | 1 | PASS | The overview lists these six. |
| 5 | Part 5 has a k6 script for each type (/k6/k6-test-types/) | none | PASS | Tutorial structure (route exists in the module). |
| 6 | Smoke: minimal load, check script and system, baseline; a few VUs | 3 | PASS | "verify that the system works well under minimal load and to gather baseline performance values"; "a few VUs". |
| 7 | Smoke duration: seconds or minutes | 1 | PASS | "Short (seconds or minutes)". |
| 8 | Load goal: performance under typical load | 2 | PASS | "assesses how the system performs under typical load." |
| 9 | Load shape: ramp up, hold average, ramp down | 2 | PASS | Pattern: increase, maintain, "stop the test or let it ramp down". |
| 10 | Load and stress duration: mid, 5 to 60 minutes | 1 | PASS | "Mid (5-60 minutes)" for Load and Stress. |
| 11 | Stress: heavier than usual; like average-load but higher, longer ramp-up | 4 | PASS | "heavier than usual"; "the ramp-up period takes longer in proportion to the load increase." |
| 12 | Spike goal: survive a sudden, massive rush | 5 | PASS | "survives and performs under sudden and massive rushes". |
| 13 | Spike shape: very fast ramp-up, very high load, brief or no plateau | 5 | PASS | "extremely high loads in a very short or non-existent ramp-up time... no plateau period or is very brief". |
| 14 | Spike duration: short, a few minutes | 1 | PASS | "Short (a few minutes)". |
| 15 | Soak goal: problems that show only after long use | 6 | PASS | "common performance defects that show only after extended use". |
| 16 | Soak shape: like average-load, much longer plateau; duration hours | 6, 1 | PASS | "The only difference is the increased duration of the load plateau"; "Long (hours)". |
| 17 | Breakpoint: find system limits; ramps until failure; as long as necessary | 7, 1 | PASS | "aims to find system limits"; "As long as necessary". |
| 18 | Volume row is the owner's definition, no k6 type, no cite | none | PASS | Owner's notes item 4; the page says so. Not in the k6 cheat sheet. |
| 19 | Smoke: run each time you create or change a script | 3 | PASS | "run a smoke test every time you create or update a script." |
| 20 | Smoke finds system errors under minimal load; first test to run | 3, 1 | PASS | "Verify that your system doesn't throw any errors"; "Start with smoke tests". |
| 21 | Load comes from concurrent users and requests per second on a typical day | 2 | PASS | Content matches. Wording is a near-copy: see claim 38. |
| 22 | Ramp-up 5 to 15 percent of duration; plateau at least five times the ramp-up | 2 | PASS (content) | "between 5% and 15%"; "at least five times longer than the ramp-up". Wording: see claim 39. |
| 23 | Stress: no fixed percentage; depends on risk patterns; few percent or 50 to 100 percent | 4 | PASS | "there's no fixed percentage"; "just a few percentage points... 50 to 100% higher". |
| 24 | Run stress only after average-load tests | 4 | PASS | "Only run stress tests after running average-load tests." |
| 25 | Spike: test often does not finish, errors common, backend monitoring a must | 5 | PASS | "The test often won't finish."; "Errors are common"; "Backend monitoring is a must". |
| 26 | Spike: real users do not stay long, so plateau brief or missing | 5 | PASS | "real users generally do not stick around". |
| 27 | Soak: considerably longer than any other test; 3 to 72 hours | 6 | PASS | "Some typical values are 3, 4, 8, 12, 24, and 48 to 72 hours." |
| 28 | Soak: four defects (slower responses, leaks, full data stores, used-up storage) | 6 | PASS | "response time degradation, memory or other resource leaks, data saturation, and storage depletion". |
| 29 | Breakpoint: unrealistically high load; stopped by hand or by failing thresholds | 7 | PASS | "ramps to unrealistically high numbers"; "stopped manually or automatically as thresholds start to fail". |
| 30 | Breakpoint: avoid in elastic cloud; finds the limit of the cloud bill | 7 | PASS | "finding only the limit of your cloud account bill". |
| 31 | Keep shape simple; avoid "rollercoaster" tests | 1 | PASS | "Avoid 'rollercoaster' series where load increases and decreases multiple times." |
| 32 | No consensus on names | 1 | PASS | "no consensus even exists about the names". |
| 33 | Other names: smoke=shakeout; average-load=day-in-life, volume; stress=rush-hour, surge, scale; soak=endurance, constant high load, stamina; breakpoint=capacity, point load, limit | 3,2,4,6,7 | PASS | Each guide gives exactly these names. |
| 34 | Spike guide lists no other names | 5 | PASS | No alternative names in the spike guide. |
| 35 | k6 uses "average-load" because "load test" can mean all traffic tests | 2 | PASS | "Since 'load test' might refer to all types of tests that simulate traffic". |
| 36 | k6 breakpoint test raises load gradually until failure | 7 | PASS | "Increase the load gradually"; "must cause system failure". |
| 37 | ISTQB definitions of load, stress, spike, endurance (4 bullets) | 8-11 | PASS (round 2) | Content matches the glossary, but each is a near word-for-word copy with no quotation marks (runs of 9 to 19 words, for example "the ability of a system to recover from sudden bursts of peak loads and return to a steady state"). Quote with quotation marks or reword. |
| 38 | Overlap: "the number of concurrent users and requests per second" | 2 | PASS (round 2) | 9-word run copied from S2 ("the number of concurrent users and requests per second that reflect"). Reword. |
| 39 | Overlap: "at least five times longer than the ramp-up" | 2 | PASS (round 2) | 8-word run copied from S2. Reword. |
| 40 | Overlap: "a few times to find the upper limits" | 1 | PASS (round 2) | 8-word run copied from the overview cheat sheet (also in a table-adjacent sentence, run order section). Reword. |
| 41 | ISTQB capacity: "Testing to evaluate the capacity of a system" | 12 | PASS | Exact short quote in quotation marks. |
| 42 | ISTQB has no entry for soak or volume testing | 8-12 | PASS | api.glossary.istqb.org returns Not Found for soak-testing and volume-testing. |
| 43 | Load (ISTQB) is wider than k6 average-load | 8, 2 | PASS | Tutorial's own reading, flagged as such; ISTQB "varying loads... low, typical, and peak". |
| 44 | Order: smoke, average-load, then stress and soak, then spike and breakpoint | 1,3,2,4,6 | PASS | Overview: "Start with smoke tests, then progress to higher loads and longer durations"; stress and soak guides say not before smoke and average-load. |
| 45 | Spike when a rush is expected, such as a seasonal sale; breakpoint a few times | 1, 5 | PASS (content) | Cheat sheet: "seasonal events"; spike guide lists "seasonal sales". |
| 46 | A stress test for one app can be average-load for another | 1 | PASS | Exact idea in the overview. |
| 47 | Soak-first vs stress-first by risk profile | 1 | PASS | "soaks should be prioritized"; "stress tests should take precedence". |
| 48 | Key words table (load shape, VU, ramp-up, plateau, test names) | n/a | PASS | Definitions match the guides; volume marked as the owner's meaning. |

## Other checks

- Page shape: Why one test is not enough, Compare, Names differ, Which type to run first, Key words last. PASS.
- Scripts: none on the page, so no `k6 inspect` run. PASS.
- Images: none. Privacy grep (eyJ, admin@, roadtocareer, bkash): 0 hits. PASS.
- Numbers from the owner's runs stated as k6 fact: none. PASS.
- `node --test tests/voice-source.test.ts tests/k6.test.ts`: 29 pass, 0 fail.
- Overlap run: 10 runs; 6 are source URLs in `page.sources` (ignore); 3 are 8+ word FAILs (claims 38-40); the ISTQB JSON copies are claim 37.

Round 2: overlap run shows only the 6 source URLs in page.sources. Tests: 29 pass.

Open FAILs: 0
