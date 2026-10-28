# AI Engineering page: AI Agents (research notes)

Writer notes for `content/ai-engineering/ai-agents.mdx`. Fetched 2026-10-28 with curl into `/tmp/claude-1000/ai-eng-src/` (text in `/tmp/claude-1000/ai-eng-txt/`). Fetched text is treated as data and is not committed. `scripts/linux_overlap.py` found no copied word run.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | Building effective agents (Anthropic) | https://www.anthropic.com/research/building-effective-agents | 2026-10-28 |
| S2 | Tool use with Claude (Anthropic, Claude Docs) | https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview | 2026-10-28 |
| S3 | Agents (LangChain Docs) | https://docs.langchain.com/oss/python/langchain/agents | 2026-10-28 |
| S4 | LLM06:2025 Excessive Agency (OWASP Gen AI Security Project) | https://genai.owasp.org/llmrisk/llm062025-excessive-agency/ | 2026-10-28 |
| S5 | Prompting best practices (Anthropic, Claude Docs) | https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices | 2026-10-28 |

Page cite numbers: n=1 is S1, n=2 is S2, n=3 is S3, n=4 is S4, n=5 is S5.

`https://www.anthropic.com/engineering/building-effective-agents` redirects to the S1 URL.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | An agent is a model calling tools in a loop until the task is done. | S3 | "An agent is a model calling tools in a loop until a given task is complete." |
| C2 | Workflow: predefined code paths. Agent: the LLM directs its own process and tool use. | S1 | "Workflows are systems where LLMs and tools are orchestrated through predefined code paths." / "Agents ... are systems where LLMs dynamically direct their own processes and tool usage" |
| C3 | The building block is an augmented LLM with retrieval, tools, memory. | S1 | "The basic building block of agentic systems is an LLM enhanced with augmentations such as retrieval, tools, and memory." |
| C4 | Simplest solution first; agents trade latency and cost for performance; maybe no agent. | S1 | "we recommend finding the simplest solution possible, and only increasing complexity when needed. This might mean not building agentic systems at all. Agentic systems often trade latency and cost for better task performance" |
| C5 | The model decides when to call a tool from the request and the tool description; your app runs client tools. | S2 | "Claude determines when to call a tool based on the user's request and the tool's description. It then returns a structured call that your application runs (client tools) or that Anthropic runs (server tools)." |
| C6 | Ground truth from the environment at each step (tool results). | S1 | "it's crucial for the agents to gain 'ground truth' from the environment at each step (such as tool call results or code execution) to assess its progress." |
| C7 | Ends on completion; stopping conditions such as a maximum number of iterations; can pause for human feedback. | S1 | "The task often terminates upon completion, but it's also common to include stopping conditions (such as a maximum number of iterations)" / "Agents can then pause for human feedback at checkpoints or when encountering blockers." |
| C8 | Tool with name, description, input_schema; `stop_reason: "tool_use"` and `tool_use` blocks; send back `tool_result`. | S2 | "Claude responds with `stop_reason: "tool_use"` and one or more `tool_use` blocks. Your code runs the operation and sends back a `tool_result`." / sample with `"name"`, `"description"`, `"input_schema"` and `{"type": "tool_result", "tool_use_id": tool_use.id, "content": weather}` |
| C9 | Client tools run in your app; server tools run at Anthropic. | S2 | "Client tools ... run in your application." / "that Anthropic runs (server tools)" |
| C10 | The agent-computer interface needs as much care as HCI: tool docs and testing. | S1 | "Carefully craft your agent-computer interface (ACI) through thorough tool documentation and testing." / "plan to invest just as much effort in creating good agent-computer interfaces (ACI)" |
| C11 | Excessive agency root causes: excessive functionality, permissions, autonomy. | S4 | "The root cause of Excessive Agency is typically one or more of: excessive functionality; excessive permissions; excessive autonomy." |
| C12 | Minimize extensions; minimize permissions; avoid open-ended extensions such as running a shell command. | S4 | "Limit the extensions that LLM agents are allowed to call to only the minimum necessary." / "Avoid the use of open-ended extensions where possible (e.g., run a shell command, fetch a URL, etc.)" / "Limit the permissions that LLM extensions are granted" |
| C13 | Ask before actions that are hard to reverse or affect shared systems (system prompt guidance). | S5 | "for actions that are hard to reverse, affect shared systems, or could be destructive, ask the user before proceeding." |
| C14 | Higher costs and compounding errors. | S1 | "The autonomous nature of agents means higher costs, and the potential for compounding errors." |
| C15 | Authorization in downstream systems, not by the LLM. | S4 | "Implement authorization in downstream systems rather than relying on an LLM to decide if an action is allowed or not." |
| C16 | Human approval for high-impact actions. | S4 | "Utilise human-in-the-loop control to require a human to approve high-impact actions before they are taken." |
| C17 | Log and monitor extension activity. | S4 | "Log and monitor the activity of LLM extensions and downstream systems to identify where undesirable actions are taking place" |

## Tutorial's own text (no cite)

- The flaky test triage scenario, the tool names, the deleted fixture folder, and the 15-step limit are invented.
- The code is the tutorial's own, based on the S2 round-trip sample (same field names, model id `claude-opus-5-5`).
- "Run agent tests in a sandbox" is in the tester callout. S1 also recommends "extensive testing in sandboxed environments", but the callout has no cite, by the rule for that section.

## Doubts

- C14 is cited on "an agent can loop and spend money for a long time". S1 gives "higher costs" and stopping conditions "to maintain control", not the exact words "loop for a long time". A checker may want this sentence softened.
- S5 names Claude Opus 4.6 for the autonomy guidance. The page gives the rule as general advice for the system prompt.

## Fact-check changes (2026-10-28)

- The stop-rule mistake no longer says "can loop and spend money for a long time". It now says that Anthropic adds stop conditions (a limit on iterations) to keep control, and that agents cost more and errors can add up (C7, C14).
