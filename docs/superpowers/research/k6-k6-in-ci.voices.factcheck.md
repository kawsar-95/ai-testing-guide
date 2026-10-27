# Voice fact-check: k6 in CI (2026-10-27)

Page: `content/k6/k6-in-ci.mdx`. I did not write this page or its voices. Each `<Layman>` and `<Bangla>` panel was compared with the `<Technical>` panel of the same section. The 4 `##` sections with voices were checked. `## Key words` has none, as intended.

## Checks

| Check | Result |
|---|---|
| A fact, number, name, example, or cite that Technical does not give | See V1 (lede sentence) and V3. Otherwise none. |
| `<Cite n>` in Layman/Bangla not cited in Technical of the block | None. Section 1: 1,2,3. Section 2: 3. Section 3: 4,5,6,7,9,2. Section 4: 8,6. All appear in Technical. |
| Meaning change | V2 (hedge dropped) and V3 |
| Bangla command, flag, metric, product name in Bangla letters | None. `k6`, `grafana/setup-k6-action`, `p(95)<1`, `echo $?`, `__ENV.NAME`, `-e NAME=value`, `K6_WEB_DASHBOARD` and all code stay in English. |
| তুমি instead of আপনি | None. The Bangla text uses আপনি and the imperative forms. |
| Layman sentence over 25 words | None (scanned all 4 Layman panels; the longest are about 24 words). |
| No heading inside Layman or Bangla | PASS (`npm test` voice-source: 29 pass, 0 fail) |
| Layman and Bangla add no number | PASS: 0, 99, 1 VU, 10 seconds, 2 minutes, 20 VUs, 5 minutes, 1 minute, three thresholds, three times all appear in Technical. |

## Findings

| # | Panel | Verdict | Reason |
|---|---|---|---|
| V1 | Section 1, Layman and Bangla, first paragraph ("Nobody wants to run a load test by hand ... A CI job can run the test for you.") | PASS (note) | This sentence is the page lede, not part of the Technical text of this section. It is an opinion, not a fact, and the lede states it. Acceptable. |
| V2 | Section 3, Layman and Bangla, bullet "A failed threshold gives exit code 99. The step fails, and so does the job." | FAIL | Technical marks "The step fails, and so does the job" as "the tutorial's own reasoning, see the first section". The Layman and Bangla bullets state it as a plain fact and drop the label. Section 1 (Layman and Bangla) does the same: Technical says "(the tutorial's own reasoning; the k6 sources give the exit code only)". Keep the hedge or move the sentence out of the cited position. |
| V3 | Section 3, Layman and Bangla, load script thresholds | PASS (round 2) | Copies the wrong claim of Technical (fact-check claim 30): `smoke.js` has 3 thresholds and `load.js` has 2. Fix both with the Technical text. |
| V4 | Section 3, Layman and Bangla, versions | PASS | The Layman and Bangla panels drop the sentence about `@v1`/`@v7` and 27 October 2026 and keep the advice to check each README. This removes detail; it adds none. |
| V5 | Section 2 table, Layman and Bangla | PASS | Same rows as Technical; "People need to watch the result" matches "These need people to watch the result". |
| V6 | Section 4, Layman and Bangla | PASS | Same list, callout, and checks as Technical. The callout says "tutorial's own safety advice" in all three. |
| V7 | Bangla term style | PASS | Common words (গ্রাফ, রিপোর্ট, সিস্টেম, প্রজেক্ট) in Bangla letters. Acronyms and product names (CI, VU, HTML, GitHub, k6, job, step, threshold, artifact, workflow) in English. This follows the course rule. |


## Round 2 (2026-10-27)

- V3: PASS (round 2). Layman: "The load script has the first two of them." Bangla matches. Same as Technical.
- V2: section 3 PASS (round 2): Layman and Bangla bullets now carry the "tutorial's own reasoning" hedge. Section 1 Layman (line 42) and Bangla (line 53) still say "So a failed threshold can fail the job" with no "tutorial's own reasoning" label, while Technical has it. Still FAIL (minor). Fix: add the same label, or leave out the sentence.
- New text (load script with no default host, `fail()`, 107, secret missing): Layman and Bangla give the same facts as Technical (Bangla omits 107, which is allowed). PASS.
- New text (`K6_WEB_DASHBOARD_PERIOD: 1s`): same facts and cite 4 in all three voices. PASS.
- Quickpizza callout: Layman and Bangla match Technical. PASS.
- New cites 10, 11, 12 in Layman and Bangla (10, 11, 12): each appears in Technical of the block. PASS.
- No তুমি; commands and names stay in English; no Layman sentence over 25 words. PASS.


## Round 3 (2026-10-27)

- V2: PASS (round 3). Section 1 Layman now ends "So a failed threshold can fail the job (the tutorial's own reasoning)." Bangla ends "... ফেল করাতে পারে (এটা tutorial-এর নিজের যুক্তি)।" Both match the label of Technical. Section 3 was already PASS.
- `node --test tests/voice-source.test.ts tests/k6.test.ts`: 29 pass, 0 fail.


## Round 4 (final-review fixes, 2026-10-27)

The Layman and Bangla panels of "The workflow file" got the new sentence about `K6_WEB_DASHBOARD_PORT: '-1'`.

- Layman: "Both jobs set `K6_WEB_DASHBOARD_PORT: '-1'`. A CI process must stop when the test ends. The docs say to turn off the dashboard port with `-1` in this case <Cite n={4} />." Same facts and cite as Technical. Sentences are under 25 words. PASS.
- Bangla: same facts and cite 4; the variable name and `-1` stay in English; the reader is addressed with a command form, no তুমি. PASS.
- Cite 4 appears in Technical of the block. No new fact, number, or name. PASS.

Open FAILs: 0
