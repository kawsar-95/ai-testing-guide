# Software Testing Fundamentals Module Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the `/fundamentals/` module: a home page with progress and 11 chapter pages, each (except the interview chapter) with a "My notes" version and an ISTQB version behind one switch.

**Architecture:** Copy the Linux module pattern (`lib/linux/stages.ts`, `components/linux/`, `app/(site)/linux/`). One ordered data list `lib/fundamentals/chapters.ts` drives routes, sidebar, search, sitemap, precache, and progress. A `<Version of="notes|istqb">` MDX block and a `data-fundamentals-version` attribute on `<html>` (set before paint by an init script, like the theme) show one version.

**Tech Stack:** Next.js 16 App Router (static export), React 19, TypeScript, Tailwind 4, MDX (`@next/mdx`), `node --test`, Python 3 check scripts.

**Spec:** `docs/superpowers/specs/2026-10-20-fundamentals-module-design.md`

**Source text:** `docs/superpowers/research/fundamentals-owner-notes.md` (the owner's notes). Owner images: the 10 images of the owner's message (session images folder, not in the repo).

**Worktree:** `…main.fund-wt`, branch `feat/fundamentals-module`. Never run git in `…main` (the owner's checkout). Never push.

## Global Constraints

- Route home: `/fundamentals/`. Chapter route: `/fundamentals/<slug>/`. Internal links never contain the repo name.
- Storage keys: `fundamentals-progress` (done topic ids), `fundamentals-version` (`"notes"` or `"istqb"`). Default version: `istqb`. Every storage call is in `try/catch`.
- Topic id format: `<chapter-slug>-NNN` from `001`. Topic anchor: `github-slugger`, one slugger per chapter, the chapter title slugged first (same as `lib/linux/stages.ts`).
- No heading (`#`–`######`) inside a `<Version>` block. In chapters 1–10, each `##` topic has exactly one `<Version of="notes">` and one `<Version of="istqb">`. The interview chapter has no `<Version>` block.
- `<Cite>` appears only in `istqb` blocks and in interview answers. `page.sources` lists only ISTQB sources (syllabus and glossary).
- Owner text: kept; only spelling and broken formatting fixed. A conflict with ISTQB gets a `<Callout type="warning">` in the `notes` block, one sentence, ending with "Switch to the ISTQB version at the top of the page to see the ISTQB definition."
- A term that ISTQB does not define: the `istqb` block says "The ISTQB syllabus and glossary do not define this term." and gives the common meaning in `<Callout type="note" title="The tutorial's own explanation">`, with no `<Cite>`.
- Owner images appear only in `notes` blocks, via `<MdxImage>`, with alt text.
- New prose: plain, short English (ASD-STE100 style), original wording; syllabus text only as short quotes in research notes.
- A chapter is done only when `docs/superpowers/research/fundamentals-<slug>.factcheck.md` ends with `Open FAILs: 0`, written by an agent that did not write the chapter.
- Final counts: 49 routes; `python3 scripts/check_sources.py out` prints `OK 46 pages checked, 0 skipped`.
- Privacy: no real person's name, email, home path, or login name in new text. (The owner notes' sample email, which contains a real name, becomes `user@example.com` in both versions; this is a formatting-level fix.)

## Chapter and topic table

Chapter titles, descriptions, and topic titles are fixed here. A topic title is the text of its `##` heading. `tests/fundamentals-data.test.ts` copies this table.

| # | Slug | Title | Description | Topics |
|---|---|---|---|---|
| 1 | `basics` | Testing Basics | What testing is, why it matters, and the skills a tester needs. | What Is Software Testing; Why Testing Is Necessary; Quality and Quality Assurance; Testing Objectives; Software Testing Misconceptions; QA Generic Skills; QA vs QC |
| 2 | `defects-principles` | Defects and the 7 Principles | Errors, defects, bugs, and failures, and the seven principles of testing. | Error, Defect, Bug and Failure; Testing Shows the Presence of Defects; Exhaustive Testing Is Impossible; Early Testing Saves Time and Money; Defects Cluster Together; Tests Wear Out; Testing Is Context Dependent; Absence-of-Defects Fallacy |
| 3 | `lifecycles` | SDLC, STLC and Agile | How testing fits into the software life cycle and into Agile teams. | Software Testing Life Cycle (STLC); Testing Activities; Software Development Life Cycle (SDLC); SDLC Models; Agile Methodology; ATDD, TDD and BDD |
| 4 | `test-types` | Test Types | Static and dynamic testing, and the common functional and non-functional test types. | Testing Classification; Static Testing; Dynamic Testing; Smoke, Sanity and Feature Testing; Regression Testing; Exploratory and Ad-hoc Testing; Monkey and Gorilla Testing; Alpha, Beta and A/B Testing; Non-Functional Testing |
| 5 | `levels` | Test Levels, Pyramid and Quadrants | The test levels, and two models that help you balance them. | Test Levels; Component Testing; Integration Testing; System Testing; Acceptance Testing; The Test Pyramid; The Test Quadrants |
| 6 | `black-box` | Black-Box Techniques | Design tests from the specification: partitions, boundaries, decision tables, and states. | Test Techniques Overview; Equivalence Partitioning; Boundary Value Analysis; Equivalence Partitioning in a Complex Case; Decision Table Testing; State Transition Testing |
| 7 | `white-box` | White-Box Techniques | Design tests from the code: statement, branch, and condition coverage. | Why White-Box Testing Matters; Statement Coverage; Branch Coverage; Condition Testing; Unit Testing; Integration Testing in Code; White-Box Review Checklist |
| 8 | `experience-based` | Experience-Based Techniques | Use your experience: error guessing, exploratory testing, and checklists. | Error Guessing; Exploratory Testing; Checklist-Based Testing; Black-Box Checklist; White-Box Checklist |
| 9 | `planning` | Planning and Estimation | Plan the testing, set the strategy, estimate the effort, and write acceptance criteria. | Test Plan; Test Strategy; Test Plan vs Test Strategy; Test Effort Estimation; Acceptance Criteria |
| 10 | `test-cases-bugs` | Test Cases, Bugs and Completion | Write test cases and bug reports, triage bugs, and close the testing. | Test Case; Bug Report; Bug Life Cycle; Bug Triage; Entry and Exit Criteria; Test Completion; Requirement Traceability Matrix (RTM) |
| 11 | `interview` | Interview Questions | 50 common manual testing interview questions with short answers. | The 50 questions of the owner notes, in order, as written, without the number (for example "What is software testing, and why is it important?"). Exception: in question 46, use straight quotes as in the notes. |

Topic counts: 7, 8, 6, 9, 7, 6, 7, 5, 5, 7, 50. Total 117.

## Image files

Copy each owner image to `public/images/fundamentals/<name>`:

| Source | Name | Chapter / topic |
|---|---|---|
| `1.png` | `stlc-phases.png` | lifecycles / Software Testing Life Cycle (STLC) |
| `2.png` | `testing-classification.png` | test-types / Testing Classification |
| `3.png` | `test-levels.png` | levels / Test Levels |
| `4.png` | `test-levels-integration.png` | levels / Integration Testing |
| `5.png` | `test-pyramid.png` | levels / The Test Pyramid |
| `6.png` | `test-quadrants.png` | levels / The Test Quadrants |
| `7.png` | `state-transition-pin.png` | black-box / State Transition Testing |
| `8.png` | `test-case-template.png` | test-cases-bugs / Test Case |
| `9.png` | `bug-life-cycle.png` | test-cases-bugs / Bug Life Cycle |
| `10.png` | `rtm-example.png` | test-cases-bugs / Requirement Traceability Matrix (RTM) |

## Review Focus

1. A reader with storage blocked (private window): the page renders the ISTQB version, the switch still changes the version for the session, and nothing throws. Test: Task 1 init-script test with a `localStorage` that throws.
2. A saved value that is not `notes` or `istqb` (old or tampered): the page shows ISTQB. Test: Task 1 `resolveVersion("bogus") === "istqb"` and the init-script test.
3. An MDX author puts a `###` inside a `<Version>` block, or forgets one version: the outline and the version switch break silently. Test: Task 3 structure tests over every chapter file.
4. Two interview questions slug to the same anchor: one checkbox link goes to the wrong question. Test: Task 1 "anchors are unique inside a chapter".
5. The base-path build (GitHub Pages): image `src` without the repo prefix gives broken images. Test: Task 2 `tests/base-path.test.ts`, and the Task 16 base-path build check.

---

### Task 1: Data, version logic, route map, and check scripts

**Files:**
- Create: `lib/fundamentals/chapters.ts`, `lib/fundamentals/ui.ts`, `lib/fundamentals/version.ts`, `scripts/fundamentals-route-map.json`
- Create: `tests/fundamentals-data.test.ts`, `tests/fundamentals-version.test.ts`
- Modify: `scripts/check_routes.py`, `scripts/check_outline.py`, `scripts/check_sources.py`, `scripts/test_checks.py`

**Interfaces:**
- Produces (`lib/fundamentals/chapters.ts`):
  - `FUNDAMENTALS_HOME = "/fundamentals/"`, `FUNDAMENTALS_STORAGE_KEY = "fundamentals-progress"`
  - `type FundamentalsChapterSlug` (the 11 slugs), `type FundamentalsTopic = { id: string; title: string; anchor: string }`
  - `type FundamentalsChapter = { slug; title; description; number: number; href: string; hasVersions: boolean; topics: readonly FundamentalsTopic[] }` (`hasVersions` is `false` only for `interview`)
  - `CHAPTERS: readonly FundamentalsChapter[]`, `FUNDAMENTALS_ROUTES: readonly string[]` (home then 11 hrefs), `ALL_FUNDAMENTALS_TOPIC_IDS: readonly string[]`, `getChapter(slug: string): FundamentalsChapter | undefined`
- Produces (`lib/fundamentals/version.ts`): `type Version = "notes" | "istqb"`, `VERSION_STORAGE_KEY = "fundamentals-version"`, `VERSION_ATTRIBUTE = "data-fundamentals-version"`, `DEFAULT_VERSION: Version = "istqb"`, `resolveVersion(stored: string | null): Version`, `VERSION_INIT_SCRIPT: string`, `VERSION_EVENT = "fundamentals-version-change"`.
- Produces (`lib/fundamentals/ui.ts`): `FUNDAMENTALS_UI` with the same keys as `LINUX_UI`, renamed for chapters: `siteTitle: "Fundamentals"`, `heading: "Software Testing Fundamentals"`, `eyebrow(chapters, topics)` → `FUNDAMENTALS · 11 CHAPTERS · 117 TOPICS`, `chapterEyebrow(n)` → `CHAPTER 01 · FUNDAMENTALS`, `sidebarChapterLabel(n)` → `CHAPTER 01`, `chaptersHeading: "CHAPTERS"`, `chapterNav`, `allChapters`, `previousChapter`, `nextChapter`, `checklistHeading: "Topics"`, `checklistLabel(title)`, `chapterProgressLabel(title)`, `overallLabel`, `summaryText`, `percentText`, `chapterCount`, `sidebarNav: "Chapters"`, `sidebarCount`, `sidebarCountSr`, `headerLink: "Fundamentals"`, `crossToFundamentals: "Fundamentals"`, `privacyNote` (same text as Linux), `lede`, `description`, plus `versionSwitchLabel: "Version of the text"`, `versionNotes: "My notes"`, `versionIstqb: "ISTQB"`. No study time.

- [ ] **Step 1: Write the failing tests**

`tests/fundamentals-data.test.ts` (model it on `tests/linux-data.test.ts`):
- 11 chapters in the table order; numbers 1–11; `FUNDAMENTALS_HOME === "/fundamentals/"`; `FUNDAMENTALS_STORAGE_KEY === "fundamentals-progress"`.
- topic counts `[7, 8, 6, 9, 7, 6, 7, 5, 5, 7, 50]`, total 117.
- ids `<slug>-NNN` from 001, unique across all chapters; `ALL_FUNDAMENTALS_TOPIC_IDS` equals the flat list.
- anchors unique and non-empty inside each chapter.
- `hasVersions` is `false` only for `interview`.
- `FUNDAMENTALS_ROUTES` length 12, first `/fundamentals/`, then `/fundamentals/<slug>/`.
- `getChapter("planning")?.href === "/fundamentals/planning/"`, `getChapter("nope") === undefined`.
- anchor of `Error, Defect, Bug and Failure` is `error-defect-bug-and-failure`; of `Software Testing Life Cycle (STLC)` is `software-testing-life-cycle-stlc`.
- a `TABLE` literal copied from the "Chapter and topic table" (all 11 rows with the 50 questions) deep-equals `CHAPTERS` titles, descriptions, and topic titles.

`tests/fundamentals-version.test.ts` (model it on `tests/theme.test.ts`):
- `resolveVersion(null) === "istqb"`, `resolveVersion("notes") === "notes"`, `resolveVersion("istqb") === "istqb"`, `resolveVersion("bogus") === "istqb"`.
- Run `VERSION_INIT_SCRIPT` with `new Function("localStorage", "document", …)` and stubs; for stored `null`, `"notes"`, `"istqb"`, `"bogus"` the attribute `data-fundamentals-version` equals `resolveVersion(stored)`. With a `localStorage.getItem` that throws, the script does not throw and sets no attribute.

- [ ] **Step 2: Run** `npm test` — Expected: the two new files FAIL (modules not found).

- [ ] **Step 3: Implement** `chapters.ts` (same build method as `STAGES` in `lib/linux/stages.ts`), `version.ts` (script like `THEME_INIT_SCRIPT`: `try{var s=localStorage.getItem(KEY);document.documentElement.setAttribute(ATTR, s==="notes"||s==="istqb"?s:"istqb")}catch(e){}`), and `ui.ts`.

- [ ] **Step 4: Run** `npm test` — Expected: all pass.

- [ ] **Step 5: Route map and Python checks.** Create `scripts/fundamentals-route-map.json` (identity map of the 12 routes). Add `"fundamentals-route-map.json"` to the tuple in `check_routes.load_routes`, and `("fundamentals-route-map.json", "/fundamentals/")` to `check_outline.default_routes` and to the same place in `check_sources.py`. Update `scripts/test_checks.py`: the load-routes test expects tutorial + linux + fundamentals; add `test_fundamentals_route_map_is_an_identity_map` (contains `/fundamentals/` and `/fundamentals/basics/`); the MDX-count test at line ~77 excludes `fundamentals` as it excludes `linux`. Update the docstrings that list the maps.

- [ ] **Step 6: Run** `python3 -m unittest scripts/test_checks.py` — Expected: OK.

- [ ] **Step 7: Commit** `feat(fundamentals): add the chapter data, version logic, and route map`

### Task 2: Images and the MdxImage component

**Files:**
- Create: `lib/base-path.ts`, `components/mdx/MdxImage.tsx`, `tests/base-path.test.ts`, `public/images/fundamentals/*.png` (10 files)
- Modify: `lib/ui.ts` (add `openImageFullSize = "Open the image in full size"`), `mdx-components.tsx` (register `MdxImage`)

**Interfaces:**
- Produces: `withBasePath(path: string, base?: string): string`; `<MdxImage src alt width? height? />`.

Copy `lib/base-path.ts`, `components/mdx/MdxImage.tsx`, and `tests/base-path.test.ts` byte for byte from branch `feat/linux-cheatsheet-image` (`git show feat/linux-cheatsheet-image:<path>`), so the two branches merge clean. Take the `openImageFullSize` line and the `mdx-components.tsx` lines from the same branch (`git diff chore/remove-prep-module feat/linux-cheatsheet-image -- lib/ui.ts mdx-components.tsx`).

- [ ] **Step 1:** Copy `tests/base-path.test.ts`. Run `npm test` — Expected: FAIL (module not found).
- [ ] **Step 2:** Copy `lib/base-path.ts`, `components/mdx/MdxImage.tsx`; apply the `lib/ui.ts` and `mdx-components.tsx` lines.
- [ ] **Step 3:** Copy the 10 images with the names of the "Image files" table.
- [ ] **Step 4: Run** `npm test` — Expected: all pass.
- [ ] **Step 5: Commit** `feat: add MdxImage and the images of the Fundamentals module`

### Task 3: Pages, shell, version switch, and chapter skeletons

**Files:**
- Create: `app/(site)/fundamentals/page.tsx`, `app/(site)/fundamentals/[chapter]/page.tsx`
- Create: `components/pages/FundamentalsHome.tsx`, `components/fundamentals/{useFundamentalsProgress.ts,FundamentalsProgressSummary.tsx,ChapterProgress.tsx,TopicChecklist.tsx,FundamentalsSidebarList.tsx,Version.tsx,VersionSwitch.tsx}`
- Create: `lib/fundamentals/structure.ts`, `tests/fundamentals-structure.test.ts`
- Create: `content/fundamentals/<slug>.mdx` × 11 (skeletons)
- Modify: `app/layout.tsx`, `app/globals.css`, `mdx-components.tsx`, `components/layout/NavList.tsx`, `components/layout/SiteHeader.tsx`, `lib/search.ts`, `app/search-index.json/route.ts`, `app/sitemap.ts`, `lib/pwa.ts`, `lib/ui.ts` (`searchType` mentions the Fundamentals chapters), `tests/pwa.test.ts`, `tests/search.test.ts` and `tests/ui.test.ts` where they list modules, `CLAUDE.md`

**Interfaces:**
- Consumes: Task 1 exports; `createUseProgress` from `components/prep/useProgress`; `MdxImage` (Task 2).
- Produces:
  - `Version({ of, children }: { of: "notes" | "istqb"; children: ReactNode })` → `<div data-version={of}>`.
  - `VersionSwitch()`: client component, two buttons with `aria-pressed`, inside `role="group"` labelled `FUNDAMENTALS_UI.versionSwitchLabel`. Reads the current value with `useSyncExternalStore` (subscribe to `VERSION_EVENT`; snapshot = `resolveVersion(document.documentElement.getAttribute(VERSION_ATTRIBUTE))`; server snapshot `DEFAULT_VERSION`). On click: set the attribute, save to `localStorage` in `try/catch`, dispatch `VERSION_EVENT`.
  - `lib/fundamentals/structure.ts`: `topicVersionCounts(source: string): { title: string; notes: number; istqb: number }[]` (per `##` section, ignoring fenced code) and `headingsInsideVersions(source: string): string[]` (heading lines between a `<Version` opening line and its `</Version>` line).
  - `buildFundamentalsSearchDocs(entries: { chapter: FundamentalsChapter; source: string }[]): SearchDoc[]` in `lib/search.ts`, group `"fundamentals"`, `part: null`.

- [ ] **Step 1: Write the failing tests** in `tests/fundamentals-structure.test.ts`:
  - `topicVersionCounts` on a fixture with two topics returns the right counts and ignores a `<Version` line inside a code fence.
  - `headingsInsideVersions` finds a `### X` inside a block and ignores a `##` outside.
  - For each chapter of `CHAPTERS`: `content/fundamentals/<slug>.mdx` exists; each `##` id (via `outlineFromSource`) equals the chapter's topic anchors in order; if `hasVersions`, every topic has `notes === 1 && istqb === 1`, else no `<Version`; `headingsInsideVersions` is empty.
  - Every `.mdx` in `content/fundamentals/` is a chapter slug.
  - Every `<MdxImage src="…">` in `content/fundamentals/` points to an existing file under `public/`.
  - `tests/pwa.test.ts`: `precacheUrls` contains the 12 `FUNDAMENTALS_ROUTES`, no duplicates.
- [ ] **Step 2: Run** `npm test` — Expected: FAIL.
- [ ] **Step 3: Skeletons.** Each `content/fundamentals/<slug>.mdx`: the `CLAUDE.md` page template; `page.updated: '2026-10-20'`; `page.sources` with one entry: ISTQB CTFL syllabus (title, publisher `ISTQB`, the URL chosen in Task 4 — use `https://www.istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/` here), `accessed: '2026-10-20'`; `# <chapter title>`; a one-sentence lede (the description); `<PageMeta />`; then per topic `## <title>` and (if `hasVersions`) `<Version of="notes">` and `<Version of="istqb">` blocks each holding `{/* DRAFT */}`, and the first `istqb` block also `<Cite n={1} />`. The interview skeleton: per question `## <question>` and `{/* DRAFT */}`, the first one with `<Cite n={1} />`.
- [ ] **Step 4: Components and routes.** Copy the Linux files and rename (`LinuxHome`→`FundamentalsHome`, stage→chapter, no study-time line). The chapter page renders `<VersionSwitch />` between the progress summary and the article when `chapter.hasVersions`. Register `Version` in `mdx-components.tsx`. In `app/layout.tsx`: add `data-fundamentals-version="istqb"` on `<html>` and a second `<script>` with `VERSION_INIT_SCRIPT`. In `app/globals.css`:
  ```css
  html[data-fundamentals-version="istqb"] [data-version="notes"],
  html[data-fundamentals-version="notes"] [data-version="istqb"] { display: none; }
  ```
  `NavList`: add section `"fundamentals"` (home `FUNDAMENTALS_HOME`, label `crossToFundamentals`, arrow `→`), detect it by path prefix, render `FundamentalsSidebarList`. `SiteHeader`: a "Fundamentals" link after "Linux", same classes. Search route, sitemap, `precacheUrls`: append the fundamentals entries after the Linux ones. Search palette: show group `"fundamentals"` the way it shows `"linux"`.
- [ ] **Step 5: Run** `npm test`, `npm run build`, then `python3 scripts/check_routes.py out`, `check_links.py out`, `check_outline.py out`, `check_sources.py out` — Expected: tests pass, build OK, `OK 46 pages checked, 0 skipped`.
- [ ] **Step 6: Manual check** with `python3 -m http.server 8000 -d out`: `/fundamentals/basics/` shows the switch; clicking "My notes" hides `istqb` blocks; reload keeps the choice; `/fundamentals/interview/` has no switch; the sidebar shows 11 chapters.
- [ ] **Step 7: CLAUDE.md.** Add a "Fundamentals Module" section (rules from Global Constraints, file list, the version switch), add the new files to the Structure table, change the route count to 49 (add a `/fundamentals/` row, 12) and the `check_sources.py` count to 46, add `fundamentals-route-map.json` to the Checks rows.
- [ ] **Step 8: Commit** `feat(fundamentals): add the pages, the version switch, and the chapter skeletons`

### Task 4: ISTQB sources

**Files:**
- Create: `docs/superpowers/research/fundamentals-sources.md`

- [ ] **Step 1:** Get the newest CTFL v4.0.x syllabus PDF from istqb.org (or the ASTQB copy if istqb.org blocks the fetch). Save its text to `~/.cache/fundamentals-istqb/` (never commit). Record the exact version, date, and public URL.
- [ ] **Step 2:** Find the ISTQB glossary URL form for one term (for example "defect"); confirm that a term page is reachable or that the glossary gives a stable link. If term pages need JavaScript, cite the glossary home with the term name in the title.
- [ ] **Step 3:** Write `fundamentals-sources.md`: the source list (S1 syllabus with URL and version; S2… glossary terms used), the section of the syllabus that covers each chapter, and the list of owner-note terms that ISTQB does not define (at least: monkey testing, gorilla testing, A/B testing, benchmark testing, sanity testing — confirm each in the glossary).
- [ ] **Step 4: Commit** `docs(fundamentals): list the ISTQB sources`

### Task 4b: Diagrams of the ISTQB version

**Files:**
- Create: `components/fundamentals/diagrams/{Figure.tsx,StlcDiagram.tsx,TestingClassificationDiagram.tsx,TestLevelsDiagram.tsx,TestPyramidDiagram.tsx,TestQuadrantsDiagram.tsx,PinStateDiagram.tsx,BugLifeCycleDiagram.tsx}`, `tests/fundamentals-diagrams.test.ts`
- Modify: `mdx-components.tsx` (register the 7 diagrams)

**Interfaces:**
- Produces: 7 server components with no props. Each renders `<Figure title description>` with an inline `<svg role="img" aria-labelledby>` that has a `<title>`, and a `<figcaption>` text description below. `Figure({ title, description, children })` in `Figure.tsx`. Colors only through `currentColor` and CSS variables of `app/globals.css` (for example `var(--color-accent)`, `var(--color-border)`, `var(--color-bg-raised)`); no hex values. `viewBox` set, width 100%, readable at 360 px.

| Component | Shows |
|---|---|
| `StlcDiagram` | The 7 ISTQB test activity groups in order: planning, monitoring and control (beside all), analysis, design, implementation, execution, completion |
| `TestingClassificationDiagram` | Testing split by action (manual, automated), by approach (static, dynamic), by technique (black-box, white-box, experience-based) |
| `TestLevelsDiagram` | The 5 ISTQB v4 levels bottom to top: component, component integration, system, system integration, acceptance |
| `TestPyramidDiagram` | 3 layers: unit (many, fast), service/integration, UI/end-to-end (few, slow) |
| `TestQuadrantsDiagram` | 2×2: axes business vs technology facing, support the team vs critique the product; Q1–Q4 with the CTFL v4 test examples |
| `PinStateDiagram` | States Start, 1st try, 2nd try, 3rd try, Access granted, Account blocked; events correct PIN / incorrect PIN |
| `BugLifeCycleDiagram` | New, Open, Rejected, Deferred, Fixed, Retest, Reopen, Closed and the arrows of the owner image |

- [ ] **Step 1: Write the failing test** `tests/fundamentals-diagrams.test.ts`: read each diagram source file; assert it contains `role="img"`, `<title`, and no `#` followed by 3 or 6 hex digits inside a `fill=`/`stroke=` attribute; assert `mdx-components.tsx` registers all 7 names.
- [ ] **Step 2: Run** `npm test` — Expected: FAIL.
- [ ] **Step 3: Implement** the 7 components and `Figure`.
- [ ] **Step 4: Run** `npm test` and `npm run build` — Expected: pass. Check one diagram in light and dark themes on the dev server.
- [ ] **Step 5: Commit** `feat(fundamentals): add the diagrams of the ISTQB version`

### Tasks 5–14: One chapter each (chapters 1–10)

Run these tasks in any order after Tasks 3, 4, and 4b; they touch different files. Task N (N = 5…14) is chapter N−4 of the table.

**Files (chapter `<slug>`):**
- Create: `docs/superpowers/research/fundamentals-<slug>.md`, `docs/superpowers/research/fundamentals-<slug>.factcheck.md`
- Modify: `content/fundamentals/<slug>.mdx`

**Interfaces:**
- Consumes: `fundamentals-owner-notes.md` (the part of the notes for this chapter), `fundamentals-sources.md`, the images of the "Image files" table, the components `Version`, `MdxImage`, `Callout`, `Cite`, `CardGrid`, `InfoCard`.

- [ ] **Step 1: Research notes.** For each topic: the claims of the ISTQB version, each with source (S-number) and a short quote; and the list of owner-note lines that conflict with ISTQB, each with the ISTQB quote.
- [ ] **Step 2: Write the MDX.** Replace every `{/* DRAFT */}`. `notes` block: the owner text of that topic from the notes (kept; spelling and broken formatting fixed; `###` sub-headings become bold labels), its image, and a warning callout for each conflict. `istqb` block: original plain text with `<Cite>`; where the notes have an image, the matching Task 4b diagram component, or a GFM table for the test case fields, RTM, decision table, partitions and boundaries, and triage; non-ISTQB terms per the Global Constraints. Fill `page.sources` with the sources used, numbered as cited. Set `page.updated`.
- [ ] **Step 3: Run** `npm test` and `npm run build && python3 scripts/check_sources.py out && python3 scripts/check_outline.py out` — Expected: pass.
- [ ] **Step 4: Fact-check** by a fresh agent that did not write the chapter: one row per cited claim (cite, verdict PASS/FAIL, quote), one row per warning callout (is the conflict real?), last line `Open FAILs: N`. Fix each FAIL and re-check until `Open FAILs: 0`.
- [ ] **Step 5: Commit** `docs(fundamentals): write the <title> chapter`

Chapter notes:
- `basics`: "Why Testing Is Necessary" in ISTQB terms (contributions of testing, CTFL 1.2). Misconceptions are the owner's views: the `istqb` block covers only what ISTQB says (for example testing objectives other than finding defects) and marks the rest as the tutorial's own explanation. QA vs QC: check the "verification/validation" and "SDLC/STLC" rows.
- `defects-principles`: ISTQB v4 uses "Tests wear out" and "Absence-of-defects fallacy". The owner definition of "bug" conflicts with the glossary (bug is a synonym of defect).
- `lifecycles`: the notes have both a 7-phase STLC and ISTQB's test activities; map them in the `istqb` block (test planning, monitoring and control, analysis, design, implementation, execution, completion).
- `test-types`: smoke and sanity test terms; check the glossary.
- `levels`: ISTQB v4 levels are component, component integration, system, system integration, acceptance. The test quadrants per CTFL 2.1.x / 5.x: check the quadrant content of the notes (Q4 in the notes lists smoke and regression tests).
- `black-box`: in the `istqb` block, give the worked answer for the 18–100 example (partitions and 2-value/3-value boundaries). For the bank example, list the partitions and state the coverage the notes' scenario reaches (show the arithmetic). Fix the decision table so each rule has an output (mark that as the tutorial's own version if not from ISTQB).
- `white-box`: ISTQB v4 covers statement and branch coverage only; condition testing is outside CTFL v4 (say so). Keep the code samples in both versions; the sample email → `user@example.com`.
- `experience-based`: the two generic checklists have no ISTQB source; the `istqb` block of those two topics explains checklist-based testing (CTFL 4.4.3) and marks the lists as the tutorial's own.
- `planning`: test plan content and estimation techniques (ratios, extrapolation, Wideband Delphi, three-point) are in CTFL 5.1. "Test strategy" vs "test plan": check v4 wording (v4 talks of "test approach").
- `test-cases-bugs`: defect report content (CTFL 5.5), entry and exit criteria (5.1.3), test completion (1.4.1), traceability (1.4.4). Bug life cycle states and triage are not defined by ISTQB in this form: say so.

### Task 15: Interview chapter

**Files:** `content/fundamentals/interview.mdx`, `docs/superpowers/research/fundamentals-interview.md`, `docs/superpowers/research/fundamentals-interview.factcheck.md`

**Interfaces:** Consumes the finished chapters 1–10 (links to `/fundamentals/<slug>/#<anchor>`) and `fundamentals-sources.md`.

- [ ] **Step 1:** For each of the 50 questions, an answer of 2–5 sentences consistent with the ISTQB versions, with `<Cite>` for each ISTQB fact and a "Read more" link to the chapter topic. Questions 27–36 ("Write test cases for …"): a short table of 5–8 test case titles (positive, negative, boundary), marked once at the top of that group as the tutorial's own examples. Questions 46–50: practical answers, marked once as the tutorial's own advice.
- [ ] **Step 2: Run** the checks of Tasks 5–14 Step 3.
- [ ] **Step 3: Fact-check** as in Tasks 5–14 Step 4.
- [ ] **Step 4: Commit** `docs(fundamentals): write the interview chapter`

### Task 16: Final checks

**Files:** Modify `tests/fundamentals-structure.test.ts`, `CLAUDE.md` if counts changed.

- [ ] **Step 1:** Add the test "no chapter contains `DRAFT`" over `content/fundamentals/*.mdx`. Run `npm test` — Expected: pass.
- [ ] **Step 2:** `npm run build`; `python3 -m unittest scripts/test_checks.py scripts/test_linux_scripts.py`; `check_routes`, `check_links`, `check_outline`, `check_sources` on `out` — Expected: all OK, `OK 46 pages checked, 0 skipped`.
- [ ] **Step 3:** Base-path build: `PAGES_BASE_PATH=/learn-software-testing-with-ai npm run build`; `grep -rl 'href="/fundamentals/' out` returns nothing; every `<img src` under `out/fundamentals/` starts with `/learn-software-testing-with-ai/images/fundamentals/`. Rebuild without the base path afterwards.
- [ ] **Step 4:** Grep `content/fundamentals/` and the new research files for the name in the sample email, `/home/`, and the owner's login name — Expected: no hits.
- [ ] **Step 5: Commit** `test(fundamentals): check that no chapter is a draft`
