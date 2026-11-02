# Fact check: AI/ML Testing, Vector Database Basics and Testing

Page: `content/ai-ml-testing/vector-db-basics.mdx`. Date: 2026-11-02. Each source was opened and searched on this date.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://docs.trychroma.com/ | yes | Chroma (docs) |
| 2 | https://qdrant.tech/documentation/ | yes | Qdrant (docs) |
| 3 | https://qdrant.tech/documentation/search/search/ | yes | Qdrant (docs) |
| 4 | https://docs.trychroma.com/docs/querying-collections | yes | Chroma (docs) |
| 5 | https://docs.trychroma.com/docs/collections/configure | yes | Chroma (docs) |
| 6 | https://qdrant.tech/documentation/manage-data/collections/ | yes | Qdrant (docs) |

## Claims (Technical text)

| # | Claim | Cite | Verdict | Evidence |
|---|---|---|---|---|
| 1 | Cosine similarity "is the default in both databases." | 2 | FAIL, fixed | Chroma: "`space` ... The default is `l2` (squared L2 norm), and other possible values are `cosine` ... and `ip`". Qdrant: `distance` (Dot, Cosine, Euclid, Manhattan) is chosen when the collection is created; no default is stated. Rewritten in the plain-words and how-it-works sections, Mistake 1, and the key word (3 panels), citing two new sources. Chroma also says every embedding function specifies its default space, so the text says to set it deliberately. |
| 2 | The metric-comparison test parametrized "cosine / euclidean / dot" but never used the parameter. | none | FAIL, fixed | The test queried the same collection each time, so it compared nothing. Rewritten to create one collection per space (`"cosine"`, `"l2"`, `"ip"`, Chroma's real names) with `configuration={"hnsw": {"space": space}}` as in Chroma's configure page. |
| 3 | Qdrant "distributed replication" as a feature of Qdrant. | 2 | FAIL, fixed | The cited overview page does not mention replication. Rewritten to what the docs show: similarity search, filtering, hybrid queries (intro), and payload indexes for filtering (search page). Also removed "it can be replicated" from How it works. |
| 4 | Qdrant test used `qdrant_collection.search(query_vector=...)`. | 3 | FAIL, fixed | Qdrant's current Search page uses `client.query_points(collection_name=..., query=..., query_filter=...)`; `search()` appears only in a passing reference. Test rewritten with `query_points(...).points`. |
| 5 | The `qdrant-search` library URL (`/documentation/concepts/search/`). | 3 | FAIL, fixed | It served only a client-side redirect stub (50 characters of text). Library now points at `https://qdrant.tech/documentation/search/search/`, which resolves and carries the cited content (also fixes vector-db-quality-performance). |
| 6 | "Chroma is embedded and simple: one file, one process, no server". | 1 | FAIL, fixed | Chroma's persistent client writes to a directory; "one directory, one process, no separate server" now. |
| 7 | Qdrant applies the filter during the search via a payload index. | 3 | PASS | Search page: "During the search, Qdrant will use a combined filterable index"; "For performant filtering, create payload indexes for the fields you plan to filter on." |
| 8 | Filter before/during is exact; after the search the top-k is not the filtered top-k. | none | PASS | General vector-search reasoning, uncited; matches Qdrant's description of filtering during the search. |
| 9 | Chroma `PersistentClient`, `get_or_create_collection`, `collection.add/query`, `["ids"][0]`, `where=`. | 1 | PASS | Confirmed on Chroma's sub-pages (see capstone-project-setup research); `ids` are always returned. |

Open FAILs: 0
