# Fact-check: content/ai-engineering/agent-orchestration.mdx

Checked 2026-10-28 by an agent that did not write the page. I fetched all 5 sources again (WebFetch and curl). I did not trust the quotes of the research notes.

| n | Source | Kind |
|---|---|---|
| 1 | Building effective agents (anthropic.com/engineering, dated Dec 19, 2024) | Vendor engineering post (primary) |
| 2 | How we built our multi-agent research system (anthropic.com/engineering, dated Jun 13, 2025) | Vendor engineering post (primary) |
| 3 | Handoffs (OpenAI Agents SDK docs) | Official docs |
| 4 | Persistence (LangGraph docs, docs.langchain.com) | Official docs |
| 5 | Memory tool (platform.claude.com) | Official docs |

Writer doubt (source 1 date): the page now has the note "Much of the tooling landscape described in this post has changed since December 2024." The note is about tooling. All the patterns that the page cites (augmented LLM, the 5 workflows, agents, the framework warning) are still in the post, with the quotes below. The page cites no tool or framework name from source 1. PASS.

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | A workflow runs models and tools through code paths defined in advance | 1 | PASS | "Workflows are systems where LLMs and tools are orchestrated through predefined code paths." |
| 2 | An agent lets the model direct its own process and tool use | 1 | PASS | "Agents, on the other hand, are systems where LLMs dynamically direct their own processes and tool usage." |
| 3 | Orchestration definition (which step, which agent, data, memory) | none | PASS | The tutorial's own definition of the page term. It adds no fact about a product. |
| 4 | Simplest solution that works; more complexity only when needed | 1 | PASS | "we recommend finding the simplest solution possible, and only increasing complexity when needed" |
| 5 | Agentic systems often give better results but are slower and cost more | 1 | PASS | "Agentic systems often trade latency and cost for better task performance" |
| 6 | For many apps, one call with retrieval and examples is enough | 1 | PASS | "optimizing single LLM calls with retrieval and in-context examples is usually enough" |
| 7 | Augmented LLM = model with retrieval, tools, memory | 1 | PASS | "an LLM enhanced with augmentations such as retrieval, tools, and memory" |
| 8 | Prompt chaining: each call works on the output before; a code gate can check steps; fixed steps | 1 | PASS | "each LLM call processes the output of the previous one" / "programmatic checks (see "gate" in the diagram below)" / "easily and cleanly decomposed into fixed subtasks" |
| 9 | Routing: classify, send to a special prompt or model; refund vs technical support | 1 | PASS | "Routing classifies an input and directs it to a specialized followup task." / "general questions, refund requests, technical support" |
| 10 | Parallelization: sectioning or voting; speed or confidence | 1 | PASS | "Sectioning: Breaking a task into independent subtasks run in parallel." / "Voting: Running the same task multiple times to get diverse outputs." / "parallelized for speed, or when multiple perspectives or attempts are needed for higher confidence results" |
| 11 | Orchestrator-workers: central model splits at run time, delegates, combines; unpredictable subtasks | 1 | PASS | "a central LLM dynamically breaks down tasks, delegates them to worker LLMs, and synthesizes their results" / "you can't predict the subtasks needed" |
| 12 | Evaluator-optimizer: one writes, one checks and gives feedback in a loop; clear criteria, measurable help | 1 | PASS | "one LLM call generates a response while another provides evaluation and feedback in a loop" / "when we have clear evaluation criteria, and when iterative refinement provides measurable value" |
| 13 | Agent = model using tools in a loop on environment feedback | 1 | PASS | "They are typically just LLMs using tools based on environmental feedback in a loop." |
| 14 | Use an agent when the number of steps is not predictable | 1 | PASS | "open-ended problems where it's difficult or impossible to predict the required number of steps" |
| 15 | Autonomy: higher cost, compounding errors; sandbox tests and guardrails | 1 | PASS | "The autonomous nature of agents means higher costs, and the potential for compounding errors. We recommend extensive testing in sandboxed environments, along with the appropriate guardrails." |
| 16 | Research system: lead agent plans, starts parallel subagents, combines results; orchestrator-worker | 2 | PASS | "orchestrator-worker pattern, where a lead agent coordinates the process while delegating to specialized subagents" / "develops a strategy, and spawns subagents to explore different aspects simultaneously" / "The LeadResearcher synthesizes these results" |
| 17 | Each subagent: goal, output shape, tool and source advice, clear limits; else repeat work or gaps | 2 | PASS | "Each subagent needs an objective, an output format, guidance on the tools and sources to use, and clear task boundaries. Without detailed task descriptions, agents duplicate work, leave gaps" |
| 18 | Agents about 4x the tokens of a chat; multi-agent about 15x | 2 | PASS | "agents typically use about 4× more tokens than chat interactions" / "multi-agent systems use about 15× more tokens than chats" |
| 19 | Handoff passes the task to another agent (triage to refund example) | 3 | PASS | "Handoffs allow an agent to delegate tasks to another agent." Code: `triage_agent = Agent(name="Triage agent", handoffs=[billing_agent, handoff(refund_agent)])` |
| 20 | The model sees a handoff as a tool, such as `transfer_to_refund_agent` | 3 | PASS | "Handoffs are represented as tools to the LLM. So if there's a handoff to an agent named Refund Agent, the tool would be named transfer_to_refund_agent." |
| 21 | LangGraph saves thread state as checkpoints; continuity, human-in-the-loop, time travel, fault tolerance | 4 | PASS | "Checkpointers persist a thread's graph state as checkpoints." / "conversation continuity, human-in-the-loop workflows, time travel, and fault tolerance" |
| 22 | A store keeps data across threads, such as user preferences | 4 | PASS | "persist application-defined data outside the graph state" / "long-term, cross-thread memory, including user preferences, facts, and shared knowledge" |
| 23 | Memory tool: create, read, update, delete files under `/memories` that persist between sessions | 5 | PASS | "Claude can create, read, update, and delete files that persist between sessions" / "Claude stores what it learns in files under `/memories`" |
| 24 | Your app runs the file operations | 5 | PASS | "The memory tool operates client-side: Claude requests file operations, and your application runs them." |
| 25 | Code: `from langgraph.checkpoint.memory import InMemorySaver`; `builder.compile(checkpointer=...)` | 4 | PASS | Docs code: `from langgraph.checkpoint.memory import InMemorySaver` / `graph = builder.compile(checkpointer=checkpointer, store=store)` |
| 26 | Code: `graph.invoke({"messages": [...]}, {"configurable": {"thread_id": ...}})`; same `thread_id` continues the thread | 4 | PASS | Docs code: `graph.invoke({"messages": [{"role": "user", "content": "Hi, my name is Bob."}]}, {"configurable": {"thread_id": "thread-1"}})` / "Pass a `thread_id` in graph config." |
| 27 | Example: orchestrator-workers fits because the checks depend on what changed | 1 | PASS | The pattern fits "complex tasks where you can't predict the subtasks needed". The choice is the example's design. |
| 28 | Example: each worker gets an objective, output format, its own tool, as advised for subagents | 2 | PASS | Same quote as row 17. "Its own tool" is the example design; the source advises "guidance on the tools ... to use". No conflict. |
| 29 | Example: workers run at the same time because the parts are independent | 1 | PASS | "Sectioning: Breaking a task into independent subtasks run in parallel." |
| 30 | Example: an evaluator call checks the draft against clear criteria | 1 | PASS | "particularly effective when we have clear evaluation criteria" |
| 31 | Example: a checkpointer saves state, so a failed worker can retry without a full restart | 4 | PASS | Persistence helps an agent "resume after an interruption, recover from a failure"; checkpoints support "fault tolerance". |
| 32 | The ship decision stays with a human | none | PASS | Marked "Tutorial's own view". |
| 33 | Start simple; add complexity only when it clearly improves results | 1 | PASS | "you should consider adding complexity only when it demonstrably improves outcomes" |
| 34 | Frameworks can hide prompts and responses; debugging is harder | 1 | PASS | "extra layers of abstraction that can obscure the underlying prompts and responses, making them harder to debug" |
| 35 | Vague subagent tasks give duplicate work or gaps | 2 | PASS | Same quote as row 17. |
| 36 | Multi-agent about 15x tokens | 2 | PASS | Same quote as row 18. |
| 37 | Errors compound in long runs; Anthropic built systems that resume where the error happened | 2 | PASS | "Agents are stateful and errors compound." / "we built systems that can resume from where the agent was when the errors occurred" |
| 38 | Small lead-agent changes can change subagent behavior unpredictably | 2 | PASS | "small changes to the lead agent can unpredictably change how subagents behave" |
| 39 | `/memories/../../secrets.env` can escape the folder; the handler must validate every path | 5 | PASS | "A malicious path such as `/memories/../../secrets.env` can reach files outside the `/memories` directory. Your implementation must validate every path in every command" |
| 40 | "What a tester can check" tip | none | PASS | Marked "These checks are the tutorial's own advice." No cites, as the module rule says. |
| 41 | Key words: Workflow, Agent, Orchestrator-workers | 1 | PASS | Same quotes as rows 1, 2, 13, 11. |
| 42 | Key words: Subagent | 2 | PASS | Same quote as row 16. |
| 43 | Key words: Handoff, shown to the model as a tool | 3 | PASS | Same quote as row 20. |
| 44 | Key words: Checkpoint, a saved snapshot of thread state | 4 | PASS | "Checkpointers persist a thread's graph state as checkpoints." |
| 45 | Key words: Memory tool keeps files under `/memories` across sessions | 5 | PASS | Same quote as row 23. |

Copy check (script, Technical text vs the HTML of all 5 sources, runs of 8 or more words): no run found. The longest close match is "small changes to the lead agent can" (7 words, row 38). PASS.

Source kind check: all 5 sources are vendor or official docs. No blog, forum, Wikipedia, or AI summary. PASS.

FAILs found: 0.

Open FAILs: 0
