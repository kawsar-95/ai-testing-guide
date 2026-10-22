# System Design Course, Delivery 3 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development. A new agent for each task, and a review after each task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Part 3 "System architecture" to `/course/`: 8 new topic pages and 3 link topics.

**Architecture:** No framework change. Tasks 1–8 write one page each (research notes, MDX, fact-check report) in `content/course/`. Task 9 adds the 11 entries to `lib/course/topics.ts` and updates routes, tests, counts, and docs. The process is the same as Delivery 2 (`docs/superpowers/plans/2026-10-22-course-delivery-2.md`): the same writer and reviewer rules, writers in parallel that do not commit, and the controller commits each page after its review ends with `Open FAILs: 0`.

**Spec:** `docs/superpowers/specs/2026-10-22-course-module-design.md` (§2 Delivery 3, §6 page shape, §7 content rules)

## Global Constraints

- All constraints of the Delivery 1 and Delivery 2 plans apply: page shape, official sources only, nothing from systemdesignbangla.com, a review by a different agent that ends with `Open FAILs: 0`, no 8-word run copied from a source, no real person's name or home path, no `<Voices>`.
- Entries get `part: 3`. Add `{ num: 3, title: "System architecture" }` to `parts` if it is missing. Numbers continue: topics 29–39.
- After Task 9: 118 routes (110 + 8), 110 content pages (102 + 8), `check_sources.py` prints `OK 110 pages checked, 0 skipped`.
- Commit messages end with `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`.

## Review Focus

1. A page that copies 8+ words from a source, or states a pattern's benefit more strongly than the source.
2. REST described as "JSON over HTTP": REST is an architectural style (Fielding); the page must keep that distinction.
3. ESB, event sourcing, and CQRS presented as always good: the Azure pages list when not to use them.
4. The 3 link targets are real routes. (Task 9 test.)
5. Counts and pinned lists updated, no assertion weakened. (Task 9 review.)

---

### Task 0: Branch

- [ ] `git switch -c feat/course-delivery-3 main` (PR #33 is merged).

---

### Tasks 1–8: One course page each

| Task | # | Slug | Title | Main official sources |
|---|---|---|---|---|
| 1 | 29 | `n-tier` | N-tier Architecture | Azure Architecture Center (N-tier architecture style) |
| — | 30 | `message-brokers` | Message Brokers and Queues | link → `/architecture/message-queue/` |
| 2 | 31 | `pub-sub` | Publish-Subscribe | Azure Architecture Center (Publisher-Subscriber pattern), Google Cloud Pub/Sub docs (overview) |
| 3 | 32 | `esb` | Enterprise Service Bus | IBM documentation or IBM Think topic page on ESB, Azure Architecture Center (messaging / integration guidance) |
| — | 33 | `monoliths-microservices` | Monoliths and Microservices | link → `/architecture/monolith-microservices/` |
| 4 | 34 | `event-driven-architecture` | Event-Driven Architecture | Azure Architecture Center (Event-driven architecture style), AWS docs (What is an event-driven architecture) |
| 5 | 35 | `event-sourcing` | Event Sourcing | Azure Architecture Center (Event Sourcing pattern) |
| 6 | 36 | `cqrs` | CQRS | Azure Architecture Center (CQRS pattern) |
| — | 37 | `api-gateway` | API Gateway | link → `/architecture/api-gateway/` |
| 7 | 38 | `rest-graphql-grpc` | REST, GraphQL, and gRPC | Fielding's dissertation, chapter 5 (ics.uci.edu); graphql.org (Learn, spec); grpc.io (Introduction, Core concepts) |
| 8 | 39 | `long-polling-ws-sse` | Long Polling, WebSockets, and SSE | RFC 6202 (long polling), RFC 6455 (WebSocket), WHATWG HTML Living Standard (server-sent events), MDN |

**Files (for slug `<s>`):** `docs/superpowers/research/course-<s>.md`, `content/course/<s>.mdx`, `docs/superpowers/research/course-<s>.factcheck.md`

- [ ] **Step 1–3 (writer, a new agent):** As in Delivery 2: research notes, the MDX page, self-check. Optional sections where the topic needs them (`## Trade-offs` for ESB, CQRS, event sourcing, and the two comparison pages; `## How it works` for the others). Do not commit.
- [ ] **Step 4 (review, a different new agent):** The fact-check report and the structure check. It ends with `Open FAILs: N`.
- [ ] **Step 5:** Fix rounds until `Open FAILs: 0`. The controller commits the 3 files: `docs(course): <title> page, research notes, and fact-check`.

---

### Task 9: Connect Part 3

**Files:** `lib/course/topics.ts` (part 3 in `parts` if missing, 11 entries with `part: 3` after `database-federation`, `CourseSlug`), `scripts/course-route-map.json` (8 routes), `tests/course.test.ts` (39 entries, 29 MDX files, `lessonIds` 39), and every test, script test, and CLAUDE.md line that pins the counts (routes 118, content pages 110, `course: 29`, `check_sources` 110).

Entry descriptions:

| Slug | Description |
|---|---|
| n-tier | Split an app into layers, each on its own tier. |
| message-brokers | A middleman that holds messages until a consumer takes them. |
| pub-sub | Send one event to every subscriber that wants it. |
| esb | A central bus that connects and translates between services. |
| monoliths-microservices | One deployable unit, or many small services. |
| event-driven-architecture | Services that react to events instead of calling each other. |
| event-sourcing | Store every change as an event, and rebuild state from them. |
| cqrs | Separate models for writes and for reads. |
| api-gateway | One front door for many backend services. |
| rest-graphql-grpc | Three ways for clients and services to talk. |
| long-polling-ws-sse | Three ways for a server to push updates to a client. |

- [ ] **Step 1:** Update `tests/course.test.ts` to the 39 entries; run it; it fails.
- [ ] **Step 2:** Add the entries, the route map lines, and the count changes.
- [ ] **Step 3:** Run `npm test`, `npx tsc --noEmit -p .`, `npm run build`, `python3 -m unittest scripts/test_checks.py`, `check_routes`, `check_links`, `check_outline`, and `check_sources` (`OK 110 pages checked, 0 skipped`). Fetch `/course/` and 3 new pages with curl: HTTP 200, the expected `<h1>`, and the "PART 3" heading.
- [ ] **Step 4:** Commit `feat(course): add Part 3, System architecture`.
- [ ] **Step 5 (review, a new agent):** A code review of the Task 9 diff. Fix rounds until the review is clean.
