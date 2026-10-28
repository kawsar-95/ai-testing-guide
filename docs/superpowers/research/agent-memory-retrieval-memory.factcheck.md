# Fact check: Retrieval Memory

Date: 2026-10-28

Page: `content/agent-memory/retrieval-memory.mdx` (Technical text, lede, and Key words). Checked by an agent that did not write the page. Quotes come from `agent-memory-retrieval-memory.md`, `agent-memory-episodic-memory.md`, `agent-memory-working-memory.md`, and `agent-memory-semantic-memory.md`. The CoALA module list and the Telnyx rows were also checked on the source pages (https://arxiv.org/html/2309.02427, https://developers.telnyx.com/docs/agent-memory) on 2026-10-28.

| # | Claim on the page | Cite | Verdict (PASS/FAIL) | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: retrieval memory is an outside store that the agent searches; for a tester it is a search system with its own bugs. | none | PASS | Definition and framing of the page, not a sourced fact. Matches the Key words row and claims 1-2 of the notes. |
| 2 | A model has knowledge in its weights and can also use a store of documents that a retriever searches. | 1 | PASS | S1: "Hybrid models that combine parametric memory with non-parametric (i.e., retrieval-based) memories" |
| 3 | Lewis et al. call the weights "parametric memory" and the store "non-parametric memory". | 1 | PASS | Same S1 quote as row 2. |
| 4 | You can change the knowledge in the store directly and see which items the model used. | 1 | PASS | S1: "knowledge can be directly revised and expanded, and accessed knowledge can be inspected and interpreted." |
| 5 | You can update the knowledge without a new training run. | 1 | PASS | S1: "knowledge can be easily updated at test time." |
| 6 | The 7 names of the module follow the infographic "7 Types of Agent Memory". | none | PASS | Statement about the module itself, not a sourced fact (`agent-memory-sources.md`). |
| 7 | CoALA has working memory and three long-term memories: episodic, semantic, procedural. | 2 | PASS | S2 (source page, section 4.1): "short-term working memory and several long-term memories: episodic, semantic, and procedural." |
| 8 | In CoALA retrieval is not a memory; it is an action that reads from them. | 2 | PASS | S2: "reads information from long-term memories into working memory." The module list (row 7) has no retrieval memory. |
| 9 | "Retrieval memory" is the infographic's name; the sources do not define a memory type with that name. Tutorial's own view on what it means. | none | PASS | Notes, "Notes" section: "No primary source above defines a memory type with that name." The view is marked "Tutorial's own view". |
| 10 | Lewis et al. describe hybrid models that combine parametric memory with retrieval-based memory. | 1 | PASS | Same S1 quote as row 2. |
| 11 | In RAG the store is a dense vector index of Wikipedia, read by a pre-trained neural retriever. | 1 | PASS | S1: "the non-parametric memory is a dense vector index of Wikipedia, accessed with a pre-trained neural retriever." |
| 12 | A CoALA retrieval action reads from long-term memory into working memory. | 2 | PASS | Same S2 quote as row 8. |
| 13 | CoALA counts a RAG document collection as semantic memory of unstructured text. | 2 | PASS | S2 (semantic notes claim 5): "can be viewed as retrieving from a semantic memory of unstructured text (e.g., Wikipedia)." |
| 14 | MemGPT moves data between fast and slow memory, like a computer with paging. | 3 | PASS | S3 abstract: "hierarchical memory systems in traditional operating systems ... data movement between fast and slow memory." The HTML text names "paging between physical memory and disk" (notes). |
| 15 | The fast memory is the context; the slow memory is "archival storage", a read/write database of text. | 3 | PASS | S3: "a read/write database storing arbitrary length text objects"; MemGPT pulls results "into main context". |
| 16 | The agent gets this memory from a search at run time, not from training; the four-step loop diagram. | none | PASS | Description of the mechanism of rows 2, 11 (S1). Not a new fact. |
| 17 | Search can use rules, keyword (sparse), or vector (dense) search; the choice depends on the information and memory type. | 2 | PASS | S2: "Depending on the information and memory type, it could be implemented in various ways, e.g., rule-based, sparse, or dense retrieval." The glosses keyword/vector are the standard meanings. |
| 18 | In MemGPT the model calls a function on archival storage, and results come into main context page by page; so the model decides when to look up. | 3 | PASS | S3: "MemGPT queries archival storage via function calling, which pulls paginated search results into main context." |
| 19 | Memory-augmented agents can read and write their own content, not only text that people wrote. | 2 | PASS | S2: "memory-augmented language agents can both read and write self-generated content autonomously." |
| 20 | MemGPT's archival storage is read/write "for this reason". | 3 | FIXED → PASS | S3 says the storage is read/write, but no source links this to the CoALA statement (invented causal link). Changed to "MemGPT's archival storage is also read/write". |
| 21 | Telnyx Agent Memory API has a "recall" endpoint that returns ranked facts for a question. | 4 | PASS | S4: `POST /namespaces/{ns}/profiles/{id}/recall`, "Ranked facts for a question" |
| 22 | Telnyx namespaces: a separate store for each application or environment. | 4 | PASS | S4: "a separate memory store per application or environment." |
| 23 | Real-life example (support chatbot) is the tutorial's own illustration. | none | PASS | Marked "This example is the tutorial's own illustration. It is not from a source." |
| 24 | An edited article gives new answers with no new training: the update property of non-parametric memory. | 1 | PASS | Same S1 quote as row 5. |
| 25 | The bot now writes to the store as well as reads from it. | 2 | PASS | Same S2 quote as row 19. |
| 26 | A namespace per application or environment is one way to keep stores apart. | 4 | PASS | Same S4 quote as row 22. Note: a Telnyx namespace separates applications or environments; the page says "one way", so it does not claim per-customer isolation. |
| 27 | RAG models hallucinated less than the baseline model without retrieval. | 1 | PASS | S1: "RAG models hallucinate less and generate factually correct text more often than BART." BART is the parametric-only baseline. "'Less' is not 'never'" is reasoning, not a fact. |
| 28 | Generative Agents: a common error was that the agent did not retrieve the relevant memories. | 5 | PASS | S5: "the most common errors arose when the agent failed to retrieve relevant memories, fabricated embellishments to the agent's memory, ..." |
| 29 | The agents sometimes added false details to their memories. | 5 | PASS | S5: "At times, the agents hallucinated embellishments to their knowledge." |
| 30 | Models use information at the start or end of a long input best; performance drops in the middle. | 6 | PASS | S6: "performance is often highest when relevant information occurs at the beginning or end of the input context, and significantly degrades when models must access relevant information in the middle of long contexts" |
| 31 | In the Telnyx API a memory cannot be recalled until its write completes; a read just after the write does not see it. | 4 | PASS | S4: "A memory is not recallable until its operation completes. If you write and immediately read, you will not see it yet" |
| 32 | Without a boundary, one user's data can come back in another user's answer; separate stores per application or environment keep memories apart. | 4 | PASS | First sentence is a risk statement (tutorial reasoning, "can"). Second: same S4 quote as row 22. |
| 33 | "What a tester can check" list. | none | PASS | In a callout titled "Tutorial advice", no cites, as the notes plan. |
| 34 | Key words table (9 terms). | none | PASS | Each row restates a cited claim above (rows 3, 11, 12, 15, 22) or is a general definition. Key words have no cites by rule. |

## Other checks

| Check | Verdict | Note |
|---|---|---|
| Every source is cited | PASS | Sources 1-6 each have one or more `<Cite>`. |
| Every cite has a source | PASS | Cites use n = 1-6 only; `page.sources` has 6 entries. |
| Uncited statements are the tutorial's own or not facts | PASS | Rows 1, 6, 9, 16, 23, 32 (first sentence), 33, 34. |
| No fixed context-window sizes or cutoff dates | PASS | None on the page. |
| No long copied word runs | PASS | Longest runs from sources are short noun phrases ("dense vector index of Wikipedia", "pre-trained neural retriever", "read/write database"). |

Open FAILs: 0
