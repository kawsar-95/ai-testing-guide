# AI Engineering page: Retrieval Engineering (research notes)

Writer notes for `content/ai-engineering/retrieval-engineering.mdx`. Fetched 2026-10-28 into a scratch folder of the writer session. Fetched text is treated as data and is not committed.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | Introducing Contextual Retrieval (Anthropic Engineering, 2024-09-19) | https://www.anthropic.com/engineering/contextual-retrieval | 2026-10-28 |
| S2 | Reciprocal rank fusion (Elastic Docs) | https://www.elastic.co/docs/reference/elasticsearch/rest-apis/reciprocal-rank-fusion | 2026-10-28 |
| S3 | Hybrid search (Weaviate Docs) | https://docs.weaviate.io/weaviate/search/hybrid | 2026-10-28 |
| S4 | Filtering (Qdrant Documentation) | https://qdrant.tech/documentation/concepts/filtering/ | 2026-10-28 |
| S5 | Rerank results (Pinecone Docs) | https://docs.pinecone.io/guides/search/rerank-results | 2026-10-28 |
| S6 | Retrieval (OpenAI API docs) | https://developers.openai.com/api/docs/guides/retrieval | 2026-10-28 |

Page cite numbers: n=1 is S1, n=2 is S2, n=3 is S3, n=4 is S4, n=5 is S5, n=6 is S6.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | Embedding search captures meaning but can miss exact matches. | S1 | "While embedding models excel at capturing semantic relationships, they can miss crucial exact matches." |
| C2 | BM25 is a lexical ranking function, good for IDs and technical terms. | S1 | "BM25 (Best Matching 25) is a ranking function that uses lexical matching to find precise word or phrase matches. It's particularly effective for queries that include unique identifiers or technical terms." |
| C3 | "TS-999" example. | S1 | "Suppose a user queries \"Error code TS-999\" in a technical support database. An embedding model might find content about error codes in general, but could miss the exact \"TS-999\" match." |
| C4 | Hybrid search fuses vector and keyword (BM25F) results. | S3 | "Hybrid search combines the results of a vector search and a keyword (BM25F) search by fusing the two result sets." |
| C5 | Flow: BM25 top chunks, embedding top chunks, combine and deduplicate with rank fusion. | S1 | "Use BM25 to find top chunks based on exact matches;" / "Use embeddings to find top chunks based on semantic similarity;" / "Combine and deduplicate results from (3) and (4) using rank fusion techniques;" |
| C6 | RRF needs no tuning; relevance indicators need not be related. | S2 | "RRF requires no tuning, and the different relevance indicators do not have to be related to each other" |
| C7 | RRF score sums `1.0 / (k + rank)` over result sets; the Python sketch follows it. | S2 | "score += 1.0 / ( k + rank( result(q), d ) )" |
| C8 | `rank_constant` defaults to 60. | S2 | "This value must be greater than or equal to `1`. Defaults to `60`." |
| C9 | Weaviate alpha: 1 pure vector, 0 pure keyword. | S3 | "An alpha of 1 is a pure vector search." / "An alpha of 0 is a pure keyword search." |
| C10 | A reranker scores results by relevance to the query and returns a better order; two-stage retrieval. | S5 | "Reranking is used as part of a two-stage vector retrieval process" / "The reranking model scores the results based on their semantic relevance to the query and returns a new, more accurate ranking" |
| C11 | Anthropic: top 150 retrieved, top 20 kept after reranking. | S1 | "we used the top 150" / "select the top-K chunks (we used the top 20)" |
| C12 | Full stack cut failed retrievals by 67%. | S1 | "Reranked Contextual Embedding and Contextual BM25 reduced the top-20-chunk retrieval failure rate by 67% (5.7% → 1.9%)" |
| C13 | Reranking adds a run-time step and latency; trade-off of more vs fewer chunks. | S1 | "Because reranking adds an extra step at runtime, it inevitably adds a small amount of latency" / "trade-off between reranking more chunks for better performance vs. reranking fewer for lower latency and cost" |
| C14 | Filters express features the embedding cannot: stock, location, price range. | S4 | "Setting additional conditions is important when it is impossible to express all the features of the object in the embedding. Examples include a variety of business requirements: stock availability, user location, or desired price range." |
| C15 | `must` = AND, `should` = OR, `must_not` = none may match. | S4 | "must is equivalent to the operator AND" / "should is equivalent to the operator OR" / "the clause becomes true if none of the conditions listed inside must_not is satisfied" |
| C16 | Create payload indexes on filtered fields. | S4 | "For performant filtering, create payload indexes for the fields you plan to filter on." |
| C17 | 10 results by default, up to 50 with `max_num_results`. | S6 | "A response will contain 10 results maximum by default, but you can set up to 50 using the `max_num_results` parameter." |
| C18 | 20 chunks beat 10 and 5. | S1 | "Passing the top-20 chunks to the model is more effective than just the top-10 or top-5" |
| C19 | Higher `score_threshold` keeps more relevant chunks but can drop useful ones. | S6 | "A higher `score_threshold` will limit the results to more relevant chunks, though it may exclude some potentially useful ones." |
| C20 | `rewrite_query=true` rewrites the query. | S6 | "Enable this feature by setting `rewrite_query=true` when performing a `search`." |
| C21 | Measure: share of relevant chunks not in top 20 (1 minus recall@20). | S1 | "We use 1 minus recall@20 as our evaluation metric, which measures the percentage of relevant documents that fail to be retrieved within the top 20 chunks." |
| C22 | Experiment on your own use case. | S1 | "We recommend experimenting with different settings on your specific use case to find the right balance." |
| C23 | Rank fusion uses ranks, not raw scores, so the two kinds of score do not have to be related (softened 2026-10-28 by the fact-check: Elastic does not say "different scales"). | S2 | The formula uses only `rank( result(q), d )`; "the different relevance indicators do not have to be related" |

The E-4012 support bot, its ranks, and the 50/10 values are the tutorial's own invented example. "Filter inside the search query" is marked as the tutorial's own view. The tester checks have no cite.

Doubt: C23 says the scales differ. Elastic does not say "different scales" in words; it says the indicators need not be related. The page sentence is a fair reading, but a checker may want softer wording.
