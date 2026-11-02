# Fact check: AI/ML Testing, Advanced Capstone: Setup and Architecture

Page: `content/ai-ml-testing/advanced-capstone-setup.mdx`. Date: 2026-11-02. Each source was opened and searched on this date.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://docs.langchain.com/oss/python/langgraph/overview | yes | LangChain (docs) |
| 2 | https://docs.langchain.com/oss/python/langgraph/graph-api | yes | LangChain (docs) |
| 3 | https://arxiv.org/abs/2005.11401 | yes | arXiv |
| 4 | https://docs.trychroma.com/ | yes | Chroma (docs) |

## Claims (Technical text)

| # | Claim | Cite | Verdict | Evidence |
|---|---|---|---|---|
| 1 | `graph.set_conditional_entry_point(route, {...})` and `StateGraph(dict)`. | 2 | FAIL, fixed | The Graph API page documents `graph.add_conditional_edges(START, routing_function, {...})` for a conditional entry, and a `TypedDict` (or Pydantic) state schema. `set_conditional_entry_point` is not in the docs. Code rewritten with `START`, `add_conditional_edges`, and a `TypedDict` state. |
| 2 | Routing test: the escalate case was `"I want to speak to a manager"` but `route()` only escalated on `state.get("requires_human")`. | none | FAIL, fixed | The test passed only `{"question": ...}`, so the third case returned `search_docs` and the test would fail. `route()` now escalates on a handoff phrase list and checks it first. The test is also parametrized (it took arguments with no source for them) and `extract_order_id` is defined. |
| 3 | Mistake 2 (mock tool) cited to LangGraph; mistake 3 (source conflict) cited to Chroma. | 1, 3 | FAIL, fixed | Neither source supports the sentence; both are the tutorial's own. Cites removed. |
| 4 | LangGraph agent layer on top of a chain; RAG retrieves at answer time; a vector store backs it. | 1, 2, 4 | PASS | Overview, RAG paper abstract and Chroma intro describe exactly that. |
| 5 | Multi-source retrieval loops three Chroma collections with `query(query_texts=, n_results=)["documents"][0]`. | 4 | PASS | Verified on the Chroma query page (see capstone-project-setup research). |

Open FAILs: 0
