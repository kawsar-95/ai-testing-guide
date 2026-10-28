# Fact check: How AI Agents Work, Trigger

Page: `content/ai-agents/trigger.mdx`. Checker: an agent that did not write the page. Date: 2026-10-28. Each source was opened on this date.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://www.anthropic.com/engineering/building-effective-agents | yes | Anthropic engineering |
| 2 | https://code.claude.com/docs/en/github-actions | yes | Anthropic docs |
| 3 | https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows | yes | GitHub docs |
| 4 | https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax | yes | GitHub docs |
| 5 | https://code.claude.com/docs/en/scheduled-tasks | yes | Anthropic docs |
| 6 | https://code.claude.com/docs/en/routines | yes | Anthropic docs |
| 7 | https://code.claude.com/docs/en/channels | yes | Anthropic docs |
| 8 | https://code.claude.com/docs/en/sub-agents | yes | Anthropic docs |
| 9 | https://openai.github.io/openai-agents-python/handoffs/ | yes | OpenAI docs |

Each source 1–9 is cited at least one time. Each cite number (1–9) has a source.

## Claims (Technical text)

| # | Claim | Cite | Verdict | Quote from the source |
|---|---|---|---|---|
| 1 | Agents begin with a command from, or a discussion with, the user. | 1 | PASS | "a command from, or interactive discussion with, the human user" |
| 2 | Four trigger groups are the tutorial's own. | none | PASS | Labeled. |
| 3 | Person: `@claude` comment. | 2 | PASS | "Mention `@claude` in a pull request or issue comment" |
| 4 | Event: pull request, push, webhook; schedule: cron. | 3 | PASS | "Use POSIX cron syntax to schedule workflows" |
| 5 | Another agent: subagent or handoff. | 8, 9 | PASS | "Handoffs allow an agent to delegate tasks to another agent." |
| 6 | Interactive mode: no `prompt` input, waits for `@claude` (default) in a comment. | 2 | PASS | "when the workflow provides no `prompt` input, Claude waits for the trigger phrase" |
| 7 | Example workflow listens to `issue_comment`, `pull_request_review_comment`. | 2 | PASS | Example YAML `on:` block. |
| 8 | Automation mode: with `prompt`, runs without a mention, on any GitHub event. | 2 | PASS | "runs in automation mode on any GitHub event" |
| 9 | `push` on commit or tag; `workflow_dispatch` manual; `repository_dispatch` for outside activity. | 3 | PASS | "for activity that happens outside of GitHub" |
| 10 | `paths` filter: runs if at least one changed path matches. | 4 | PASS | "If at least one path matches a pattern in the `paths` filter" |
| 11 | Cloud scheduled tasks, formerly routines. | 6 | PASS | "scheduled tasks, formerly routines" |
| 12 | Cloud scheduled tasks are in research preview (added). | 6 | PASS | "Scheduled tasks are in research preview." |
| 13 | GitHub trigger: pull request, release, issue events. | 6 | PASS | Supported events table: Pull request, Release, Issue |
| 14 | API trigger: HTTP POST with a bearer token to the task's endpoint. | 6 | PASS | "sending an HTTP POST to the task's own endpoint with a bearer token" |
| 15 | Channel: MCP server that pushes events (CI result, webhook) into an open session. | 7 | PASS | "an MCP server that pushes events into your running Claude Code session" |
| 16 | Channels are in research preview (added). | 7 | PASS | "Channels are in research preview" |
| 17 | GitHub `schedule`: POSIX cron, 5-minute minimum, can be delayed under load. | 3 | PASS | "The shortest interval you can run scheduled workflows is once every 5 minutes." |
| 18 | Scheduled workflows run in UTC by default. | 4 | PASS | "By default, scheduled workflows run in UTC." |
| 19 | Cloud tasks reject cron more often than once per hour. | 6 | PASS | "Expressions that run more often than once per hour are rejected." |
| 20 | `/loop` re-runs a prompt on an interval in a session. | 5 | PASS | "re-run a prompt automatically on an interval within a Claude Code session" |
| 21 | Delegation by task and subagent `description`; own context; returns summary. | 8 | PASS | "does that work in its own context and returns only the summary" |
| 22 | Handoff seen as a tool, e.g. `transfer_to_refund_agent`. | 9 | PASS | "Handoffs are represented as tools to the LLM." |
| 23 | New agent sees the whole previous conversation by default. | 9 | PASS | "gets to see the entire previous conversation history" (changes only with `input_filter`) |
| 24 | Example: invented; said in the first sentence. | none | PASS | "This example is invented." |
| 25 | Write access needed on issue/PR events; schedule skips it. | 2 | PASS | "Events that no user authors, such as a `schedule` trigger, skip this check." |
| 26 | Bot actors rejected unless in `allowed_bots`, to stop loops. | 2 | PASS | "rejects a bot actor unless you list it in `allowed_bots`" |
| 27 | Session tasks fire only while running and idle; no catch-up for missed fires. | 5 | PASS | "Tasks only fire while Claude Code is running and idle." |
| 28 | (added) A task due while busy fires once when idle, not once per missed interval. | 5 | PASS | "fires once when Claude becomes idle, not once per missed interval" |
| 29 | Recurring session tasks expire after 7 days. | 5 | PASS | "Recurring tasks automatically expire 7 days after creation." |
| 30 | For a job while the laptop is closed: cloud task or GitHub Actions. | 5 | PASS | Table: Cloud "Requires machine on: No"; "or use GitHub Actions" |
| 31 | Cloud tasks read a plain five-field cron in UTC. | 6 | PASS | "when the expression is five fields alone, write the hours in UTC" |
| 32 | No workflow runs for commits made with the default `GITHUB_TOKEN`. | 2 | PASS | "GitHub doesn't trigger workflows on commits made with the default `GITHUB_TOKEN`" |
| 33 | API fire text is labeled untrusted; acted on only if the prompt says so. | 6 | PASS | "labels it as untrusted data and tells Claude not to follow instructions" |
| 34 | A channel accepts only allowlisted senders. | 7 | PASS | "only IDs you've added can push messages" |
| 35 | Cloud tasks have hourly caps, and extra events are dropped. | 6 | FAIL, fixed | Only GitHub events are dropped: "Events beyond the limit are dropped". API fires over the limit: "The action fails until the limit resets". Text now says both. |
| 36 | GitHub Actions cost controls: timeouts, `--max-turns`, concurrency. | 2 | PASS | "Set workflow-level timeouts to avoid runaway jobs" |
| 37 | Cloud run status says how the session ended, not whether the work was done. | 6 | PASS | "These outcomes say how the session ended" |

## Writer flags

| Flag | Result |
|---|---|
| Subagent nesting depth | The page does not state it. S8 says "up to three layers below the main conversation" by default, so the writer's note was right. Added to the notes. |
| "Agentic harness" | Not used on this page. Checked on `agent-basics` (PASS). |
| Session cron time zone | The page does not claim UTC for session tasks. S5: session times are local time. No change. |

## Other checks

| Check | Verdict |
|---|---|
| Sources are official or primary only | PASS |
| Real-life example says it is invented | PASS |
| Tester tip has no cites and says it is the tutorial's advice | PASS |
| No run of more than 10 words copied from a source | PASS. Longest run: "`allowed_bots`, which keeps bots from triggering Claude in a loop" (10 words). |

## Fixes

- Claim 35: split the cap sentence into GitHub events (dropped) and API fires (fail), in all 3 voices.
- Claim 27/28: the missed-fire bullet now says that a task due while Claude is busy fires once when Claude is idle. Layman and Bangla said a missed run "is not run later", which was wrong.
- Claims 12 and 16: added that cloud scheduled tasks and channels are in research preview (version-specific).

Note (not a FAIL): the example YAML puts a comment trigger and a schedule in one `on:` block. With a `prompt` input, the action runs in automation mode and does not wait for `@claude`. The example shows triggers only, not the action step, so no fact is wrong.

Open FAILs: 0
