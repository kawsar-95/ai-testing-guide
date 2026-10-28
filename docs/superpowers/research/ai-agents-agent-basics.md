# Research notes: How AI Agents Work, What an AI Agent Is

Page: `content/ai-agents/agent-basics.mdx`. Accessed 2026-10-28.

## Sources

| ID | Title | Publisher | URL | Accessed |
|---|---|---|---|---|
| S1 | Building effective agents | Anthropic (Engineering) | https://www.anthropic.com/engineering/building-effective-agents | 2026-10-28 |
| S2 | How Claude Code works | Anthropic (Claude Code docs) | https://code.claude.com/docs/en/how-claude-code-works | 2026-10-28 |
| S3 | How the agent loop works | Anthropic (Claude Code docs, Agent SDK) | https://code.claude.com/docs/en/agent-sdk/agent-loop | 2026-10-28 |
| S4 | Agents | OpenAI (Agents SDK docs) | https://openai.github.io/openai-agents-python/agents/ | 2026-10-28 |
| S5 | Running agents | OpenAI (Agents SDK docs) | https://openai.github.io/openai-agents-python/running_agents/ | 2026-10-28 |

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| C1 | Workflows run LLMs and tools through predefined code paths. | S1 | "orchestrated through predefined code paths" |
| C2 | Agents: the LLM directs its own process and tool use. | S1 | "LLMs dynamically direct their own processes and tool usage" |
| C3 | Agents are typically LLMs that use tools based on environment feedback in a loop. | S1 | "just LLMs using tools based on environmental feedback in a loop" |
| C4 | The base block is an LLM with retrieval, tools, and memory. | S1 | "enhanced with augmentations such as retrieval, tools, and memory" |
| C5 | Agents start from a user command or a discussion with the user. | S1 | "begin their work with either a command from, or interactive discussion" |
| C6 | Agents get ground truth from the environment at each step. | S1 | "gain “ground truth” from the environment at each step" |
| C7 | Add stopping conditions, such as a maximum number of iterations. | S1 | "stopping conditions (such as a maximum number of iterations)" |
| C8 | Find the simplest solution; add complexity only when needed. | S1 | "finding the simplest solution possible" |
| C9 | Agents cost more and errors can compound. | S1 | "higher costs, and the potential for compounding errors" |
| C10 | The loop has two components: models that reason and tools that act. | S2 | "two components: models that reason and tools that act" |
| C11 | Claude Code is the layer around the model that gives tools and manages context; this layer is the agentic harness. | S2 | "This surrounding layer is what the term agentic harness refers to." |
| C12 | Three phases: gather context, take action, verify results. | S2 | "gather context, take action, and verify results" |
| C13 | Without tools, Claude can only respond with text. | S2 | "Without tools, Claude can only respond with text." |
| C14 | Each tool result feeds back into the loop and informs the next decision. | S2 | "feeds back into the loop, informing Claude's next decision" |
| C15 | Claude Code gives the model access to CLAUDE.md, git state, and project files (fact check: "gains access to", not "loads"). | S2 | "Your git state." / "Your CLAUDE.md" |
| C16 | Esc stops Claude at once and cancels the running tool call. | S2 | "Press Esc to stop Claude immediately." |
| C17 | Loop step 1: Claude gets prompt, system prompt, tool definitions, history. | S3 | "along with the system prompt, tool definitions, and conversation history" |
| C18 | Loop ends with a response that has no tool calls; then a ResultMessage. | S3 | "until it produces a response with no tool calls" |
| C19 | max_turns and max_budget_usd default to no limit. | S3 | "No limit" |
| C20 | Hooks can intercept, change, or block tool calls before they run. | S3 | "intercept, modify, or block tool calls before they run" |
| C21 | Result subtypes include success and error_max_turns; result text only on success. | S3 | "only present on the success variant" |
| C22 | OpenAI: an agent is an LLM configured with instructions, tools, and runtime behavior. | S4 | "configured with instructions, tools, and optional runtime behavior" |
| C23 | OpenAI runner: final output ends the loop; tool calls run and loop again; handoff switches agent. | S5 | "the loop ends and we return the result" |
| C24 | OpenAI: final output is text of the desired type with no tool calls. | S5 | "text output with the desired type, and there are no tool calls" |
| C25 | OpenAI: exceeding max_turns raises MaxTurnsExceeded. | S5 | "If we exceed the max_turns passed, we raise a" |

## Notes

- The equation "agent = model + harness" is the tutorial's framing. S2 supports it: the harness is "the layer around the model".
- The real-life example is invented.
