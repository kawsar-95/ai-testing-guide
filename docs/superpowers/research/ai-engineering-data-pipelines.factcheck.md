# Fact-check: content/ai-engineering/data-pipelines.mdx

Checked 2026-10-28 by an agent that did not write the page. I fetched all 6 sources fresh. I did not trust the quotes of the research notes.

Sources: [1] Anthropic, Introducing Contextual Retrieval. [2] OpenAI, Retrieval guide (the URL `platform.openai.com/docs/guides/retrieval` gives a 301 to `developers.openai.com/api/docs/guides/retrieval`; the content is the same, no deprecation notice). [3] LangChain, Text splitter integrations. [4] LangChain, Document loader integrations. [5] LangChain, Build a semantic search engine. [6] OWASP LLM08:2025.

All sources are official vendor docs or OWASP. No blog, forum, or AI summary.

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | RAG retrieves relevant text from a knowledge base and adds it to the prompt of the user | 1 | PASS | "RAG is a method that retrieves relevant information from a knowledge base and appends it to the user's prompt" |
| 2 | Split the corpus into chunks, usually a few hundred tokens or less | 1 | PASS | "Break down the knowledge base (the "corpus" of documents) into smaller chunks of text, usually no more than a few hundred tokens" |
| 3 | Turn each chunk into a vector embedding with an embedding model | 1 | PASS | "Use an embedding model to convert these chunks into vector embeddings that encode meaning" |
| 4 | Store the embeddings in a vector database that searches by meaning | 1 | PASS | "Store these embeddings in a vector database that allows for searching by semantic similarity." |
| 5 | Under about 200,000 tokens (about 500 pages): put all of it in the prompt, skip RAG | 1 | PASS | "If your knowledge base is smaller than 200,000 tokens (about 500 pages of material), you can just include the entire knowledge base in the prompt" |
| 6 | A document loader reads data from a source (Slack, Notion, Google Drive) into one standard format | 4 | PASS | "a standard interface for reading data from different sources (such as Slack, Notion, or Google Drive)" into the LangChain Document format |
| 7 | `load()` reads all at once; `lazy_load()` streams, for big datasets | 4 | PASS | "Loads all documents at once." / "Streams documents lazily, useful for large datasets." |
| 8 | `Document` has `page_content` (text) and `metadata` (a dict, e.g. source and page) | 5 | PASS | "`page_content`: a string representing the content." / "`metadata`: a dict containing arbitrary metadata."; example output `metadata={'page': 4, 'source': ...}` |
| 9 | OWASP: validate knowledge sources, accept only trusted sources, audit for hidden content and data poisoning | 6 | PASS | "Implement robust data validation pipelines for knowledge sources." / "Regularly audit and validate the integrity of the knowledge base for hidden codes and data poisoning." / "Accept data only from trusted and verified sources." |
| 10 | Example: resume with white text on white background that tells the model to recommend the candidate | 6 | PASS | "An attacker creates a resume that includes hidden text, such as white text on a white background" with instructions that make the RAG screening system recommend the candidate |
| 11 | A text splitter cuts large documents into chunks that are retrievable one at a time and fit the context window | 3 | PASS | "break large docs into smaller chunks that will be retrievable individually"; the page names the context window limit as the goal |
| 12 | `RecursiveCharacterTextSplitter` is the start for most cases | 3 | PASS | "For most use cases, start with the RecursiveCharacterTextSplitter." |
| 13 | It keeps paragraphs whole, then falls back to sentences, then words | 3 | PASS | "attempts to keep larger units (e.g., paragraphs) intact. If a unit exceeds the chunk size, it moves to the next level (e.g., sentences)", down to words |
| 14 | For HTML, Markdown, JSON, or code, a splitter can follow the structure (headers) | 3 | PASS | "Some documents have an inherent structure, such as HTML, Markdown, or JSON files"; "Markdown: Split based on headers". The page also lists code splitting. |
| 15 | Code: import `langchain_text_splitters`, `RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200, add_start_index=True)`, `split_documents(docs)` | 5 | PASS | The import and the constructor match the tutorial code exactly. `split_documents` is the method the tutorial calls. |
| 16 | `add_start_index=True` saves the character offset of each chunk in its metadata | 5 | PASS | each split "keeps a `start_index` metadata field for its character offset in the original document" |
| 17 | OpenAI vector store default: 800-token chunks, 400-token overlap | 2 | PASS | "By default, `max_chunk_size_tokens` is set to `800` and `chunk_overlap_tokens` is set to `400`." |
| 18 | Size from 100 to 4096 tokens | 2 | PASS | "`max_chunk_size_tokens` must be between 100 and 4096 inclusive." |
| 19 | Overlap "must not be more than half" of the chunk size | 2 | FAIL | Source: "should not exceed `max_chunk_size_tokens / 2`". The page made "should" into "must". Fixed (see Re-check). |
| 20 | "revenue grew by 3%" does not say which company or quarter | 1 | PASS | Example chunk "The company's revenue grew by 3% over the previous quarter." The article says it lacks the company and the time period. |
| 21 | Contextual Retrieval: a model writes a 50 to 100 token context, prepended before embedding and indexing | 1 | PASS | "The resulting contextual text, usually 50-100 tokens, is prepended to the chunk before embedding it and before creating the BM25 index." |
| 22 | In Anthropic's tests, this cut failed retrievals by 49% | 1 | PASS | "Combining Contextual Embeddings and Contextual BM25 reduced the top-20-chunk retrieval failure rate by 49%". Contextual Retrieval is that combination. "In Anthropic's tests" keeps the scope. |
| 23 | OpenAI file `attributes`, at most 16 keys | 2 | PASS | "The dictionary can have at most 16 keys" |
| 24 | OWASP: tag and classify data to control access levels | 6 | PASS | "Tag and classify data within the knowledge base to control access levels and prevent data mismatch errors." |
| 25 | Example table, Load: a PDF loader makes one `Document` per page, with `source` and `page` | 5 | PASS | The tutorial helper loops `for i, page in enumerate(reader.pages)` with `metadata={"source": file_path, "page": i}`. |
| 26 | Example table, Clean: drop hidden text, accept only HR folder files, as OWASP advises | 6 | PASS | OWASP: extraction tools that ignore formatting and detect hidden content; "Accept data only from trusted and verified sources." |
| 27 | Example table, Chunk: 1000 and 200 are the LangChain tutorial values | 5 | PASS | `chunk_size=1000, chunk_overlap=200` |
| 28 | Example table, Enrich: model adds a short context per chunk | 1 | PASS | Same technique as claim 21. The context text is the tutorial's own example. |
| 29 | Example table, Tag: OWASP calls this a permission-aware store | 6 | PASS | "Implement fine-grained access controls and permission-aware vector and embedding stores." |
| 30 | Example: "Staff get 20 days" could match any country | none | PASS | The HR assistant is the tutorial's own example scenario, not a sourced fact. |
| 31 | Mistake: chunks with no context are hard to retrieve and use | 1 | PASS | The article says traditional chunking removes context, so the system fails to retrieve the relevant chunk. |
| 32 | Mistake: chunk size, boundary, overlap change retrieval quality, so test them | 1 | PASS | "The choice of chunk size, chunk boundary, and chunk overlap can affect retrieval performance" |
| 33 | Mistake: structured files group related text by structure | 3 | PASS | structure-based splitting "often naturally groups semantically related text" |
| 34 | Mistake: no source or offset in metadata, so nobody can trace an answer | none | FAIL | No cite, and the text did not mark it as the tutorial's own advice. Fixed (see Re-check). |
| 35 | Mistake: unverified sources bring poisoned data or hidden instructions | 6 | PASS | "Poisoned data can originate from insiders, prompts, data seeding, or unverified data providers"; hidden-instruction resume example |
| 36 | Mistake: in a shared vector database, one group can get the private data of another | 6 | PASS | "In multi-tenant environments where multiple classes of users or applications share the same vector database", embeddings of one group can show in the responses of another |
| 37 | Mistake: sources that disagree cause knowledge conflicts | 6 | PASS | "Data federation knowledge conflict errors can occur when data from multiple sources contradict each other" |
| 38 | Tester checks | none | PASS | In a "Tutorial advice" callout that says "These checks are the tutorial's own advice." No cites. |
| 39 | Key words: Corpus, Embedding, Contextual Retrieval | 1 | PASS | Same quotes as claims 2, 3, 21. |
| 40 | Key words: Document loader | 4 | PASS | Same quote as claim 6. |
| 41 | Key words: Chunk | 3 | PASS | Same quote as claim 11. |
| 42 | Key words: Chunk overlap | 2 | PASS | `chunk_overlap_tokens` in the chunking strategy. |
| 43 | Key words: Metadata (source, page, access tag) | 5 | PASS | "a dict containing arbitrary metadata"; source and page in the example. The access tag is an example of arbitrary metadata. |
| 44 | Key words: Data poisoning, on purpose or by accident | 6 | PASS | OWASP says poisoning can be intentional or unintentional (insiders, data seeding, unverified providers). |

Copy check (manual, all page text against the quotes above): the longest shared run is 5 words ("in a vector database that"). No run of 8 or more words. PASS.

## Re-check (after the fixes)

| # | Changed text | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 19 | "the overlap should not be more than half of the chunk size" (Technical, Layman; Bangla "অর্ধেকের বেশি হওয়া উচিত নয়") | 2 | PASS | "should not exceed `max_chunk_size_tokens / 2`" |
| 34 | "Then nobody can trace an answer back to its page (the tutorial's own advice)." (all 3 voices) | none | PASS | Now marked as the tutorial's own advice. |

`node --test tests/voice-source.test.ts tests/ai-engineering.test.ts`: pass 29, fail 0.

Open FAILs: 0
