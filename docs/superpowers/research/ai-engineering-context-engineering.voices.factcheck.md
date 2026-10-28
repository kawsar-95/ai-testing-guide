# Voice fact-check: Context Engineering (2026-10-28)

Page: `content/ai-engineering/context-engineering.mdx`. I did not write this page or its voices.

Method: I read the 5 `<Voices>` blocks (the "Key words" section has no voices). For each `<Layman>` and `<Bangla>` panel I compared every sentence with the `<Technical>` panel of the same block. FAIL rules: a fact, number, name, example, or cite that Technical does not give; a dropped hedge or warning; a wrong or misleading statement; a Bangla text that puts code or product names in Bangla letters or does not use আপনি. An omission is not a FAIL.

Checks:

- Every `<Cite n>` in Layman and Bangla is cited in Technical of the same block: PASS (block 1: 1, 2; block 2: 1-5; block 3: 1, 3, 4, 5; block 4: 1, 2, 3, 5; block 5: none).
- No heading in a Layman or Bangla panel: PASS.
- Code and product names stay in English in Bangla (`tools`, `system`, `messages`, `usage`, `get_endpoint_spec`, Anthropic, API, endpoint, eval, context rot, attention budget, Compaction): PASS.
- Numbers match: 1,000 to 2,000 tokens, 5 minutes, 300 pages, 40 test plans, 3 examples, 2 endpoints, 1M tokens, 50 turns, turn 2: PASS.

| # | Section | Voice | What the panel says (checked against Technical) | Verdict | Reason |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | Context, context window, working memory [1][2]; the 4 parts that count [2]; context engineering, next step after prompt engineering [1]; "You write a prompt once." | FAIL, fixed | Technical says "Prompt writing is one task" (source: "the discrete task of writing a prompt"). "Once" is a new and stronger claim. |
| 2 | In plain words | Bangla | Same facts; "প্রম্পট আপনি একবার লেখেন" | FAIL, fixed | Same problem as row 1 ("একবার" = "once"). |
| 3 | How it works | Layman | Context rot [2]; attention budget [1]; the position study [5]; guiding rule; parts of the context; token counting; usage; caching order and 5 minutes; three long-task methods | FAIL, fixed | The position study had no 2023 scope (the Technical FAIL of row 10 of the technical report). After the Technical fix, Layman must keep the same scope. Other facts: PASS. |
| 4 | How it works | Bangla | Same facts in Bangla | FAIL, fixed | Same as row 3. Other facts: PASS. "ক্যাশ 5 মিনিট থাকে ... মেয়াদ আবার নতুন হয়" matches "each use refreshes it". |
| 5 | A real-life example | Layman | Same 5 steps, same numbers, "Tutorial's own view" kept | PASS | "Three things" counts the 3 items that Technical lists. |
| 6 | A real-life example | Bangla | Same 5 steps, "টিউটোরিয়ালের নিজের মত" kept | PASS | Same facts. |
| 7 | Common mistakes | Layman | Same 7 mistakes | FAIL, fixed | The "middle" mistake had no 2023 scope (technical row 33). Other items: PASS. |
| 8 | Common mistakes | Bangla | Same 7 mistakes; quoted mistake "তাই সব পাঠাও" | FAIL, fixed | Same scope problem as row 7. Also "পাঠাও" is the তুমি form; the page addresses the reader with আপনি. |
| 9 | What a tester can check | Layman | Same 6 checks, marked "the tutorial's own advice" | PASS | Same checks. "the summary or the notes" restates "compaction or notes". |
| 10 | What a tester can check | Bangla | Same 6 checks, marked "টিউটোরিয়ালের নিজের পরামর্শ" | PASS | Same checks. |

## Re-check (after the fixes)

| # | Changed text | Verdict | Reason |
|---|---|---|---|
| 1 | Layman: "Writing a prompt is one task. But you do context engineering again each time ..." | PASS | Same as Technical "Prompt writing is one task." |
| 2 | Bangla: "প্রম্পট লেখা একটা আলাদা কাজ। কিন্তু ..." | PASS | "Writing a prompt is a separate task." Same as Technical. |
| 3 | Layman: "A 2023 study looked at the models of that time. They often did best ... They often did worse ... The study did not test current models." | PASS | Same facts and scope as the fixed Technical text, cite [5]. |
| 4 | Bangla: "2023 সালের একটা গবেষণা সেই সময়ের মডেলগুলো যাচাই করেছিল। ... গবেষণাটা এখনকার মডেল যাচাই করেনি।" | PASS | Same facts and scope, past tense, cite [5]. |
| 7 | Layman: "In a 2023 study, models often missed information in the middle of a long context." | PASS | Same as the fixed Technical text. |
| 8 | Bangla: "2023 সালের একটা গবেষণায় লম্বা কনটেক্সটের মাঝখানের তথ্য মডেল প্রায়ই মিস করত" and "তাই সব পাঠান।" | PASS | Same scope; the quoted mistake now uses the আপনি form. |

`node --test tests/voice-source.test.ts tests/ai-engineering.test.ts`: 29 pass, 0 fail.

Open FAILs: 0
