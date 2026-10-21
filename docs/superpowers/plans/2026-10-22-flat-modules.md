# Flat Modules Framework Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Move the Architecture and System Design modules onto one shared "flat module" framework, with no visible change.

**Architecture:** `lib/modules/flat.ts` turns a module definition (entries, UI strings, optional progress) into a module object. `lib/modules/registry.ts` lists the flat modules. Shared components in `components/modules/` render the home, the topic page, and the sidebar from a module object. The site-wide consumers loop over the registry.

**Tech Stack:** Next.js 16 (App Router, static export), React 19, TypeScript, `node --test`.

**Spec:** `docs/superpowers/specs/2026-10-22-flat-modules-design.md`

## Global Constraints

- The HTML of the 88 routes is the same before and after, apart from build hashes (spec §6). The compare script of Task 0 decides this.
- The localStorage keys do not change: `architecture-progress`. System Design has no progress.
- The order of `PROGRESS_KEYS`, `MODULES`, the sitemap, and the precache does not change.
- `FLAT_MODULES = [SYSTEM_DESIGN, ARCHITECTURE]`, in this order.
- Files in `lib/` import each other with relative `.ts` paths (`./flat.ts`), so `node --test` loads them. Files in `components/` and `app/` use `@/`.
- Each MDX `import()` stays in its route file with a literal folder name.
- Linux, Fundamentals, the tutorial pages, and the Python check scripts do not change.
- The visible text of the UI strings does not change. Only the key names change (spec §2 table).
- Each task ends with `npm test` passing and one commit. Commit messages end with `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`.

## Review Focus

1. A reader with saved Architecture progress opens the site: the home, the sidebar ✓ marks, the contents page, and the dashboard show the same progress as before. (Task 3 test: `PROGRESS_KEYS` equality; Task 4 browser check.)
2. Prev/next at the edges: topic 1 has no previous link, `observability` → `practice` is next, and `practice` has no next link. (Task 1 test.)
3. A `link` entry never becomes a route, a search doc, a content page, or a static param. (Task 1 test on `routes` and `pages`; Task 3 test on `CONTENT_PAGES` count.)
4. An unknown slug gets the 404 page (`dynamicParams = false`, `get` returns `undefined`). (Task 1 test.)
5. The section ids `topics-heading` and `cases-heading`, and the System Design markup without progress, stay the same. (Task 0 compare after Tasks 2 and 3.)

---

### Task 0: Branch, baseline build, and compare script

**Files:**
- Create: `.baseline/compare.py` (ignored by `.gitignore`, not committed)

- [ ] **Step 1: Create the branch**

Run: `git switch -c refactor/flat-modules docs/flat-modules-spec`
Expected: a new branch that has the spec and this plan.

- [ ] **Step 2: Build the baseline**

Run: `npm run build && rm -rf .baseline/out && mkdir -p .baseline && cp -r out .baseline/out`
Expected: the build passes. `.baseline/out/architecture/caching/index.html` exists.

- [ ] **Step 3: Write `.baseline/compare.py`**

Usage: `python3 -I .baseline/compare.py .baseline/out out`. For each `index.html` under the first folder, read the same path under the second. Normalize both: remove every `<script>…</script>` element, remove `<link …/_next/…>` elements, and replace `/_next/static/[^"' )]+` with `/_next/static/X`. Print `DIFF <path>` and the first 3 differing lines (`difflib.unified_diff`, `n=0`). Print `MISSING <path>` for a page that the second folder does not have. At the end, print `OK <n> pages, 0 differences` or `FAIL <k> differences`, and exit 1 on a difference.

- [ ] **Step 4: Check the script against itself**

Run: `python3 -I .baseline/compare.py .baseline/out .baseline/out`
Expected: `OK 88 pages, 0 differences` (the 404 page counts if it is an `index.html`; accept the real count and use it from now on).

No commit (the files are ignored).

---

### Task 1: The data model, the registry, and the 2 module definitions

**Files:**
- Create: `lib/modules/flat.ts`, `lib/modules/registry.ts`, `tests/flat-module.test.ts`
- Modify: `lib/architecture/topics.ts`, `lib/system-design/cases.ts`

**Interfaces:**
- Produces, in `lib/modules/flat.ts`:

```ts
export type FlatKind = "topic" | "practice" | "link";
export type FlatEntry<S extends string = string> = {
  slug: S; title: string; description: string; kind: FlatKind;
  href?: string; // required for "link", ignored otherwise
};
export type FlatItem<S extends string = string> = FlatEntry<S> & { number: number; href: string };
export type FlatModuleUI = {
  siteTitle: string; description: string; eyebrow: (count: number) => string;
  heading: string; lede: string; sourceNote: string;
  itemsHeading: string; itemsHeadingId: string;
  itemEyebrow: (n: number) => string; itemNav: string; allItems: string;
  previousItem: string; nextItem: string;
  sidebarNav: string; sidebarItemLabel: (n: number) => string; headerLink: string; crossTo: string;
  // Only with progress:
  overallLabel?: string; summaryText?: (done: number, total: number) => string; percentText?: (v: number) => string;
  markDone?: string; markedDone?: string; sidebarDone?: string;
  // Only with a practice entry:
  practiceEyebrow?: string; sidebarPracticeLabel?: string;
  practiceSummaryText?: (done: number, total: number) => string; practiceLabel?: string;
};
export type FlatModuleDef<I extends string = string, S extends string = string> = {
  id: I; label: string; searchGroup: string;
  entries: readonly FlatEntry<S>[];
  progress?: { storageKey: string; extraIds?: readonly string[] };
  ui: FlatModuleUI;
};
export type FlatModule<I extends string = string, S extends string = string> = FlatModuleDef<I, S> & {
  home: string;                         // `/${id}/`
  items: readonly FlatItem<S>[];        // all entries, numbered from 1
  pages: readonly FlatItem<S>[];        // items that are not "link"
  routes: readonly string[];            // [home, ...pages.map(href)]
  lessonIds: readonly S[];              // slugs of "topic" items; [] without progress
  get(slug: string): FlatItem<S> | undefined;          // pages only
  neighbours(slug: string): { previous?: FlatItem<S>; next?: FlatItem<S> }; // over pages
};
export function defineFlatModule<I extends string, S extends string>(def: FlatModuleDef<I, S>): FlatModule<I, S>;
```

- Produces, in `lib/modules/registry.ts`: `SYSTEM_DESIGN` and `ARCHITECTURE` are re-exported from their module files. `FLAT_MODULES = [SYSTEM_DESIGN, ARCHITECTURE] as const`, `type FlatModuleId = (typeof FLAT_MODULES)[number]["id"]`, and `PROGRESS_MODULES` (the flat modules with `progress`, in registry order).
- Produces, in `lib/architecture/topics.ts`: `export const ARCHITECTURE = defineFlatModule({ id: "architecture", label: "Architecture", searchGroup: "architecture", entries, progress: { storageKey: "architecture-progress", extraIds: PRACTICE_IDS }, ui: ARCHITECTURE_UI })`. The old exports stay as aliases: `TOPICS = ARCHITECTURE.pages`, `ARCHITECTURE_HOME`, `ARCHITECTURE_ROUTES`, `LESSON_IDS`, `ARCHITECTURE_STORAGE_KEY`, `getTopic = ARCHITECTURE.get`, `type ArchitectureTopic = FlatItem<ArchitectureSlug>`.
- Produces, in `lib/system-design/cases.ts`: `SYSTEM_DESIGN = defineFlatModule({ id: "system-design", label: "System Design", searchGroup: "system design", entries, ui: SYSTEM_DESIGN_UI })`, with the aliases `CASES`, `SYSTEM_DESIGN_HOME`, `SYSTEM_DESIGN_ROUTES`, `getCase`, `type SystemDesignCase`.

The UI objects get the new key names in Task 2. In this task, `ui` gets a small adapter in each module file that maps the old keys to `FlatModuleUI`, so the old components keep working. Task 2 removes the adapter.

- [ ] **Step 1: Write the failing tests in `tests/flat-module.test.ts`**

Use a fake module with entries `a` (topic), `b` (link, `href: "/other/b/"`), `c` (topic), `d` (practice), and `progress: { storageKey: "fake-progress" }`.

```ts
test("items are numbered from 1 and a link item keeps its own href", () => {
  assert.deepEqual(fake.items.map((i) => [i.slug, i.number, i.href]),
    [["a", 1, "/fake/a/"], ["b", 2, "/other/b/"], ["c", 3, "/fake/c/"], ["d", 4, "/fake/d/"]]);
});
test("pages and routes leave out link items", () => {
  assert.deepEqual(fake.pages.map((p) => p.slug), ["a", "c", "d"]);
  assert.deepEqual(fake.routes, ["/fake/", "/fake/a/", "/fake/c/", "/fake/d/"]);
});
test("get finds a page, and gives undefined for a link item or an unknown slug", () => {
  assert.equal(fake.get("c")?.number, 3);
  assert.equal(fake.get("b"), undefined);
  assert.equal(fake.get("nope"), undefined);
});
test("neighbours skip link items and stop at the edges", () => {
  assert.deepEqual(slugs(fake.neighbours("a")), [undefined, "c"]);
  assert.deepEqual(slugs(fake.neighbours("c")), ["a", "d"]);
  assert.deepEqual(slugs(fake.neighbours("d")), ["c", undefined]);
});
test("lessonIds are the topic slugs, and empty without progress", () => {
  assert.deepEqual(fake.lessonIds, ["a", "c"]);
  assert.deepEqual(noProgress.lessonIds, []);
});
test("a link entry without href throws", () => {
  assert.throws(() => defineFlatModule({ ...fakeDef, entries: [{ slug: "x", title: "X", description: "", kind: "link" }] }));
});
test("the registry is System Design, then Architecture, with unique ids", () => {
  assert.deepEqual(FLAT_MODULES.map((m) => m.id), ["system-design", "architecture"]);
  assert.deepEqual(PROGRESS_MODULES.map((m) => m.id), ["architecture"]);
});
for (const m of FLAT_MODULES) {
  test(`${m.id}: one MDX file for each page, and the route map has the same routes`, () => {
    // readdirSync(content/<id>) without ".mdx" === m.pages slugs (sorted)
    // Object.values(scripts/<id>-route-map.json) deep-equals [...m.routes]
  });
}
test("Architecture: the next page of observability is practice, and practice has no next page", () => {
  assert.equal(ARCHITECTURE.neighbours("observability").next?.slug, "practice");
  assert.equal(ARCHITECTURE.neighbours("practice").next, undefined);
  assert.equal(ARCHITECTURE.neighbours("why-system-design").previous, undefined);
});
```

`slugs(n)` is a local helper: `[n.previous?.slug, n.next?.slug]`.

- [ ] **Step 2: Run the tests to see them fail**

Run: `node --test tests/flat-module.test.ts`
Expected: FAIL, `Cannot find module '../lib/modules/flat.ts'`.

- [ ] **Step 3: Implement `lib/modules/flat.ts` and `lib/modules/registry.ts`, and change the 2 module files to `defineFlatModule` with the aliases**

`defineFlatModule` computes `items` with one `map`, then `pages` with a filter. `neighbours` uses the index in `pages`. It throws `Error("link entry <slug> needs an href")` for a `link` entry without `href`.

- [ ] **Step 4: Run all tests**

Run: `npm test`
Expected: PASS, with the 17 tests of `tests/architecture.test.ts` and `tests/system-design.test.ts` unchanged.

- [ ] **Step 5: Commit**

```bash
git add lib/modules tests/flat-module.test.ts lib/architecture/topics.ts lib/system-design/cases.ts
git commit -m "refactor: add the flat module model and move Architecture and System Design onto it"
```

---

### Task 2: The shared components and the thin route files

**Files:**
- Create: `components/modules/FlatTopicPage.tsx`, `FlatModuleHome.tsx`, `FlatSidebarList.tsx`, `ProgressSummary.tsx`, `MarkDoneButton.tsx`, `DoneMark.tsx`, `useModuleProgress.ts`
- Modify: `lib/architecture/ui.ts`, `lib/system-design/ui.ts` (key renames of spec §2, add `itemsHeadingId`: `"topics-heading"` and `"cases-heading"`), the 4 files under `app/(site)/architecture/` and `app/(site)/system-design/`, `components/layout/NavList.tsx`, `components/architecture/PracticeQuestion.tsx`, `tests/chapter-layout.test.ts`, the 2 module files (remove the adapter of Task 1)
- Delete: `components/pages/ArchitectureHome.tsx`, `components/pages/SystemDesignHome.tsx`, `components/architecture/ArchitectureSidebarList.tsx`, `components/architecture/MarkDoneButton.tsx`, `components/architecture/TopicDoneMark.tsx`, `components/system-design/SystemDesignSidebarList.tsx`

**Interfaces:**
- Consumes: `FlatModule`, `FlatItem`, `ARCHITECTURE`, `SYSTEM_DESIGN` (Task 1).
- Produces:
  - `progressHook(module: FlatModule): () => { done: readonly string[]; toggle(id: string): void; markDone(id: string): void; clear(): void }` in `useModuleProgress.ts`. It caches one `createUseProgress(module.progress.storageKey)` for each key in a `Map`. It throws if the module has no `progress`.
  - `<ProgressSummary module={m} ids={…} kind?: "topics" | "practice" />`, `<MarkDoneButton module={m} id={slug} />`, `<DoneMark module={m} id={slug} />`
  - `<FlatModuleHome module={m} />` (server component), `<FlatSidebarList module={m} activePath onNavigate? />` (client component)
  - `<FlatTopicPage module={m} load={(slug) => Promise<MdxPage>} params={Promise<{ topic: string }>} components?={MDXComponents} />` (async server component)
  - `staticParams(m)` and `metadataFor(m, load)` in `FlatTopicPage.tsx`

The markup and the classes come from the current Architecture components. Without `progress`, each shared component renders the current System Design markup (spec §3: no progress wrapper, the `block` label span, no done marks). `getOutline`, `editUrl`, and `getReadingMinutes` take `m.id`.

- [ ] **Step 1: Change `tests/chapter-layout.test.ts`**

Replace the 2 flat route paths in `TEMPLATES` with `components/modules/FlatTopicPage.tsx`. Add:

```ts
for (const path of ["app/(site)/architecture/[topic]/page.tsx", "app/(site)/system-design/[topic]/page.tsx"]) {
  test(`${path} renders FlatTopicPage and loads its MDX with a literal folder`, () => {
    const src = source(path);
    assert.match(src, /<FlatTopicPage /);
    assert.match(src, /import\(`@\/content\/(architecture|system-design)\/\$\{slug\}\.mdx`\)/);
  });
}
```

- [ ] **Step 2: Run it to see it fail**

Run: `node --test tests/chapter-layout.test.ts`
Expected: FAIL, `ENOENT … FlatTopicPage.tsx`.

- [ ] **Step 3: Write the 7 shared components, the thin route files (spec §3), the `NavList` branch for flat modules, and the key renames. Delete the 6 old files.**

`NavList`: `SECTIONS` gets one entry for each flat module from `FLAT_MODULES` (`{ id: m.id, href: m.home, label: m.ui.crossTo, arrow: "→" }`) after Linux and Fundamentals. `sectionOf` returns the id of the first flat module whose `home` the path starts with. The render uses `<FlatSidebarList module={…} />` for a flat section.

- [ ] **Step 4: Run the tests and the build**

Run: `npm test && npm run build`
Expected: PASS, and the build passes.

- [ ] **Step 5: Compare with the baseline**

Run: `python3 -I .baseline/compare.py .baseline/out out`
Expected: `OK … 0 differences`. If a page differs, fix the component markup, not the baseline.

- [ ] **Step 6: Commit**

```bash
git add -A components app lib tests
git commit -m "refactor: render Architecture and System Design with shared flat module components"
```

---

### Task 3: The consumers

**Files:**
- Modify: `lib/pwa.ts`, `lib/sitemap.ts`, `lib/stats.ts`, `lib/search.ts`, `app/search-index.json/route.ts`, `components/pages/ContentsPage.tsx`, `components/pages/DashboardPage.tsx`, `lib/reading-state.ts`, `lib/dashboard.ts`
- Delete: `components/architecture/ArchitectureProgressSummary.tsx`, `components/architecture/useArchitectureProgress.ts`
- Test: `tests/reading-state.test.ts`, `tests/search.test.ts` (or the existing search test file)

**Interfaces:**
- Consumes: `FLAT_MODULES`, `PROGRESS_MODULES`, `FlatModuleId` (Task 1); `ProgressSummary`, `progressHook` (Task 2).
- Produces: `buildFlatSearchDocs(module: FlatModule, entries: { item: FlatItem; source: string }[]): SearchDoc[]` in `lib/search.ts`. It uses `module.searchGroup` as the group. `buildArchitectureSearchDocs` and `buildSystemDesignSearchDocs` stay as one-line aliases until Task 4.

| File | Change |
|---|---|
| `lib/pwa.ts`, `lib/sitemap.ts` | `...FLAT_MODULES.flatMap((m) => m.routes)` in place of the 2 spreads, at the same position |
| `lib/stats.ts` | `ModuleId = "linux" \| "fundamentals" \| FlatModuleId`. The flat entries of `MODULES`: `{ id: m.id, title: m.ui.headerLink, href: m.home, tagline: m.ui.description, pages: pagesOf(m.pages) }`, after Fundamentals |
| `app/search-index.json/route.ts` | A local helper `flatDocs(m)` reads `content/<m.id>/<slug>.mdx` for each of `m.pages` and returns `buildFlatSearchDocs(m, …)`. The output order stays as today: tutorial, Linux, `...flatDocs(SYSTEM_DESIGN)`, Fundamentals, `...flatDocs(ARCHITECTURE)`. The search index file must be byte-for-byte the same (Step 4). |
| `ContentsPage.tsx` | `PROGRESS` gets `[m.id]: <ProgressSummary module={m} ids={m.lessonIds} />` for each `m` of `PROGRESS_MODULES` |
| `DashboardPage.tsx` | `const flatStores = PROGRESS_MODULES.map((m) => progressHook(m)());` (a fixed list, so the hook order is stable; add a one-line comment that says so). The reset clears them. One card for each `m`, with the label `m.label`, in the place of the Architecture card. |
| `lib/reading-state.ts` | `PROGRESS_KEYS` = the 3 reading keys, `"linux-progress"`, `"fundamentals-progress"`, then `...PROGRESS_MODULES.map((m) => m.progress!.storageKey)` |
| `lib/dashboard.ts` | `moduleLabels` = tutorial, linux, fundamentals, then `Object.fromEntries(FLAT_MODULES.map((m) => [m.id, m.label]))` |

- [ ] **Step 1: Add the guard tests**

In `tests/reading-state.test.ts`:

```ts
test("PROGRESS_KEYS keep the order of the export file", () => {
  assert.deepEqual(PROGRESS_KEYS, ["page-read", "page-bookmarks", "last-page", "linux-progress", "fundamentals-progress", "architecture-progress"]);
});
```

In the search test file:

```ts
test("buildFlatSearchDocs uses the searchGroup of the module", () => {
  const docs = buildFlatSearchDocs(SYSTEM_DESIGN, [{ item: SYSTEM_DESIGN.pages[0], source: "# T\n\nIntro.\n\n## One\n\nText." }]);
  assert.ok(docs.every((d) => d.group === "system design"));
});
```

- [ ] **Step 2: Run them**

Run: `npm test`
Expected: the `PROGRESS_KEYS` test PASSES now (it guards the refactor), and the `buildFlatSearchDocs` test FAILS (`buildFlatSearchDocs is not a function`).

- [ ] **Step 3: Change the 9 files of the table and delete the 2 old files**

- [ ] **Step 4: Run the tests, the build, and the compare**

Run: `npm test && npm run build && python3 -I .baseline/compare.py .baseline/out out && cmp <(python3 -m json.tool .baseline/out/search-index.json) <(python3 -m json.tool out/search-index.json)`
Expected: PASS, the build passes, `OK … 0 differences`, and the search index is the same.

- [ ] **Step 5: Commit**

```bash
git add -A lib app components tests
git commit -m "refactor: read the flat modules from the registry in pwa, sitemap, stats, search, contents, and dashboard"
```

---

### Task 4: Remove the aliases, update the docs, and verify

**Files:**
- Modify: `lib/architecture/topics.ts`, `lib/system-design/cases.ts`, `lib/search.ts`, the tests that import an alias, `CLAUDE.md`

- [ ] **Step 1: Remove each alias that only tests use, and change those tests to the module object**

Run `grep -rn "TOPICS\|CASES\|getTopic\|getCase\|ARCHITECTURE_ROUTES\|SYSTEM_DESIGN_ROUTES\|LESSON_IDS\|ARCHITECTURE_HOME\|SYSTEM_DESIGN_HOME\|ARCHITECTURE_STORAGE_KEY\|buildArchitectureSearchDocs\|buildSystemDesignSearchDocs" --include=*.ts --include=*.tsx .` (without `node_modules`). Keep an alias only if non-test code still needs it. The test assertions keep their values.

- [ ] **Step 2: Update `CLAUDE.md`**

In "Structure": add `lib/modules/flat.ts`, `lib/modules/registry.ts`, and `components/modules/`. Remove the deleted files. Add a "Flat modules" section of at most 10 lines: what a flat module is, the 3 entry kinds, and how to add one (data file with `defineFlatModule`, the registry line, a route folder with a thin `page.tsx` and `[topic]/page.tsx`, `content/<id>/`, `scripts/<id>-route-map.json`, and its name in the lists of `check_routes.py`, `check_outline.py`, and `check_sources.py`).

- [ ] **Step 3: Run every check**

Run:

```bash
npm test && npm run build \
&& python3 -I .baseline/compare.py .baseline/out out \
&& python3 -m unittest scripts/test_checks.py \
&& python3 scripts/check_routes.py out && python3 scripts/check_links.py out \
&& python3 scripts/check_outline.py out && python3 scripts/check_sources.py out
```

Expected: every command passes. `check_sources.py` prints `OK 81 pages checked, 0 skipped`.

- [ ] **Step 4: Check in the browser**

Run: `python3 -m http.server 8000 -d out`. With saved `architecture-progress` data, check: `/architecture/` (summary and ✓ marks), a topic page (Mark as done toggles the sidebar ✓), `/architecture/practice/` (practice summary, a question checkbox), `/system-design/` and a case page (no progress UI), `/contents/` (the Architecture bar), `/dashboard/` (the Architecture card, Export has `architecture-progress`, Reset clears it).

- [ ] **Step 5: Commit**

```bash
git add -A lib tests CLAUDE.md
git commit -m "refactor: remove the old module aliases and document flat modules"
```
