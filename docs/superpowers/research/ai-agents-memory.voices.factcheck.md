# Voices fact check: How AI Agents Work, Memory

Page: `content/ai-agents/memory.mdx`. Checker: an agent that did not write the voices. Date: 2026-10-28. Each Layman and Bangla panel is checked against the Technical panel of the same section.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | PASS | PASS | Same facts: two kinds of memory, context window as "working memory", not training data, window does not reset, accumulation, memory tool, LangGraph stores, link to Agent Memory. Cites 1, 2, 3, 5 are all in Technical. |
| How it works | PASS | PASS | Same facts and numbers (1M tokens, 400 error, 200 lines, 25KB, the 6 commands). Layman and Bangla turn the table into a list (no new fact). "on your side" equals "client-side". Cites 1–5 all in Technical. |
| A real-life example | PASS | PASS | Both say the example is invented. They drop the text diagram (no fact lost: the prose tells the same steps). Cites 2, 3, 4 are in Technical. |
| Common mistakes | PASS | PASS | Same 6 items, same example path `/memories/../../secrets.env`. Cites 1–5 in Technical. |
| What a tester can check | PASS | PASS | Tutorial advice, no cites in any voice. Same 7 items. |
| Key words | n/a | n/a | No voices (rule). |

## Bangla language

| Check | Verdict |
|---|---|
| Addresses the reader with আপনি (আপনার application, রাখুন, দেখুন, করুন) | PASS |
| Product names, code, and terms stay in English (Claude Code, Agent SDK, LangGraph, CLAUDE.md, `MEMORY.md`, `/memories`, `PreToolUse`, context window, compaction, checkpoint, store, namespace) | PASS |
| Grammar and natural wording | PASS |
| Numbers match Technical (2 kinds, 1M, 400, 200 lines, 25KB, 7 types) | PASS |

## Fixes

None in the voices. The Technical fix in "In plain words" (a reworded memory tool sentence, same meaning) needs no change in Layman or Bangla.

Open FAILs: 0
