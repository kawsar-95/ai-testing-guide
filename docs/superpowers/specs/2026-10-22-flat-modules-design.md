# Flat Modules Framework: Design

Date: 2026-10-22. Status: approved by the owner in chat, section by section. This is Project 1 of 2. Project 2 is the System Design Course (section 9).

## 1. Goal

The Architecture module and the System Design module have the same shape: one ordered list of pages, one page for each entry. Their code is copied with different names. This project moves both modules onto one shared "flat module" framework, with no visible change.

Success:

- The HTML of the 88 routes is the same before and after the change, apart from build hashes.
- The localStorage keys do not change, so readers keep their progress.
- A new flat module (the course of Project 2) needs a data file, a thin route folder, MDX files, a route map, and one line in the registry. It needs no change in pwa, sitemap, stats, search, nav, contents, or dashboard code.

Out of scope: the Linux and Fundamentals modules (nested lists, topic checklists inside a page, the version switch) and the tutorial pages. They keep their own code.

## 2. Data model

New file `lib/modules/flat.ts`:

```ts
type FlatEntry = {
  slug: string;
  title: string;
  description: string;
  kind: "topic" | "practice" | "link"; // "link" opens a page of another module (Project 2)
  href?: string;                        // only for "link": the target route
};

type FlatModuleDef = {
  id: "architecture" | "system-design"; // the URL segment, the content folder, and the ModuleId
  label: string;                        // "Architecture"; replaces headerLink and moduleLabels
  searchGroup: string;                  // "architecture", "system design"
  entries: readonly FlatEntry[];
  progress?: { storageKey: string; extraIds?: readonly string[] };
  ui: FlatModuleUI;
};
```

`defineFlatModule(def)` returns the module object. It adds:

| Field | Value |
|---|---|
| `home` | `/<id>/` |
| `items` | the entries with `number` (from 1) and `href` (`/<id>/<slug>/`, or the target of a `link` entry) |
| `pages` | the items that are not `link`: the pages that this module builds |
| `routes` | `home`, then the `href` of each page |
| `get(slug)` | the item of a slug, or `undefined` |
| `neighbours(slug)` | the previous and the next page. Prev/next skips `link` items. |
| `lessonIds` | the slugs of the `topic` items (only with `progress`) |

New file `lib/modules/registry.ts`: `FLAT_MODULES = [ARCHITECTURE, SYSTEM_DESIGN]` and the type `FlatModuleId`.

### UI strings

Both `ui.ts` files keep their text and use one set of key names:

| Architecture today | System Design today | New name |
|---|---|---|
| `topicsHeading` | `casesHeading` | `itemsHeading` |
| `topicEyebrow` | `caseEyebrow` | `itemEyebrow(n)` |
| `topicNav` | `caseNav` | `itemNav` |
| `allTopics` | `allCases` | `allItems` |
| `previousTopic` | `previousCase` | `previousItem` |
| `nextTopic` | `nextCase` | `nextItem` |
| `sidebarTopicLabel` | `sidebarCaseLabel` | `sidebarItemLabel(n)` |
| `crossToArchitecture` | `crossToSystemDesign` | `crossTo` |

The keys that both have today (`siteTitle`, `description`, `eyebrow`, `heading`, `lede`, `sourceNote`, `sidebarNav`, `headerLink`) keep their names. The progress and practice keys stay optional and are used only when the module has `progress` or a `practice` entry.

### What stays specific to one module

`ArchitectureSlug`, `SystemDesignSlug`, `PRACTICE_COUNT`, `practiceId`, `PRACTICE_IDS`, and `PracticeQuestion` stay in `lib/architecture/` and `components/architecture/`. The old exports (`TOPICS`, `CASES`, `ARCHITECTURE_ROUTES`, `SYSTEM_DESIGN_ROUTES`, `getTopic`, `getCase`, `LESSON_IDS`, `ARCHITECTURE_HOME`, `SYSTEM_DESIGN_HOME`, `ARCHITECTURE_STORAGE_KEY`) become aliases of the module object. Step 5 removes the aliases that nothing uses.

## 3. Routes and shared components

Next.js needs one route folder for each URL segment, so `app/(site)/architecture/` and `app/(site)/system-design/` stay. Each `[topic]/page.tsx` becomes a thin wrapper:

```tsx
export const dynamicParams = false;
export const generateStaticParams = () => staticParams(ARCHITECTURE);
export const generateMetadata = metadataFor(ARCHITECTURE, load);
export default function Page(props: PageProps<"/architecture/[topic]">) {
  return (
    <FlatTopicPage module={ARCHITECTURE} load={load} params={props.params}
                   components={{ PracticeQuestion }} />
  );
}
function load(slug: string) {
  return import(`@/content/architecture/${slug}.mdx`);
}
```

The MDX `import()` stays in each route file. Its folder must be a literal, so that the bundler finds the files. Each `page.tsx` of a module home renders `<FlatModuleHome module={…} />`.

New folder `components/modules/`:

| Component | Replaces | Behavior |
|---|---|---|
| `FlatTopicPage` | the body of the 2 `[topic]` pages | Reading progress, `ChapterLayout`, `ContentsButton`, eyebrow, MDX with `PageMeta` (meta line and `ChapterTools`), Sources, prev/next, back to top. It shows `MarkDoneButton` only if the module has `progress` and the item is a `topic`. On a `practice` item, the `PageMeta` slot also shows the progress summary of `progress.extraIds`. |
| `FlatModuleHome` | `ArchitectureHome`, `SystemDesignHome` | The header, the progress summary (only with `progress`), the source callout, and the ordered list. A `topic` item has a done mark (only with `progress`). |
| `FlatSidebarList` | `ArchitectureSidebarList`, `SystemDesignSidebarList` | A client component. It shows the ✓ marks only with `progress`. |
| `ProgressSummary` | `ArchitectureProgressSummary` | The storage key comes from the module. |
| `MarkDoneButton`, `DoneMark` | the Architecture components of the same name, `TopicDoneMark` | Same. |
| `useModuleProgress(module)` | `useArchitectureProgress` | One `createUseProgress(storageKey)` hook for each module, made one time at module load. |

A `link` item shows in the home list and in the sidebar with its target `href`. It has no page, no MDX file, and no done mark in Project 1 (no module has one yet).

The markup and the CSS classes of the shared components are the markup of the current Architecture components. Where System Design differs today (no progress wrapper, the `block` label span, the `cases-heading` id), the component keeps the System Design output when the module has no `progress`. The section id comes from a new UI string, `itemsHeadingId`: `topics-heading` for Architecture and `cases-heading` for System Design, so both ids stay the same.

Removed: `components/pages/ArchitectureHome.tsx`, `components/pages/SystemDesignHome.tsx`, `components/system-design/SystemDesignSidebarList.tsx`, and every file of `components/architecture/` except `PracticeQuestion.tsx`. `PracticeQuestion` uses `useModuleProgress(ARCHITECTURE)`.

## 4. Consumers

| File | After the change |
|---|---|
| `lib/pwa.ts`, `lib/sitemap.ts` | `...FLAT_MODULES.flatMap((m) => m.routes)` in the place of the 2 explicit spreads. The route order stays the same. |
| `lib/stats.ts` | The flat entries of `MODULES` come from the registry. `ModuleId` is the Linux and Fundamentals ids plus `FlatModuleId`. The order of `MODULES` stays the same. |
| `lib/search.ts` | One `buildFlatSearchDocs(module, files)`. `buildArchitectureSearchDocs` and `buildSystemDesignSearchDocs` stay as aliases until step 5. |
| `app/search-index.json/route.ts` | A loop over `FLAT_MODULES` that reads `content/<id>/<slug>.mdx` for each page. |
| `components/layout/NavList.tsx` | If the path starts with the `home` of a flat module, render `FlatSidebarList` for it. Linux, Fundamentals, and the tutorial keep their branches. |
| `components/pages/ContentsPage.tsx` | A `ProgressSummary` for each flat module that has `progress`. |
| `components/pages/DashboardPage.tsx` | One progress card and one reset for each flat module that has `progress`. |
| `lib/reading-state.ts` | `PROGRESS_KEYS` takes `storageKey` from each flat module that has `progress`. The key order stays the same, so an old export file still loads. |
| `lib/dashboard.ts` | `moduleLabels` takes `label` from each flat module. |

The header nav (`lib/header-nav.ts`) already reads `MODULES` and needs no change.

### Python checks

`check_routes.py`, `check_outline.py`, and `check_sources.py` read every `scripts/*-route-map.json` file with a glob, in sorted order. The route map files keep their names. `test_checks.py` keeps its tests and adds one test: the glob finds the 7 route maps.

## 5. Tests

| Test | Change |
|---|---|
| New `tests/flat-module.test.ts` | `defineFlatModule` with a fake module: numbers, hrefs, `pages`, `routes`, `get`, and `neighbours` that skips `link` items. The registry: unique ids, a `content/<id>/` folder for each id, and a `scripts/<id>-route-map.json` with the same routes as `routes`. |
| `tests/architecture.test.ts`, `tests/system-design.test.ts` | The 17 tests keep their assertions. Only the imports change when step 5 removes an alias. |
| `tests/chapter-layout.test.ts` | It reads `components/modules/FlatTopicPage.tsx` for the `ChapterLayout` rules, and it checks that each flat `[topic]` route renders `FlatTopicPage`. |
| `tests/reading-state.test.ts`, `sitemap`, `contents`, `dashboard`, `header-nav` | No change. Their counts and orders stay the same. This shows that the change is invisible. |

## 6. Proof of no visible change

1. Before the first commit, run `npm run build` and copy `out/` to `.baseline/out` (not committed).
2. After each step that changes output, build again. A script in the scratchpad compares the HTML of the 88 routes after it removes the build hashes, the `/_next/` file names, and the service worker cache version. The goal is 0 differences.
3. Run `npm test`, `python3 -m unittest scripts/test_checks.py`, and `check_routes`, `check_links`, `check_outline`, and `check_sources` on `out/`. `check_sources` must print `OK 81 pages checked, 0 skipped`.
4. In the browser: the Architecture progress (home, sidebar, mark done, practice), the contents page, and the dashboard export and reset, with existing localStorage data.

## 7. Order of work

Each step is one commit. `npm test` passes after each step.

1. `lib/modules/flat.ts`, `lib/modules/registry.ts`, `tests/flat-module.test.ts`, and the 2 module definitions, with the old exports as aliases.
2. The shared components and the thin route files. Remove the old home and sidebar components.
3. The consumers of section 4.
4. The glob in the Python scripts and its test.
5. Remove the aliases that nothing uses. Update the imports of the tests.
6. Update the "Structure" table of `CLAUDE.md` and add a "Flat modules" section.

Branch: `refactor/flat-modules` from `main`, after `feat/chapter-page-dashboard` is merged. Both branches change `DashboardPage` and `reading-state`.

## 8. Risks

| Risk | Control |
|---|---|
| A small markup difference (a class, an id) changes the look | The HTML compare of section 6 |
| The `import()` with a variable folder breaks the static export | The `import()` stays in each route file with a literal folder |
| A change of the progress key loses the reader's data | The keys are the same strings. `tests/reading-state.test.ts` checks `PROGRESS_KEYS`. |
| A module-specific feature (practice) leaks into the framework | Practice ids come in through `progress.extraIds`, and `PracticeQuestion` comes in through `components`. The framework does not know about practice questions beyond the `practice` kind. |

## 9. Follow-up: Project 2, the System Design Course

Decided in chat on 2026-10-22. Project 2 gets its own spec after this project is merged.

| Decision | Detail |
|---|---|
| Source | The topic order of systemdesignbangla.com (`js/chapters.js`, read on 2026-10-22): 55 chapters in 6 parts (0 to 5). Only the topic names and the order are used. The text is the tutorial's own, with a `<Cite>` to an official source for each fact. |
| Name and route | System Design Course, at `/course/`. Pages at `/course/<slug>/`. |
| Topics that have a page | A `link` entry to the existing page, for example `/architecture/caching/`. About 12 topics and 4 case studies. |
| Progress | Its own key, `course-progress`. Every topic can be marked done, also a `link` topic. |
| Voices | Technical text first. The voices come in a second pass. |
| Page shape | Required, in this order: `## In plain words`, `## When you need it`, `## A real-life example`, `## Common mistakes`, `## What a tester can check`, `## Key words` (last). Optional: `## How it works`, `## Trade-offs`, `## In an interview`. Other `##` sections are allowed between the required ones. `npm test` checks only the required ones. The case studies use the System Design case shape. |
| Parts | The 6 parts need a grouping in the flat list. Project 2 adds an optional `part` field to `FlatEntry`, used by the home page and the sidebar. |
