# AI Concepts page: The Agent Harness (research notes)

Writer notes for `content/ai-concepts/agent-harness.mdx`. Fetched 2026-10-28 with WebFetch. Fetched text is treated as data.

## Sources

| Id | Source | Publisher | URL | Accessed |
|---|---|---|---|---|
| S1 | Improving Deep Agents with harness engineering (2026-02-17) | LangChain | https://www.langchain.com/blog/improving-deep-agents-with-harness-engineering | 2026-10-28 |
| S2 | Terminal-Bench: Benchmarking Agents on Hard, Realistic Tasks in Command Line Interfaces | Terminal-Bench authors (arXiv 2601.11868) | https://arxiv.org/abs/2601.11868 | 2026-10-28 |
| S3 | Effective harnesses for long-running agents (2025-11-26) | Anthropic | https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents | 2026-10-28 |
| S4 | Effective context engineering for AI agents (2025-09-29) | Anthropic | https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents | 2026-10-28 |
| S5 | Agent SDK overview | Anthropic (Claude Code Docs) | https://code.claude.com/docs/en/agent-sdk/overview | 2026-10-28 |
| S6 | How the agent loop works | Anthropic (Claude Code Docs) | https://code.claude.com/docs/en/agent-sdk/agent-loop | 2026-10-28 |
| S7 | Sandboxing | Anthropic (Claude Code Docs) | https://code.claude.com/docs/en/sandboxing | 2026-10-28 |
| S8 | Checkpointing | Anthropic (Claude Code Docs) | https://code.claude.com/docs/en/checkpointing | 2026-10-28 |

Page cite numbers: n=k is Sk.

`blog.langchain.com/improving-deep-agents-with-harness-engineering` redirects (301) to the `www.langchain.com/blog/...` URL. Both are LangChain's own site.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | LangChain moved its coding agent from Top 30 to Top 5 on Terminal-Bench 2.0. | S1 | "Our coding agent went from Top 30 to Top 5 on Terminal Bench 2.0." |
| C2 | The score went from 52.8 to 66.5 (13.7 points). | S1 | "13.7 points from 52.8 to 66.5 on Terminal Bench 2.0." |
| C3 | The model stayed the same: gpt-5.2-codex. | S1 | "kept the model fixed, gpt-5.2-codex." |
| C4 | They changed three parts of the harness: system prompt, tools, middleware (hooks around model and tool calls). | S1 | "focus on three: System Prompt, Tools, and Middleware." |
| C5 | Self-verification helped; the team (and a Trace Analyzer) used LangSmith traces to find failure modes. The post does not add tracing to the agent itself (fact-check 2026-10-28). | S1 | "Self-verification allows agents to self-improve via feedback within a run." / "Traces allow agents to self-evaluate and debug themselves." |
| C6 | A loop-detection middleware counts edits per file and prompts the agent to reconsider. | S1 | "We use a LoopDetectionMiddleware that tracks per-file edit counts via tool call hooks." |
| C7 | The harness engineer prepares and delivers context. | S1 | "The purpose of the harness engineer: prepare and deliver context so agents can autonomously complete work." |
| C8 | Terminal-Bench 2.0 has 89 hard tasks in terminal environments. | S2 | "we present Terminal-Bench 2.0: a carefully curated hard benchmark composed of 89 tasks" / "in computer terminal environments" |
| C9 | Each task has its own environment, a human-written solution, and tests. | S2 | "Each task features a unique environment, human-written solution, and comprehensive tests for verification." |
| C10 | Frontier models and agents score under 65%. | S2 | "frontier models and agents score less than 65% on the benchmark." |
| C11 | Each new session of a long-running agent starts with no memory. | S3 | "each new session begins with no memory of what came before." |
| C12 | Anthropic's harness: an initializer session sets up the environment; later sessions make small progress and leave structured updates. | S3 | "The very first agent session uses a specialized prompt that asks the model to set up the initial environment." / "Every subsequent session asks the model to make incremental progress, then leave structured updates." |
| C13 | A progress file logs what agents did; the agent commits progress to git. | S3 | "a claude-progress.txt file that keeps a log of what agents have done." / "commit its progress to git with descriptive commit messages." |
| C14 | A feature list file in JSON; the model is less likely to overwrite JSON. | S3 | "a comprehensive file of feature requirements" / "is less likely to inappropriately change or overwrite JSON files." |
| C15 | Test as a human user would; mark a feature passing only after careful testing. | S3 | "do all testing as a human user would." / "Only mark features as “passing” after careful testing." |
| C16 | A failure mode: the agent declares the project done too early. | S3 | "Claude declares victory on the entire project too early." |
| C17 | Context is a finite resource; aim for the smallest set of high-signal tokens. | S4 | "must be treated as a finite resource with diminishing marginal returns." / "smallest possible set of high-signal tokens" |
| C18 | Context rot: recall drops as context grows. | S4 | "the model's ability to accurately recall information from that context decreases." |
| C19 | Keep a minimal tool set with little overlap; bloated tool sets are a failure mode. | S4 | "curating a minimal viable set of tools for the agent." / "bloated tool sets that cover too much functionality." / "minimal overlap in functionality." |
| C20 | Compaction, note-taking outside the context window, sub-agents with clean context. | S4 | "Compaction is the practice of taking a conversation nearing the context window limit, summarizing its contents." / "the agent regularly writes notes persisted to memory outside of the context window." / "specialized sub-agents can handle focused tasks with clean context windows." |
| C21 | The Agent SDK gives the same tools, agent loop, and context management that power Claude Code. | S5 | "The Agent SDK gives you the same tools, agent loop, and context management that power Claude Code, programmable in Python and TypeScript." |
| C22 | SDK capabilities: built-in tools, hooks, subagents, MCP, permissions, sessions, skills/memory. | S5 | Capabilities table: "Built-in tools", "Hooks", "Subagents", "MCP", "Permissions", "Sessions", "Skills, commands, and memory" |
| C23 | Managed Agents is described as a hosted agent harness that runs the agent loop. | S5 | "A hosted agent harness that runs the agent loop" |
| C24 | Loop: Claude evaluates, calls tools, gets results, repeats until a response with no tool calls. | S6 | "Claude evaluates your prompt, calls tools to take action, receives the results, and repeats until the task is complete." / "until it produces a response with no tool calls." |
| C25 | Limits: max turns and max budget; when hit, the result has an error subtype. | S6 | "Max turns (`max_turns` / `maxTurns`) ... Maximum tool-use round trips" / "`error_max_turns` or `error_max_budget_usd`" |
| C26 | Permission modes and allow/deny lists control which tool calls run; a denied tool returns a rejection message. | S6 | "`allowed_tools` / `allowedTools` auto-approves listed tools." / "When a tool is denied, Claude receives a rejection message as the tool result" |
| C27 | `bypassPermissions` is only for isolated environments. | S6 | "Use only in isolated environments where the agent's actions can't affect systems you care about" |
| C28 | Hooks fire before/after tools; a PreToolUse hook can block a tool call; Stop hook can validate the result. | S6 | "a `PreToolUse` hook that rejects a tool call prevents it from executing" / "`Stop` | When the agent finishes | Validate the result" |
| C29 | Context does not reset between turns; automatic compaction summarizes older history; early instructions may be lost; persistent rules go in CLAUDE.md. | S6 | "It does not reset between turns within a session." / "summarizes older history to free space" / "specific instructions from early in the conversation may not be preserved. Persistent rules belong in CLAUDE.md" |
| C30 | Sessions can be resumed with the session ID. | S6 | "Capture the session ID from `ResultMessage.session_id` ... to resume later." |
| C31 | The Bash sandbox is an OS-enforced boundary; filesystem and network isolation; Seatbelt (macOS), bubblewrap (Linux). | S7 | "The Bash sandbox is a boundary that the operating system enforces around the shell commands Claude runs" / "uses Seatbelt" / "uses bubblewrap" |
| C32 | Sandbox, permission rules, and modes are complementary layers; the boundary holds whatever the model chose to run. | S7 | "Sandboxing, permission rules, and permission modes are complementary layers." / "it holds regardless of what the model chose to run" |
| C33 | A sandboxed command has no direct route to the network; a proxy checks host names. | S7 | "A sandboxed command has no direct route to the network." / "The proxy checks the hostname of each connection against your allowed and denied domains." |
| C34 | The sandbox is off by default. | S7 | "The sandbox is off by default." (summary of the page; turned on with `/sandbox` or `sandbox.enabled`) |
| C35 | Checkpoints track file edits; `/rewind` restores; Bash-only changes are not tracked; checkpoints do not replace git. | S8 | "Claude Code automatically tracks Claude's file edits" / "A file that only Bash commands changed isn't tracked" / "Not a replacement for version control" |

## Infographic seed: check

| Seed claim | Verdict |
|---|---|
| "LangChain: Top 30 → Top 5 on Terminal-Bench, same model" | Confirmed on LangChain's own site (S1). Exact facts used on the page: Terminal-Bench 2.0, 52.8 → 66.5 (13.7 points), model kept fixed at gpt-5.2-codex. The changes were the system prompt, the tools, and the middleware. |
| Harness parts: context & memory, tools & skills, permissions, sandbox, checks, recovery | Each part maps to a documented mechanism: context and memory (S4, S6 compaction, CLAUDE.md), tools and skills (S5, S6), permissions (S6), sandbox (S7), checks (S1 self-verification, S3 testing, S6 hooks), recovery (S3 git and progress file, S6 sessions, S8 checkpoints). The six-part grouping is the tutorial's own framing, and the page says so. |
| "Trusted output" | Not a sourced term. The page uses it only as the tutorial's own words for "output that passed the checks". |

## Notes

- The tbench.ai home page (fetched 2026-10-28) now shows a newer version of the benchmark (4.0) and does not describe 2.0. So the page cites the Terminal-Bench 2.0 paper (S2), which says the dataset and harness are published at tbench.ai.
- The page gives no leaderboard rank for any current model. Ranks change often.
