# AI Engineering page: Agent Orchestration (research notes)

Writer notes for `content/ai-engineering/agent-orchestration.mdx`. Fetched 2026-10-28 into a scratch folder of the writer session. Fetched text is treated as data and is not committed.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | Building effective agents (Anthropic Engineering) | https://www.anthropic.com/engineering/building-effective-agents | 2026-10-28 |
| S2 | How we built our multi-agent research system (Anthropic Engineering) | https://www.anthropic.com/engineering/multi-agent-research-system | 2026-10-28 |
| S3 | Handoffs (OpenAI Agents SDK docs) | https://openai.github.io/openai-agents-python/handoffs/ | 2026-10-28 |
| S4 | Persistence (LangGraph docs) | https://docs.langchain.com/oss/python/langgraph/persistence | 2026-10-28 |
| S5 | Memory tool (Claude Platform docs) | https://platform.claude.com/docs/en/agents-and-tools/tool-use/memory-tool | 2026-10-28 |

Page cite numbers: n=1 is S1, n=2 is S2, n=3 is S3, n=4 is S4, n=5 is S5.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | Workflows: predefined code paths. Agents: the model directs its own process and tool use. | S1 | "Workflows are systems where LLMs and tools are orchestrated through predefined code paths." / "Agents ... are systems where LLMs dynamically direct their own processes and tool usage" |
| C2 | Simplest solution first; agentic systems trade latency and cost for performance; single calls with retrieval and examples are often enough. | S1 | "we recommend finding the simplest solution possible, and only increasing complexity when needed" / "Agentic systems often trade latency and cost for better task performance" / "optimizing single LLM calls with retrieval and in-context examples is usually enough" |
| C3 | Augmented LLM: retrieval, tools, memory. | S1 | "an LLM enhanced with augmentations such as retrieval, tools, and memory" |
| C4 | Prompt chaining with programmatic gates; fixed subtasks. | S1 | "each LLM call processes the output of the previous one. You can add programmatic checks (see \"gate\" ...)" / "the task can be easily and cleanly decomposed into fixed subtasks" |
| C5 | Routing classifies and directs input; customer service example (refunds, technical support). | S1 | "Routing classifies an input and directs it to a specialized followup task." / "general questions, refund requests, technical support" |
| C6 | Parallelization: sectioning and voting; for speed or confidence. | S1 | "Sectioning: Breaking a task into independent subtasks run in parallel." / "Voting: Running the same task multiple times" / "parallelized for speed, or when multiple perspectives or attempts are needed for higher confidence" |
| C7 | Orchestrator-workers: central LLM breaks down tasks dynamically, delegates, synthesizes; for unpredictable subtasks. | S1 | "a central LLM dynamically breaks down tasks, delegates them to worker LLMs, and synthesizes their results" / "complex tasks where you can't predict the subtasks needed" |
| C8 | Evaluator-optimizer: one generates, another evaluates and gives feedback in a loop; clear criteria; measurable value. | S1 | "one LLM call generates a response while another provides evaluation and feedback in a loop" / "when we have clear evaluation criteria, and when iterative refinement provides measurable value" |
| C9 | Agents: LLMs using tools in a loop on environmental feedback; unpredictable steps; higher cost, compounding errors; sandbox tests and guardrails. | S1 | "They are typically just LLMs using tools based on environmental feedback in a loop." / "difficult or impossible to predict the required number of steps" / "higher costs, and the potential for compounding errors. We recommend extensive testing in sandboxed environments, along with the appropriate guardrails." |
| C10 | Research system: lead agent with parallel subagents, orchestrator-worker pattern. | S2 | "uses a multi-agent architecture with an orchestrator-worker pattern, where a lead agent coordinates the process while delegating to specialized subagents that operate in parallel" |
| C11 | Each subagent needs objective, output format, tools/sources guidance, task boundaries; else duplicate work or gaps. | S2 | "Each subagent needs an objective, an output format, guidance on the tools and sources to use, and clear task boundaries. Without detailed task descriptions, agents duplicate work, leave gaps" |
| C12 | Agents about 4x tokens of chats; multi-agent about 15x. | S2 | "agents typically use about 4× more tokens than chat interactions, and multi-agent systems use about 15× more tokens than chats" |
| C13 | Handoffs delegate to another agent; represented as tools, for example `transfer_to_refund_agent`. | S3 | "Handoffs allow an agent to delegate tasks to another agent." / "Handoffs are represented as tools to the LLM. So if there's a handoff to an agent named Refund Agent, the tool would be named transfer_to_refund_agent." |
| C14 | Checkpointers persist thread state; for continuity, human-in-the-loop, time travel, fault tolerance. | S4 | "Checkpointers persist a thread's graph state as checkpoints. Use them for short-term, thread-scoped memory, including conversation continuity, human-in-the-loop workflows, time travel, and fault tolerance." |
| C15 | Stores keep long-term cross-thread data such as user preferences. | S4 | "Stores persist application-defined data outside the graph state. Use them for long-term, cross-thread memory, including user preferences" |
| C16 | Code: compile with a checkpointer; invoke with a `thread_id`. | S4 | `graph = builder.compile(checkpointer=checkpointer, store=store)` / `{"configurable": {"thread_id": "thread-1"}}` / "Pass a thread_id in graph config" |
| C17 | Memory tool: create, read, update, delete files that persist between sessions, under `/memories`; client-side. | S5 | "Claude can create, read, update, and delete files that persist between sessions" / "files under `/memories`" / "The memory tool operates client-side: Claude requests file operations, and your application runs them." |
| C18 | Parallel workers when parts are independent. | S1 | "Sectioning: Breaking a task into independent subtasks run in parallel." |
| C19 | Frameworks can obscure prompts and responses, harder to debug. | S1 | "they often create extra layers of abstraction that can obscure the underlying prompts and responses, making them harder to debug" |
| C20 | Add complexity only when it demonstrably improves outcomes. | S1 | "you should consider adding complexity only when it demonstrably improves outcomes" |
| C21 | Errors compound; systems resume from where errors occurred. | S2 | "Agents are stateful and errors compound." / "we built systems that can resume from wher[e the agent was when the errors occurred]" |
| C22 | Small lead-agent changes unpredictably change subagent behavior. | S2 | "small changes to the lead agent can unpredictably change how subagents behave" |
| C23 | Path traversal: `/memories/../../secrets.env`; validate every path. | S5 | "A malicious path such as `/memories/../../secrets.env` can reach files outside the `/memories` directory. Your implementation must validate every path in every command" |

The release assistant (build 4.2, three workers, evaluator, release manager) is the tutorial's own invented example. "The decision to ship stays with a human" is marked as the tutorial's own view. The tester checks have no cite; "judge the end state" follows S2 ("We found success focusing on end-state evaluation rather than turn-by-turn analysis") but is given as advice.

Doubt: S1 carries a note that its tooling landscape changed since December 2024. The patterns cited are still on the page, but a checker may prefer a newer Anthropic source for them.
