# Fact check: AI/ML Testing, Capstone Project Setup

Page: `content/ai-ml-testing/capstone-project-setup.mdx`. Date: 2026-11-02.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://docs.langchain.com/oss/python/langchain/overview | yes | LangChain docs |
| 2 | https://docs.trychroma.com/ | yes | Chroma docs |
| 3 | https://arxiv.org/abs/2005.11401 | yes | Paper on arXiv by its authors |

## Claims (Technical text)

| # | Claim | Cite | Verdict | Evidence |
|---|---|---|---|---|
| 1 | Target is a RAG chatbot wired with LangChain, backed by Chroma. | 1, 2 | PASS | Both are real, official docs. |
| 2 | RAG answers from documents given at answer time, not memory. | 3 | PASS | Paper: parametric + non-parametric memory. |
| 3 | Chroma stores embedded chunks and returns the closest. | 2 | PASS | Query page: `query_texts`, `query_embeddings`, `n_results`. |
| 4 | "LangChain's job ... compose retriever, prompt, model into one callable chain". | 1 | FAIL, fixed | The cited overview is about agents, not chains. Now "In this tutorial's pipeline, LangChain's job is to compose ...", cite removed from this sentence (cite 1 still supports the plain-words claim). |
| 5 | Ingestion code (`PersistentClient`, `get_or_create_collection`, `collection.add(documents, ids)`). | 2 | PASS | All three confirmed on Chroma's sub-pages (the intro page alone has none of them). |
| 6 | `collection.query(query_texts=[q], n_results=4)` and `results["documents"][0]`. | none | PASS | Confirmed on the Query and Get page. |
| 7 | Chain code (`PROMPT | ChatOpenAI | StrOutputParser`). | 1 (intro line) | FAIL, fixed (citation only) | The overview does not show this pattern; cite removed from the code intro. The names are the standard current LangChain ones. |
| 8 | FastAPI endpoint, cited to the RAG paper. | 3 | FAIL, fixed | A web endpoint is not supported by a 2020 NLP paper. Cite removed; source 3 is still cited in plain words. |
| 9 | Common mistakes 1-5, tutorial-advice bullets. | none | PASS | Tutorial's own advice, labeled so. |

Not re-verified: LangChain package import paths beyond what the langchain-testing factcheck already passed.

Open FAILs: 0
