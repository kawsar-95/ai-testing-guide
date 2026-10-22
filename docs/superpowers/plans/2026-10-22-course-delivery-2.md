# System Design Course, Delivery 2 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development. A new agent for each task, and a review after each task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Part 2 "Databases and consistency" to `/course/`: 14 new topic pages and 1 link topic.

**Architecture:** No framework change. Tasks 1–14 write one page each (research notes, MDX, fact-check report) in `content/course/`. Task 15 adds the 15 entries to `lib/course/topics.ts` and updates routes, tests, counts, and docs.

**Tech Stack:** MDX, Next.js 16 static export, `node --test`, Python 3 checks.

**Spec:** `docs/superpowers/specs/2026-10-22-course-module-design.md` (§2 Delivery 2, §6 page shape, §7 content rules)

## Global Constraints

- All constraints of `docs/superpowers/plans/2026-10-22-course-delivery-1.md` apply: page shape (spec §6), official sources only (spec §7), nothing from systemdesignbangla.com, a fact-check report by a different agent that ends with `Open FAILs: 0`, no real person's name or home path, no `<Voices>`.
- Entries get `part: 2`. Numbers continue after Delivery 1: topics 14–28.
- After Task 15: 110 routes (96 + 14), 102 content pages (88 + 14), `check_sources.py` prints `OK 102 pages checked, 0 skipped`.
- Commit messages end with `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`.

## Review after each task

- Page tasks (1–14): the review is the fact-check (Step 4) plus a structure check by the same fact-checker: the 6 required sections in order, `## Key words` last, a cite for each source and a source for each cite, no 8-word run copied from a source, no `<Voices>`.
- Task 15: a code review of its diff (spec compliance and quality) before the branch is finished.

## Review Focus

1. A page that copies 8+ words from a source. (Fact-check copy check.)
2. A number or guarantee stated more strongly than the source says it, for example "ACID guarantees no data loss". (Fact-check.)
3. CAP and PACELC stated as if every database fits one letter. (Fact-check against the papers.)
4. The `replication` link target is a real route. (Task 15 test, existing.)
5. Counts and pinned lists updated, no assertion weakened. (Task 15 review.)

---

### Task 0: Branch

- [ ] `git switch -c feat/course-delivery-2 main` (PR #32 is merged).

---

### Tasks 1–14: One course page each

| Task | # | Slug | Title | Main official sources |
|---|---|---|---|---|
| 1 | 14 | `database` | Databases and DBMS | PostgreSQL docs (Tutorial: Concepts), MySQL Reference Manual |
| 2 | 15 | `sql` | SQL Databases | PostgreSQL docs (SQL Language, Data Definition, Constraints) |
| 3 | 16 | `nosql` | NoSQL Databases | MongoDB docs, Apache Cassandra docs, Redis docs (data types) |
| 4 | 17 | `sql-vs-nosql` | SQL vs NoSQL | The same vendor docs as tasks 2–3, AWS "Relational vs NoSQL" docs page |
| — | 18 | `replication` | Database Replication | link → `/architecture/database-replication/` |
| 5 | 19 | `indexes` | Indexes | PostgreSQL docs (Indexes chapter), MySQL docs (How MySQL Uses Indexes) |
| 6 | 20 | `normalization` | Normalization and Denormalization | PostgreSQL docs (Constraints, Foreign Keys), Microsoft Learn (Database normalization description) |
| 7 | 21 | `acid-base` | ACID and BASE | PostgreSQL docs (Transactions, Transaction Isolation), Amazon Dynamo paper (SOSP 2007, eventual consistency) |
| 8 | 22 | `cap-theorem` | The CAP Theorem | Gilbert and Lynch, "Brewer's Conjecture…" (2002); Brewer, "CAP Twelve Years Later" (IEEE Computer, 2012) |
| 9 | 23 | `pacelc` | The PACELC Theorem | Abadi, "Consistency Tradeoffs in Modern Distributed Database System Design" (IEEE Computer, 2012) |
| 10 | 24 | `transactions` | Transactions | PostgreSQL docs (Transactions, BEGIN, COMMIT, ROLLBACK, isolation levels) |
| 11 | 25 | `distributed-transactions` | Distributed Transactions | PostgreSQL docs (PREPARE TRANSACTION, two-phase commit), Azure Architecture Center (Saga pattern) |
| 12 | 26 | `sharding` | Sharding | MongoDB docs (Sharding), Azure Architecture Center (Sharding pattern) |
| 13 | 27 | `consistent-hashing` | Consistent Hashing | Karger et al. (STOC 1997), Amazon Dynamo paper (SOSP 2007), Apache Cassandra docs (data distribution) |
| 14 | 28 | `database-federation` | Database Federation | Azure Architecture Center (Data partitioning guidance: functional partitioning) |

An academic paper is a primary source and is allowed. Use the author's or publisher's own copy, not a summary.

**Files (for slug `<s>`):** `docs/superpowers/research/course-<s>.md`, `content/course/<s>.mdx`, `docs/superpowers/research/course-<s>.factcheck.md`

- [ ] **Step 1 (writer, a new agent):** Research notes: sources S1… with URL and access date, and a claims table with a quote for each claim.
- [ ] **Step 2 (writer):** The MDX page, as in Delivery 1 Tasks 2–8 Step 2 (template, `#` title equal to the table title, lede, `<PageMeta />`, the required sections, a cite after each fact, the "Tutorial advice" tip with no cites, the Key words table, 700–1100 words, plain words for testers). Optional sections as the topic needs (for example `## Trade-offs` for CAP, PACELC, and SQL vs NoSQL; `## How it works` for indexes and consistent hashing).
- [ ] **Step 3 (writer):** Self-check the structure and the cites. Do not commit (the controller commits after the review).
- [ ] **Step 4 (review, a different new agent):** The fact-check report and the structure check. It ends with `Open FAILs: N`.
- [ ] **Step 5:** If N > 0, the writer fixes, and the reviewer checks the changed rows again, until `Open FAILs: 0`. The controller commits the 3 files: `docs(course): <title> page, research notes, and fact-check`.

---

### Task 15: Connect Part 2

**Files:**
- Modify: `lib/course/topics.ts` (15 entries with `part: 2` after `storage`, and `CourseSlug`), `scripts/course-route-map.json` (14 routes), `tests/course.test.ts` (28 entries, 21 MDX files, `lessonIds` 28), `tests/reading-state.test.ts` (102 content pages, `course: 21`), `tests/sitemap.test.ts` and any other test that pins the counts, `CLAUDE.md` (routes 110, content pages 102, `check_sources` 102, the course part list)

Entry descriptions:

| Slug | Description |
|---|---|
| database | What a database and a DBMS are, and what they do for an app. |
| sql | Tables, rows, keys, and the SQL language. |
| nosql | Documents, key-value, wide-column, and graph stores. |
| sql-vs-nosql | How to choose: data shape, consistency, and scale. |
| replication | Copies of the data on more than one server. |
| indexes | A lookup structure that makes reads fast and writes slower. |
| normalization | Split data to avoid copies, or copy it on purpose for speed. |
| acid-base | Strict transactions, or availability with eventual consistency. |
| cap-theorem | During a network split, choose consistency or availability. |
| pacelc | CAP, plus the latency trade-off when there is no split. |
| transactions | A group of changes that all happen or none happen. |
| distributed-transactions | One change across many databases: two-phase commit and sagas. |
| sharding | Split one big data set across many databases. |
| consistent-hashing | Spread keys over servers so few keys move when servers change. |
| database-federation | Give each part of the app its own database. |

- [ ] **Step 1:** Update `tests/course.test.ts` to the 28 entries; run it; it fails.
- [ ] **Step 2:** Add the entries, the route map lines, and the count changes.
- [ ] **Step 3:** Run `npm test`, `npx tsc --noEmit -p .`, `npm run build`, `python3 -m unittest scripts/test_checks.py`, `check_routes`, `check_links`, `check_outline`, and `check_sources` (`OK 102 pages checked, 0 skipped`). Fetch `/course/` and 3 new pages with curl: HTTP 200, the expected `<h1>`, and the "PART 2" heading. Check that no `id` repeats in `out/course/sharding/index.html`.
- [ ] **Step 4:** Commit `feat(course): add Part 2, Databases and consistency`.
- [ ] **Step 5 (review, a new agent):** A code review of the Task 15 diff against this task and the spec. Fix rounds until the review is clean.
