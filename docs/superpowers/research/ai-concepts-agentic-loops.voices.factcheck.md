# Voices fact check: AI Concepts, Agentic Loops

Page: `content/ai-concepts/agentic-loops.mdx`. Checker: an agent that did not write the voices. Date: 2026-10-28. Each Layman and Bangla panel is checked against the Technical panel of the same section.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | PASS | PASS | Same facts (workflow vs agent, 3 phases, blog cycle, end on no tool calls, 2 limits off by default). Cites 1–4 are all in Technical. |
| How it works | PASS | PASS | Steps 1–5, limits, CLI flags, 4 subtypes, `Stop` hook all match. Layman and Bangla drop the text diagram and the table, which is allowed (no new facts). |
| A real-life example | FAIL, fixed | PASS | Layman said a hook "can block forever". Technical says "a condition that never resolves", and the same paragraph gives an 8-continuation cap, so "forever" is wrong. Fixed: "can keep blocking on something that never gets fixed". Numbers (30, 5.00, 8) match. |
| Common mistakes | FAIL, fixed | FAIL, fixed | After the Technical fix (budget overshoot also includes the spend of running subagents, S1), Layman and Bangla needed the same addition. Fixed in both. Layman "Agents cost more" matches Technical "trade cost for autonomy" (no new fact). |
| What a tester can check | PASS | PASS | Tutorial advice; no cites in any voice. Same 8 items. "error exit code" equals "non-zero exit code". |
| Key words | n/a | n/a | No voices (rule). |

## Bangla language

| Check | Verdict |
|---|---|
| Addresses the reader with আপনি (আপনার কোড, দিন, দেখুন, যাচাই করুন) | PASS |
| Product names, code, flags, and terms stay in English (Claude Code, Agent SDK, `max_turns`, `--max-turns`, `subtype`, `Stop` hook, `stop_hook_active`, `npm test`, tool call, turn, budget) | PASS |
| Grammar and natural wording | PASS. The fixed sentence ("…response-এর খরচ, আর চলতে থাকা subagent-গুলো থামার আগে যা খরচ করে, সেটুকু পর্যন্ত সীমা পার হতে পারে।") reads naturally. |
| Numbers match Technical (2, 3, 5 steps, 30, 5.00, 8) | PASS |

Open FAILs: 0
