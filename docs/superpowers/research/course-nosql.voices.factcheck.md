# Voice fact-check: NoSQL Databases (round 1, 2026-10-22)

Page: `content/course/nosql.mdx`. I did not write the Layman and Bangla panels.

Method: I read the 7 `<Voices>` blocks. For each `<Layman>` and `<Bangla>` panel, I compared each claim with the `<Technical>` panel of the same `##` section. A fact, number, name, example, or cite that Technical does not give is a FAIL. A dropped hedge that changes the meaning is a FAIL. A wrong or confusing Bangla meaning is a FAIL. A Layman sentence of more than 25 words is a FAIL. An omission is not a FAIL. Every `<Cite n>` in a voice panel is a number that Technical of the same section cites (the cites 1 to 10 were compared one by one). I did not re-check the sources: the Technical claims are not changed.

Mechanical checks:

- No `TODO` placeholder is left.
- No Markdown heading in any `<Layman>` or `<Bangla>` panel.
- `git diff -U0 content/course/nosql.mdx | grep '^-' | grep -v '^---'` shows no removed non-blank line. The Technical text is unchanged.
- No Layman sentence is over 25 words (script check).
- Product names, `EXPIRE`, `TTL`, `person:1`, BSON, RDB, AOF, "30 minutes" (Bangla: ৩০ মিনিট) match Technical. "Millions" is "লক্ষ লক্ষ" in Bangla (loose but not wrong).

| # | Section | Voice | Result | Reason |
|---|---|---|---|---|
| 1 | In plain words | Layman | PASS | The table became a list. The 4 families and the 4 product descriptions match Technical. The "tutorial's own simplification" hedge is kept. |
| 2 | In plain words | Bangla | PASS | Same. "শিথিল নাম" = "loose name". "ঐচ্ছিকভাবে" = "optionally". |
| 3 | When you need it | Layman | FAIL | "These are the own statements of the vendors, and not a ranking" is not good English and not plain. The 4 vendor statements match Technical. |
| 4 | When you need it | Bangla | PASS | The 4 vendor statements match. "কোনো ranking নয়" = "not a ranking". |
| 5 | How it works | Layman | PASS | Redis keys (colon, expiry, `EXPIRE`, `TTL`, in-memory, persistence), Cassandra keys, and BSON match. |
| 6 | How it works | Bangla | PASS | Same. "নষ্ট করে দেয়" = "destroys". |
| 7 | Trade-offs | Layman | PASS | The Cassandra reasons, the MongoDB transactions, the Neo4j JOIN sentence, and the closing question match. "typically slow" is kept. |
| 8 | Trade-offs | Bangla | PASS | Same. "সমর্থন না করার সিদ্ধান্ত নিয়েছে" = "chooses not to support". |
| 9 | A real-life example | Layman | PASS | The 4 data kinds and "shows the shape of each tool, not a rule" match. |
| 10 | A real-life example | Bangla | PASS | Same. |
| 11 | Common mistakes | Layman | PASS | The 4 points and the cites match. |
| 12 | Common mistakes | Bangla | PASS | Same. "নামের সংঘর্ষ" = "name collision". "আশা করে" for "expects" (an app expects fields) is acceptable. |
| 13 | What a tester can check | Layman | PASS | The 4 ideas match. No cite. |
| 14 | What a tester can check | Bangla | FAIL | "কোনো field নেই" for "a missing field" can mean "there is no field at all". The wrong reading changes the test case. |

Round 1: 2 FAILs (rows 3 and 14).

## Re-check

| Row | Fix | Result |
|---|---|---|
| 3 | Now "These are statements of the vendors themselves. They are not a ranking." | PASS |
| 14 | Now "একটি field নেই, একটি বাড়তি field আছে, বা type ভুল" ("one field is missing"). | PASS |

`node --test tests/voice-source.test.ts tests/course.test.ts` passes.

Open FAILs: 0
