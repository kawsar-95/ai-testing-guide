# Interview Prep Module Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an SQA interview-prep module at `/prep/` with 13 areas, done checkboxes, a quiz, and progress saved in the browser.

**Architecture:** Typed TS data in `content/prep/<area>.ts`. Pure logic in `lib/prep/` (tested with `node --test`). Client components in `components/prep/` read progress through `useSyncExternalStore`. Static pages come from a fixed `app/(site)/prep/` folder, which wins over the dynamic `[group]` route.

**Tech Stack:** Next.js 16 (App Router, static export), React 19, TypeScript, Tailwind CSS 4, MiniSearch, `node --test`, Python 3 check scripts.

**Spec:** `docs/superpowers/specs/2026-10-13-prep-module-design.md`

## Global Constraints

- Node `>=22.18.0`. Tests run `.ts` files natively. Relative imports in `lib/` and `content/` end with `.ts` and do not use the `@/` alias. Components and `app/` files may use `@/`.
- No new npm dependencies.
- No inline `style={{...}}`, no icon packages. Inline SVG is allowed (the shell does it).
- Use the design tokens in `app/globals.css` (`bg-bg-raised`, `text-text-dim`, `text-accent`, `border-border`, …). Text keeps 4.5:1 contrast in both themes.
- Internal links are `/prep/<area>/`, never with the repo name (base-path rule).
- All content is original. Copy no text, wording, or item order from prep.galib.dev. Do not fetch that site again.
- A factual item has `source`: an `https://` link to an official source (ISTQB, MDN, tool docs, vendor docs). No blogs, forums, or AI summaries. Every `mcq` item has a `source`.
- Item `id` format: `<area-slug>-NNN` (3 digits from `001`). Minimum items: 8 for each area, 12 for `mcq-test`.
- Commit messages end with `Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>`. Work on branch `feat/prep-module`.
- The tutorial stays unchanged: 23 pages, parts 1–23, `scripts/route-map.json`, and `check_sources.py` must still print `OK 23 pages checked, 0 skipped`.

## Review Focus

Inputs that the spec implies and no task's happy-path test covers. Each line has a test in the task named in brackets.

1. `localStorage` holds invalid JSON, a non-array, or non-string entries: progress is empty, no crash. [Task 2]
2. `localStorage` throws on read or write (private mode): the page renders and a click still works in memory for the session. [Task 2]
3. Stored ids that no longer exist (an item was removed or renamed): they do not count, so the percent never passes 100. [Task 2]
4. An area with 0 items: percent is 0, no `NaN`, and the page shows an empty state. [Task 2, Task 5]
5. Quiz: a wrong answer does not mark done, picking again after the reveal does not change the result, a hit link `…/mcq-test/#mcq-test-005` opens that question, and an unknown hash opens question 1. [Task 2, Task 5]

## File Structure

| File | Responsibility |
|---|---|
| `lib/prep/types.ts` | Types: `AreaSlug`, `PrepArea`, `QaItem`, `TaskItem`, `McqItem`, `PrepItem` |
| `lib/prep/areas.ts` | The ordered list of 13 areas, `getArea`, `PREP_HOME`, `PREP_ROUTES` |
| `lib/prep/items.ts` | Registers the 13 content files: `ITEMS_BY_AREA`, `ALL_ITEMS`, `itemsOf` |
| `lib/prep/progress.ts` | Pure progress functions |
| `lib/prep/store.ts` | `createProgressStore`: storage-backed store with subscribe |
| `lib/prep/quiz.ts` | `isCorrect`, `startIndex` |
| `lib/prep/ui.ts` | English strings of the module |
| `content/prep/<area>.ts` | The items of one area (13 files) |
| `components/prep/` | `useProgress`, `ProgressSummary`, `AreaCard`, `QaTable`, `TaskTable`, `McqQuiz`, `PrepSidebarList` |
| `components/pages/PrepHome.tsx` | The `/prep/` page body |
| `components/layout/NavList.tsx` | Chooses the tutorial list or the prep list from the path |
| `app/(site)/prep/page.tsx`, `app/(site)/prep/[area]/page.tsx` | The routes |
| `scripts/prep-route-map.json` | Identity map of the 14 prep routes |

---

### Task 1: Data model, areas, and content scaffolding

**Files:**
- Create: `lib/prep/types.ts`, `lib/prep/areas.ts`, `lib/prep/items.ts`, `content/prep/<slug>.ts` ×13, `tests/prep-data.test.ts`

**Interfaces:**
- Produces:
  - Types as in the File Structure table. `QaItem = { kind: "qa"; id; question; template; example; behind: string; source?: string }`. `TaskItem = { kind: "task"; id; title; details: string; source?: string }`. `McqItem = { kind: "mcq"; id; question: string; options: readonly string[]; answer: number; explanation: string; source: string }`. `PrepArea = { slug: AreaSlug; title; description: string; kind: "qa" | "task" | "mcq"; href: string }`.
  - `AREAS: readonly PrepArea[]` in the spec order (spec §3 list), `href = "/prep/<slug>/"`. Kinds as in spec §4. Titles: Interview Preparation, Intern, Junior, Mid-Level, Senior, Leadership, Programming Problems, Practical Tasks, Tools Mastery, Hands-on Automation, HR & Soft Skills, Realistic Scenarios, MCQ Test. Write one original description line for each.
  - `getArea(slug: string): PrepArea | undefined`, `PREP_HOME = "/prep/"`, `PREP_ROUTES: readonly string[]` (`PREP_HOME` then each area `href`).
  - `ITEMS_BY_AREA: Record<AreaSlug, readonly PrepItem[]>`, `ALL_ITEMS: readonly PrepItem[]`, `itemsOf(slug: AreaSlug): readonly PrepItem[]`.
  - Each `content/prep/<slug>.ts` exports `items: readonly PrepItem[]`. In this task each is `[]` (scaffolding, replaced in Tasks 3, 8, 9, 10).

- [ ] **Step 1: Write the failing test `tests/prep-data.test.ts`.** Tests:
  - `area slugs are unique and match content/prep/*.ts` (read the folder with `readdirSync`).
  - `every area href is /prep/<slug>/ and PREP_ROUTES is home plus the hrefs`.
  - `getArea finds an area and rejects unknown slugs`.
  - `item ids are unique, start with the area slug, and match <slug>-NNN`.
  - `each item has the kind of its area`.
  - `each mcq answer index is inside options and has 2 to 5 options`.
  - `each qa item has 4 non-empty text fields and each task item has title and details`.
  - `every source is an https URL, and every mcq item has one`.
- [ ] **Step 2: Run `npm test`.** Expected: FAIL (modules missing).
- [ ] **Step 3: Implement the files.** Use `satisfies` or an explicit `Record<AreaSlug, …>` so a missing area fails the type check.
- [ ] **Step 4: Run `npm test`.** Expected: all pass (the new tests pass on empty arrays).
- [ ] **Step 5: Commit** `feat(prep): add the data model and the 13 areas`.

---

### Task 2: Progress logic, store, and quiz helpers

**Files:**
- Create: `lib/prep/progress.ts`, `lib/prep/store.ts`, `lib/prep/quiz.ts`, `tests/prep-progress.test.ts`

**Interfaces:**
- Consumes: `McqItem` from `lib/prep/types.ts`.
- Produces:
  - `STORAGE_KEY = "prep-progress"`.
  - `parseProgress(raw: string | null): string[]` — a JSON array of strings, without duplicates. Anything else gives `[]`.
  - `serializeProgress(ids: readonly string[]): string`.
  - `toggleDone(done: readonly string[], id: string): string[]` — adds or removes, returns a new array.
  - `countDone(ids: readonly string[], done: readonly string[]): number` — counts the `ids` that are in `done`, each once.
  - `percent(done: number, total: number): number` — integer 0–100, `0` when `total` is 0.
  - `type StorageLike = { getItem(key: string): string | null; setItem(key: string, value: string): void }`.
  - `createProgressStore(storage: StorageLike | null): { subscribe(listener: () => void): () => void; getSnapshot(): readonly string[]; refresh(): void; toggle(id: string): void; markDone(id: string): void }`. `getSnapshot` returns the same array object until the content changes. A `getItem` or `setItem` that throws, or `null` storage, falls back to memory. `refresh` re-reads storage (the hook calls it on the `storage` event).
  - `isCorrect(item: McqItem, choice: number): boolean`.
  - `startIndex(items: readonly { id: string }[], hash: string): number` — the index of the item whose id equals `hash` without `#`, else `0`.

- [ ] **Step 1: Write the failing tests** in `tests/prep-progress.test.ts`:
  - parse: `null`, `""`, `"{"`, `"{}"`, `'["a",1,null,"a"]'` → `[]`, `[]`, `[]`, `[]`, `["a"]`.
  - serialize then parse returns the same ids.
  - `toggleDone` adds, removes, and does not change its input.
  - `countDone(["a","b"], ["b","zzz","b"])` is `1` (stale id `zzz` ignored).
  - `percent(0,0)` is `0`, `percent(1,3)` is `33`, `percent(5,3)` is `100`.
  - store with a fake storage: `toggle` writes `["x"]` under `prep-progress`; `getSnapshot` keeps its reference without a change; a listener runs once for each change; `refresh` picks up a value that another party wrote; unsubscribe stops calls.
  - store with a storage whose `getItem` and `setItem` throw: `toggle("x")` still gives snapshot `["x"]`. Same for `null` storage.
  - `isCorrect` true for the answer index, false for others.
  - `startIndex` for `"#b"` is `1`, for `"#nope"` and `""` is `0`.
- [ ] **Step 2: Run `npm test`.** Expected: FAIL.
- [ ] **Step 3: Implement the three files.** Plain TS, no React, no `window` access.
- [ ] **Step 4: Run `npm test`.** Expected: PASS.
- [ ] **Step 5: Commit** `feat(prep): add the progress, store and quiz logic`.

---

### Task 3: Pilot content — one area of each kind

Write the first content for `interview-prep` (`task`, 8 items), `intern` (`qa`, 8 items), and `mcq-test` (`mcq`, 12 items). This gives Tasks 4–6 real data of all 3 kinds.

**Files:**
- Modify: `content/prep/interview-prep.ts`, `content/prep/intern.ts`, `content/prep/mcq-test.ts`
- Create: `docs/superpowers/research/prep-interview-prep.md`, `…/prep-intern.md`, `…/prep-mcq-test.md` and their `.factcheck.md` files

**Interfaces:**
- Consumes: the item types from Task 1.

Topics (one item each, in this order):

| Area | Items |
|---|---|
| `interview-prep` | Research the product; Read the job post and the tech stack; Prepare a 2-minute introduction; Prepare 3 STAR stories; Prepare to explain a bug you found; Practise a live test-design exercise; Prepare questions for the interviewer; Follow up after the interview |
| `intern` | What testing is and why it matters; Verification vs validation; Severity vs priority; Test case vs test scenario; The bug life cycle; Black-box vs white-box; Smoke vs sanity testing; What a good bug report contains |
| `mcq-test` | The 7 testing principles; Test levels; Equivalence partitioning; Boundary values for a given range; Severity vs priority; Regression testing; Exit criteria; Common HTTP status codes; The test pyramid; Smoke test; Defect life cycle; Verification vs validation |

- [ ] **Step 1: Write the research notes first.** For each area: sources `S1…` and a claims table with a quote for each factual claim (format of the existing notes in `docs/superpowers/research/`). Sources: ISTQB glossary and syllabus, MDN for HTTP codes.
- [ ] **Step 2: Write the three content files.** Original wording. `qa` items: `question`, `template` (a fill-in answer skeleton), `example` (a sample answer), `behind` (what the interviewer checks). Use `\n` for line breaks. Every `mcq` item has `source` and an `explanation`; vary the position of the right answer.
- [ ] **Step 3: Run `npm test`.** Expected: PASS (the structural tests from Task 1 now check real items).
- [ ] **Step 4: Fact-check with a fresh agent.** Give the agent the 3 files and the research notes, not your conclusions. It writes `docs/superpowers/research/prep-<area>.factcheck.md` for each area: one row for each factual claim (item id, source URL, PASS/FAIL, quote) and the last line `Open FAILs: N`. Fix each FAIL and run the agent again until all three end with `Open FAILs: 0`.
- [ ] **Step 5: Commit** `docs(prep): add the pilot content (interview-prep, intern, mcq-test)`.

---

### Task 4: Progress hook, summary, area card, and the `/prep/` page

**Files:**
- Create: `lib/prep/ui.ts`, `components/prep/useProgress.ts`, `components/prep/ProgressSummary.tsx`, `components/prep/AreaCard.tsx`, `components/pages/PrepHome.tsx`, `app/(site)/prep/page.tsx`

**Interfaces:**
- Consumes: `createProgressStore`, `STORAGE_KEY`, `countDone`, `percent`; `AREAS`, `itemsOf`.
- Produces:
  - `useProgress(): { done: readonly string[]; toggle(id: string): void; markDone(id: string): void }` (client). One lazy store on `window.localStorage` (`null` if access throws). `useSyncExternalStore` with `getServerSnapshot` returning one constant empty array. A `storage` event calls `store.refresh()`.
  - `ProgressSummary({ ids }: { ids: readonly string[] })`: `role="progressbar"` with `aria-valuenow/min/max`, the text `Done N · Remaining M`, and the percent.
  - `AreaCard({ area, ids }: { area: PrepArea; ids: readonly string[] })`: a link card with the title, description, and `N / M done`.
  - `PrepHome()` (server): eyebrow `INTERVIEW PREP · 13 AREAS · N ITEMS` (counts from data), `h1`, a lede, a `note` note that progress stays in this browser only, the overall `ProgressSummary`, and a grid of `AreaCard`.
  - Strings in `lib/prep/ui.ts`.

- [ ] **Step 1: Implement the files.** Mark `useProgress`, `ProgressSummary`, `AreaCard` with `"use client"`. Page metadata: title `Interview Prep`, an original description.
- [ ] **Step 2: Run `npm run build`.** Expected: PASS, and `out/prep/index.html` exists.
- [ ] **Step 3: Run `npm run dev` and open `http://localhost:3000/prep/`.** Expected: 13 cards, the bar at 0 %, no hydration warning in the console.
- [ ] **Step 4: Commit** `feat(prep): add the module home page and the progress hook`.

---

### Task 5: Area page, tables, and quiz

**Files:**
- Create: `components/prep/QaTable.tsx`, `components/prep/TaskTable.tsx`, `components/prep/McqQuiz.tsx`, `app/(site)/prep/[area]/page.tsx`

**Interfaces:**
- Consumes: `useProgress`, `ProgressSummary`, `isCorrect`, `startIndex`, `getArea`, `AREAS`, `itemsOf`.
- Produces:
  - `QaTable({ items }: { items: readonly QaItem[] })`, `TaskTable({ items }: { items: readonly TaskItem[] })`: each row has `id={item.id}`, a checkbox with `aria-label` "Mark done: …", and the optional source link. Below `md`, each row is a stacked card. QA columns: Question, Answer template, Example answer, Behind the question. Task columns: Task, Details.
  - `McqQuiz({ items }: { items: readonly McqItem[] })`: shows one question; `startIndex(items, location.hash)` sets the first question in an effect after mount. The options are buttons in a `role="radiogroup"`. After a pick, the quiz locks the options, marks the right and the wrong option (not with color alone), shows the explanation and source, and calls `markDone` only for a right answer. Buttons: Previous, Next, and "Question N of M". It shows `done` state for an already done item.
  - The route `/prep/[area]/`: `dynamicParams = false`, `generateStaticParams` from `AREAS`, `generateMetadata`, `notFound()` for an unknown slug. The page shows the eyebrow `AREA NN · INTERVIEW PREP`, `h1`, the description, `ProgressSummary` for the area, the right component for the area `kind`, and links to the previous area, the next area, and `/prep/`. An area with 0 items shows an empty-state sentence.

- [ ] **Step 1: Implement the components and the route.** Write each as a client component where it needs state. Keep the page itself a server component.
- [ ] **Step 2: Run `npm run build`.** Expected: PASS, `out/prep/<slug>/index.html` for all 13 slugs.
- [ ] **Step 3: Check in `npm run dev`:** `/prep/intern/` (tick a row, reload, the tick stays), `/prep/interview-prep/`, `/prep/mcq-test/` (right and wrong answer; `#mcq-test-005` opens question 5), `/prep/senior/` (empty state), `/prep/nope/` (404). Check at 375 px width and in the light theme.
- [ ] **Step 4: Commit** `feat(prep): add the area pages, the tables and the quiz`.

---

### Task 6: Shell integration

**Files:**
- Create: `components/layout/NavList.tsx`, `components/prep/PrepSidebarList.tsx`
- Modify: `components/layout/Sidebar.tsx`, `components/layout/MobileNav.tsx`, `components/layout/SiteHeader.tsx`

**Interfaces:**
- Consumes: `SidebarList`, `withTrailingSlash`, `AREAS`, `itemsOf`, `useProgress`, `countDone`.
- Produces:
  - `NavList({ activePath, onNavigate }: { activePath: string | null; onNavigate?: () => void })`: shows `PrepSidebarList` when `activePath` starts with `/prep/`, else `SidebarList`. Above the list it shows one cross-link: "Interview Prep" on tutorial pages, "Tutorial" on prep pages.
  - `PrepSidebarList({ activePath, onNavigate })` (client): the 13 areas as links, each with `N/M` done, `aria-current="page"` on the active one. It uses the same classes as `SidebarList`.
  - `Sidebar` and `MobileNav` render `NavList` where they rendered `SidebarList`. The Suspense fallback in `SiteShell` stays `SidebarList` with `activePath={null}`.
  - `SiteHeader` gets a link "Interview Prep" to `/prep/`, shown from `sm` up (`hidden sm:inline`), before the search slot.

- [ ] **Step 1: Implement the changes.**
- [ ] **Step 2: Run `npm run build` and `npm test`.** Expected: PASS.
- [ ] **Step 3: Check in `npm run dev`:** the sidebar switches on `/prep/…` and back on `/`; the mobile drawer shows the right list and closes on navigation; the active area is marked; Tab order and Escape still work in the drawer.
- [ ] **Step 4: Commit** `feat(prep): show the prep areas in the sidebar and the header`.

---

### Task 7: Search, sitemap, PWA, route map, and checks

**Files:**
- Create: `scripts/prep-route-map.json`
- Modify: `lib/search.ts`, `components/navigation/SearchPalette.tsx`, `app/search-index.json/route.ts`, `app/sitemap.ts`, `lib/pwa.ts`, `lib/ui.ts`, `scripts/check_routes.py`, `scripts/test_checks.py`, `tests/search.test.ts`, `tests/pwa.test.ts`, `tests/ui.test.ts`, `tests/prep-data.test.ts`

**Interfaces:**
- Consumes: `AREAS`, `PREP_ROUTES`, `ALL_ITEMS`.
- Produces:
  - `SearchDoc.part` and `SearchHit.part` become `number | null`. `buildPrepSearchDocs(entries: { area: PrepArea; item: PrepItem }[]): SearchDoc[]`: id and href `/prep/<slug>/#<item.id>`, `part: null`, `group: "prep"`, `page` = area title, `title` = question or task title, `text` = the other text fields (for `mcq`: options and explanation).
  - `precacheUrls` includes `PREP_ROUTES` (with the base path).
  - `check_routes.py`: a function `load_routes() -> list[str]` returns the values of both route maps; `main` checks them.
  - `searchType` in `lib/ui.ts` still contains `the ${PAGES.length} parts` and adds the interview prep.

- [ ] **Step 1: Write the failing tests.**
  - `tests/search.test.ts`: `buildPrepSearchDocs gives one doc for each item with a /prep/<area>/#<id> href`, `prep doc ids are unique and do not clash with tutorial ids`, `prep docs are JSON-safe`, `a prep question is found by runSearch`. Adjust the existing "every doc has its page fields" test only to allow `part: null` for `group: "prep"`.
  - `tests/pwa.test.ts`: `the precache list has every prep route`, with and without a base path.
  - `tests/ui.test.ts`: keep the existing assertion; add one that `searchType` mentions the interview prep.
  - `tests/prep-data.test.ts`: `prep-route-map.json is the identity map of PREP_ROUTES`.
  - `scripts/test_checks.py`: `PrepRouteMapTest`: 14 entries, all end with `/`, count equals `len(list(content/prep/*.ts)) + 1`; and `load_routes` returns tutorial and prep routes.
- [ ] **Step 2: Run `npm test` and `python3 -m unittest scripts/test_checks.py`.** Expected: FAIL.
- [ ] **Step 3: Implement.** In `SearchPalette`, show `hit.part === null ? "PREP · " + hit.page : partLabel(hit.part)` in the label line (keep the existing intro-hit rule for tutorial hits). The route handler concatenates the tutorial docs and the prep docs.
- [ ] **Step 4: Run both test commands.** Expected: PASS.
- [ ] **Step 5: Run `npm run build`, then `python3 scripts/check_routes.py out`, `python3 scripts/check_links.py out`, `python3 scripts/check_sources.py out`.** Expected: no output from the first two (exit 0), and `OK 23 pages checked, 0 skipped` from the last.
- [ ] **Step 6: Commit** `feat(prep): add prep routes to search, sitemap, PWA and the checks`.

---

### Task 8: Content — soft-skill and level areas

**Files:** Modify `content/prep/{junior,mid-level,senior,leadership,hr-soft-skills}.ts`. Create the research notes and fact-check reports for each.

Topics (8 `qa` items each, in this order):

| Area | Items |
|---|---|
| `junior` | Equivalence partitioning and boundary values; Regression vs retesting; Test plan vs test strategy; SDLC vs STLC; Exploratory testing; API testing basics and status codes; A SQL query that finds duplicate rows; How you decide to stop testing |
| `mid-level` | Risk-based testing; The test pyramid; Causes of flaky tests; The role of tests in CI/CD; Shift-left testing; Test data management; Contract testing; Defect leakage and other metrics |
| `senior` | A test strategy for a new product; The return on investment of automation; Choosing a framework; Mentoring a junior tester; Planning non-functional tests; Release gate criteria; Quality in microservices; Influence without authority |
| `leadership` | Building a QA team; Hiring testers; A QA roadmap and goals; Quality vs speed conflicts; Reporting quality to executives; Tool selection and budget; Handling an underperformer; QA metrics that mislead |
| `hr-soft-skills` | Tell me about yourself; Strengths and weaknesses; A conflict with a developer; A bug that reached production; Working under a deadline; Why you want to leave; Salary expectations; Where you see yourself in 5 years |

- [ ] **Step 1: Write the research notes first** (sources and claims table), for each area.
- [ ] **Step 2: Write the five content files.** Same rules as Task 3. Soft-skill answers are advice and need no `source`. Add a `source` for any factual claim (for example metric definitions, ISTQB terms, status codes).
- [ ] **Step 3: Run `npm test`.** Expected: PASS.
- [ ] **Step 4: Fact-check with a fresh agent** (as in Task 3, Step 4) until each report ends with `Open FAILs: 0`.
- [ ] **Step 5: Commit** `docs(prep): add the content for five areas`.

---

### Task 9: Content — technical areas

**Files:** Modify `content/prep/{programming-problems,tools-mastery}.ts`. Create the research notes and fact-check reports.

Topics (8 `qa` items each):

| Area | Items |
|---|---|
| `programming-problems` | Reverse a string; Check a palindrome; Find duplicates in an array; FizzBuzz; Count the characters in a string; Check an anagram; Find the second largest number; Check valid parentheses |
| `tools-mastery` | A Git workflow for testers; A Jira bug workflow; Postman collections and environments; Selenium vs Playwright; k6 or JMeter basics; Docker for test environments; CI tools (Jenkins and GitHub Actions); The browser DevTools network tab |

For `programming-problems`, `template` is the approach, `example` is a short solution in one language (state the language in the text), `behind` is what the interviewer checks (edge cases, complexity). Run each solution in Node or Python and check it before you write it down.

- [ ] **Step 1: Write the research notes first.** Sources for `tools-mastery`: the official docs of each tool.
- [ ] **Step 2: Write the two content files.**
- [ ] **Step 3: Run each code solution** and confirm that it gives the stated result. Run `npm test`. Expected: PASS.
- [ ] **Step 4: Fact-check with a fresh agent** until each report ends with `Open FAILs: 0`.
- [ ] **Step 5: Commit** `docs(prep): add the programming and tools content`.

---

### Task 10: Content — practical areas

**Files:** Modify `content/prep/{practical-tasks,hands-on-automation,realistic-scenarios}.ts`. Create the research notes and fact-check reports.

Topics (8 items each; `task` kind for the first two, `qa` for the last):

| Area | Items |
|---|---|
| `practical-tasks` | Write test cases for a login page; Find bugs in a sign-up form; Write a bug report for a given defect; Design tests for a cart discount; Write SQL checks for a data fix; Test an API with curl or Postman; Write a one-page test plan; Review a requirement for gaps |
| `hands-on-automation` | Automate a login with Playwright; Build a page object; Handle waits without sleeps; Write a data-driven test; Automate an API test; Run the tests in CI; Keep a screenshot and a trace on failure; Run tests in parallel |
| `realistic-scenarios` | A page is slow only on Mondays; A developer says "not a bug"; A release is tomorrow and 20 bugs are open; The requirements are missing; Only you can reproduce a bug; A production incident in your area; A flaky test blocks the pipeline; A third-party API is down during testing |

- [ ] **Step 1: Write the research notes first.** Sources for `hands-on-automation`: `playwright.dev` docs. Check every Playwright API name and flag against the docs.
- [ ] **Step 2: Write the three content files.**
- [ ] **Step 3: Run `npm test`.** Expected: PASS.
- [ ] **Step 4: Fact-check with a fresh agent** until each report ends with `Open FAILs: 0`.
- [ ] **Step 5: Commit** `docs(prep): add the practical content`.

---

### Task 11: Completeness gate, docs, and final verification

**Files:**
- Modify: `tests/prep-data.test.ts`, `CLAUDE.md`, `README.md`

- [ ] **Step 1: Add the failing gate test** `every area has at least 8 items, and mcq-test has at least 12`, and `every area has a research note and a fact-check report that ends with "Open FAILs: 0"` (read `docs/superpowers/research/prep-<slug>.factcheck.md`). Run `npm test`. Expected: PASS if Tasks 3, 8, 9, 10 are complete; otherwise FAIL — finish the content first.
- [ ] **Step 2: Update `CLAUDE.md`:** the structure table (the new paths), the route count (24 → 38), the checks table (`prep-route-map.json`, `check_routes.py` reads both maps), a short "Interview Prep module" section (data format, content rules, how to add an area or an item). Update `README.md` with the module and the counts.
- [ ] **Step 3: Run the full verification.**
  - `npm test` — all pass.
  - `python3 -m unittest scripts/test_checks.py` — OK.
  - `npm run build` — PASS, 38 routes.
  - `python3 scripts/check_routes.py out`, `check_links.py out`, `check_outline.py out` — exit 0. `python3 scripts/check_sources.py out` — `OK 23 pages checked, 0 skipped`.
  - Base-path build as in `CLAUDE.md`: `PAGES_BASE_PATH=/learn-software-testing-with-ai npm run build`; serve it; open `/learn-software-testing-with-ai/prep/` and one area. Expected: links and search hits keep the base path.
- [ ] **Step 4: Run the browser test.** Serve `out/` (`python3 -m http.server 8000 -d out`). Drive Chrome with the Playwright package of `/home/nuruddin-kawsar/Documents/hris-web-automation/node_modules` from a script in the scratchpad directory (do not add it to this repo). Check: tick a row, reload, the tick stays; a second tab updates after a tick (the `storage` event); the quiz wrong and right paths; a search hit opens its item; corrupt `prep-progress` in `localStorage` gives an empty state and no console error; 375 px width; both themes; offline reload after the service worker installs (production build). Save screenshots in the scratchpad directory and report any failure.
- [ ] **Step 5: Commit** `docs(prep): update CLAUDE.md and README for the prep module`.
- [ ] **Step 6: Use superpowers:finishing-a-development-branch** to decide how to integrate the branch.
