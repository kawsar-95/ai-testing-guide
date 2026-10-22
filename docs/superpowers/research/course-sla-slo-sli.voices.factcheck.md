# Voice fact-check: SLA, SLO, and SLI (round 2, 2026-10-22)

Page: `content/course/sla-slo-sli.mdx`. I did not write the Layman or Bangla panels.

Method: I compared each `<Layman>` and `<Bangla>` panel with the `<Technical>` panel of the same block, claim by claim. A fact, number, name, example, or cite that Technical does not give is a FAIL. A dropped hedge that changes the meaning is a FAIL. A wrong or misleading Bangla meaning, an unfinished or ungrammatical Bangla sentence, a mistranslated term, or a break of the Course Bangla style is a FAIL. The style is: আপনি (never তুমি), common concept words in Bangla letters, and acronyms, product names, commands, and identifiers in English. A Layman sentence of more than 25 words (words counted with a script, cites removed) is a FAIL. An omission that loses no fact is not a FAIL. For each `<Cite n>` in a voice panel I checked that Technical of the same block cites it (script: no extra cite in any block). The Technical claims are checked in the Technical fact-check report, not here.

Other checks:

- No TODO placeholder, no heading in Layman or Bangla, no `তুমি` form (scripts).
- Technical unchanged: each `<Technical>` body equals the one in `git show HEAD:content/course/sla-slo-sli.mdx` (compared after removing the Voices wrap of both; 0 differing lines).
- `node --test tests/voice-source.test.ts tests/course.test.ts`: 29 pass, 0 fail.
- "Key words" has no voices.

Notes: Sections 1 and 3 Layman turn the Technical table into a list. The facts are the same. Section 3 and section 7 Bangla keep the English term in parentheses at first use where the Bangla word could be unclear (error budget, durability). Section 5 arithmetic checked: 0.5% of 2 million = 10,000; 4,000 / 10,000 = 40%. Section 7: Layman and Bangla drop the callout box and keep its sentence "the tutorial's own advice". PASS.

| # | Section | Voice | What I compared | Round 1 | Reason |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | 3 definitions, quick test, SLA/SLO habit, availability | PASS | Same facts and cites. "carefully defined" dropped (no fact lost). |
| 2 | In plain words | Bangla | same | PASS | Meaning correct. Style OK (ইউজার, সার্ভিস, ল্যাটেন্সি; SLI/SLO/SLA English; "রিবেট (rebate)" at first use). |
| 3 | When you need it | Layman | over- and under-reliance, SLO sets expectations, feature vs reliability loop | PASS | Same facts, cites 1 and 2 in the same places. |
| 4 | When you need it | Bangla | same | PASS | "বেশি ভরসা" and "কম ভরসা" keep the Technical meaning. Hedges kept ("would not know"). |
| 5 | How it works | Layman | indicators, table, percentiles, error budget, policy | FAIL | The last sentence has 27 words ("Common actions are to stop feature launches ... or to move some or all engineering time to reliability work"). The other facts match. |
| 6 | How it works | Bangla | same | FAIL | "ইউজার কীসের যত্ন নেয়" is a word-for-word copy of "what users care about". It is not natural Bangla and reads as "what users look after". Rest is PASS: numbers (50 ms, 5%, 20 times, 99.9%, 3 million, 3,000, 1,500) match. |
| 7 | Why an SLO should not be 100% | Layman | 4 reasons, Chubby, internal SLO | PASS | Same facts and cites. |
| 8 | Why an SLO should not be 100% | Bangla | same | PASS | Same facts. "নাইন (nine)" matches Technical "extra nine". |
| 9 | A real-life example | Layman | SLI, SLO 99.5%, SLA 99%, 2 million, 10,000, 4,000, 40% | PASS | All numbers match. "the tutorial's own" kept. |
| 10 | A real-life example | Bangla | same | PASS | Numbers match. "রোলিং উইন্ডো (rolling window)" at first use. |
| 11 | Common mistakes | Layman | 5 mistakes | PASS | Identical facts and cites (1, 2, 1, 1/2, 1). |
| 12 | Common mistakes | Bangla | same | PASS | The workbook "allows it as a first step" is kept. |
| 13 | What a tester can check | Layman | 3 tips | PASS | Same tips. No cites. |
| 14 | What a tester can check | Bangla | same | PASS | "বিকৃত (malformed)" is acceptable. No new fact. |

Findings in round 1: 2 FAIL (row 5, row 6).

## Re-check

I fixed the two rows by editing only the Layman and Bangla panels.

| # | Fix | Result |
|---|---|---|
| 5 | Layman split the sentence: "Common actions are to stop feature launches until the service is back within its SLO. Another is to move some or all engineering time to reliability work <Cite n={2} />." Longest sentence is now under 25 words. Same facts and cite. | PASS |
| 6 | Bangla now reads "ইউজারের কাছে কোনটি গুরুত্বপূর্ণ, সেখান থেকে শুরু করুন। যা মাপা সহজ, সেখান থেকে শুরু করবেন না" ("what matters to the user"). Meaning matches Technical. | PASS |

Open FAILs: 0
