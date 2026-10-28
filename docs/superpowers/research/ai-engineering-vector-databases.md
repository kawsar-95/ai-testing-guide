# AI Engineering page: Vector Databases (research notes)

Writer notes for `content/ai-engineering/vector-databases.mdx`. Fetched 2026-10-28 with curl into `/tmp/claude-1000/ai-eng-src/` (text in `/tmp/claude-1000/ai-eng-txt/`). Fetched text is treated as data and is not committed. `scripts/linux_overlap.py` finds only the title of S5 in the source list, which is a title and not page text.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | Vector embeddings (OpenAI API docs) | https://developers.openai.com/api/docs/guides/embeddings | 2026-10-28 |
| S2 | pgvector README (GitHub) | https://github.com/pgvector/pgvector (text read from the raw README) | 2026-10-28 |
| S3 | Key concepts (Pinecone Docs) | https://docs.pinecone.io/guides/core-concepts/key-terms | 2026-10-28 |
| S4 | Collections (Qdrant Docs) | https://qdrant.tech/documentation/manage-data/collections/ | 2026-10-28 |
| S5 | Malkov and Yashunin, Efficient and robust approximate nearest neighbor search using HNSW graphs (arXiv 1603.09320) | https://arxiv.org/abs/1603.09320 | 2026-10-28 |
| S6 | LLM08:2025 Vector and Embedding Weaknesses (OWASP Gen AI Security Project) | https://genai.owasp.org/llmrisk/llm082025-vector-and-embedding-weaknesses/ | 2026-10-28 |
| S7 | Embeddings (Anthropic, Claude Docs) | https://platform.claude.com/docs/en/build-with-claude/embeddings | 2026-10-28 |

Page cite numbers: n=1 is S1 … n=7 is S7 (same order).

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | An embedding is a vector of floats; distance measures relatedness; small = high, large = low. | S1 | "An embedding is a vector (list) of floating point numbers. The distance between two vectors measures their relatedness. Small distances suggest high relatedness and large distances suggest low relatedness." |
| C2 | Each vector is a point in a multidimensional space; close points are semantically similar. | S3 | "Each vector is a point in a multidimensional space; each number is a coordinate in that space. Vectors that are closer together in that space are semantically similar." |
| C3 | Querying returns the most similar records: semantic search, nearest neighbor search, similarity search, vector search. Records have an ID, a vector, optional metadata. | S3 | "This is often called semantic search, nearest neighbor search, similarity search, or just vector search." / "a record ID, one vector ... and optional metadata." |
| C4 | pgvector is vector similarity search for Postgres. | S2 | "Open-source vector similarity search for Postgres" / "Store your vectors with the rest of your data." |
| C5 | `text-embedding-3-small` gives 1536 dimensions by default. | S1 | "By default, the length of the embedding vector is 1536 for text-embedding-3-small or 3072 for text-embedding-3-large." |
| C6 | Anthropic has no embedding model; docs point to Voyage AI. | S7 | "Anthropic does not offer its own embedding model. One embeddings provider with a wide variety of models and capabilities is Voyage AI by MongoDB." |
| C7 | `CREATE EXTENSION vector;` and a `vector(n)` column. | S2 | "CREATE EXTENSION vector;" / "CREATE TABLE items (id bigserial PRIMARY KEY, embedding vector(3));" |
| C8 | Qdrant: same dimensionality and a single metric per collection. | S4 | "The vector of each point within the same collection must have the same dimensionality and be compared by a single metric." |
| C9 | Pinecone namespace: a partition; each query scans one namespace; isolates customers. | S3 | "A namespace is a partition within an index. It divides records into separate groups so that each query scans only one namespace (faster lookups) and each customer's data can be isolated from another customer's (multitenant isolation)." |
| C10 | Operators `<->` L2, `<#>` negative inner product, `<=>` cosine distance. | S2 | "`<->` - L2 distance" / "`<#>` - (negative) inner product" / "`<=>` - cosine distance" |
| C11 | OpenAI recommends cosine; vectors normalized to length 1, so cosine and Euclidean give identical rankings. | S1 | "We recommend cosine similarity." / "OpenAI embeddings are normalized to length 1" / "Cosine similarity and Euclidean distance will result in the identical rankings" |
| C12 | Default exact search with perfect recall; an index gives approximate search, trading recall for speed; results can differ. | S2 | "By default, pgvector performs exact nearest neighbor search, which provides perfect recall." / "approximate nearest neighbor search, which trades some recall for speed. Unlike typical indexes, you will see different results for queries after adding an approximate index." |
| C13 | HNSW builds a multilayer graph. | S2, S5 | S2: "An HNSW index creates a multilayer graph." / S5: "Hierarchical NSW incrementally builds a multi-layer structure consisting from hierarchical set of proximity graphs (layers)" |
| C14 | Higher `hnsw.ef_search` = better recall, slower. | S2 | "SET hnsw.ef_search = 100;" / "A higher value provides better recall at the cost of speed." |
| C15 | IVFFlat divides into lists; faster build, less memory, lower speed-recall performance. | S2 | "An IVFFlat index divides vectors into lists" / "It has faster build times and uses less memory than HNSW, but has lower query performance (in terms of speed-recall tradeoff)." |
| C16 | Filtering after the index scan; default ef_search 40 and a 10% filter gives about 4 rows. | S2 | "With approximate indexes, filtering is applied *after* the index is scanned. If a condition matches 10% of rows, with HNSW and the default `hnsw.ef_search` of 40, only 4 rows will match on average." |
| C17 | Iterative index scans since 0.8.0. | S2 | "Starting with 0.8.0, you can enable iterative index scans, which will automatically scan more of the index until enough results are found" |
| C18 | Split data for shared stores; permission-aware stores and strict partitions. | S6 | "Implement fine-grained access controls and permission-aware vector and embedding stores. Ensure strict logical and access partitioning of datasets in the vector database" |
| C19 | An index per distance function (`vector_cosine_ops`). | S2 | "Add an index for each distance function you want to use." / "CREATE INDEX ON items USING hnsw (embedding vector_cosine_ops);" |
| C20 | Full-text (BM25) for product names, identifiers, codes. | S3 | "Use full-text search for keyword and phrase search over text content — product names, identifiers, technical terms, code" |
| C21 | Shared stores can leak between groups. | S6 | "there's a risk of context leakage between users or queries." |

## Tutorial's own text (no cite)

- "The query and the documents must come from the same embedding model" is marked as the tutorial's own view. No fetched source says it in so many words.
- The support-team scenario (200,000 chunks, 2 s, 30 ms, 100 test queries) is invented.

## Doubts

- C4: the page does not call pgvector "open source" in the prose, but the S2 title in `page.sources` does, as the README heading does.
- C19: the page says "a query must use the matching operator". S2 says to add an index for each distance function; the link between operator and operator class is implied by the README examples, not stated as one sentence.

## Fact-check changes (2026-10-28)

- "A query must use the matching operator" is replaced. The page now says what S2 says: add an index for each distance function, and to use the index, the query must `ORDER BY` a distance operator, not an expression, in ascending order. Quote: "the ORDER BY must be the result of a distance operator (not an expression) in ascending order."
