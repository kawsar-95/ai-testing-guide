# Research notes: How AI Agents Work, Trigger

Page: `content/ai-agents/trigger.mdx`. Accessed 2026-10-28.

## Sources

| ID | Title | Publisher | URL | Accessed |
|---|---|---|---|---|
| S1 | Building effective agents | Anthropic (Engineering) | https://www.anthropic.com/engineering/building-effective-agents | 2026-10-28 |
| S2 | Claude Code GitHub Actions | Anthropic (Claude Code docs) | https://code.claude.com/docs/en/github-actions | 2026-10-28 |
| S3 | Events that trigger workflows | GitHub Docs | https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows | 2026-10-28 |
| S4 | Workflow syntax for GitHub Actions | GitHub Docs | https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax | 2026-10-28 |
| S5 | Run prompts on a schedule | Anthropic (Claude Code docs) | https://code.claude.com/docs/en/scheduled-tasks | 2026-10-28 |
| S6 | Automate work with scheduled tasks | Anthropic (Claude Code docs) | https://code.claude.com/docs/en/routines | 2026-10-28 |
| S7 | Push events into a running session with channels | Anthropic (Claude Code docs) | https://code.claude.com/docs/en/channels | 2026-10-28 |
| S8 | Create custom subagents | Anthropic (Claude Code docs) | https://code.claude.com/docs/en/sub-agents | 2026-10-28 |
| S9 | Handoffs | OpenAI (Agents SDK docs) | https://openai.github.io/openai-agents-python/handoffs/ | 2026-10-28 |

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| C1 | Agents begin with a command from, or a discussion with, the user. | S1 | "begin their work with either a command from, or interactive discussion with" |
| C2 | Agents plan and operate on their own and can return to the human. | S1 | "potentially returning to the human for further information" |
| C3 | Mention `@claude` in a PR or issue comment to have Claude act. | S2 | "Mention `@claude` in a pull request or issue comment" |
| C4 | The action can run a prompt automatically on any GitHub event. | S2 | "a prompt to run automatically on any GitHub event" |
| C5 | Interactive mode: no `prompt` input; waits for the trigger phrase, `@claude` by default. | S2 | "waits for the trigger phrase, `@claude` by default" |
| C6 | Automation mode: with a `prompt` input, runs without waiting for a mention. | S2 | "Claude runs without waiting for a mention" |
| C7 | On issue and PR events, the triggering user needs write access; schedule skips it. | S2 | "the triggering user must have write access to the repository" |
| C8 | Bot actors are rejected unless in `allowed_bots`, to stop trigger loops. | S2 | "keeps bots from triggering Claude in a loop" |
| C9 | The example mention workflow listens to `issue_comment` and `pull_request_review_comment`. | S2 | "issue_comment:" (YAML) |
| C10 | Review example runs on `pull_request` types opened, synchronize, ready_for_review, reopened. | S2 | "types: [opened, synchronize, ready_for_review, reopened]" |
| C11 | Scheduled workflows run only from the default branch; public repo schedules disable after 60 days without activity. | S2 | "disables the schedule after 60 days without repository activity" |
| C12 | Cost advice: `--max-turns`, workflow timeouts, concurrency controls. | S2 | "Set workflow-level timeouts to avoid runaway jobs" |
| C13 | GitHub doesn't trigger workflows on commits made with default `GITHUB_TOKEN`. | S2 | "GitHub doesn't trigger workflows on commits made with the default `GITHUB_TOKEN`" |
| C14 | `schedule` uses POSIX cron syntax. | S3 | "Use POSIX cron syntax to schedule workflows" |
| C15 | Shortest schedule interval is once every 5 minutes. | S3 | "The shortest interval you can run scheduled workflows is once every 5 minutes." |
| C16 | `schedule` can be delayed under high load. | S3 | "can be delayed during periods of high loads" |
| C17 | `workflow_dispatch` lets a workflow be triggered manually. | S3 | "To enable a workflow to be triggered manually" |
| C18 | `repository_dispatch`: trigger via the GitHub API for activity outside GitHub. | S3 | "activity that happens outside of GitHub" |
| C19 | `push` runs on push of a commit or tag. | S3 | "when you push a commit or tag" |
| C20 | `paths` filter: run based on which file paths changed. | S4 | "run based on what file paths are changed" |
| C21 | Scheduled workflows run in UTC by default. | S4 | "By default, scheduled workflows run in UTC." |
| C22 | Concurrency group: at most one running job or workflow. | S4 | "at most one running job or workflow in a concurrency group" |
| C23 | `/loop` re-runs a prompt on an interval in a session. | S5 | "re-run a prompt automatically on an interval within a Claude Code session" |
| C24 | Session tasks fire only while Claude Code runs and is idle. | S5 | "Tasks only fire while Claude Code is running and idle." |
| C25 | Recurring session tasks expire after 7 days. | S5 | "Recurring tasks automatically expire 7 days after creation." |
| C26 | No catch-up for missed fires; a task due while Claude is busy fires once when idle. | S5 | "No catch-up for missed fires." |
| C27 | Jitter: recurring tasks run late, up to half the gap, max 30 minutes. | S5 | "by at most 30 minutes" |
| C28 | Cloud scheduled task (formerly routine): triggers Schedule, API, GitHub. | S6 | "Each scheduled task can have one or more triggers" |
| C29 | API trigger: HTTP POST to the task's endpoint with a bearer token. | S6 | "sending an HTTP POST to the task's own endpoint with a bearer token" |
| C30 | Fire `text` arrives wrapped as untrusted data. | S6 | "labels it as untrusted data" |
| C31 | Cloud schedules more often than once per hour are rejected. | S6 | "Expressions that run more often than once per hour are rejected." |
| C32 | GitHub events: pull request, release, issue. | S6 | "Pull request", "Release", "Issue" (table) |
| C33 | GitHub webhook events have hourly caps; extra events are dropped. | S6 | "Events beyond the limit are dropped" |
| C34 | Run outcome is how the session ended, not whether the work was done. | S6 | "say how the session ended, not whether Claude completed the work" |
| C35 | A channel is an MCP server that pushes events into a running session. | S7 | "an MCP server that pushes events into your running Claude Code session" |
| C36 | Channel events only arrive while the session is open. | S7 | "Events only arrive while the session is open" |
| C37 | Channel senders: an allowlist; others are silently dropped. | S7 | "everyone else is silently dropped" |
| C38 | Channels are a research preview. | S7 | "Channels are in research preview." |
| C39 | Claude delegates to subagents based on the task and the `description` field. | S8 | "the `description` field in subagent configurations" |
| C40 | A subagent runs in its own context window. | S8 | "runs in its own context window" |
| C41 | A subagent returns only the summary. | S8 | "returns only the summary" |
| C42 | Handoffs let an agent delegate to another agent. | S9 | "allow an agent to delegate tasks to another agent" |
| C43 | Handoffs are tools to the LLM, e.g. `transfer_to_refund_agent`. | S9 | "Handoffs are represented as tools to the LLM." |
| C44 | The new agent sees the whole previous history by default. | S9 | "gets to see the entire previous conversation history" |

## Notes

- A file change as a trigger: the page uses a `push` event with a `paths` filter (S3, S4). The Claude Code `FileChanged` hook is only for side effects and does not start a run, so the page does not use it.
- The four trigger groups (user, event, schedule, another agent) are the tutorial's own grouping.
- The real-life example is invented.

## Fact-check additions (2026-10-28)

- S6: GitHub webhook events beyond the hourly cap are dropped; Run now and API fires have a limit of 30 per hour per task, and over the limit "The action fails until the limit resets".
- S6: "Scheduled tasks are in research preview."
- S5: "If a task's scheduled time passes while Claude is busy on a long-running request, it fires once when Claude becomes idle, not once per missed interval."
- S8: "By default, a subagent can spawn subagents of its own, up to three layers below the main conversation." The page does not use this fact.
