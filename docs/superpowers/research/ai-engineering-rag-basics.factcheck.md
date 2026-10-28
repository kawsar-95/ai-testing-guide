# Fact-check: content/ai-engineering/rag-basics.mdx

Checked 2026-10-28 by an agent that did not write the page. All 5 sources were fetched again. The quotes of the research notes were not trusted. `scripts/linux_overlap.py` on the fetched text found no run of 8 or more copied words.

Source 2 is an Anthropic research article (2024), not product docs. It is a primary source for Anthropic's own method and test numbers, and the page names it as Anthropic's.

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | RAG: retrieve matching document parts, add them to the prompt, generate | 2 | PASS | "RAG is a method that retrieves relevant information from a knowledge base and appends it to the user's prompt" |
| 2 | 2020 paper by Lewis and others; parametric memory and an outside document index searched by a retriever | 1 | PASS | "models which combine pre-trained parametric and non-parametric memory" / "the non-parametric memory is a dense vector index of Wikipedia, accessed with a pre-trained neural retriever" |
| 3 | The mix gave more specific and more factual text than the model alone | 1 | PASS | "RAG models generate more specific, diverse and factual language than a state-of-the-art parametric-only seq2seq baseline." |
| 4 | Split into chunks of a few hundred tokens or less | 2 | PASS | "smaller chunks of text, usually no more than a few hundred tokens" |
| 5 | Embed each chunk; an embedding encodes meaning | 2 | PASS | "Use an embedding model to convert these chunks into vector embeddings that encode meaning" |
| 6 | Store in a vector database that searches by meaning | 2 | PASS | "Store these embeddings in a vector database that allows for searching by semantic similarity." |
| 7 | At question time: find the most similar chunks, add the top ones to the prompt | 2 | PASS | "find the most relevant chunks based on semantic similarity to the query. Then, the most relevant chunks are added to the prompt" |
| 8 | Embeddings can miss an exact match such as `TS-999` | 2 | PASS | "they can miss crucial exact matches" / "could miss the exact "TS-999" match" |
| 9 | BM25 is an older ranking method for exact words; helps with IDs and technical terms | 2 | PASS | "there's an older technique" / "BM25 (Best Matching 25) is a ranking function that uses lexical matching" / "particularly effective for queries that include unique identifiers or technical terms" |
| 10 | (First check) "Many systems run both and merge the results" | 2 | FAIL, fixed (see Re-check) | S2 does not say how many systems do this. It says "RAG solutions can more accurately retrieve the most applicable chunks by combining the embeddings and BM25 techniques". The page stated a fact about common practice that the source does not give. |
| 11 | A chunk can lack the company and the period | 2 | PASS | "this chunk on its own doesn't specify which company it's referring to or the relevant time period" |
| 12 | Contextual Retrieval adds 50–100 tokens of chunk-specific context before indexing | 2 | PASS | "prepending chunk-specific explanatory context to each chunk" / "usually 50-100 tokens, is prepended to the chunk before embedding it and before creating the BM25 index" |
| 13 | "In Anthropic's tests", failed retrievals down 49%, and 67% with reranking | 2 | PASS | "This method can reduce the number of failed retrievals by 49% and, when combined with reranking, by 67%." The page names the numbers as Anthropic's test results (writer doubt 2 checked). |
| 14 | Allow "I don't know" | 3 | PASS | "Explicitly give Claude permission to admit uncertainty. This technique can drastically reduce false information." |
| 15 | Ask for quotes or citations for each claim | 3 | PASS | "having it cite quotes and sources for each of its claims" |
| 16 | "Anthropic notes ... (in their article, under 200,000 tokens, about 500 pages)" the whole knowledge base can go in the prompt | 2 | PASS | "If your knowledge base is smaller than 200,000 tokens (about 500 pages of material), you can just include the entire knowledge base in the prompt". The page ties the number to the article (writer doubt 2 checked). |
| 17 | Example: 900 pages, so the team uses RAG | 2 | PASS | 900 pages is above the 500-page line of row 16. |
| 18 | Example: exact codes are where embeddings are weak and BM25 helps | 2 | PASS | Rows 8 and 9. |
| 19 | Example: lost context is what Contextual Retrieval targets | 2 | PASS | Rows 11 and 12. |
| 20 | Example: "say so" rule and quotes | 3 | PASS | Rows 14 and 15. |
| 21 | Example: each region in its own partition | 4 | PASS | "Ensure strict logical and access partitioning of datasets in the vector database" |
| 22 | Mistake: log retrieved chunks (tutorial's own view) | none | PASS | Marked "(Tutorial's own view.)". |
| 23 | Mistake: small chunks lose company or period | 2 | PASS | Row 11. |
| 24 | Mistake: only semantic search misses IDs | 2 | PASS | Row 8. |
| 25 | Mistake: without permission to say "I don't know", the model is more likely to invent | 3 | PASS | Converse of row 14 ("can drastically reduce false information"). |
| 26 | Mistake: shared vector database leaks across groups; permission-aware stores and partitions | 4 | PASS | "In multi-tenant environments where multiple classes of users or applications share the same vector database, there's a risk of context leakage" / "permission-aware vector and embedding stores" |
| 27 | Mistake: hidden instructions such as white text in a resume = data poisoning and indirect prompt injection | 4, 5 | PASS | S4: "hidden text, such as white text on a white background, containing instructions" (Scenario "Data Poisoning"); S5: "An attacker modifies a document in a repository used by a Retrieval-Augmented Generation (RAG) application." |
| 28 | Accept data only from trusted sources; validate | 4 | PASS | "Implement robust data validation pipelines for knowledge sources." / "Accept data only from trusted and verified sources." |
| 29 | Key words rows | 1, 2, 3, 4 | PASS | Restate rows 1, 2, 4, 5, 6, 9. Hallucination: S3 "factually incorrect or inconsistent with the given context". |

Uncited text that states no source fact: the lede, "RAG has two parts that can fail on their own; a tester checks both" (tutorial's framing), the HR scenario details (WFH-2, 20 days), and the tip callout, which says "These test ideas are the tutorial's own advice." PASS.

## Re-check

| # | Change | Verdict | Quote |
|---|---|---|---|
| 10 | Now "Anthropic suggests that you run both and merge the results <Cite n={2} />." in Technical and Layman, and "Anthropic দুটোই চালিয়ে ফল মিলিয়ে নেওয়ার পরামর্শ দেয়" in Bangla. | PASS | S2: "RAG solutions can more accurately retrieve the most applicable chunks by combining the embeddings and BM25 techniques". |

FAILs found: 1. Fixed: 1.

Open FAILs: 0
