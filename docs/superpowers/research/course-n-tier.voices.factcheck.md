# Voice fact-check: N-tier Architecture (round 2, 2026-10-22)

Page: `content/course/n-tier.mdx`. I did not write this page or its voices.

Method: I read the 7 `<Voices>` blocks. For each `<Layman>` and `<Bangla>` panel I compared every claim, number, hedge and cite with `<Technical>` of the same `##` section. Checks run on every block: the `<Technical>` body matches the same section of `git show HEAD:content/course/n-tier.mdx` (no change); every `<Cite n>` in a voice panel is also cited in `<Technical>` of the same block; no heading and no TODO in `<Layman>` or `<Bangla>`; no তুমি form; no Layman sentence over 25 words (script); Bangla style (আপনি, concept words in Bangla letters, acronyms, products, commands and code in English). The `## Key words` section has no voices. `<Layman>` panels are unchanged from the committed version. An omission is not a FAIL.

Notes:

- Source accessed note: `<Technical>` has no "at the time of access" claim in this page, so the date wording is not an issue here.

| # | Section | Voice | Verdict | Reason |
|---|---|---|---|---|
| 1 | In plain words | Layman | PASS | Same facts, numbers, hedges, and cites as Technical; plain short sentences. |
| 2 | In plain words | Bangla | PASS | Layer vs tier, the layer-use rule, the 3-tier design, and cite 1 all match. Terms are in Bangla letters; "logical layer" and "physical tier" are in parentheses. |
| 3 | How it works | Layman | PASS | Same facts, numbers, hedges, and cites as Technical; plain short sentences. |
| 4 | How it works | Bangla | PASS | Web, middle, and data tier flow, the WAF, messaging, and cache description, strict and relaxed (with their costs), closed and open layers all match. Cite 1 only. Strict, relaxed, closed, open, and coupling are shown in Bangla letters with English in parentheses. |
| 5 | When you need it | Layman | PASS | Same facts, numbers, hedges, and cites as Technical; plain short sentences. |
| 6 | When you need it | Bangla | PASS | Three cases, five benefits, and the latency and boundary points match. The tutorial-own lesson is not in this block. Uses আপনি. |
| 7 | Challenges | Layman | PASS | Same facts, numbers, hedges, and cites as Technical; plain short sentences. |
| 8 | Challenges | Bangla | PASS | Four challenges and the good practices (autoscaling, messaging, caching, availability, firewall, subnet per tier, data tier access) match. CRUD stays as an acronym. |
| 9 | A real-life example | Layman | PASS | Same facts, numbers, hedges, and cites as Technical; plain short sentences. |
| 10 | A real-life example | Bangla | PASS | Exam site example is the tutorial's own and says so. Tiers, the Submit flow, and the weak middle tier with cite 1 match. |
| 11 | Common mistakes | Layman | PASS | Same facts, numbers, hedges, and cites as Technical; plain short sentences. |
| 12 | Common mistakes | Bangla | PASS | Five mistakes match, with the same cites. The "not required" and monolithic points keep their hedges. |
| 13 | What a tester can check | Layman | PASS | Same facts, numbers, hedges, and cites as Technical; plain short sentences. |
| 14 | What a tester can check | Bangla | PASS | Five test ideas match, and the "tutorial's own advice" label is kept. No cites, as in Technical. |

## Re-check

No FAIL was found, so there was nothing to fix. `node --test tests/voice-source.test.ts tests/course.test.ts` passes.

FAILs found: 0. Fixed: 0.

Open FAILs: 0
