# Fact-check: Subagents and Multi-Agent Systems (2026-10-28)

Page: `content/ai-concepts/subagents.mdx`. I did not write this page. I opened each source on 2026-10-28 and checked each claim of the Technical text against it. I did not use the quotes of the research notes as evidence.

Sources:

| n | Source | URL works | Official or primary |
|---|---|---|---|
| 1 | Anthropic Engineering, "How we built our multi-agent research system" | yes | yes (Anthropic) |
| 2 | Anthropic Engineering, "Building effective agents" | yes | yes (Anthropic) |
| 3 | Claude Code Docs, "Create custom subagents" | yes | yes |
| 4 | Claude Code Docs, "Subagents in the SDK" | yes | yes |
| 5 | OpenAI Agents SDK docs, "Handoffs" | yes | yes (vendor docs of the named tool) |

Structure checks:

- Every source is cited: [1]–[5] all cited. PASS.
- Every cite number has a source: only n = 1–5 used. PASS.
- "Tutorial advice" tip ("What a tester can check") has no `<Cite>` in any voice and says it is the tutorial's own advice. PASS.
- Invented example: "A real-life example" starts with "This is an invented example." The diagram in "How it works" says "The four worker roles are an example, not a fixed set". PASS.
- Internal link `/extend/subagents/` is in `scripts/route-map.json`. PASS.

| # | Claim (Technical) | Cite | Verdict | Quote from the source |
|---|---|---|---|---|
| 1 | A subagent is a separate agent instance that a main agent starts for one focused subtask | 4 | PASS | "Subagents are separate agent instances that your main agent can spawn to handle focused subtasks." |
| 2 | In Claude Code each subagent has its own context window, system prompt, tool access, permissions | 3 | PASS | "Each subagent runs in its own context window with a custom system prompt, specific tool access, and independent permissions." |
| 3 | Orchestrator-workers: a central model breaks the task down, gives parts to workers, combines results | 2 | PASS | "a central LLM dynamically breaks down tasks, delegates them to worker LLMs, and synthesizes their results." |
| 4 | Anthropic's research feature: a lead agent coordinates and delegates to specialized subagents | 1 | PASS | "a lead agent coordinates the process while delegating to specialized subagents that operate in parallel." |
| 5 | Subagent can read many files; tool calls and results stay inside; only final message goes back | 4 | PASS | "intermediate tool calls and results stay inside the subagent; only its final message returns to the parent." |
| 6 | Each subagent spends tokens of its own | 3 | PASS | "each subagent spends tokens of its own while it runs." |
| 7 | Each subagent needs an objective, output format, tool/source guidance, task boundaries | 1 | PASS | "Each subagent needs an objective, an output format, guidance on the tools and sources to use, and clear task boundaries." |
| 8 | The only input from the parent is the Agent tool's prompt string; put paths, errors, decisions in it | 4 | FAIL → fixed | "Unless the subagent is a fork, its context window starts fresh, with no parent conversation" ... "The only content you pass from parent to subagent is the Agent tool's prompt string, so include any file paths, error messages, or decisions". The page dropped the fork exception. Fixed: "Unless the subagent is a fork (a copy of the parent conversation), the only input it gets ...". Re-check: PASS. |
| 9 | Subagents can run at the same time; time of the slowest, not the sum | 4 | PASS | "multiple subagents can run concurrently, so independent subtasks finish in the time of the slowest one rather than the sum of all of them." |
| 10 | Anthropic's lead agent starts 3 to 5 subagents in parallel | 1 | PASS | "the lead agent spins up 3-5 subagents in parallel rather than serially" |
| 11 | The parent may summarize the report | 4 | PASS | "The parent receives the subagent's final report, but may summarize it in its own response." |
| 12 | Evaluator-optimizer: one call writes, another evaluates and gives feedback in a loop | 2 | PASS | "one LLM call generates a response while another provides evaluation and feedback in a loop." |
| 13 | A separate CitationAgent processes the documents and the report to place citations | 1 | PASS | "passes all findings to a CitationAgent, which processes the documents and research report to identify specific locations for citations" |
| 14 | OpenAI Agents SDK: a handoff lets one agent delegate to another; seen as a tool like `transfer_to_refund_agent` | 5 | PASS | "Handoffs allow an agent to delegate tasks to another agent." "Handoffs are represented as tools to the LLM." "the tool would be named `transfer_to_refund_agent`." |
| 15 | Parent gets a summary, not every file | 4 | PASS | "The parent receives a concise summary, not every file the subagent read." |
| 16 | Agents use about 4x the tokens of a chat; multi-agent about 15x | 1 | PASS | "agents typically use about 4× more tokens than chat interactions, and multi-agent systems use about 15× more tokens than chats." |
| 17 | Minor failures can be catastrophic for agents | 1 | PASS | "Without effective mitigations, minor system failures can be catastrophic for agents." |
| 18 | A read-only worker cannot edit files | 4 | PASS | "A `doc-reviewer` subagent might only have access to Read and Grep tools, ensuring it can analyze but never accidentally modify your documentation files." |
| 19 | 15x is one measurement of one system | 1 | PASS | The 15x figure is given "In our data" for Anthropic's own system. |
| 20 | Token usage alone explained 80% of the variance in performance | 1 | PASS | "token usage by itself explains 80% of the variance" (BrowseComp analysis). |
| 21 | Multi-agent system beat single-agent Claude Opus 4 by 90.2% on an internal research eval | 1 | PASS | "outperformed single-agent Claude Opus 4 by 90.2% on our internal research eval." |
| 22 | Multi-agent systems need tasks whose value pays for the extra cost | 1 | PASS | "tasks where the value of the task is high enough to pay for the increased performance." |
| 23 | Same-context or many-dependency tasks are a poor fit; most coding tasks have fewer parallel parts | 1 | PASS | "domains that require all agents to share the same context or involve many dependencies between agents are not a good fit" ... "most coding tasks involve fewer truly parallelizable tasks than research" |
| 24 | Simple fact-finding needs 1 agent and 3 to 10 tool calls | 1 | PASS | "Simple fact-finding requires just 1 agent with 3-10 tool calls" |
| 25 | Start with the simplest solution, add complexity only when needed | 2 | PASS | "we recommend finding the simplest solution possible, and only increasing complexity when needed." |
| 26 | Route a task to a faster, lower-cost model to control cost | 3 | PASS | "Control costs by routing tasks to faster, lower-cost models like Haiku" |
| 27 | Example: prompts with objective, output format, limits, as the Anthropic guidance asks | 1 | PASS | Same quote as row 7. |
| 28 | Example: research subagent returns a short list because only its final message goes back | 4 | PASS | Same quote as row 5. |
| 29 | Example: verifier with read-only tools can run nothing that edits files | 4 | PASS | "Read-only analysis | `Read`, `Grep`, `Glob` | Can examine code but not modify or execute" |
| 30 | Example: verifier gives feedback like the evaluator in evaluator-optimizer | 2 | PASS | Same quote as row 12. |
| 31 | Example: the run uses many more tokens than one chat | 1 | PASS | Same quote as row 16. |
| 32 | Vague prompt: agents duplicate work, leave gaps, miss information | 1 | PASS | "Without detailed task descriptions, agents duplicate work, leave gaps, or fail to find necessary information." |
| 33 | A subagent does not see the parent conversation (Common mistakes) | 4 | FAIL → fixed | Same fork exception as row 8. Fixed: "A subagent that is not a fork does not see the parent conversation." Re-check: PASS. |
| 34 | Subagent requests count toward `total_cost_usd`; a subagent can start its own subagents, so one prompt can grow into a tree | 4 | PASS | "Each subagent makes its own API requests, which count toward the query's `total_cost_usd`, and a subagent can spawn subagents of its own, so one prompt can grow into a tree of agents." |
| 35 | The Agent SDK has caps for depth, concurrency, and spend | 4 | PASS | "You can cap that growth in three ways: how deeply subagents nest, how many run at once, and how much the whole query spends." |
| 36 | Splitting tightly linked work: same-context tasks are a poor fit | 1 | PASS | Same quote as row 23. |

The research notes (`ai-concepts-subagents.md`, row C24) now carry the fork quote too.

Claims checked: 36. FAILs found: 2. Fixed: 2.

Open FAILs: 0
