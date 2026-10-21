# Chapter Page and Dashboard: Design

Date: 2026-10-21. Status: approved by the owner. Project 1 of 4 of the full revamp in the style of https://www.systemdesignbangla.com/.

## 1. The full revamp

| Order | Project | Spec |
|---|---|---|
| 1 | Chapter page (left list, pills, Bookmark and Mark as read) and Dashboard | This file |
| 2 | Bangla menus and labels | Later |
| 3 | Interview prep, Author, and Support pages | Later |
| 4 | A quiz and a summary box on every page | Later, one module at a time, with research notes and fact-check reports |

The reference design (`2026-10-21-reference-redesign-design.md`) removed the sidebar. That was a wrong reading of the reference: its chapter pages have a left chapter list. This project brings the list back in the new style.

## 2. Goal

Every content page, 81 in all (the 23 tutorial pages, the 12 Linux stages, the 11 Fundamentals chapters, the 15 System Design cases, the 19 Architecture topics, and the practice page) gets the chapter layout of the reference. A new `/dashboard/` page shows the reader's progress. All data stays in the browser.

## 3. Storage

The existing store (`createUseProgress` in `components/prep/useProgress.ts`, tested by `tests/progress.test.ts`) holds a list of ids under one `localStorage` key. Three new keys:

| Key | Hook | Content |
|---|---|---|
| `page-read` | `usePageRead` | The routes of the pages that the reader marked as read |
| `page-bookmarks` | `useBookmarks` | The routes of the bookmarked pages |
| `last-page` | `useLastPage` | One route: the last content page that the reader opened |

The ids are routes with a trailing slash (`/extend/hooks/`), so a list item links to its page with no lookup table. `last-page` is a plain string, not a list. Blocked storage gives empty values and no error, as the existing store does.

The list of the content pages is `CONTENT_PAGES` in a new `lib/reading-state.ts`: route, title, and module of each of the 81 content pages, from `lib/nav.ts` and the module data files. It drives the Dashboard and the "of 81" count.

## 4. Chapter page layout

### 4.1 Columns

| Width | Columns |
|---|---|
| Below 820 px | The text only. The "Contents" button and the drawer stay. |
| 820 px to 1099 px | The left list (240 px) and the text |
| 1100 px and wider | The left list (240 px), the text, and "On this page" (280 px) |

The gap is 48 px and the layout is at most 1400 px wide. The text column keeps its reading width (720 px at most). The left list is `NavList` with the current path, sticky under the header (`top: 5rem`, `height: calc(100vh - 6rem)`, its own scroll). It scrolls the current page into view, as the drawer does. "On this page" is the existing `SectionNav`.

One shared component, `ChapterLayout` (`components/content/ChapterLayout.tsx`), renders the three columns. The 5 page templates use it, so the layout is in one place. From 820 px, the "Contents" button hides, because the list is visible.

### 4.2 Pills

Under the eyebrow and the title, one row of pills:

- The eyebrow text of the page (for example `PART 12 · EXTEND` or `STAGE 03`), as now.
- `📖 N min read`.

`readingMinutes(source: string): number` in `lib/reading-time.ts` counts the words of the MDX source at build time:

- It removes the frontmatter exports, code fences, JSX tags, and Markdown syntax.
- It counts only the Technical panel of a `<Voices>` block. It does not count the `<Layman>` and `<Bangla>` panels.
- In Fundamentals, it counts only the `<Version of="istqb">` blocks.
- The value is the word count divided by 200, rounded up, and 1 at least.

### 4.3 Action buttons

Under the pills, two buttons (`.btn .btn-outline .btn-sm`):

| Button | Off | On |
|---|---|---|
| Bookmark | `🔖 Bookmark` | `🔖 Bookmarked` |
| Mark as read | `✓ Mark as read` | `✓ Read` |

Each button is a toggle with `aria-pressed`. On a page, the buttons use the route of the page. The server HTML renders both off. The buttons are on all 81 content pages. The topic checklists of Linux, Fundamentals, and Architecture do not change, and they are separate from "Mark as read".

### 4.4 Last page

Each content page saves its route to `last-page` when it mounts.

## 5. Dashboard

A new route `app/(site)/dashboard/page.tsx` (`components/pages/DashboardPage.tsx`). The top nav gets a "Dashboard" link after "Contents". The site then has 88 routes. The sitemap, the precache, a new `scripts/dashboard-route-map.json`, `check_routes.py`, and the route counts in the tests and `CLAUDE.md` change with it.

Sections, in order:

1. **Title block** with two buttons: Export and Reset.
2. **5 stat cards:** pages read (`N / 81`), bookmarks (`N`), and the topic progress of Linux, Fundamentals, and Architecture (the same counts as their home pages).
3. **Continue reading:** a card with the title of `last-page` and a link to it. If `last-page` is empty or not a known route, the card links to the first tutorial page with the text "Start reading".
4. **Bookmarks:** a list of the bookmarked pages, with their module, newest first. An empty list shows a one-line hint.
5. **Pages read:** the read pages grouped by module, each group with `N / total`.

### 5.1 Export

`exportProgress(storage): { version: 1; exported: string; data: Record<string, string | null> }` in `lib/reading-state.ts` reads these 6 keys:

- `page-read`
- `page-bookmarks`
- `last-page`
- `linux-progress`
- `fundamentals-progress`
- `architecture-progress`

The button downloads it as `progress-YYYY-MM-DD.json`. There is no import in this project.

### 5.2 Reset

Reset asks with `window.confirm`. On yes, it removes the 6 keys and updates every hook. The text says that the action cannot be undone.

## 6. Not in scope

- The quiz pill, the "Go to quiz" button, and the quiz score card (project 4).
- Bangla labels (project 2).
- Import of an exported file.
- Any change to the content or to the topic checklists.

## 7. Testing

| Check | Expectation |
|---|---|
| `tests/reading-time.test.ts` | `readingMinutes`: plain text, a code fence (not counted), a `<Voices>` block (only Technical counted), a Fundamentals `<Version>` pair (only `istqb` counted), and the minimum of 1 |
| `tests/reading-state.test.ts` | `CONTENT_PAGES` has 81 unique routes, all in `sitemapPaths()`. `exportProgress` with a fake storage returns the 6 keys and `version: 1`. The 3 new key names. |
| `tests/contents.test.ts` and `tests/sitemap.test.ts` | `/dashboard/` is in the sitemap and the precache. The route count is 88. The dashboard route map is the identity map. |
| `tests/header-nav.test.ts` | The nav ends with Contents, then Dashboard. |
| Layout source test | `ChapterLayout` uses the 820 px and 1100 px breakpoints. The 5 page templates use `ChapterLayout`. |
| `npm run build` and the 4 Python checks | Pass. `check_sources.py out` prints `OK 81 pages checked, 0 skipped`. |
| Browser | 375, 900, and 1280 px in both themes. No horizontal scroll. The buttons toggle and survive a reload. The Dashboard reflects them. Blocked storage gives zeros and no error. |
