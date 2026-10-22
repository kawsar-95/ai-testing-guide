# Voice fact-check: The PACELC Theorem (round 2, 2026-10-22)

Page: `content/course/pacelc.mdx`. I did not write the Layman and Bangla panels.

Method: I read the 7 `<Voices>` blocks. For each block and voice, I compared the panel with the `<Technical>` panel of the same `##` section. A fact, number, name, example or cite that Technical does not give is a FAIL. A dropped hedge that changes the meaning, a wrong or misleading statement, a wrong or unfinished Bangla sentence, a mistranslated term, a break of the Bangla style (আপনি, concept words in Bangla letters, acronyms and names in English, digits as in Technical), and a long or not plain Layman sentence are also FAILs. An omission is not a FAIL. I did not re-check the sources. The Technical claims are checked in `course-pacelc.factcheck.md`. The "Key words" section has no voices.

Mechanical checks (script and `git diff`):

- No `TODO` placeholder is left.
- No heading in a Layman or Bangla panel.
- Each `<Cite n>` of a Layman and of a Bangla panel is cited by Technical of the same block, and the cites match one to one (7 of 7 blocks).
- Each `<Technical>` body is equal to the `<Technical>` body of the same section in `git show HEAD:content/course/pacelc.mdx`, and all text outside the `<Voices>` blocks is equal to HEAD. Technical is unchanged.
- Only Bangla panels differ from HEAD. Layman panels are the same as HEAD.
- Layman: no sentence over 25 words.
- Bangla: no `তুমি`. Digits are ASCII, as in Technical (checked again after the fixes). Latin words that remain are acronyms, protocol, product, place, command and identifier names, or the English key term in parentheses at first use.

Notes:

- Block 5 Layman and Bangla turn the table into a list. The rows, the system names and the cite are the same, so there is no new fact.
- CAP, PACELC, PA/EL and the system names (Dynamo, Cassandra, Riak, VoltDB/H-Store, Megastore, BigTable, HBase, MongoDB, PNUTS) stay English.

| # | Section | Voice | Round 1 | Reason |
|---|---|---|---|---|
| 1 | In plain words | Layman | PASS | Same two-part question (P: A or C, E: L or C), same "paper says CAP sets limits only when failures happen", and the second trade-off [1]. Short sentences. |
| 2 | In plain words | Bangla | PASS | Same claims and cites [1]. "pass-elk" kept. Terms in Bangla letters (অ্যাভেইলেবিলিটি, কনসিসটেন্সি, ল্যাটেন্সি). A and C stay as the letters of the name. |
| 3 | When you need it | Layman | PASS | Same: read about or test on a distributed database. "Somewhat rare, often rarer than other serious failures" [1] is kept. |
| 4 | When you need it | Bangla | PASS | Same text and hedges (কিছুটা বিরল, প্রায়ই). Cite [1]. |
| 5 | How it works | Layman | PASS | Same chain [1], the two replication ways as a list (same cells of the table), the quorum rule and the "cannot avoid the trade-off over a wide area network" claim. |
| 6 | How it works | Bangla | PASS | Same chain and the same R + W rule: more than N keeps consistency, N or less allows inconsistent reads. Terms in Bangla letters, and English term in parentheses at first use (synchronous replication, quorum). Cites [1] match. |
| 7 | A real-life example | Layman | PASS | Same example, labelled as the tutorial's own and a simplification. The EC, EL, PC, PA sides are kept. |
| 8 | A real-life example | Bangla | FAIL | "Asia" and "Europe" are place names that stay in English letters with Bangla suffixes (Asia-তে, Europe-এর, Asia-র). They are not acronyms, product names or commands. Common words are written in Bangla letters (এশিয়া, ইউরোপ). The rest PASS. |
| 9 | Trade-offs | Layman | PASS | The table is a list. All four labels, the systems, "as first built", the "2012 view" hedge, the two details, the Cassandra study (four times or more) and the last sentence are kept. Cite [1]. |
| 10 | Trade-offs | Bangla | FAIL | (a) The year is written "২০১২" in Bangla digits. Technical has 2012. (b) "কিছু পরে অ্যাডজাস্ট করা যায় এমন হয়েছে" is hard to read for "some became adjustable later". The meaning is that some systems became adjustable later. The table rows and the numbers PASS. |
| 11 | Common mistakes | Layman | PASS | Three bullets restate Technical, cites [1] match. |
| 12 | Common mistakes | Bangla | FAIL | (a) "কনসিসটেন্সি ও ল্যাটেন্সির মধ্যকার ট্রেড": "ট্রেড" alone means commerce. Technical says "the trade between consistency and latency", and the page term is ট্রেড-অফ. (b) "২০১২" is written in Bangla digits. |
| 13 | What a tester can check | Layman | PASS | Same five ideas and the "tutorial's own advice, not from the paper" note. |
| 14 | What a tester can check | Bangla | PASS | Same five ideas. "দুই দিকেরই সময় মাপুন" is "Time both sides". The note about the tutorial's own advice is kept. |

## Re-check

I fixed each FAIL by editing the Bangla panel only, and read the fixed rows again.

| Block | Section | Voice | Result | After the fix |
|---|---|---|---|---|
| 4 | A real-life example | Bangla | PASS | এশিয়া and ইউরোপ in Bangla letters. All four uses changed. |
| 5 | Trade-offs | Bangla | PASS | "2012 সালের মত" and "পরে কিছু সিস্টেম অ্যাডজাস্ট করা যায় এমন হয়েছে". |
| 6 | Common mistakes | Bangla | PASS | "ট্রেড-অফ" and "2012 সালের একটি লেবেলকে". |

After the fixes I ran the mechanical checks again (Technical equals HEAD, cites, headings, digits) and `node --test tests/voice-source.test.ts tests/course.test.ts` (29 tests, 0 fail).

Round 1 FAILs: 3. Fixed: 3.

Open FAILs: 0
