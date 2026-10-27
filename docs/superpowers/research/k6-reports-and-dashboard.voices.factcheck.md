# Voices fact-check: k6 reports-and-dashboard

Each Layman and Bangla panel compared with the Technical panel of the same block. Layman sentences were counted by script (none over 25 words). Bangla checked for `তুমি` forms and for command, flag, metric, and product names in Bangla letters.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| Pick the right output | PASS | PASS | Same 4 ways, same cites, no new fact |
| Write your own summary with handleSummary | PASS | PASS | Same facts, numbers (`0.0.2`, v1.5.0, 2 options), keys, cites |
| Use the built-in web dashboard | PASS | PASS | Variable table is restated in prose with the same defaults |
| Save the dashboard as an HTML report | PASS | PASS | Same 3x rule, same observed results |
| Save raw results to a file | PASS | PASS | Same facts and cites |
| The older summary export | PASS | PASS | Same removals and cites |
| Duration and iterations together | PASS | PASS (round 2) | Round 2: now "চালান" and "থামুন" (আপনি form). Was: "১০০টা VU-র মধ্যে ভাগ করে ১০০টা iteration চালাও ... থামো" uses the তুমি imperative (`চালাও`, `থামো`). The address form must be আপনি (`চালান`, `থামুন`), or use a neutral form ("চলে", "থামে"). |

Other checks: no added fact, number, name, or cite; no meaning change; Layman text has no sentence over 25 words; commands, flags, env vars, and metric names stay in English in all Bangla panels.


## Round 2: example-project callout (2026-10-27)

Source: owner repository kawsar-95/k6-performance-testing, commit 51e4b9e (clone read only, nothing run). Facts about the owner project have no Cite.

| Check | Verdict | Note |
|---|---|---|
| Layman: same facts as Technical, no new fact, sentences 25 words or fewer | PASS | longest 22 words. Round 3: Layman now says tables go to `.md` and the summary data to `.json`, as Technical does. Longest sentence still 22 words. |
| Bangla: same facts; `handleSummary()`, `.md`, `.json`, `setup_data`, API, token, HTML reporter stay English | PASS | matches Technical (tables to `.md`, summary data to `.json`; `.md`, `.json`, `setup_data` stay English). |

Round 3 re-check (2026-10-27): all 3 panels (lines 108, 133, 158 of the MDX) match Technical and lines 255 and 257 of dmoney-transactions.k6.js.

Open FAILs: 0
