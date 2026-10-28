# Research notes: Subagents and Multi-Agent Systems

Page: `content/ai-concepts/subagents.mdx`. Accessed 2026-10-28 for all sources.

## Sources

| Id | Title | Publisher | URL |
|---|---|---|---|
| S1 | How we built our multi-agent research system | Anthropic (Engineering), published 2025-06-13 | https://www.anthropic.com/engineering/multi-agent-research-system |
| S2 | Building effective agents | Anthropic (Engineering), published 2024-12-19 | https://www.anthropic.com/engineering/building-effective-agents |
| S3 | Create custom subagents | Claude Code Docs | https://code.claude.com/docs/en/sub-agents |
| S4 | Subagents in the SDK | Claude Code Docs (Agent SDK) | https://code.claude.com/docs/en/agent-sdk/subagents |
| S5 | Handoffs | OpenAI Agents SDK docs | https://openai.github.io/openai-agents-python/handoffs/ |

Note: `platform.claude.com/docs/en/agent-sdk/subagents` redirects (307) to S4.

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| C1 | Orchestrator-worker: a lead agent coordinates and delegates to specialized subagents. | S1 | "orchestrator-worker pattern, where a lead agent coordinates the process while delegating to specialized subagents" |
| C2 | The lead agent starts 3 to 5 subagents in parallel. | S1 | "the lead agent spins up 3-5 subagents in parallel rather than serially" |
| C3 | Subagents work in parallel with their own context windows. | S1 | "Subagents facilitate compression by operating in parallel with their own context windows" |
| C4 | Agents use about 4x the tokens of chat; multi-agent systems about 15x. | S1 | "agents typically use about 4× more tokens than chat interactions" / "multi-agent systems use about 15× more tokens than chats" |
| C5 | Multi-agent (Opus 4 lead, Sonnet 4 subagents) beat single-agent Opus 4 by 90.2% on Anthropic's internal research eval. | S1 | "outperformed single-agent Claude Opus 4 by 90.2% on our internal research eval" |
| C6 | Token usage alone explains 80% of the variance in performance (in their analysis). | S1 | "token usage by itself explains 80% of the variance" |
| C7 | Multi-agent needs tasks whose value pays for the extra performance cost. | S1 | "multi-agent systems require tasks where the value of the task is high enough to pay for the increased performance" |
| C8 | Shared-context tasks and tasks with many dependencies between agents are a poor fit; most coding tasks have fewer parallel parts than research. | S1 | "are not a good fit for multi-agent systems today" / "most coding tasks involve fewer truly parallelizable tasks than research" |
| C9 | Each subagent needs an objective, output format, tool guidance, and task boundaries; without detail, agents duplicate work or leave gaps. | S1 | "Each subagent needs an objective, an output format, guidance on the tools and sources to use, and clear task boundaries." / "Without detailed task descriptions, agents duplicate work, leave gaps, or fail to find necessary information." |
| C10 | Simple fact-finding needs 1 agent with 3-10 tool calls. | S1 | "Simple fact-finding requires just 1 agent with 3-10 tool calls." |
| C11 | A separate CitationAgent processes the documents and report to place citations. | S1 | "a CitationAgent, which processes the documents and research report" |
| C12 | Minor failures can be catastrophic for agents. | S1 | "minor system failures can be catastrophic for agents" |
| C13 | LLM-as-judge rubric starts with factual accuracy; start evals with small samples. | S1 | "factual accuracy (do claims match sources?)" / "Start evaluating immediately with small samples" |
| C14 | Orchestrator-workers defined: central LLM breaks down tasks, delegates, synthesizes results. | S2 | "a central LLM dynamically breaks down tasks, delegates them to worker LLMs, and synthesizes their results." |
| C15 | Evaluator-optimizer: one call generates, another evaluates and gives feedback in a loop. | S2 | "one LLM call generates a response while another provides evaluation and feedback in a loop." |
| C16 | Start with the simplest solution; agentic systems trade latency and cost for performance. | S2 | "we recommend finding the simplest solution possible, and only increasing complexity when needed." / "Agentic systems often trade latency and cost for better task performance." |
| C17 | A Claude Code subagent runs in its own context window with its own system prompt, tool access, and permissions. | S3 | "Each subagent runs in its own context window with a custom system prompt, specific tool access, and independent permissions." |
| C18 | Subagent returns only the summary; it spends its own tokens. | S3 | "the subagent does that work in its own context and returns only the summary" / "each subagent spends tokens of its own while it runs." |
| C19 | Cost control: route tasks to faster, lower-cost models. | S3 | "Control costs by routing tasks to faster, lower-cost models like Haiku" |
| C20 | Agent SDK: subagents are separate agent instances for focused subtasks. | S4 | "Subagents are separate agent instances that your main agent can spawn to handle focused subtasks." |
| C21 | Only the final message returns to the parent; intermediate tool calls stay inside. | S4 | "intermediate tool calls and results stay inside the subagent; only its final message returns to the parent." |
| C22 | Parallel subtasks finish in the time of the slowest one. | S4 | "independent subtasks finish in the time of the slowest one rather than the sum of all of them" |
| C23 | Tool restrictions reduce the risk of unintended actions (read-only reviewer). | S4 | "subagents can be limited to specific tools, reducing the risk of unintended actions" |
| C24 | Unless the subagent is a fork, the only input from parent is the Agent tool's prompt string. | S4 | "Unless the subagent is a fork, its context window starts fresh, with no parent conversation" ... "The only content you pass from parent to subagent is the Agent tool's prompt string" |
| C25 | Each subagent's requests count toward `total_cost_usd`; subagents can spawn subagents (tree); caps: depth (default 3), concurrency (default 20), spend (`max_budget_usd`, no default). | S4 | "Each subagent makes its own API requests, which count toward the query's `total_cost_usd`" / "one prompt can grow into a tree of agents" |
| C26 | The parent may summarize the subagent's final report. | S4 | "The parent receives the subagent's final report, but may summarize it in its own response." |
| C27 | OpenAI handoffs let an agent delegate to another agent; the LLM sees a handoff as a tool such as `transfer_to_refund_agent`. | S5 | "allow an agent to delegate tasks to another agent" / "the tool would be named `transfer_to_refund_agent`" |

## Infographic seed check

| Seed point | Verdict |
|---|---|
| An orchestrator sends work to worker agents and merges results | Correct (C1, C14). |
| Research, coding, verifier, data agents | Example roles only. No source names this set. Anthropic's real system has a lead agent, research subagents, and a CitationAgent (C11). S1 also says most coding tasks have fewer parallel parts (C8). The page presents the four roles as an example. |
| Each has its own tools and its own context | Correct (C17, C23, C3). |
| "Each extra agent = more tokens" | Direction correct (C18, C25), but not a fixed per-agent rule. The measured number is about 15x the tokens of a chat for Anthropic's multi-agent research system (C4). The page gives that number and its scope. |
| A verifier agent | Supported as a pattern: evaluator-optimizer (C15) and the CitationAgent (C11). |

## Not on the page

The 90.2% result and the 80% variance figure come from one internal eval; the page states them with that scope. No price numbers are given.
