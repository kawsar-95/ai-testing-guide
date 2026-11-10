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

Open FAILs at the end of the rounds above: 0

## Lighter সহজ English panels (2026-11-10)

The `সহজ English` (Layman) panel of 1 section was rewritten to lower the reading load: `In plain words`. The cognitive-load audit of 2026-11-10 found it as dense in technical terms as the Technical text, or denser, so a reader who switched voice to escape the load met the same terms. The new text keeps to the facts of the Technical text, says a term in plain words or leaves it out when a beginner does not need it, and uses short sentences and lists.

Writer: a `claude -p` session (Claude Sonnet, no tools). Checker: a fresh `claude -p` session (Claude Sonnet, no tools) that did not write the panels, given only the Technical text and the new panel of each section. The Technical text and the Bangla panels did not change. No person has read the new panels yet.

### FAILs

None.

### Table

| Section | Layman | Notes |
|---|---|---|
| In plain words | PASS | Facts, limits, harness names and cites (1, 2, 4, 5, 7) all match the Technical text. The rewording is plain, with no new claims. |

Open FAILs: 0
