# Agent Memory: sources

Date: 2026-10-28

All sources were read on 2026-10-28. Each quote in the topic notes was checked against the text of its page (arXiv abstracts through the arXiv API, arXiv full texts as HTML, Anthropic, LangChain, and Telnyx docs as Markdown, APA entries in a browser).

## Source list

| Source | Publisher | URL | Topics |
|---|---|---|---|
| Cognitive Architectures for Language Agents (CoALA), Sumers, Yao, Narasimhan, Griffiths | arXiv 2309.02427 (TMLR) | https://arxiv.org/abs/2309.02427 | working, semantic, episodic, procedural, retrieval, parametric |
| Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks, Lewis et al. | arXiv 2005.11401 (NeurIPS 2020) | https://arxiv.org/abs/2005.11401 | retrieval, parametric |
| MemGPT: Towards LLMs as Operating Systems, Packer et al. | arXiv 2310.08560 | https://arxiv.org/abs/2310.08560 | retrieval |
| Generative Agents: Interactive Simulacra of Human Behavior, Park et al. | arXiv 2304.03442 (UIST 2023) | https://arxiv.org/abs/2304.03442 | episodic, prospective |
| Lost in the Middle: How Language Models Use Long Contexts, Liu et al. | arXiv 2307.03172 | https://arxiv.org/abs/2307.03172 | working |
| Memory in the Age of AI Agents (survey) | arXiv 2512.13564 | https://arxiv.org/abs/2512.13564 | parametric |
| PM-Bench: Evaluating Prospective Memory in LLM Agents, Liu et al. | arXiv 2607.12385 | https://arxiv.org/abs/2607.12385 | prospective |
| working memory | APA Dictionary of Psychology | https://dictionary.apa.org/working-memory | working |
| semantic memory | APA Dictionary of Psychology | https://dictionary.apa.org/semantic-memory | semantic |
| episodic memory | APA Dictionary of Psychology | https://dictionary.apa.org/episodic-memory | episodic |
| procedural memory | APA Dictionary of Psychology | https://dictionary.apa.org/procedural-memory | procedural |
| prospective memory | APA Dictionary of Psychology | https://dictionary.apa.org/prospective-memory | prospective |
| Context windows | Anthropic (Claude Platform docs) | https://platform.claude.com/docs/en/build-with-claude/context-windows | working |
| Memory tool | Anthropic (Claude Platform docs) | https://platform.claude.com/docs/en/agents-and-tools/tool-use/memory-tool | semantic |
| Models overview | Anthropic (Claude Platform docs) | https://platform.claude.com/docs/en/models/overview | parametric |
| How Claude remembers your project (memory, CLAUDE.md) | Anthropic (Claude Code docs) | https://code.claude.com/docs/en/memory | procedural |
| Extend Claude with skills | Anthropic (Claude Code docs) | https://code.claude.com/docs/en/skills | procedural |
| Run prompts on a schedule | Anthropic (Claude Code docs) | https://code.claude.com/docs/en/scheduled-tasks | prospective |
| Memory overview | LangChain (LangGraph docs) | https://docs.langchain.com/oss/python/concepts/memory | semantic, episodic (and a note in procedural) |
| Agent Memory: Long-Term Memory for AI Agents | Telnyx (developer docs) | https://developers.telnyx.com/docs/agent-memory | retrieval |

## The Neo Kim article

Not found. No article by Neo Kim on newsletter.systemdesign.one or systemdesign.one lists the 7 memory types of the infographic (working, semantic, episodic, procedural, retrieval, parametric, prospective). The newsletter sitemap has two posts about agent memory. Neither one is the source of the infographic:

- "AI Agents: State, Memory, Consistency - A Deep Dive", Neo Kim with guest author Sivasankar Natarajan, 2026-05-17: https://newsletter.systemdesign.one/p/ai-agent-memory. It describes short-term, long-term, and external memory. It does not name the 7 types and does not mention Telnyx.
- "How to use AI agents better than 99% of people" (#160, graph-shaped memory), Neo Kim, 2026-07-07: https://newsletter.systemdesign.one/p/graph-based-agent-memory. It is about shared, vector, and graph memory.

Neither post is used as a source in the topic notes. No text of either post was copied.

No Telnyx page that lists the 7 types was found either. The Telnyx Agent Memory docs describe one long-term store. They are used only in the Retrieval Memory notes.

## Terms: which source defines which name

| Infographic name | Defined with this name by | Note |
|---|---|---|
| Working memory | CoALA, APA, Anthropic (context window as "working memory") | CoALA's working memory is an agent module, not the context window. |
| Semantic memory | CoALA, APA, LangChain | CoALA counts a RAG corpus as semantic memory. |
| Episodic memory | CoALA, APA, LangChain | |
| Procedural memory | CoALA, APA, LangChain | CoALA puts the LLM weights here. Anthropic docs do not use the term. |
| Retrieval memory | No primary source | The infographic's own name. Lewis et al. say "non-parametric memory". CoALA has "retrieval actions". |
| Parametric memory | Lewis et al., the 2025 survey | Not a CoALA type. |
| Prospective memory | APA, PM-Bench | Not in CoALA or LangChain. |
