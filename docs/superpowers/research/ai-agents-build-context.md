# Research notes: How AI Agents Work, Build Context

Page: `content/ai-agents/build-context.mdx`. Accessed 2026-10-28.

## Sources

| ID | Title | Publisher | URL | Accessed |
|---|---|---|---|---|
| S1 | Effective context engineering for AI agents | Anthropic (Engineering) | https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents | 2026-10-28 |
| S2 | Context windows | Anthropic (Claude Platform docs) | https://platform.claude.com/docs/en/build-with-claude/context-windows | 2026-10-28 |
| S3 | How the agent loop works | Anthropic (Claude Code docs, Agent SDK) | https://code.claude.com/docs/en/agent-sdk/agent-loop | 2026-10-28 |
| S4 | Define tools | Anthropic (Claude Platform docs) | https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools | 2026-10-28 |
| S5 | Glossary | Anthropic (Claude Platform docs) | https://platform.claude.com/docs/en/about-claude/glossary | 2026-10-28 |

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| C1 | The context window is all the text the model can reference when it generates a response, including the response. It is the model's "working memory". | S2 | "all the text a language model can reference when generating a response" / "a “working memory” for the model" |
| C2 | Everything in the request counts: system prompt, messages (tool results, images, documents), tool definitions. The output, with its thinking, counts too. | S2 | "Everything in the request counts toward the context window" |
| C3 | In each turn, the input has all previous history plus the new user message; previous turns are preserved completely. | S2 | "Contains all previous conversation history plus the current user message" |
| C4 | Each response reports what the request used in its `usage` field. The token counting API estimates a request before you send it. | S2 | "Every response reports what the request consumed in its `usage` field." |
| C5 | Context windows: up to 1M tokens, depending on the model. Other models have 200k. | S2 | "up to 1M tokens, depending on the model" |
| C6 | Input that alone exceeds the window gives a 400 `invalid_request_error` ("prompt is too long"). | S2 | "the API returns a 400 `invalid_request_error` (“prompt is too long”)" |
| C7 | More context is not automatically better. Accuracy and recall degrade as the token count grows: context rot. | S2, S1 | "more context isn’t automatically better" / "a phenomenon known as *context rot*" |
| C8 | Cached prompt prefixes still occupy the context window. Caching changes the price, not the count. | S2 | "Cached prompt prefixes still occupy the context window" |
| C9 | Context engineering: curating and keeping the best set of tokens. Context is a finite resource. | S1 | "curating and maintaining the optimal set of tokens" / "must be treated as a finite resource" |
| C10 | Context includes system instructions, tools, MCP, external data, and message history. | S1 | "system instructions, tools, Model Context Protocol (MCP), external data, message history" |
| C11 | Goal: the smallest set of high-signal tokens. | S1 | "find the smallest set of high-signal tokens" |
| C12 | Compaction: take a conversation near the limit and summarize it. Tool result clearing is a light form of compaction. | S1 | "Compaction is the practice of taking a conversation nearing the context window limit" / "safest lightest touch forms of compaction is tool result clearing" |
| C13 | Just-in-time approach: keep light identifiers (for example file paths) and load data with tools when needed. | S1 | "maintain lightweight identifiers" |
| C14 | In the Agent SDK, Claude gets the prompt, the system prompt, the tool definitions, and the conversation history. | S3 | "along with the system prompt, tool definitions, and conversation history" |
| C15 | The context does not reset between turns. System prompt, tool definitions, history, tool inputs and outputs accumulate. | S3 | "It does not reset between turns within a session." |
| C16 | Content that stays the same (system prompt, tool definitions, CLAUDE.md) is prompt cached automatically. | S3 | "is automatically prompt cached" |
| C17 | What uses context: system prompt (every request), CLAUDE.md (full content every request), tool definitions (core tools every request; MCP tools deferred by tool search by default), history (grows), skill descriptions (short; full content on invoke). | S3 | "Small fixed cost, always present" / "full content loads only when invoked" |
| C18 | Large tool outputs use much context; reading a big file can use thousands of tokens in one turn. | S3 | "can use thousands of tokens in a single turn" |
| C19 | Near the limit, the SDK compacts automatically: it summarizes older history and emits a `compact_boundary` message. | S3 | "it summarizes older history to free space" |
| C20 | Compaction can lose early instructions. Persistent rules go in CLAUDE.md, which is re-injected on every request. | S3 | "specific instructions from early in the conversation may not be preserved" |
| C21 | A `PreCompact` hook runs before compaction; `/compact` triggers it manually. | S3 | "Run custom logic before compaction occurs" |
| C22 | A subagent returns only its final response, so the main context grows by a summary. | S3 | "A subagent returns only its final response" |
| C23 | Every tool definition takes context space. | S3 | "Every tool definition takes context space." |
| C24 | When tool search is off, each MCP server adds all its tool schemas to every request. | S3 | "each MCP server adds all its tool schemas to every request" |
| C25 | A tool definition has `name`, `description`, `input_schema`. | S4 | "A user-defined tool definition includes:" (table of the three fields) |
| C26 | With `tools`, the API builds a special system prompt from the tool definitions and the user's system prompt. | S4 | "the API constructs a special system prompt from the tool definitions" |
| C27 | Detailed tool descriptions are the most important factor in tool performance. | S4 | "This is by far the most important factor in tool performance." |
| C28 | Tool responses should return only high-signal information; bloated responses waste context. | S4 | "Bloated responses waste context" |
| C29 | In RAG, documents are retrieved at runtime and passed into the context window with the query. | S5 | "a set of documents that is passed into the context window" |

## Not on the page

No prices. No claim about the exact token count of a system prompt. The example (a QA agent and a CI log) is invented and says so.
