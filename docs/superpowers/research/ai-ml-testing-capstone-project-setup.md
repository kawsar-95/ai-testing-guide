# Research notes: AI/ML Testing, Capstone Project Setup

Page: `content/ai-ml-testing/capstone-project-setup.mdx` (data: `scripts/ai_ml_testing_pages_p1h.py`). Accessed 2026-11-02.

## Sources

| ID | Key | Title | Publisher | URL |
|---|---|---|---|---|
| S1 | `langchain-intro` | Introduction | LangChain (Python docs) | https://docs.langchain.com/oss/python/langchain/overview |
| S2 | `chroma-intro` | Introduction | Chroma (docs) | https://docs.trychroma.com/ |
| S3 | `rag` | Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks | arXiv | https://arxiv.org/abs/2005.11401 |

## Claims

| # | Claim | Source | Evidence |
|---|---|---|---|
| C1 | Chroma: `chromadb.PersistentClient(path=...)`, `client.get_or_create_collection(name)`, `collection.add(ids=, documents=)`, `collection.query(query_texts=, n_results=)`, results under `["documents"][0]`. | S2 (sub-pages `docs/run-chroma/clients`, `collections/manage-collections`, `collections/add-data`, `querying-collections/query-and-get`, via `/llms.txt`) | "configure Chroma to save and load the database from your local machine, using the `PersistentClient`"; "`get_or_create_collection` ... will create the collection if it doesn't exist"; `collection.add(ids=[...], documents=[...])`; `query_texts=[...]`, `n_results`; `result["documents"][0]`. The intro page itself has none of these identifiers; they live on the sub-pages. |
| C2 | Chroma stores embedded chunks and returns the closest to a query. | S2 | `query_texts` / `query_embeddings` parameters on the Query page. |
| C3 | RAG = answer from documents supplied at answer time, not only training memory. | S3 | Paper abstract: parametric memory plus retrieved non-parametric memory (verified in `ai-ml-testing-rag-testing-basics.factcheck.md`). |
| C4 | LangChain composes retriever, prompt, model into one callable chain. | none | The LangChain overview is agent-centred and does not describe this (same finding as `ai-ml-testing-langchain-testing.factcheck.md`). Now labeled "in this tutorial's pipeline" and uncited. |
| C5 | FastAPI `/ask` endpoint. | none | Illustrative code; was wrongly cited to the RAG paper. |
| C6 | `RecursiveCharacterTextSplitter`, `ChatPromptTemplate`, `StrOutputParser`, `ChatOpenAI` pipe composition. | none | Standard current `langchain_core` / `langchain_text_splitters` / `langchain_openai` names; not independently re-opened this pass (the langchain-testing factcheck already passed `ChatPromptTemplate.from_template` and `StrOutputParser`). |
