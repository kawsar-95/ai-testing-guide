# Fact check: How AI Agents Work, What an AI Agent Is

Page: `content/ai-agents/agent-basics.mdx`. Checker: an agent that did not write the page. Date: 2026-10-28. Each source was opened on this date.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://www.anthropic.com/engineering/building-effective-agents | yes | Anthropic engineering |
| 2 | https://code.claude.com/docs/en/how-claude-code-works | yes | Anthropic docs |
| 3 | https://code.claude.com/docs/en/agent-sdk/agent-loop | yes | Anthropic docs |
| 4 | https://openai.github.io/openai-agents-python/agents/ | yes | OpenAI docs |
| 5 | https://openai.github.io/openai-agents-python/running_agents/ | yes | OpenAI docs |

Each source 1–5 is cited at least one time. Each cite number (1–5) has a source.

## Claims (Technical text)

| # | Claim | Cite | Verdict | Quote from the source |
|---|---|---|---|---|
| 1 | The agentic loop has two components: models that reason, tools that act. | 2 | PASS | "two components: models that reason and tools that act" |
| 2 | Claude Code is the layer that gives tools and manages context; this is the "agentic harness". | 2 | PASS | "This surrounding layer is what the term agentic harness refers to." |
| 3 | "agent = model + harness that runs a loop" is the tutorial's own summary. | none | PASS | Labeled as the tutorial's own. |
| 4 | Workflow: predefined code paths. | 1 | PASS | "orchestrated through predefined code paths" |
| 5 | Agent: the model directs its own process and tools. | 1 | PASS | "dynamically direct their own processes and tool usage" |
| 6 | Agents are often just models using tools on environment feedback in a loop. | 1 | PASS | "typically just LLMs using tools based on environmental feedback in a loop" |
| 7 | OpenAI: a model configured with instructions, tools, optional runtime behavior. | 4 | PASS | "configured with instructions, tools, and optional runtime behavior" |
| 8 | Without tools, only text; with tools, read files, run commands. | 2 | PASS | "Without tools, Claude can only respond with text." |
| 9 | At start: prompt, system prompt, tool definitions, history. | 3 | PASS | "along with the system prompt, tool definitions, and conversation history" |
| 10 | Claude Code loads project files, git state, `CLAUDE.md`. | 2 | FAIL, fixed | Source: "Claude Code gains access to" these. "Loads" overstated it for project files. Now "gives the model access to". |
| 11 | The SDK runs each tool and sends the result back. | 3 | PASS | "The SDK runs each requested tool and collects the results." |
| 12 | Hooks can intercept, change, or block a tool call. | 3 | PASS | "use hooks to intercept, modify, or block tool calls" |
| 13 | `max_turns`, `max_budget_usd`, both no limit by default. | 3 | PASS | table: Default "No limit" for both |
| 14 | Claude Code cycle: gather context, take action, verify results. | 2 | PASS | "gather context, take action, and verify results" |
| 15 | Six step names are the tutorial's own. | none | PASS | Labeled. |
| 16 | Trigger: a command from the user. | 1 | PASS | "a command from, or interactive discussion with, the human user" |
| 17 | Model answers with text, tool calls, or both. | 3 | PASS | "respond with text, request one or more tool calls, or both" |
| 18 | Each tool result informs the next decision. | 2 | PASS | "feeds back into the loop, informing Claude's next decision" |
| 19 | Ground truth from the environment at each step. | 1 | PASS | "gain 'ground truth' from the environment at each step" |
| 20 | SDK loop ends with a response with no tool calls. | 3 | PASS | "until it produces a response with no tool calls" |
| 21 | OpenAI final output: text of the desired type, no tool calls. | 5 | PASS | "text output with the desired type, and there are no tool calls" |
| 22 | Example: invented; said in the first sentence. | none | PASS | "This example is invented." |
| 23 | Success run gives result subtype `success`. | 3 | PASS | "`success` / Claude finished the task normally" |
| 24 | Esc stops Claude at once; the running tool call is canceled. | 2 | PASS | "The running tool call is canceled" |
| 25 | Anthropic advises the simplest solution; agents cost more, errors compound. | 1 | PASS | "higher costs, and the potential for compounding errors" |
| 26 | Advises stopping conditions such as max iterations. | 1 | PASS | "stopping conditions (such as a maximum number of iterations)" |
| 27 | `result` text only on `success`; `error_max_turns` has no final answer. | 3 | PASS | "only present on the success variant" |
| 28 | OpenAI: passing `max_turns` raises `MaxTurnsExceeded`. | 5 | PASS | "we raise a MaxTurnsExceeded exception" |
| 29 | Key words: a turn is one round trip. | (3) | PASS | "A turn is one round trip inside the loop" |

## Other checks

| Check | Verdict |
|---|---|
| Sources are official or primary only | PASS |
| Real-life example says it is invented | PASS |
| Tester tip has no cites and says it is the tutorial's advice | PASS |
| No run of more than 10 words copied from a source | PASS. Longest run: "Claude Code is the layer around the model that" (9 words). |

## Fixes

- Claim 10: "loads your project files" changed to "gives the model access to your project files" in Technical, and the same in Layman and Bangla. Notes row C15 updated.

Open FAILs: 0
