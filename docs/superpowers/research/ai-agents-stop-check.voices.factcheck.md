# Voices fact check: How AI Agents Work, The Stop Check

Page: `content/ai-agents/stop-check.mdx`. Checker: an agent that did not write the voices. Date: 2026-10-28. Each Layman and Bangla panel is checked against the Technical panel of the same section.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | FAIL, fixed | FAIL, fixed | After the Technical fix ("Anthropic notes that agents often also have stopping conditions", S7), both panels needed the same change. Fixed. Cites 1, 2, 4, 5, 7 are in Technical. |
| How it works | FAIL, fixed | FAIL, fixed | After the Technical fixes (CLI: no default only for `--max-turns`; OpenAI default 10 with cite 8), both lists needed the same change. Fixed. Layman and Bangla drop the text diagram and use a list for the table (allowed). Numbers (1000, 1.0.6, 8, 10) match. |
| A real-life example | PASS | PASS | Same 3 runs, flags (20, 3.00), subtypes, and `Stop` hook. |
| Common mistakes | FAIL, fixed | FAIL, fixed | "No limit at all" item changed in line with Technical (CLI default only for `--max-turns`). Other items match; `pause_turn` default 10 matches. |
| What a tester can check | PASS | PASS | Tutorial advice; no cites. Same 8 items. |
| Key words | n/a | n/a | No voices (rule). |

## Bangla language

| Check | Verdict |
|---|---|
| Addresses the reader with আপনি (দিন, দেখুন, আশা করুন, দেবেন না) | PASS |
| Product names, code, flags, and terms stay in English (Claude Agent SDK, LangGraph, `max_turns`, `--max-turns`, `subtype`, `Stop` hook, `pause_turn`, turn, budget) | PASS |
| Grammar and natural wording | PASS |
| Numbers match Technical (20, 3.00, 1000, 1.0.6, 8, 10, N + 1) | PASS |

Open FAILs: 0
