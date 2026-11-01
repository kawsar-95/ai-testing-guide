# AI/ML Testing module: design

Date: 2026-11-01

## Goal

A flat module at `/ai-ml-testing/` with 47 topic pages at `/ai-ml-testing/<slug>/`. It teaches AI and ML testing to QA engineers, SDETs, and test leads: what an LLM is, how to write and break prompts, how to build automated evals, how to test RAG and agents, how to red team, and how to run it all in CI.

The topic list and the session order follow the syllabus of the "AI & ML Testing Professional Course" (QodeBench — Journey to Automation, https://www.journeytoautomation.org/courseAIMLTesting-phase1-and-phase2): 17 course modules and 47 sessions, Phase 1 Foundations (26 sessions) then Phase 2 Mastery (21 sessions). The scraped syllabus is at `docs/superpowers/research/ai-ml-testing-syllabus.md`. The text of the pages is the tutorial's own; the syllabus gives the order and the topics, not the prose.

## Data

`lib/ai-ml-testing/topics.ts` defines `AI_ML_TESTING`: the part `Phase 1 — Foundations` and one `topic` entry per written page. Progress key `ai-ml-testing-progress`. Search group `ai ml testing`. Strings: `lib/ai-ml-testing/ui.ts` and `lib/bn/ai-ml-testing.ts`.

| Part | Phase | Slugs |
|---|---|---|
| 1 | Phase 1 — Foundations | `ai-ml-for-testers`, `llm-tokens-temperature`, `ai-application-architecture`, `prompt-engineering-basics`, `prompt-testing`, `structured-outputs`, `promptfoo-first-eval`, `promptfoo-assertions`, `deepeval-pytest`, `hallucination-detection`, `rag-testing-basics`, `llm-api-testing`, `chatbot-ui-testing`, `langchain-testing`, `langgraph-agent-testing` |

The order and the topics follow the syllabus of the "AI & ML Testing Professional Course" (QodeBench — Journey to Automation): 17 course modules and 47 sessions, Phase 1 Foundations (26 sessions) then Phase 2 Mastery (21 sessions). The scraped syllabus is at `docs/superpowers/research/ai-ml-testing-syllabus.md`. The text of the pages is the tutorial's own; the syllabus gives the order and the topics, not the prose.

**A page is in the topic list only when its text exists.** The list and the content folder always agree, so the module never links to a missing file and the static export always builds. The remaining 32 sessions are added to the list as their pages are written, and the part `Phase 2 — Mastery` is added with them.

`scripts/ai_ml_testing_gen.py` reads `lib/ai-ml-testing/topics.ts` and writes `scripts/ai-ml-testing-route-map.json` and `tests/ai-ml-testing.test.ts`. The counts in the generated test come from the data, so they cannot drift. `scripts/ai_ml_testing_pages_gen.py` writes `content/ai-ml-testing/<slug>.mdx` from the page data in `scripts/ai_ml_testing_pages_*.py`.

## Page shape

The `#` heading is the entry title. The `##` sections, in this order (`tests/ai-ml-testing.test.ts` checks it):

| Section | Content |
|---|---|
| `## In plain words` | What the idea is, for a reader who does not build models. |
| `## How it works` | The mechanism, with a `text` code block for a config, a pipeline, or a flow when it helps. |
| `## In practice` | The hands-on part: the tool, the command, the file, and what the tester sees. It ends with `<Callout type="tip" title="Tutorial advice">`, with no `<Cite>`. |
| `## Common mistakes` | 3 to 5 mistakes, each with the fix. |
| `## What a tester can check` | The checks that belong on this topic, as a list. |
| `## Key words` | A table. Always last. No voices. |

Each section except `## Key words` has `<Voices>` with `<Technical>`, `<Layman>`, and `<Bangla>` (see "Voices" in `CLAUDE.md`). The Bangla text addresses the reader with আপনি and keeps tool names, acronyms, and code in English.

Link to the tutorial pages and the modules that go deeper: `/foundations/prompting/`, `/extend/mcp/`, `/automate/playwright/`, `/automate/github-actions/`, the AI Engineering module (`/ai-engineering/`), the AI Concepts module (`/ai-concepts/`), and the How AI Agents Work module (`/ai-agents/`).

## Sources

Each fact (a metric name, a limit, a default, a behavior, a definition) has a `<Cite>` to an official source: the tool's own documentation (promptfoo.dev, docs.ragas.io, docs.giskard.ai, docs.confident-ai.com, python.langchain.com, docs.smith.langchain.com, langfuse.com, arize.com/docs/phoenix, docs.trychroma.com, qdrant.tech, dspy.ai, playwright.dev, platform.openai.com, docs.anthropic.com, ai.google.dev), OWASP, NIST, or the original paper on arXiv for a method. No blogs, forums, news, or AI summaries. Prefer facts that do not change often. Do not give prices.

## Research and done

- Notes: `docs/superpowers/research/ai-ml-testing-<slug>.md` (sources S1, S2, … and a claims table with quotes).
- Reports: `ai-ml-testing-<slug>.factcheck.md`, each ending with `Open FAILs: N`.
- A page is done only when its report ends with `Open FAILs: 0`, written by an agent that did not write the page.

## Scope note

15 pages is the first batch of the module. The build is split so that the data layer, the routes, the tests, and the search and progress wiring land first, and the pages land in batches: Phase 1 course modules 1 to 5 are written, and modules 6 to 8 and all of Phase 2 follow. A page is not in the topic list until its text exists, so the module never ships a link to a missing file.
