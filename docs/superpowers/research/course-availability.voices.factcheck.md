# Voice fact-check: Availability (round 2, 2026-10-22)

Page: `content/course/availability.mdx`. I did not write the Layman or Bangla text.

Method: For each `##` block, I compared the `<Layman>` and `<Bangla>` panels with the `<Technical>` panel of the same block. A FAIL is a fact, number, name, example, hedge or cite that Technical does not give, a wrong or unnatural Bangla meaning, a break of the Bangla term style (আপনি, concept words in Bangla letters, acronyms/products/commands in English), or a Layman sentence over 25 words. An omission is not a FAIL.

Mechanical checks (script, all blocks):

- The `<Technical>` body of each block equals the `<Technical>` body of the same section in `git show HEAD:content/course/availability.mdx`. The Key words section is unchanged. No removed Technical line.
- Every `<Cite n>` in a Layman or Bangla panel is also cited in Technical of the same block.
- No heading in a Layman or Bangla panel. No TODO. No তুমি, তোমা, or তুই-form verb.
- No Layman sentence over 25 words (one false alarm in a bullet label was counted by hand: the sentence has 19 words).

| # | Block | Voice | Check | Verdict | Reason |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | Nines, time-based 52.56 min, request-based, 525,600 minutes, SLI/SLO/SLA, cites 1, 2 | PASS | The text block of numbers became a list. Values the same. |
| 2 | In plain words | Bangla | Same | PASS | SLI, SLO, SLA, Google stay English. "নাইন" (nines) is glossed. |
| 3 | When you need it | Layman | Not 100%, 100 times cost, floor and ceiling, cites 2, 1 | PASS | Same hedges ("probably", "usually"). |
| 4 | When you need it | Bangla | Same | PASS | "100 গুণ" same as "100 times". |
| 5 | A real-life example | Layman | SLO 99.9%, error budget, EC2 99.99%/99.5%, credit tiers 10/30/100%, cites 1, 3 | PASS | All numbers and tiers the same. |
| 6 | A real-life example | Bangla | Same | PASS | Tiers 99.99/99.0/95.0 and credits 10/30/100 the same. "commercially reasonable efforts" quoted. |
| 7 | Common mistakes | Layman | 4 mistakes, 99.9% x 99.9% = 0.998001, cites 2, 3 | PASS | The sentence is 19 words (the script counted the bullet label). |
| 8 | Common mistakes | Bangla | Same | PASS | Arithmetic the same. |
| 9 | What a tester can check | Layman | 5 test ideas | PASS | Same ideas. |
| 10 | What a tester can check | Bangla | Same | PASS | Natural, আপনি form. |

Language summary: the Bangla text is natural. Concept words are in Bangla letters (ইউজার, রিকুয়েস্ট, ডাউনটাইম, ডিপেন্ডেন্সি). Acronyms, Google, Amazon, AWS, EC2 are in English.

Re-check: no FAIL found, no edit made.

FAILs found: 0. FAILs fixed: 0.

Open FAILs: 0
