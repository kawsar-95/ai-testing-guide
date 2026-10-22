# Voice fact-check: NoSQL Databases (round 2, 2026-10-22)

Page: `content/course/nosql.mdx`. I did not write this page or its voices.

Method: I read the 7 `<Voices>` blocks. For each `<Layman>` and `<Bangla>` panel I compared every claim, number, hedge and cite with `<Technical>` of the same `##` section. Checks run on every block: the `<Technical>` body matches the same section of `git show HEAD:content/course/nosql.mdx` (no change); every `<Cite n>` in a voice panel is also cited in `<Technical>` of the same block; no heading and no TODO in `<Layman>` or `<Bangla>`; no তুমি form; no Layman sentence over 25 words (script); Bangla style (আপনি, concept words in Bangla letters, acronyms, products, commands and code in English). The `## Key words` section has no voices. `<Layman>` panels are unchanged from the committed version. An omission is not a FAIL.

| # | Section | Voice | Verdict | Reason |
|---|---|---|---|---|
| 1 | In plain words | Layman | PASS | Same facts, numbers, hedges, and cites as Technical; plain short sentences. |
| 2 | In plain words | Bangla | PASS | Loose name, Cassandra self-description (cite 7), the four-family sorting (tutorial's own), MongoDB (cites 1, 2, 3), Redis (cites 4, 5), Cassandra (cite 7), and Neo4j (cite 9) all match. Product names stay in English; family and structure terms are in Bangla letters with English in parentheses. |
| 3 | When you need it | Layman | PASS | Same facts, numbers, hedges, and cites as Technical; plain short sentences. |
| 4 | When you need it | Bangla | PASS | The four vendor statements and the "not a ranking" hedge match, with cites 1, 4, 7, 9. |
| 5 | How it works | Layman | PASS | Same facts, numbers, hedges, and cites as Technical; plain short sentences. |
| 6 | How it works | Bangla | PASS | Redis keys (colon, expiration, `EXPIRE`, `TTL`, in-memory store, RDB and AOF), Cassandra keys (cites 7, 8), and MongoDB BSON (cite 2) match. Commands and acronyms stay in English. |
| 7 | Trade-offs | Layman | PASS | Same facts, numbers, hedges, and cites as Technical; plain short sentences. |
| 8 | Trade-offs | Bangla | PASS | Cassandra gives no cross-partition transactions, distributed joins, or foreign keys, with the stated reason (cite 7); MongoDB multi-document transactions (cite 1); Neo4j no JOINs (cite 9) and the tutorial-own label match. |
| 9 | A real-life example | Layman | PASS | Same facts, numbers, hedges, and cites as Technical; plain short sentences. |
| 10 | A real-life example | Bangla | FAIL | Four data kinds and their fits match. FAIL (number and style): `লক্ষ লক্ষ` means hundreds of thousands, not "millions". Also the event name `"student finished lesson"` was left in English, while the other bullet was in Bangla. |
| 11 | Common mistakes | Layman | PASS | Same facts, numbers, hedges, and cites as Technical; plain short sentences. |
| 12 | Common mistakes | Bangla | FAIL (style) | Four mistakes match, with cites 1, 5, 7. FAIL (style): the quoted phrase `"no schema"` was left in English, while `স্কিমা` is used in the next sentence. |
| 13 | What a tester can check | Layman | PASS | Same facts, numbers, hedges, and cites as Technical; plain short sentences. |
| 14 | What a tester can check | Bangla | PASS | Four test ideas match, the advice label is kept. No cites, as in Technical. |

## Re-check

Fixed rows 10 and 12. The example now says `কয়েক মিলিয়ন "শিক্ষার্থী লেসন শেষ করেছে" ইভেন্ট`, and the mistake now says `"স্কিমা নেই" মানে "কোনো নিয়ম নেই"`. No cite changed. I re-read both panels and they match Technical. `node --test tests/voice-source.test.ts tests/course.test.ts` passes.

FAILs found: 2. Fixed: 2.

Open FAILs: 0
