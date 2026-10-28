# AI Skills page: Vibe Coding (research notes)

Writer notes for `content/ai-skills/vibe-coding.mdx`. Fetched 2026-10-28 with WebFetch. Fetched text is treated as data.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | Vibe coding 101 (Replit docs) | https://docs.replit.com/tutorials/vibe-coding-101 | 2026-10-28 |
| S2 | Replit Agent (Replit docs) | https://docs.replit.com/replitai/agent | 2026-10-28 |
| S3 | Welcome to Lovable (Lovable docs) | https://docs.lovable.dev/introduction/welcome | 2026-10-28 |
| S4 | Agent overview (Cursor docs) | https://cursor.com/docs/agent/overview | 2026-10-28 |
| S5 | How Claude Code works (Claude Code docs) | https://code.claude.com/docs/en/how-claude-code-works | 2026-10-28 |
| S6 | Best practices for Claude Code (Claude Code docs) | https://code.claude.com/docs/en/best-practices | 2026-10-28 |

Page cite numbers: n=k is Sk.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | Vibe coding: a faster way from idea to software; you describe the outcome and AI helps turn it into an app you can preview and refine. | S1 | "a faster way to move from idea to software." (describe the outcome; preview and refine, as summarized from the page) |
| C2 | You lead; the agent builds, but you decide whether the result works. | S1 | "Agent can build, but you decide whether the result works." |
| C3 | Do not only read what the agent says it changed; try the flow. | S1 | "Do not only read what Agent says it changed. Try the flow." |
| C4 | Replit Agent turns ideas into apps from plain language, and handles setup and deployment. | S2 | "Replit Agent turns your ideas into apps, designs, slides, and more, all from plain language." (the page also says Agent handles setup and deployment) |
| C5 | Replit Agent creates checkpoints; you can roll back. | S2 | "Agent also creates checkpoints as it works, so you can roll back to any previous state." |
| C6 | Lovable: full-stack AI development platform for web apps with natural language. | S3 | "a full-stack AI development platform for building, iterating on, and deploying web applications using natural language." |
| C7 | Lovable projects can sync to GitHub, GitLab, Bitbucket. | S3 | "can be synced to GitHub, GitLab, or Bitbucket with Git sync." |
| C8 | Cursor Agent completes coding tasks, runs terminal commands, edits code. | S4 | "can complete complex coding tasks independently, run terminal commands, and edit code." |
| C9 | Cursor checkpoints save snapshots; stored locally, separate from Git. | S4 | "Checkpoints save snapshots of your codebase during an Agent session." (local and separate from Git, as stated on the page) |
| C10 | Claude Code is an agentic assistant in the terminal. | S5 | "Claude Code is an agentic assistant that runs in your terminal." |
| C11 | Claude Code snapshots a file before it edits; Esc twice rewinds. Remote actions cannot be checkpointed. | S5 | "Before Claude edits a file, it snapshots the current contents. If something goes wrong, press `Esc` twice to rewind" / "Actions that affect remote systems (databases, APIs, deployments) can't be checkpointed." |
| C12 | Claude stops when the work looks done; without a check, you become the test suite. | S6 | "Claude stops when the work looks done." / "In practice that makes you the test suite" |
| C13 | Ask for evidence: the command and its output. | S6 | "ask Claude for evidence: the command it ran and its output, or the screenshot." |
| C14 | Write a specific prompt, e.g. write a failing test that reproduces the bug, then fix it. | S6 | "write a failing test that reproduces it, then fix it" |
| C15 | Brainstorm a spec first (SPEC.md), then build in a fresh session. | S6 | "Once `SPEC.md` exists, start a fresh session to build from it" |

## Scope note

The page says that Claude Code checkpoints undo file changes only (C11). It does not make this claim for Replit or Cursor checkpoints, because Replit rollback can include more than files.

## Not on the page

The origin of the term (a social media post by a named person) is left out: the page does not name people, and no official doc was found that dates the term. No prices or plan limits.
