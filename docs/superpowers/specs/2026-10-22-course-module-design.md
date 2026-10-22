# System Design Course Module: Design

Date: 2026-10-22. Status: design approved by the owner in chat. This is Project 2. Project 1 (the flat modules framework) is `docs/superpowers/specs/2026-10-22-flat-modules-design.md`, merged in PR #30.

## 1. Goal

A structured system design curriculum for testers at `/course/`. The topic order follows systemdesignbangla.com (`js/chapters.js`, read on 2026-10-22): 55 chapters in 6 parts (0 to 5). Only the topic names and the order are used. The text is the tutorial's own. No title, text, or art of the reference site is copied.

A topic that already has a page on this site is a `link` entry to that page. A reader can mark every topic done, also a link topic.

Success for Delivery 1: a reader opens `/course/`, sees Part 0 and Part 1 with 13 topics, reads the 7 new pages, follows the 6 links, and sees the progress of all 13 topics.

## 2. Deliveries

| Delivery | Parts | New pages | Links |
|---|---|---|---|
| 1 (this spec's plan) | Framework changes, the home, Part 0, Part 1 | 7 | 6 |
| 2 | Part 2: Databases and consistency (15 topics) | 14 | 1 |
| 3 | Part 3: System architecture (11 topics) | 8 | 3 |
| 4 | Part 4: Reliability and security (10 topics) | 9 | 1 |
| 5 | Part 5: Case studies and interview (6 topics) | 2 | 4 |

The site shows only the parts that are built. Each later delivery gets its own plan from this spec. It adds its entries, MDX files, routes, and research files.

## 3. Delivery 1 entries

| # | Part | Slug | Title | Kind | Target |
|---|---|---|---|---|---|
| 01 | 0 | `intro` | What Is System Design? | link | `/architecture/why-system-design/` |
| 02 | 1 | `ip` | IP Addresses | topic | |
| 03 | 1 | `osi` | The OSI Model | topic | |
| 04 | 1 | `tcp-udp` | TCP and UDP | topic | |
| 05 | 1 | `dns` | DNS | topic | |
| 06 | 1 | `load-balancing` | Load Balancing | link | `/architecture/load-balancer/` |
| 07 | 1 | `clustering` | Clustering | topic | |
| 08 | 1 | `caching` | Caching | link | `/architecture/caching/` |
| 09 | 1 | `cdn` | CDN | link | `/architecture/cdn/` |
| 10 | 1 | `proxy` | Forward and Reverse Proxies | topic | |
| 11 | 1 | `availability` | Availability | topic | |
| 12 | 1 | `scalability` | Scalability | link | `/architecture/horizontal-scaling/` |
| 13 | 1 | `storage` | Storage | link | `/architecture/object-storage/` |

Part titles: 0 "Getting started", 1 "Networking and basics", 2 "Databases and consistency", 3 "System architecture", 4 "Reliability and security", 5 "Case studies and interview".

## 4. Framework changes

| Change | Detail |
|---|---|
| `part` | `FlatEntry` gets an optional `part?: number`. `FlatModuleDef` gets an optional `parts?: readonly { num: number; title: string }[]`. If a module has `parts`, every entry must have a `part` that is in `parts`, and the parts of the entries must not go down. `defineFlatModule` throws otherwise. |
| Grouping | With `parts`, `FlatModuleHome` and `FlatSidebarList` show one heading for each part that has entries, then its items. Without `parts`, the output is the same as today (the HTML compare of Architecture and System Design stays at 0 differences). |
| Progress of link items | `lessonIds` takes the slugs of the `topic` and `link` items of `items`. Architecture and System Design have no link items, so their ids do not change. |
| Toggle for a link item | With `progress`, a link item on the home page and in the sidebar has a small toggle button (`aria-pressed`, the text from `ui.markDone` / `ui.markedDone`) next to its link. A topic item keeps its `DoneMark`. |
| Counts | The home eyebrow count is the number of `topic` and `link` items. `MODULES.pages` (header dropdown, contents card, `CONTENT_PAGES`) stays the module's own pages only. |
| Prev/next | Unchanged: it skips link items. |
| Required progress strings | A `FlatModuleDef` with `progress` must have `overallLabel`, `summaryText`, `percentText`, `markDone`, `markedDone`, and `sidebarDone`. This is a type rule (a discriminated union) and a registry test. |
| `progressHook` | A test checks that 2 calls with the same module give the same hook. |

## 5. The module

| Part | Detail |
|---|---|
| Data | `lib/course/topics.ts`: `COURSE = defineFlatModule({ id: "course", label: "Course", searchGroup: "course", parts, entries, progress: { storageKey: "course-progress" }, ui: COURSE_UI })` and `type CourseSlug`. |
| Strings | `lib/course/ui.ts`: `siteTitle` and `heading` "System Design Course", `headerLink` "Course", item eyebrow `TOPIC NN · COURSE`, and a `sourceNote` that says the topic order follows systemdesignbangla.com and the text is the tutorial's own, with a cite for each fact. |
| Registry | `FLAT_MODULES = [SYSTEM_DESIGN, ARCHITECTURE, COURSE]`. The header nav, sitemap, precache, stats, contents, dashboard, and `PROGRESS_KEYS` (`course-progress` after `architecture-progress`) follow from it. |
| Routes | `app/(site)/course/page.tsx` and `app/(site)/course/[topic]/page.tsx`, thin, as in CLAUDE.md "Flat modules". `scripts/course-route-map.json` has `/course/` and the 7 page routes. Its name goes into the 3 Python check scripts. |
| Search | `...flatDocs(COURSE)` after Architecture in `app/search-index.json/route.ts`. |
| Hand-written text | `lib/ui.ts` and `lib/contents.ts` name the modules in prose. Add the course there. |
| Counts | Routes 88 → 96. Content pages 81 → 88. `check_sources.py` must print `OK 88 pages checked, 0 skipped`. Update the numbers in CLAUDE.md and in the tests that pin them. |

## 6. Page shape

Required `##` sections, in this order:

1. `## In plain words`
2. `## When you need it`
3. `## A real-life example`
4. `## Common mistakes`
5. `## What a tester can check` (a "Tutorial advice" callout with no cites)
6. `## Key words` (a table, always last)

Optional sections: `## How it works`, `## Trade-offs`, `## In an interview`. A page can add other `##` sections between the required ones. `npm test` checks that the 6 required sections are present and in this order, and that `## Key words` is last.

The page template of CLAUDE.md applies: `metadata`, `page.updated`, `page.sources`, the `#` title equal to the entry title, a lede, and `<PageMeta />`. No `<Voices>` in Delivery 1. The voices come in a later pass.

## 7. Content rules

| Rule | Detail |
|---|---|
| Sources | Official sources only: IETF RFCs (for example RFC 791 and RFC 8200 for IP, RFC 9293 and RFC 768 for TCP and UDP, RFC 1034 and RFC 1035 for DNS, RFC 9110 for proxies), ITU-T X.200 for the OSI model, MDN, vendor docs, and the Google SRE books. No blogs, no forums, no AI summaries, and nothing from the reference site. |
| Research notes | `docs/superpowers/research/course-<slug>.md`: the sources and a claims table with quotes. Written before the page. |
| Fact check | `docs/superpowers/research/course-<slug>.factcheck.md`, written by an agent that did not write the page. One row for each claim, a PASS or FAIL verdict, and the quote. It ends with `Open FAILs: N`. |
| Done | A page is done only when its report ends with `Open FAILs: 0`. |
| Readers | Testers. Plain words. The tester tips and the examples are the tutorial's own text and say so. |

## 8. Tests

- `tests/course.test.ts`: the 13 entries in order with their parts and kinds; the 6 link targets are existing routes; one MDX file for each `topic`; the route map; the page shape of section 6; `lessonIds` has 13 ids; the precache and the search docs include the course.
- `tests/flat-module.test.ts`: the `part` validation (missing part, unknown part, a part that goes down), grouping does not change modules without `parts`, the required progress strings, and the `progressHook` cache.
- Updated: `header-nav`, `contents`, `dashboard`, `reading-state`, and `sitemap` tests for the new module and counts.
- The HTML compare of Project 1 is not a gate here, because the header of every page gets the Course item. Instead, the framework changes (section 4) are a separate commit. Before the course is added to the registry, that commit must give 0 differences against a new baseline from `main`.

## 9. Out of scope

The voices of the course pages, Parts 2 to 5 (later deliveries), images and diagrams, and a practice page.
