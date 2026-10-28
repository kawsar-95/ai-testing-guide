# Fact check: How AI Agents Work, Build Context

Page: `content/ai-agents/build-context.mdx`. Checker: an agent that did not write the page. Date: 2026-10-28. Each source was opened on this date.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents | yes | Anthropic engineering |
| 2 | https://platform.claude.com/docs/en/build-with-claude/context-windows | yes | Anthropic docs |
| 3 | https://code.claude.com/docs/en/agent-sdk/agent-loop | yes | Anthropic docs |
| 4 | https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools | yes | Anthropic docs |
| 5 | https://platform.claude.com/docs/en/about-claude/glossary | yes | Anthropic docs |

Each source 1–5 is cited at least one time. Each cite number has a source. No two sources share a URL.

## Claims (Technical text)

| # | Claim | Cite | Verdict | Quote from the source |
|---|---|---|---|---|
| 1 | Context window: all text the model can reference when it generates a response, including the response. | 2 | PASS | "all the text a language model can reference when generating a response" |
| 2 | Anthropic calls it "working memory"; not the training data. | 2 | PASS | "represents a “working memory” for the model" |
| 3 | System prompt, every message (tool results, images, documents), tool definitions count. | 2 | PASS | "Everything in the request counts toward the context window" |
| 4 | The output of the turn, with its thinking, counts too. | 2 | PASS | "The output Claude generates for the turn, including its extended thinking, counts too." |
| 5 | Each turn's input is all previous history plus the new message. | 2 | PASS | "Contains all previous conversation history plus the current user message" |
| 6 | Context engineering: curating and maintaining the best set of tokens. | 1 | PASS | "curating and maintaining the optimal set of tokens" |
| 7 | Context is a finite resource. | 1 | PASS | "a finite resource with diminishing marginal returns" |
| 8 | Aim: smallest set of high-signal tokens. | 1 | PASS | "the smallest set of high-signal tokens" |
| 9 | SDK: Claude gets the prompt with system prompt, tool definitions, history. | 3 | PASS | "along with the system prompt, tool definitions, and conversation history" |
| 10 | Context does not reset between turns; all parts accumulate. | 3 | PASS | "It does not reset between turns within a session." |
| 11 | Table: system prompt every request, small fixed cost. | 3 | PASS | "Small fixed cost, always present" |
| 12 | Table: CLAUDE.md at session start, full content every request, prompt cached. | 3 | PASS | "Full content in every request (but prompt-cached" |
| 13 | Table: core tools every request; MCP tools deferred by tool search by default. | 3 | PASS | "on demand for MCP tools and other built-in tools" |
| 14 | Table: history grows each turn with prompts, answers, tool inputs and outputs. | 3 | PASS | "Grows with each turn: prompts, responses, tool inputs, tool outputs" |
| 15 | Table: skill descriptions are short; full content loads only when the skill runs. | 3 | PASS | "full content loads only when invoked" |
| 16 | Tool definition has `name`, `description`, `input_schema`. | 4 | PASS | parameter table lists `name`, `description`, `input_schema` |
| 17 | With `tools`, the API builds a special system prompt from tool definitions and the user's system prompt. | 4 | PASS | "the API constructs a special system prompt from the tool definitions" |
| 18 | RAG: documents retrieved at runtime, passed into the context window with the query. | 5 | PASS | "The data is retrieved at runtime when a query is sent" |
| 19 | Window up to 1M tokens depending on model; other models 200k. | 2 | PASS | "up to 1M tokens, depending on the model" / "Other Claude models ... have a 200k-token context window." (1M list: Fable 5.1, Mythos 5.1, Opus 5.5, Sonnet 5.5, Haiku 5.5 and others; the page names no model, so no per-model claim to check) |
| 20 | Input alone over the window gives a 400 error, "prompt is too long". | 2 | PASS | "the API returns a 400 `invalid_request_error` (“prompt is too long”)" |
| 21 | More context is not automatically better; accuracy and recall degrade: context rot. | 2 | PASS | "As token count grows, accuracy and recall degrade" |
| 22 | Compaction: summarize a conversation near the limit. | 1 | PASS | "taking a conversation nearing the context window limit, summarizing its contents" |
| 23 | SDK compacts automatically, summarizes older history, emits `compact_boundary`. | 3 | PASS | "it summarizes older history to free space" / `subtype: "compact_boundary"` |
| 24 | Tool result clearing: remove old tool results; one of the lightest forms of compaction. | 1 | FAIL, fixed | "one of the safest lightest touch forms of compaction" |
| 25 | Just in time: light identifiers such as file paths; load data with tools when needed. | 1 | PASS | "lightweight identifiers (file paths, stored queries, web links" |
| 26 | Subagent returns only its final response; main context grows by a summary. | 3 | PASS | "A subagent returns only its final response" |
| 27 | Example: large tool outputs; one big file or verbose command can use thousands of tokens in one turn. | 3 | PASS | "can use thousands of tokens in a single turn" |
| 28 | Compaction replaces older messages with a summary; early instructions may be lost. | 3 | PASS | "specific instructions from early in the conversation may not be preserved" |
| 29 | CLAUDE.md is re-injected on every request. | 3 | PASS | "CLAUDE.md content is re-injected on every request" |
| 30 | A `PreCompact` hook can archive the full transcript before compaction. | 3 | PASS | "Archive full transcript before summarizing" |
| 31 | Return only the fields the model needs for its next step; bloated results waste context. | 4 | PASS | "Bloated responses waste context" |
| 32 | Every tool definition takes context space; with tool search off, each MCP server adds all its schemas to every request. | 3 | PASS | "Every tool definition takes context space." |
| 33 | A detailed description is by far the most important factor in tool performance. | 4 | PASS | "This is by far the most important factor in tool performance." |
| 34 | Cached prefixes still occupy the window; caching changes the price, not the count. | 2 | PASS | "Cached prompt prefixes still occupy the context window" |

Fixed (claim 24): Technical said only "one of the lightest forms of compaction" and did not say what clearing does, but the Layman voice and the Key words row said "remove old tool results". Added "remove old tool results" to Technical (S1: clearing removes old tool outputs). Re-checked: PASS.

Also added internal links to `/ai-agents/memory/` and `/ai-agents/llm-decides/` (both pages exist).

## Other checks

| Check | Verdict |
|---|---|
| Official / primary sources only (Anthropic docs and engineering) | PASS |
| The invented example says it is invented ("This example is invented.") | PASS |
| "Tutorial advice" tip has no `<Cite>` (all 3 voices) | PASS |
| No run of more than 10 words copied from a source (longest runs: 8–10 words, for example "each MCP server adds all its tool schemas to every request") | PASS |
| Text diagram matches the S3 table | PASS |
| `## Key words` rows agree with the claims above | PASS |

Open FAILs: 0
