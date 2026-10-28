# Voice fact-check: Human-in-the-Loop

Page: `content/ai-engineering/human-in-the-loop.mdx`. I did not write this page or its voices. Checked 2026-10-28.

Method: I read the 5 `<Voices>` blocks (the "Key words" section has no voices). For each `<Layman>` and `<Bangla>` panel I compared every sentence with the `<Technical>` panel of the same block. FAIL rules: a fact, number, name, example, or cite that Technical does not give; a lost warning or hedge; a wrong statement; a Bangla panel that puts code or product names in Bangla letters or does not use আপনি.

Automated checks (script):

- Every `<Cite n>` in Layman and Bangla is cited in Technical of the same block (plain words 1, 4, 5; how it works 1, 2, 3, 5; example 2, 4; mistakes 1 to 5; tester none): PASS.
- No heading in Layman or Bangla, no তুমি in the reader address: PASS.
- No Layman sentence over 25 words: PASS.

| # | Section | Layman | Bangla | Notes |
|---|---|---|---|---|
| 1 | In plain words | PASS | PASS | Same definition, same 3 cited claims, same 3 forms. The table becomes a list. "Tutorial's own grouping" kept in both. |
| 2 | How it works | PASS | PASS | Interrupt, persistence, `Command`, `thread_id`, the run-twice rule, idempotent side effects, allow/ask/deny order, OWASP placement, NIST monitoring. The sentence that describes the code example (pause before a refund, route to "refund" or "cancel") restates the Technical code; no new fact. "Tutorial's own view" kept in both. |
| 3 | A real-life example | PASS | PASS | The 4 rules become a list with the same numbers (20 USD, 2 %). The duplicate-note bug and the fix are the same. |
| 4 | Common mistakes | PASS | PASS | 6 items, same cites. The quoted prompt in Bangla ("জিজ্ঞেস করো") is a quote of a prompt to the model, not the reader address. |
| 5 | What a tester can check | PASS | PASS | Same 6 ideas, marked as the tutorial's own advice. The quoted request to the agent ("বাদ দাও") is a quote, not the reader address. |

Bangla style: LangGraph, Claude Code, OWASP, NIST, `Command`, `interrupt()`, `thread_id`, checkpointer, idempotent, allow/ask/deny stay in English. The reader is addressed with আপনি ("সরিয়ে দিন", "জিজ্ঞেস করুন", "দেখুন"). PASS.

FAILs found: 0. Fixed: 0.

Open FAILs: 0
