# Fact-check: content/ai-engineering/vector-databases.mdx

Checked 2026-10-28 by an agent that did not write the page. All 7 sources were fetched again. The quotes of the research notes were not trusted.

Copy check: `scripts/linux_overlap.py` finds one run, "efficient and robust approximate nearest neighbor search using hierarchical navigable small world graphs". It is the title of the arXiv paper in `page.sources` (source 5), not page prose. Not a FAIL.

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | An embedding is a list of floats; small distance = closely related, large = not related | 1 | PASS | "An embedding is a vector (list) of floating point numbers. The distance between two vectors measures their relatedness. Small distances suggest high relatedness and large distances suggest low relatedness." |
| 2 | Each vector is a point in a many-dimension space; close points have similar meaning | 3 | PASS | "Each vector is a point in a multidimensional space" / "Vectors that are closer together in that space are semantically similar." |
| 3 | A vector database stores vectors with ID and metadata, finds the nearest; semantic, nearest neighbor, vector search | 3 | PASS | "a record ID, one vector ... and optional metadata" / "This is often called semantic search, nearest neighbor search, similarity search, or just vector search." |
| 4 | Pinecone, Qdrant, or pgvector for PostgreSQL | 2, 3, 4 | PASS | S2: "Open-source vector similarity search for Postgres"; S3 and S4 are the products' own docs. |
| 5 | `text-embedding-3-small` = 1536 numbers by default | 1 | PASS | "By default, the length of the embedding vector is 1536 for text-embedding-3-small" |
| 6 | Anthropic has no embedding model; docs point to Voyage AI | 7 | PASS | "Anthropic does not offer its own embedding model. One embeddings provider with a wide variety of models and capabilities is Voyage AI by MongoDB." |
| 7 | pgvector: vector column type; the number is the dimension; `CREATE EXTENSION vector;` | 2 | PASS | "CREATE EXTENSION vector;" / "Create a vector column with 3 dimensions CREATE TABLE items (id bigserial PRIMARY KEY, embedding vector(3));" |
| 8 | Qdrant: same dimension and one metric per collection | 4 | PASS | "The vector of each point within the same collection must have the same dimensionality and be compared by a single metric." |
| 9 | Pinecone namespace: partition of an index; each query reads one | 3 | PASS | "A namespace is a partition within an index. It divides records into separate groups so that each query scans only one namespace" |
| 10 | Operators `<->` L2, `<#>` negative inner product, `<=>` cosine | 2 | PASS | "L2 distance (`<->`), (negative) inner product (`<#>`), cosine distance (`<=>`)"; "`<#>` returns the negative inner product" |
| 11 | SQL `ORDER BY embedding <=> '[...]' LIMIT 5` | 2 | PASS | S2 sample: `ORDER BY embedding <=> '[3,1,2]' LIMIT 5` |
| 12 | OpenAI recommends cosine; vectors have length 1; cosine and Euclidean give the same order | 1 | PASS | "We recommend cosine similarity." / "OpenAI embeddings are normalized to length 1" / "Cosine similarity and Euclidean distance will result in the identical rankings" |
| 13 | No index = exact search with perfect recall | 2 | PASS | "By default, pgvector performs exact nearest neighbor search, which provides perfect recall." |
| 14 | An index = approximate, faster, some recall lost; results can change | 2 | PASS | "approximate nearest neighbor search, which trades some recall for speed. Unlike typical indexes, you will see different results for queries after adding an approximate index." |
| 15 | HNSW builds a graph with many layers | 5, 2 | PASS | S2: "An HNSW index creates a multilayer graph." / S5: "incrementally builds a multi-layer structure consisting from hierarchical set of proximity graphs (layers)" |
| 16 | Higher `hnsw.ef_search` = better recall, slower | 2 | PASS | "SET hnsw.ef_search = 100;" / "A higher value provides better recall at the cost of speed." |
| 17 | IVFFlat splits into lists; faster build, less memory, worse speed-recall | 2 | PASS | "An IVFFlat index divides vectors into lists" / "It has faster build times and uses less memory than HNSW, but has lower query performance (in terms of speed-recall tradeoff)." |
| 18 | Filter after the index scan; default `ef_search` 40 and a 10% filter = about 4 rows | 2 | PASS | "If a condition matches 10% of rows, with HNSW and the default hnsw.ef_search of 40, only 4 rows will match on average." |
| 19 | Iterative index scans since 0.8.0 | 2 | PASS | "Starting with 0.8.0, you can enable iterative index scans, which will automatically scan more of the index until enough results are found" |
| 20 | Example: vectors next to the rest of the app data | 2 | PASS | "Store your vectors with the rest of your data." |
| 21 | Example: different top 5, recall for speed; raise `ef_search` | 2 | PASS | Rows 14 and 16. Times and counts are the scenario's own. |
| 22 | Example: too few rows; turn on iterative scans | 2 | PASS | Rows 18 and 19. |
| 23 | Example: split the data of different companies | 6 | PASS | "Ensure strict logical and access partitioning of datasets in the vector database" |
| 24 | Mistake: same dimension in one collection | 4 | PASS | Row 8. |
| 25 | "In the tutorial's own view", query and documents must use the same embedding model | none | PASS | Marked as the tutorial's own view (writer doubt 4). S1 supports the idea in an example ("we embed the query in natural language using the same model"), but no source states it as a rule, so the mark is correct. |
| 26 | Mistake: results can change after an index | 2 | PASS | Row 14. |
| 27 | (First check) "An index is built for one metric ... A query must use the matching operator" | 2 | FAIL, fixed (see Re-check) | S2 does not state this in one sentence (writer doubt 4). It says "Add an index for each distance function you want to use." with `vector_cosine_ops` for cosine, and in Troubleshooting: "the ORDER BY must be the result of a distance operator (not an expression) in ascending order." The page claim was an inference. |
| 28 | Mistake: a selective filter can leave very few rows | 2 | PASS | Row 18. |
| 29 | Mistake: full-text (BM25) is better for names, IDs, codes | 3 | PASS | "Use full-text search for keyword and phrase search over text content — product names, identifiers, technical terms, code" |
| 30 | Mistake: shared stores can leak; permission-aware stores, partitions | 6 | PASS | "there's a risk of context leakage between users or queries." / "permission-aware vector and embedding stores" |
| 31 | A Pinecone namespace isolates each customer | 3 | PASS | "each customer's data can be isolated from another customer's (multitenant isolation)." |
| 32 | Key words rows | 1, 2, 3, 5 | PASS | Restate rows 1, 3, 5, 10, 13, 14, 15, 9. |

Uncited text that states no source fact: the lede, the support scenario numbers (200,000 chunks, 2 s, 30 ms, 100 queries), and the tip callout, which says "These test ideas are the tutorial's own advice." PASS.

## Re-check

| # | Change | Verdict | Quote |
|---|---|---|---|
| 27 | Now: "In pgvector, you add an index for each distance function that you use, such as `vector_cosine_ops` for cosine distance. To use the index, the query must `ORDER BY` a distance operator, not an expression, in ascending order <Cite n={2} />." Layman is the same; Bangla matches. | PASS | S2: "Add an index for each distance function you want to use." / "CREATE INDEX ON items USING hnsw (embedding vector_cosine_ops);" / "the ORDER BY must be the result of a distance operator (not an expression) in ascending order." |

FAILs found: 1. Fixed: 1.

Open FAILs: 0
