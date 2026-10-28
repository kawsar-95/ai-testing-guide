# Fact check: AI Skills, AI Agents

Sources fetched fresh on 2026-10-28 with WebFetch. S1 = Claude Code docs "How Claude Code works", S2 = "Agent SDK overview", S3 = "How the agent loop works", S4 = Claude Platform docs "Tool use with Claude", S5 = arXiv 2210.03629 (ReAct, abstract page), S6 = Claude Code docs "Create custom subagents", S7 = github.com/microsoft/playwright-mcp README, S8 = Claude Code docs "Connect Claude Code to tools via MCP", S9 = Claude Code docs "Best practices for Claude Code". Extra page read for row 33 only: code.claude.com/docs/en/security (not in `page.sources`). The quotes below come from these fetches, not from the research notes.

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: a chat model answers and stops; an agent picks steps, uses tools, goes on until the goal is met | none | PASS | Framing in the tutorial's own words; the facts are cited in the sections below |
| 2 | An agent finishes a task by planning its own steps and calling tools that read files, run commands, edit code | S2 | PASS (fact) | "completes a task by planning its own steps and calling tools". See copy check row C1 |
| 3 | With no tools a model can only reply with text; with tools it can read code, edit files, run commands, search the web | S1 | PASS | "Without tools, Claude can only respond with text." / "read your code, edit files, run commands, search the web" |
| 4 | ReAct (2022): the model writes reasoning steps and actions in turns | S5 | PASS | "reasoning traces and task-specific actions in an interleaved manner"; submitted 6 Oct 2022 |
| 5 | The actions let it work with outside sources such as a knowledge base | S5 | PASS | "interface with external sources, such as knowledge bases or environments" |
| 6 | Claude Code is an agentic assistant that runs in the terminal | S1 | PASS | "Claude Code is an agentic assistant that runs in your terminal." |
| 7 | Given "fix the failing tests", it decides which commands to run and files to read | S1 | PASS | "When you say "fix the failing tests," Claude might:" and "Claude chooses which tools to use" |
| 8 | Three phases: gather context, take action, verify results; tools in all three | S1 | PASS | "three phases: gather context, take action, and verify results" / "Claude uses tools throughout" |
| 9 | Loop step 1: prompt, system prompt, tool definitions, conversation so far | S3 | PASS | "along with the system prompt, tool definitions, and conversation history" |
| 10 | Step 2: text, one or more tool calls, or both | S3 | PASS | "It may respond with text, request one or more tool calls, or both." |
| 11 | Step 3: the SDK runs each tool and sends results back | S3 | PASS | "The SDK runs each requested tool and collects the results." |
| 12 | Steps 2 and 3 repeat; one cycle is one turn; ends with a response with no tool calls | S3 | PASS | "Each full cycle is one turn." / "until it produces a response with no tool calls" |
| 13 | Text diagram of the loop | S3 | PASS | Restates rows 9 to 12; no new fact |
| 14 | Client tool: `stop_reason: "tool_use"`, `tool_use` block, your code runs it, you send `tool_result` | S4 | PASS | "Claude responds with `stop_reason: "tool_use"` and one or more `tool_use` blocks." |
| 15 | A server tool such as web search runs on Anthropic's side | S4 | PASS | "Server tools (such as `web_search`...) run on Anthropic's infrastructure" |
| 16 | `max_turns` caps tool-use turns, `max_budget_usd` caps spend, both no limit by default | S3 | PASS | Table: "Maximum tool-use round trips — No limit"; "Estimated spend at which the loop stops — No limit" |
| 17 | `allowed_tools` approves with no prompt, `disallowed_tools` blocks, `Bash(npm *)` allows only some commands | S3 | PASS | "auto-approves listed tools" / "blocks listed tools" / "rules like `"Bash(npm *)"` to allow only specific commands" |
| 18 | A `PreToolUse` hook can reject a tool call before it runs | S3 | PASS | "a `PreToolUse` hook that rejects a tool call prevents it from executing" |
| 19 | A subagent has its own context window, system prompt, tool access | S6 | PASS | "runs in its own context window with a custom system prompt, specific tool access" |
| 20 | You can interrupt at any point and steer | S1 | PASS | "You can interrupt at any point to steer Claude in a different direction" |
| 21 | Triage steps: run suite, read error, search source, read, edit, run tests again | S1 | PASS | Numbered list: "Run the test suite..." to "Run the tests again to verify". "You review the diff" is the tutorial's advice |
| 22 | Playwright MCP gives browser tools, reads the page as structured data from the accessibility tree, needs no vision model | S7 | PASS | "No vision models needed, operates purely on structured data." / "Uses Playwright's accessibility tree" |
| 23 | Signup flow on `https://staging.example.com` | none | PASS | Tutorial's example; example.com domain |
| 24 | Same loop runs in CI: CLI with `-p` and `--output-format json` | S2 | PASS | "run the CLI as a subprocess with the `-p` flag and `--output-format json`" |
| 25 | Subagent tool calls stay out of main context; you get a summary | S1 | PASS | "the subagent's tool calls stay out of your context, and Claude gets back a summary" |
| 26 | Tools table: Claude Code in terminal, IDE, or CI; three phases | S1 | PASS | Interfaces: "terminal ... IDE extensions ... CI/CD pipelines"; phases as row 8 |
| 27 | Tools table: Agent SDK has the same tools, agent loop, context management, in Python and TypeScript | S2 | PASS (fact) | "same tools, agent loop, and context management that power Claude Code, programmable in Python and TypeScript". See copy check row C2 |
| 28 | Tools table: client tool returns `tool_result` | S4 | PASS | "Your code runs the operation and sends back a `tool_result`." |
| 29 | Tools table: `claude mcp add playwright npx @playwright/mcp@latest` | S7 | PASS | README: "claude mcp add playwright npx @playwright/mcp@latest" (exact) |
| 30 | With no limits the loop runs until the agent finishes; open-ended prompts can run long | S3 | PASS | "Without limits, the loop runs until Claude finishes on its own ... can run long on open-ended prompts" |
| 31 | An agent stops when the work looks done; fix: ask for the command it ran and its output | S9 | PASS | "Claude stops when the work looks done." / "ask Claude for evidence: the command it ran and its output" |
| 32 | `bypassPermissions` only for isolated environments | S3 | PASS | "Use only in isolated environments where the agent's actions can't affect systems you care about" |
| 33 | Servers that fetch outside content can bring prompt injection risk | S8 | PASS | "Servers that fetch external content can expose you to prompt injection risk." |
| 34 | Checkpoints undo file edits only; databases, APIs, deployments cannot be rolled back that way | S1 | PASS | "Actions that affect remote systems (databases, APIs, deployments) can't be checkpointed." |
| 35 | Plan mode explores and proposes a plan, no edits to source files | S1 | PASS | "Plan: Claude explores and proposes a plan without editing your source files" |
| 36 | Allow safe commands such as `npm test` in `.claude/settings.json` | S1 | PASS | "allow specific commands in `.claude/settings.json` ... like `npm test` or `git status`" |
| 37 | How to start steps 2, 4, 5; Common mistakes "Fix:" lines without a cite | none | PASS | The tutorial's own advice, no source fact |
| 38 | Key words: Agent | S2 | PASS | As row 2 |
| 39 | Key words: Agentic loop | S1 | PASS | As row 8; S1 diagram: "repeating until task complete" |
| 40 | Key words: Turn | S3 | PASS | "A turn is one round trip inside the loop" |
| 41 | Key words: Tool use, run by an application or Anthropic | S4 | PASS | "your application runs (client tools) or that Anthropic runs (server tools)" |
| 42 | Key words: Subagent | S6 | PASS | As row 19 |
| 43 | Key words: Prompt injection = "Instructions hidden in outside content that try to steer the agent" | S8 | FAIL | S8 only names the risk ("can expose you to prompt injection risk"); it gives no definition. The definition is on code.claude.com/docs/en/security: "a technique where an attacker attempts to override or manipulate an AI assistant's instructions". Mis-cite |

Other checks:

| # | Check | Verdict | Note |
|---|---|---|---|
| C1 | No copied text: "tools that read files, run commands, or edit code" | FAIL | Technical (line 28) and Layman (line 37) of "In plain words" share a 9-word run with S2: "calling tools that read files, run commands, or edit code" |
| C2 | No copied text: "the same tools, agent loop, and context management" | FAIL | Tools table, Agent SDK row (line 185) shares an 8-word run with S2 |
| C3 | No copied text: other sentences | PASS | Longest other runs: "the command it ran and its output" (7, S9), "by planning its own steps and calling tools" (7, S2), "stops when the work looks done" (6, S9), "tool calls stay out of your" (6, S1) |
| C4 | Sources are official | PASS | Anthropic docs (code.claude.com, platform.claude.com), the original ReAct paper on arXiv, Microsoft's own GitHub repo. No blog, news, or forum |
| C5 | No prices | PASS | `max_budget_usd` is named, no amount |
| C6 | "Tutorial advice" tip has no cite | PASS | The Callout has no `<Cite>` |
| C7 | Internal links | PASS | `/foundations/how-claude-code-works/`, `/automate/playwright/`, `/automate/headless/`, `/automate/github-actions/`, `/extend/subagents/`, `/extend/hooks/`, `/configure/settings/` are in `scripts/route-map.json`; `/ai-skills/mcp-connectors/` is a slug in `lib/ai-skills/topics.ts` |
| C8 | Code and config syntax | PASS | `claude mcp add ...` (S7), `Bash(npm *)`, `max_turns`, `max_budget_usd`, `allowed_tools`, `disallowed_tools`, `PreToolUse`, `bypassPermissions` (S3), `stop_reason`, `tool_use`, `tool_result` (S4), `-p`, `--output-format json` (S2) all match the docs |
| C9 | Each source is cited | PASS | S1 to S9 all cited |

Proposed fixes:
- Row 43: add source 10 `{ title: 'Security', publisher: 'Anthropic (Claude Code docs)', url: 'https://code.claude.com/docs/en/security', accessed: '2026-10-28' }` and change the Key words cite to `<Cite n={10} />`. Or reword to "A risk from outside content, for example from a server that fetches web pages" and keep `<Cite n={8} />`.
- C1: reword, for example "calling tools, for example tools that open files, run shell commands, or change code" (Technical and Layman).
- C2: reword, for example "It gives you the tools, the agent loop, and the context handling of Claude Code, in Python and TypeScript".

## Round 2 (2026-10-28)

The writer changed the page after Round 1. I read the current MDX and re-checked each changed sentence. I fetched S10 (code.claude.com/docs/en/security) fresh on 2026-10-28. It is Anthropic's own Claude Code docs page, so it is official.

| # | Changed text (Technical unless named) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| R2-1 | "a program that gets a task done by choosing its own next steps and using tools, for example tools that open files, run shell commands, or change code" (Technical; Layman and Bangla match) | S2 | PASS | S2: "completes a task by planning its own steps and calling tools". Longest shared run: "its own" (2 words). Closes C1 |
| R2-2 | "The Claude Code loop has three phases: gather context, then take action, then verify results. It uses tools in all three" | S1 | PASS | S1: "three phases: gather context, take action, and verify results". Longest shared run: "three phases: gather context" (4 words) |
| R2-3 | "call `claude -p` and add `--output-format json`" (Technical and Layman; Bangla unchanged: "CLI-কে `-p` আর `--output-format json` দিয়ে চালান") | S2 | PASS | S2: "run the CLI as a subprocess with the `-p` flag and `--output-format json`". `claude` is the CLI command (S1: "start with `claude --model <name>`") |
| R2-4 | Tools table, Agent SDK: "It gives you the tools, the agent loop, and the context handling of Claude Code, in Python and TypeScript" (Layman and Bangla match) | S2 | PASS | S2: "same tools, agent loop, and context management that power Claude Code, programmable in Python and TypeScript". Longest shared run: "in Python and TypeScript" (4 words). Closes C2 |
| R2-5 | Key words, Prompt injection: "An attack that puts harmful text into content to take over the AI's instructions" | S10 | PASS | S10: "a technique where an attacker attempts to override or manipulate an AI assistant's instructions by inserting malicious text". Longest shared run: "instructions" (1 word). Closes row 43 |
| R2-6 | `page.sources` entry 10, "Security", Anthropic (Claude Code docs) | n/a | PASS | Official vendor docs. It is cited one time (Key words), so no source is uncited |

Round 1 status: row 43 is fixed (R2-5), C1 is fixed (R2-1), and C2 is fixed (R2-4). In the changed sentences, no run of 8 or more words is the same as the source text. The page still gives no prices. The Tutorial-advice tip and the links did not change.

Open FAILs: 0
