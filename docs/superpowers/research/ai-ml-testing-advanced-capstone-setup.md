# Research notes: AI/ML Testing, Advanced Capstone: Setup and Architecture

Page: `content/ai-ml-testing/advanced-capstone-setup.mdx`. Accessed 2026-11-02. Source text was fetched and searched on this date.

## Sources

| ID | Key | Title | Publisher | URL |
|---|---|---|---|---|
| S1 | `langgraph-intro` | LangGraph overview | LangChain (docs) | https://docs.langchain.com/oss/python/langgraph/overview |
| S2 | `langgraph-graph-api` | Graph API overview (new) | LangChain (docs) | https://docs.langchain.com/oss/python/langgraph/graph-api |
| S3 | `rag` | Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks | arXiv | https://arxiv.org/abs/2005.11401 |
| S4 | `chroma-intro` | Introduction | Chroma (docs) | https://docs.trychroma.com/ |

## Claims

| # | Claim | Source | Evidence |
|---|---|---|---|
| C1 | `graph.set_conditional_entry_point(route, {...})` and `StateGraph(dict)`. | 2 | The Graph API page documents `graph.add_conditional_edges(START, routing_function, {...})` for a conditional entry, and a `TypedDict` (or Pydantic) state schema. `set_conditional_entry_point` is not in the docs. Code rewritten with `START`, `add_conditional_edges`, and a `TypedDict` state. |
| C2 | Routing test: the escalate case was `"I want to speak to a manager"` but `route()` only escalated on `state.get("requires_human")`. | none | The test passed only `{"question": ...}`, so the third case returned `search_docs` and the test would fail. `route()` now escalates on a handoff phrase list and checks it first. The test is also parametrized (it took arguments with no source for them) and `extract_order_id` is defined. |
| C3 | Mistake 2 (mock tool) cited to LangGraph; mistake 3 (source conflict) cited to Chroma. | 1, 3 | Neither source supports the sentence; both are the tutorial's own. Cites removed. |
| C4 | LangGraph agent layer on top of a chain; RAG retrieves at answer time; a vector store backs it. | 1, 2, 4 | Overview, RAG paper abstract and Chroma intro describe exactly that. |
| C5 | Multi-source retrieval loops three Chroma collections with `query(query_texts=, n_results=)["documents"][0]`. | 4 | Verified on the Chroma query page (see capstone-project-setup research). |
