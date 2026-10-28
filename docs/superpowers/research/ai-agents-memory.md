# Research notes: How AI Agents Work, Memory

Page: `content/ai-agents/memory.mdx`. Accessed 2026-10-28.

## Sources

| ID | Title | Publisher | URL | Accessed |
|---|---|---|---|---|
| S1 | Context windows | Anthropic (Claude Platform docs) | https://platform.claude.com/docs/en/build-with-claude/context-windows | 2026-10-28 |
| S2 | How the agent loop works | Anthropic (Claude Code docs, Agent SDK) | https://code.claude.com/docs/en/agent-sdk/agent-loop | 2026-10-28 |
| S3 | Memory tool | Anthropic (Claude Platform docs) | https://platform.claude.com/docs/en/agents-and-tools/tool-use/memory-tool | 2026-10-28 |
| S4 | How Claude remembers your project | Anthropic (Claude Code docs) | https://code.claude.com/docs/en/memory | 2026-10-28 |
| S5 | Memory overview | LangChain (LangGraph docs) | https://docs.langchain.com/oss/python/langgraph/memory | 2026-10-28 |

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| C1 | The context window is all the text the model can reference, including the response; it is a "working memory". | S1 | "represents a “working memory” for the model" |
| C2 | It is different from the training data. | S1 | "This is different from the large corpus of data" |
| C3 | As token count grows, accuracy and recall degrade (context rot). | S1 | "accuracy and recall degrade, a phenomenon known as *context rot*" |
| C4 | System prompt, messages, tool results, and tool definitions all count toward the window. | S1 | "Everything in the request counts toward the context window" |
| C5 | Window size is up to 1M tokens, depending on the model. | S1 | "up to 1M tokens, depending on the model" |
| C6 | If the input alone exceeds the window, the API returns a 400 error ("prompt is too long"). | S1 | "the API returns a 400 `invalid_request_error`" |
| C7 | Compaction summarizes earlier parts of the conversation so it can continue. | S1 | "Compaction automatically summarizes earlier parts of the conversation" |
| C8 | In the Agent SDK, the context window does not reset between turns; everything accumulates. | S2 | "It does not reset between turns within a session." |
| C9 | Compaction replaces older messages with a summary; early instructions may be lost; persistent rules belong in CLAUDE.md. | S2 | "specific instructions from early in the conversation may not be preserved" |
| C10 | Resuming a session restores the full context of previous turns. | S2 | "the full context from previous turns is restored" |
| C11 | The memory tool lets Claude store and retrieve information across conversations in memory files. | S3 | "store and retrieve information across conversations" |
| C12 | Memory supports just-in-time retrieval: record, then read back on demand. | S3 | "records what it learns in memory files and reads them back on demand" |
| C13 | The memory tool is client-side: your application runs the file operations. | S3 | "The memory tool operates client-side" |
| C14 | With the tool enabled, Claude checks its memory directory before starting a task; files are under `/memories`. | S3 | "Claude automatically checks its memory directory before starting a task" |
| C15 | Commands: view, create, str_replace, insert, delete, rename. | S3 | Tool commands section headings |
| C16 | Security: restrict operations to `/memories`; path traversal; sensitive info; size caps; expiration. | S3 | "Your implementation must validate every path in every command" / "Periodically delete memory files that haven’t been accessed" |
| C17 | Each Claude Code session begins with a fresh context window; CLAUDE.md and auto memory carry knowledge across sessions. | S4 | "Each Claude Code session begins with a fresh context window." |
| C18 | Both are loaded at the start of every conversation and treated as context, not enforced configuration. | S4 | "Claude treats them as context, not enforced configuration." |
| C19 | Auto memory: first 200 lines or 25KB of `MEMORY.md` load at session start; topic files are read on demand. | S4 | "The first 200 lines of `MEMORY.md`, or the first 25KB" |
| C20 | Auto memory lives in `~/.claude/projects/<project>/memory/`, is machine-local, and is plain markdown you can edit or delete. | S4 | "Auto memory is machine-local." / "plain markdown you can edit or delete" |
| C21 | `/memory` lists memory files and toggles auto memory. | S4 | "The `/memory` command lists your CLAUDE.md" |
| C22 | Project-root CLAUDE.md survives compaction; instructions given only in conversation can disappear. | S4 | "Project-root CLAUDE.md survives compaction" |
| C23 | LangGraph short-term memory is thread-scoped, persisted with checkpoints. | S5 | "persisted via thread-scoped checkpoints" |
| C24 | LangGraph long-term memory is kept in stores, across threads, in custom namespaces. | S5 | "LangGraph provides stores to let you save and recall long-term memories." |
| C25 | Memories can be written in the hot path (at runtime) or in the background. | S5 | "Creating memories as a separate background task" |
| C26 | A full history may not fit in the window; LLMs perform poorly over long contexts. | S5 | "most LLMs still perform poorly over long contexts" |

## Not on the page

No claim about prices or model names. The 7 memory types are covered on `/agent-memory/`; this page links there and does not repeat them.
