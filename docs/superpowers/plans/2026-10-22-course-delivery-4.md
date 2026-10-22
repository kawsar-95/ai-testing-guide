# System Design Course, Delivery 4 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development. A new agent for each task, and a review after each task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Part 4 "Reliability and security" to `/course/`: 9 new topic pages and 1 link topic.

**Architecture:** No framework change. Tasks 1–9 write one page each (research notes, MDX, fact-check report) in `content/course/`. Task 10 adds the 10 entries to `lib/course/topics.ts` and updates routes, tests, counts, and docs. The process is the same as Deliveries 2 and 3: the same writer and reviewer rules, writers in parallel that do not commit, and the controller commits each page after its review ends with `Open FAILs: 0`.

**Spec:** `docs/superpowers/specs/2026-10-22-course-module-design.md` (§2 Delivery 4, §6 page shape, §7 content rules)

## Global Constraints

- All constraints of the earlier delivery plans apply: page shape, official sources only, nothing from systemdesignbangla.com, a review by a different agent that ends with `Open FAILs: 0`, no 8-word run copied from a source, prose 700–1100 words, no real person's name or home path, no `<Voices>`.
- Entries get `part: 4`. Add `{ num: 4, title: "Reliability and security" }` to `parts` if it is missing. Numbers continue: topics 40–49.
- Security pages (OAuth/OIDC, SSO, TLS) describe how the mechanisms work and what a tester checks. They give no attack steps against real systems.
- After Task 10: 127 routes (118 + 9), 119 content pages (110 + 9), `check_sources.py` prints `OK 119 pages checked, 0 skipped`.
- Commit messages end with `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`.

## Review Focus

1. A page that copies 8+ words from a source, or drops a hedge.
2. Security claims stated more strongly than the RFC or NIST text ("TLS makes the app secure", "OAuth is for login").
3. OAuth 2.0 (authorization) and OpenID Connect (authentication) kept apart, as the specs define them.
4. Version facts (TLS 1.0/1.1 deprecated, SSL 3.0 deprecated) cited to the RFC that says so.
5. The `rate-limiting` link target is a real route; counts updated, no assertion weakened. (Task 10 review.)

---

### Task 0: Branch

- [ ] `git switch -c feat/course-delivery-4 main` (PR #34 is merged).

---

### Tasks 1–9: One course page each

| Task | # | Slug | Title | Main official sources |
|---|---|---|---|---|
| 1 | 40 | `geohashing` | Geohashing and Quadtrees | Elasticsearch docs (geohash grid aggregation, geo_point), Redis docs (GEOADD / geospatial indexes), Microsoft Bing Maps docs (Tile System, quadkeys) |
| 2 | 41 | `circuit-breaker` | Circuit Breaker | Azure Architecture Center (Circuit Breaker pattern), AWS Prescriptive Guidance (circuit breaker pattern) |
| — | 42 | `rate-limiting` | Rate Limiting | link → `/architecture/rate-limiting/` |
| 3 | 43 | `service-discovery` | Service Discovery | Kubernetes docs (Service, DNS for Services and Pods), HashiCorp Consul docs (service discovery) |
| 4 | 44 | `sla-slo-sli` | SLA, SLO, and SLI | Google SRE book (Service Level Objectives), Google SRE workbook (Implementing SLOs) |
| 5 | 45 | `disaster-recovery` | Disaster Recovery | AWS whitepaper "Disaster Recovery of Workloads on AWS" (RTO, RPO, strategies), Azure reliability docs (disaster recovery) |
| 6 | 46 | `vm-containers` | VMs and Containers | NIST SP 800-190 (Application Container Security Guide), Docker docs (What is a container), Kubernetes docs (containers) |
| 7 | 47 | `oauth-oidc` | OAuth 2.0 and OpenID Connect | RFC 6749, RFC 7636 (PKCE), RFC 9700 (OAuth 2.0 Security BCP), OpenID Connect Core 1.0 |
| 8 | 48 | `sso` | Single Sign-On | NIST SP 800-63C (federation), OASIS SAML 2.0 Technical Overview, OpenID Connect Core 1.0 |
| 9 | 49 | `ssl-tls-mtls` | SSL, TLS, and mTLS | RFC 8446 (TLS 1.3), RFC 7568 (deprecating SSL 3.0), RFC 8996 (deprecating TLS 1.0 and 1.1), RFC 8705 (OAuth mTLS), MDN (TLS) |

**Files (for slug `<s>`):** `docs/superpowers/research/course-<s>.md`, `content/course/<s>.mdx`, `docs/superpowers/research/course-<s>.factcheck.md`

- [ ] **Step 1–3 (writer, a new agent):** Research notes, the MDX page, self-check. Optional sections where the topic needs them (`## How it works` for most; `## Trade-offs` for VMs and containers, and for disaster recovery strategies). Do not commit.
- [ ] **Step 4 (review, a different new agent):** The fact-check report and the structure check. It ends with `Open FAILs: N`.
- [ ] **Step 5:** Fix rounds until `Open FAILs: 0`. The controller commits the 3 files: `docs(course): <title> page, research notes, and fact-check`.

---

### Task 10: Connect Part 4

**Files:** `lib/course/topics.ts` (part 4 in `parts` if missing, 10 entries with `part: 4` after `long-polling-ws-sse`, `CourseSlug`), `lib/course/ui.ts` (description, if it lists the scope), `scripts/course-route-map.json` (9 routes), `tests/course.test.ts` (49 entries, 38 MDX files, `lessonIds` 49), and every test, script test, and CLAUDE.md line that pins the counts (routes 127, content pages 119, `course: 38`, `check_sources` 119). Commit 61d6ae6 (Part 2) and b56f15f (Part 3) are the pattern.

Entry descriptions:

| Slug | Description |
|---|---|
| geohashing | Turn a location into a short code, and split a map into tiles. |
| circuit-breaker | Stop calling a failing service, and try again later. |
| rate-limiting | Cap how many requests a client can send. |
| service-discovery | Find where a service runs when its address changes. |
| sla-slo-sli | Measure reliability, set a target, and promise it to customers. |
| disaster-recovery | Get a system back after a big failure: RTO and RPO. |
| vm-containers | Two ways to package and isolate software. |
| oauth-oidc | Give an app limited access, and prove who the user is. |
| sso | Log in one time and use many apps. |
| ssl-tls-mtls | Encrypt traffic and prove who is on each end. |

- [ ] **Step 1:** Update `tests/course.test.ts` to the 49 entries; run it; it fails.
- [ ] **Step 2:** Add the entries, the route map lines, and the count changes.
- [ ] **Step 3:** Run `npm test`, `npx tsc --noEmit -p .`, `npm run build`, `python3 -m unittest scripts/test_checks.py`, `check_routes`, `check_links`, `check_outline`, and `check_sources` (`OK 119 pages checked, 0 skipped`). Fetch `/course/` and 3 new pages with curl: HTTP 200, the expected `<h1>`, and the "PART 4" heading.
- [ ] **Step 4:** Commit `feat(course): add Part 4, Reliability and security`.
- [ ] **Step 5 (review, a new agent):** A code review of the Task 10 diff. Fix rounds until the review is clean.
