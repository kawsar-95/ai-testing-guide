# Agent Memory: Retrieval Memory — research notes

Date: 2026-10-28

## Sources

| # | Title | Publisher | URL | Accessed |
|---|---|---|---|---|
| S1 | Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks, Lewis et al. | arXiv 2005.11401 (NeurIPS 2020) | https://arxiv.org/abs/2005.11401 | 2026-10-28 |
| S2 | Cognitive Architectures for Language Agents (CoALA), Sumers, Yao, Narasimhan, Griffiths | arXiv 2309.02427 (TMLR) | https://arxiv.org/abs/2309.02427 | 2026-10-28 |
| S3 | MemGPT: Towards LLMs as Operating Systems, Packer et al. | arXiv 2310.08560 | https://arxiv.org/abs/2310.08560 | 2026-10-28 |
| S4 | Agent Memory: Long-Term Memory for AI Agents | Telnyx (developer docs) | https://developers.telnyx.com/docs/agent-memory | 2026-10-28 |

The S1, S2, and S3 quotes come from the abstracts and the HTML full texts at https://arxiv.org/html/2005.11401, https://arxiv.org/html/2309.02427, and https://arxiv.org/html/2310.08560.

## Claims

| # | Claim (plain words) | Source | Exact quote (under 40 words, verbatim) |
|---|---|---|---|
| 1 | RAG combines the model's own memory (parametric) with a memory that it searches (non-parametric). | S1 | "Hybrid models that combine parametric memory with non-parametric (i.e., retrieval-based) memories" |
| 2 | In RAG, the searched memory is a vector index of documents, read by a retriever. | S1 | "the non-parametric memory is a dense vector index of Wikipedia, accessed with a pre-trained neural retriever." |
| 3 | Knowledge in a store can be changed, and you can see which knowledge was used. | S1 | "knowledge can be directly revised and expanded, and accessed knowledge can be inspected and interpreted." |
| 4 | You can update the knowledge without training the model again. | S1 | "An advantage of non-parametric memory models like RAG is that knowledge can be easily updated at test time." |
| 5 | In the RAG study, answers had fewer hallucinations than without retrieval. | S1 | "RAG models hallucinate less and generate factually correct text more often than BART." |
| 6 | In CoALA, a retrieval action copies information from long-term memory into working memory. | S2 | "reads information from long-term memories into working memory." |
| 7 | Retrieval can use rules, keyword (sparse) search, or vector (dense) search. | S2 | "Depending on the information and memory type, it could be implemented in various ways, e.g., rule-based, sparse, or dense retrieval." |
| 8 | Agents can also write to the store, not only read human-written text. | S2 | "memory-augmented language agents can both read and write self-generated content autonomously." |
| 9 | MemGPT moves data between a small fast memory (the context) and a large slow memory, like an operating system. | S3 | "a technique drawing inspiration from hierarchical memory systems in traditional operating systems that provide the appearance of large memory resources through data movement between fast and slow memory." |
| 10 | MemGPT's archival storage is a read/write database of text. | S3 | "a read/write database storing arbitrary length text objects" |
| 11 | The model searches the store with a function call, and results come into the context page by page. | S3 | "MemGPT queries archival storage via function calling, which pulls paginated search results into main context." |
| 12 | A memory API can return ranked facts for a question. | S4 | "Ranked facts for a question" |
| 13 | Testable: a new memory is not found until its write is complete. | S4 | "A memory is not recallable until its operation completes. If you write and immediately read, you will not see it yet" |
| 14 | Separate stores per application or environment keep memories apart. | S4 | "boundary — a separate memory store per application or environment." |

## Notes

- "Retrieval memory" is the infographic's own name. No primary source above defines a memory type with that name. Lewis et al. (S1) call it "non-parametric memory" ("retrieval-based" memory). CoALA (S2) has no "retrieval memory" module: it has "retrieval actions", and it counts a RAG corpus as semantic memory ("retrieving from a semantic memory of unstructured text"). The page must say this.
- Claim 9 is from the abstract on the arXiv abstract page (S3 URL). The HTML full text has an older wording of the same sentence ("which provide the illusion of an extended virtual memory via paging between physical memory and disk"). Quote the abstract page.
- Claim 12 is a row of the endpoint table in S4 (`POST /namespaces/{ns}/profiles/{id}/recall`). Claim 14 is the "Namespace" row; in the source the word before it is "An isolation", with "isolation" as a link.
- S4 is the product doc of Telnyx, the sponsor of the infographic. It says the product is in beta. Use it only as one example of a memory API, not as a general rule.
- Failure modes from other topics: a retriever can return the wrong item (Generative Agents, see `agent-memory-episodic-memory.md`), and a model uses the middle of a long context worse (Lost in the Middle, see `agent-memory-working-memory.md`). Cite those sources if the page uses them.
- Test ideas (tutorial's own advice, no cite): ask a question whose answer is only in the store and check the answer cites the right document; change a document and check the next answer uses the new text; ask a question with no answer in the store and check that the agent says so; write and then read at once (claim 13); check that one tenant cannot retrieve another tenant's data.
