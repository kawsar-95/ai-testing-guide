# Fact-check: content/ai-engineering/ai-agents.mdx

Checked 2026-10-28 by an agent that did not write the page. All 5 sources were fetched again. The quotes of the research notes were not trusted. `scripts/linux_overlap.py` on the fetched text found no run of 8 or more copied words (after the Re-check edit; see row 22).

Source 1 is an Anthropic engineering article, a primary source for Anthropic's own recommendations.

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | An agent is a model that calls tools in a loop until the task is done | 3 | PASS | "An agent is a model calling tools in a loop until a given task is complete." |
| 2 | Workflow: code sets the path; agent: the model decides steps and tools | 1 | PASS | "Workflows are systems where LLMs and tools are orchestrated through predefined code paths." / "systems where LLMs dynamically direct their own processes and tool usage" |
| 3 | Augmented LLM with retrieval, tools, memory | 1 | PASS | "The basic building block of agentic systems is an LLM enhanced with augmentations such as retrieval, tools, and memory." |
| 4 | Simplest solution; agents better but cost more and slower; sometimes no agent | 1 | PASS | "we recommend finding the simplest solution possible" / "This might mean not building agentic systems at all. Agentic systems often trade latency and cost for better task performance" |
| 5 | The model reads the task and tool descriptions and decides to call a tool | 2 | PASS | "Claude determines when to call a tool based on the user's request and the tool's description." |
| 6 | Your code runs the tool and sends the result back | 2 | PASS | "Your code runs the operation and sends back a `tool_result`." |
| 7 | Tool results are "ground truth" from the environment | 1 | PASS | "gain "ground truth" from the environment at each step (such as tool call results or code execution)" |
| 8 | Ends on completion; stop rule such as a maximum number of steps | 1 | PASS | "The task often terminates upon completion, but it's also common to include stopping conditions (such as a maximum number of iterations)" |
| 9 | An agent can pause and ask a person for feedback | 1 | PASS | "Agents can then pause for human feedback at checkpoints or when encountering blockers." |
| 10 | Tool = `name`, `description`, `input_schema`; `stop_reason: "tool_use"`; `tool_use` block; `tool_result` next | 2 | PASS | "Claude responds with `stop_reason: "tool_use"` and one or more `tool_use` blocks. Your code runs the operation and sends back a `tool_result`." S2 sample has `"name"`, `"description"`, `"input_schema"`. |
| 11 | Code: `messages.create(model="claude-opus-5-5", max_tokens=1024, tools=tools, messages=messages)`; assistant turn with `response.content`; user turn with `{"type": "tool_result", "tool_use_id": call.id, "content": output}` | 2 | PASS | S2 sample: `{"role": "assistant", "content": response.content}`, `{"type": "tool_result", "tool_use_id": tool_use.id, "content": weather}`, `model="claude-opus-5-5", max_tokens=1024, tools=tools`. The tool and loop are the tutorial's own. |
| 12 | Client tools run in your app; server tools run at Anthropic | 2 | PASS | "returns a structured call that your application runs (client tools) or that Anthropic runs (server tools)." |
| 13 | The agent-tool interface needs as much care as a UI: docs and tests | 1 | PASS | "plan to invest just as much effort in creating good agent-computer interfaces (ACI)" / "through thorough tool documentation and testing" |
| 14 | Example: each tool result is ground truth for the next step | 1 | PASS | Row 7. |
| 15 | Excessive agency = more functions, permissions, autonomy than needed | 4 | PASS | "The root cause of Excessive Agency is typically one or more of: excessive functionality; excessive permissions; excessive autonomy." |
| 16 | Remove the shell tool; give only narrow tools | 4 | PASS | "Avoid the use of open-ended extensions where possible (e.g., run a shell command, fetch a URL, etc.) and use extensions with more granular functionality." |
| 17 | System prompt rule: ask before actions that are hard to undo or change shared systems | 5 | PASS | "for actions that are hard to reverse, affect shared systems, or could be destructive, ask the user before proceeding." |
| 18 | A 15-step maximum stops runs that go in circles | 1 | PASS | Row 8 (stopping conditions); 15 is the scenario's own number. |
| 19 | Agents trade latency and cost for results; use fixed steps if they work | 1 | PASS | Row 4. |
| 20 | (First check) "Without a step limit, an agent can loop and spend money for a long time" | 1 | FAIL, fixed (see Re-check) | S1 does not say this. It gives stopping conditions "to maintain control" and "higher costs, and the potential for compounding errors". Writer doubt 3. |
| 21 | Errors can add up over many steps | 1 | PASS | "the potential for compounding errors." |
| 22 | OWASP 3 root causes; minimum tools and permissions; open-ended tools only when needed | 4 | PASS | Row 15; "Limit the extensions that LLM agents are allowed to call to only the minimum necessary." / "Limit the permissions that LLM extensions are granted to other systems to the minimum necessary" / row 16. |
| 23 | Check permissions downstream, not in the prompt | 4 | PASS | "Implement authorization in downstream systems rather than relying on an LLM to decide if an action is allowed or not." |
| 24 | Human approval for high-impact actions | 4 | PASS | "Utilise human-in-the-loop control to require a human to approve high-impact actions before they are taken." |
| 25 | The model picks a tool from its description | 2 | PASS | Row 5. |
| 26 | Log every tool call to find where an unwanted action started | 4 | PASS | "Log and monitor the activity of LLM extensions and downstream systems to identify where undesirable actions are taking place" |
| 27 | Key words rows | 1, 2, 3, 4 | PASS | Restate rows 1, 2, 3, 8, 10, 12, 15. |

Uncited text that states no source fact: the lede, the triage scenario (tool names, the deleted folder), and the tip callout, which says "These test ideas are the tutorial's own advice." PASS.

## Re-check

| # | Change | Verdict | Quote |
|---|---|---|---|
| 20 | Now: "Anthropic adds stop conditions, for example a limit on the number of iterations, to keep control of an agent <Cite n={1} />. Agents also cost more, and errors can add up over many steps <Cite n={1} />." The same text is in Layman; Bangla matches. A first wording copied 8 words of S1 ("conditions such as a maximum number of iterations"); `linux_overlap.py` found it, and the words were changed. The script now finds no run. | PASS | S1: "it's also common to include stopping conditions (such as a maximum number of iterations) to maintain control" / "The autonomous nature of agents means higher costs, and the potential for compounding errors." |

FAILs found: 1. Fixed: 1.

Open FAILs: 0
