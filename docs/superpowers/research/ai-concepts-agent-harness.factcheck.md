# Fact-check: The Agent Harness (2026-10-28)

Page: `content/ai-concepts/agent-harness.mdx`. I did not write this page. I opened each source URL on 2026-10-28 and checked each claim of the Technical text against it. I did not trust the quotes in the research notes.

## Sources

| n | Source | URL works | Primary / official | Cited |
|---|---|---|---|---|
| 1 | LangChain, "Improving Deep Agents with harness engineering" | yes | yes: the vendor's own post about its own result (allowed by the brief) | yes |
| 2 | Terminal-Bench paper, arXiv 2601.11868 | yes | yes: the benchmark authors' paper. Its abstract presents "Terminal-Bench 2.0", so it is the right primary source for the benchmark facts. | yes |
| 3 | Anthropic, "Effective harnesses for long-running agents" | yes | yes | yes |
| 4 | Anthropic, "Effective context engineering for AI agents" | yes | yes | yes |
| 5 | Claude Code Docs, Agent SDK overview | yes | yes | yes |
| 6 | Claude Code Docs, How the agent loop works | yes | yes | yes |
| 7 | Claude Code Docs, Sandboxing | yes | yes | yes |
| 8 | Claude Code Docs, Checkpointing | yes | yes | yes |

Every source is cited. Every cite number (1 to 8) has a source.

## Claims

| # | Section | Claim | Cite | Verdict | Quote from the source |
|---|---|---|---|---|---|
| 1 | In plain words | The Agent SDK gives the same tools, agent loop, and context management that power Claude Code | 5 | PASS | "The Agent SDK gives you the same tools, agent loop, and context management that power Claude Code" |
| 2 | In plain words | Features: built-in tools, hooks, subagents, MCP, permissions, sessions, skills and memory | 5 | PASS | Capabilities table: "Built-in tools", "Hooks", "Subagents", "MCP", "Permissions", "Sessions", "Skills, commands, and memory" |
| 3 | In plain words | Managed Agents is a hosted agent harness that runs the agent loop | 5 | PASS | "A hosted agent harness that runs the agent loop" |
| 4 | In plain words | LangChain kept the model fixed (`gpt-5.2-codex`) | 1 | PASS | "We only tweaked the harness and kept the model fixed" (gpt-5.2-codex) |
| 5 | In plain words | It changed only the harness: system prompt, tools, middleware | 1 | PASS | "We only changed the harness." / "focus on three: System Prompt, Tools, and Middleware" |
| 6 | In plain words | Middleware = hooks around model and tool calls | 1 | PASS | "our term for hooks around model and tool calls" |
| 7 | In plain words | Coding agent went from 52.8 to 66.5 on Terminal-Bench 2.0 | 1 | PASS | "13.7 points from 52.8 to 66.5 on Terminal Bench 2.0" |
| 8 | In plain words | From the Top 30 to the Top 5 | 1 | PASS | "Our coding agent went from Top 30 to Top 5 on Terminal Bench 2.0." |
| 9 | In plain words | Terminal-Bench 2.0: hard benchmark, 89 tasks, terminal environments | 2 | PASS | "a carefully curated hard benchmark composed of 89 tasks in computer terminal environments" |
| 10 | In plain words | Each task: own environment, human-written solution, tests | 2 | PASS | "Each task features a unique environment, human-written solution, and comprehensive tests" |
| 11 | In plain words | The six-part grouping | none | PASS | The page says "The grouping is the tutorial's own". |
| 12 | How it works | Loop repeats until a reply with no tool calls | 6 | PASS | "until it produces a response with no tool calls" |
| 13 | How it works | Max turns / max budget stop the loop; `error_max_turns`, `error_max_budget_usd` | 6 | PASS | "When either limit is hit, the SDK returns a ResultMessage with a corresponding error subtype (error_max_turns or error_max_budget_usd)" |
| 14 | How it works | Context is a finite resource | 4 | PASS | "must be treated as a finite resource" |
| 15 | How it works | Smallest set of high-signal tokens | 4 | PASS | "find the smallest set of high-signal tokens" |
| 16 | How it works | Context rot: recall drops as context grows | 4 | PASS | "the model's ability to accurately recall information from that context decreases" |
| 17 | How it works | Context does not reset between turns | 6 | PASS | "It does not reset between turns within a session." |
| 18 | How it works | Compaction summarizes older history; early instructions may be lost; rules belong in `CLAUDE.md` | 6 | PASS | "specific instructions from early in the conversation may not be preserved. Persistent rules belong in CLAUDE.md" |
| 19 | How it works | Agent can write notes outside its context window | 4 | PASS | "writes notes persisted to memory outside of the context window" |
| 20 | How it works | Minimal tool set, little overlap; bloated tool sets a common failure | 4 | PASS | "One of the most common failure modes we see is bloated tool sets" |
| 21 | How it works | Allow list approves, deny list blocks, permission mode sets human oversight | 6 | PASS | "allowed_tools ... auto-approves", "disallowed_tools ... blocks", "permission_mode ... controls how much human oversight you want" |
| 22 | How it works | Denied call returns a rejection message | 6 | PASS | "When a tool is denied, Claude receives a rejection message as the tool result" |
| 23 | How it works | `bypassPermissions` only for isolated environments | 6 | PASS | "Use only in isolated environments" |
| 24 | How it works | Bash sandbox is OS-enforced: Seatbelt (macOS), bubblewrap (Linux) | 7 | PASS | "a boundary that the operating system enforces" / "macOS: uses Seatbelt", "Linux: uses bubblewrap" |
| 25 | How it works | No direct route to the network; proxy checks host names against allowed and denied domains | 7 | PASS | "A sandboxed command has no direct route to the network" / "The proxy checks the hostname of each connection against your allowed and denied domains." |
| 26 | How it works | Separate layers; sandbox holds whatever the model chose to run | 7 | PASS | "complementary layers" / "it holds regardless of what the model chose to run" |
| 27 | How it works | `PreToolUse` can block a tool call; `Stop` can validate the result | 6 | PASS | "a PreToolUse hook that rejects a tool call prevents it from executing" / Stop: "Validate the result" |
| 28 | How it works | LangChain added self-verification and traces | 1 | FAIL | The post uses traces as a feedback signal for its engineers and a Trace Analyzer: "we use Traces to understand agent failure modes at scale". It does not add tracing to the agent. |
| 29 | How it works | Middleware counts edits per file to catch loops | 1 | PASS | "a LoopDetectionMiddleware that tracks per-file edit counts via tool call hooks" |
| 30 | How it works | Each new session starts with no memory | 3 | PASS | "each new session begins with no memory of what came before" |
| 31 | How it works | Progress file; commit each step to git | 3 | PASS | "a claude-progress.txt file that keeps a log of what agents have done" / "commit its progress to git" |
| 32 | How it works | Resume a session by its ID | 6 | PASS | "Capture the session ID ... to resume later" |
| 33 | How it works | Checkpoints track Claude's file edits; `/rewind` restores | 8 | PASS | "Claude Code automatically tracks Claude's file edits" / "Run /rewind ... Restore code" |
| 34 | How it works | Subagents: clean context window | 4 | PASS | "specialized sub-agents can handle focused tasks with clean context windows" |
| 35 | Example | Says it is an invented example | none | PASS | "This is an invented example." |
| 36 | Example | Anthropic saw agents declare done too early; fix: test as a human user, mark passing only after careful testing | 3 | PASS | "Claude marks features as done prematurely" / "do all testing as a human user would" / "Only mark features as "passing" after careful testing" |
| 37 | Example | Rule style `Bash(npm *)` | 6 | PASS | "rules like "Bash(npm *)" to allow only specific commands" |
| 38 | Example | Rules in `CLAUDE.md`, rejection message, `Stop` hook | 6 | PASS | Same quotes as rows 18, 22, 27. |
| 39 | Common mistakes | 13.7 points with the same model | 1 | PASS | "13.7 points from 52.8 to 66.5" |
| 40 | Common mistakes | No turn or budget limit by default | 6 | PASS | Table: Max turns "No limit", Max budget "No limit" |
| 41 | Common mistakes | Sandbox off by default in Claude Code | 7 | PASS | "The sandbox is off by default." |
| 42 | Common mistakes | Agent can declare done too early | 3 | PASS | "Claude declares victory on the entire project too early." |
| 43 | Common mistakes | Bash-only changed file not tracked; checkpoints not a replacement for version control | 8 | PASS | "A file that only Bash commands changed isn't tracked" / "Not a replacement for version control" |
| 44 | Common mistakes | Context finite, bloated tools; compaction drops rules; bypassPermissions | 4, 6 | PASS | Same quotes as rows 14, 18, 20, 23. |
| 45 | What a tester can check | "Tutorial advice" tip has no cites and says it is the tutorial's own advice | none | PASS | No `<Cite>` in the callout. |
| 46 | Key words | Each row restates a fact above with the same cite | 1-8 | PASS | Rows 1, 9, 16, 18, 21, 24, 27, 31, 33. |

## Fixes

- Row 28. Fixed: the Technical text now says "LangChain added self-verification, used traces to find failure modes, and added a middleware ...". The Layman and Bangla panels and claim C5 of the research notes were changed to match. Re-checked against S1: PASS.

`node --test tests/voice-source.test.ts tests/ai-concepts.test.ts`: 27 pass, 0 fail.

Open FAILs: 0
