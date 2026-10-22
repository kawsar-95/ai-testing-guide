# Voice fact-check: Normalization and Denormalization (round 2, 2026-10-22)

Page: `content/course/normalization.mdx`. I did not write this page or its voices.

Method: I read the 7 `<Voices>` blocks. For each `<Layman>` and `<Bangla>` panel I compared every claim, number, hedge and cite with `<Technical>` of the same `##` section. Checks run on every block: the `<Technical>` body matches the same section of `git show HEAD:content/course/normalization.mdx` (no change); every `<Cite n>` in a voice panel is also cited in `<Technical>` of the same block; no heading and no TODO in `<Layman>` or `<Bangla>`; no তুমি form; no Layman sentence over 25 words (script); Bangla style (আপনি, concept words in Bangla letters, acronyms, products, commands and code in English). The `## Key words` section has no voices. `<Layman>` panels are unchanged from the committed version. An omission is not a FAIL.

Notes:

- `সামঞ্জস্যপূর্ণ` for "consistent" is a normal Bangla word, not a FAIL.

| # | Section | Voice | Verdict | Reason |
|---|---|---|---|---|
| 1 | In plain words | Layman | PASS | Same facts, numbers, hedges, and cites as Technical; plain short sentences. |
| 2 | In plain words | Bangla | PASS | Normalization, the two removed things, redundancy cost, Customers and salary examples, primary key (unique, not null), foreign key and referential integrity all match, with cites 1 and 2. Terms are in Bangla letters with English in parentheses. |
| 3 | When you need it | Layman | PASS | Same facts, numbers, hedges, and cites as Technical; plain short sentences. |
| 4 | When you need it | Bangla | PASS | Orders, users, payments, and the "address right on one screen, wrong on another" bug match, with the hedge "often". Uses আপনি. |
| 5 | How it works | Layman | PASS | Same facts, numbers, hedges, and cites as Technical; plain short sentences. |
| 6 | How it works | Bangla | FAIL (style) | Normal-form rules, 3NF "highest level most applications need", rare BCNF and fifth form, the 1NF to 3NF rules, the student-table example, FK refusal, RESTRICT and CASCADE all match, with cites 1 and 2. FAIL (style): `first normal form-এ`, `third normal form-ই`, `Fourth ... fifth normal form`, the labels `First (1NF)`, `Second`, `Third`, and the words `student`, `class`, `advisor` were common words left in English, although `নরমাল ফর্ম (normal form)` was defined in Bangla letters in the first sentence. |
| 7 | Denormalization and trade-offs | Layman | PASS | Same facts, numbers, hedges, and cites as Technical; plain short sentences. |
| 8 | Denormalization and trade-offs | Bangla | FAIL (style) | More tables, performance warning, broken-rule hedge, "just for fields that change often", and the tutorial-own denormalization trade match. FAIL (style): `third normal form` left in English. |
| 9 | A real-life example | Layman | PASS | Same facts, numbers, hedges, and cites as Technical; plain short sentences. |
| 10 | A real-life example | Bangla | PASS | `orders` table, 40 rows, 39 fixed and one failed, wrong report count with no error, the split with `customers`, and the denormalization copy match. Numbers are in digits as in Technical. |
| 11 | Common mistakes | Layman | PASS | Same facts, numbers, hedges, and cites as Technical; plain short sentences. |
| 12 | Common mistakes | Bangla | PASS | Five mistakes match, with cites 1 and 2, the PostgreSQL manual hedge ("can be a problem"), and the tutorial-own label. |
| 13 | What a tester can check | Layman | PASS | Same facts, numbers, hedges, and cites as Technical; plain short sentences. |
| 14 | What a tester can check | Bangla | PASS | Six test ideas match, the advice label is kept. No cites, as in Technical. |

## Re-check

Fixed rows 6 and 8. The text now says `প্রথম / তৃতীয় নরমাল ফর্ম (first normal form)` at the first use, `প্রথম (1NF)`, `দ্বিতীয় (2NF)`, `তৃতীয় (3NF)`, `চতুর্থ (BCNF) ও পঞ্চম নরমাল ফর্ম`, `শিক্ষার্থী`, `ক্লাস`, and `উপদেষ্টা (advisor)`. Code names `Class1`, `Students`, `Registration`, `Faculty` and the acronyms stay. No fact or cite changed. I re-read both panels and they match Technical. `node --test tests/voice-source.test.ts tests/course.test.ts` passes.

FAILs found: 2. Fixed: 2.

Open FAILs: 0
