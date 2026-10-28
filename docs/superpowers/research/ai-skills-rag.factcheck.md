# Fact check: AI Skills, Your Own Data (RAG)

Sources fetched fresh on 2026-10-28 with WebFetch. S1 = arXiv 2005.11401 (the original RAG paper), S2 = Claude Platform docs "Glossary", S3 = Claude Platform docs "Embeddings", S4 = Claude Platform docs "Citations", S5 = Ragas docs "Faithfulness", S6 = Ragas docs "Context Recall", S7 = pgvector GitHub repo. All 7 are the original paper, vendor docs, or the tool's own repo. No blog, news, or forum. No source blocked the fetch.

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: a model knows its training data, not your documents; RAG finds pieces of your documents and gives them to the model with the question | none | PASS | Framing of the page; same facts as rows 2 and 3, which have cites |
| 2 | RAG combines information retrieval with text generation; goal is an answer grounded in evidence | S2 | PASS | "combines information retrieval with language model generation" / "ground the model's response in evidence" |
| 3 | Documents are retrieved at that moment and passed into the context window with the question | S2 | PASS | "The data is retrieved at runtime when a query is sent" / "passed to the model along with the original query" |
| 4 | Term comes from a 2020 paper | S1 | PASS | arXiv record: "Submitted on 22 May 2020" |
| 5 | Parametric memory = pretrained model; non-parametric = dense vector index of Wikipedia read by a neural retriever | S1 | PASS | "non-parametric memory is a dense vector index of Wikipedia, accessed with a pre-trained neural retriever" |
| 6 | The paper named provenance and updating knowledge as open problems | S1 | PASS | "providing provenance ... and updating their world knowledge remain open research problems" |
| 7 | RAG lets the model use information beyond its training data | S2 | PASS | "access and use information beyond its training data" |
| 8 | Helps most with up-to-date facts, domain knowledge, answers that cite sources | S2 | PASS | "up-to-date information, domain-specific knowledge, or explicit citation of sources" |
| 9 | Only as good as the documents and the retrieval step | S2 | PASS | "effectiveness of RAG depends on the quality and relevance of the external knowledge base" |
| 10 | Two stages: index once, answer each question | S3 | PASS | S3 quickstart embeds the documents, then embeds each query; the stage names are the tutorial's own words |
| 11 | Embedding = list of numbers that represents text; similar meaning gets similar numbers | S3 | PASS | "numerical representations of text that let you measure semantic similarity" |
| 12 | Anthropic offers no embedding model; docs name Voyage AI as one provider | S3 | PASS | "Anthropic does not offer its own embedding model. One embeddings provider ... is Voyage AI" |
| 13 | pgvector adds vector similarity search to Postgres | S7 | PASS | "Open-source vector similarity search for Postgres" |
| 14 | Embed the question and run a nearest neighbor search for the closest chunks | S3 | PASS | "convert it into an embedding and conduct a nearest neighbor search" |
| 15 | For retrieval, the embedding call says query or document (`input_type`) | S3 | PASS | "use the `input_type` parameter to specify whether the input text is a query or document" |
| 16 | Send the top chunks and the question to the model | S2 | PASS | "passed to the model along with the original query" |
| 17 | Text diagram (index and answer flow) | S2, S3, S4 | PASS | Repeats rows 3, 11 to 16 and 18; not tool syntax |
| 18 | Claude can cite exact passages of documents you give it | S4 | PASS | "Claude can provide detailed citations when answering questions about documents" |
| 19 | Plain text and PDF are split into sentences; one plain text document per RAG chunk for sentence citations | S4 | PASS | "plain text and PDF documents are automatically chunked into sentences" / "put each RAG chunk into a plain text document" |
| 20 | The API checks that each citation points to a real place in the documents | S4 | PASS | "citations are guaranteed to contain valid pointers to the provided documents" |
| 21 | "That is useful for a tester: every claim ... can be traced" | none | PASS | The tutorial's own view |
| 22 | Context recall: how many relevant documents were retrieved | S6 | PASS | "Context Recall measures how many of the relevant documents ... were successfully retrieved" |
| 23 | Faithfulness: score 0 to 1 for consistency of answer with retrieved context | S5 | PASS | "how factually consistent a response is with the retrieved context" / "ranges from 0 to 1" |
| 24 | Give Claude requirements or bug reports with citations on; each claim points to a passage | S4 | PASS | "track and verify the sources behind each response"; the example question is the tutorial's own |
| 25 | Build a question set with known answers; base of an eval; link `/ai-skills/ai-evals/` | none | PASS | Tutorial advice. Link: slug `ai-evals` is in `lib/ai-skills/topics.ts` and `content/ai-skills/ai-evals.mdx` exists |
| 26 | Test the edges; RAG quality depends on documents and retrieval | S2 | PASS | Same quote as row 9 |
| 27 | "Tutorial advice" Callout (question, chunk ID, key fact) | none | PASS | Marked as the tutorial's own advice; has no `<Cite>` |
| 28 | Tools: Voyage AI named because Anthropic has no embedding model | S3 | PASS | Same quote as row 12 |
| 29 | Tools: pgvector supports cosine distance among other distance functions | S7 | PASS | README lists "L2 distance", "inner product", "cosine distance", L1, Hamming, Jaccard |
| 30 | Tools: Claude citations work with plain text, PDF, and custom content documents | S4 | PASS | "Three document types are supported for citations" (PDF, plain text, custom content) |
| 31 | Tools: faithfulness 0 to 1, higher is better | S5 | PASS | "ranges from 0 to 1, with higher scores indicating better consistency" |
| 32 | Mistakes: measure retrieval on its own, e.g. with context recall | S6 | PASS | Same quote as row 22; the fix is tutorial advice |
| 33 | Mistakes: even at temperature 0, the same input can give a different output | S2 | PASS | "Even with temperature set to 0, the results will not be fully deterministic" |
| 34 | Mistakes: "The Voyage AI docs say to set `input_type` to query or document for retrieval, and not to leave it out" | S3 | FAIL, fixed in Round 2 (R2-1) | The fact is right: S3 says "Do not omit `input_type` or set `input_type=None`". But S3 is the Claude Platform docs (Anthropic), not the Voyage AI docs. The sentence names a source that the cite does not point to |
| 35 | Mistakes: scanned PDFs with no text layer cannot be cited | S4 | PASS | "PDFs that are scans of documents and do not contain extractable text are not citable" |
| 36 | Mistakes: an answer is only as good as what was retrieved | S2 | PASS | Same quote as row 9 |
| 37 | How to start steps 1, 3, 5 | none | PASS | Tutorial advice; link `/ai-skills/ai-evals/` exists (row 25) |
| 38 | How to start step 2: give documents with citations on | S4 | PASS | Same as row 18 |
| 39 | How to start step 4: context recall for search, faithfulness for answer | S6, S5 | PASS | Same as rows 22 and 23 |
| 40 | Key words table (RAG, Embedding, Vector store, Citation, Context recall, Faithfulness) | S2 to S7 | PASS | Same facts as rows 3, 11, 13, 18, 22, 23 |
| 41 | Code/config: `input_type` with values query and document | S3 | PASS | S3 code: `input_type="document"` and `input_type="query"` |

Other checks:

| Check | Verdict | Note |
|---|---|---|
| Sources are official | PASS | arXiv original paper, Anthropic docs, Ragas docs, pgvector GitHub repo |
| No prices | PASS | No price, currency, or plan on the page (grep) |
| Each cite points to a source that supports the claim | FAIL, fixed in Round 2 | Row 34 only: the text says "Voyage AI docs" but cite 3 is the Claude Platform docs |
| No copied text | PASS | Each sentence compared with the fetched text. Longest shared runs are 6 words ("a dense vector index of Wikipedia", "how many of the relevant documents", "nearest neighbor search to find the"). No run of 8 words |
| "Tutorial advice" tip has no cite | PASS | The Callout has no `<Cite>` |
| Internal links | PASS | `/ai-skills/ai-evals/` (2 times) is a slug in `lib/ai-skills/topics.ts` |
| Each source is cited | PASS | S1 to S7 all cited |
| Code and config syntax | PASS | `input_type` is the real parameter name; the text diagram is not tool syntax |

Round 1 result: Open FAILs: 1 (row 34).

## Round 2 (2026-10-28)

The writer changed the page after Round 1. S3 (Claude Platform docs "Embeddings") was fetched fresh again on 2026-10-28 with WebFetch. The only S3 sentence about Anthropic's own model is: "Anthropic does not offer its own embedding model." S3 has no sentence that says Anthropic does not make or build an embedding model.

| # | Changed text | Panel, line | Verdict | Quote or reason |
|---|---|---|---|---|
| R2-1 | "The Claude embeddings docs say to set `input_type` to query or document for retrieval, and not to leave it out" | Technical, 185 | PASS | Cite 3 is the Claude Platform "Embeddings" page: "Do not omit `input_type` or set `input_type=None`." The attribution now matches the cite. Round 1 row 34 is fixed |
| R2-2 | "Anthropic makes no embedding model of its own. Its docs name Voyage AI as one provider" | Technical, 60 | FAIL | S3 says only "Anthropic does not offer its own embedding model." "Offer" is about what a customer can use. "Makes" is a claim about what Anthropic builds, and S3 does not support it. Fix: "Anthropic offers no embedding model of its own." (shared run with S3: 2 words) |
| R2-3 | Tools row: "because Anthropic has no embedding model of its own" | Technical, 154 (not changed) | PASS | In a list of providers, "has no ... of its own" means none on offer; it matches "does not offer its own embedding model". For one wording, the writer can use "offers no" here too (optional) |

Copy check for Round 2: the changed sentences share at most 4 words in a row with S3 ("embedding model of its own" is not in S3; S3 has "its own embedding model"). No run of 8 words. Rows R2-1 to R2-3 use no new source, so the other checks of Round 1 stay PASS.

Round 1 row 34: fixed (R2-1). New FAIL: R2-2.

## Round 3 (2026-10-28)

The writer changed the wording that Round 2 marked as FAIL (R2-2). S3 (Claude Platform docs "Embeddings") was fetched fresh on 2026-10-28 with WebFetch. Section "How to get embeddings with Anthropic" says: "Anthropic does not offer its own embedding model. One embeddings provider with a wide variety of models and capabilities is Voyage AI by MongoDB." The Bangla "দেয় না" means "does not provide/offer", so it matches "does not offer".

| # | Claim on the page | Panel, line | Cite | Verdict | Quote from S3 |
|---|---|---|---|---|---|
| R3-1 | "Anthropic offers no embedding model of its own. Its docs name Voyage AI as one provider" | Technical, 60 | 3 | PASS | "Anthropic does not offer its own embedding model. One embeddings provider ... is Voyage AI by MongoDB." |
| R3-2 | "Anthropic offers no embedding model of its own. Its docs name Voyage AI as one provider" | Layman, 77 | 3 | PASS | Same quote as R3-1 |
| R3-3 | "Anthropic নিজের কোনো embedding model দেয় না। এর ডকস একটা প্রোভাইডার হিসেবে Voyage AI-এর নাম দেয়" | Bangla, 90 | 3 | PASS | Same quote as R3-1. "দেয় না" = "does not offer"; Voyage AI named as one provider |
| R3-4 | Tools row: "The Claude docs name it as one embedding provider, because Anthropic offers no embedding model of its own" | Technical, 154 and 162 | 3 | PASS | Same quote as R3-1. This is the same sentence in the table row (154) and the list item (162) |
| R3-5 | "Anthropic নিজের কোনো embedding model দেয় না বলে Claude ডকস একে একটা প্রোভাইডার হিসেবে উল্লেখ করে" | Bangla, 170 | 3 | PASS | Same quote as R3-1 |

Checks: grep of `content/ai-skills/rag.mdx` finds no remaining "makes no embedding model" or "has no embedding model". The new sentences share at most 4 words in a row with S3 ("embedding model of its own" is not an S3 run; S3 has "its own embedding model"), so no copy problem. The other Round 1 and Round 2 checks stay PASS because no cite, source, or other claim changed.

R2-2: fixed (R3-1 to R3-5). R2-3: now the same wording as R3-4.

Open FAILs: 0
