# Voice fact-check: ACID and BASE (round 2, 2026-10-22)

Page: `content/course/acid-base.mdx`. I did not write the Layman or Bangla text.

Method: For each `##` block, I compared the `<Layman>` and `<Bangla>` panels with the `<Technical>` panel of the same block. A FAIL is a fact, number, name, example, hedge or cite that Technical does not give, a wrong or unnatural Bangla meaning, a break of the Bangla term style (আপনি, concept words in Bangla letters, acronyms/products/commands in English), or a Layman sentence over 25 words. An omission is not a FAIL.

Mechanical checks (script, all blocks):

- The `<Technical>` body of each block equals the `<Technical>` body of the same section in `git show HEAD:content/course/acid-base.mdx`. The Key words section is unchanged. No removed Technical line.
- Every `<Cite n>` in a Layman or Bangla panel is also cited in Technical of the same block.
- No heading in a Layman or Bangla panel. No TODO. No তুমি, তোমা, or তুই-form verb.
- No Layman sentence over 25 words (one false alarm in a bullet label was counted by hand: the sentence has 19 words).

| # | Block | Voice | Check | Verdict | Reason |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | ACID list, transaction, 4 properties, BASE, cites 7, 1, 5, 2, 8 | PASS | Same facts, hedges, and cites. The table became a list. |
| 2 | In plain words | Bangla | Same | PASS | Terms in Bangla letters (ট্রানজেকশন, ডেটাবেস, কনসিসটেন্সি). ACID, BASE, Brewer, "done" stay English. |
| 3 | When you need it | Layman | Question about two copies that disagree | PASS | No new fact. |
| 4 | When you need it | Bangla | Same | PASS | Natural, আপনি form. |
| 5 | How it works | Layman | ROLLBACK, 4 isolation levels, dirty read, Read Committed, WAL, Dynamo, BASE framing, cites 1, 2, 3, 7 | PASS | "Adequate for many applications, but not for all" and "the paper does not use the word BASE" kept. |
| 6 | How it works | Bangla | Same | PASS | `ROLLBACK`, PostgreSQL, Read Committed, Serializable, Dynamo stay English. Meaning is the same. |
| 7 | A real-life example | Layman | Ana 100, Ben 20, 40 credits, counters 118 and 120, shopping cart, cites 8, 7 | PASS | Numbers and names the same. |
| 8 | A real-life example | Bangla | Same | PASS | Numbers the same. "learners online", "add", "remove" are quoted UI text. |
| 9 | Trade-offs | Layman | Brewer, Dynamo result "not a law", last write wins, `synchronous_commit`, cites 8, 7, 4, 6 | PASS | The hedge "tend to" and "their result" kept. |
| 10 | Trade-offs | Bangla | Same | PASS | `synchronous_commit` unchanged. "প্রায়ই" keeps the hedge. |
| 11 | Common mistakes | Layman | 4 mistakes, cites 4, 6, 7, 2 | PASS | "see the list above" is right for the Layman form (it has a list, not a table). |
| 12 | Common mistakes | Bangla | Same | PASS | "উপরের তালিকা" matches the Layman form. |
| 13 | What a tester can check | Layman | 5 test ideas | PASS | Same ideas. |
| 14 | What a tester can check | Bangla | Same | PASS | Natural imperative with আপনি form. |

Notes: no voice on Key words. Language summary: the Bangla text uses আপনি, short sentences, and Bangla letters for concept words.

Re-check: no FAIL found, no edit made.

FAILs found: 0. FAILs fixed: 0.

Open FAILs: 0
