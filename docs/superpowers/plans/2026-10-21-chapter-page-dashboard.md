# Chapter Page and Dashboard Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Give the 81 content pages the 3-column chapter layout of the reference, with a reading-time pill and Bookmark / Mark as read buttons, and add a `/dashboard/` page with progress, Export, and Reset.

**Architecture:** Pure logic lives in `lib/` (`reading-time.ts`, `reading-state.ts`) with relative `.ts` imports, so `node --test` tests it. Browser state reuses the existing tested store (`lib/prep/store.ts`, `components/prep/useProgress.ts`). One shared `ChapterLayout` replaces the column markup of the 5 page templates. The pills and buttons render through the existing `PageMeta` MDX slot, so they sit under the title and lede with no MDX change.

**Tech Stack:** Next.js 16 App Router (static export), React 19, Tailwind CSS 4, `node --test`.

**Spec:** `docs/superpowers/specs/2026-10-21-chapter-page-dashboard-design.md`

## Global Constraints

- 81 content pages. `check_sources.py out` must print `OK 81 pages checked, 0 skipped`.
- New `localStorage` keys: `page-read`, `page-bookmarks`, `last-page`. Ids are routes with a trailing slash.
- Breakpoints: the left list from 820 px, "On this page" from 1100 px. Columns 240 px | text | 280 px, gap 48 px, max 1400 px. The text column stays at most 720 px.
- Reading time: words of the Technical text (Fundamentals: `istqb` blocks) / 200, rounded up, at least 1.
- Blocked storage: empty values, no thrown error, server HTML renders the buttons off.
- 88 routes after the Dashboard.
- No change to MDX content or to the topic checklists.
- `lib/*.ts` files that tests import use relative `.ts` imports.
- Commit messages end with `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`.

## Review Focus

1. A page opened at 820 px to 1099 px: the left list and the text fit with no horizontal scroll, and the "Contents" button is hidden only when the list shows. Task 3 tests the class pairing; Task 5 checks 900 px in the browser.
2. Two tabs open: a Bookmark click in one tab shows in the Dashboard of the other. The existing `createSubscribe` handles `storage` events; Task 2 uses it for all three keys, including `last-page`.
3. A `last-page` value that is not a known route (an old route, or a hand-edited value): the Dashboard links to the first tutorial page. Task 4 tests `continueTarget`.
4. Reset in one tab while the Dashboard is open in another: the second Dashboard shows zeros. Covered by the same `storage` event path; Task 5 checks it in the browser.
5. A Fundamentals chapter read in the "notes" version: the reading time still counts only the ISTQB text, so the pill stays the same when the version changes. Task 1 tests it.

---

### Task 1: Reading time

**Files:**
- Create: `lib/reading-time.ts`, `tests/reading-time.test.ts`

**Interfaces:**
- Produces: `readingMinutes(source: string): number` and `contentWords(source: string): number`.
- Produces: `getReadingMinutes(dir: string, slug: string): number` reads `content/<dir>/<slug>.mdx` with `readFileSync(join(process.cwd(), ...))` (as `getOutline` in `lib/outline.ts` does).

- [ ] **Step 1: Write the failing tests**

```ts
test("plain prose counts every word", () => {
  assert.equal(contentWords("# Title\n\nOne two three four."), 5); // "Title" + 4
});
test("code fences, inline code, export lines, and JSX tags are not words", () => {
  const src = "export const page = { a: 1 }\n\nText here.\n\n```bash\nls -la /etc\n```\n\n<Cite n={1} /> <PageMeta />";
  assert.equal(contentWords(src), 2);
});
test("only the Technical panel of a Voices block counts", () => {
  const src = "<Voices>\n<Technical>\n\nalpha beta\n\n</Technical>\n<Layman>\n\ngamma delta epsilon\n\n</Layman>\n<Bangla>\n\nএক দুই\n\n</Bangla>\n</Voices>";
  assert.equal(contentWords(src), 2);
});
test("in a Fundamentals chapter only the istqb blocks count", () => {
  const src = '<Version of="notes">\n\nnotes words here now\n\n</Version>\n<Version of="istqb">\n\nistqb words\n\n</Version>';
  assert.equal(contentWords(src), 2);
});
test("readingMinutes is words / 200 rounded up, at least 1", () => {
  assert.equal(readingMinutes(""), 1);
  assert.equal(readingMinutes("w ".repeat(200)), 1);
  assert.equal(readingMinutes("w ".repeat(201)), 2);
});
```

Task 2 adds the test that every content page has a reading time.

- [ ] **Step 2: Run** `node --test tests/reading-time.test.ts`. Expected: FAIL, module not found.
- [ ] **Step 3: Implement.** Remove, in order: the lines that start with `export `; fenced code blocks; `<Layman>…</Layman>` and `<Bangla>…</Bangla>` bodies; `<Version of="notes">…</Version>` bodies; inline code spans; all remaining JSX/HTML tags; Markdown punctuation (`#`, `*`, `_`, `|`, `>`, `[`, `]`, `(url)` parts of links). Count `\S+` tokens that contain a letter or digit (`/[\p{L}\p{N}]/u`).
- [ ] **Step 4: Run** the test. Expected: PASS. Run `npm test`. Expected: all pass.
- [ ] **Step 5: Commit** `feat: reading time of a content page`.

### Task 2: Reading state and the store `clear`

**Files:**
- Create: `lib/reading-state.ts`, `tests/reading-state.test.ts`
- Create: `components/reading/useReadingState.ts`
- Modify: `lib/prep/store.ts` (`createProgressStore` gets `clear()`), `components/prep/useProgress.ts` (expose `clear`), `tests/progress.test.ts`
- Modify: `tests/reading-time.test.ts` (the per-page test)

**Interfaces:**
- Produces in `lib/reading-state.ts`: `PAGE_READ_KEY = "page-read"`, `BOOKMARKS_KEY = "page-bookmarks"`, `LAST_PAGE_KEY = "last-page"`, `PROGRESS_KEYS` (the 6 keys of spec 5.1, in that order), `type ContentPage = { href: string; title: string; module: "tutorial" | ModuleId; dir: string; slug: string }`, `CONTENT_PAGES: readonly ContentPage[]` (tutorial pages from `PAGES` with `dir = group`; then each `MODULES` page with `dir` = the module id and `slug` = the last path segment), `exportProgress(storage: { getItem(key: string): string | null }, now: Date): { version: 1; exported: string; data: Record<string, string | null> }`.
- Produces in `lib/prep/store.ts`: `createProgressStore(...).clear(): void` (writes `[]`). `createUseProgress` returns `{ done, toggle, markDone, clear }`.
- Produces in `components/reading/useReadingState.ts`: `usePageRead = createUseProgress(PAGE_READ_KEY)`, `useBookmarks = createUseProgress(BOOKMARKS_KEY)`, `useLastPage(): { last: string | null; setLast(route: string): void; clear(): void }` built on `createStorageStore<string | null>` and `createSubscribe` (parse: the raw string or `null`; serialize: the string or `""`; an empty string parses to `null`).

- [ ] **Step 1: Write the failing tests.** `tests/reading-state.test.ts`: `CONTENT_PAGES.length === 81`; routes unique; every route in `sitemapPaths()`; module counts `{ tutorial: 23, linux: 12, fundamentals: 11, "system-design": 15, architecture: 20 }`; each `dir/slug` file exists in `content/`; `PROGRESS_KEYS` deep-equals `["page-read", "page-bookmarks", "last-page", "linux-progress", "fundamentals-progress", "architecture-progress"]`; `exportProgress` with a fake storage that has only `page-read` returns `version: 1`, `exported: now.toISOString()`, the 6 keys, and `null` for the 5 missing ones. `tests/progress.test.ts`: `clear()` empties the snapshot and writes `"[]"` (check the serialized form in that file first). `tests/reading-time.test.ts`: every `CONTENT_PAGES` entry has `getReadingMinutes(dir, slug) >= 1`.
- [ ] **Step 2: Run** `npm test`. Expected: FAIL on the new tests.
- [ ] **Step 3: Implement** `lib/reading-state.ts`, `clear()`, and the hooks.
- [ ] **Step 4: Run** `npm test`. Expected: all pass.
- [ ] **Step 5: Commit** `feat: reading state: read, bookmarks, last page, export`.

### Task 3: Chapter layout, pills, and buttons

**Files:**
- Create: `components/content/ChapterLayout.tsx`, `components/content/ChapterTools.tsx`, `tests/chapter-layout.test.ts`
- Modify: the 5 templates: `app/(site)/[group]/[page]/page.tsx`, `app/(site)/linux/[stage]/page.tsx`, `app/(site)/fundamentals/[chapter]/page.tsx`, `app/(site)/system-design/[topic]/page.tsx`, `app/(site)/architecture/[topic]/page.tsx`
- Modify: `components/layout/ContentsButton.tsx` (hide from 820 px), `lib/ui.ts` (strings), `app/globals.css` (breakpoints `chapter: 51.25rem`, `toc: 68.75rem` in `@theme inline`)

**Interfaces:**
- Consumes: `usePageRead`, `useBookmarks`, `useLastPage` (Task 2), `getReadingMinutes` (Task 1), `NavList` and `scrollActiveIntoView`.
- Produces: `ChapterLayout({ children, outline }: { children: ReactNode; outline: OutlineItem[] })`: a client component (it needs `usePathname` for `NavList`; wrap the list in `Suspense` with `<SidebarList activePath={null} />` as the fallback, as the old shell did). Grid classes: `chapter:grid chapter:grid-cols-[240px_minmax(0,1fr)] toc:grid-cols-[240px_minmax(0,1fr)_280px] gap-12 max-w-[1400px] mx-auto px-4 sm:px-6`. Left `aside`: `hidden chapter:block sticky top-20 h-[calc(100vh-6rem)] overflow-y-auto`. Right `aside`: `hidden toc:block` with `SectionNav`. The middle column: `min-w-0 max-w-[720px] w-full mx-auto py-7 sm:py-10`.
- Produces: `ChapterTools({ route, minutes }: { route: string; minutes: number })` (client): the pill `📖 {minutes} min read`, then the Bookmark and Mark as read toggles (`aria-pressed`, `.btn .btn-outline .btn-sm`, pressed state `border-accent text-accent`). On mount it calls `setLast(route)`.
- Produces: strings in `lib/ui.ts`: `readingTime = (n: number) => \`${n} min read\``, `bookmark = "Bookmark"`, `bookmarked = "Bookmarked"`, `markRead = "Mark as read"`, `markedRead = "Read"`, `chapterNav = "Pages of this section"`.

- [ ] **Step 1: Write the failing tests** `tests/chapter-layout.test.ts` (source tests, as `tests/header-nav.test.ts` does): `app/globals.css` has `--breakpoint-chapter: 51.25rem` and `--breakpoint-toc: 68.75rem`; `ChapterLayout.tsx` contains `chapter:block` and `toc:block`; `ContentsButton.tsx` contains `chapter:hidden`; each of the 5 templates imports `ChapterLayout` and `ChapterTools`, contains `<ChapterLayout`, and no longer contains `xl:grid-cols-[minmax(0,680px)_220px]`.
- [ ] **Step 2: Run** `node --test tests/chapter-layout.test.ts`. Expected: FAIL.
- [ ] **Step 3: Implement** the breakpoints, `ChapterLayout`, `ChapterTools`, and the strings.
- [ ] **Step 4: Change the 5 templates.** Replace the `<div className="mx-auto w-full max-w-[728px] …">` wrapper and its `aside` with `<ChapterLayout outline={outline}>…</ChapterLayout>`. Keep `ReadingProgress` and `BackToTop` outside. In each `PageMeta` slot, render the existing `MetaLine` and then `<ChapterTools route={<the page route>} minutes={getReadingMinutes(<dir>, <slug>)} />`. The route is `page.href` (tutorial), `stage.href`, `chapter.href`, `entry.href`, `topic.href`; check each template's variable name.
- [ ] **Step 5: Run** `npm test`, `npm run build`, `python3 scripts/check_outline.py out`, `python3 scripts/check_sources.py out`. Expected: pass; `OK 81 pages checked, 0 skipped`.
- [ ] **Step 6: Browser check** at 375, 900, and 1280 px on `/extend/hooks/`, `/linux/<first stage>/`, `/fundamentals/basics/`: no horizontal scroll; the left list shows at 900 and 1280; "On this page" shows at 1280 only; the buttons toggle and stay after a reload.
- [ ] **Step 7: Commit** `feat: chapter layout with a left list, reading time, bookmark, and read buttons`.

### Task 4: Dashboard

**Files:**
- Create: `app/(site)/dashboard/page.tsx`, `components/pages/DashboardPage.tsx`, `lib/dashboard.ts`, `tests/dashboard.test.ts`, `scripts/dashboard-route-map.json`
- Modify: `lib/sitemap.ts`, `lib/pwa.ts`, `lib/header-nav.ts` (a `dashboard` item after `contents`), `scripts/check_routes.py`, `scripts/test_checks.py`, `tests/sitemap.test.ts` (88), `tests/contents.test.ts` (`siteStats().pages` is `sitemapPaths().length`, so it becomes 88), `tests/header-nav.test.ts` (ids end `"contents", "dashboard"`)

**Interfaces:**
- Consumes: `CONTENT_PAGES`, `exportProgress`, `PROGRESS_KEYS` (Task 2), the 5 list hooks with `clear`, `useLastPage`, `MODULES`.
- Produces in `lib/dashboard.ts`: `DASHBOARD_HOME = "/dashboard/"`, `DASHBOARD_ROUTES = [DASHBOARD_HOME]`, `DASHBOARD_UI` (strings: title, lede, export, reset, resetConfirm "Delete all your progress in this browser? This cannot be undone.", the stat labels, continue/start, empty bookmarks hint), `continueTarget(last: string | null): ContentPage` (the page of `last` if it is in `CONTENT_PAGES`, else `CONTENT_PAGES[0]`), `readByModule(read: readonly string[]): { module: ContentPage["module"]; read: number; total: number }[]` (5 rows in `CONTENT_PAGES` order, counting only known routes), `exportFileName(now: Date): string` (`progress-YYYY-MM-DD.json`, local date).
- Produces: `HeaderNavId` gains `"dashboard"`; `HEADER_NAV` gets `{ id: "dashboard", label: DASHBOARD_UI.navLabel, href: DASHBOARD_HOME }`; `activeNavId("/dashboard/") === "dashboard"`.

- [ ] **Step 1: Write the failing tests** `tests/dashboard.test.ts`: `continueTarget(null).href === "/getting-started/setup/"`; `continueTarget("/old/route/")` is the same; `continueTarget("/extend/hooks/").href === "/extend/hooks/"`; `readByModule(["/extend/hooks/", "/linux/x/", "/nope/"])` gives tutorial `read: 1, total: 23` and all totals `[23, 12, 11, 15, 20]`; `exportFileName(new Date(2026, 9, 21))` is `"progress-2026-10-21.json"`; the dashboard route map is the identity map; `/dashboard/` is in `sitemapPaths()` and `precacheUrls("")`. Update the count tests to 88 and the nav ids.
- [ ] **Step 2: Run** `npm test`. Expected: FAIL.
- [ ] **Step 3: Implement** `lib/dashboard.ts`, the sitemap and precache entries, the route map and `check_routes.py` list (update `scripts/test_checks.py` order test), the nav item.
- [ ] **Step 4: Build `DashboardPage`** per spec section 5 with the card style of the home page (`rounded-2xl border border-border bg-bg-raised shadow-sm`). Use the module progress summary components for the Linux, Fundamentals, and Architecture cards, with the same ids as their home pages. Export: `new Blob([JSON.stringify(exportProgress(window.localStorage, new Date()), null, 2)], { type: "application/json" })`, a temporary `<a download={exportFileName(now)}>`, wrapped in `try/catch` (blocked storage: export an all-`null` file using a `{ getItem: () => null }` storage). Reset: `window.confirm(DASHBOARD_UI.resetConfirm)`, then `clear()` on the 5 list hooks and `useLastPage().clear()`.
- [ ] **Step 5: Run** `npm test`, `npm run build`, `python3 -m unittest scripts/test_checks.py`, `python3 scripts/check_routes.py out`. Expected: pass.
- [ ] **Step 6: Commit** `feat: add the dashboard`.

### Task 5: Docs and verification

**Files:**
- Modify: `CLAUDE.md` (Structure rows for the new files; the route table and counts 87 → 88; Navigation section: the left list, the breakpoints, the Dashboard item; PWA count; Checks: the new tests and `dashboard-route-map.json`; also fix the deferred stale "sidebar" comments of the last review in `components/layout/SidebarList.tsx`, `NavList.tsx`, and the module `*SidebarList.tsx` files, because the list is a sidebar again)
- Modify: `lib/pwa.ts` and other comments that say 87

- [ ] **Step 1: Update the docs.** `grep -rn "87" CLAUDE.md lib` and fix each route count.
- [ ] **Step 2: Run** `npm test`, `python3 -m unittest scripts/test_checks.py`, `python3 -m unittest scripts/test_linux_scripts.py`, `npm run build`, then `check_routes.py`, `check_links.py`, `check_outline.py`, `check_sources.py` on `out`. Expected: all pass; `OK 81 pages checked, 0 skipped`.
- [ ] **Step 3: Base-path build:** `PAGES_BASE_PATH=/ai-testing-guide npm run build`, serve it under `/ai-testing-guide/`, and check `/dashboard/` and one content page: links work, the left list works.
- [ ] **Step 4: Browser check** (Review Focus 1, 2, 4): 375, 900, 1280 px in both themes on `/dashboard/` and 2 content pages; two tabs: bookmark in one, the Dashboard in the other updates; Reset in one, the other shows zeros; blocked storage: the Dashboard shows zeros and Export downloads an all-`null` file.
- [ ] **Step 5: Commit** `docs: describe the chapter layout and the dashboard`.
