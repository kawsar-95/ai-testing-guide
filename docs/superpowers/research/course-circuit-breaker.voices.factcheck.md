# Voice fact-check: Circuit breaker (round 2, 2026-10-22)

Page: `content/course/circuit-breaker.mdx`. I did not write the Layman or Bangla text.

Method: For each `##` block, I compared the `<Layman>` and `<Bangla>` panels with the `<Technical>` panel of the same block. A FAIL is a fact, number, name, example, hedge or cite that Technical does not give, a wrong or unnatural Bangla meaning, a break of the Bangla term style (আপনি, concept words in Bangla letters, acronyms/products/commands in English), or a Layman sentence over 25 words. An omission is not a FAIL.

Mechanical checks (script, all blocks):

- The `<Technical>` body of each block equals the `<Technical>` body of the same section in `git show HEAD:content/course/circuit-breaker.mdx`. The Key words section is unchanged. No removed Technical line.
- Every `<Cite n>` in a Layman or Bangla panel is also cited in Technical of the same block.
- No heading in a Layman or Bangla panel. No TODO. No তুমি, তোমা, or তুই-form verb.
- No Layman sentence over 25 words (one false alarm in a bullet label was counted by hand: the sentence has 19 words).

| # | Block | Voice | Check | Verdict | Reason |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | Pattern, threshold, retry, transient fault, time-out, cites 1, 2 | PASS | Same. |
| 2 | In plain words | Bangla | Same | PASS | Concept words in Bangla letters; AWS, Circuit Breaker in English. |
| 3 | When you need it | Layman | Azure 3 cases, AWS signs, cites 1, 2 | PASS | Same. |
| 4 | When you need it | Bangla | Same | PASS | Same. |
| 5 | How it works | Layman | Three states, 4 transitions (from the drawing), table, AWS words, cites 1, 2 | PASS | The drawing became a list of transitions. Same content. |
| 6 | How it works | Bangla | Same | PASS | State names Closed, Open, Half-Open stay English. |
| 7 | Thresholds and time-outs | Layman | Failure threshold, success count, time-out, default value, administrator, expiration time, cites 1, 2 | PASS | Same. |
| 8 | Thresholds and time-outs | Bangla | Same | FAIL | "হাতে হাত দিয়ে" is a wrong idiom for "by hand" (it means "hand in hand"). Fixed to "ম্যানুয়ালি". |
| 9 | Circuit breaker and retry | Layman | Retry vs breaker, backoff, expiry time, cites 1, 2 | PASS | Same. |
| 10 | Circuit breaker and retry | Bangla | Same | PASS | Same. |
| 11 | When not to use it | Layman | 6 cases, cite 1 | PASS | Same. |
| 12 | When not to use it | Bangla | Same | PASS | Same. |
| 13 | A real-life example | Layman | Order and payment service, "Payments are busy. Try again soon." | PASS | Same. |
| 14 | A real-life example | Bangla | Same | PASS | The message is quoted UI text, so it stays English. |
| 15 | Common mistakes | Layman | 4 mistakes, cite 1 | PASS | Same. |
| 16 | Common mistakes | Bangla | Same | PASS | Same. |
| 17 | What a tester can check | Layman | 5 test ideas | PASS | Same. |
| 18 | What a tester can check | Bangla | Same | PASS | Same. |

Readability edits (not counted as FAIL, the old text was grammatical but clumsy): in block 7, "পরের কলগুলোর তা সরাতে থাকা উচিত নয়" became "পরের কলগুলোর সেটি বারবার সরানো উচিত নয়". In block 10, "রিট্রাইয়ের লজিকের থামা উচিত" became "রিট্রাইয়ের লজিক থেমে যাওয়া উচিত".

Re-check (row 8): the Bangla bullet now reads "অ্যাডমিনিস্ট্রেটরের ম্যানুয়ালি সার্কিট খুলতে বা বন্ধ করতে পারা উচিত", the same as "An administrator should be able to open or close a circuit by hand". PASS.

FAILs found: 1. FAILs fixed: 1.

Open FAILs: 0
