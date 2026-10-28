# Fact check: How AI Agents Work, Memory

Page: `content/ai-agents/memory.mdx`. Checker: an agent that did not write the page. Date: 2026-10-28. Each source was downloaded on this date (the Markdown version of each Anthropic and LangChain page) and the claims were checked against the downloaded text, not against the research notes.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://platform.claude.com/docs/en/build-with-claude/context-windows | yes | Anthropic docs |
| 2 | https://code.claude.com/docs/en/agent-sdk/agent-loop | yes | Anthropic docs |
| 3 | https://platform.claude.com/docs/en/agents-and-tools/tool-use/memory-tool | yes | Anthropic docs |
| 4 | https://code.claude.com/docs/en/memory | yes | Anthropic docs |
| 5 | https://docs.langchain.com/oss/python/langgraph/memory | yes | LangChain docs (title "Memory overview") |

Each source 1–5 is cited at least one time. Each cite number (1–5) has a source. The titles in `page.sources` match the page titles.

## Claims (Technical text)

| # | Claim | Cite | Verdict | Quote from the source |
|---|---|---|---|---|
| 1 | Context window: all text the model can reference when it writes a response. | 1 | PASS | "all the text a language model can reference when generating a response" |
| 2 | Anthropic calls it a "working memory"; it is not the training data. | 1 | PASS | "different from the large corpus of data the language model was trained on" |
| 3 | In the Agent SDK the window does not reset between turns in a session. | 2 | PASS | "It does not reset between turns within a session." |
| 4 | Prompt, history, tool inputs and outputs accumulate. | 2 | PASS | "Everything accumulates: the system prompt, tool definitions, conversation history..." |
| 5 | The memory tool stores and retrieves information across conversations in a directory of files. | 3 | PASS (wording fixed) | "store and retrieve information across conversations in a directory of memory files" |
| 6 | LangGraph keeps long-term memories in stores, across conversations. | 5 | PASS | "LangGraph provides stores ... to let you save and recall long-term memories" |
| 7 | System prompt, messages, tool results, tool definitions count toward the window. | 1 | PASS | "Everything in the request counts toward the context window" |
| 8 | Up to 1M tokens, depending on the model. | 1 | PASS | "up to 1M tokens, depending on the model" |
| 9 | Accuracy and recall degrade as tokens grow: context rot. | 1 | PASS | "accuracy and recall degrade, a phenomenon known as context rot" |
| 10 | Input larger than the window: 400 error "prompt is too long". | 1 | PASS | "the API returns a 400 invalid_request_error ("prompt is too long")" |
| 11 | Compaction summarizes older history to free space. | 1 | PASS | "Compaction automatically summarizes earlier parts of the conversation" |
| 12 | Agent SDK: compaction can lose early instructions; persistent rules belong in CLAUDE.md. | 2 | PASS | "Persistent rules belong in CLAUDE.md" |
| 13 | Claude Code loads CLAUDE.md and auto memory at the start of every conversation. | 4 | PASS | "Both are loaded at the start of every conversation." |
| 14 | Memory tool commands `view`, `create`, `str_replace`, `insert`, `delete`, `rename` under `/memories`. | 3 | PASS | "Tool commands" section: view, create, str_replace, insert, delete, rename |
| 15 | The memory tool runs client-side on storage you control. | 3 | PASS | "The memory tool operates client-side: Claude requests file operations" |
| 16 | With the tool enabled, Claude checks its memory directory before a task. | 3 | PASS | "Claude automatically checks its memory directory before starting a task" |
| 17 | Auto memory loads first 200 lines or 25KB of `MEMORY.md`; topic files on demand. | 4 | PASS | "The first 200 lines of MEMORY.md, or the first 25KB" |
| 18 | CLAUDE.md and auto memory are context, not enforced configuration. | 4 | PASS | "Claude treats them as context, not enforced configuration." |
| 19 | LangGraph short-term memory is agent state with thread-scoped checkpoints; long-term in stores with namespaces. | 5 | PASS | "persisted via thread-scoped checkpoints" / "saved within custom namespaces" |
| 20 | Memories are written in the hot path or in a background task. | 5 | PASS | "'in the hot path' and 'in the background'" |
| 21 | Example: the agent checks its memory directory first. | 3 | PASS | see claim 16 |
| 22 | Example: early instructions may not survive compaction. | 2 | PASS | "specific instructions from early in the conversation may not be preserved" |
| 23 | Project-root CLAUDE.md survives compaction; Claude re-reads it from disk. | 4 | PASS | "Project-root CLAUDE.md survives compaction: after /compact, Claude re-reads it" |
| 24 | Each Claude Code session begins with a fresh context window. | 4 | PASS | "Each Claude Code session begins with a fresh context window." |
| 25 | Most LLMs perform poorly over long contexts. | 5 | PASS | "most LLMs still perform poorly over long contexts" |
| 26 | To block an action, use a `PreToolUse` hook. | 4 | PASS | "To block an action regardless of what Claude decides, use a PreToolUse hook" |
| 27 | Safeguards: path traversal (`/memories/../../secrets.env`), sensitive data, file size caps, delete old files. | 3 | PASS | "A malicious path such as /memories/../../secrets.env" / "Periodically delete memory files" |
| 28 | Auto memory is machine-local, not shared across machines or cloud environments. | 4 | PASS | "Files are not shared across machines or cloud environments." |

## Other checks

| Check | Verdict |
|---|---|
| Sources are official or primary only | PASS |
| The real-life example says it is invented | PASS ("This example is invented.") |
| The tester tip has no cites and says it is tutorial advice | PASS |
| Internal link `/agent-memory/` exists | PASS (`app/(site)/agent-memory/page.tsx`) |
| No run of more than 10 words copied from a source (`scripts/linux_overlap.py` on the downloaded text) | FAIL, fixed. Claim 5 copied 12 words from S3 ("lets Claude store and retrieve information across conversations in a directory of"). Reworded to "lets Claude keep information in a directory of files and read it back in later conversations". After the fix, the longest run is 10 words ("Each Claude Code session begins with a fresh context window", S4). |

## Fixes

1. Technical, "In plain words": reworded the memory tool sentence to remove the 12-word run copied from S3. Layman and Bangla were already in their own words.

Open FAILs: 0
