# Voices fact check: How AI Agents Work, The LLM Decides

Page: `content/ai-agents/llm-decides.mdx`. Checker: an agent that did not write the voices. Date: 2026-10-28. Each Layman and Bangla panel is checked against the Technical panel of the same section.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | PASS | PASS | Same facts (decision from request and description, `auto`, tool when not in context, text/tools/both, `tool_use` and `tool_result`, loop ends with no tool calls). Cites 1 and 6 are in Technical. |
| How it works | FAIL, fixed | FAIL, fixed | (a) Both said the thinking block shows "only" when thinking is on; Technical was fixed to add that thinking is on by default on many models, so both were updated. (b) Both put "think between tool calls" under adaptive thinking; Technical gives it as interleaved thinking. Fixed: "With interleaved thinking, ..." / "Interleaved thinking-এ ...". Layman and Bangla name only Opus 5.5 and Sonnet 5.5 ("such as" / "যেমন") of the 4 models: no lost key fact. All 7 stop reasons and 4 `tool_choice` values match. Cites 1–6 are in Technical. |
| A real-life example | FAIL, fixed | FAIL, fixed | "In one run" contradicted "the same prompt 50 times" (same fix as Technical: "In another test" / "আরেকটা টেস্টে"). 50, 200 OK, `http_get` match. Says invented. |
| Common mistakes | PASS | PASS | Same 7 items. Cites 1–5 are in Technical. |
| What a tester can check | PASS | PASS | Tutorial advice; no cites in any voice. Same 7 items, "20 to 50" matches. |
| Key words | n/a | n/a | No voices (rule). |

## Bangla language

| Check | Verdict |
|---|---|
| Addresses the reader with আপনি (আপনার কোড, চালান, করুন, আশা করবেন না) | PASS |
| Product names, code, and terms stay in English (Claude Opus 5.5, Agent SDK, `tool_choice`, `stop_reason`, `tool_use`, `tool_result`, `max_tokens`, thinking block, adaptive thinking, interleaved thinking, temperature) | PASS |
| Grammar and natural wording | PASS |
| Numbers match Technical (400, 0, 50, 200, 20 to 50) | PASS |

Open FAILs: 0
