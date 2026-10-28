# Agent Memory: Procedural Memory — research notes

Date: 2026-10-28

## Sources

| # | Title | Publisher | URL | Accessed |
|---|---|---|---|---|
| S1 | Cognitive Architectures for Language Agents (CoALA), Sumers, Yao, Narasimhan, Griffiths | arXiv 2309.02427 (TMLR) | https://arxiv.org/abs/2309.02427 | 2026-10-28 |
| S2 | procedural memory | APA Dictionary of Psychology | https://dictionary.apa.org/procedural-memory | 2026-10-28 |
| S3 | How Claude remembers your project (memory, CLAUDE.md) | Anthropic (Claude Code docs) | https://code.claude.com/docs/en/memory | 2026-10-28 |
| S4 | Extend Claude with skills | Anthropic (Claude Code docs) | https://code.claude.com/docs/en/skills | 2026-10-28 |

The S1 quotes come from the HTML full text at https://arxiv.org/html/2309.02427 (sections 2.3, 4.1, and 7).

## Claims

| # | Claim (plain words) | Source | Exact quote (under 40 words, verbatim) |
|---|---|---|---|
| 1 | In an agent, procedural memory has two parts: what is in the model weights, and what is in the agent's code. | S1 | "Language agents contain two forms of procedural memory: implicit knowledge stored in the LLM weights, and explicit knowledge written in the agent’s code." |
| 2 | In the Soar architecture, procedural memory is the set of rules that decide the behavior. | S1 | "Procedural memory stores the production system itself: the set of rules that can be applied to working memory to determine the agent’s behavior." |
| 3 | Agent code is clear but brittle, and it covers only the cases the designer thought of. | S1 | "Agent code is interpretable and extensible, but often brittle in face of stochasticity and limited to address situations the designer anticipates." |
| 4 | The designer must give the agent its first procedural memory. | S1 | "procedural memory must be initialized by the designer with proper code to bootstrap the agent." |
| 5 | When an agent changes its own procedural memory, the risk is higher: bugs, or behavior the designer did not want. | S1 | "it is significantly riskier than writing to episodic or semantic memory, as it can easily introduce bugs or allow an agent to subvert its designers’ intentions." |
| 6 | Psychology origin: procedural memory is long-term memory for skills. | S2 | "long-term memory for the skills involved in particular tasks." |
| 7 | You show a skill by doing it, and often you cannot say it in words. | S2 | "Procedural memory is demonstrated by skilled performance and is often separate from the ability to verbalize this knowledge" |
| 8 | In Claude Code, CLAUDE.md files give Claude persistent instructions. | S3 | "CLAUDE.md files are markdown files that give Claude persistent instructions for a project, your personal workflow, or your entire organization." |
| 9 | These instructions are context, not rules that are enforced. To block an action, use a hook. | S3 | "Claude treats them as context, not enforced configuration. To block an action regardless of what Claude decides, use a PreToolUse hook instead." |
| 10 | Long instruction files use more context and are followed less well. | S3 | "target under 200 lines per CLAUDE.md file. Longer files consume more context and reduce adherence." |
| 11 | If two instructions conflict, Claude can follow either one. | S3 | "if two instructions contradict each other, Claude may pick one arbitrarily." |
| 12 | Testable: you can check which memory files loaded. | S3 | "To confirm the file loaded, run `/context` in a session and check the list under Memory files." |
| 13 | A skill holds a multi-step procedure. | S4 | "Create a skill when you keep pasting the same instructions, checklist, or multi-step procedure into chat, or when a section of CLAUDE.md has grown into a procedure rather than a fact." |
| 14 | A skill's body loads only when it is used. | S4 | "Unlike CLAUDE.md content, a skill's body loads only when it's used, so long reference material costs almost nothing until you need it." |

## Notes

- The Anthropic docs (S3, S4) do not use the term "procedural memory". To show CLAUDE.md, system prompts, and skills as procedural memory is the tutorial's own mapping. The page must say so. LangChain's memory overview (https://docs.langchain.com/oss/python/concepts/memory) supports a similar mapping: "For AI agents, procedural memory is a combination of model weights, agent code, and agent's prompt that collectively determine the agent's functionality." It is not in the source list above. Add it as S5 if the page uses it.
- CoALA (S1) puts the LLM weights under procedural memory. The infographic has a separate "Parametric Memory" for the weights. The page must say that the two models split this differently. See `agent-memory-parametric-memory.md`.
- Claim 9: in the source, "PreToolUse hook" is a link. Claim 12: in the source, "Memory files" is in bold.
- Claim 10: the 200-line target is for CLAUDE.md files. Auto memory loads "first 200 lines or 25KB" (same page, S3). Do not mix the two numbers.
- Test ideas (tutorial's own advice, no cite): give a rule in the system prompt or CLAUDE.md and check that the agent follows it in many runs (it is not enforced); put two conflicting rules and see what happens; check that a skill loads for a matching request and does not load for an other request; after the agent edits its own instructions, run the old regression prompts again.
