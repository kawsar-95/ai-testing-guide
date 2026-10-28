# Agent Memory: Semantic Memory — research notes

Date: 2026-10-28

## Sources

| # | Title | Publisher | URL | Accessed |
|---|---|---|---|---|
| S1 | Cognitive Architectures for Language Agents (CoALA), Sumers, Yao, Narasimhan, Griffiths | arXiv 2309.02427 (TMLR) | https://arxiv.org/abs/2309.02427 | 2026-10-28 |
| S2 | semantic memory | APA Dictionary of Psychology | https://dictionary.apa.org/semantic-memory | 2026-10-28 |
| S3 | Memory overview | LangChain (LangGraph docs) | https://docs.langchain.com/oss/python/concepts/memory | 2026-10-28 |
| S4 | Memory tool | Anthropic (Claude Platform docs) | https://platform.claude.com/docs/en/agents-and-tools/tool-use/memory-tool | 2026-10-28 |

The S1 quotes come from the HTML full text at https://arxiv.org/html/2309.02427 (section 4.1).

## Claims

| # | Claim (plain words) | Source | Exact quote (under 40 words, verbatim) |
|---|---|---|---|
| 1 | In an agent, semantic memory holds what the agent knows about the world and about itself. | S1 | "Semantic memory stores an agent’s knowledge about the world and itself." |
| 2 | Psychology origin: semantic memory is memory for facts and concepts. | S2 | "memory for general factual knowledge and concepts, of the kind that endows information with meaning" |
| 3 | Semantic memory and episodic memory are the two kinds of declarative memory. | S2 | "Semantic memory is considered by many theorists to be one of the two forms of declarative memory, the other being episodic memory." |
| 4 | Endel Tulving defined the term in 1972. | S2 | "[defined in 1972 by Endel Tulving]" |
| 5 | CoALA treats a retrieval corpus (for example Wikipedia in RAG) as a semantic memory. | S1 | "can be viewed as retrieving from a semantic memory of unstructured text (e.g., Wikipedia)." |
| 6 | An agent can write new knowledge into semantic memory. This is a form of learning. | S1 | "language agents may also write new knowledge obtained from LLM reasoning into semantic memory as a form of learning" |
| 7 | Agents often use semantic memory to remember facts about a user (personalization). | S3 | "For AI agents, semantic memory is often used to personalize applications by remembering facts or concepts from past interactions." |
| 8 | Semantic memory (what is stored) is not the same as semantic search (how you find it). | S3 | "Semantic memory is a term from psychology, referring to storing facts and knowledge, while semantic search is a method for retrieving information based on meaning rather than exact matches." |
| 9 | One way to store facts is one "profile" document. Updates become error-prone as it grows. | S3 | "This can be become error-prone as the profile gets larger" |
| 10 | Another way is a collection of many small memories. Then the model must update and delete items, and it can insert or update too much. | S3 | "some models may default to over-inserting and others may default to over-updating." |
| 11 | With the Claude memory tool, Claude stores knowledge in files that stay between sessions. | S4 | "Claude can create, read, update, and delete files that persist between sessions, building up knowledge over time without keeping everything in the context window." |
| 12 | Claude usually does not write sensitive data to memory, but the app should also strip it. | S4 | "Claude usually refuses to write sensitive information to memory files. For stronger guarantees, add validation that strips sensitive data before your handler writes the file." |
| 13 | The memory handler must check every path, to stop path traversal attacks. | S4 | "Your implementation must validate every path in every command to prevent directory traversal attacks." |
| 14 | Memory lives in the application, not in the model. | S4 | "Memory lives entirely in your application." |
| 15 | LangGraph keeps long-term memories as JSON documents in a store. | S3 | "LangGraph stores long-term memories as JSON documents in a store." |
| 16 | CoALA has a working memory and three long-term memories. | S1 | "These include short-term working memory and several long-term memories: episodic, semantic, and procedural." |

## Notes

- Claim 9: the source has the typo "can be become". Keep it as written in the quote, or paraphrase on the page.
- Claim 5: CoALA counts a RAG corpus as semantic memory. The infographic has a separate "Retrieval Memory". The page must not say that CoALA has a "retrieval memory" type. See `agent-memory-retrieval-memory.md`.
- S4 does not use the word "semantic memory". The page can show the memory tool as one way to store facts, but must say that this is the tutorial's own mapping.
- LangChain (S3) is a vendor doc of a framework. Its table maps semantic memory to "Facts about a user".
- Test ideas (tutorial's own advice, no cite): tell the agent a fact, start a new session, and check that it uses the fact; change the fact and check that the old value is not used (stale fact); check that a fact of user A never shows for user B; try a path such as `/memories/../x` against the handler; check that a password in the chat is not saved.
