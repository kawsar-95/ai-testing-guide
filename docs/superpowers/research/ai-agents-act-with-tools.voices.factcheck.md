# Voices fact check: How AI Agents Work, Act with Tools

Page: `content/ai-agents/act-with-tools.mdx`. Checker: an agent that did not write the voices. Date: 2026-10-28. Each Layman and Bangla panel is checked against the Technical panel of the same section.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | PASS | PASS | Same facts: function calling, structured call, client vs server tools, hosted tools, SDK tool list, MCP, memory tool. Cites 1, 4, 6 are in Technical. |
| How it works | FAIL, fixed | FAIL, fixed | After the Technical fix (read-only tools "can run" at the same time, S4), Layman and Bangla needed the same change. Fixed ("can run", "চালাতে পারে"). Layman and Bangla drop the text diagram (allowed). Numbers (2 to 3 retries) match. |
| A real-life example | PASS | PASS | Same 4 tools (list instead of table), same HTTP 500 and "Retry after 60 seconds" message, same approval on `post_comment`. |
| Common mistakes | PASS | PASS | Same 8 items, cites 1–7 match Technical. |
| What a tester can check | PASS | PASS | Tutorial advice; no cites. Same 8 items. |
| Key words | n/a | n/a | No voices (rule). |

## Bangla language

| Check | Verdict |
|---|---|
| Addresses the reader with আপনি (আপনার application, পাঠান, দেখুন) | PASS |
| Product names, code, and terms stay in English (Claude API, Agent SDK, MCP, `tool_use`, `tool_result`, `is_error`, tool, schema) | PASS |
| Grammar and natural wording | PASS |
| Numbers match Technical (2 to 3, HTTP 500, 60 seconds, four tools) | PASS |

Open FAILs at the end of the rounds above: 0

## Lighter সহজ English panels (2026-11-10)

The `সহজ English` (Layman) panel of 1 section was rewritten to lower the reading load: `In plain words`. The cognitive-load audit of 2026-11-10 found it as dense in technical terms as the Technical text, or denser, so a reader who switched voice to escape the load met the same terms. The new text keeps to the facts of the Technical text, says a term in plain words or leaves it out when a beginner does not need it, and uses short sentences and lists.

Writer: a `claude -p` session (Claude Sonnet, no tools). Checker: a fresh `claude -p` session (Claude Sonnet, no tools) that did not write the panels, given only the Technical text and the new panel of each section. The Technical text and the Bangla panels did not change. No person has read the new panels yet.

### FAILs

None.

### Table

| Section | Layman | Notes |
|---|---|---|
| In plain words | PASS | Every claim, cite (1, 4, 6) and code name matches the Technical text. Omitted tool names and examples are not a FAIL. |

Open FAILs: 0
