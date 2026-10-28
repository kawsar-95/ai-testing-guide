# Fact check: Semantic Memory

Date: 2026-10-28

Page: `content/agent-memory/semantic-memory.mdx` (Technical text, lede, Key words). Checked against the quotes in `agent-memory-semantic-memory.md` and the live sources: S1 (arxiv.org/html/2309.02427, section 4.1), S3 and S4 (fetched on 2026-10-28). The checker did not write the page.

| # | Claim on the page | Cite | Verdict (PASS/FAIL) | Quote or reason |
|---|---|---|---|---|
| 1 | Semantic memory holds what an agent knows about the world and about itself. | 1 | PASS | S1: "Semantic memory stores an agent's knowledge about the world and itself." |
| 2 | It stores facts, not events; events belong to episodic memory. | none | PASS | Definition restated from claim 1 and the APA contrast in row 7. The Python and failed-test lines are examples, not facts. |
| 3 | Many agents use semantic memory to remember facts about a user from past conversations, to personalize answers. | 3 | PASS | S3: "For AI agents, semantic memory is often used to personalize applications by remembering facts or concepts from past interactions." |
| 4 | The 7 names of this module follow the infographic "7 Types of Agent Memory"; research papers group memory differently. | none | PASS | Module framing, the same on every agent-memory page. See `agent-memory-sources.md`. It is not a fact from a source. |
| 5 | CoALA has a working memory and three long-term memories: episodic, semantic, procedural. | 1 | PASS | S1: "These include short-term working memory and several long-term memories: episodic, semantic, and procedural." |
| 6 | In people, semantic memory is memory for general facts and concepts; it gives information its meaning. | 2 | PASS | S2: "memory for general factual knowledge and concepts, of the kind that endows information with meaning" |
| 7 | Endel Tulving defined the term in 1972. | 2 | PASS | S2: "[defined in 1972 by Endel Tulving]" |
| 8 | Many theorists see it as one of two kinds of declarative memory; episodic is the other. | 2 | FIXED → PASS | S2: "Semantic memory is considered by many theorists to be one of the two forms of declarative memory, the other being episodic memory." The page copied a 9-word run of this sentence. Changed to "one of two kinds of declarative memory. Episodic memory is the other kind". |
| 9 | CoALA takes the term to agents; semantic memory stores knowledge about the world and itself. | 1 | PASS | Same S1 quote as row 1. |
| 10 | CoALA says RAG reads from a semantic memory, for example unstructured text such as Wikipedia. | 1 | PASS | S1: "can be viewed as retrieving from a semantic memory of unstructured text (e.g., Wikipedia)." |
| 11 | CoALA has no "retrieval memory" type; a RAG corpus is part of semantic memory. | 1 | PASS | S1 lists only working, episodic, semantic, procedural (row 5); row 10 for the corpus. |
| 12 | "Semantic memory" names what you store; "semantic search" finds data by meaning, not exact words. They differ. | 3 | PASS | S3: "Semantic memory is different from "semantic search," which is a technique for finding similar content"; notes claim 8 quote. |
| 13 | An agent can write new knowledge from its own reasoning into semantic memory (learning). | 1 | PASS | S1: "language agents may also write new knowledge obtained from LLM reasoning into semantic memory as a form of learning" |
| 14 | "The facts must live in a store outside the model." | none | FIXED → PASS | No source says "must". Replaced with "LangGraph saves long-term memories in a store, as JSON documents <Cite n={3} />." S3: "LangGraph stores long-term memories as JSON documents in a store." Same change in Layman and Bangla. |
| 15 | LangChain describes two shapes: profile and collection. | 3 | PASS | S3: "a single, continuously updated "profile"" and "a collection of documents that are continuously updated and extended over time." |
| 16 | Profile: updates become error-prone as it grows. | 3 | PASS | S3: "This can be become error-prone as the profile gets larger" |
| 17 | Collection: some models insert too much, others update too much. | 3 | PASS | S3: "some models may default to over-inserting and others may default to over-updating." |
| 18 | With the Claude memory tool, Claude can make, read, change, and remove memory files that stay between sessions, and builds knowledge without keeping all in the context window. | 4 | FIXED → PASS | S4: "Claude can create, read, update, and delete files that persist between sessions, building up knowledge over time without keeping everything in the context window." The page copied a 9-word run. Reworded to "make, read, change, and remove memory files, and these files stay between sessions". |
| 19 | The memory lives entirely in your application, not in the model. | 4 | PASS | S4: "Memory lives entirely in your application." and "The memory tool operates client-side". |
| 20 | The Anthropic docs do not use the term "semantic memory"; the mapping is the tutorial's own view. | none | PASS | Checked S4: the term does not occur. The mapping is marked "Tutorial's own view". |
| 21 | The flow diagram. | none | PASS | Marked "the tutorial's own summary of the flow". |
| 22 | Real-life example (chatbot, pytest, new runner). | 4, 3 | PASS | Marked "the tutorial's own illustration". The cites support only the memory tool (row 18), personalization (row 3), and over-insert (row 17). |
| 23 | Sensitive data: Claude usually does not agree to put sensitive information in memory files; the app should strip it for stronger guarantees. | 4 | FIXED → PASS | S4: "Claude usually refuses to write sensitive information to memory files. For stronger guarantees, add validation that strips sensitive data before your handler writes the file." The page copied a 10-word run. Reworded the first sentence. |
| 24 | The handler must validate every path in every command; otherwise directory traversal can reach files outside the memory folder. | 4 | PASS | S4: "A malicious path such as `/memories/../../secrets.env` can reach files outside the `/memories` directory. Your implementation must validate every path in every command to prevent directory traversal attacks." |
| 25 | Too many inserts or updates give duplicate facts or lost facts. | 3 | PASS | The cited part matches row 17. "Duplicate or lost facts" is the direct result of over-inserting and over-updating. |
| 26 | If the application loses the files, the facts are gone. | 4 | PASS | Follows from row 19: the memory is only in the application. |
| 27 | "What a tester can check" list. | none | PASS | In a "Tutorial advice" callout, no cites. `/memories/../x` matches the S4 traversal example. |
| 28 | Key words table. | none | PASS | Each row restates a checked claim (rows 1, 5, 8, 10, 12, 15, 18, 24). "Declarative memory" omits "many theorists"; it is a short glossary entry and the body (row 8) gives the hedge. |
| 29 | Every source is cited; every cite has a source. | — | PASS | Sources 1–4 are each cited. Only n = 1–4 are used. |
| 30 | No fixed context-window sizes or cutoff dates. | — | PASS | None on the page. |
| 31 | No long copied word runs. | — | FIXED → PASS | `scripts/linux_overlap.py` (8-word runs) against the notes quotes and the fetched sentences The runs of rows 18 and 23 were found by hand and fixed first. The script then found the run of row 8 and 1 run in the new row 14 text. After the fixes: 0 runs. |

Totals: 27 PASS, 4 FIXED → PASS, 0 open FAIL.

Open FAILs: 0
