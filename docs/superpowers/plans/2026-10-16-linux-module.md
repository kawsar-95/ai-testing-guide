# Linux Module Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a `/linux/` module: a personal Linux roadmap with progress tracking and 12 stage pages of notes, built from the 257 links of roadmap.sh/linux and checked against official docs.

**Architecture:** A data-driven section like `/prep/`. `lib/linux/stages.ts` is the one list of stages and topics. The home page is a client-side checklist. Each stage is an MDX page in `content/linux/`. The module reuses the `prep` progress code, with the storage key as a parameter. A research pipeline (fetch, notes, official check, fact-check) feeds the MDX pages.

**Tech Stack:** Next.js 16 (App Router, static export), React 19, TypeScript, MDX, Tailwind 4, `node --test`, Python 3 (scripts).

**Spec:** `docs/superpowers/specs/2026-10-16-linux-module-design.md`

## Global Constraints

- Branch `feat/linux-module`, created from `feat/prep-module`. Do not touch `main`.
- Node `>=22.18.0`. Tests run `.ts` files without a compile step, so imports inside `lib/` use the `.ts` extension (`./progress.ts`), as in `lib/prep/`.
- Internal links are `/linux/<stage>/`, with no repo name. Use `next/link`.
- No inline `style={{...}}`, no icon packages. Use the tokens and Tailwind classes of `app/globals.css`. Every text color keeps 4.5:1 contrast in both themes.
- Storage key: `linux-progress` (a JSON list of done topic ids). The `prep-progress` key and the prep behavior do not change.
- Every read and write of `localStorage` is in `try/catch`. The server render shows 0 done.
- Original wording. Raw third-party text is never committed (it stays in the scratchpad). A research note holds at most one short quote for each claim.
- Each fact about a command, a flag, or a path has an official source (man7.org, kernel.org, systemd.io, a GNU manual) and a `<Cite>`.
- A stage is done only when its `linux-<stage>.factcheck.md` ends with `Open FAILs: 0`.
- Page template and rules of `CLAUDE.md` apply: `metadata`, `page` (`updated`, `sources`), `# Title`, lede, `<PageMeta />`, then `##` sections. The closing tag of a `Callout` that ends in a list goes at column 0.
- The routes grow from 38 to 51 (`/linux/` and 12 stages). `check_sources.py out` must print `OK 35 pages checked, 0 skipped`.
- End each commit message with the line `Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>`.
- Use Simplified Technical English for prose (short sentences, active voice, one term for one thing).

## Review Focus

Failure modes that the spec implies and that no obvious test covers. Each one is pinned to a task.

1. A bad, missing, or blocked `localStorage` value (`null`, `{"a":1}`, throws on access): the module shows 0 done and does not crash. Task 3.
2. A stored id of a topic that no longer exists must not push the percent above 100 or count as done. Task 3.
3. A heading in an MDX file is renamed, so the checklist link `/linux/<stage>/#<anchor>` points to nothing. Task 5 (data test).
4. A build with `PAGES_BASE_PATH=/learn-software-testing-with-ai`: links of the module must include the base path, and the search index must still load. Task 24.
5. Two modules share one `localStorage`: a change of `prep-progress` must not change `linux-progress`, and the reverse. Task 3.

## Stage and topic table (authoritative)

Topic ids are `<stage-slug>-NNN`, numbered from `001` in the order below. The topic title is also the exact text of its `##` heading in the MDX file. "Roadmap files" are the stems of `roadmaps/linux/content/<stem>@<id>.md` in `github.com/nilbuild/developer-roadmap`. The 102 topics add up as 7+9+20+6+8+6+6+7+15+8+6+4.

| # | Stage slug | Title | Description (one line) | Topics (title ← roadmap file stem) |
|---|---|---|---|---|
| 1 | `shell-basics` | Shell Basics | Move around the system, read help, and understand the shell and its paths. | Shell Basics ← `shell-and-other-basics`; Basic Commands ← `basic-commands`; Navigation Basics ← `navigation-basics`; Command Help ← `command-help`; Command Path ← `command-path`; Directory Hierarchy ← `directory-hierarchy-overview`; Environment Variables ← `environment-variables` |
| 2 | `files` | Working with Files | Create, copy, move, edit, link, archive, and compress files. | Working with Files ← `working-with-files`; Creating Files and Directories ← `creating--deleting-files--dirs`; Copying and Renaming ← `copying-and-renaming`; Moving Files and Directories ← `moving-files--directories`; Editing Files ← `editing-files`; Nano ← `nano`; Vim ← `vim`; Soft and Hard Links ← `soft-links--hard-links`; Archiving and Compressing ← `archiving-and-compressing` |
| 3 | `text-processing` | Text Processing | Use streams, pipes, and small tools to search and shape text. | Text Processing ← `text-processing`; Stdout, Stdin, and Stderr ← `stdout--stdin--stderr`; Redirects ← `redirects`; Pipes ← `pipe`; Tee ← `tee`; grep ← `grep`; awk ← `awk`; cut ← `cut`; sort ← `sort`; uniq ← `uniq`; wc ← `wc`; head ← `head`; tail ← `tail`; nl ← `nl`; paste ← `paste`; join ← `join`; split ← `split`; tr ← `tr`; expand ← `expand`; unexpand ← `unexpand` |
| 4 | `users-permissions` | Users and Permissions | Manage users and groups, use root with care, and control access to files. | User Management ← `user-management`; Users and Groups ← `users-and-groups`; Create, Update, and Delete Users ← `create--delete--update`; Super User ← `super-user`; File Permissions ← `file-permissions`; Managing Permissions ← `managing-permissions` |
| 5 | `processes` | Processes | List, run in the background, signal, and limit processes. | Process Management ← `process-management`; Listing and Finding Processes ← `listing--finding-processes`; Background and Foreground Processes ← `background--foreground-processes`; Killing Processes ← `killing-processes`; Process Signals ← `process-signals`; Process Priorities ← `process-priorities`; Process Forking ← `process-forking`; Ulimits ← `ulimits` |
| 6 | `shell-scripting` | Shell Scripting | Automate work with variables, conditions, loops, and debugging. | Shell Programming ← `shell-programming`; Variables ← `variables`; Literals ← `literals`; Conditionals ← `conditionals`; Loops ← `loops`; Debugging ← `debugging` |
| 7 | `packages` | Packages | Find, install, update, and remove software with package managers. | Package Management ← `package-management`; Package Repositories ← `package-repositories`; Finding and Installing Packages ← `finding--installing-packages`; Installing, Removing, and Upgrading Packages ← `install--remove--upgrade-packages` (no roadmap links: use official docs only); Listing Installed Packages ← `listing-installed-packages`; Snap ← `snap` |
| 8 | `disks-filesystems` | Disks and Filesystems | Understand disks, filesystems, mounts, swap, and LVM. | Disks and Filesystems ← `disks-and-filesystems`; Filesystems ← `filesystems`; Inodes ← `inodes`; Mounts ← `mounts`; Adding Disks ← `adding-disks`; Swap ← `swap`; LVM ← `lvm` |
| 9 | `networking` | Networking | Understand the network stack and use the tools that test and protect it. | Networking ← `networking`; TCP/IP ← `tcpip-stack`; Ethernet, ARP, and RARP ← `ethernet--arprarp`; Subnetting ← `subnetting`; IP Routing ← `ip-routing`; DHCP ← `dhcp`; DNS Resolution ← `dns-resolution`; ICMP ← `icmp`; ping ← `ping`; traceroute ← `traceroute`; netstat ← `netstat`; Netfilter ← `netfilter`; Packet Analysis ← `packet-analysis`; SSH ← `ssh`; File Transfer ← `file-transfer` |
| 10 | `boot-services` | Boot and Services | See how Linux starts, and manage services with systemd. | Booting Linux ← `booting-linux`; Boot Loaders ← `boot-loaders`; Service Management ← `service-management-systemd`; Creating Services ← `creating-new-services`; Starting and Stopping Services ← `starting--stopping-services`; Checking Service Status ← `checking-service-status`; Checking Service Logs ← `checking-service-logs`; Running Services ← `services-running` |
| 11 | `troubleshooting` | Troubleshooting | Check the health of a server, read the logs, and find the cause of a fault. | Server Review ← `server-review`; Uptime and Load ← `uptime-and-load`; Available Memory and Disk ← `available-memory--disk`; System Logs ← `logs`; Authentication Logs ← `authentication-logs`; Troubleshooting ← `troubleshooting` |
| 12 | `containers` | Containers | Learn how containers isolate processes: runtimes, Docker, and cgroups. | Containerization ← `containerization`; Container Runtime ← `container-runtime`; Docker ← `docker`; Cgroups ← `cgroups` |

---

### Task 1: Branch, link list, and topic table

**Files:**
- Create: `docs/superpowers/research/linux-topics.md`
- Move: `linux-roadmap-links.md` (project root, untracked) to `docs/superpowers/research/linux-roadmap-links.md`
- Commit also: the spec and this plan

- [ ] **Step 1: Create the branch**

Run: `git switch -c feat/linux-module` (from `feat/prep-module`).
Expected: `Switched to a new branch 'feat/linux-module'`.

- [ ] **Step 2: Move the link list**

Run: `mv linux-roadmap-links.md docs/superpowers/research/linux-roadmap-links.md` (the file is untracked, so `git mv` does not apply).
Expected: the root has no `linux-roadmap-links.md`. The file keeps the format `## <Topic>` then `- [<type>] [<title>](<url>)`.

- [ ] **Step 3: Write `docs/superpowers/research/linux-topics.md`**

Copy the table of "Stage and topic table" above as markdown. Add one line at the top: the source of the topics (roadmap.sh/linux, 102 topic files, read on 2026-10-16) and the note that the grouping into stages is the owner's plan, since the repo has no hierarchy file.

- [ ] **Step 4: Verify the link list**

Run: `grep -c '^- \[' docs/superpowers/research/linux-roadmap-links.md`
Expected: `294`.

- [ ] **Step 5: Commit**

```bash
git add docs/superpowers/specs/2026-10-16-linux-module-design.md docs/superpowers/plans/2026-10-16-linux-module.md docs/superpowers/research/linux-topics.md docs/superpowers/research/linux-roadmap-links.md
git commit -m "docs(linux): add the spec, the plan, the topic table, and the link list"
```

---

### Task 2: Fetch and overlap scripts

**Files:**
- Create: `scripts/linux_fetch.py`, `scripts/linux_overlap.py`, `scripts/test_linux_scripts.py`

**Interfaces:**
- Produces (`scripts/linux_fetch.py`):
  - `parse_links(markdown: str) -> list[dict]`: one dict `{topic, type, title, url}` for each line `- [type] [title](url)`; `topic` is the last `## ` heading.
  - `html_to_text(html: str) -> str`: visible text. Drops `script`, `style`, `nav`, `header`, `footer`, `aside`, `form`, `svg`. Keeps `pre` and `code` text. Collapses blank lines.
  - `should_fetch(link: dict) -> bool`: `False` for type `video`, `course`, `roadmap`, and for hosts `youtube.com`, `youtu.be`.
  - CLI: `python3 scripts/linux_fetch.py <links.md> <out-dir>`. It writes `<out-dir>/<NNN>.txt` (NNN = 1-based index in the link list) and `<out-dir>/report.tsv` (`index, topic, url, status, bytes`; status is `ok`, `title-only`, `robots`, `http-<code>`, or `error:<name>`).
  - Rules: one request at a time; at least 2 s between requests to the same host; 20 s timeout; check `robots.txt` with `urllib.robotparser` and skip a disallowed URL (`robots`); header `User-Agent: Mozilla/5.0 (compatible; linux-notes-research/1.0)`; no retry loop.
- Produces (`scripts/linux_overlap.py`):
  - `shingles(text: str, n: int = 8) -> set[tuple[str, ...]]`: lowercase word n-grams; fenced code blocks (between triple backticks) are removed first.
  - `overlap(mdx: str, corpus: list[str], n: int = 8) -> list[str]`: each n-word run of `mdx` (outside code fences) that also occurs in the corpus, as text.
  - CLI: `python3 scripts/linux_overlap.py <file.mdx> <raw-dir>` prints each overlap and exits 1 if there is any.

- [ ] **Step 1: Write the failing tests in `scripts/test_linux_scripts.py`** (`unittest`, same style as `scripts/test_checks.py`)

```python
def test_parse_links_reads_topic_type_title_url(self): ...
    # "## AWK\n\n- [article] [AWK Tutorial](https://x.test/a)\n- [video] [V](https://youtu.be/1)"
    # -> [{"topic":"AWK","type":"article","title":"AWK Tutorial","url":"https://x.test/a"}, {... "video" ...}]
def test_html_to_text_drops_chrome_and_keeps_code(self): ...
    # "<nav>menu</nav><p>Use <code>ls -l</code></p><script>x()</script>" -> contains "Use ls -l", not "menu", not "x()"
def test_should_fetch_skips_video_course_roadmap_and_youtube(self): ...
def test_overlap_finds_a_copied_run_of_8_words_and_ignores_code_fences(self): ...
    # mdx copies 8 words of corpus -> one hit; the same 8 words inside a ``` block -> no hit
def test_overlap_is_empty_for_a_rewritten_text(self): ...
```

- [ ] **Step 2: Run to confirm failure**

Run: `python3 -m unittest scripts/test_linux_scripts.py`
Expected: FAIL (`ModuleNotFoundError: linux_fetch`).

- [ ] **Step 3: Implement both scripts** with the signatures above. Use `html.parser.HTMLParser` for `html_to_text` and `urllib.request` for the CLI. Only the standard library.

- [ ] **Step 4: Run to confirm they pass**

Run: `python3 -m unittest scripts/test_linux_scripts.py`
Expected: `OK`.

- [ ] **Step 5: Commit**

```bash
git add scripts/linux_fetch.py scripts/linux_overlap.py scripts/test_linux_scripts.py
git commit -m "feat(linux): add the link fetch script and the text overlap check"
```

---

### Task 3: Progress key as a parameter

**Files:**
- Modify: `lib/prep/store.ts` (`createProgressStore`), `components/prep/useProgress.ts`
- Test: `tests/linux-progress.test.ts`

**Interfaces:**
- Consumes: `createProgressStore(storage)`, `STORAGE_KEY`, `parseProgress`, `countDone`, `percent` from `lib/prep/`.
- Produces:
  - `createProgressStore(storage: StorageLike | null, key: string = STORAGE_KEY)` in `lib/prep/store.ts`. With one argument it behaves as before.
  - `createUseProgress(key: string): () => { done: readonly string[]; toggle(id: string): void; markDone(id: string): void }` in `components/prep/useProgress.ts`. One lazy store for each call. `useProgress` becomes `createUseProgress(STORAGE_KEY)` and keeps its public shape.

- [ ] **Step 1: Write the failing tests in `tests/linux-progress.test.ts`** (use a fake `StorageLike` backed by a `Map`)

```ts
test("a store with the key 'linux-progress' writes only that key", ...)       // toggle("a") -> map has "linux-progress" = '["a"]', no "prep-progress"
test("the default key is still 'prep-progress'", ...)                         // createProgressStore(fake) writes "prep-progress"
test("a prep store and a linux store on one storage do not change each other", ...) // Review Focus 5
test("bad stored values give an empty list", ...)                              // "", "not json", '{"a":1}', "null" -> []   // Review Focus 1
test("a storage that throws on read gives an empty list and still toggles in memory", ...) // Review Focus 1
test("a stored id of a removed topic is not counted and the percent stays at most 100", ...) // Review Focus 2
    // countDone(["x-001","x-002"], ["gone-009","x-001"]) === 1; percent(1, 2) === 50
```

- [ ] **Step 2: Run to confirm failure**

Run: `node --test tests/linux-progress.test.ts`
Expected: FAIL (the key test fails because the key is fixed).

- [ ] **Step 3: Implement.** Add the `key` parameter and pass it to `createStorageStore` (replace the fixed `STORAGE_KEY` in `options`). In `useProgress.ts`, wrap the existing body in `createUseProgress(key)`: the lazy `store`, the `subscribe` (`createSubscribe(getStore, key)`), and the hook move inside the factory closure.

- [ ] **Step 4: Run all tests**

Run: `npm test`
Expected: all pass, including the existing `prep-progress` tests.

- [ ] **Step 5: Commit**

```bash
git add lib/prep/store.ts components/prep/useProgress.ts tests/linux-progress.test.ts
git commit -m "refactor(prep): make the progress storage key a parameter"
```

---

### Task 4: Stage data

**Files:**
- Create: `lib/linux/stages.ts`, `lib/linux/ui.ts`
- Test: `tests/linux-data.test.ts` (the pure checks; Task 5 adds the MDX checks)

**Interfaces:**
- Produces (`lib/linux/stages.ts`):

```ts
export const LINUX_HOME = "/linux/";
export const LINUX_STORAGE_KEY = "linux-progress";
export type LinuxStageSlug = "shell-basics" | "files" | "text-processing" | "users-permissions" | "processes"
  | "shell-scripting" | "packages" | "disks-filesystems" | "networking" | "boot-services" | "troubleshooting" | "containers";
export type LinuxTopic = { id: string; title: string; anchor: string };
export type LinuxStage = { slug: LinuxStageSlug; title: string; description: string; number: number; href: string; topics: readonly LinuxTopic[] };
export const STAGES: readonly LinuxStage[];        // 12 stages, in the order of the table
export const LINUX_ROUTES: readonly string[];       // [LINUX_HOME, ...stage hrefs]
export const ALL_TOPIC_IDS: readonly string[];      // 102 ids
export function getStage(slug: string): LinuxStage | undefined;
export function studyMinutes(stage: LinuxStage): number;   // topics.length * 20
export function formatMinutes(minutes: number): string;    // 140 -> "2 h 20 min"; 60 -> "1 h"; 45 -> "45 min"
```

- `number` runs 1–12. `href` is `/linux/<slug>/`. `anchor` is the `github-slugger` slug of the title, with one `GithubSlugger` for each stage (the same rule as `lib/headings.ts`).
- Produces (`lib/linux/ui.ts`): `export const LINUX_UI = {...}`, the English strings: `siteTitle`, `description`, `eyebrow(stages, topics)`, `heading`, `lede`, `privacyNote`, `overallLabel`, `stagesHeading`, `summaryText(done, remaining)`, `percentText(v)`, `stageCount(done, total)`, `stageMeta(topics, minutesText)`, `stageEyebrow(number)`, `stageNav`, `allStages`, `previousStage`, `nextStage`, `checklistHeading`, `checklistLabel(title)`, `stageProgressLabel(title)`, `sidebarNav`, `sidebarStageLabel(number)`, `sidebarCount(done, total)`, `sidebarCountSr(done, total)`, `headerLink` ("Linux"), `crossToTutorial`, `crossToLinux`.

- [ ] **Step 1: Write the failing tests in `tests/linux-data.test.ts`**

```ts
test("there are 12 stages in the order of the table, with unique slugs", ...)
test("the stage topic counts are 7, 9, 20, 6, 8, 6, 6, 7, 15, 8, 6, 4 and the total is 102", ...)
test("topic ids are '<stage-slug>-NNN' from 001, unique across all stages", ...)
test("anchors are unique inside a stage", ...)
test("getStage finds a slug and returns undefined for an unknown one", ...)
test("LINUX_ROUTES is '/linux/' then the 12 stage hrefs, each ending with '/'", ...)
test("studyMinutes is 20 for each topic and formatMinutes gives '2 h 20 min', '1 h', '45 min'", ...)
test("anchor of 'Stdout, Stdin, and Stderr' is 'stdout-stdin-and-stderr' and of 'TCP/IP' is 'tcpip'", ...)
```

- [ ] **Step 2: Run to confirm failure**

Run: `node --test tests/linux-data.test.ts`
Expected: FAIL (module not found).

- [ ] **Step 3: Implement** `lib/linux/stages.ts` from the "Stage and topic table" (titles and descriptions exactly as written there; the file stems are not in the code) and `lib/linux/ui.ts`.

- [ ] **Step 4: Run the tests**

Run: `node --test tests/linux-data.test.ts`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add lib/linux tests/linux-data.test.ts
git commit -m "feat(linux): add the stage data and the UI strings"
```

---

### Task 5: Skeleton pages and the MDX data tests

**Files:**
- Create: `content/linux/<stage>.mdx` for the 12 stages
- Modify: `tests/nav.test.ts` (the `mdxFiles` list), `tests/linux-data.test.ts`

**Interfaces:**
- Consumes: `STAGES` from `lib/linux/stages.ts`; `outlineFromSource` from `lib/outline.ts`.
- Produces: 12 MDX files that satisfy the page template. A stage task (Tasks 12–23) replaces each one.

- [ ] **Step 1: Add the failing tests to `tests/linux-data.test.ts`**

```ts
test("content/linux has exactly one MDX file for each stage", ...)
test("every stage MDX exports its metadata and its page", ...)                     // regex like tests/nav.test.ts, plus /^export const page = \{/m
test("every topic anchor is a ## heading id in its stage MDX, in the order of the data", ...) // Review Focus 3
test("every ## heading of a stage MDX is a topic of that stage", ...)             // no stray sections
```

In `tests/nav.test.ts`, change `mdxFiles` to skip the files that start with `linux/`, and keep the test name. The tutorial test must still list exactly the tutorial pages.

- [ ] **Step 2: Run to confirm failure**

Run: `node --test tests/linux-data.test.ts tests/nav.test.ts`
Expected: the new tests FAIL (no files). `nav.test.ts` passes.

- [ ] **Step 3: Create the 12 skeleton files.** Each file follows the page template:
  - `metadata` with `title` = stage title and `description` = stage description.
  - `page` with `updated: '2026-10-16'` and one source: `{ title: 'Linux Roadmap', publisher: 'roadmap.sh', url: 'https://roadmap.sh/linux', accessed: '2026-10-16' }`.
  - `# <Stage title>`, a lede (the stage description), `<PageMeta />`, then one `##` heading for each topic (the exact title), each with one sentence: `Notes for this topic are in progress.` The lede cites the source with `<Cite n={1} />` at its end.
  - Skeletons are scaffolding. Tasks 12–23 replace them.

- [ ] **Step 4: Run the tests**

Run: `npm test`
Expected: all pass.

- [ ] **Step 5: Commit**

```bash
git add content/linux tests/nav.test.ts tests/linux-data.test.ts
git commit -m "feat(linux): add the 12 stage pages as skeletons and the MDX data tests"
```

---

### Task 6: Routes and components

**Files:**
- Create: `app/(site)/linux/page.tsx`, `app/(site)/linux/[stage]/page.tsx`, `components/pages/LinuxHome.tsx`, `components/linux/useLinuxProgress.ts`, `components/linux/LinuxProgressSummary.tsx`, `components/linux/StageProgress.tsx`, `components/linux/TopicChecklist.tsx`

**Interfaces:**
- Consumes: `createUseProgress`, `ProgressBar` (`components/prep/`), `STAGES`, `getStage`, `LINUX_HOME`, `LINUX_STORAGE_KEY`, `LINUX_UI`, `studyMinutes`, `formatMinutes`; `MetaLine`, `Sources`, `ReadingProgress`, `BackToTop`, `SectionNav`, `Callout`; `getOutline(group, slug)`, `editUrl(group, slug)`.
- Produces:
  - `useLinuxProgress = createUseProgress(LINUX_STORAGE_KEY)` (client file).
  - `LinuxProgressSummary({ ids, label? })`: the overall bar and "Done N · Remaining M", like `ProgressSummary`, with `LINUX_UI` strings and the Linux hook.
  - `StageProgress({ ids, title })`: a small "N / M done" text and a `ProgressBar` for one stage.
  - `TopicChecklist({ stage }: { stage: LinuxStage })`: a `<ul>`; each `<li>` has a native checkbox (accessible name `LINUX_UI.checklistLabel(title)`, `checked` from the hook, `onChange` toggles) and a `next/link` to `${stage.href}#${topic.anchor}`. Each topic row has the element id `topic.id`.
  - Routes: `dynamicParams = false`; `generateStaticParams` returns `STAGES.map(s => ({ stage: s.slug }))`; an unknown stage gives `notFound()`.

- [ ] **Step 1: Write the pages and components.**
  - Home (`LinuxHome`): header (eyebrow, h1, lede, like `PrepHome`), a `Callout` with `privacyNote`, `LinuxProgressSummary` for `ALL_TOPIC_IDS`, then one section for each stage: eyebrow `LINUX_UI.stageEyebrow(number)`, the title as a link, the description, `stageMeta`, `StageProgress`, `TopicChecklist`.
  - Stage page: same width and parts as `app/(site)/[group]/[page]/page.tsx`. It imports `@/content/linux/${stage}.mdx`, provides `PageMeta` (sections from `getOutline("linux", slug)`, `editUrl("linux", slug)`), renders `Sources`, `SectionNav`, `ReadingProgress`, `BackToTop`. Above the article: eyebrow `LINUX_UI.stageEyebrow(number)` and `LinuxProgressSummary` for the ids of the stage. Below the article and the sources: a `<section>` with `checklistHeading` and `TopicChecklist`. At the end: previous and next stage links and a link to `LINUX_HOME` (same pattern as `AreaNav` in the prep page).
  - Metadata: `generateMetadata` returns the `metadata` export of the MDX file.

- [ ] **Step 2: Build**

Run: `npm run build`
Expected: success. The route list shows `/linux` and 12 `/linux/<stage>` pages.

- [ ] **Step 3: Check the output**

Run: `python3 scripts/check_outline.py out --routes /linux/shell-basics/ /linux/files/`
Expected: `OK N TOC links` (N > 0).
Run: `grep -c 'type="checkbox"' out/linux/index.html`
Expected: `102`.

- [ ] **Step 4: Manual check.** Run `npm run dev`, open `/linux/`, tick 2 topics, reload: the ticks stay and the bars change. Open `/linux/files/`: the same 2 topics (if they are in that stage) show as ticked. Report what you saw. No automated test covers the click behavior, because the repo has no component test setup.

- [ ] **Step 5: Commit**

```bash
git add "app/(site)/linux" components/pages/LinuxHome.tsx components/linux
git commit -m "feat(linux): add the roadmap home and the stage pages"
```

---

### Task 7: Shell integration

**Files:**
- Create: `components/linux/LinuxSidebarList.tsx`
- Modify: `components/layout/NavList.tsx`, `components/layout/SiteHeader.tsx`

**Interfaces:**
- Produces: `LinuxSidebarList({ activePath, onNavigate })`: the same markup and classes as `PrepSidebarList`, over `STAGES`, with the count of done topics for each stage and `aria-label={LINUX_UI.sidebarNav}`.
- `NavList` shows `LinuxSidebarList` when `activePath` starts with `LINUX_HOME`. The cross links above the list show the two sections that are not the current one: tutorial (`/`), prep (`PREP_HOME`), Linux (`LINUX_HOME`). The link text comes from `PREP_UI` and `LINUX_UI`.
- `SiteHeader` gets one more link, `LINUX_UI.headerLink`, after the prep link, with the same classes.

- [ ] **Step 1: Implement** the three changes above.

- [ ] **Step 2: Build and inspect**

Run: `npm run build && grep -c 'aria-label="Stages"' out/linux/files/index.html` (use the real `sidebarNav` value).
Expected: `1` or more. The tutorial pages still show the tutorial list: `grep -c 'PART 01' out/getting-started/setup/index.html` is `1` or more.

- [ ] **Step 3: Manual check.** In `npm run dev`, open the mobile drawer on `/linux/files/`: it lists the 12 stages and closes on a link click. Report what you saw.

- [ ] **Step 4: Commit**

```bash
git add components/linux/LinuxSidebarList.tsx components/layout
git commit -m "feat(linux): show the stages in the sidebar, the drawer, and the header"
```

---

### Task 8: Search, sitemap, and PWA

**Files:**
- Modify: `lib/search.ts`, `app/search-index.json/route.ts`, `app/sitemap.ts`, `lib/pwa.ts`, `components/navigation/SearchPalette.tsx`
- Test: `tests/search.test.ts`, `tests/pwa.test.ts`

**Interfaces:**
- Consumes: `STAGES`, `LINUX_ROUTES`.
- Produces:
  - `buildSearchDocs(pages: { page: SearchPage; source: string }[])` where `type SearchPage = { href: string; title: string; part: number | null; group: string }`. `NavPage` still fits it. Tutorial results do not change.
  - `buildLinuxSearchDocs(entries: { stage: LinuxStage; source: string }[]): SearchDoc[]`: for each stage one intro doc and one doc for each `##` section; `part: null`, `group: "linux"`, `page: stage.title`, `id` and `href` as for tutorial pages.
  - `SearchHit` gets a `group: string` field, and the index stores it. The palette label for a hit with `part === null` is `${hit.group.toUpperCase()} · ${hit.page}`.
  - `precacheUrls` and the sitemap include `LINUX_ROUTES`.

- [ ] **Step 1: Write the failing tests**

```ts
// tests/search.test.ts
test("buildLinuxSearchDocs gives an intro doc and one doc per ## section for each stage", ...)
test("a linux doc has group 'linux', part null, and an href '/linux/<stage>/#<anchor>' for a section", ...)
test("linux doc ids are unique and do not clash with tutorial or prep ids", ...)
test("a search for the topic title 'Cgroups' finds a hit with group 'linux' and href '/linux/containers/#cgroups'", ...)
test("runSearch hits carry the group", ...)
// tests/pwa.test.ts
test("precacheUrls includes /linux/ and the 12 stage routes", ...)
```

- [ ] **Step 2: Run to confirm failure**

Run: `node --test tests/search.test.ts tests/pwa.test.ts`
Expected: the new tests FAIL.

- [ ] **Step 3: Implement.** Reuse the section logic of `buildSearchDocs` for both builders (one internal helper). Add the Linux docs to the route in `app/search-index.json/route.ts` (read `content/linux/<slug>.mdx` for each stage). Add `LINUX_ROUTES` to `app/sitemap.ts` and `lib/pwa.ts`.

- [ ] **Step 4: Run all tests**

Run: `npm test`
Expected: all pass. If a test counts the precache URLs or the search docs, update its expected number and say why in the commit message.

- [ ] **Step 5: Commit**

```bash
git add lib/search.ts lib/pwa.ts app/search-index.json/route.ts app/sitemap.ts components/navigation/SearchPalette.tsx tests/search.test.ts tests/pwa.test.ts
git commit -m "feat(linux): add the Linux pages to search, the sitemap, and the precache"
```

---

### Task 9: Route map and Python checks

**Files:**
- Create: `scripts/linux-route-map.json`
- Modify: `scripts/check_routes.py`, `scripts/check_outline.py`, `scripts/test_checks.py`

**Interfaces:**
- `scripts/linux-route-map.json`: an identity map of the 13 routes (`/linux/` and the 12 stage routes), like `prep-route-map.json`.
- `check_routes.load_routes()` returns tutorial routes, then prep routes, then Linux routes.
- `check_outline.default_routes()` returns the tutorial routes (except `/`) and the 12 Linux stage routes. It does not return `/linux/`, which has no meta line. `check_sources.py` imports it, so it checks the same 35 pages.

- [ ] **Step 1: Write the failing tests in `scripts/test_checks.py`**
  - `test_linux_route_map_is_an_identity_map_of_the_linux_routes`: 13 keys, `/linux/` and `/linux/files/` present, key equals value, all end with `/`.
  - `test_load_routes_returns_tutorial_then_prep_then_linux_routes`: length `24 + 14 + 13`.
  - `test_default_routes_has_the_tutorial_pages_and_the_stage_pages_without_the_linux_home`: length 35, `/linux/` absent, `/linux/files/` present.
  - Change `RouteMapTest.test_route_map_has_one_unique_target_per_page` so the count of `content/**/*.mdx` skips `content/linux`.

- [ ] **Step 2: Run to confirm failure**

Run: `python3 -m unittest scripts/test_checks.py`
Expected: FAIL on the new tests.

- [ ] **Step 3: Implement** the JSON file and the two script changes.

- [ ] **Step 4: Run the tests and the checks**

Run: `python3 -m unittest scripts/test_checks.py scripts/test_linux_scripts.py`
Expected: `OK`.
Run: `npm run build && python3 scripts/check_routes.py out && python3 scripts/check_outline.py out`
Expected: no `MISSING` line; `OK N TOC links`.

- [ ] **Step 5: Commit**

```bash
git add scripts/linux-route-map.json scripts/check_routes.py scripts/check_outline.py scripts/test_checks.py
git commit -m "feat(linux): add the Linux routes to the Python checks"
```

---

### Task 10: Project documentation

**Files:**
- Modify: `CLAUDE.md`

- [ ] **Step 1: Update `CLAUDE.md`.** Add the Linux module to the structure table (`app/(site)/linux/`, `components/linux/`, `lib/linux/stages.ts`, `content/linux/`, `scripts/linux-route-map.json`, `scripts/linux_fetch.py`, `scripts/linux_overlap.py`). Change the route count (24 to 51 routes: `/`, 23 tutorial pages, `/prep/` and 13 areas, `/linux/` and 12 stages). Add a short "Linux module" section: the source rule (roadmap links plus an official doc for each command, flag, or path fact), the research files (`docs/superpowers/research/linux-*.md`), and that raw fetched text is never committed. Change the `check_sources.py` line to `OK 35 pages checked, 0 skipped`.
- [ ] **Step 2: Check the numbers against the code**

Run: `grep -n "24 routes\|OK 23" CLAUDE.md`
Expected: no match.

- [ ] **Step 3: Commit**

```bash
git add CLAUDE.md
git commit -m "docs(linux): describe the Linux module in CLAUDE.md"
```

---

### Task 11: Fetch the 257 links

**Files:**
- Create: `docs/superpowers/research/linux-fetch-report.md`
- Scratch (not committed): `$SCRATCH/linux-raw/` (use the session scratchpad directory)

- [ ] **Step 1: Run the fetch**

Run: `python3 scripts/linux_fetch.py docs/superpowers/research/linux-roadmap-links.md "$SCRATCH/linux-raw"`
Expected: `report.tsv` with 294 rows. It takes several minutes because of the 2 s host delay.

- [ ] **Step 2: Retry the failures once.** For each row with status `http-*` or `error:*`, ask the `web-fetch` agent to read the URL and save the text as `<out-dir>/<NNN>.txt`. Change the row status to `ok-retry` or leave the failure. Do not retry a `robots` row.

- [ ] **Step 3: Write `linux-fetch-report.md`.** One table: topic, url, final status. Add the counts for `ok`, `ok-retry`, `title-only`, `robots`, and failures. Do not add page text.

- [ ] **Step 4: Verify**

Run: `grep -c '| ok' docs/superpowers/research/linux-fetch-report.md`
Expected: a number that is at least 70 % of the fetched links. If it is lower, stop and report to the owner before Task 12.

- [ ] **Step 5: Commit**

```bash
git add docs/superpowers/research/linux-fetch-report.md
git commit -m "docs(linux): add the fetch report of the roadmap links"
```

---

### Tasks 12–23: One stage each

The 12 tasks are the same. Task 11+N is stage N of the table (Task 12 = `shell-basics`, Task 13 = `files`, Task 14 = `text-processing`, Task 15 = `users-permissions`, Task 16 = `processes`, Task 17 = `shell-scripting`, Task 18 = `packages`, Task 19 = `disks-filesystems`, Task 20 = `networking`, Task 21 = `boot-services`, Task 22 = `troubleshooting`, Task 23 = `containers`). Run them one at a time, in order, because every task runs `npm run build`, which writes to `out/`. The research and writing in steps 1–3 of two stages can overlap if each uses its own git worktree.

**Files (for stage `<s>`):**
- Create: `docs/superpowers/research/linux-<s>.md`, `docs/superpowers/research/linux-<s>.factcheck.md`
- Replace: `content/linux/<s>.mdx` (the skeleton)

**Interfaces:**
- Consumes: the topics of stage `<s>` in the table, their roadmap links in `linux-roadmap-links.md`, the raw text in `$SCRATCH/linux-raw/` (rows of `report.tsv` for those links).
- Produces: the finished page. The `##` headings stay exactly the topic titles of `lib/linux/stages.ts`, in the same order (Task 5 tests check it).

- [ ] **Step 1: Research notes.** Read the raw text of each link of the stage. Write `linux-<s>.md` in the format of `docs/superpowers/research/extend-hooks.md`: a source list (S1, S2, … with title, publisher, URL, access date) and a claims table (claim, source, quote of at most 25 words). Include the video and course links as title-only sources if you use them. A topic with no readable source gets its notes from the official doc only.

- [ ] **Step 2: Official check.** For each command, flag, or path claim, add a row with an official source (a man page on man7.org, the kernel docs, systemd.io, a GNU manual, or the distro doc of the tool) and a quote. Open each official page with the `web-fetch` agent. Do not use a blog for this step.

- [ ] **Step 3: Write the MDX.** Replace the skeleton with the final page:
  - The template of `CLAUDE.md`. `page.updated` is the day of the work. `page.sources` has the roadmap links that the page uses and the official docs, each cited at least once.
  - One `##` section for each topic, 100–250 words: what it is, the key commands in a fenced code block (language `bash` or `text`), and a last line "Why it matters for testing" with the angle of a QA engineer or SDET (CI runners, logs, flaky tests, test data). That line is the tutorial's own advice: say so in a `tip` callout, or cite a source if one supports it.
  - A `danger` callout for a command that can lose data (`rm -r`, `dd`, `mkfs`, `chmod -R`, `kill -9` on a wrong pid, and so on).
  - Own words. No sentence copied from a source.

- [ ] **Step 4: Overlap check**

Run: `python3 scripts/linux_overlap.py content/linux/<s>.mdx "$SCRATCH/linux-raw"`
Expected: no output, exit code 0. Rewrite any reported sentence.

- [ ] **Step 5: Fact-check by a fresh agent.** A different agent (not the writer) reads the MDX and the research notes. For each factual claim it writes one row in `linux-<s>.factcheck.md`: claim, cite, PASS or FAIL, quote. The file ends with `Open FAILs: N`. Fix each FAIL in the MDX or in the notes, and run the fact-check again until the last line is `Open FAILs: 0`.

- [ ] **Step 6: Run the checks**

Run: `npm test && npm run build && python3 scripts/check_sources.py out --routes /linux/<s>/ && python3 scripts/check_outline.py out --routes /linux/<s>/`
Expected: tests pass; the build passes; `OK 1 pages checked, 0 skipped`; `OK N TOC links`.

- [ ] **Step 7: Commit**

```bash
git add content/linux/<s>.mdx docs/superpowers/research/linux-<s>.md docs/superpowers/research/linux-<s>.factcheck.md
git commit -m "docs(linux): write the <s> stage and its fact-check report"
```

---

### Task 24: Full verification

**Files:** none (a fix goes to the file that fails)

- [ ] **Step 1: Run every check**

Run: `npm test && python3 -m unittest scripts/test_checks.py scripts/test_linux_scripts.py && npm run build`
Expected: all pass.
Run: `python3 scripts/check_routes.py out && python3 scripts/check_links.py out && python3 scripts/check_outline.py out && python3 scripts/check_sources.py out`
Expected: no `MISSING` or broken-link line; the last command prints `OK 35 pages checked, 0 skipped`.

- [ ] **Step 2: Fact-check gate**

Run: `grep -L "Open FAILs: 0" docs/superpowers/research/linux-*.factcheck.md`
Expected: no file listed (12 reports exist and each ends with `Open FAILs: 0`).

- [ ] **Step 3: Base-path build (Review Focus 4)**

Run: `PAGES_BASE_PATH=/learn-software-testing-with-ai npm run build`, copy `out/` to `<dir>/learn-software-testing-with-ai/`, run `python3 -m http.server 8000 -d <dir>`.
Expected: `/learn-software-testing-with-ai/linux/` loads; the checklist links and the sidebar links start with `/learn-software-testing-with-ai/linux/`; a search for a Linux topic returns a hit that opens the right page. Report what you saw. Then run a plain `npm run build` again, so `out/` is a root build.

- [ ] **Step 4: Skeleton leftovers**

Run: `grep -rl "Notes for this topic are in progress" content/linux`
Expected: no file.

- [ ] **Step 5: Report to the owner.** List: what shipped, the fetch counts (ok, retry, title-only, robots, failed), the topics that rely on official docs only, and any open question. Then offer the `superpowers:finishing-a-development-branch` step. Do not merge or push without the owner's word.
