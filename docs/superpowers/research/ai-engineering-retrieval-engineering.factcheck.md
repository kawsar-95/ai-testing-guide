# Fact-check: content/ai-engineering/retrieval-engineering.mdx

Checked 2026-10-28 by an agent that did not write the page. All 6 sources were fetched fresh (WebFetch and curl). The quotes of the research notes were not trusted. `platform.openai.com/docs/guides/retrieval` now redirects (301) to `developers.openai.com/api/docs/guides/retrieval`; the text is the same guide.

Scope: every factual claim in the `<Technical>` panels, the code, and the Key words table. The E-4012 support bot, its ranks (9, 1), and the 50/10 and 100-question values are an invented scenario, not facts; they are not rated. The tester tips are in a "Tutorial advice" callout with no cites.

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Embedding search finds similar meaning but can miss exact matches | 1 | PASS | "While embedding models excel at capturing semantic relationships, they can miss crucial exact matches." |
| 2 | BM25 is a keyword ranking function | 1 | PASS | "BM25 (Best Matching 25) is a ranking function that uses lexical matching to find precise word or phrase matches." |
| 3 | BM25 is good for IDs and technical terms | 1 | PASS | "It's particularly effective for queries that include unique identifiers or technical terms." |
| 4 | "Error code TS-999": embedding search can return general error-code pages and miss TS-999; BM25 searches for the exact string | 1 | PASS | "An embedding model might find content about error codes in general, but could miss the exact "TS-999" match. BM25 looks for this specific text string" |
| 5 | Hybrid search runs vector and keyword (BM25) search and fuses the result lists | 3 | PASS | Weaviate: "Hybrid search combines the results of a vector search and a keyword (BM25F) search by fusing the two result sets." |
| 6 | Anthropic flow: top chunks with BM25, top chunks with embeddings, combine and deduplicate with rank fusion | 1 | PASS | "Combine and deduplicate results from (3) and (4) using rank fusion techniques" |
| 7 | RRF needs no tuning; the scores do not need to be related | 2 | PASS | "RRF requires no tuning, and the different relevance indicators do not have to be related to each other to achieve high-quality results." |
| 8 | Each document gets `1 / (k + rank)` from each list; sums give the order | 2 | PASS | "for q in queries: if d in result(q): score += 1.0 / ( k + rank( result(q), d ) )" |
| 9 | `rank_constant` (the `k`) defaults to 60 | 2 | PASS | "rank_constant (Optional, integer) ... Defaults to 60 ." |
| 10 | Code: `rrf([["a","b","c"],["c","a","d"]])` gives `['a','c','b','d']` | 2 | PASS | Run with Python 3: output `['a', 'c', 'b', 'd']`. Ranks start at 1, as in the Elastic formula. |
| 11 | Weaviate `alpha=1` is pure vector, `alpha=0` pure keyword | 3 | PASS | "An alpha of 1 is a pure vector search. An alpha of 0 is a pure keyword search." |
| 12 | A reranker is a second model that scores results for relevance to the query and gives a better order | 5 | PASS | Pinecone: it "scores the results based on their semantic relevance to the query" and returns "a new, more accurate ranking." |
| 13 | Anthropic retrieved top 150, reranked, passed top 20 | 1 | PASS | "Perform initial retrieval to get the top potentially relevant chunks (we used the top 150)"; "select the top-K chunks (we used the top 20)". |
| 14 | Embeddings + BM25 + contextual chunks + reranker cut failed retrievals by 67% | 1 | PASS | "Reranked Contextual Embedding and Contextual BM25 reduced the top-20-chunk retrieval failure rate by 67% (5.7% → 1.9%)." |
| 15 | Reranking adds a step at run time, so it adds latency | 1 | PASS | "Because reranking adds an extra step at runtime, it inevitably adds a small amount of latency" |
| 16 | A filter limits search by fields the embedding cannot express (stock, location, price range) | 4 | PASS | Qdrant: "it is impossible to express all the features of the object in the embedding"; "stock availability, user location, or desired price range". |
| 17 | `must` = AND, `should` = OR, `must_not` excludes | 4 | PASS | "true only if every condition listed inside `must` is satisfied"; "true if at least one condition listed inside `should` is satisfied"; "true if none of the conditions listed inside `must_not` is satisfied". |
| 18 | JSON: `filter` / `must` / `key` / `match` / `value` | 4 | PASS | Qdrant example: `"filter": { "must": [ { "key": "city", "match": { "value": "London" } } ] }`. Same shape. |
| 19 | Qdrant suggests a payload index on each filtered field | 4 | PASS | "For performant filtering, create payload indexes for the fields you plan to filter on." |
| 20 | OpenAI file search: 10 results by default, up to 50 with `max_num_results` | 6 | PASS | "A response will contain 10 results maximum by default, but you can set up to 50 using the `max_num_results` parameter." |
| 21 | 20 chunks worked better than 10 or 5 | 1 | PASS | "We tried delivering 5, 10, and 20 chunks, and found using 20 to be the most performant of these options" |
| 22 | Higher `score_threshold` keeps more relevant chunks but can drop useful ones | 6 | PASS | "A higher `score_threshold` will limit the results to more relevant chunks"; the guide notes it can also filter out useful chunks. |
| 23 | `rewrite_query=true` rewrites the query for search | 6 | PASS | "Enable this feature by setting `rewrite_query=true` when performing a `search`." |
| 24 | Example step 2: BM25 + RRF moves the exact page near the top | 1, 2 | PASS | Follows from claims 4 and 8 for the invented scenario. |
| 25 | Retrieve wide then rerank is the two-stage pattern of Pinecone and Anthropic | 5, 1 | PASS | Pinecone: "part of a two-stage vector retrieval process"; Anthropic: initial retrieval of 150, then rerank. |
| 26 | Filter on `product_version` gives a version-3 user only version-3 chunks | 4 | PASS | A `must` match condition (claim 17) applied to the invented field. |
| 27 | Anthropic measure: share of relevant chunks not in the top 20 | 1 | PASS | "We use 1 minus recall@20 as our evaluation metric, which measures the percentage of relevant documents that fail to be retrieved within the top 20 chunks." |
| 28 | Mistake: vector search alone can miss IDs, codes, names | 1 | PASS | Same as claims 1 and 3. |
| 29 | Mistake: "BM25 and vector scores are on different scales. Rank fusion uses the rank, not the raw score" | 2 | FAIL | Elastic does not say "different scales". It says "the different relevance indicators do not have to be related to each other". Soften to the source wording (writer doubt 2). |
| 30 | Mistake: more reranked chunks give better quality but more latency and cost | 1 | PASS | "There is an inherent trade-off between reranking more chunks for better performance vs. reranking fewer for lower latency and cost." |
| 31 | Mistake: a high score threshold drops useful chunks | 6 | PASS | Same as claim 22. |
| 32 | Mistake: filtering after the search can lose the right chunk | none | FAIL | No cite, and the "Tutorial's own view" label covered only the advice sentence after it, not this claim. Move the label to the start of the bullet. |
| 33 | Mistake: Anthropic advises experiments on your own use case | 1 | PASS | "We recommend experimenting with different settings on your specific use case to find the right balance." |
| 34 | Key words: BM25, Hybrid search, RRF, Alpha, Reranker, Metadata filter, Top-K | 1, 3, 2, 3, 5, 4, 6 | PASS | Same quotes as claims 2, 5, 8, 11, 12, 16, 20. |

Copy check: `scripts/linux_overlap.py` on the page against the text of all 6 fetched sources: no run of 8 or more words. PASS.

Source check: all 6 sources are official vendor docs or the vendor's engineering blog about its own work (Anthropic, Elastic, Weaviate, Qdrant, Pinecone, OpenAI). PASS.

## Re-check (after the fixes)

| # | Changed text | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 29 | "BM25 and vector search give different kinds of relevance scores. Rank fusion uses the rank, not the raw score, so the two scores do not have to be related" | 2 | PASS | Elastic: "a method for combining multiple result sets with different relevance indicators"; "the different relevance indicators do not have to be related to each other". The longest shared run is 6 words ("do not have to be related"). The research notes (C23) are updated. |
| 32 | "Tutorial's own view: if you search first and filter the top 10 later, the right chunk can be lost. Filter inside the search query." | none | PASS | The whole bullet is now marked as the tutorial's own view. |

Copy check again after the edits: no run of 8 or more words. PASS.

Open FAILs: 0
