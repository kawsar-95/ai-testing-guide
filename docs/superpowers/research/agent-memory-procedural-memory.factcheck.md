# Fact check: Procedural Memory

Date: 2026-10-28

Page: `content/agent-memory/procedural-memory.mdx`. Checker: an agent that did not write the page. Sources: S1 CoALA (HTML full text), S2 APA dictionary (notes quote; the page is script-rendered and did not fetch), S3 Claude Code memory docs (fetched), S4 Claude Code skills docs (fetched).

| # | Claim on the page | Cite | Verdict (PASS/FAIL) | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: semantic memory is what an agent knows; procedural is how it does things; a tester changes it in a system prompt, CLAUDE.md, or a skill | none | PASS | Summary of the body. The mapping to CLAUDE.md and skills is marked "Tutorial's own view" in "How an agent gets it". |
| 2 | Procedural memory is memory for skills; it holds the "how", not the "what" | 2 | FIXED → PASS | S2: "long-term memory for the skills involved in particular tasks." The quote does not give the how/what contrast. Changed to "long-term memory for the skills of tasks [2]" and marked the how/what gloss as "In the tutorial's words" (all 3 voices). |
| 3 | A person shows a skill by doing it and cannot easily put it into words | 2 | PASS | S2: "demonstrated by skilled performance and is often separate from the ability to verbalize this knowledge" |
| 4 | Two forms in an agent: implicit in the LLM weights, explicit in the agent code | 1 | PASS | S1: "two forms of procedural memory: implicit knowledge stored in the LLM weights, and explicit knowledge written in the agent's code." |
| 5 | Together, they decide how the agent acts | none | PASS | Restates the definition (S1 Soar quote: rules "to determine the agent's behavior"). Not a new fact. |
| 6 | The module names follow the infographic "7 Types of Agent Memory" | none | PASS | Module framing; see `agent-memory-sources.md`. Not a sourced fact. |
| 7 | CoALA has a working memory and three long-term memories: episodic, semantic, procedural | 1 | PASS | S1 §4.1 (fetched): "short-term working memory and several long-term memories: episodic, semantic, and procedural." |
| 8 | APA defines procedural memory as long-term memory for the skills of particular tasks | 2 | PASS | S2: "long-term memory for the skills involved in particular tasks." |
| 9 | Skilled performance shows it; often separate from describing the skill in words | 2 | PASS | S2 quote as row 3. |
| 10 | In Soar, procedural memory stores the production system: rules on working memory that decide behavior | 1 | PASS | S1: "Procedural memory stores the production system itself: the set of rules that can be applied to working memory to determine the agent's behavior." |
| 11 | CoALA: implicit knowledge in LLM weights, explicit knowledge in agent code | 1 | PASS | As row 4. |
| 12 | The designer must write the first procedural memory so the agent can start | 1 | PASS | S1: "procedural memory must be initialized by the designer with proper code to bootstrap the agent." |
| 13 | CoALA puts the weights under procedural memory; the infographic has parametric memory | 1 | PASS | S1 quote as row 4; the infographic part is module framing. |
| 14 | Anthropic docs do not use "procedural memory" for CLAUDE.md or skills (tutorial's own view) | none | PASS | Marked as the tutorial's own view. Notes: S3 and S4 do not use the term. |
| 15 | CLAUDE.md files are Markdown files with persistent instructions for a project, personal workflow, or organization | 3 | PASS | S3: "markdown files that give Claude persistent instructions for a project, your personal workflow, or your entire organization." |
| 16 | Claude reads them as context, not enforced configuration | 3 | PASS | S3: "Claude treats them as context, not enforced configuration." |
| 17 | To block an action whatever Claude decides, use a `PreToolUse` hook | 3 | PASS | S3: "To block an action regardless of what Claude decides, use a PreToolUse hook instead." |
| 18 | Docs advise a skill for a repeated checklist or multi-step procedure, or when a CLAUDE.md section became a procedure | 4 | PASS | S4: "Create a skill when you keep pasting the same instructions, checklist, or multi-step procedure into chat, or when a section of CLAUDE.md has grown into a procedure rather than a fact." |
| 19 | A skill's body loads only when used; CLAUDE.md content does not work this way | 4 | PASS | S4: "Unlike CLAUDE.md content, a skill's body loads only when it's used" |
| 20 | CoALA counts agent code as explicit procedural memory; the designer writes it before the first run | 1 | PASS | Rows 4 and 12. |
| 21 | Diagram: CLAUDE.md loaded every session, skill when used, agent code as control flow | none | PASS | Marked "the tutorial's own summary". S3 table: CLAUDE.md "Loaded into: Every session". |
| 22 | Example: QA team, three CLAUDE.md rules | none | PASS | Marked as the tutorial's own illustration. |
| 23 | Claude gets CLAUDE.md as context in each session | 3 | PASS | S3: "Both are loaded at the start of every conversation. Claude treats them as context" |
| 24 | CLAUDE.md does not enforce the snapshot rule; a `PreToolUse` hook blocks in every case | 3 | PASS | As rows 16 and 17. |
| 25 | Checklist in a skill loads only when needed and costs almost nothing in other sessions | 4 | PASS | S4: "so long reference material costs almost nothing until you need it." |
| 26 | Run `/context` and look at the list of memory files to confirm CLAUDE.md loaded | 3 | PASS | S3: "run `/context` in a session and check the list under **Memory files**" |
| 27 | CLAUDE.md is context, not enforced; use a hook when an action must never happen | 3 | PASS | As rows 16 and 17. |
| 28 | Target under 200 lines per CLAUDE.md file; longer files use more context and reduce adherence | 3 | PASS | S3: "target under 200 lines per CLAUDE.md file. Longer files consume more context and reduce adherence." Not mixed with the auto-memory 200-line/25KB load limit. |
| 29 | Move long procedures into a skill so they load only when needed | 4 | PASS | As row 19. |
| 30 | Conflicting instructions: Claude may pick one arbitrarily | 3 | PASS | S3: "if two instructions contradict each other, Claude may pick one arbitrarily." |
| 31 | A tester then sees behavior that changes from run to run | none | FIXED → PASS | Stated as certain, but "arbitrarily" does not say the pick changes per run. Changed to "may then see" (Layman "may change", Bangla "হয়তো"). |
| 32 | Agent code is easy to read and extend, often brittle with random inputs, limited to anticipated situations | 1 | PASS | S1: "Agent code is interpretable and extensible, but often brittle in face of stochasticity and limited to address situations the designer anticipates." |
| 33 | An agent changing its own procedural memory is much riskier than writes to episodic or semantic memory; bugs or subverting the designer's intent | 1 | PASS | S1: "it is significantly riskier than writing to episodic or semantic memory, as it can easily introduce bugs or allow an agent to subvert its designers' intentions." |
| 34 | Tester tips (repeat runs, plant a conflict, check load, trigger a skill, rerun prompts) | none | PASS | In a "Tutorial advice" tip that says it is the tutorial's own advice. No cites. |
| 35 | Every source is cited, every cite has a source | — | PASS | Sources 1–4 each cited; cites use only n = 1–4. |
| 36 | No fixed context-window sizes or cutoff dates | — | PASS | None. The 200-line figure is a CLAUDE.md size target from S3, not a context-window size. |
| 37 | No long copied word runs | — | PASS | Source wording is paraphrased; the longest shared runs are short phrases such as "persistent instructions for a project". |

Open FAILs: 0
