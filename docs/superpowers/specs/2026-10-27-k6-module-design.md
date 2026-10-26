# k6 Performance Testing Module: Design

Date: 2026-10-27. Status: design approved by the owner in chat.

## 1. Goal

A module at `/k6/` that teaches performance testing and the k6 tool, for testers with no performance testing experience. The base is the owner's notes "Learn K6" (a Notion export, mostly in Bangla). The module adds more depth from the official k6 docs.

Success: a reader installs k6, writes and runs scripts, reads the results, configures load with options, scenarios, and executors, sends results to InfluxDB and Grafana, and runs k6 in CI with thresholds as the gate.

## 2. Decisions

| Decision | Choice |
|---|---|
| Module type | A flat module (`defineFlatModule`) with parts and progress, like the Course. |
| Language | The Technical text is English. It is based on the owner's notes and the k6 docs. Each `##` section except `## Key words` has `<Voices>`. The owner's Bangla text is the base of the `<Bangla>` voice. |
| Extra scope | k6 test types, all executors, custom metrics, the web dashboard, and k6 in CI. |
| k6 version | The text follows the current k6 docs (v2.3.x on 2026-10-27). |

## 3. Entries

Every entry is a `topic`. Tags: [N] from the owner's notes, [+] new from the k6 docs.

| # | Part | Slug | Title | From |
|---|---|---|---|---|
| 01 | 1 | `what-is-performance-testing` | What Is Performance Testing? | N: what, why |
| 02 | 1 | `performance-test-types` | Types of Performance Testing | N+: capacity, load, stress, volume, spike, soak |
| 03 | 1 | `choosing-a-tool` | Choosing a Performance Testing Tool | N: tool table, elimination steps, the owner's experience |
| 04 | 2 | `what-is-k6` | What Is k6? | N: what, why k6 |
| 05 | 2 | `install-and-first-script` | Install k6 and Run Your First Script | N: install, first script, run, output |
| 06 | 2 | `reading-results` | Reading the k6 Results | N: built-in metrics, the most useful metrics, p95 and p99, an analysis checklist |
| 07 | 2 | `test-lifecycle` | The k6 Test Lifecycle | N: init, setup, VU code, teardown, code structure, good practices |
| 08 | 3 | `vus-duration-iterations` | VUs, Duration, and Iterations | N: both examples with the owner's math |
| 09 | 3 | `stages-and-checks` | Stages and Checks | N |
| 10 | 3 | `thresholds` | Thresholds | N+: abort on fail |
| 11 | 3 | `scenarios-and-executors` | Scenarios and Executors | N+: the traffic-mix example, the executors, open and closed models |
| 12 | 4 | `tags-and-groups` | Tags and Groups | N: many URLs, tags, groups |
| 13 | 4 | `api-flows` | POST Requests and API Flows | N: login, then pass the token |
| 14 | 4 | `env-and-data` | Environment Variables and Test Data | N: `__ENV`, CSV with `SharedArray` |
| 15 | 4 | `custom-metrics` | Custom Metrics | +: Counter, Gauge, Rate, Trend |
| 16 | 5 | `reports-and-dashboard` | Reports and the Web Dashboard | N+: `handleSummary`, the web dashboard, the HTML export |
| 17 | 5 | `influxdb-and-grafana` | Live Results with InfluxDB and Grafana | N: InfluxDB versions, install 1.x with Docker, `--out influxdb`, Grafana data source and dashboard |
| 18 | 5 | `k6-test-types` | Smoke, Load, Stress, Spike, Soak, and Breakpoint Tests | +: one script for each type |
| 19 | 5 | `k6-in-ci` | k6 in CI | +: GitHub Actions, thresholds as the gate |

Part titles: 1 "Performance testing basics", 2 "Start with k6", 3 "Configure the load", 4 "Write real scripts", 5 "Results and practice".

## 4. Code

| Part | Detail |
|---|---|
| Data | `lib/k6/topics.ts`: `K6 = defineFlatModule({ id: "k6", label: "k6", searchGroup: "k6", parts, entries, progress: { storageKey: "k6-progress" }, ui: K6_UI })` and `type K6Slug`. |
| Strings | `lib/k6/ui.ts` (`K6_UI`): `siteTitle` and `heading` "k6 Performance Testing", `headerLink` "k6", item eyebrow `TOPIC NN · K6`. The `sourceNote` says that the base is the owner's notes and that each fact has a cite to an official source. Bangla twin `K6_UI_BN` in `lib/bn/`. |
| Registry | `FLAT_MODULES = [SYSTEM_DESIGN, ARCHITECTURE, COURSE, K6]`. Header nav, sitemap, precache, stats, contents, dashboard, and `PROGRESS_KEYS` follow from it. |
| Routes | `app/(site)/k6/page.tsx` (`FlatModuleHome`) and `app/(site)/k6/[topic]/page.tsx` (`FlatTopicPage`), thin. `scripts/k6-route-map.json` has `/k6/` and the 19 page routes. Its name goes into `check_routes.py`, `check_outline.py`, and `check_sources.py`. |
| Search | `...flatDocs(K6)` after the Course in `app/search-index.json/route.ts`. |
| Hand-written text | Add the module to the module names in `lib/ui.ts`, `lib/contents.ts`, `lib/home.ts`, and their Bangla twins, where the other flat modules are named. |
| Counts | Routes 130 → 150. Content pages 121 → 140. `check_sources.py` prints `OK 140 pages checked, 0 skipped`. Update the numbers in CLAUDE.md, `docs/ARCHITECTURE.md`, and the tests that pin them. |
| Tests | `tests/k6.test.ts`: the entries, `K6Slug`, the MDX files, and the route map agree; the page shape (section 5); each image `src` is a file in `public/`; search has K6 docs; the precache has the K6 routes. |

## 5. Page shape

| Rule | Detail |
|---|---|
| Sections | The `##` sections follow the owner's notes. `## Key words` (a table) is always last. `npm test` checks that it is last. |
| Voices | Each `##` section except `## Key words` has `<Voices>` with `<Technical>`, `<Layman>`, `<Bangla>`. The Bangla text follows the Course term style: আপনি, and English stays English for commands, flags, metric names, product names, and common technical terms. |
| Code | Fenced code blocks with a language (`javascript`, `bash`, `powershell`, `sql`, `yaml`, `text`). k6 output is a `text` block. |
| Demo target | `https://quickpizza.grafana.com` or `http://localhost:3000`. The owner's local server examples stay with `localhost`. |
| Images | `<MdxImage src="/images/k6/<name>.webp" alt="…" width height />`. Only the owner's own screenshots: the first-run output, the vus-duration output, the HTML report, and the 4 Grafana steps. |

## 6. Content rules

| Rule | Detail |
|---|---|
| Sources | The owner's notes are not public and have no `<Cite>`. Each fact has a `<Cite>` to an official source: grafana.com/docs/k6, github.com/grafana/k6, docs.influxdata.com, grafana.com/docs/grafana, docs.docker.com, docs.github.com, and the vendor sites of the tools in the tool table. The 62.3 % JavaScript number cites the Stack Overflow Developer Survey 2024, not Statista. No blogs or AI summaries. |
| Owner text | Keep the owner's examples, numbers, and math. Fix only what is wrong or out of date, with a cite. |
| Out of date | `test-api.k6.io` → QuickPizza. k6 v2.0.0 → the current version and the install page. The third-party `benc-uk/k6-reporter` stays out; the page uses `handleSummary` and the built-in web dashboard. The Grafana install steps follow the current Grafana docs. |
| Third-party art | The 2 lifecycle images are screenshots of the k6 docs. Replace them with a table and a text diagram, with cites. The Statista chart is not used. |
| Privacy | No real login, password, or token. The dmoney.roadtocareer.net examples use `https://api.example.com` and `__ENV` values. The JWT tokens in the outputs become `<token>`. The bKash traffic-mix example stays as a "mobile wallet" example with `https://wallet.example.com` URLs. No real person's name, email, home path, or login name. |
| Tool facts | Each row of the tool table has a cite to the tool's own site or repo. A row with no official source for a claim loses that claim. |
| Research notes | `docs/superpowers/research/k6-<slug>.md`: sources (S1, S2, …) and a claims table with quotes. Written before the page. |
| Fact check | `docs/superpowers/research/k6-<slug>.factcheck.md` and `k6-<slug>.voices.factcheck.md`. Each ends with `Open FAILs: N`. An agent that did not write the page writes them. A page is done only when both end with `Open FAILs: 0`. |
| Raw text | Never commit fetched doc text. Run `python3 scripts/linux_overlap.py content/k6/<slug>.mdx <raw-dir>` to find copied word runs. |

## 7. Out of scope

- k6 browser module, k6 Studio, and Grafana Cloud k6.
- InfluxDB 2.x and 3.x setup (the page names them and links the extension, but installs only 1.x).
- Prometheus remote write output.

## 8. Checks

`npm test`, `npm run build`, `python3 -m unittest scripts/test_checks.py`, and `check_routes.py`, `check_links.py`, `check_outline.py`, `check_sources.py` on `out/`. Then a browser check of `/k6/` and 2 topic pages in both themes and both voice defaults.
