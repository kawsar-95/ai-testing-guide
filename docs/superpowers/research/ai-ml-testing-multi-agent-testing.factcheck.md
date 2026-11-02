# Fact check: AI/ML Testing, Multi-Agent System Testing

Page: `content/ai-ml-testing/multi-agent-testing.mdx`. Date: 2026-11-02. Each source was opened and searched on this date.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://docs.langchain.com/oss/python/langgraph/overview | yes | LangChain (docs) |
| 2 | https://docs.langchain.com/langsmith/observability-concepts | yes | LangSmith (docs) |
| 3 | https://genai.owasp.org/llm-top-10/ | yes | OWASP |

## Claims (Technical text)

| # | Claim | Cite | Verdict | Evidence |
|---|---|---|---|---|
| 1 | LangGraph builds a multi-agent pipeline as a graph with several nodes. | 1 | PASS | Overview: graph of nodes and edges; LangGraph targets stateful, multi-step agents. |
| 2 | The trace shows each agent's input and output. | 2 | PASS | LangSmith: a trace is a collection of runs with full inputs and outputs. |
| 3 | "The failure the OWASP list would call sensitive information disclosure or misinformation propagation". | 3 | FAIL, fixed | OWASP LLM02 is Sensitive Information Disclosure (a different risk); LLM09:2025 is Misinformation ("Misinformation from LLMs poses a core vulnerability"). Sentence now cites LLM09 only. |
| 4 | "Three agents is three times the price"; "four per cent of quality for four times the cost". | none | FAIL, fixed | Arithmetic did not match its own table (0.88 vs 0.84 is four points; 4,200 vs 1,100 tokens is about 3.8x) and the table was presented as real. Wording is now "roughly three times the calls and tokens" and "four points of quality for nearly four times the tokens", and the table is labeled illustrative (3 panels). |
| 5 | Handoff contract, planted-defect cascade test, strict "chain must beat one agent" assertion. | none | PASS | The tutorial's own design on fake agents; no framework API is claimed. |

Open FAILs: 0
