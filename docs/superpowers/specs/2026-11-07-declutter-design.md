# Declutter Pass: Design

Date: 2026-11-07. Status: implemented on the branch `refactor/declutter-ui`; waiting for the owner's review.

## 1. Goal

The site should feel as calm as https://www.systemdesignbangla.com/: a ruled list, one accent, and each thing said once.

The palette, the fonts, and the hero already follow the reference (see `2026-10-21-reference-redesign-design.md`). So "cluttered" here means density and repetition, not color. This pass changes structure and spacing only. It does not change the routes, the MDX content, the voices, the progress stores, or the meaning of any string.

## 2. What was wrong

The same lists and numbers appeared on many surfaces, and every index was a grid of boxes. Measured on the production build at 1440 px and 390 px, light theme:

| Finding | Before |
|---|---|
| The footer repeated the module list of the home page and Contents | 653 px high (phone 1158 px), a tinted band |
| `/contents/` was 3.6 times as long as the reference (3347 px) | 12120 px (phone 20060 px), 31 boxes |
| The home page had 37 boxes (6 of them inside another box) | The module list was also in the footer |
| The left list showed the tutorial and all 14 modules as lists that open | A long scroll of links to pages that the home page and Contents already list |
| The top of a content page had 6 stacked parts | An eyebrow, the lede, the meta line, the reading pill, two buttons with emoji, and a step bar |
| `/linux/` had an outlined chip for each command link | 260 outlined chips (the probe counted 206 boxes: it skips an element under 40 px wide) |
| The dashboard framed every block and said the same number up to three ways | A card for each block, and a bar, a fraction, a percent, and "N pages left" |

A **box** in these counts is an element with 3 or 4 painted border sides, or a fill that differs from its parent. One hairline is a rule, not a box.

## 3. Rules

1. An index is a ruled list or a ruled block, not a grid of boxes. A box is for content: code, a table, a callout, a voice panel, a reel poster, a command card.
2. A module, a page, or a count is not listed twice on one surface. The home page and `/contents/` list the modules, so the footer and the left list do not.
3. A content page has one meta row: reading time, sections, sources, update date, and the page tools at its right end. The "Suggest an edit" link sits with the Sources.
4. No emoji in the page chrome.
5. A progress readout shows one thing: a bar with a count, or a percent. Not all of them.
6. Colors and fonts do not change.

## 4. What changed

| Surface | After | Main files |
|---|---|---|
| Footer | One row: the brand, the source link, the copyright. 77 px (phone 113 px). | `components/layout/SiteFooter.tsx` |
| Left list and drawer | The current module only: its name (a link), "All modules", and one line for each page. The drawer mounts its list when it first opens (see section 7). | `components/layout/NavList.tsx`, `MobileNav.tsx`, `FlatSidebarList.tsx`, `LinuxSidebarList.tsx`, `FundamentalsSidebarList.tsx` |
| Top of a content page | One meta row with Bookmark and Mark as read at the right, and a one-line step bar. "Suggest an edit" moves to the heading row of Sources. | `components/content/MetaLine.tsx`, `ChapterTools.tsx`, `EditLink.tsx`, `SectionFocus.tsx`, `Sources.tsx`, `components/linux/SheetSources.tsx`, the four page templates |
| Home | "Why this guide" as a ruled list of text, then the tutorial groups and the modules as two ruled lists. The START HERE cards and the emoji tiles are gone; the hero button still opens the first page. | `components/pages/HomePage.tsx`, `lib/home.ts` |
| Contents | 20 closed rows (title, count, percent, tagline). A row opens to its pages. | `components/pages/ContentsPage.tsx` |
| Module homes | A quiet note and a flat readout in place of a callout and a progress card. | `components/modules/FlatModuleHome.tsx`, `components/pages/FundamentalsHome.tsx` |
| Progress readouts | One flat component, with a `compact` mode that is valid inside a `<summary>`. The stage line is a thin bar and a count, and the counts have one width so the bars end at the same x. | `components/prep/ProgressReadout.tsx`, `ProgressBar.tsx`, `components/linux/StageProgress.tsx` |
| Linux home | A ruled block for each stage, with its commands as plain links (each at least 24 px high). | `components/pages/LinuxHome.tsx` |
| Dashboard | Ruled blocks with no frames. A module row is a name, a bar, and `done / total`. | `components/pages/DashboardPage.tsx`, `lib/dashboard.ts`, `lib/bn/dashboard.ts` |

Strings that no longer have a place are removed from both dictionaries (`lib/ui.ts` and `lib/bn/shell.ts`: `footerSummary`, `footerColumns`, `footerContents`, `sidebarHome`; `lib/dashboard.ts` and `lib/bn/dashboard.ts`: `pagesLeft`). `navAllModules` is new in both.

## 5. Measured result

Production build, light theme. Height in px. Boxes with the metric of section 2.

| Page | Desktop height | Phone height | Desktop boxes (nested) |
|---|---|---|---|
| `/` | 4554 → 2689 | 9099 → 4367 | 37 → 2 (6 → 0) |
| `/contents/` | 12120 → 2328 | 20060 → 3176 | 31 → 0 (11 → 0) |
| `/linux/` | 2342 → 1563 | 5232 → 3559 | 206 → 1 (192 → 0) |
| `/dashboard/` | 2427 → 1740 | 3782 → 2571 | 12 → 7 (7 → 0) |
| `/course/dns/` | 3256 → 2515 | 4827 → 3672 | 13 → 12 (3 → 3) |
| `/linux/files/` | 3726 → 3132 | 9032 → 8010 | 21 → 20 (4 → 4) |
| `/devops/docker-basics/` | 2931 → 2258 | 5100 → 3988 | 34 → 33 (14 → 14) |
| `/course/` | 7742 → 5505 | 9154 → 6867 | 2 → 0 |
| `/ai-ml-testing/` | 7624 → 5693 | 10005 → 8521 | 2 → 0 |

On `/course/dns/` the first paragraph of the text starts at y = 521 instead of 670.

The boxes that remain on `/course/dns/`, `/linux/files/`, and `/devops/docker-basics/` are content or small controls, and they did not fall on purpose: reel posters (a poster and its play icon count as two boxes, one inside the other; they are 28 of the 33 on docker-basics), the 9 command cards of the Linux stage, a code block with its Copy button, the voice switch, the two page tools, and the current row of the left list. The 7 on `/dashboard/` are the Export button, the author photo, and the five author links. The 2 on `/` are the hero buttons, and the 1 on `/linux/` is its primary button.

## 6. Left alone

- **Command cards and reel posters.** They are content. Each command card is one unit with its own anchor, checkbox, and sources.
- **The voice switcher** under each `##` heading. It is a feature of the site.
- **The topic descriptions on module homes.** `/course/` and `/ai-ml-testing/` are still about 5.5k px (the reference Contents page is 3347 px) because each of their 47 to 55 topics has a one-line description. Shortening them means cutting text. That is the owner's call.

## 7. Pitfall: a list that depends on the path

`NavList` depends on the current path. The static export renders the 404 page once, but a host serves it at any missing path. A 404 at a module path such as `/architecture/typo/` hydrated a drawer list that did not match the HTML (React error #418). `MobileNav` now mounts the list on the first open, so the closed drawer adds no links and nothing can mismatch. A browser sweep of this site must include a 404 under a module path.

## 8. Verification

- `npx tsc --noEmit`, `npm test` (450 tests), `npm run build`, the four `scripts/check_*.py` checks on `out/`, and `python3 -m unittest scripts/test_checks.py` (34 tests): all pass.
- A Chromium check at 390 px and 1440 px, in light and dark, in English and Bangla: 18 pages and 4 module-path 404 pages, no horizontal overflow and no console or page errors. Keyboard, search, theme, language, the drawer, the step bar, and the page tools were exercised (46 checks).
- The dashboard, Linux home, Contents, Course home, and a Linux stage with seeded progress: the counts, a 100% row, the Continue target, and Reset (34 checks).
- The probe, the screenshots, and the checks live outside the repo.

## 9. Calls that the owner may want to reverse

- The footer is sparser than the three link columns of the reference.
- Going from one module to another takes one more click (through Contents or the home page), because the left list shows one module.
- `/contents/` hides the page titles until a row is open. Opening the first group by default is a small change.
- A Linux command is a plain link. The lede says to click it, and a hover underline shows it.
- The Bangla strings that are new (`navAllModules`, the home and contents titles and ledes) have not been read by a Bangla reader.
