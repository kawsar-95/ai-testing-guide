# Voice fact-check: k6-test-types

Page: `content/k6/k6-test-types.mdx`, checked 2026-10-27 by an agent that did not write the voices. I read the 7 `<Voices>` blocks (Key words has none). Each `<Layman>` and `<Bangla>` panel was compared with the `<Technical>` panel of the same block.

Automated checks (script, all 7 blocks):

- Every `<Cite n>` in Layman and Bangla is cited in Technical of the same block: PASS.
- Code blocks (text charts and scripts) are identical in all three panels: PASS.
- No heading, no `তুমি`, no TODO in Layman or Bangla: PASS.
- No Layman sentence over 25 words: PASS.
- Numbers in Bangla (Bangla digits converted) and in Layman not in Technical: none, except block 6 (see row 12).
- Commands, flags, metric and executor names (`k6 inspect`, `options`, `stages`, `ramping-arrival-rate`, `preAllocatedVUs`, `abortOnFail`, `delayAbortEval`, `sleep()`, `Ctrl+C`, `VU`, `p(95)`, `iterations/s`) stay in Latin letters in Bangla: PASS. Common words are in Bangla letters (ডকুমেন্টেশন, ইউজার, ক্লাউড, এনভায়রনমেন্ট). The reader is addressed with আপনি.

| # | Section | Voice | What the panel says (checked against Technical) | Verdict | Reason |
|---|---|---|---|---|---|
| 1 | The six types | Layman | Six types, own goal and shape, "load test" name, three rules, names not standard, safety callout, same default function | PASS | Same facts and cites. Omits "A system that runs for days..." (an omission is not a FAIL). Repeats claims 8 and 10 of the Technical fact-check (the panel follows Technical). |
| 2 | The six types | Bangla | Same | PASS | Same facts. Callout title and body follow Technical. |
| 3 | Smoke test | Layman | Goal, 5 VUs, shakeout, when to run, chart, script, thresholds, run output, fix order | PASS | Same facts, numbers, cites. |
| 4 | Smoke test | Bangla | Same | PASS | Same facts. `p(95)`, VU, check stay Latin. |
| 5 | Average-load | Layman | Goal, names, when, ramp-up 5 to 15 %, plateau 5 times, ramp-down, script, notes | PASS | Same facts and cites. |
| 6 | Average-load | Bangla | Same | PASS | Same numbers (৫ থেকে ১৫ শতাংশ, পাঁচ গুণ). |
| 7 | Stress | Layman | Goal, names, when, no fixed percentage, only after smoke and average, script, thresholds, do not run early | PASS | Same facts. "twice, triple" is shortened to "many times more": an omission. |
| 8 | Stress | Bangla | Same | PASS | Same facts. |
| 9 | Spike | Layman | Goal, examples, shape, script, docs' example, errors common, recovery, repeat | PASS | Same facts and cites. |
| 10 | Spike | Bangla | Same | PASS | Same facts and numbers (২০০০, ২ মিনিট, ১ মিনিট). |
| 11 | Soak | Layman | Goal, defects, names, when, 3 to 72 hours, shape, 8 hours, monitoring | PASS | Same facts and cites. |
| 12 | Soak | Bangla | "ডকুমেন্টেশন সাধারণ সময় হিসেবে ৩, ৪, ৮, ১২, ২৪ আর ৪৮ থেকে ৭২ ঘণ্টা দেয়" | PASS (round 2) | Round 2: the extra hours are gone (script check: no number in Bangla or Layman that Technical lacks, in all 7 blocks). Was: Technical gives only "from 3 hours up to 72 hours". The numbers 4, 8, 12, 24, 48 are not in Technical (they are in S6, but a voice must not add a fact that Technical does not give). Fix: "৩ ঘণ্টা থেকে ৭২ ঘণ্টা পর্যন্ত". |
| 13 | Breakpoint | Layman | Goal, names, when, elastic cloud, shape, executor, no sleep, optional options, stop, five failure points | PASS | Same facts and cites. |
| 14 | Breakpoint | Bangla | Same | PASS | Same facts. `Ctrl+C`, `abortOnFail: true`, `delayAbortEval`, `startRate`, `timeUnit`, `maxVUs` stay Latin. |

Round-1 note: the Technical text has open FAILs in its own report (claims 8, 10, 15, 16, 26). If the writer changes Technical, Layman and Bangla must follow in the same places (the callout and "same default function" sentence, the smoke VU number and run block, the average-load script and chart; the Layman and Bangla panels repeat them).

Round 2: all Layman and Bangla panels re-checked after the Technical change (cites, numbers, code blocks, no তুমি, no Layman sentence over 25 words): PASS.

Open FAILs: 0
