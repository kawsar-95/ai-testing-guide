# System Design Course, Delivery 1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship `/course/` with Part 0 and Part 1: 7 new topic pages and 6 link topics, with progress for all 13.

**Architecture:** Task 1 extends the flat module framework (parts, link progress, required progress strings) with no visible change. Tasks 2–8 write one page each (research notes, MDX, fact-check report) in `content/course/`, which nothing routes yet. Task 9 adds the module to the registry and connects routes, search, tests, counts, and docs.

**Tech Stack:** Next.js 16 static export, React 19, TypeScript, MDX, `node --test`, Python 3 checks.

**Spec:** `docs/superpowers/specs/2026-10-22-course-module-design.md`

## Global Constraints

- Topic order and part titles: spec §3. Titles are the `#` headings, verbatim.
- Storage key `course-progress`. Module id `course`. Search group `course`. Header label `Course`.
- `FLAT_MODULES = [SYSTEM_DESIGN, ARCHITECTURE, COURSE]`. `PROGRESS_KEYS` gets `course-progress` after `architecture-progress`.
- Page shape: spec §6. Required sections in order, `## Key words` last. No `<Voices>`.
- Sources: spec §7. Official sources only. Nothing from systemdesignbangla.com. No blogs or AI summaries.
- A page is done only when `docs/superpowers/research/course-<slug>.factcheck.md` ends with `Open FAILs: 0`, written by an agent that did not write the page.
- No real person's name, email, home path, or login name in new text.
- `lib/` files use relative `.ts` imports. `components/` and `app/` use `@/`.
- After Task 9: 96 routes, 88 content pages, `check_sources.py` prints `OK 88 pages checked, 0 skipped`.
- Commit messages end with `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`.

## Review Focus

1. A reader marks a link topic done on `/course/`; the bar and the ✓ update, and `architecture-progress` does not change. (Task 1 test: `lessonIds` includes link slugs; Task 9 browser check.)
2. Architecture and System Design look exactly the same after Task 1. (Task 1 compare gate.)
3. A module with `parts` and an entry with a missing, unknown, or decreasing part fails at definition time. (Task 1 tests.)
4. A course page missing a required section, or with a section after `## Key words`, fails `npm test`. (Task 9 test.)
5. A link target that is not a real route fails `npm test`. (Task 9 test.)

---

### Task 0: Branch and baseline

- [ ] **Step 1:** `git switch -c feat/course-delivery-1 docs/course-spec`
- [ ] **Step 2:** `npm run build && rm -rf .baseline/out && cp -r out .baseline/out`
- [ ] **Step 3:** `python3 -I .baseline/compare.py .baseline/out out` prints `OK 90 pages, 0 differences`.

No commit.

---

### Task 1: Framework changes

**Files:**
- Modify: `lib/modules/flat.ts`, `components/modules/FlatModuleHome.tsx`, `components/modules/FlatSidebarList.tsx`, `tests/flat-module.test.ts`, `tests/nav.test.ts` (exclude `content/course/` like the other module folders)
- Create: `components/modules/LinkDoneToggle.tsx`

**Interfaces:**
- Produces in `lib/modules/flat.ts`:
  - `FlatEntry.part?: number`
  - `FlatModuleDef.parts?: readonly { num: number; title: string }[]`
  - `FlatModuleDef` is a union: with `progress`, `ui` must have `overallLabel`, `summaryText`, `percentText`, `markDone`, `markedDone`, `sidebarDone` (non-optional).
  - `FlatModule.lessonIds`: slugs of `topic` and `link` items, in item order; `[]` without `progress`.
  - `FlatModule.groups(): { part: { num: number; title: string } | null; items: readonly FlatItem[] }[]`: one group per part that has items, in order; one group with `part: null` and all items when the module has no `parts`.
- Produces `<LinkDoneToggle moduleId={FlatModuleId} id={slug} />`: a client `button` with `aria-pressed`, label from `ui.markDone` / `ui.markedDone`, using `progressHook`.

- [ ] **Step 1: Failing tests in `tests/flat-module.test.ts`**

```ts
test("a module with parts rejects a missing, unknown, or decreasing part", () => {
  assert.throws(() => defineFlatModule({ ...partsDef, entries: [{ ...e("a"), part: undefined }] }), /part/);
  assert.throws(() => defineFlatModule({ ...partsDef, entries: [{ ...e("a"), part: 9 }] }), /part/);
  assert.throws(() => defineFlatModule({ ...partsDef, entries: [{ ...e("a"), part: 1 }, { ...e("b"), part: 0 }] }), /part/);
});
test("groups follow the parts, skip empty parts, and give one null group without parts", () => {
  // partsDef: parts 0,1,2; entries a(0), b(1, link), c(1)
  assert.deepEqual(withParts.groups().map((g) => [g.part?.num, g.items.map((i) => i.slug)]), [[0, ["a"]], [1, ["b", "c"]]]);
  assert.deepEqual(fake.groups().map((g) => g.part), [null]);
});
test("lessonIds include link items with progress", () => {
  assert.deepEqual(fake.lessonIds, ["a", "b", "c"]); // the Task-1-of-Project-1 fake: a topic, b link, c topic, d practice
});
test("progressHook gives the same hook for the same module", () => {
  // import progressHook from components/modules/useModuleProgress.ts only if node can load it; otherwise assert on a pure cache helper exported from it
});
```

Update the existing `lessonIds` test of the fake module to the new value. Architecture's `lessonIds` stays the 19 topic slugs (it has no link items).

- [ ] **Step 2:** `node --test tests/flat-module.test.ts` fails on the new tests.
- [ ] **Step 3:** Implement. `FlatModuleHome` and `FlatSidebarList` render `groups()`. A group with a part gets a heading (home: an `h3` eyebrow-style label with the part number and title; sidebar: a small label). A group with `part: null` renders exactly the current markup. A `link` item renders `<LinkDoneToggle>` next to its link when the module has `progress`; otherwise nothing. The eyebrow count is `items.filter(kind topic or link).length`. If the `progressHook` cache cannot be loaded by `node --test` (it is a client file), export the cache as a plain function from a small `.ts` file and test that.
- [ ] **Step 4:** `npm test`, `npx tsc --noEmit -p .`, `npm run build`, and `python3 -I .baseline/compare.py .baseline/out out` → `OK 90 pages, 0 differences`.
- [ ] **Step 5:** Commit `feat: parts, link progress, and required progress strings for flat modules`.

---

### Tasks 2–8: One course page each

One task per page. Each task has the same steps. The writer and the fact-checker are different agents. The pages touch disjoint files, so their writers may run in parallel.

| Task | Slug | Title | Main official sources |
|---|---|---|---|
| 2 | `ip` | IP Addresses | RFC 791, RFC 8200, RFC 1918, RFC 4291 |
| 3 | `osi` | The OSI Model | ITU-T X.200, RFC 1122 (the Internet model, for contrast) |
| 4 | `tcp-udp` | TCP and UDP | RFC 9293, RFC 768 |
| 5 | `dns` | DNS | RFC 1034, RFC 1035, RFC 2181, MDN |
| 6 | `clustering` | Clustering | Kubernetes docs (nodes, control plane), the Pacemaker/ClusterLabs docs, or a cloud vendor's docs |
| 7 | `proxy` | Forward and Reverse Proxies | RFC 9110, MDN (Proxy server, Forwarded / X-Forwarded-For), NGINX docs |
| 8 | `availability` | Availability | Google SRE book (Embracing Risk, SLOs), a cloud vendor SLA page |

**Files (for slug `<s>`):**
- Create: `docs/superpowers/research/course-<s>.md`, `content/course/<s>.mdx`, `docs/superpowers/research/course-<s>.factcheck.md`

- [ ] **Step 1 (writer):** Research notes: sources S1… with URL and access date 2026-10-22, and a claims table with a quote for each claim.
- [ ] **Step 2 (writer):** The MDX page. The page template of CLAUDE.md, `#` title equal to the table title, a one-paragraph lede, `<PageMeta />`, then the spec §6 sections in order. Optional sections as the topic needs (for example `## How it works` for DNS resolution, `## Trade-offs` for TCP vs UDP). A `<Cite n>` after each fact. `## What a tester can check` is a `<Callout type="tip" title="Tutorial advice">` with no cites. `## Key words` is a table. About 5 minutes of reading (700–1100 words). Plain words for testers. Example systems are generic or a learning platform (as in Architecture). Fenced `text` blocks for diagrams. No inline styles.
- [ ] **Step 3 (writer):** Self-check: the 6 required headings exist in order, `## Key words` is last, every source has a cite and every cite has a source, no copied runs from the sources (quote only in research notes). Commit `docs(course): <title> page and research notes`.
- [ ] **Step 4 (fact-checker, a different agent):** Write `course-<s>.factcheck.md`: one row for each factual claim of the page (cite, verdict, the quote from the source, opened from the URL). End with `Open FAILs: N`.
- [ ] **Step 5:** If N > 0, the writer fixes the page and notes, and the fact-checker checks the changed rows again, until `Open FAILs: 0`. Commit the report.

---

### Task 9: Connect the module

**Files:**
- Create: `lib/course/topics.ts`, `lib/course/ui.ts`, `app/(site)/course/page.tsx`, `app/(site)/course/[topic]/page.tsx`, `scripts/course-route-map.json`, `tests/course.test.ts`
- Modify: `lib/modules/registry.ts`, `app/search-index.json/route.ts`, `scripts/check_routes.py`, `scripts/check_outline.py`, `scripts/check_sources.py`, `scripts/test_checks.py` (if it pins the map list), `lib/ui.ts`, `lib/contents.ts`, `tests/flat-module.test.ts` (`constOf`), `tests/reading-state.test.ts`, `tests/header-nav.test.ts`, `tests/contents.test.ts`, `tests/dashboard.test.ts`, `tests/sitemap.test.ts`, `CLAUDE.md`

**Interfaces:** consumes Task 1 (`parts`, `groups`, union def). Produces `COURSE` and `type CourseSlug` in `lib/course/topics.ts`.

Entry descriptions (the home page line):

| Slug | Description |
|---|---|
| intro | What system design is, and why a tester should care. |
| ip | How every device on a network gets an address, in IPv4 and IPv6. |
| osi | Seven layers that name where a network problem lives. |
| tcp-udp | Reliable ordered delivery, or fast delivery with no promise. |
| dns | How a name like example.com becomes an IP address. |
| load-balancing | Share traffic between servers and skip the broken ones. |
| clustering | Many machines that act as one system and replace each other. |
| caching | Keep a copy close so the next read is fast. |
| cdn | Serve static files from a server near the user. |
| proxy | A middleman for requests: on the client side or the server side. |
| availability | How much of the time a system works, and how to measure it. |
| scalability | Grow with the load: bigger servers or more servers. |
| storage | Files, blocks, and objects: where data lives. |

UI strings: as spec §5, the same keys as `lib/architecture/ui.ts` with Course text: `eyebrow: (n) => \`COURSE · ${n} TOPICS\``, `itemEyebrow: (n) => \`TOPIC ${pad(n)} · COURSE\``, `itemsHeading: "TOPICS"`, `itemsHeadingId: "topics-heading"`, `summaryText: (d, t) => \`${d} of ${t} topics done\``, `markDone: "Mark this topic as done"`, `markedDone: "Done. Click to undo"`, `crossTo: "Course"`, `headerLink: "Course"`, `sidebarNav: "Course topics"`.

- [ ] **Step 1: Failing `tests/course.test.ts`:** the 13 entries in spec §3 order with parts and kinds; each link `href` is in `sitemapPaths()`; `content/course/` has exactly the 7 topic slugs; `scripts/course-route-map.json` equals `COURSE.routes`; each course MDX has the 6 required `##` headings in order with `## Key words` last; `COURSE.lessonIds.length === 13`; `precacheUrls("")` includes `/course/` and the 7 routes; `buildFlatSearchDocs(COURSE, …)` docs have group `course`.
- [ ] **Step 2:** Run it; it fails (no `lib/course/topics.ts`).
- [ ] **Step 3:** Implement the files. Update the pinned counts and lists: content pages 81 → 88, `course: 7`, nav ids add `course` after `architecture`, `PROGRESS_KEYS` add `course-progress`, `activeNavId("/course/dns/") === "course"`. Update CLAUDE.md: Structure rows for `lib/course/`, `app/(site)/course/`, `content/course/`, `scripts/course-route-map.json`; the route table (96); content pages (88); `check_sources` count (88); a short "System Design Course" section (spec §1, §6, §7 in at most 12 lines); the precache/progress lists.
- [ ] **Step 4:** Run all checks:

```bash
npm test && npx tsc --noEmit -p . && npm run build \
&& python3 -m unittest scripts/test_checks.py \
&& python3 scripts/check_routes.py out && python3 scripts/check_links.py out \
&& python3 scripts/check_outline.py out && python3 scripts/check_sources.py out
```

Expected: all pass; `check_sources.py` prints `OK 88 pages checked, 0 skipped`.

- [ ] **Step 5:** Serve `out/` and fetch `/course/`, the 7 pages, and `/architecture/caching/` with curl: HTTP 200 and the expected `<h1>`. The `/course/` HTML has the 2 part headings and 13 items. The interactive check (toggles, the bar, Export) is for the owner.
- [ ] **Step 6:** Commit `feat: add the System Design Course module (Part 0 and Part 1)`.
