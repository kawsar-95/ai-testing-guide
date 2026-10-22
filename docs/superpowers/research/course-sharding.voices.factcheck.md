# Voice fact-check: Sharding (round 2, 2026-10-22)

Page: `content/course/sharding.mdx`. I did not write the Layman or Bangla panels. This report replaces any older one.

Method: for each `<Voices>` block I compared `<Layman>` and `<Bangla>` with `<Technical>` of the same `##` section. FAIL means a fact, number, name, example or cite that Technical does not give; a dropped hedge that changes the meaning; a wrong or misleading statement; a `<Cite n>` that Technical of the block does not cite; wrong, ungrammatical or unfinished Bangla; a break of the Bangla style rule (তুমি, common concept words left in English, an acronym or product or command name in Bangla letters); or a Layman sentence over 25 words. An omission is not a FAIL. I did not re-check the sources: the Technical claims are in `course-sharding.factcheck.md`. The `## Key words` section has no voices.

Mechanical checks (script over all sections, and `git show HEAD:` for the committed text):

- Each of the 10 `<Technical>` bodies matches the text of the same section in `HEAD`. `## Key words` is unchanged. No removed non-blank Technical line.
- The set of `<Cite n>` and the number of cites are equal in Technical, Layman, and Bangla of every block.
- No `TODO`. No Markdown heading in Layman or Bangla. No `তুমি` in the file. No Layman sentence over 25 words.
- Section headings are bold labels in Layman and Bangla, never `#` headings.

| # | Section | Voice | Verdict | Reason |
|---|---|---|---|---|
| 1 | In plain words | Layman | PASS | Same facts, numbers and cites as Technical; sentences are short and plain |
| 2 | In plain words | Bangla | PASS | Same facts, numbers and cites as Technical; correct Bangla, আপনি, style rule kept |
| 3 | When you need it | Layman | PASS | Same facts, numbers and cites as Technical; sentences are short and plain; "two cases" matches the two conditions |
| 4 | When you need it | Bangla | PASS | Same facts, numbers and cites as Technical; correct Bangla, আপনি, style rule kept |
| 5 | How it works | Layman | PASS | Same facts, numbers and cites as Technical; sentences are short and plain; the strategy table is turned into bullets with strength and weakness |
| 6 | How it works | Bangla | PASS | Same facts, numbers and cites as Technical; correct Bangla, আপনি, style rule kept; `mongos` kept as code; range, hash, lookup match Technical |
| 7 | Choosing a shard key | Layman | PASS | Same facts, numbers and cites as Technical; sentences are short and plain; "four things" matches the four properties |
| 8 | Choosing a shard key | Bangla | PASS | Same facts, numbers and cites as Technical; correct Bangla, আপনি, style rule kept |
| 9 | Hot spots | Layman | PASS | Same facts, numbers and cites as Technical; sentences are short and plain |
| 10 | Hot spots | Bangla | PASS | Same facts, numbers and cites as Technical; correct Bangla, আপনি, style rule kept; 7 values and 7 chunks match Technical |
| 11 | Cross-shard queries | Layman | PASS | Same facts, numbers and cites as Technical; sentences are short and plain |
| 12 | Cross-shard queries | Bangla | FAIL | (1) "সেই শার্ডে ... যেগুলোতে" has a singular and plural mismatch: fixed to "সেই শার্ডগুলোতে". (2) "শার্ডের মধ্যে ট্রানজেকশন" can mean "inside a shard", but Technical says "across shards": fixed to "একাধিক শার্ড জুড়ে ট্রানজেকশন" |
| 13 | Rebalancing | Layman | PASS | Same facts, numbers and cites as Technical; sentences are short and plain |
| 14 | Rebalancing | Bangla | FAIL | "ডাউনটাইম বা থ্রুপুট কমতে পারে" reads as "downtime or throughput may fall", so downtime would fall. Technical says rebalancing can cause downtime or lower throughput. Fixed to "ডাউনটাইম হতে পারে, অথবা থ্রুপুট কমতে পারে" |
| 15 | A real-life example | Layman | PASS | Same facts, numbers and cites as Technical; sentences are short and plain |
| 16 | A real-life example | Bangla | PASS | Same facts, numbers and cites as Technical; correct Bangla, আপনি, style rule kept |
| 17 | Common mistakes | Layman | PASS | Same facts, numbers and cites as Technical; sentences are short and plain |
| 18 | Common mistakes | Bangla | PASS | Same facts, numbers and cites as Technical; correct Bangla, আপনি, style rule kept |
| 19 | What a tester can check | Layman | PASS | Same facts, numbers and cites as Technical; sentences are short and plain; callout kept, no cites |
| 20 | What a tester can check | Bangla | PASS | Same facts, numbers and cites as Technical; correct Bangla, আপনি, style rule kept; callout kept, no cites |

## Re-check

I fixed each FAIL by editing only the Layman or Bangla panel text, then re-read the changed lines. Each fixed line now matches its Technical sentence, keeps its cite, and follows the style rule. The failed rows are re-checked here:

- Cross-shard queries, Bangla: PASS after the fix.
- Rebalancing, Bangla: PASS after the fix.

FAILs found: 2. Fixed: 2.

Open FAILs: 0
