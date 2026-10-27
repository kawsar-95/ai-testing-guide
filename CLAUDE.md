# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static educational site that teaches QA engineers and SDETs how to use Claude AI for software testing. The owner is [kawsar-95](https://github.com/kawsar-95).

| Part | Choice |
|---|---|
| Framework | Next.js 16 (App Router), React 19, TypeScript |
| Styles | Tailwind CSS 4 and the design tokens in `app/globals.css` |
| Content | MDX through `@next/mdx`, with `remark-gfm`, `rehype-slug` and `@shikijs/rehype` (theme `github-dark-dimmed`, at build time) |
| Search | MiniSearch in the browser, with a static index at `/search-index.json` |
| Output | Static export in `out/`. There is no backend. |

The design (the editorial shell, the tokens, the fonts) comes from the owner's reference site, [github.com/kawsar-95/All-Necessary-Topics-Related-to-AI-Engineering](https://github.com/kawsar-95/All-Necessary-Topics-Related-to-AI-Engineering).

## Commands

```bash
npm install
npm run dev      # dev server at http://localhost:3000
npm run build    # static export to out/
python3 -m http.server 8000 -d out   # preview the built site at http://localhost:8000
npm test         # node --test on tests/*.test.ts
```

`npm test` runs the `.ts` test files without a compile step. Node runs TypeScript natively from 22.18 on, so `package.json` sets `engines.node` to `>=22.18.0`.

`next start` does not work with a static export. Use the `http.server` command to preview `out/`.

`next.config.ts` sets `output: 'export'`, `trailingSlash: true` and `images.unoptimized`. The MDX plugins are given by name (strings), because Turbopack passes their options to Rust and they must be serializable.

## Deploy (GitHub Pages)

`.github/workflows/deploy-pages.yml` deploys every push to `main` to https://kawsar-95.github.io/ai-testing-guide/. It runs `npm ci`, `npm test`, and `npm run build` with two env vars from `actions/configure-pages`:

- `PAGES_BASE_PATH` (`/ai-testing-guide`): `next.config.ts` uses it as `basePath` and exposes it as `NEXT_PUBLIC_BASE_PATH`. Local builds leave it empty and serve from `/`.
- `NEXT_PUBLIC_SITE_URL`: canonical URLs, Open Graph URLs, sitemap, and robots.

Base-path rule: `next/link`, `router.push`, and the metadata add the base path. Plain `fetch()` and plain `<a>` do not. So `SearchPalette` prefixes `NEXT_PUBLIC_BASE_PATH` to its fetch, `mdx-components.tsx` renders MDX links that start with `/` through `next/link`, and `MdxImage` prefixes the base path to the `src` of an image with `withBasePath` (`lib/base-path.ts`). Write internal links as `/group/page/`, never with the repo name.

To preview the Pages build locally: `PAGES_BASE_PATH=/ai-testing-guide npm run build`, copy `out/` to `<dir>/ai-testing-guide/`, and run `python3 -m http.server 8000 -d <dir>`. The Python check scripts expect a root build (no base path).

## Structure

| Path | Content |
|---|---|
| `app/layout.tsx` | Fonts, the theme init script, the version init script of the Fundamentals module, the metadata, optional Google Analytics |
| `app/globals.css` | Design tokens (both themes), Tailwind, the MDX element styles (`.mdx`, `.code-block`, `.mdx-table`, `details`), the rule that hides the other `[data-version]` block |
| `app/(site)/layout.tsx` | The site shell (`SiteShell`) and the search dialog |
| `app/(site)/page.tsx` | The home page (`components/pages/HomePage.tsx`): the hero (grid background, 2 buttons, `StatsRow`), the START HERE cards, the "Why this guide" cards (`WHY_ITEMS`), and the numbered course cards (`COURSE_CARDS`) |
| `app/(site)/contents/page.tsx` | The contents page (`components/pages/ContentsPage.tsx`): the stats, one card for each tutorial group, and one card for each module with its progress bar |
| `app/(site)/linux/page.tsx`, `app/(site)/linux/[stage]/page.tsx` | The Linux module: the roadmap home (`components/pages/LinuxHome.tsx`) and the notes of one stage. `[stage]` loads `content/linux/<stage>.mdx`. Static params come from `lib/linux/stages.ts`. |
| `app/(site)/fundamentals/page.tsx`, `app/(site)/fundamentals/[chapter]/page.tsx` | The Fundamentals module: the home (`components/pages/FundamentalsHome.tsx`) and one chapter. `[chapter]` loads `content/fundamentals/<chapter>.mdx` and shows the version switch if the chapter has versions. Static params come from `lib/fundamentals/chapters.ts`. |
| `app/(site)/[group]/[page]/page.tsx` | Loads `content/<group>/<page>.mdx`. Static params come from `lib/nav.ts`. It renders the meta line for `<PageMeta />`, the Sources list from `page.sources`, the reading progress bar, and the back-to-top button. |
| `app/search-index.json/route.ts` | The static search index: one doc per page intro and one per `##` section |
| `app/sitemap.ts`, `app/robots.ts`, `app/not-found.tsx` | Sitemap, robots, 404 page |
| `app/manifest.ts`, `app/sw.js/route.ts` | The PWA: `/manifest.webmanifest` and the service worker `/sw.js`, both from `lib/pwa.ts` |
| `app/icon.svg`, `app/apple-icon.png`, `public/icons/` | The favicon, the iOS home-screen icon, and the manifest icons (192 px, 512 px, maskable 512 px) |
| `components/layout/` | `SiteShell`, `SiteHeader`, `HeaderNav` (the top nav), `MobileNav` (the drawer), `ContentsButton`, `NavList` and `SidebarList` (the lists of the drawer), `SiteFooter`, `ThemeToggle`, `RegisterServiceWorker`, `BrandMark` (the site mark: a magnifier with a check mark, the same drawing as `app/icon.svg`) |
| `components/navigation/` | `SectionNav` ("On this page"), `SearchPalette` (Ctrl/Cmd+K) |
| `components/content/` | `SectionFocus` (one `##` section at a time: see "Navigation"), `PageHeader` (the `PART 05 · CONFIGURE` eyebrow), `MetaLine` (the meta line), `Sources`, `ReadingProgress`, `BackToTop`, `PrevNext`, `CopyButton` |
| `components/mdx/` | `Callout`, `CardGrid`, `InfoCard`, `Cite`, `CodeBlock` (the `pre` wrapper), `MdxImage` (an image with the base path), `MdxTable` (the `table` wrapper: it adds `role` and the `data-label` of each cell) |
| `app/(site)/architecture/page.tsx`, `app/(site)/architecture/[topic]/page.tsx` | The Architecture module: the home and one topic or the practice page. Both files are thin: they render `FlatModuleHome` and `FlatTopicPage` with `ARCHITECTURE`. `[topic]` loads `content/architecture/<topic>.mdx`. Static params come from `lib/architecture/topics.ts`. |
| `app/(site)/k6/page.tsx`, `app/(site)/k6/[topic]/page.tsx` | The k6 module: the home (grouped by part) and one topic. Both files are thin, like the Architecture ones, with `K6`. `[topic]` loads `content/k6/<topic>.mdx`. Static params come from `lib/k6/topics.ts`. |
| `lib/k6/topics.ts`, `lib/k6/ui.ts`, `lib/bn/k6.ts` | The one ordered list of the 20 k6 topics in 5 parts, and the English and Bangla strings. See "k6 Module". |
| `public/images/k6/` | The owner's 5 screenshots (WebP): the first run, the VUs and duration output, and 3 Grafana steps |
| `components/architecture/` | `PracticeQuestion` (the only Architecture-specific component) |
| `lib/architecture/topics.ts`, `lib/architecture/ui.ts` | The one ordered list of the 19 Architecture topics and the practice page, the progress ids, and the English strings. See "Architecture Module". |
| `public/images/architecture/` | The owner's 19 diagrams (WebP), one for each topic |
| `app/(site)/course/page.tsx`, `app/(site)/course/[topic]/page.tsx` | The System Design Course module: the home (grouped by part) and one topic. Both files are thin, like the Architecture ones, with `COURSE`. `[topic]` loads `content/course/<topic>.mdx`. Static params come from `lib/course/topics.ts`. |
| `lib/course/topics.ts`, `lib/course/ui.ts` | The one ordered list of the 55 Course entries (40 topics and 15 links to Architecture and System Design pages), its parts, and the English strings. See "System Design Course". |
| `app/(site)/system-design/page.tsx`, `app/(site)/system-design/[topic]/page.tsx` | The System Design module: the home and one case study. Both files are thin, like the Architecture ones, with `SYSTEM_DESIGN`. `[topic]` loads `content/system-design/<topic>.mdx`. Static params come from `lib/system-design/cases.ts`. |
| `components/linux/` | `useLinuxProgress.ts` (the progress store), `LinuxProgressSummary`, `StageProgress`, `TopicChecklist`, `LinuxSidebarList` |
| `components/fundamentals/` | `useFundamentalsProgress.ts`, `FundamentalsProgressSummary`, `ChapterProgress`, `TopicChecklist`, `FundamentalsSidebarList`, `Version` (one version block), `VersionSwitch`, and `diagrams/` (the inline SVG diagrams of the ISTQB version, each in a `Figure` with a visible description) |
| `lib/linux/stages.ts` | The one ordered list of the 12 stages and their 103 topics. See "Linux Module". |
| `lib/linux/ui.ts` | The English strings of the Linux module |
| `lib/modules/flat.ts` | `defineFlatModule` and the flat module types (`FlatEntry`, `FlatItem`, `FlatModule`). See "Flat modules". |
| `lib/modules/registry.ts` | `FLAT_MODULES`, `PROGRESS_MODULES`, and `FlatModuleId`. Pwa, sitemap, stats, search, contents, and dashboard read the flat modules from here. |
| `components/modules/` | `FlatModuleHome`, `FlatTopicPage`, `FlatSidebarList`, `ProgressSummary`, `MarkDoneButton`, `DoneMark`, and `useModuleProgress.ts` (`progressHook`, `doneHook`, `flatModule(id)`). They take a module, or a `moduleId` in client components. |
| `lib/system-design/cases.ts` | The one ordered list of the 15 System Design case studies. See "System Design Module". |
| `lib/system-design/ui.ts` | The English strings of the System Design module |
| `lib/fundamentals/chapters.ts` | The one ordered list of the 11 chapters and their 117 topics. See "Fundamentals Module". |
| `lib/fundamentals/version.ts` | The version switch values, `resolveVersion`, and the init script |
| `lib/fundamentals/structure.ts` | `topicVersionCounts` and `headingsInsideVersions`: the structure checks of a chapter file |
| `lib/fundamentals/ui.ts` | The English strings of the Fundamentals module |
| `lib/base-path.ts` | `withBasePath` for an image `src` (`MdxImage`) |
| `lib/nav.ts` | The single source of the page order. See below. |
| `lib/outline.ts`, `lib/headings.ts` | The `##`/`###` outline of an MDX file, with the same ids as `rehype-slug` |
| `lib/search.ts` | Builds the search docs, the index, and runs a search |
| `lib/voice.ts` | The voice types, the labels, `VOICE_STORAGE_KEY`, `resolveVoiceDefault`, and `VOICE_INIT_SCRIPT`. See "Voices". |
| `lib/voice-source.ts` | The authoring check for `<Voices>` blocks. `npm test` uses it. |
| `lib/theme.ts` | The theme init script, `resolveTheme`, `nextTheme` |
| `lib/base-path.ts` | `withBasePath(path, base)`: adds the base path to a path that starts with `/`. See "Deploy". |
| `lib/site.ts` | `SITE_URL`, `GA_ID`, `BASE_PATH`, `SITE_NAME`, `SITE_SHORT_NAME`, `SITE_DESCRIPTION`, `OWNER` |
| `lib/sitemap.ts` | `sitemapPaths()`: the paths of `app/sitemap.ts` (home, tutorial pages, Linux, Fundamentals, System Design, Architecture, Course, k6). It has relative `.ts` imports, so `node --test` can load it. |
| `lib/pwa.ts` | The web manifest, the precache list (all 151 routes, the 404 page, the search index), and the source of the service worker |
| `lib/pwa-install.ts` | `INSTALL_CAPTURE_SCRIPT`: a head script that keeps an early `beforeinstallprompt` event on `window.__installPrompt` for `InstallButton` |
| `lib/page.ts` | The `page` export type (`updated`, `sources`), `formatUpdated`, `editUrl` (the "Suggest an edit" link) |
| `lib/home.ts` | The home group labels, the three START HERE pages, `WHY_ITEMS`, and `COURSE_CARDS` |
| `lib/contents.ts` | `CONTENTS_HOME`, `CONTENTS_ROUTES`, and `CONTENTS_UI` (the strings of the contents page and the stats row) |
| `lib/stats.ts` | `MODULES` (the 6 modules with their pages) and `siteStats()` (the numbers of the stats row) |
| `lib/header-nav.ts` | `HEADER_NAV` (4 links) and `activeNavId`. See "Navigation". |
| `lib/interview.ts` | `INTERVIEW_HOME`, `INTERVIEW_ROUTES`, and `INTERVIEW_UI` (the strings and the 3 cards of the interview page) |
| `lib/contrast.ts` | `contrastRatio` and `parseTokens`. `tests/contrast.test.ts` uses them. |
| `lib/reading-time.ts`, `lib/reading-state.ts`, `lib/dashboard.ts`, `lib/dashboard-data.ts` | Reading time, `CONTENT_PAGES` and the storage keys, and the Dashboard. See "Reading state and Dashboard". |
| `components/content/ChapterLayout.tsx`, `ChapterList.tsx`, `ChapterTools.tsx` | The 3-column layout of a content page, its left list, and its pill and toggles |
| `components/reading/useReadingState.ts` | `usePageRead`, `useBookmarks`, `useLastPage` |
| `app/(site)/dashboard/page.tsx` | The Dashboard (`components/pages/DashboardPage.tsx`). It ends with the author block (`AUTHOR` in `lib/site.ts`, photo in `public/images/author/`). |
| `app/(site)/interview/page.tsx` | The interview page (`components/pages/InterviewPage.tsx`): links to Fundamentals chapter 11, the Architecture practice page, and the Course page `interview-intro`. It has no MDX file and no cites. |
| `lib/reading.ts` | `articleProgress` and `showBackToTop` for the reading aids |
| `lib/ui.ts` | The English strings of the shell |
| `lib/scroll-lock.ts` | One page-scroll lock, shared by the drawer and the search dialog |
| `mdx-components.tsx` | Registers the MDX components |
| `public/images/<group>/` | The images of the content pages, for example `public/images/linux/`. A page refers to one as `/images/<group>/<file>`. |
| `content/<group>/<page>.mdx` | The 23 tutorial pages |
| `content/linux/<stage>.mdx` | The 12 Linux stage pages |
| `content/system-design/<slug>.mdx` | The 15 System Design case pages |
| `content/fundamentals/<chapter>.mdx` | The 11 Fundamentals chapter pages |
| `content/course/<slug>.mdx` | The 40 Course topic pages |
| `content/k6/<slug>.mdx` | The 20 k6 topic pages |
| `public/images/fundamentals/` | The images of the owner's notes |
| `tests/` | `node --test` tests for `home`, `nav`, `outline`, `page`, `pwa`, `sitemap`, `reading`, `search`, `theme`, `ui`, `progress`, `base-path`, `linux-data`, `linux-progress`, `fundamentals-data`, `fundamentals-version`, `fundamentals-structure`, `fundamentals-diagrams`, `system-design`, `architecture`, `voice`, `voice-source`, `pwa-install`, `contrast`, `contents`, `header-nav`, `interview`, `fonts`, `reading-time`, `reading-state`, `chapter-layout`, `dashboard`, `flat-module`, `course`, `k6` |
| `docs/ARCHITECTURE.md` | How the site is built, for developers. Update it when a route, a module, or a shared mechanism changes. |
| `docs/assets/` | The screenshots of `README.md` (1280×800, and 390×844 for the phone ones). Take them again when the look changes. Use a root build and seed demo progress in `localStorage`. |
| `docs/superpowers/research/` | The research notes and fact-check reports of each page. See "Content Workflow". |
| `scripts/` | Python check scripts. See below. |
| `scripts/linux-route-map.json` | The 13 Linux routes: `/linux/` and the 12 stages. Same identity map as `route-map.json`. |
| `scripts/system-design-route-map.json` | The 16 System Design routes: `/system-design/` and the 15 cases. Same identity map. |
| `scripts/architecture-route-map.json` | The 21 Architecture routes: `/architecture/`, the 19 topics, and the practice page. Same identity map. |
| `scripts/course-route-map.json` | The 41 Course routes: `/course/` and the 40 topic pages. Same identity map. |
| `scripts/k6-route-map.json` | The 21 k6 routes: `/k6/` and the 20 topic pages. Same identity map. |
| `scripts/linux_fetch.py`, `scripts/linux_overlap.py` | Research tools for the Linux module. See "Linux Module". |
| `scripts/contents-route-map.json` | The 1 contents route: `/contents/`. Same identity map. |
| `scripts/dashboard-route-map.json` | The 1 dashboard route: `/dashboard/`. Same identity map. |
| `scripts/interview-route-map.json` | The 1 interview route: `/interview/`. Same identity map. |
| `scripts/fundamentals-route-map.json` | The 12 Fundamentals routes: `/fundamentals/` and the 11 chapters. Same identity map as `route-map.json`. |

`lib/nav.ts` is the one ordered list of groups and pages (slug, title, description, tagline). It drives the drawer, the part numbers (`PART 01`…`PART 23`, continuous across the groups), prev/next, the home contents, the search index, the sitemap, and the static params.

The site has 151 routes:

| Routes | Count |
|---|---|
| `/` | 1 |
| `/contents/` | 1 |
| `/dashboard/` | 1 |
| `/interview/` | 1 |
| `/<group>/<page>/` for the 23 tutorial pages | 23 |
| `/linux/` and the 12 Linux stages | 13 |
| `/system-design/` and the 15 case studies | 16 |
| `/fundamentals/` and the 11 Fundamentals chapters | 12 |
| `/architecture/`, the 19 topics, and the practice page | 21 |
| `/course/` and the 40 Course topics | 41 |
| `/k6/` and the 20 k6 topics | 21 |

| Group | Folder | Pages |
|---|---|---|
| Getting Started | `content/getting-started/` | `setup`, `models`, `permission-modes` |
| Foundations | `content/foundations/` | `how-claude-code-works`, `prompting`, `test-design`, `principles` |
| Configure | `content/configure/` | `claude-md`, `settings` |
| Extend | `content/extend/` | `skills`, `subagents`, `hooks`, `mcp`, `plugins` |
| Automate | `content/automate/` | `headless`, `github-actions`, `playwright` |
| Case Study | `content/case-study/` | `overview`, `bug-hunt`, `pr-review`, `test-and-retest`, `automation`, `lessons` |

## Navigation

| Part | Behavior |
|---|---|
| Header | Sticky, 64 px. The brand mark in a teal tile, then the top nav (from the `nav` breakpoint), then search, voice, install, theme, and the menu button (below `nav`). |
| Top nav | `HEADER_NAV`: 4 plain links: Home, Contents, Dashboard, and Interview. The current item has a teal underline (`activeNavId`). A tutorial or module page has no current item. A module is reached from the home page and `/contents/`. Below the `nav` breakpoint, the drawer shows the same 4 links above its list (`MobileNav`). |
| Left list | `ChapterLayout` (`components/content/ChapterLayout.tsx`): the 3 columns of the 141 content pages. From the `chapter` breakpoint (51.25rem, 820 px), the left list (`ChapterList`, 240 px, sticky, its own scroll) shows `NavList`: the pages of the current module. From `toc` (80rem, 1280 px), "On this page" (`SectionNav`, 280 px) shows. The page passes its route to `ChapterLayout`, so the static HTML has the right list. The layout is at most 1400 px wide; the text column at most 720 px. |
| Drawer | `MobileNav`, on every width. The menu button opens it below `nav`. Below `chapter`, `ContentsButton` above the title of a content page opens it with the `OPEN_NAV_EVENT` window event. It shows `NavList`: the pages of the current module. On close, the focus goes back to the button that opened it. |
| One section at a time | `SectionFocus` (in `ChapterLayout`) groups the flat children of `article[data-content]` by `##` heading and hides all sections but one (`data-sec-hidden`, CSS in `app/globals.css`, screen only). The text before the first `##` stays visible. A step bar sits above the section, and Previous and Next buttons below it. "Show all sections" turns it off (`localStorage` key `section-focus`). A hash or an in-page link into a hidden section shows it. Pages with fewer than 3 sections, and pages with no JavaScript, show everything. The strings are in `lib/ui.ts` and `lib/bn/shell.ts`. |
| `/contents/` | All groups and modules as cards, with the progress bars of Linux, Fundamentals, Architecture, Course, and k6. |

## Reading state and Dashboard

| Part | Detail |
|---|---|
| `ChapterTools` | Under the meta line of each content page (in the `PageMeta` slot): the pill `📖 N min read` and the toggles Bookmark and Mark as read (`aria-pressed`). It saves the page to `last-page` on mount. |
| Reading time | `lib/reading-time.ts`: the words of the Technical text (no code, export statements, tags, or link URLs). A Fundamentals chapter gets one value per version (`getReadingMinutesByVersion`), and the version CSS shows the one of the switch / 200, rounded up, 1 at least. Computed at build time. |
| Storage | `page-read` and `page-bookmarks` (lists of routes, `createUseProgress`) and `last-page` (one route). Hooks: `components/reading/useReadingState.ts`. `CONTENT_PAGES` (`lib/reading-state.ts`) is the list of the 141 content pages. |
| `/dashboard/` | `components/pages/DashboardPage.tsx`: pages read (`N / 141`), bookmarks, the topic progress of Linux, Fundamentals, Architecture, Course, and k6, Continue reading (`continueTarget`: an unknown `last-page` gives the first tutorial page), the bookmarks, and the pages read by module. Export downloads `progress-YYYY-MM-DD.json` with the 8 keys of `PROGRESS_KEYS`. Reset asks with `confirm`, then clears the 8 keys. |
| Strings | `lib/dashboard.ts` (`DASHBOARD_UI`, the route). The helpers are in `lib/dashboard-data.ts`, so `lib/sitemap.ts` has no import cycle. |

## Linux Module

The Linux module is the roadmap at `/linux/` and 12 stage pages at `/linux/<stage>/`. The design is `docs/superpowers/specs/2026-10-16-linux-module-design.md`.

`lib/linux/stages.ts` is the one ordered list of the stages and their topics. It drives the drawer, the home page, search, the sitemap, the precache, and the progress store (`localStorage` key `linux-progress`).

The progress code is shared and lives under `prep` names, left from the Interview Prep module that was removed on 2026-10-20: `lib/prep/progress.ts`, `lib/prep/store.ts`, and `components/prep/{useProgress,ProgressBar,browser-store}`. `tests/progress.test.ts` tests it. The Linux and Fundamentals modules use it. Its default `localStorage` key is still `prep-progress`. The removed module (the `/prep/` pages, `content/prep/`, the quiz and tables) is in the git history. Its spec, plan, and research notes stay in `docs/superpowers/`.

| Rule | Detail |
|---|---|
| Sources | Each page cites its roadmap.sh/linux links. Each fact about a command, a flag, or a path also has an official source: `man7.org`, `kernel.org`, `systemd.io`, or a GNU manual. This replaces "No blogs" of the Content Workflow for this module only, because most roadmap links are blogs. |
| Research notes | `docs/superpowers/research/linux-*.md`. Each stage has a notes file and a `.factcheck.md` report. |
| Raw text | `scripts/linux_fetch.py` downloads the roadmap links as text. Never commit this text. It is third-party text. `scripts/linux_overlap.py` finds word runs that a page copies from it. |
| Done | A stage is done only when its fact-check report ends with `Open FAILs: 0`. |
| Cheat sheet topic | The last topic of stage 4, `Permissions Cheat Sheet`, is not from the roadmap. It is the cheat sheet of abrahimcse (GitHub), included with attribution and kept in its original wording. It has no 250-word limit. Each factual correction is marked "Correction" and has an official cite. |
| Topics | `npm test` checks that each stage has an MDX file and that each topic anchor is the id of a `##` heading. |

To add or change a topic, edit `lib/linux/stages.ts` and the `##` heading of the MDX file together. The title of a topic is its heading. The `anchor` comes from the title with the `rehype-slug` rules. Six topics have an anchor that ends in `-1`, because the `#` title of the page takes the plain slug first.

## Flat modules

A flat module is a home page and a list of pages at `/<id>/<slug>/`. Architecture, System Design, Course, and k6 are flat modules. `defineFlatModule` (`lib/modules/flat.ts`) builds the routes, the numbers, the neighbours, and the progress ids from one entry list. An entry has a kind: `topic` (a page with a progress id when the module has progress), `practice` (a page with its own question ids), or `link` (a link to an `href`, with no page).

To add a flat module:

1. Create a data file with `defineFlatModule` and a `<Id>Slug` type, and add one line to `FLAT_MODULES` in `lib/modules/registry.ts`. Import and re-export the module there too.
2. Create `app/(site)/<id>/page.tsx` (`FlatModuleHome`) and `app/(site)/<id>/[topic]/page.tsx` (`FlatTopicPage`). Keep both thin.
3. Create `content/<id>/<slug>.mdx` and `scripts/<id>-route-map.json`.
4. Add `...flatDocs(<MODULE>)` to `app/search-index.json/route.ts`, at its place in the order. `npm test` checks that each module has one.
5. Add the map name to the lists of `check_routes.py`, `check_outline.py`, and `check_sources.py`.

## System Design Module

The System Design module is the home at `/system-design/` and 15 case pages at `/system-design/<slug>/`. Each case explains how one well-known system works (Kafka, Google Search, YouTube, WhatsApp, Uber ETA, payments, …), in plain words for testers. It has no progress checklist.

`lib/system-design/cases.ts` defines the module (`SYSTEM_DESIGN`) with its one ordered list of the cases (slug, title, description). It drives the drawer, the home page, prev/next, search (group `system design`), the sitemap, and the precache. The `#` heading of each MDX file is the case title.

| Rule | Detail |
|---|---|
| Sources | Source 1 of each page is its article of The System Design Newsletter by Neo Kim (systemdesign.one). A page can also cite primary sources that the article links to (company engineering blogs, official docs). This replaces "No blogs" of the Content Workflow for this module only. If the article shows one possible design and not the real company system, the page says so. |
| Research notes | `docs/superpowers/research/system-design-<slug>.md` and `system-design-<slug>.factcheck.md` |
| Raw text | Never commit the article text. It is third-party text. Run `python3 scripts/linux_overlap.py content/system-design/<slug>.mdx <raw-dir>` to find word runs that a page copies from it. |
| Page shape | `## The problem in plain words`, `## The big picture` (a text diagram), 3 to 6 mechanism sections, `## Key words` (a table), `## What a tester can learn` (a "Tutorial advice" tip with no cites) |
| Done | A case is done only when its fact-check report ends with `Open FAILs: 0`. |

To add a case, add it to `lib/system-design/cases.ts` and to `SystemDesignSlug`, create `content/system-design/<slug>.mdx`, and add its route to `scripts/system-design-route-map.json`. `npm test` checks that the three agree.

## Fundamentals Module

The Fundamentals module teaches manual software testing in 11 chapters: the home at `/fundamentals/` and one page for each chapter at `/fundamentals/<chapter>/`. Chapters 1–10 have two versions of the text: the owner's notes and an ISTQB version. Chapter 11 is 50 interview questions with one text. The design is `docs/superpowers/specs/2026-10-20-fundamentals-module-design.md`. The plan is `docs/superpowers/plans/2026-10-20-fundamentals-module.md`.

`lib/fundamentals/chapters.ts` is the one ordered list of the chapters and their topics. It drives the drawer, the home page, search, the sitemap, the precache, and the progress store (`localStorage` key `fundamentals-progress`). A topic id is `<chapter-slug>-NNN` from `001`. The `anchor` comes from the title with the `rehype-slug` rules, with the chapter title slugged first (as in `lib/linux/stages.ts`).

The version switch:

| Part | Detail |
|---|---|
| MDX | Each `##` topic of chapters 1–10 has one `<Version of="notes">` block and one `<Version of="istqb">` block. `Version` renders `<div data-version="notes">` or `<div data-version="istqb">`. The interview chapter has no `<Version>` block. |
| Attribute | `<html data-fundamentals-version>` is `notes` or `istqb`. The server HTML has `istqb`. |
| Init script | `VERSION_INIT_SCRIPT` (`lib/fundamentals/version.ts`) runs in `<head>` before the first paint. A saved choice (`localStorage` key `fundamentals-version`) wins. Any other value gives `istqb`. If storage is blocked, the attribute stays `istqb`. |
| Switch | `VersionSwitch` shows two buttons with `aria-pressed` above the text of a chapter with versions. A click sets the attribute, saves the choice in `try/catch`, and fires `fundamentals-version-change`. |
| CSS | `app/globals.css` hides the `[data-version]` block that is not the one on `<html>`. Both versions are in the HTML, so search and `check_sources.py` see both. |

| Rule | Detail |
|---|---|
| Headings | No heading (`#` to `######`) inside a `<Version>` block. Use bold labels for sub-topics. `npm test` (`tests/fundamentals-structure.test.ts`) checks this and the one-block-per-version rule. |
| Cites | `<Cite>` only in `istqb` blocks and in interview answers. `page.sources` lists only ISTQB sources (syllabus and glossary). |
| Owner text | Kept. Fix only spelling and broken formatting. If it conflicts with ISTQB, add a one-sentence `<Callout type="warning">` in the `notes` block that ends with "Switch to the ISTQB version at the top of the page to see the ISTQB definition." |
| Terms that ISTQB does not define | The `istqb` block says "The ISTQB syllabus and glossary do not define this term." and gives the common meaning in `<Callout type="note" title="The tutorial's own explanation">`, with no `<Cite>`. |
| Images | Only in `notes` blocks, through `<MdxImage src="/images/fundamentals/…" alt="…" />`. The `src` must be a file in `public/` (`npm test` checks this). `MdxImage` adds the base path. |
| Diagrams | Only in `istqb` blocks: `<StlcDiagram />`, `<TestingClassificationDiagram />`, `<TestLevelsDiagram />`, `<TestPyramidDiagram />`, `<TestQuadrantsDiagram />`, `<PinStateDiagram />`, `<BugLifeCycleDiagram />`. Colors come only from the theme tokens. The description under a diagram is page text, so the fact-check checks it. A diagram that is not ISTQB content says so in its description. |
| Research notes | `docs/superpowers/research/fundamentals-<slug>.md` and `docs/superpowers/research/fundamentals-<slug>.factcheck.md`. The ISTQB sources are in `docs/superpowers/research/fundamentals-sources.md`. |
| Done | A chapter is done only when its fact-check report ends with `Open FAILs: 0`, written by an agent that did not write the chapter. |
| Privacy | No real person's name, email, home path, or login name in new text. |

To add or change a topic, edit `lib/fundamentals/chapters.ts` and the `##` heading of the MDX file together.

## System Design Course

The System Design Course is the home at `/course/` and 40 topic pages at `/course/<slug>/`. It teaches system design from the ground up, in plain words for testers. The design is `docs/superpowers/specs/2026-10-22-course-module-design.md`.

`lib/course/topics.ts` defines the module (`COURSE`) with its parts and its one ordered list of 55 entries. 40 are `topic` entries with a page. 15 are `link` entries: 11 to an Architecture page (`intro`, `load-balancing`, `caching`, `cdn`, `scalability`, `storage`, `replication`, `message-brokers`, `monoliths-microservices`, `api-gateway`, `rate-limiting`) and 4 to a System Design case (`url-shortener`, `whatsapp`, `twitter`, `uber`). The home groups the entries by part: Part 0 "Getting started", Part 1 "Networking and basics", Part 2 "Databases and consistency", Part 3 "System architecture", Part 4 "Reliability and security", and Part 5 "Case studies and interview". Progress (`localStorage` key `course-progress`) has the 55 entry slugs, links too. Search group `course`.

| Rule | Detail |
|---|---|
| Page shape | `## In plain words`, `## When you need it`, `## A real-life example`, `## Common mistakes`, `## What a tester can check` (a "Tutorial advice" tip with no cites), `## Key words` (a table, always last). Optional: `## How it works`, `## Trade-offs`, `## In an interview`. `npm test` checks the order. Each `##` section except `## Key words` has `<Voices>` (see "Voices"). |
| Sources | The topic order follows systemdesignbangla.com. Nothing else comes from it: the text is the tutorial's own, and each fact has a `<Cite>` to an official source (RFCs, vendor docs, the Google SRE books). No blogs or AI summaries. |
| Research notes | `docs/superpowers/research/course-<slug>.md` and `course-<slug>.factcheck.md`. A page is done only when its report ends with `Open FAILs: 0`, written by an agent that did not write the page. |

To add a topic, add it to `lib/course/topics.ts` and to `CourseSlug`, create `content/course/<slug>.mdx`, and add its route to `scripts/course-route-map.json`. `npm test` (`tests/course.test.ts`) checks that the three agree.

## k6 Module

The k6 module is the home at `/k6/` and 20 topic pages at `/k6/<slug>/`. It teaches performance testing and the k6 tool, in plain words for testers with no performance testing experience. The base is the owner's notes "Learn K6". The design is `docs/superpowers/specs/2026-10-27-k6-module-design.md`.

`lib/k6/topics.ts` defines the module (`K6`) with its 5 parts and its one ordered list of 20 `topic` entries. The parts are: 1 "Performance testing basics", 2 "Start with k6", 3 "Configure the load", 4 "Write real scripts", and 5 "Results and practice". The list drives the drawer, the home page, prev/next, search (group `k6`), the sitemap, the precache, and the progress store (`localStorage` key `k6-progress`). The strings are in `lib/k6/ui.ts` (`K6_UI`), and the Bangla twin is `K6_UI_BN` in `lib/bn/k6.ts`.

| Rule | Detail |
|---|---|
| Page shape | The `##` sections follow the owner's notes. `## Key words` (a table) is always last. Each `##` section except `## Key words` has `<Voices>` (see "Voices"). Code blocks have a language. A k6 output is a `text` block. `npm test` (`tests/k6.test.ts`) checks the shape. |
| Demo target | `https://quickpizza.grafana.com` or `http://localhost:3000`. |
| Images | `<MdxImage src="/images/k6/<name>.webp" alt="…" width height />`. Only the owner's own screenshots (7 files in `public/images/k6/`, 2 of them from the owner's example project). `npm test` checks that each `src` is a file in `public/`. |
| Sources | The owner's notes are not public and have no `<Cite>`. Each fact has a `<Cite>` to an official source: grafana.com/docs/k6, github.com/grafana/k6, InfluxData, Grafana, Docker, or GitHub docs, or the site of a tool in the tool table. No blogs or AI summaries. |
| Owner text | Kept, with the owner's examples and numbers. Fix only what is wrong or out of date, with a cite. `test-api.k6.io` is replaced by QuickPizza, and the page follows the current k6 version. |
| Privacy | No real login, password, token, domain, or person's name. Use `https://api.example.com` and `__ENV` values. A token in an output is `<token>`. |
| Case study | `case-study` walks through the owner's example project [k6-performance-testing](https://github.com/kawsar-95/k6-performance-testing) (commit `51e4b9e`). Facts about that project have no `<Cite>`: an agent checks them against its files, as in the Case Study group. Facts about k6 itself have a `<Cite>`. No email, password, phone number, key, or token from the project. 5 other pages and the module home link the project (`projectLink` in `K6_UI`). |
| Third-party art | No screenshot of the k6 docs and no Statista chart. A table and a text diagram replace them. |
| Research notes | `docs/superpowers/research/k6-<slug>.md`, `k6-<slug>.factcheck.md`, and `k6-<slug>.voices.factcheck.md`. A page is done only when both reports end with `Open FAILs: 0`, written by an agent that did not write the page. |

To add a topic, add it to `lib/k6/topics.ts` and to `K6Slug`, create `content/k6/<slug>.mdx`, and add its route to `scripts/k6-route-map.json`. `npm test` (`tests/k6.test.ts`) checks that the three agree.

## Architecture Module

The System Architecture Foundations module is the home at `/architecture/`, 19 topic pages, and a practice page with 30 questions, all at `/architecture/<slug>/`. It teaches the building blocks of system architecture in plain words for testers. The base is the owner's notes (`docs/superpowers/research/architecture-owner-notes.md`) and the owner's diagrams. The design is `docs/superpowers/specs/2026-10-20-architecture-module-design.md`.

`lib/architecture/topics.ts` defines the module (`ARCHITECTURE`) with its one ordered list (slug, title, description). It drives the drawer, the home page, prev/next, search (group `architecture`), the sitemap, the precache, and the progress store (`localStorage` key `architecture-progress`). The progress ids are the 19 topic slugs and `practice-01` … `practice-30`.

| Rule | Detail |
|---|---|
| Page shape | `## In plain words` (with the topic's `<MdxImage>`), `## When you need it`, `## A real-life example`, `## Common mistakes`, `## What a tester can check` (a "Tutorial advice" tip with no cites), `## Key words` |
| Sources | The owner's notes have no `<Cite>`, because they are not public. Each fact has a `<Cite>` to an official source: vendor docs, IETF RFCs, MDN, OpenTelemetry, Prometheus, or the Google SRE books. The LMS examples and the tester tips are the tutorial's own text. |
| Images | `<MdxImage src="/images/architecture/NN-<slug>.webp" alt="…" />`. `npm test` checks that each topic shows its own image and that each `src` is a file in `public/`. |
| Practice | `<PracticeQuestion n={k} topic="<slug>" question="…">` with the model answer as the body and the closing tag at column 0. The `[topic]` page passes the component. `npm test` checks the numbers 1–30 and the topic slugs. |
| Research notes | `docs/superpowers/research/architecture-<slug>.md` and `architecture-<slug>.factcheck.md` |
| Done | A page is done only when its fact-check report ends with `Open FAILs: 0`, written by an agent that did not write the page. |

To add a topic, add it to `lib/architecture/topics.ts` and to `ArchitectureSlug`, create `content/architecture/<slug>.mdx`, and add its route to `scripts/architecture-route-map.json`. `npm test` checks that the three agree.

## Voices

A `##` section can have 3 voices of its text: Technical (the current text), `সহজ English` (plain English), and `বাংলা` (Bangla). 129 pages have voices: the 23 tutorial pages, the 12 Linux stages, the 15 System Design cases, the 19 Architecture topics, the 40 Course topics, and the 20 k6 topics. These have no voices: the Fundamentals chapters (each topic already has a notes and an ISTQB version), `architecture/practice`, every `## Key words` section, and the Linux "Permissions Cheat Sheet" topic. A new page with voices needs its own `<group>-<slug>.voices.factcheck.md`. The design is `docs/superpowers/specs/2026-10-20-voices-design.md`.

### What the reader sees

| Part | Behavior |
|---|---|
| Switcher | A group of 3 buttons under the `##` heading: `Technical`, `সহজ English`, `বাংলা`. Each extra text shows alone, in a tinted box with a 3 px left border and a title. The Left, Right, Home, and End keys move the selection. Only the selected button is in the tab order. |
| `বাংলা` header button | `VoiceToggle` sets the site-wide default voice. The text is `বাংলা` if the default is Technical, and `English` if the default is Bangla. A click saves `bangla` or `technical` in `localStorage` key `voice` and sets `data-voice-default` on `<html>`. Every section follows the new default. The button has no `aria-pressed`. Its accessible name starts with the visible word (WCAG 2.5.3 Label in Name): `voiceToBangla` and `voiceToTechnical` in `lib/ui.ts`. |
| Section choice | A click on the switcher changes one section only. If the site-wide default changes, every section goes back to the default. |
| Bangla default | `বাংলা` moves to the first position of each switcher. |
| Install button | `InstallButton` shows only after the browser fires `beforeinstallprompt` (Chromium). If the event comes before hydration, the head script `INSTALL_CAPTURE_SCRIPT` (`lib/pwa-install.ts`) keeps it, and the button reads it on mount. A click shows the install prompt. Other browsers use their own menu. |

The `বাংলা` header button also changes the fixed UI text (see "UI text in Bangla"). Titles of pages, stages, chapters, and topics, their descriptions, and the module names stay in English. There is one URL for each page. There is no `/bn/` copy.

### UI text in Bangla

| Part | Detail |
|---|---|
| Twin files | Each English UI object has a Bangla twin in `lib/bn/` (`SHELL_BN` for `lib/ui.ts`, `HOME_UI_BN`, `DASHBOARD_UI_BN`, `LINUX_UI_BN`, …). `Bn<T>` (`lib/bn.ts`) gives the twin the same keys, so a missing key is a compile error. `tests/i18n.test.ts` checks the shape at run time. |
| Text nodes | `<T en={…} bn={…} />` (`components/i18n/T.tsx`) renders both spans. CSS shows one from `html[data-voice-default]`, so there is no flash and it works in server components. |
| Attributes | `useBn(en, bn)` (`components/i18n/useBn.ts`) for `aria-label`, `title`, `alt`, and `confirm()`. Client components only. A server component uses `aria-labelledby` that points to an `sr-only` `<T>`. |
| To add UI text | Add the English string to its `*_UI` object, add the Bangla string to the twin in `lib/bn/`, and render it with `<T>`. |

### How to write voices

Put `<Voices>` directly after the `##` heading:

```mdx
## How a load balancer picks a server

<Voices>
<Technical>

The current text, cites, code blocks, callouts, and ### headings.

</Technical>
<Layman>

Plain English text.

</Layman>
<Bangla>

বাংলা ব্যাখ্যা।

</Bangla>
</Voices>
```

| Rule | `npm test` checks it |
|---|---|
| `<Voices>` is the first element after a `##` heading and ends before the next `##` heading. | yes |
| A block has one `<Technical>`, one `<Layman>`, and one `<Bangla>`, in this order. | yes |
| Inside `<Voices>`, each non-blank line is in a panel. Only blank lines can come between the panels. | yes |
| No non-blank line comes after `</Voices>` and before the next `##` heading or the end of the file. A `##` section has one `<Voices>` block at most. | yes |
| A `<Layman>` or `<Bangla>` body is not empty (not only blank lines). | yes |
| Each tag is alone on its line at column 0. A blank line follows each opening panel tag and comes before each closing panel tag. | yes |
| `<Layman>` and `<Bangla>` have no Markdown heading, so the "On this page" outline does not change. A `###` heading in `<Technical>` is allowed. | yes |
| A `<Cite n>` in `<Layman>` or `<Bangla>` uses only an `n` that `<Technical>` of the same block cites. | yes |
| `<Layman>` and `<Bangla>` give no fact that `<Technical>` does not give. | no (fact check) |
| Commands, flags, paths, product names, and common technical terms stay in English in the Bangla text. | no (fact check) |
| Course pages only: the Bangla text follows the term style of systemdesignbangla.com. Common concept words are in Bangla letters (for example ক্যাশ, ডেটাবেস, লোড ব্যালেন্সার, মাইক্রোসার্ভিস). Acronyms, protocol, product, command, flag, path, and code names stay in English (DNS, TCP, SQL, Redis, `EXPIRE`). The reader is addressed with আপনি. This is a style rule only: no text of that site is copied. | no (fact check) |

`tests/voice-source.test.ts` checks every `content/**/*.mdx` file with `lib/voice-source.ts`. It is a line scan, not an MDX parser. It ignores tags in fenced code blocks and in inline code. The rules about text outside a panel and after `</Voices>` also ignore the lines of fenced code blocks. A section without `<Voices>` renders as before.

### How it works

| Part | Detail |
|---|---|
| `lib/voice.ts` | The types, the labels, `VOICE_STORAGE_KEY` (`voice`), `resolveVoiceDefault`, `voiceOrder`, `isPanelVisible`, `switchStyle` (the colors of the selected switcher button), and `VOICE_INIT_SCRIPT`. Only the stored value `bangla` gives Bangla. Any other value gives Technical. |
| `components/voice/useVoiceDefault.ts` | A `useSyncExternalStore` hook on `data-voice-default` of `<html>`. A `storage` event of another tab updates it. `setVoiceDefault` sets the attribute and saves the value. A blocked storage does not throw. |
| `components/voice/Voices.tsx`, `VoiceSwitcher.tsx`, `panels.tsx` | `Voices` holds the state of one section. `Technical`, `Layman`, and `Bangla` render `<div data-panel="…">`. `Layman` and `Bangla` add the tinted box and the title. `Bangla` adds `lang="bn"`. |
| `components/layout/VoiceToggle.tsx`, `InstallButton.tsx` | The 2 header buttons. |
| No flash | `VOICE_INIT_SCRIPT` runs in `<head>` after the theme script and sets `data-voice-default` before the first paint. Before hydration, a `.voices` wrapper has no `data-voice`. The CSS then shows the panel of `html[data-voice-default]`. After hydration, the wrapper has `data-voice` and the CSS uses it. The switcher is hidden (`visibility`) until the wrapper has `data-voice`. `tests/voice.test.ts` checks that the script and `resolveVoiceDefault` agree. |
| Motion | A panel that the reader selects fades in (180 ms). The site default shows with no motion. The fade is off if the reader asks for reduced motion. |
| Reveal | If the URL hash, or a click on an in-page `#` link, targets an element in a hidden panel, the section shows that panel and the page scrolls to the element. A target in a visible panel does nothing. |
| "On this page" | `SectionNav` skips a heading with no box (`getClientRects().length === 0`), so a heading in a hidden panel is never current. |
| Search | `lib/search.ts` removes the JSX tags and keeps the text. The Layman and Bangla texts go into the doc of their `##` section. |

### Fact check

Every page with voices has a report: `docs/superpowers/research/<group>-<slug>.voices.factcheck.md`. An agent that did not write the voices checks them against the Technical text of the same section. The report ends with `Open FAILs: N`. A page with voices is done only when `N` is 0. This is separate from the report of the Technical text.

### No voices

| Part | Why |
|---|---|
| `## Key words` sections and the `## Sources` area | The terms and the source list stay as they are. |
| `architecture/practice` | The page is a question list. |
| The `Permissions Cheat Sheet` topic of Linux stage 4 | It keeps its original wording. |

Case Study pages (parts 18–23): the voices restate the workspace facts of the Technical text. They add no new workspace fact.

## How to Add a Page

Do all three steps. Each step is required.

1. Create `content/<group>/<slug>.mdx` from the page template below.
2. Add the page to its group in `lib/nav.ts` (`slug`, `title` for the drawer, `description` and `tagline` for the home page). The position in the list sets the part number. The part count in the footer and in the search dialog comes from this list.
3. Add `"/<group>/<slug>/": "/<group>/<slug>/"` to `scripts/route-map.json`. The map is an identity map: each key is the same route as its value. `check_routes.py`, `check_outline.py`, and `check_sources.py` read only the values in this file. A page that is not in it gets no check.

### Page template

The order is fixed:

```mdx
export const metadata = { title: '…', description: '…' }
export const page = {
  updated: '2026-10-10',
  sources: [
    { title: '…', publisher: '…', url: 'https://…', accessed: '2026-10-10' },
  ],
}

# Title

Lede paragraph (one paragraph).

<PageMeta />

## First section
```

- `metadata` sets the HTML title and description.
- `page.updated` is a `YYYY-MM-DD` date. The meta line shows it as `updated Oct 2026`.
- `page.sources` is the numbered source list at the end of the page. Source k gets the id `src-k`.
- `<PageMeta />` renders the meta line: `N sections · N sources · updated Mon YYYY · Suggest an edit`. The edit link is `editUrl(group, slug)`, the MDX file on GitHub.
- The first paragraph after the `#` heading gets the lede style.

Then run `npm test`, `npm run build`, and the checks below.

| Mistake | What catches it |
|---|---|
| The MDX file is missing, or the `.mdx` file is not in `lib/nav.ts` | `npm test` (`PAGES lists exactly the content/**/*.mdx files`). A nav entry without a file also fails `npm run build`. |
| The MDX file has no `export const metadata` | `npm test` (`every MDX file exports its metadata`) |
| No `page.sources`, no `<PageMeta />`, a `<Cite n>` without a source, or a source without a cite | `check_sources.py out` |
| The route is not in `scripts/route-map.json` | `npm test` (`every href is /<group>/<page>/ and is a known route`) |
| A route in `scripts/route-map.json` has no built page | `check_routes.py out` |

To add a group, add it to `SOURCE` in `lib/nav.ts` and to the `GroupSlug` type, and create the folder in `content/`.

## MDX Components

`mdx-components.tsx` registers the components. MDX files use them without an import.

| Component | Use |
|---|---|
| `Callout` (`type`: `note` default, `tip`, `warning`, `danger`; optional `title`) | A note box with an icon: 3 px left border and an 8 % tint of the type color. `info` is an alias of `note`, and `error` is an alias of `danger`. |
| `CardGrid` (`cols`: 1–4, default 2) | A grid of cards. One column on phones. |
| `InfoCard` (`title`, optional `subtitle`, optional `tone`: `good` or `bad`) | A raised card with a Markdown body. `tone="good"` adds a green top border and a ✓; `tone="bad"` adds a red top border and a ✗. Screen readers hear "Do" or "Don't". |
| `Cite` (`n`) | A small `[n]` link to source n of `page.sources` (`#src-n`). Put it after the claim that it supports. |
| `Version` (`of`: `notes` or `istqb`) | One version of a Fundamentals topic. See "Fundamentals Module". |
| `MdxImage` (`src`, `alt`), or a Markdown image | An image from `public/`, with the base path added. A text link below the image opens the file in full size. |
| The Fundamentals diagrams | Inline SVG diagrams with a visible description. See "Fundamentals Module". |
| Fenced code block | Shiki colors, a language label (hidden for `text`) and a Copy button |
| GFM table | A raised box that scrolls sideways. Below 640 px, each row is a card, and each cell shows its column name above its value. |
| `MdxImage` (`src`, `alt`, optional `width` and `height`), also the mapping for Markdown images `![alt](/images/…)` | An `<img>` with lazy loading and a text link "Open the image in full size" below it. It adds the base path to `src` and to the link, because a plain `<img>` does not get it. Give `width` and `height` (use `<MdxImage … />`) so that the page does not jump while the image loads. Write `alt` as a short description and add a text description in a `<details>` block for a dense image. |

Code blocks stay dark in both themes. Use fenced code blocks for code, prompts, diagrams and trees.

MDX gotcha: when a component body ends in a Markdown list, put the closing tag at column 0. An indented closing tag becomes part of the last list item and breaks the body. This applies to `Callout`, `InfoCard`, and `<details>`.

Do not use inline `style={{...}}`, Bootstrap, Font Awesome or icon packages in content.

Use the Callout types this way: `note` for background, `tip` for a suggestion or an example, `warning` for a common mistake, `danger` for a risk of data loss or a security risk. If a callout gives the tutorial's own advice and not a fact from a source, say so in the callout.

## Content Workflow

Every factual claim on a page has a source. A claim is a version, a command, a flag, a path, a price, a limit, or a behavior.

| Rule | Detail |
|---|---|
| Source order | Official docs first: `code.claude.com/docs`, `platform.claude.com/docs`, `modelcontextprotocol.io`, `playwright.dev`, and the GitHub repos of the named tools. Then primary sources: vendor docs, ISTQB/ASTQB. No blogs, forums, or AI summaries. |
| Cite | Each changed or new claim has a `<Cite n={k} />` to an entry in that page's `page.sources`. |
| Case study | Facts about the private practice workspace (parts 18–23) have no `<Cite>`. A separate agent checks them against the workspace files. See section 5 of the case study spec. |
| Research notes | `docs/superpowers/research/<group>-<slug>.md`: the sources (S1, S2, …) and a claims table with quotes. Write it before the page. |
| Fact-check report | `docs/superpowers/research/<group>-<slug>.factcheck.md`: one row per claim with the cite, a PASS or FAIL verdict, and the quote. It ends with `Open FAILs: N`. |
| Done | A page is done only when its fact-check report ends with `Open FAILs: 0`. |

To change a page:

1. Update the research notes with the new source and quote.
2. Change the MDX. Add or update the `<Cite n>` and the `page.sources` entry. Set `page.updated`.
3. Fact-check each changed claim against its source. Fix each FAIL and check again.
4. Run `npm run build` and `python3 scripts/check_sources.py out`.

## Design

- The look follows https://www.systemdesignbangla.com/ (a style reference only; no CSS, text, or art is copied). The design is `docs/superpowers/specs/2026-10-21-reference-redesign-design.md`.
- The tokens are CSS variables on `:root` in `app/globals.css`: dark (the server default) and light. Light is warm paper (`#faf7f2`) with white cards; dark is blue-black (`#0e1115`). The accent is teal, `--accent-2` is amber. `@theme inline` maps them to Tailwind colors (`bg-bg-raised`, `text-text-dim`, `text-accent`, `text-accent-2`, `bg-accent-soft`, …) and the shadows `--raise-sm/md/lg` to `shadow-sm/md/lg`.
- Breakpoints: `nav` (75rem) shows the top nav and hides the menu button; `wide` (90rem) shows the label of the search trigger.
- `.btn`, `.btn-primary`, `.btn-outline`, `.btn-ghost`, `.btn-sm`, `.hero-grid-bg`, and `.hero-mark` are in `app/globals.css`.
- The theme is on `<html data-theme>`. The server HTML has `data-theme="dark"`. The init script in `lib/theme.ts` runs in `<head>` before the first paint: a saved choice (`localStorage` key `theme`) wins, else it follows `prefers-color-scheme`. `tests/theme.test.ts` checks that the script and `resolveTheme` agree.
- Fonts come from `next/font/google`: Crimson Pro (display, `--font-crimson`), Inter (body), JetBrains Mono (labels).
- Voices: the tokens `--voice-layman` and `--voice-bangla` (both themes, Tailwind `voice-layman` and `voice-bangla`) color the extra panels and the switcher. Noto Sans Bengali (`preload: false`, variable `--font-noto-bengali`) comes after each Latin font in the font stacks. The browser loads it when Bengali text first shows. The header button shows `বাংলা` on every page, so every reader downloads the font one time. `preload: false` prevents a preload warning and a high-priority fetch. The voice head script (`VOICE_INIT_SCRIPT`) runs after the theme script and sets `data-voice-default` on `<html>`. The server HTML has `data-voice-default="technical"`.
- Every text color has 4.5:1 contrast or more on `--bg`, `--bg-raised`, and `--bg-raised-2` in both themes. `tests/contrast.test.ts` checks this from `app/globals.css`.

## PWA

The site installs as an app and is offline first.

- The service worker caches all 151 routes at install, with the build files and the `/images/` files that their HTML uses (`assetPattern`).
- Pages, RSC payloads, and the search index use stale-while-revalidate: the cache answers first, and the worker updates the cache from the network in the background. The cache key has no query string. Files in `/_next/static/` use cache first, because their names have a content hash.
- Offline, a page that is not in the cache gets the 404 page.
- Each build writes a new cache version into `/sw.js`. The browser finds the new `/sw.js` on the next visit. Its install caches all pages again, and it deletes the old caches.
- `tests/pwa.test.ts` runs the worker source with a fake `caches` and `fetch`.
- Only production builds register the service worker. `npm run dev` has none. To test it, run `npm run build` and serve `out/`.
- A new page in `lib/nav.ts`, a new stage in `lib/linux/stages.ts`, a new chapter in `lib/fundamentals/chapters.ts`, or a new page of a flat module in `lib/modules/registry.ts` goes into the precache list automatically.

## Environment Variables

Both variables are optional. The build passes without them. `lib/site.ts` reads them.

| Variable | Effect |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Sets `metadataBase`, canonical URLs, Open Graph data, `sitemap.xml` entries, and the `robots.txt` sitemap line. |
| `NEXT_PUBLIC_GA_ID` | Adds Google Analytics. |

## Checks

| Command | Purpose |
|---|---|
| `npm test` | Unit tests for `lib/home.ts`, `lib/nav.ts`, `lib/outline.ts`, `lib/page.ts`, `lib/pwa.ts`, `lib/sitemap.ts`, `lib/reading.ts`, `lib/search.ts`, `lib/theme.ts`, `lib/ui.ts`, the Linux data (`tests/linux-data.test.ts`) and progress (`tests/linux-progress.test.ts`), the Fundamentals data, version logic, and chapter structure (`tests/fundamentals-*.test.ts`), the System Design data, search, and precache (`tests/system-design.test.ts`), the Architecture data, images, practice questions, search, and precache (`tests/architecture.test.ts`), the Course data, page shape, search, and precache (`tests/course.test.ts`), the k6 data, page shape, search, and precache (`tests/k6.test.ts`), the voice helpers and head script (`tests/voice.test.ts`), the authoring rules of `<Voices>` in every MDX file (`tests/voice-source.test.ts`), the contents page and stats (`tests/contents.test.ts`), the top nav (`tests/header-nav.test.ts`), the token contrast (`tests/contrast.test.ts`), and the page and route-map lists |
| `python3 -m unittest scripts/test_checks.py` | Unit tests of the Python checks |
| `python3 -m unittest scripts/test_linux_scripts.py` | Unit tests of `linux_fetch.py` and `linux_overlap.py` |
| `python3 scripts/check_routes.py out` | Lists each route from `route-map.json`, `linux-route-map.json`, `system-design-route-map.json`, `fundamentals-route-map.json`, `architecture-route-map.json`, `course-route-map.json`, `k6-route-map.json`, `contents-route-map.json`, `dashboard-route-map.json`, and `interview-route-map.json` that has no page in `out/` |
| `python3 scripts/check_links.py out` | Lists broken internal links and assets |
| `python3 scripts/check_outline.py out` | Checks that each "On this page" link points to an element id |
| `python3 scripts/check_sources.py out` | Checks each tutorial page, each Linux stage page, each System Design case page, each Fundamentals chapter page, each Architecture page, each Course page, and each k6 page: one meta line with `updated Mon YYYY`, 1 or more sources, a `#src-k` target for each `[k]` cite, a cite for each source, and `https://` source links |
| `scripts/compare_text.py` | Historical record of the phase-3 migration. It cannot run now. See below. |

The Python scripts need only Python 3. Run the `out` checks after `npm run build`.

Run `check_sources.py` without flags. The normal command is `python3 scripts/check_sources.py out`, and it must print `OK 141 pages checked, 0 skipped`. The `--allow-missing` flag skips a page that has no meta line and no sources. It exists for skeleton pages during a rewrite and for the unit tests. Do not use it for a release.

`compare_text.py` is a historical record of the phase-3 migration. It compared the visible text of the old build (`.baseline/out`) with the new build. `.baseline/out` is deleted, and the old routes no longer exist, so the script cannot run now.

## Docs

- `docs/superpowers/specs/2026-10-09-editorial-redesign-design.md` is the design of the editorial shell (phase 3).
- `docs/superpowers/plans/2026-10-09-editorial-redesign.md` is its plan.
- `docs/superpowers/specs/2026-10-09-nextra-reorganization-design.md` and `docs/superpowers/plans/2026-10-09-nextra-reorganization.md` are the earlier migration to the grouped URLs.
- `docs/superpowers/audits/2026-10-09-content-audit.md` lists the outdated claims in the old tutorial text. Its "Resolution (2026-10-10)" section maps each High and Med row to the new page that fixes it.
- `docs/superpowers/specs/2026-10-10-content-refresh-design.md` and `docs/superpowers/plans/2026-10-10-content-refresh.md` are phase 2 (content refresh): the 17 pages, the cite and sources model, and the reading aids.
- `docs/superpowers/specs/2026-10-10-case-study-design.md` and `docs/superpowers/plans/2026-10-10-case-study.md` are the Case Study group (parts 18–23). Its spec section 3 has the publishing rules for facts from the private practice workspace. Section 5 says how those facts are checked: against the workspace files, with no `<Cite>`.
- `docs/superpowers/research/` holds the research notes and the fact-check reports of each page.
