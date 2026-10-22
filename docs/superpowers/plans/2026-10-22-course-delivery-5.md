# System Design Course, Delivery 5 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development. A new agent for each task, and a review after each task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Part 5 "Case studies and interview" to `/course/`: 2 new topic pages and 4 link topics. This completes the 55 topics of the course.

**Architecture:** No framework change. Tasks 1–2 write one page each (research notes, MDX, fact-check report) in `content/course/`. Task 3 adds the 6 entries to `lib/course/topics.ts` and updates routes, tests, counts, and docs. The process is the same as Deliveries 2–4.

**Spec:** `docs/superpowers/specs/2026-10-22-course-module-design.md` (§2 Delivery 5, §6 page shape, §7 content rules)

## Global Constraints

- All constraints of the earlier delivery plans apply: page shape, official sources only, nothing from systemdesignbangla.com, a review by a different agent that ends with `Open FAILs: 0`, no 8-word run copied from a source, prose 700–1100 words, no real person's name or home path, no `<Voices>`.
- Entries get `part: 5`. Add `{ num: 5, title: "Case studies and interview" }` to `parts` if it is missing. Numbers continue: topics 50–55.
- The 4 case-study topics that already have a System Design case page are `link` entries to it.
- Netflix page: Netflix's own primary pages are the sources (Open Connect docs at openconnect.netflix.com, the Netflix GitHub repositories and their docs, about.netflix.com). The Netflix Technology Blog is the company's own account of its system, so it is allowed as a primary source for facts about Netflix only. A fact about a general technique also needs a vendor-neutral or official source. No third-party blogs. The page says when a fact is from a given year and may have changed.
- Interview page: facts about interview formats come from the official hiring pages of the companies (for example Google, Amazon, Meta careers pages). The method of a design interview (steps, estimates) is the tutorial's own and is marked as such, unless a source states it.
- This branch starts from `feat/course-delivery-4` (PR #35). Rebase on `main` after PR #35 is merged.
- After Task 3: 129 routes (127 + 2), 121 content pages (119 + 2), `check_sources.py` prints `OK 121 pages checked, 0 skipped`.
- Commit messages end with `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`.

## Review Focus

1. A page that copies 8+ words from a source, or drops a hedge.
2. Netflix facts that are old (a year is given) stated as current, or a Netflix choice stated as a general rule.
3. Interview advice stated as a fact from a source when it is the tutorial's own.
4. The 4 link targets are real routes; counts updated, no assertion weakened. (Task 3 review.)

---

### Task 0: Branch

- [x] `git switch -c feat/course-delivery-5 feat/course-delivery-4`.

---

### Tasks 1–2: One course page each

| Task | # | Slug | Title | Main official sources |
|---|---|---|---|---|
| 1 | 50 | `interview-intro` | System Design Interviews | Official hiring pages of large tech companies (interview process and format); the Google SRE book for back-of-the-envelope estimates, if used |
| — | 51 | `url-shortener` | URL Shortener | link → `/system-design/url-shortener/` |
| — | 52 | `whatsapp` | WhatsApp | link → `/system-design/whatsapp/` |
| — | 53 | `twitter` | Twitter | link → `/system-design/twitter/` |
| 2 | 54 | `netflix` | Netflix | Netflix Open Connect docs, Netflix GitHub repositories (for example Hystrix, Zuul, Eureka docs), Netflix Technology Blog, AWS docs where Netflix runs on AWS |
| — | 55 | `uber` | Uber | link → `/system-design/uber-eta/` |

**Files (for slug `<s>`):** `docs/superpowers/research/course-<s>.md`, `content/course/<s>.mdx`, `docs/superpowers/research/course-<s>.factcheck.md`

- [ ] **Step 1–3 (writer, a new agent):** Research notes, the MDX page, self-check. Optional sections: `## In an interview` and `## How it works` for the interview page; `## How it works` for Netflix. Do not commit.
- [ ] **Step 4 (review, a different new agent):** The fact-check report and the structure check. It ends with `Open FAILs: N`.
- [ ] **Step 5:** Fix rounds until `Open FAILs: 0`. The controller commits the 3 files: `docs(course): <title> page, research notes, and fact-check`.

---

### Task 3: Connect Part 5

**Files:** `lib/course/topics.ts` (part 5 in `parts` if missing, 6 entries with `part: 5` after `ssl-tls-mtls`, `CourseSlug`), `lib/course/ui.ts` (description, if it lists the scope), `scripts/course-route-map.json` (2 routes), `tests/course.test.ts` (55 entries, 40 MDX files, `lessonIds` 55), and every test, script test, and CLAUDE.md line that pins the counts (routes 129, content pages 121, `course: 40`, course routes 41, `check_sources` 121, 15 link entries). Commit c3a98b5 (Part 4) is the pattern.

Entry descriptions:

| Slug | Description |
|---|---|
| interview-intro | What a system design interview asks, and how to work through one. |
| url-shortener | Turn a long link into a short one, at scale. |
| whatsapp | Deliver chat messages to billions of phones. |
| twitter | Build a home timeline from the accounts a user follows. |
| netflix | Stream video worldwide from caches near the viewer. |
| uber | Estimate when a ride will arrive. |

- [ ] **Step 1:** Update `tests/course.test.ts` to the 55 entries; run it; it fails.
- [ ] **Step 2:** Add the entries, the route map lines, and the count changes.
- [ ] **Step 3:** Run `npm test`, `npx tsc --noEmit -p .`, `npm run build`, `python3 -m unittest scripts/test_checks.py`, `check_routes`, `check_links`, `check_outline`, and `check_sources` (`OK 121 pages checked, 0 skipped`). Fetch `/course/` and the 2 new pages with curl: HTTP 200, the expected `<h1>`, and the "PART 5" heading.
- [ ] **Step 4:** Commit `feat(course): add Part 5, Case studies and interview`.
- [ ] **Step 5 (review, a new agent):** A code review of the Task 3 diff. Fix rounds until the review is clean.
