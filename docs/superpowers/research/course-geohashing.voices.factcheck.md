# Voice fact-check: Geohashing and Quadtrees (round 1, 2026-10-22)

Page: `content/course/geohashing.mdx`. I did not write the voices of this page.

Method: I read the 6 `<Voices>` blocks. I compared each `<Layman>` and `<Bangla>` panel with the `<Technical>` panel of the same block. A FAIL is a fact, number, name, example, or cite that Technical does not give; a dropped hedge that changes the meaning; a wrong or misleading statement; a `<Cite n>` that Technical does not cite; a term that is translated in a confusing way; a wrong Bangla meaning; or a Layman sentence that is long or not plain. An omission is not a FAIL. I did not re-check the sources: the Technical claims are in the report of the page text.

Checks run:

- No `TODO` placeholder is left (`grep -c TODO` gives 0).
- No Markdown heading in any Layman or Bangla panel (script check).
- The cite set of each Layman and Bangla panel equals the cite set of its Technical panel (script check). No extra `n`.
- No number in Layman or Bangla is missing from Technical (script check): 1 to 12, 52-bit, 85.05112878, 256 by 256, 1+8, the cafe coordinates, `u17`, `120`, 135 m, 0.5%, 30 June 2028 all match.
- `git diff -U0 content/course/geohashing.mdx | grep '^-' | grep -v '^---'` shows no removed line. Technical text is unchanged.

| # | Section | Voice | Verdict | Reason |
|---|---|---|---|---|
| 1 | In plain words | Layman | PASS | Same geohash, precision (1 to 12), quadkey, and the "tutorial's own" label. Cites 1, 2, 3 match. |
| 2 | In plain words | Bangla | PASS | Same. |
| 3 | When you need it | Layman | PASS | Same three uses (Redis, Elasticsearch, Bing Maps). |
| 4 | When you need it | Bangla | PASS | Same. |
| 5 | How it works | Layman | PASS | Same GEOADD facts, 52-bit integer, latitude and longitude limits, 1+8 areas, precision cost, quadkey rules, "213" example, three properties. The table became a list of the same three rows. |
| 6 | How it works | Bangla | PASS | Same. "level-এর 2 ঘাত সংখ্যক tile" is correct for "2 to the power of the level". |
| 7 | A real-life example | Layman | PASS | Same point, same table values (as a list), same box of `u17`, same cafe pair and the 1+8 reading. |
| 8 | A real-life example | Bangla | PASS | Same. |
| 9 | Common mistakes | Layman | PASS | Same five items. Hedges ("may reach 0.5%", "can be costly") are kept. The retirement date matches. |
| 10 | Common mistakes | Bangla | PASS | Same. "বন্ধ হওয়া service" fits "retired service". |
| 11 | What a tester can check | Layman | PASS | Same six ideas. No cites. |
| 12 | What a tester can check | Bangla | PASS | Same six ideas. |

Notes (not FAILs):

- Layman keeps terms from Technical (interleave, B-tree index, base-4). It adds no new fact. The Key words table defines "Interleave".
- One Layman sentence about the Redis geohash has 25 words. I left it.

## Re-check

No FAIL was found. No row needed a re-check.

Found: 0. Fixed: 0.

Open FAILs: 0
