# AI roadmaps: audit

Date: 2026-11-23. Basis: the slugs, titles, descriptions, and `##` headings of all 137 pages of the 8 AI modules, and the module code (`lib/*/topics.ts`, `lib/modules/flat.ts`) and tests. The page bodies were not read in full, so a ruling that depends on a page body would be marked "check" (none is left).

## Modules

| Module | Pages | Existing structure | Pinned by a test |
|---|---|---|---|
| ai-skills | 20 | 4 tiers (parts) | order and parts (`tests/ai-skills.test.ts`) |
| ai-engineering | 28 | 2 parts ("iceberg") | order and parts (`tests/ai-engineering.test.ts`) |
| ai-ml-testing | 47 | 2 phases | order and parts (`tests/ai-ml-testing.test.ts`) |
| ai-agents | 10 | none, one order | order |
| ai-concepts | 9 | none, one order | order |
| harness | 6 | none, one order | order |
| agent-memory | 7 | none, one order | order |
| agentic-qa | 10 | a group in `lib/nav.ts`, not a flat module, no progress | order |

## Findings

1. **Every module already has an order, and the order of three is a design that a test pins.** A roadmap that moves pages would rewrite those designs. Decision: do not move or rename any page or URL. The roadmaps are a separate layer that points at the pages.
2. **The existing parts are uneven.** ai-ml-testing Phase 1 holds 25 pages, ai-engineering Part 2 holds 20. A reader cannot see a path inside them. The roadmap splits them into stages of 2 to 7 pages.
3. **Four modules have no grouping at all** (ai-agents, ai-concepts, harness, agent-memory).
4. **Topics repeat across modules.** The reading order across them is a ruling that no page states today (table below).
5. **ai-concepts puts `agent-harness` last.** It is the idea that the loop, tools, and guardrails pages assume, so the roadmap reads it first in its second stage. The module order stays.
6. **agentic-qa has no progress store**, so its roadmap shows no ticks.
7. **Two observability pages inside ai-ml-testing** (`ai-observability`, `production-observability`) are not duplicates. Checked: the first sets up tracing, the second builds alerts and drift checks on a live app, and the word overlap of the two bodies is 0.25 (Jaccard, words of 5+ letters). Order: tracing first.

## Rulings for repeated topics (read in this order)

| Topic | Order |
|---|---|
| guardrails | ai-agents → ai-concepts → harness → ai-engineering `guardrails-and-safety` → ai-ml-testing `guardrails-bias` |
| observability | ai-agents `observability-and-evals` → ai-concepts → ai-engineering `observability`, `production-monitoring` → ai-ml-testing `ai-observability`, `production-observability` |
| tool calling | harness `tool-calling` → ai-engineering `tool-calling` |
| context engineering | ai-skills (for a user) → ai-engineering (for a system) |
| fine-tuning | ai-skills (when, and when not) → ai-engineering → ai-ml-testing `finetuned-model-testing` |
| evals | ai-skills `ai-evals` → ai-concepts `evals` → ai-engineering `model-evaluation` → ai-ml-testing eval tools |
| RAG | ai-skills `rag` → ai-engineering `rag-basics` → ai-ml-testing `rag-testing-basics` |
| MCP | ai-concepts `mcp` → ai-skills `mcp-connectors` → agentic-qa `project-setup` |
| agents | ai-agents → ai-skills `ai-agents` → ai-engineering `ai-agents` |
| memory | ai-agents `memory` → agent-memory (the 7 types) |

## Stage plan

Every page is in exactly one stage of exactly one module roadmap (137 pages). The master path uses every stage exactly once. `tests/ai-roadmap.test.ts` checks both.

The stages are in `lib/ai-roadmap/roadmaps.ts`.

## What was not done

- No page text was changed.
- No module order, part, slug, or URL was changed.
- The full text of the 137 pages was not read.
