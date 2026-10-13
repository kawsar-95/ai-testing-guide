# Interview Prep module — design

Date: 2026-10-13. Status: draft, waiting for the owner's review.

## 1. Goal

Add an SQA interview-preparation module to this site, under `/prep/`. A reader browses 13 areas, marks items as done, and sees progress. The module has the same kind of study experience as https://prep.galib.dev/ ("SQA Job Cracker"). It is a React module inside the existing Next.js app. It is not a separate app.

## 2. Decisions

| Topic | Decision |
|---|---|
| "REA" | Read as React. The app already uses React 19 and Next.js 16. |
| Approach | A: a data-driven `/prep/` section in this app. Typed TS data, static pages, client components for progress. Approaches B (MDX pages in `lib/nav.ts`) and C (separate Vite app) are rejected. |
| Content source | All content is original. No text, wording, or item order is copied from prep.galib.dev. The owner has no permission from its author, and the site marks its advanced items as Pro-only. |
| First version | All 13 areas, about 8 items for each area (about 100 items). |
| Persistence | `localStorage` only. No backend. |

Out of scope for version 1: sign-in, a Pro tier, AI explanations, sync between devices, quiz scores over time.

## 3. Routes

| Route | Page |
|---|---|
| `/prep/` | Module home: overall progress and one card for each area. |
| `/prep/<area>/` | One page for each area. |

The 13 area slugs: `interview-prep`, `intern`, `junior`, `mid-level`, `senior`, `leadership`, `programming-problems`, `practical-tasks`, `tools-mastery`, `hands-on-automation`, `hr-soft-skills`, `realistic-scenarios`, `mcq-test`.

- Files: `app/(site)/prep/page.tsx` and `app/(site)/prep/[area]/page.tsx`. A fixed `prep` folder wins over the dynamic `[group]` route. The 23 tutorial routes do not change.
- The site grows from 24 to 38 routes (24 + 1 + 13).
- `dynamicParams = false`. Static params come from `lib/prep/areas.ts`. An unknown area gives a 404.
- Write internal links as `/prep/<area>/`, never with the repo name (base-path rule of the repo).

## 4. Data

`lib/prep/areas.ts` is the one ordered list of areas: `slug`, `title`, `description`, `kind`, `href`.

`content/prep/<area>.ts` exports the items of one area. There are 3 kinds of item:

| Kind | Fields | Used by |
|---|---|---|
| `qa` | `id`, `question`, `template`, `example`, `behind`, optional `source` | Most areas |
| `task` | `id`, `title`, `details`, optional `source` | Practical Tasks, Interview Preparation |
| `mcq` | `id`, `question`, `options`, `answer` (index), `explanation`, `source` | MCQ Test |

- Each `id` is stable and unique across all areas. The format is `<area-slug>-NNN` (3 digits, from `001`), for example `junior-007`. Progress uses these ids.

Item kind of each area:

| Kind | Areas |
|---|---|
| `task` | `interview-prep`, `practical-tasks`, `hands-on-automation` |
| `mcq` | `mcq-test` |
| `qa` | the other 9 areas: `intern`, `junior`, `mid-level`, `senior`, `leadership`, `programming-problems`, `tools-mastery`, `hr-soft-skills`, `realistic-scenarios` |

Minimum size: 8 items for each area, and 12 for `mcq-test`.
- A `source` is an `https://` link to an official source (for example ISTQB or tool docs).

## 5. Progress

- `lib/prep/progress.ts`: pure functions, no React. They are `parseProgress`, `toggleDone`, `countDone(ids, done)` and `percent`. Bad or missing data gives an empty list.
- One `localStorage` key: `prep-progress`. The value is a JSON list of done ids. Every read and write is inside `try/catch` (private mode, blocked storage).
- `components/prep/useProgress.ts`: a hook on `useSyncExternalStore`. It listens to the `storage` event, so two tabs stay in step. The server render shows 0 done. The client updates after hydration, so no hydration mismatch occurs.

## 6. Components (`components/prep/`)

| Component | Purpose |
|---|---|
| `ProgressSummary` | Progress bar with "Done N · Remaining M". Used on the module home and on each area page. |
| `AreaCard` | One card for each area on `/prep/`, with its own count. |
| `QaTable`, `TaskTable` | Tables with a done checkbox in each row. On phones, each row becomes a stacked card. |
| `McqQuiz` | One question at a time. After the reader picks an option, it shows the right answer and the explanation. A right answer marks the item done. |
| `PrepSidebarList` | The areas, each with a small done count. |

Rules: use the existing tokens and Tailwind classes. No inline styles. No icon packages. Every text color keeps 4.5:1 contrast in both themes. Checkboxes and quiz options work with the keyboard and have accessible names.

## 7. Shell integration

- `SiteShell` stays shared. The desktop sidebar and the mobile drawer show `PrepSidebarList` when the path starts with `/prep/`. They show the tutorial parts everywhere else.
- The header gets one link, "Interview Prep".
- Tutorial numbering, prev/next, and the home contents do not change.
- The new strings go into `lib/ui.ts` (or a new `lib/prep/ui.ts` if the file grows too large).

## 8. Content rules

- The owner writes or approves all content. Claude writes the first draft.
- A factual item (every `mcq` item, and any `qa` item that states a fact) has a `source`. Advice items need none.
- Each area has a research note: `docs/superpowers/research/prep-<area>.md`, with sources and a claims table.
- A fact-check report `docs/superpowers/research/prep-<area>.factcheck.md` covers the factual items. An area is done when the report ends with `Open FAILs: 0`.
- The module home page has no credit to prep.galib.dev, because it reuses nothing from it.

## 9. Search and PWA

- `lib/search.ts` gets `buildPrepSearchDocs`: one doc for each item, with `part: null` and `group: "prep"`. `/search-index.json` adds them. A prep hit shows the area title. A tutorial hit shows the part label. A hit links to `/prep/<area>/#<item-id>`, so each item row has `id={item.id}`. The quiz opens the question that the URL hash names.
- `app/sitemap.ts` adds the 14 prep routes.
- `lib/pwa.ts` adds the 14 prep routes to the precache list, so the module works offline.

## 10. Checks

- `scripts/route-map.json` stays tutorial-only. `check_sources.py` would fail on prep pages, because they have no meta line and no sources list.
- New file `scripts/prep-route-map.json` (identity map of the 14 prep routes). `check_routes.py` reads both maps. `check_links.py` scans the whole build and needs no change. `check_outline.py` and `check_sources.py` read only the tutorial map. `check_sources.py` must still print `OK 23 pages checked, 0 skipped`.

## 11. Testing

`node --test`, no new dependencies:

- `tests/prep-progress.test.ts`: parse, toggle, count and percent, with bad input.
- `tests/prep-data.test.ts`: area slugs are unique and match the files in `content/prep/`. Item ids are unique. Each `mcq` answer index exists. Each `qa` item has all 4 text fields. Each factual item has an `https://` source.
- Extended tests: `pwa` (prep routes in the precache), `search` (prep docs), `ui` (new strings).
- Final: `npm test`, `npm run build`, then `check_routes`, `check_links`, `check_outline`, `check_sources` on `out/`. Then a browser test: checkbox, quiz, dark and light theme, a phone width, and offline after install.

## 12. Docs to update

- `CLAUDE.md`: structure and checks tables, route count 24 → 38, the prep rules.
- `README.md`: the module and the counts.

## 13. Risks

| Risk | Handling |
|---|---|
| The content looks too close to the original | Original wording, original items, no copy of the order. The owner reviews. |
| Hydration mismatch from `localStorage` | Server render shows 0 done. The hook updates after mount. |
| A prep route fails a tutorial check | Separate route map (section 10). |
| About 100 factual items need sources | Only factual items need them. Research notes come before the content. |
