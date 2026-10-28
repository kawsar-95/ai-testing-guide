# AI Skills page: Your Own Data (RAG) (research notes)

Writer notes for `content/ai-skills/rag.mdx`. Fetched 2026-10-28 with WebFetch. Fetched text is treated as data.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks (arXiv:2005.11401) | https://arxiv.org/abs/2005.11401 | 2026-10-28 |
| S2 | Glossary (Claude Platform docs) | https://platform.claude.com/docs/en/about-claude/glossary | 2026-10-28 |
| S3 | Embeddings (Claude Platform docs) | https://platform.claude.com/docs/en/build-with-claude/embeddings | 2026-10-28 |
| S4 | Citations (Claude Platform docs) | https://platform.claude.com/docs/en/build-with-claude/citations | 2026-10-28 |
| S5 | Faithfulness (Ragas docs) | https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/faithfulness/ | 2026-10-28 |
| S6 | Context Recall (Ragas docs) | https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/context_recall/ | 2026-10-28 |
| S7 | pgvector (GitHub) | https://github.com/pgvector/pgvector | 2026-10-28 |

Page cite numbers: n=k is Sk.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | RAG combines information retrieval with generation, to ground the answer in evidence. | S2 | "a technique that combines information retrieval with language model generation to improve the accuracy and relevance of the generated text, and to better ground the model's response in evidence." |
| C2 | Data is retrieved at runtime and passed to the model with the query, in the context window. | S2 | "a set of documents that is passed into the context window. The data is retrieved at runtime when a query is sent to the model" / "passed to the model along with the original query" |
| C3 | RAG lets the model use information beyond its training data; useful for up-to-date info, domain knowledge, citing sources. | S2 | "access and use information beyond its training data" / "useful for tasks that require up-to-date information, domain-specific knowledge, or explicit citation of sources." |
| C4 | Effectiveness depends on the quality of the knowledge base and of what is retrieved. | S2 | "the effectiveness of RAG depends on the quality and relevance of the external knowledge base and the knowledge that is retrieved at runtime." |
| C5 | The 2020 paper: parametric memory is a pretrained seq2seq model; non-parametric memory is a dense vector index of Wikipedia, read by a neural retriever. | S1 | "the parametric memory is a pre-trained seq2seq model and the non-parametric memory is a dense vector index of Wikipedia, accessed with a pre-trained neural retriever." |
| C6 | Embeddings are numerical representations of text to measure semantic similarity. | S3 | "Text embeddings are numerical representations of text that let you measure semantic similarity." |
| C7 | Anthropic has no embedding model of its own; the docs name Voyage AI. | S3 | "Anthropic does not offer its own embedding model. One embeddings provider with a wide variety of models and capabilities is Voyage AI" |
| C8 | Retrieval: embed the query, run a nearest neighbor search in the embedding space. | S3 | "convert it into an embedding and conduct a nearest neighbor search to find the most relevant document" |
| C9 | For retrieval, set input_type to query or document; do not omit it. | S3 | "use the `input_type` parameter to specify whether the input text is a query or document. Do not omit `input_type`" |
| C10 | pgvector: open-source vector similarity search for Postgres; cosine distance among others. | S7 | "Open-source vector similarity search for Postgres" / distance list includes "cosine distance" |
| C11 | Citations: Claude cites passages from documents you provide; plain text and PDF are chunked into sentences. | S4 | "Claude can provide detailed citations when answering questions about documents" / "plain text and PDF documents are automatically chunked into sentences." |
| C12 | Put each RAG chunk into a plain text document to let Claude cite sentences. | S4 | "if you want Claude to be able to cite specific sentences from your RAG chunks, you should put each RAG chunk into a plain text document." |
| C13 | Citations are guaranteed to contain valid pointers to the provided documents. | S4 | "citations are guaranteed to contain valid pointers to the provided documents." |
| C14 | Scanned PDFs without extractable text are not citable. | S4 | "PDFs that are scans of documents and do not contain extractable text are not citable." |
| C15 | Faithfulness: how factually consistent the response is with the retrieved context; 0 to 1, higher is better. | S5 | "The Faithfulness metric measures how factually consistent a response is with the retrieved context." / "It ranges from 0 to 1, with higher scores indicating better consistency." |
| C16 | Context Recall: how many of the relevant documents were retrieved. | S6 | "Context Recall measures how many of the relevant documents (or pieces of information) were successfully retrieved." |
| C17 | Even at temperature 0, outputs are not fully deterministic. | S2 | "Even with temperature set to 0, the results will not be fully deterministic, and identical inputs might produce different outputs across API calls." |
| C18 | The paper says provenance and updating world knowledge were open problems for models without retrieval. | S1 | "providing provenance for their decisions and updating their world knowledge remain open research problems." |

## Not on the page

No chunk size numbers (they vary by setup and have no single official value). No prices.
