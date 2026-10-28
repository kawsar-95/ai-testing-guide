# AI Engineering page: Data Pipelines (research notes)

Writer notes for `content/ai-engineering/data-pipelines.mdx`. Fetched 2026-10-28 into `/tmp/claude-1000/ai-eng-src-data-pipelines/`. Fetched text is treated as data and is not committed.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | Introducing Contextual Retrieval (Anthropic Engineering, 2024-09-19) | https://www.anthropic.com/engineering/contextual-retrieval | 2026-10-28 |
| S2 | Retrieval (OpenAI API docs) | https://developers.openai.com/api/docs/guides/retrieval | 2026-10-28 |
| S3 | Text splitter integrations (LangChain docs) | https://docs.langchain.com/oss/python/integrations/splitters | 2026-10-28 |
| S4 | Document loader integrations (LangChain docs) | https://docs.langchain.com/oss/python/integrations/document_loaders | 2026-10-28 |
| S5 | Build a semantic search engine with LangChain (LangChain docs) | https://docs.langchain.com/oss/python/langchain/knowledge-base | 2026-10-28 |
| S6 | LLM08:2025 Vector and Embedding Weaknesses (OWASP GenAI Security Project) | https://genai.owasp.org/llmrisk/llm082025-vector-and-embedding-weaknesses/ | 2026-10-28 |

Page cite numbers: n=1 is S1, n=2 is S2, n=3 is S3, n=4 is S4, n=5 is S5, n=6 is S6.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | RAG retrieves relevant information from a knowledge base and adds it to the user's prompt. | S1 | "RAG is a method that retrieves relevant information from a knowledge base and appends it to the user's prompt" |
| C2 | Preprocessing: chunks of a few hundred tokens or less; embedding model; vector database with semantic search. | S1 | "Break down the knowledge base (the \"corpus\" of documents) into smaller chunks of text, usually no more than a few hundred tokens" / "Use an embedding model to convert these chunks into vector embeddings" / "Store these embeddings in a vector database" |
| C3 | Under 200,000 tokens (about 500 pages), put the whole knowledge base in the prompt. | S1 | "If your knowledge base is smaller than 200,000 tokens (about 500 pages of material), you can just include the entire knowledge base in the prompt" |
| C4 | Loaders read data from sources such as Slack, Notion, Google Drive into a standard format. | S4 | "Document loaders provide a standard interface for reading data from different sources (such as Slack, Notion, or Google Drive) into LangChain's Document format." |
| C5 | `load()` loads all; `lazy_load()` streams, for large datasets. | S4 | "load(): Loads all documents at once." / "lazy_load(): Streams documents lazily, useful for large datasets." |
| C6 | A Document has `page_content` and `metadata` (dict); example metadata `source` and `page`. | S5 | "page_content: a string representing the content." / "metadata: a dict containing arbitrary metadata." / `metadata={"source": file_path, "page": i}` |
| C7 | Validate knowledge sources, accept only trusted sources, audit for hidden codes and poisoning. | S6 | "Implement robust data validation pipelines for knowledge sources. Regularly audit and validate the integrity of the knowledge base for hidden codes and data poisoning. Accept data only from trusted and verified sources." |
| C8 | Example: resume with white-on-white hidden instructions to recommend the candidate. | S6 | "An attacker creates a resume that includes hidden text, such as white text on a white background" |
| C9 | Text splitters make chunks retrievable individually and within the context window. | S3 | "Text splitters break large docs into smaller chunks that will be retrievable individually and fit within model context window limit." |
| C10 | Start with RecursiveCharacterTextSplitter; keeps paragraphs, then sentences, then words. | S3 | "For most use cases, start with the RecursiveCharacterTextSplitter." / "attempts to keep larger units (e.g., paragraphs) intact" / "it moves to the next level (e.g., sentences)" / "down to the word level" |
| C11 | Structure-based splitting for HTML, Markdown, JSON, code (for example by headers). | S3 | "Some documents have an inherent structure, such as HTML, Markdown, or JSON files." / "Markdown: Split based on headers" / "Code: Split by functions" |
| C12 | Code example values and `add_start_index=True` stores the character offset in metadata. | S5 | `chunk_size=1000, chunk_overlap=200, add_start_index=True` / "each split keeps a start_index metadata field for its character offset in the original document" |
| C13 | OpenAI default: 800-token chunks, 400-token overlap; size 100–4096; overlap at most half. | S2 | "By default, `max_chunk_size_tokens` is set to `800` and `chunk_overlap_tokens` is set to `400`" / "must be between 100 and 4096 inclusive" / "should not exceed `max_chunk_size_tokens / 2`" |
| C14 | A chunk such as "revenue grew by 3%" lacks the company and the period. | S1 | "this chunk on its own doesn't specify which company it's referring to or the relevant time period" |
| C15 | Contextual Retrieval prepends 50–100 tokens of model-written context before embedding and BM25 indexing. | S1 | "prepending chunk-specific explanatory context to each chunk before embedding" / "The resulting contextual text, usually 50-100 tokens, is prepended to the chunk before embedding it and before creating the BM25 index." |
| C16 | Contextual Embeddings + Contextual BM25 cut failed retrievals by 49%. | S1 | "reduced the top-20-chunk retrieval failure rate by 49% (5.7% → 2.9%)" |
| C17 | OpenAI file `attributes`: at most 16 keys. | S2 | "The dictionary can have at most 16 keys, with a limit of 256 characters each." |
| C18 | Tag and classify data to control access levels. | S6 | "Tag and classify data within the knowledge base to control access levels" |
| C19 | Permission-aware store limits access by group. | S6 | "A permission-aware vector database should be implemented to restrict access" |
| C20 | Chunk size, boundary, overlap affect retrieval. | S1 | "The choice of chunk size, chunk boundary, and chunk overlap can affect retrieval performance" |
| C21 | A chunk without context is hard to retrieve and use. | S1 | "making it difficult to retrieve the right information or use the information effectively" |
| C22 | Structured files group related text by structure. | S3 | "it often naturally groups semantically related text" |
| C23 | Unverified sources can bring poisoned data. | S6 | "Poisoned data can originate from insiders, prompts, data seeding, or unverified data providers" |
| C24 | Shared vector DB can leak between groups. | S6 | "In multi-tenant environments where multiple classes of users or applications share the same vector database, there's a risk of context leakage between users or queries." |
| C25 | Contradicting sources cause knowledge conflicts. | S6 | "Data federation knowledge conflict errors can occur when data from multiple sources contradict each other" |

The HR policy assistant (300 PDFs, tags, "Staff get 20 days") is the tutorial's own invented example. "No source or offset in the metadata" and the tester checks are the tutorial's own advice and have no cite.
