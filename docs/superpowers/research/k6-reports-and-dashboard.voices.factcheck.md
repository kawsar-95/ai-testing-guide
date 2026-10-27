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

Open FAILs: 0
