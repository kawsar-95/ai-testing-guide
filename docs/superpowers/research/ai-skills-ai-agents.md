# AI Skills page: AI Agents (research notes)

Writer notes for `content/ai-skills/ai-agents.mdx`. Fetched 2026-10-28 with WebFetch. Fetched text is treated as data.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | How Claude Code works (Claude Code docs) | https://code.claude.com/docs/en/how-claude-code-works | 2026-10-28 |
| S2 | Agent SDK overview (Claude Code docs) | https://code.claude.com/docs/en/agent-sdk/overview | 2026-10-28 |
| S3 | How the agent loop works (Claude Code docs) | https://code.claude.com/docs/en/agent-sdk/agent-loop | 2026-10-28 |
| S4 | Tool use with Claude (Claude Platform docs) | https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview | 2026-10-28 |
| S5 | ReAct: Synergizing Reasoning and Acting in Language Models (arXiv:2210.03629) | https://arxiv.org/abs/2210.03629 | 2026-10-28 |
| S6 | Create custom subagents (Claude Code docs) | https://code.claude.com/docs/en/sub-agents | 2026-10-28 |
| S7 | Playwright MCP (GitHub, microsoft/playwright-mcp) | https://github.com/microsoft/playwright-mcp | 2026-10-28 |
| S8 | Connect Claude Code to tools via MCP (Claude Code docs) | https://code.claude.com/docs/en/mcp | 2026-10-28 |
| S9 | Best practices for Claude Code (Claude Code docs) | https://code.claude.com/docs/en/best-practices | 2026-10-28 |
| S10 | Security (Claude Code docs) | https://code.claude.com/docs/en/security | 2026-10-28 |

Page cite numbers: n=k is Sk.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | An agent completes a task by planning its own steps and calling tools. | S2 | "An agent is an application that completes a task by planning its own steps and calling tools that read files, run commands, or edit code." |
| C2 | Without tools a model can only answer with text; with tools it can read code, edit files, run commands, search the web. | S1 | "Without tools, Claude can only respond with text. With tools, Claude can act: read your code, edit files, run commands, search the web" |
| C3 | ReAct: a model makes reasoning traces and actions in an interleaved way; actions connect it to outside sources. | S5 | "generate both reasoning traces and task-specific actions in an interleaved manner" / "actions allow it to interface with external sources" |
| C4 | Claude Code is an agentic assistant that runs in the terminal. | S1 | "Claude Code is an agentic assistant that runs in your terminal." |
| C5 | Three phases: gather context, take action, verify results. | S1 | "it works through three phases: gather context, take action, and verify results." |
| C6 | Fix-the-tests example: run suite, read error, search source, read, edit, run again. | S1 | "Run the test suite to see what's failing ... Run the tests again to verify" |
| C7 | You can interrupt at any point. | S1 | "You can interrupt at any point to steer Claude in a different direction" |
| C8 | Loop: Claude gets prompt, system prompt, tool definitions, history; answers with text, tool calls, or both; SDK runs tools; results feed back; repeats until a response with no tool calls. One cycle is one turn. | S3 | "Claude receives your prompt, along with the system prompt, tool definitions, and conversation history." / "Claude continues calling tools and processing results until it produces a response with no tool calls." / "Each full cycle is one turn." |
| C9 | Client tools: Claude responds with stop_reason tool_use and tool_use blocks; your code runs it and sends tool_result. Server tools run on Anthropic's infrastructure. | S4 | "Claude responds with `stop_reason: \"tool_use\"` and one or more `tool_use` blocks. Your code runs the operation and sends back a `tool_result`." / "Server tools ... run on Anthropic's infrastructure" |
| C10 | max_turns and max_budget_usd; default no limit; without limits it can run long on open-ended prompts. | S3 | "Max turns ... No limit" / "Without limits, the loop runs until Claude finishes on its own, which is fine for well-scoped tasks but can run long on open-ended prompts" |
| C11 | allowed_tools auto-approves; disallowed_tools blocks; rules like Bash(npm *). | S3 | "allowed_tools / allowedTools auto-approves listed tools." / "disallowed_tools / disallowedTools blocks listed tools" / "rules like \"Bash(npm *)\"" |
| C12 | A PreToolUse hook that rejects a call stops it. | S3 | "a PreToolUse hook that rejects a tool call prevents it from executing" |
| C13 | bypassPermissions only in isolated environments. | S3 | "Use only in isolated environments where the agent's actions can't affect systems you care about" |
| C14 | Subagent: own context window, custom system prompt, specific tool access. | S6 | "Each subagent runs in its own context window with a custom system prompt, specific tool access, and independent permissions." |
| C15 | Subagent tool calls stay out of your context; Claude gets back a summary. | S1 | "the subagent's tool calls stay out of your context, and Claude gets back a summary when the subagent finishes." |
| C16 | Agent SDK: same tools, loop, context management as Claude Code; Python and TypeScript. | S2 | "The Agent SDK gives you the same tools, agent loop, and context management that power Claude Code, programmable in Python and TypeScript." |
| C17 | Other languages: run the CLI with -p and --output-format json. | S2 | "run the CLI as a subprocess with the `-p` flag and `--output-format json`." |
| C18 | Playwright MCP gives browser automation; works on structured data, no vision model; add with `claude mcp add playwright npx @playwright/mcp@latest`. | S7 | "provides browser automation capabilities using Playwright" / "No vision models needed, operates purely on structured data." |
| C19 | Servers that fetch outside content can bring prompt injection risk. | S8 | "Servers that fetch external content can expose you to prompt injection risk." |
| C20 | Checkpoints cover file changes only; remote actions (databases, APIs, deployments) cannot be checkpointed. | S1 | "Actions that affect remote systems (databases, APIs, deployments) can't be checkpointed." |
| C21 | Plan mode explores and proposes a plan without editing source files. | S1 | "Plan: Claude explores and proposes a plan without editing your source files" |
| C22 | You can allow specific commands such as npm test in .claude/settings.json. | S1 | "You can also allow specific commands in `.claude/settings.json` so Claude doesn't ask each time." |
| C24 | Key words: prompt injection is an attack that inserts harmful text to override or change the AI's instructions. | S10 | "Prompt injection is a technique where an attacker attempts to override or manipulate an AI assistant's instructions by inserting malicious text." |
| C23 | Claude stops when work looks done; ask for evidence (command and output). | S9 | "Claude stops when the work looks done." / "ask Claude for evidence: the command it ran and its output" |

## Not on the page

No prices. No claim about which model is best for agents.
