# Voices fact check: How AI Agents Work, What an AI Agent Is

Page: `content/ai-agents/agent-basics.mdx`. Checker: an agent that did not write the voices. Date: 2026-10-28. Each Layman and Bangla panel is checked against the Technical panel of the same section.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | PASS | PASS | Same facts: two parts, agentic harness, workflow vs agent, Anthropic and OpenAI definitions, tools. Cites 1, 2, 4 are all in Technical. |
| How it works | FAIL, fixed | FAIL, fixed | After the Technical fix ("gives the model access to" project files, not "loads"), Layman ("reads") and Bangla ("লোড করে") needed the same change. Layman and Bangla drop the text diagram (no new fact). Six steps and cites 1–3, 5 match. |
| A real-life example | PASS | PASS | Same invented task, workflow vs agent, same five steps in prose, `success`, Esc cancels the running tool call. |
| Common mistakes | PASS | PASS | Same five items; `max_turns`, `max_budget_usd`, `error_max_turns`, `MaxTurnsExceeded` kept. |
| What a tester can check | PASS | PASS | Tutorial advice; no cites in any voice. Same 7 items. |
| Key words | n/a | n/a | No voices (rule). |

## Bangla language

| Check | Verdict |
|---|---|
| Addresses the reader with আপনি (আপনার কোড, লিখুন, করুন) | PASS |
| Product names, code, and terms stay in English (Claude Code, Agent SDK, OpenAI Agents SDK, model, harness, tool call, hook, `max_turns`, `CLAUDE.md`) | PASS |
| Grammar and natural wording | PASS |
| Numbers match Technical (2 parts, 6 steps) | PASS |

Open FAILs: 0
