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

Open FAILs: 0
