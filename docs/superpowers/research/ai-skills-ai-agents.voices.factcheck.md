# Voices fact check: AI Skills, AI Agents

Each Layman and Bangla panel was compared with the Technical panel of the same block (6 blocks, 12 panels). `## Key words` has no voices.

| Block | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | PASS | PASS | Same facts: agent definition, no tools = text only, tool abilities, ReAct (2022) and outside sources, Claude Code in the terminal, the "fix the failing tests" goal. Cites 2, 1, 5, 1, all in Technical. The link to `/foundations/how-claude-code-works/` is only in Technical; it is a link, not a fact |
| How it works | PASS | PASS | Same three phases, same 4 loop steps, client and server tools with `stop_reason: "tool_use"`, `tool_use`, `tool_result`, the 5 controls. The text diagram becomes one prose sentence with the same content. "Both have no limit by default" kept ("neither has a limit", "ডিফল্টভাবে কোনোটারই সীমা নেই"). Cites 1, 3, 4, 6, all in Technical. The Hooks link is only in Technical |
| How a tester uses it | PASS | PASS | Same 4 uses and the same tip. Layman and Bangla say "structured data" and drop "from the accessibility tree": a simplification; the cited fact (structured data, no vision model) stays. The tip is a plain paragraph, marked as the tutorial's own advice, no cite. Cites 1, 7, 2, 1 |
| Tools to try | PASS | PASS | Table becomes a list with the same 4 tools and facts; the install command is unchanged. Cites 1, 2, 4, 7 |
| Common mistakes | PASS | PASS | Same 5 mistakes and fixes. Cites 3, 9, 3, 8, 1 |
| How to start | PASS | PASS | Same 5 steps; Plan mode and `.claude/settings.json` facts unchanged. Cite 1. The Settings link is only in Technical |

Checks done:
- No fact, number, name, example, or cite that Technical of the same block lacks. Each `<Cite n>` in Layman and Bangla uses an `n` that Technical of the same block cites.
- No lost or changed fact, except the accessibility-tree detail in "How a tester uses it", judged a simplification (the cited claim stays).
- Bangla keeps Claude Code, Agent SDK, ReAct, Playwright MCP, MCP, API, SDK, CI, IDE, Python, TypeScript, `stop_reason`, `tool_use`, `tool_result`, `max_turns`, `max_budget_usd`, `allowed_tools`, `disallowed_tools`, `Bash(npm *)`, `PreToolUse`, `bypassPermissions`, `-p`, `--output-format json`, `.claude/settings.json`, `npm test`, and the install command in English.
- Bangla uses আপনি; no তুমি, তোমার, তুই, or তোর (grep).
- The copied 9-word run "tools that read files, run commands, or edit code" is also in the Layman "In plain words" panel. It is a copy issue, not a voice issue; it is counted in `ai-skills-ai-agents.factcheck.md` (row C1, fixed in Round 2).

Round 1 open FAILs: 0

## Round 2 (2026-10-28)

I compared the changed sentences in each panel with Technical of the same block.

| Block | Changed text | Verdict | Note |
|---|---|---|---|
| In plain words | Technical: "choosing its own next steps and using tools ... open files, run shell commands, or change code"; Layman: "It plans its own steps. It calls tools, for example tools that open files, run shell commands, or change code"; Bangla: "ফাইল খোলা, শেল কমান্ড চালানো বা কোড বদলানোর টুল" | PASS | All 3 panels give the same 3 tool examples and use cite 2. Layman's "plans its own steps" means the same as "choosing its own next steps" |
| How it works | Technical only: "three phases: gather context, then take action, then verify results" | PASS | Layman ("It gathers context. It takes action. It verifies the results.") and Bangla (the 3 terms in English in brackets) still give the same 3 phases and cite 1 |
| How a tester uses it | Technical and Layman: "call `claude -p` and add `--output-format json`"; Bangla unchanged: "CLI-কে `-p` আর `--output-format json` দিয়ে চালান" | PASS | The fact is the same in all 3 panels: run the CLI with `-p` and `--output-format json`, cite 2. Bangla says "the CLI" and not `claude`. That is not a change of fact |
| Tools to try | Agent SDK row: "It gives you the tools, the (agent) loop, and the context handling of Claude Code"; Bangla: "Claude Code-এর টুল, agent loop আর context handling দেয়" | PASS | All 3 panels: same 3 parts, Python and TypeScript, cite 2. Bangla keeps "agent loop" and "context handling" in English |

Checks done (Round 2):
- The changed panels add no new fact and lose no fact. Each cite uses an `n` that Technical of the same block also cites.
- Bangla keeps `-p`, `--output-format json`, agent loop, context handling, Python, and TypeScript in English.
- A grep found no তুমি, তোমার, তুই, or তোর.
- The new Key words row (cite 10) has no voices, so it is checked only in the main report.

Open FAILs: 0
