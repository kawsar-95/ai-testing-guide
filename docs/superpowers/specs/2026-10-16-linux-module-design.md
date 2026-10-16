# Linux module — design

Date: 2026-10-16. Status: draft, waiting for the owner's review.

## 1. Goal

Add a Linux learning module to this site, under `/linux/`. The content comes from the 257 resources that https://roadmap.sh/linux links to (102 topics). A reader gets a personal learning path with a done checkbox for each topic, and a page of notes for each stage.

The reader is a QA engineer or SDET who works with Linux servers, CI runners, logs, and the shell.

## 2. Decisions

| Topic | Decision |
|---|---|
| Shape | Hybrid. A separate `/linux/` section like `/prep/`. The home page is the roadmap with progress. Each stage has one MDX page of notes. |
| Content | Original wording. The notes follow what the linked resources teach. No text is copied. |
| Sources | Each page cites its roadmap links. Each fact about a command, a flag, or a path gets a second source: an official doc (man7.org, kernel.org, systemd.io, a GNU manual). This is a Linux-module rule. It replaces "no blogs" of `CLAUDE.md` for this module only, because most roadmap links are blogs. |
| Practice | Out of scope. No tasks, no Docker lab, no in-browser terminal, no quiz. Pages show example commands as knowledge, not as graded work. |
| Branch | `feat/linux-module`, from `feat/prep-module`. The module reuses the `prep` progress code, and `prep` is not merged to `main`. |

Out of scope for version 1: any practice feature, video transcripts, sign-in, sync between devices.

## 3. Research pipeline

| Step | Action | Output |
|---|---|---|
| 0. Hierarchy | Read the stage of each topic from the roadmap. If the page does not give it, assign the 102 topics to stages by hand and record the table. | `docs/superpowers/research/linux-topics.md` |
| 1. Fetch | A script downloads the 257 URLs: one request at a time for each host, a timeout, and no retry loop. It converts HTML to text. | Raw text in a scratch directory. **Not committed**: it is third-party text. |
| 2. Read | One agent for each stage reads the raw text and writes notes in its own words, with sources S1, S2, … and a claims table with short quotes. | `docs/superpowers/research/linux-<stage>.md` |
| 3. Official check | Each command, flag, or path fact gets an official source and quote. | Extra rows in the claims table |
| 4. Gaps | Videos and courses (16 links): title and description only. A dead or script-only page: one retry with the web-fetch agent. Then list it. | `docs/superpowers/research/linux-fetch-report.md` |
| 5. Write | One MDX page for each stage, then a fact-check report. | `content/linux/<stage>.mdx` and `…factcheck.md` |

A stage is done only when its fact-check report ends with `Open FAILs: 0`.

## 4. Stages

A stage is one top-level topic of the roadmap. The personal path puts them in this order:

| # | Slug | Roadmap topic |
|---|---|---|
| 1 | `shell-basics` | Shell and Other Basics |
| 2 | `files` | Working with Files |
| 3 | `text-processing` | Text Processing |
| 4 | `users-permissions` | User Management |
| 5 | `processes` | Process Management |
| 6 | `shell-scripting` | Shell Programming |
| 7 | `packages` | Package Management |
| 8 | `disks-filesystems` | Disks and Filesystems |
| 9 | `networking` | Networking |
| 10 | `boot-services` | Booting Linux and service management |
| 11 | `troubleshooting` | Server Review, Logs, Troubleshooting |
| 12 | `containers` | Containerization |

The reason for the order: the reader first learns to move and read (1–3), then who may do what (4), then what runs (5), then to automate (6), then to install (7), then the machine (8–10), then to find faults (11), then to isolate (12). The step 0 table can move a topic between stages 10 and 11. It does not change the stage list.

Each stage page has a section for each topic, in this form: what it is, the key commands in a code block, and a "Why it matters for testing" line. A command with data loss risk gets a `danger` callout. A line of the tutorial's own advice is marked as such.

## 5. Routes and data

| Route | Page |
|---|---|
| `/linux/` | Roadmap home: overall progress, then each stage with its topic checklist. |
| `/linux/<stage>/` | The notes of one stage. |

- Files: `app/(site)/linux/page.tsx` and `app/(site)/linux/[stage]/page.tsx`. `dynamicParams = false`. The site grows from 38 to 51 routes (38 + 1 + 12).
- `lib/linux/stages.ts` is the one ordered list: stage `slug`, `title`, `description`, and its `topics` (`id`, `title`, `anchor`). Topic `id` format: `<stage-slug>-NNN`. The `anchor` comes from the title with the same slug rules as `rehype-slug`. The study time of a stage is 20 min for each topic, computed and not stored. The topic table of the stages is in the plan `docs/superpowers/plans/2026-10-16-linux-module.md`. It drives the sidebar, the home page, search, the sitemap, the PWA precache, and the route map.
- `content/linux/<stage>.mdx` follows the page template of `CLAUDE.md` (`metadata`, `page`, `<PageMeta />`). Each `anchor` of `stages.ts` is the `rehype-slug` id of a `##` heading in its MDX file.
- Internal links are `/linux/<stage>/`, with no repo name (base-path rule).

## 6. Progress

- Reuse `lib/prep/progress.ts` and the `useSyncExternalStore` store of `prep`. A small change makes the storage key a parameter. The prep behavior and its tests stay as they are.
- Key: `linux-progress`, a JSON list of done topic ids. Every read and write is in `try/catch`. The server render shows 0 done, and the client updates after hydration.
- The home page and each stage page show the same `ProgressBar`.

## 7. Shell integration

- The sidebar and the mobile drawer show the stage list when the path starts with `/linux/`, the same way `/prep/` does.
- The header gets one link, "Linux".
- `lib/search.ts` indexes each stage page (intro and `##` sections). `app/sitemap.ts` and `lib/pwa.ts` list the new routes. `scripts/linux-route-map.json` and `scripts/check_routes.py` cover them.
- Tutorial numbering, prev/next, and the home contents do not change.

## 8. Tests and checks

| Check | What it verifies |
|---|---|
| `tests/linux-data.test.ts` | Topic ids are unique. Each stage has an MDX file. Each topic anchor is a heading in its MDX. Each stage has at least 1 topic. All 102 roadmap topics are placed. |
| `tests/linux-progress.test.ts` | The progress functions work with the `linux-progress` key, and `prep-progress` is not changed. |
| `tests/search.test.ts`, `tests/pwa.test.ts` | The 13 new routes (`/linux/` and 12 stages) appear in search, in the sitemap, and in the precache. |
| `check_sources.py out` | Each Linux page has sources and cites. The expected line becomes `OK 35 pages checked, 0 skipped` (23 tutorial pages + 12 Linux stage pages; the `/linux/` home is not an MDX page). |
| `npm test`, `npm run build`, the other `scripts/check_*.py` | No regression. |

## 9. Risks

| Risk | Handling |
|---|---|
| A site blocks the fetch, or a page needs JavaScript. | Step 4 retry, then the fetch report. A topic with no readable source still gets notes from the official doc. |
| A blog states a wrong fact. | Step 3 checks it against an official source. The fact-check report records a FAIL, and the page is fixed. |
| Copying of third-party text. | Raw text is never committed. Notes are in the writer's own words. The research notes hold at most one short quote for each claim. |
| The prep branch changes before it merges. | Rebase `feat/linux-module` on it. The shared change is only the storage key parameter. |
| Size: 12 pages with 102 topics. | Each stage is its own plan task. A stage ships when its fact-check passes. |
