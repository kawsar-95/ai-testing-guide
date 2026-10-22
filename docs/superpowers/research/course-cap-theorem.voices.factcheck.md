# Voice fact-check: CAP theorem (round 2, 2026-10-22)

Page: `content/course/cap-theorem.mdx`. I did not write the Layman or Bangla text.

Method: For each `##` block, I compared the `<Layman>` and `<Bangla>` panels with the `<Technical>` panel of the same block. A FAIL is a fact, number, name, example, hedge or cite that Technical does not give, a wrong or unnatural Bangla meaning, a break of the Bangla term style (আপনি, concept words in Bangla letters, acronyms/products/commands in English), or a Layman sentence over 25 words. An omission is not a FAIL.

Mechanical checks (script, all blocks):

- The `<Technical>` body of each block equals the `<Technical>` body of the same section in `git show HEAD:content/course/cap-theorem.mdx`. The Key words section is unchanged. No removed Technical line.
- Every `<Cite n>` in a Layman or Bangla panel is also cited in Technical of the same block.
- No heading in a Layman or Bangla panel. No TODO. No তুমি, তোমা, or তুই-form verb.
- No Layman sentence over 25 words (one false alarm in a bullet label was counted by hand: the sentence has 19 words).

| # | Block | Voice | Check | Verdict | Reason |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | Three letters, Brewer 2000 conjecture, proof, definitions of C, A, P, cite 1 | PASS | Table became a list. Same content. |
| 2 | In plain words | Bangla | Same | PASS | CAP theorem, PODC, Eric Brewer in English. Key terms glossed in parentheses. |
| 3 | When you need it | Layman | Tutorial's own advice, data centers, failover | PASS | No new fact. |
| 4 | When you need it | Bangla | Same | PASS | Natural. |
| 5 | Why you must choose during a partition | Layman | Proof, Brewer view, C+P, C+A, A+P, cites 1, 2 | PASS | Same facts and cites. |
| 6 | Why you must choose during a partition | Bangla | Same | FAIL | "group 1" and "group 2" left in English. "Group" is a common concept word (style rule). Fixed to "গ্রুপ 1-এ", "গ্রুপ 2-তে". |
| 7 | Why "2 of 3" misleads | Layman | Three reasons, 0 to 100 percent, cite 2 | PASS | Same. |
| 8 | Why "2 of 3" misleads | Bangla | Same | PASS | Same facts. "বিরল" for "rare" is right. |
| 9 | Trade-offs | Layman | C and A choices, three steps, timeout, cite 2 | PASS | Same facts. |
| 10 | Trade-offs | Bangla | Same | PASS | Same facts. |
| 11 | A real-life example | Layman | City A and city B, exam answers, "try again later" | PASS | Same. |
| 12 | A real-life example | Bangla | Same | FAIL | "city A", "city B", "city-র" left in English (common concept word). Also "সে" for the platform. Fixed to "শহর A-র", "শহর B-র", "দুই শহরের" and "এটি". "try again later" stays as the quoted message. |
| 13 | Common mistakes | Layman | 3 mistakes, cites 2, 1 | PASS | The sentence with 26 counted words has two parts (bullet label plus a 19-word sentence). |
| 14 | Common mistakes | Bangla | Same | FAIL | `"যেকোনো 2টি বেছে নাও"` uses the তুমি-form imperative "নাও". The reader must be addressed with আপনি. Fixed to "বেছে নিন". |
| 15 | What a tester can check | Layman | 3 test ideas | PASS | Same. |
| 16 | What a tester can check | Bangla | Same | PASS | Same. |

Re-check (rows 6, 12, 14, after the edit): the three Bangla texts now say "গ্রুপ 1-এ ... গ্রুপ 2-তে", "শহর A-র ... শহর B-র ... দুই শহরের", and "বেছে নিন". The Technical meaning is the same. The grep for তুমি-form verbs and for the words "city" and "group" in Bangla lines finds none. PASS.

FAILs found: 3. FAILs fixed: 3.

Open FAILs: 0
