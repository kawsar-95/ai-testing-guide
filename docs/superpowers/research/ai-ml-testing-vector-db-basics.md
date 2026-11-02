# Research notes: AI/ML Testing, Vector Database Basics and Testing

Page: `content/ai-ml-testing/vector-db-basics.mdx`. Accessed 2026-11-02. Source text was fetched and searched on this date.

## Sources

| ID | Key | Title | Publisher | URL |
|---|---|---|---|---|
| S1 | `chroma-intro` | Introduction | Chroma (docs) | https://docs.trychroma.com/ |
| S2 | `qdrant-intro` | What is Qdrant? | Qdrant (docs) | https://qdrant.tech/documentation/ |
| S3 | `qdrant-search` | Search | Qdrant (docs) | https://qdrant.tech/documentation/search/search/ |
| S4 | `chroma-query` | Querying collections | Chroma (docs) | https://docs.trychroma.com/docs/querying-collections |
| S5 | `chroma-configure` | Configure collections (new this pass) | Chroma (docs) | https://docs.trychroma.com/docs/collections/configure |
| S6 | `qdrant-collections` | Collections (new this pass) | Qdrant (docs) | https://qdrant.tech/documentation/manage-data/collections/ |

## Claims

| # | Claim | Source | Evidence |
|---|---|---|---|
| C1 | Cosine similarity "is the default in both databases." | 2 | Chroma: "`space` ... The default is `l2` (squared L2 norm), and other possible values are `cosine` ... and `ip`". Qdrant: `distance` (Dot, Cosine, Euclid, Manhattan) is chosen when the collection is created; no default is stated. Rewritten in the plain-words and how-it-works sections, Mistake 1, and the key word (3 panels), citing two new sources. Chroma also says every embedding function specifies its default space, so the text says to set it deliberately. |
| C2 | The metric-comparison test parametrized "cosine / euclidean / dot" but never used the parameter. | none | The test queried the same collection each time, so it compared nothing. Rewritten to create one collection per space (`"cosine"`, `"l2"`, `"ip"`, Chroma's real names) with `configuration={"hnsw": {"space": space}}` as in Chroma's configure page. |
| C3 | Qdrant "distributed replication" as a feature of Qdrant. | 2 | The cited overview page does not mention replication. Rewritten to what the docs show: similarity search, filtering, hybrid queries (intro), and payload indexes for filtering (search page). Also removed "it can be replicated" from How it works. |
| C4 | Qdrant test used `qdrant_collection.search(query_vector=...)`. | 3 | Qdrant's current Search page uses `client.query_points(collection_name=..., query=..., query_filter=...)`; `search()` appears only in a passing reference. Test rewritten with `query_points(...).points`. |
| C5 | The `qdrant-search` library URL (`/documentation/concepts/search/`). | 3 | It served only a client-side redirect stub (50 characters of text). Library now points at `https://qdrant.tech/documentation/search/search/`, which resolves and carries the cited content (also fixes vector-db-quality-performance). |
| C6 | "Chroma is embedded and simple: one file, one process, no server". | 1 | Chroma's persistent client writes to a directory; "one directory, one process, no separate server" now. |
| C7 | Qdrant applies the filter during the search via a payload index. | 3 | Search page: "During the search, Qdrant will use a combined filterable index"; "For performant filtering, create payload indexes for the fields you plan to filter on." |
| C8 | Filter before/during is exact; after the search the top-k is not the filtered top-k. | none | General vector-search reasoning, uncited; matches Qdrant's description of filtering during the search. |
| C9 | Chroma `PersistentClient`, `get_or_create_collection`, `collection.add/query`, `["ids"][0]`, `where=`. | 1 | Confirmed on Chroma's sub-pages (see capstone-project-setup research); `ids` are always returned. |
