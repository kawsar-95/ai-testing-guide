# Fact check: AI/ML Testing, AI Application Architectures

Page: `content/ai-ml-testing/ai-application-architecture.mdx`. Data: `scripts/ai_ml_testing_pages_p1a.py`. Checker: an agent that did not write the page. Date: 2026-11-02. Each source was opened on this date.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://arxiv.org/abs/2005.11401 | yes | arXiv paper by its authors |
| 2 | https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview | yes (301 to platform.claude.com) | Anthropic docs |
| 3 | https://arxiv.org/abs/2307.03172 | yes | arXiv paper by its authors |
| 4 | https://owasp.org/www-project-top-10-for-large-language-model-applications/ | yes | OWASP |

Each source 1–4 is cited at least one time. Each cite number has a source. `anthropic-evals` was removed; `lostmiddle` was added from the library.

## Claims (Technical text)

| # | Claim | Cite | Verdict | Quote from the source |
|---|---|---|---|---|
| 1 | "The reference architecture for an AI feature has five parts". | none | FAIL, fixed: presented as a standard with no source. Now "A simple reference shape ... This shape is the tutorial's own." | n/a |
| 2 | RAG: model gets material at answer time instead of having memorised it. | 1 | FAIL, fixed: RAG combines both memories. Now: a pre-trained model with knowledge in its parameters, joined with a dense vector index searched by a neural retriever; "instead of relying only on what it learned". | "a dense vector index of Wikipedia, accessed with a pre-trained neural retriever" |
| 3 | Prompt engineering: cheapest, fastest, limited by context window. | none | FAIL, fixed: labeled "In the tutorial's view". | n/a |
| 4 | RAG is right when facts change or you must point at the source. | 1 | PASS after rewording: the paper names provenance and updating world knowledge as open problems of parametric-only models. | "providing provenance ... and updating their world knowledge remain open research problems" |
| 5 | Fine-tuning changes weights; right when behaviour is wrong. | none | FAIL, fixed: labeled "In the tutorial's view". | n/a |
| 6 | "Architecture must be drawn before the tests are written". | anthropic-evals | FAIL, fixed: the evals page does not say this. Now cites S2 for "not every failing eval is best solved by prompt engineering"; drawing first is advice. | "Not every success criterion or failing eval is best solved by prompt engineering." |
| 7 | Six-layer chain diagram with test points. | none | PASS: tutorial's own diagram. | n/a |
| 8 | RAG has search and generation halves; a wrong answer is usually one of them. | 1 | FAIL, fixed: the paper gives the two parts (retriever, generator) but not the diagnosis. The diagnosis is now "In the tutorial's experience". | "the parametric memory is a pre-trained seq2seq model" |
| 9 | Long context attended unevenly, so order changes the answer. | anthropic-prompt → 3 | FAIL, fixed: the overview page says nothing about long context. Now cites the Lost in the Middle paper. | "highest when relevant information occurs at the beginning or end" |
| 10 | "The OWASP list treats both the attack and the over-blocking as separate concerns". | 4 | FAIL, fixed: no over-blocking item in the 2025 list. Now: OWASP puts prompt injection first; over-blocking test is the tutorial's own advice. | "LLM01:2025 Prompt Injection" |
| 11 | In practice: test files per layer, failing case, decision rules. | none | PASS: tutorial advice. | n/a |
| 12 | "A better prompt, plus the right examples in it". | 2 | PASS | "from clarity and examples to XML structuring" |
| 13 | Last sentence of In practice ends with ":" and nothing follows. | none | FAIL, fixed: ends with "." in all 3 voices. | n/a |
| 14 | Mistake 1: fine-tuning is expensive and slow, gives no source or fact update. | 1 | FAIL, fixed: "expensive and slow" has no source (and price claims are out). Now: knowledge in weights; the paper names provenance and updating as open problems. | "providing provenance ... remain open research problems" |
| 15 | Mistake 4: order changes the answer because long context is read unevenly. | anthropic-prompt → 3 | FAIL, fixed: re-cited to the paper. | "significantly degrades ... in the middle of long contexts" |
| 16 | Mistakes 2, 3, 5, 6; tips; Key words. | none | PASS: tutorial advice and general definitions. | n/a |

Open FAILs: 0
