# Software Testing Fundamentals module — design

Date: 2026-10-20. Status: draft, waiting for the owner's review.

## 1. Goal

Add a Software Testing Fundamentals module to this site, under `/fundamentals/`. The source is the owner's course notes "Software Testing Fundamental" (pasted in the session of 2026-10-20) and 10 images that go with them.

Each chapter has two versions of its text:

- **My notes**: the owner's text, with light fixes only.
- **ISTQB**: new plain-English text from the ISTQB Foundation Level syllabus and glossary, with citations.

A switch at the top of a chapter picks the version. The module also has a chapter of 50 interview questions with short answers.

The reader is a new QA engineer or a manual tester who moves to an SDET role.

## 2. Decisions

| Topic | Decision |
|---|---|
| Shape | A separate module like `/linux/`. The home page is the chapter list with progress. Each chapter has one MDX page. |
| Two versions | One page-level switch: "My notes" / "ISTQB". The choice is saved in the browser and applies to all chapters. The default is "ISTQB". |
| Owner's text | Kept. Fixes only for spelling and broken formatting (for example the doubled list under "Testing Objectives"). A line that conflicts with ISTQB is not changed. It gets a `warning` callout that links to the ISTQB version. |
| ISTQB text | New wording. Each claim has a `<Cite>`. A chapter is done only when its fact-check report ends with `Open FAILs: 0`. |
| Images | The owner's 10 images appear in the "My notes" version only. The ISTQB version uses redrawn diagrams (inline SVG) and GFM tables. |
| Interview questions | One chapter with all 50 questions and a short answer to each. One version only, so no switch. |
| Code | Copy the Linux module pattern. Reuse the shared progress store. Do not change the Linux components. |
| Branch | `feat/fundamentals-module`, from `chore/remove-prep-module` (not merged to `main` yet), in the worktree `…main.fund-wt`. No push and no PR until the owner asks. |

Out of scope for version 1: quizzes, practice tasks, sign-in, sync between devices, a print view.

## 3. Chapters

| # | Slug | Title | Topics from the notes |
|---|---|---|---|
| 1 | `basics` | Testing Basics | What testing is; why testing is necessary; quality and QA; testing objectives; misconceptions; QA skills; QA vs QC |
| 2 | `defects-principles` | Defects and the 7 Principles | Error, defect, bug, and failure; the 7 testing principles |
| 3 | `lifecycles` | SDLC, STLC and Agile | STLC; testing activities; SDLC; SDLC models; Agile; ATDD, TDD, and BDD |
| 4 | `test-types` | Test Types | Classification; static and dynamic testing; functional types; non-functional types |
| 5 | `levels` | Test Levels, Pyramid and Quadrants | Test levels; integration testing types; the test pyramid; the test quadrants |
| 6 | `black-box` | Black-Box Techniques | Test methods; equivalence partitioning; boundary value analysis; decision table testing; state transition testing |
| 7 | `white-box` | White-Box Techniques | Why white-box testing matters; statement, branch, and condition coverage; unit testing; integration testing; checklist |
| 8 | `experience-based` | Experience-Based Techniques | Error guessing; exploratory testing; checklist-based testing; generic checklists |
| 9 | `planning` | Planning and Estimation | Test plan; test strategy; test plan vs test strategy; effort estimation; acceptance criteria |
| 10 | `test-cases-bugs` | Test Cases, Bugs and Completion | Test case; bug report; bug life cycle; bug triage; entry and exit criteria; test completion; RTM |
| 11 | `interview` | Interview Questions | The 50 questions, one `##` topic each |

The exact topic titles of each chapter go in the implementation plan. A topic title is the text of its `##` heading.

## 4. Routes and data

| Route | Page |
|---|---|
| `/fundamentals/` | Home: overall progress, then each chapter with its topic checklist. |
| `/fundamentals/<chapter>/` | The text of one chapter. |

- Files: `app/(site)/fundamentals/page.tsx` and `app/(site)/fundamentals/[chapter]/page.tsx`. `dynamicParams = false`. The site grows from 37 to 49 routes (37 + 1 + 11).
- `lib/fundamentals/chapters.ts` is the one ordered list: chapter `slug`, `title`, `description`, and `topics` (`id`, `title`, `anchor`). Topic `id` format: `<chapter-slug>-NNN`. The `anchor` comes from the title with the `rehype-slug` rules (`github-slugger`), like `lib/linux/stages.ts`. The list drives the sidebar, the home page, search, the sitemap, the PWA precache, and progress.
- `lib/fundamentals/ui.ts` holds the English strings of the module.
- `content/fundamentals/<chapter>.mdx` follows the page template of `CLAUDE.md` (`metadata`, `page`, `<PageMeta />`).
- `scripts/fundamentals-route-map.json`: the 12 routes, an identity map like `scripts/linux-route-map.json`. `check_routes.py`, `check_outline.py`, and `check_sources.py` read it.
- Internal links are `/fundamentals/<chapter>/` or `/fundamentals/<chapter>/#<anchor>`, with no repo name (base-path rule).

## 5. The version switch

MDX form of a topic:

```mdx
## Error, Defect, Bug and Failure

<Version of="notes">
The owner's text …
</Version>

<Version of="istqb">
New text … <Cite n={1} />
</Version>
```

- `Version` (`components/fundamentals/Version.tsx`) renders a `div` with `data-version="notes"` or `data-version="istqb"`. It registers in `mdx-components.tsx`.
- Rule: no heading (`#` to `######`) inside a `<Version>` block. Sub-topics use bold labels. So the "On this page" list has one entry for each topic, and each heading id is unique.
- The switch (`components/fundamentals/VersionSwitch.tsx`) is two buttons with `aria-pressed`. It sets `data-fundamentals-version` on `<html>` and saves the choice in `localStorage` under `fundamentals-version`.
- CSS in `app/globals.css` hides `[data-version]` blocks that do not match the attribute on `<html>`.
- A small init script in `<head>` (`lib/fundamentals/version.ts`, same method as `lib/theme.ts`) sets the attribute before the first paint. A saved value wins. Else the value is `istqb`. Every storage call is in `try/catch`.
- The interview chapter has no `<Version>` blocks and shows no switch.
- Search: `buildSearchDocs` indexes the full `##` section, so the text of both versions is found. A result opens the page in the version the reader has set.
- Sources: `page.sources` lists only the ISTQB sources. Only `istqb` blocks and the interview answers have `<Cite>`. `check_sources.py` needs no change: it checks the built HTML, and both versions are in the HTML.

## 6. Images

- The 10 images go to `public/images/fundamentals/` with short names (for example `stlc-phases.png`, `bug-life-cycle.png`). Each has alt text that says what the image shows.
- `main` and this branch have no image component. Add `components/mdx/MdxImage.tsx` and `lib/base-path.ts` in the same form as the local branch `feat/linux-cheatsheet-image`, so that the two branches merge without conflict. The image `src` gets `NEXT_PUBLIC_BASE_PATH`.
- Images appear only inside `<Version of="notes">` blocks.
- Known limit: the PWA precache does not list `public/images`. Offline readers see the text without the images. This matches the Linux branch.

ISTQB-version diagrams:

| Diagram | Form |
|---|---|
| STLC phases, test pyramid, test quadrants, state transition (PIN entry), bug life cycle, testing classification, test levels | Inline SVG components in `components/fundamentals/diagrams/`. Colors come from the theme tokens. Each has a `title` and a text description. |
| Test case fields, RTM, decision table, equivalence partitions and boundary values, bug triage | GFM tables |

## 7. Content workflow

| Step | Action | Output |
|---|---|---|
| 1. Sources | ISTQB Certified Tester Foundation Level syllabus v4.0 (the newest published revision) and the ISTQB glossary (glossary.istqb.org). | Source list S1, S2, … |
| 2. Research | For each chapter: a claims table with each ISTQB-version claim, its source, and a short quote. | `docs/superpowers/research/fundamentals-<chapter>.md` |
| 3. Write | "My notes": the owner's text, light fixes, images, `warning` callouts at conflicts. "ISTQB": new text with `<Cite>`, diagrams, tables. | `content/fundamentals/<chapter>.mdx` |
| 4. Fact-check | An independent agent checks each cited claim against its source. | `docs/superpowers/research/fundamentals-<chapter>.factcheck.md`, ending with `Open FAILs: N` |

Rules:

- The ISTQB version uses original wording. Syllabus text appears only as short quotes in the research notes.
- If ISTQB does not define a term of the notes (for example monkey testing, gorilla testing, A/B testing, benchmark testing), the ISTQB version says so. It then gives the common meaning in a `note` callout that says it is the tutorial's own explanation, without a citation.
- A `warning` callout in "My notes" names the conflict in one sentence and links to the same topic in the ISTQB version. Known conflicts to check first: "QA is verification, QC is validation"; "QA is responsible for full SDLC, QC for STLC"; the definition of "bug"; the definition of sanity testing.
- Interview answers: 2 to 5 sentences each, consistent with the ISTQB version, with a link to the chapter topic. They are fact-checked like the ISTQB text.
- All new prose follows the plain-English style of the other modules.

## 8. Progress

- Reuse the shared progress store (`lib/prep/progress.ts`, `lib/prep/store.ts`, and the `components/prep/` hooks). The storage key is `fundamentals-progress`, a JSON list of done topic ids.
- The server render shows 0 done. The client updates after hydration.
- The home page and each chapter page show the progress bar.

## 9. Shell integration

- The header gets a "Fundamentals" link next to "Linux".
- The sidebar and the mobile drawer show the chapter list when the path starts with `/fundamentals/` (`components/layout/NavList.tsx`).
- New components in `components/fundamentals/`: `FundamentalsHome`, `FundamentalsSidebarList`, `TopicChecklist`, `ProgressSummary`, `Version`, `VersionSwitch`, and the diagrams.
- Search index, sitemap, and the PWA precache add the 12 routes from `chapters.ts`.

## 10. Tests and checks

`npm test` (new file `tests/fundamentals-data.test.ts` and additions to existing tests):

- Each chapter in `chapters.ts` has an MDX file, and each MDX file in `content/fundamentals/` is in the list.
- Each topic `anchor` is the id of a `##` heading in its file.
- In chapters 1 to 10, each `##` topic has exactly one `notes` block and one `istqb` block.
- No heading inside a `<Version>` block.
- The version init script and its resolve function agree, like `tests/theme.test.ts`.
- The sitemap and the precache list contain the 12 routes.

After `npm run build`:

- `check_routes.py out`, `check_links.py out`, and `check_outline.py out` pass.
- `check_sources.py out` prints `OK 46 pages checked, 0 skipped` (35 now + 11).
- A base-path build (`PAGES_BASE_PATH=/learn-software-testing-with-ai`) has no bare `/fundamentals/` links, and the images load.

## 11. Delivery

- Build in this order: data and shell (empty chapter pages that pass all checks), then the chapters one at a time, each with its research notes and fact-check, then the interview chapter.
- `CLAUDE.md` gets a "Fundamentals Module" section. The route count changes to 49, and the `check_sources.py` count changes to 46.
- No push and no PR until the owner asks.
