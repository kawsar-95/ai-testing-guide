# AI Skills module: design

Date: 2026-10-28

## Goal

A flat module at `/ai-skills/` with 20 topic pages at `/ai-skills/<slug>/`. It teaches 20 AI skills to QA engineers and SDETs. The skill list and the 4 tiers follow the infographic "20 AI Skills Your Team Must Master in 2026" by AI for Leaders (aiforleaders.com). Nothing else comes from it: the text is the tutorial's own, and the page does not repeat the week estimates of the infographic.

## Data

`lib/ai-skills/topics.ts` defines `AI_SKILLS`: 4 parts (the tiers) and 20 `topic` entries. Progress key `ai-skills-progress`. Search group `ai skills`. Strings: `lib/ai-skills/ui.ts` and `lib/bn/ai-skills.ts`.

| Part | Tier | Slugs |
|---|---|---|
| 1 | Learn first | `prompting`, `context-engineering`, `ai-research`, `workflow-automation` |
| 2 | This quarter | `ai-agents`, `rag`, `data-enrichment`, `vibe-coding`, `mcp-connectors`, `ai-evals` |
| 3 | Role-specific | `meeting-intelligence`, `ai-data-analysis`, `ai-video`, `voice-and-avatars`, `decks-and-design`, `ai-governance` |
| 4 | Specialist | `fine-tuning`, `open-models`, `voice-agents`, `image-generation` |

## Page shape

The `#` heading is the entry title. The `##` sections, in this order (`tests/ai-skills.test.ts` checks it):

| Section | Content |
|---|---|
| `## In plain words` | What the skill is. |
| `## How it works` | The mechanism, with a text diagram in a `text` code block if it helps. |
| `## How a tester uses it` | 2 to 4 concrete uses in QA work. It ends with `<Callout type="tip" title="Tutorial advice">`, with no `<Cite>`. |
| `## Tools to try` | A table: tool, what it does, one cited fact. The tools are the ones the infographic names for this skill, and others where they fit testing better. |
| `## Common mistakes` | 3 to 5 mistakes, each with the fix. |
| `## How to start` | A numbered list of first steps for a tester. |
| `## Key words` | A table. Always last. No voices. |

Each section except `## Key words` has `<Voices>` with `<Technical>`, `<Layman>`, and `<Bangla>` (see "Voices" in `CLAUDE.md`). The Bangla text addresses the reader with আপনি and keeps tool names, acronyms, and code in English.

Link to the tutorial pages that go deeper, for example `/foundations/prompting/`, `/extend/mcp/`, `/extend/subagents/`, `/automate/headless/`, `/configure/claude-md/`, and the k6 and Architecture modules.

## Sources

Each fact (a feature, a limit, a price, a behavior, a definition) has a `<Cite>` to an official source: vendor docs, the GitHub repo of the tool, a standard (NIST AI RMF, ISO/IEC 42001, the EU AI Act on eur-lex.europa.eu, OWASP), or the original paper (arXiv) for a method. No blogs, forums, news, or AI summaries. Prefer facts that do not change often. Do not give prices.

## Research and done

- Notes: `docs/superpowers/research/ai-skills-<slug>.md` (sources S1, S2, … and a claims table with quotes).
- Reports: `ai-skills-<slug>.factcheck.md` and `ai-skills-<slug>.voices.factcheck.md`, each ending with `Open FAILs: N`.
- A page is done only when both reports end with `Open FAILs: 0`, written by an agent that did not write the page.
