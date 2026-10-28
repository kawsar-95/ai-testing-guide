# Research notes: Context Management

Page: `content/harness/context-management.mdx`. Module: AI Harnesses. Date: 2026-10-28.

The base is the owner's image "AI Harnesses: 6 must know terms". Its card for this topic gives the scope and the example. Each fact on the page comes from the sources below.

## Sources

| ID | Title | URL |
|---|---|---|
| S1 | How Claude Code works | https://code.claude.com/docs/en/how-claude-code-works |
| S2 | Context windows | https://platform.claude.com/docs/en/build-with-claude/context-windows |
| S3 | Compaction overview | https://platform.claude.com/docs/en/build-with-claude/compaction |

## Claims

| Claim | Source | Quote |
|---|---|---|
| Everything in the request counts | S2 | "Everything in the request counts toward the context window: the system prompt, every message in messages (including tool results, images, and documents), and your tool definitions." |
| Working memory | S2 | "instead represents a "working memory" for the model." |
| What the Claude Code window holds | S1 | "holds your conversation history, file contents, command outputs, CLAUDE.md, auto memory, loaded skills, and system instructions." |
| Skills load on use | S1 | "Claude sees skill descriptions at session start, but the full content only loads when a skill is used." |
| Up to 1M tokens | S2 | "The context window (up to 1M tokens, depending on the model)" |
| Context rot | S2 | "As token count grows, accuracy and recall degrade, a phenomenon known as context rot." |
| Auto-compaction | S1 | "Claude Code manages context automatically as you approach the limit. It compacts the conversation into a summary." |
| What a summary keeps | S1 | "The summary keeps your requests and key code snippets, but detailed instructions from early in the conversation may be lost." |
| No loop on failure | S1 | "Claude Code stops auto-compacting after a few attempts and shows an error instead of looping." |
| Rules in CLAUDE.md | S1 | "Put persistent rules in CLAUDE.md rather than relying on conversation history." |
| Compact Instructions and /compact focus | S1 | "add a "Compact Instructions" section to CLAUDE.md or run /compact with a focus (like /compact focus on the API changes)." |
| /context | S1 | "Run /context to see what's using space." |
| Server-side compaction is primary | S2 | "server-side compaction is the primary strategy for context management." |
| Compaction writes a summary on the server | S3 | "Compaction replaces the older turns of a conversation with a summary that Claude writes on the server, so you need no summarization code of your own." |
| Threshold trigger | S3 | "The API, when input tokens reach the trigger you set." |
| Beta for 4.6+ | S2 | "It is available in beta for Claude 4.6 and later models" |
| Tool result clearing | S2 | "Tool result clearing: Clear old tool results in agentic workflows" |
