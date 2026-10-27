# Linux module revamp Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Give all 103 Linux topics one short lesson shape, one page-level voice choice, and a "Continue" path, so a learner meets less at once.

**Architecture:** The 12 stage routes, `lib/linux/stages.ts`, and the progress key stay. A pure checker (`lib/linux-lesson.ts`) and a test pin the lesson shape. A small client switcher and scoped CSS give one voice choice for a Linux page. A pure `nextTopic` function and a client button give the path. The text rewrite happens stage by stage: a pilot first, then the other 11.

**Tech Stack:** Next.js 16, React 19, TypeScript, MDX, Tailwind 4, `node --test`.

**Spec:** `docs/superpowers/specs/2026-10-27-linux-revamp-design.md`

## Global Constraints

- No new routes. The 12 stage routes and the key `linux-progress` stay.
- The text before the `<details>` block of a topic has 150 words or fewer. Code blocks and `<Cite … />` tags do not count.
- Each `<details>` closing tag is at column 0.
- Each "Try it" command runs in a throw-away shell and the page shows the real output. No command changes the system outside the current directory, `/tmp`, or a user-level process.
- `<Layman>` and `<Bangla>` give no fact that `<Technical>` does not give. They have no Markdown heading.
- Every fact keeps its `<Cite>`. Every source stays cited at least once (`check_sources.py`).
- The "Permissions Cheat Sheet" topic keeps its original wording and has no voices.
- Other modules keep their per-section voice switchers.
- New UI text has an English string in `lib/linux/ui.ts` and a Bangla twin in `lib/bn/linux.ts`.
- A stage is done only when `linux-<stage>.factcheck.md` and `linux-<stage>.voices.factcheck.md` both end with `Open FAILs: 0`, written by an agent that did not write the stage.
- Commit messages end with `Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>`.

## Review Focus

1. A saved `linux-voice` value that is not one of the three voices, or a blocked `localStorage`: the page follows the site default and does not throw. (Task 2 tests `resolvePageVoice`.)
2. `nextTopic` gets ids from another module, or an unknown id: it ignores them. (Task 3.)
3. A fenced code block with more than 150 words, or a `<Cite />` tag, must not count toward the word limit. (Task 1.)
4. A topic with a second `<details>` block or text after `</details>`: the checker reports it. (Task 1.)
5. A hash link (`#anchor`) into a topic while the page voice is `layman` or `bangla`: the right panel shows and the page scrolls. (Task 2, manual check in the browser.)

---

## File structure

| File | Responsibility |
|---|---|
| `lib/linux-lesson.ts` (new) | `topicTechnicals` and `lessonProblems`: the lesson shape check. Relative `.ts` imports only. |
| `tests/linux-lesson.test.ts` (new) | Unit tests of the checker, and the check of every converted stage (`LESSON_STAGES`). |
| `lib/voice.ts` (modify) | `PAGE_VOICE_STORAGE_KEY`, `PAGE_VOICE_ATTR`, `resolvePageVoice`. |
| `components/voice/PageVoiceSwitcher.tsx` (new) | The page-level voice switcher. |
| `app/globals.css` (modify) | Hide section switchers on Linux pages. Show the panel of `data-voice-page`. |
| `lib/linux/stages.ts` (modify) | `nextTopic`. |
| `components/linux/ContinueButton.tsx` (new) | The "Continue" link on `/linux/`. |
| `components/pages/LinuxHome.tsx`, `app/(site)/linux/[stage]/page.tsx` (modify) | Wire the button, the "Start here" marker, and the page switcher. |
| `lib/linux/ui.ts`, `lib/bn/linux.ts` (modify) | New strings and Bangla twins. |
| `content/linux/*.mdx` (modify) | The lesson rewrite. |
| `docs/superpowers/research/linux-<stage>*.md` (modify) | New fact-check rounds. |

---

### Task 1: The lesson shape checker

**Files:**
- Create: `lib/linux-lesson.ts`
- Create: `tests/linux-lesson.test.ts`

**Interfaces:**
- Produces:
  - `export const LESSON_WORD_LIMIT = 150`
  - `export type TopicTechnical = { heading: string; technical: string }`
  - `export function topicTechnicals(source: string): TopicTechnical[]`: for each `## ` heading outside fenced code, the text between the `<Technical>` and `</Technical>` lines of that section. A section with no `<Technical>` is skipped.
  - `export function lessonProblems(technical: string): string[]`: an empty array if the text has the lesson shape.

**Rules of `lessonProblems`** (each returns one message when broken):
1. The first non-blank line starts with `**Goal:**`.
2. Exactly one line outside code fences starts with `**Try it:**`.
3. Exactly one line is `<details>`, the next non-blank line is `<summary>Go deeper</summary>`, there is exactly one `</details>` at column 0, and only blank lines follow it.
4. The words before `<details>` are `LESSON_WORD_LIMIT` or fewer. Count the words of lines outside fenced code, with `<Cite … />` tags removed.

- [ ] **Step 1: Write the failing tests** in `tests/linux-lesson.test.ts`. Use a `GOOD` constant (a short valid topic string) and these tests:
  - `a topic with the lesson shape has no problems`: `lessonProblems(GOOD)` deep-equals `[]`.
  - `a topic without a Goal line is reported`
  - `a topic without a Try it line is reported`
  - `a topic with two Try it lines is reported`
  - `a topic without a Go deeper block is reported`
  - `a second details block is reported`
  - `text after </details> is reported`
  - `more than 150 words before details is reported` (151 plain words)
  - `words inside a fenced code block and in Cite tags do not count`: 150 plain words plus a 200-word code fence plus `<Cite n={3} />` gives `[]`.
  - `topicTechnicals returns one entry per topic with voices and skips a section with no Technical panel`: a small two-section source, the second without `<Voices>`.
  - `every converted stage has the lesson shape`: loops over `LESSON_STAGES` (`const LESSON_STAGES: string[] = []` at the top of the file), reads `content/linux/<slug>.mdx`, and asserts `lessonProblems` is empty for every `topicTechnicals` entry. The assertion message names the stage and the heading.
- [ ] **Step 2: Run `npm test`.** Expected: FAIL (`lib/linux-lesson.ts` missing).
- [ ] **Step 3: Implement** `lib/linux-lesson.ts` as a line scan, as `lib/voice-source.ts` does. Ignore lines inside fenced code (track ```` ``` ```` and `~~~` fences).
- [ ] **Step 4: Run `npm test`.** Expected: all pass.
- [ ] **Step 5: Commit** `feat(linux): add the lesson shape checker`.

---

### Task 2: One voice choice for a Linux page

**Files:**
- Modify: `lib/voice.ts`
- Modify: `tests/voice.test.ts`
- Create: `components/voice/PageVoiceSwitcher.tsx`
- Modify: `app/globals.css` (after the voices rules near line 620)
- Modify: `app/(site)/linux/[stage]/page.tsx`
- Modify: `CLAUDE.md` ("Voices" and "Linux Module" sections)

**Interfaces:**
- Consumes: `Voice`, `VoiceDefault`, `voiceOrder`, `VOICE_DEFAULT_ATTR` (`lib/voice.ts`); `useVoiceDefault`, `VoiceSwitcher` (`components/voice/`).
- Produces:
  - `export const PAGE_VOICE_STORAGE_KEY = "linux-voice"`
  - `export const PAGE_VOICE_ATTR = "data-voice-page"`
  - `export function resolvePageVoice(stored: string | null, def: VoiceDefault): Voice`: `stored` if it is `technical`, `layman`, or `bangla`, else `def`.
  - `export function PageVoiceSwitcher(): JSX.Element | null`: returns `null` while `useVoiceDefault()` is `null`.

- [ ] **Step 1: Write the failing tests** in `tests/voice.test.ts`:
  - `resolvePageVoice returns a stored voice`: `("layman", "technical")` gives `"layman"`; `("bangla", "technical")` gives `"bangla"`.
  - `resolvePageVoice falls back to the default for null and for a bad value`: `(null, "bangla")` and `("x", "bangla")` give `"bangla"`; `("", "technical")` gives `"technical"`.
- [ ] **Step 2: Run `npm test`.** Expected: FAIL (export missing).
- [ ] **Step 3: Implement** the two constants and `resolvePageVoice` in `lib/voice.ts`.
- [ ] **Step 4: Run `npm test`.** Expected: pass.
- [ ] **Step 5: Implement `PageVoiceSwitcher`.** It keeps `choice: Voice | null`. On mount it reads `localStorage[PAGE_VOICE_STORAGE_KEY]` in `try/catch` and sets `choice` to the stored voice if valid, else `null`. When `choice` is not `null`, it sets `PAGE_VOICE_ATTR` on `article[data-content]`; when `null`, it removes the attribute. A click saves the voice in `try/catch`. When the site default changes from one value to another, it clears `choice` and removes the stored key (use the same pattern as `Voices.tsx`). It renders `VoiceSwitcher` with `value={choice ?? def}` and `order={voiceOrder(def)}`.
- [ ] **Step 6: Add the CSS.**
  - `.linux-topics .voice-switch { display: none; }`
  - Hide every panel when the attribute is present, then show the panel of the chosen voice, with the same `display` value that the existing voices rule uses. Selectors: `.linux-topics[data-voice-page] .voices [data-panel]` (hide) and `.linux-topics[data-voice-page="<voice>"] .voices [data-panel="<voice>"]` for each of the 3 voices (show). They have higher specificity than the existing rules.
- [ ] **Step 7: Render `<PageVoiceSwitcher />`** in the stage page, above `<article>`, below the "In this stage" box.
- [ ] **Step 8: Update `CLAUDE.md`:** in "Voices", add the Linux exception (the section switcher is hidden, the page switcher and the key `linux-voice`); add `PageVoiceSwitcher` to the `components/voice/` row.
- [ ] **Step 9: Verify in the browser** (`npm run build`, `python3 -m http.server 8000 -d out`): on `/linux/processes/`, choose each of the 3 voices; reload (the choice stays); press the header `বাংলা` button (the page choice clears); open `/linux/processes/#process-forking` while the choice is Simple English (the panel shows and the page scrolls); open `/k6/` and check that a section switcher still shows. Expected: all as described.
- [ ] **Step 10: Run `npm test` and `npm run build`.** Expected: pass.
- [ ] **Step 11: Commit** `feat(linux): one voice choice for each Linux page`.

---

### Task 3: The "Continue" path

**Files:**
- Modify: `lib/linux/stages.ts`
- Modify: `tests/linux-data.test.ts`
- Create: `components/linux/ContinueButton.tsx`
- Modify: `components/pages/LinuxHome.tsx`
- Modify: `lib/linux/ui.ts`, `lib/bn/linux.ts`

**Interfaces:**
- Consumes: `STAGES`, `useLinuxProgress` (`components/linux/useLinuxProgress.ts`, returns `{ done: readonly string[] }`).
- Produces:
  - `export function nextTopic(done: readonly string[]): { stage: LinuxStage; topic: LinuxTopic; href: string } | null`: the first topic, in stage order, whose id is not in `done`. `href` is `${stage.href}#${topic.anchor}`. `null` if all 103 are done. Ids that are not topic ids are ignored.
  - In `LINUX_UI` (and the twin in `LINUX_UI_BN`): `continueStart: string`, `continueNext: (title: string) => string`, `continueDone: string`, `startHere: string`.
  - `export function ContinueButton(): JSX.Element`

- [ ] **Step 1: Write the failing tests** in `tests/linux-data.test.ts`:
  - `nextTopic with no progress gives the first topic of stage 1`: `href` equals `STAGES[0].href + "#" + STAGES[0].topics[0].anchor`.
  - `nextTopic skips done topics in order`: with the first 3 ids done, the 4th topic.
  - `nextTopic gives the first topic that is not done, not the one after the last done`: only the second id done gives the first topic.
  - `nextTopic crosses a stage border`: all ids of stage 1 done gives the first topic of stage 2.
  - `nextTopic ignores ids that are not topic ids`: `["k6-001", "x"]` gives the first topic.
  - `nextTopic gives null when every topic is done`: `ALL_TOPIC_IDS` gives `null`.
- [ ] **Step 2: Run `npm test`.** Expected: FAIL.
- [ ] **Step 3: Implement `nextTopic`** in `lib/linux/stages.ts`.
- [ ] **Step 4: Run `npm test`.** Expected: pass.
- [ ] **Step 5: Add the 4 strings** to `LINUX_UI` and `LINUX_UI_BN`. `tests/i18n.test.ts` checks the twin shape.
- [ ] **Step 6: Implement `ContinueButton`.** On the server, `done` is `[]`, so it shows `continueStart` and a link to the first topic. After hydration it shows `continueNext(topic.title)` for `nextTopic(done)`, or `continueDone` text (no link) if `null`. Use the `btn btn-primary` classes. Render the text with `<T>`.
- [ ] **Step 7: Wire `LinuxHome`:** `<ContinueButton />` below the lede; a `startHere` marker (a small label next to the title) on stage 1 only.
- [ ] **Step 8: Run `npm test` and `npm run build`; check `/linux/` in the browser** with demo progress in `localStorage` (`linux-progress` set to the ids of the first 3 topics). Expected: the button names topic 4.
- [ ] **Step 9: Commit** `feat(linux): add a Continue button and a start marker`.

---

### Task 4: Pilot stage `shell-basics`

**Files:**
- Modify: `content/linux/shell-basics.mdx`
- Modify: `tests/linux-lesson.test.ts` (`LESSON_STAGES = ["shell-basics"]`)
- Modify: `docs/superpowers/research/linux-shell-basics.md`, `linux-shell-basics.factcheck.md`, `linux-shell-basics.voices.factcheck.md`

**Interfaces:**
- Consumes: `lessonProblems`, `topicTechnicals` (Task 1); the lesson shape of the spec (section 1).

- [ ] **Step 1: Rewrite the 7 topics** (writer agent). In each `<Technical>` panel the order is: `**Goal:** …` (one line); the Core text with one command; `**Try it:** …` and one code block with its real output in a comment; the "Why it matters for testing" tip, at most 2 lines; then `<details>` / `<summary>Go deeper</summary>` / the flags, edge cases, and extra cites / `</details>` with the closing tag at column 0. Move text, do not delete a fact: each cite number that the old text used stays in the new text.
- [ ] **Step 2: Rewrite `<Layman>` and `<Bangla>`** of each topic in the same order. Use a bold label with no heading (`**Goal:**` / `**লক্ষ্য:**`). They give no fact that `<Technical>` does not give.
- [ ] **Step 3: Run each "Try it" command** in a throw-away directory. Paste the real output. Record the commands and the shell and coreutils versions in `docs/superpowers/research/linux-shell-basics.md`.
- [ ] **Step 4: Set `LESSON_STAGES = ["shell-basics"]`.** Run `npm test`. Expected: pass. If a topic cannot fit in 150 words, move text to "Go deeper"; do not raise the limit here. Report the topics that do not fit.
- [ ] **Step 5: Set `page.updated`.** Run `npm run build`, then `check_routes.py`, `check_links.py`, `check_outline.py`, and `check_sources.py` (all `out`). Expected: `OK 140 pages checked, 0 skipped` and no other problem.
- [ ] **Step 6: Fact-check** (a different agent): append `## Round 2 (2026-10-27)` to `linux-shell-basics.factcheck.md` with one row for each new or moved claim and each "Try it" result, ending with `Open FAILs: 0`. Fix each FAIL and check again.
- [ ] **Step 7: Voices fact-check** (a different agent): append the same kind of round to `linux-shell-basics.voices.factcheck.md`, ending with `Open FAILs: 0`.
- [ ] **Step 8: Visual check** of `/linux/shell-basics/` on desktop and on a 390 px phone: one voice choice, each topic short, "Go deeper" closed.
- [ ] **Step 9: Commit** `feat(linux): rewrite shell-basics as short lessons`.
- [ ] **Step 10: STOP.** Ask the owner to review the pilot. Change the shape or the word limit here if the owner asks. Do not start Task 5 before the owner approves.

---

### Task 5: The other 11 stages

**Files (for each stage in the table):**
- Modify: `content/linux/<stage>.mdx`
- Modify: `docs/superpowers/research/linux-<stage>.md`, `.factcheck.md`, `.voices.factcheck.md`

| Stage | Notes |
|---|---|
| `files` | |
| `text-processing` | Largest stage (20 topics): split it into 2 writer runs if needed. |
| `users-permissions` | The "Permissions Cheat Sheet" topic is unchanged. Keep the `FlowDiagram` of mode 640. |
| `processes` | Keep the fork `FlowDiagram`. |
| `shell-scripting` | |
| `packages` | |
| `disks-filesystems` | Each "Try it" is read-only. No `mount`, `mkfs`, or `fdisk` write. |
| `networking` | Each "Try it" is read-only or uses `localhost`. |
| `boot-services` | Keep the boot chain `FlowDiagram`. A "Try it" needs a host with systemd as PID 1, or it says so. |
| `troubleshooting` | |
| `containers` | A "Try it" that needs Docker says so and has a no-Docker alternative. |

**Interfaces:**
- Consumes: the approved shape from Task 4.

- [ ] **Step 1: For each stage, do Task 4 steps 1 to 7** (rewrite, voices, run the commands, fact-check, voices fact-check). The stages are separate files, so run them in parallel, one writer for each stage. A writer does not edit `tests/linux-lesson.test.ts`.
- [ ] **Step 2: Add the stage slug to `LESSON_STAGES`** (the controller does this, one stage at a time) after its two reports end with `Open FAILs: 0`. Run `npm test`. Expected: pass.
- [ ] **Step 3: Commit each stage** `feat(linux): rewrite <stage> as short lessons`.

---

### Task 6: Finish

**Files:**
- Modify: `CLAUDE.md` ("Linux Module" section: the lesson shape and the new test), `docs/ARCHITECTURE.md`, `docs/superpowers/specs/2026-10-27-linux-revamp-design.md` (status line)

- [ ] **Step 1: Check that `LESSON_STAGES` has all 12 slugs.** Run `npm test`. Expected: pass.
- [ ] **Step 2: Update `CLAUDE.md`:** add to the Linux rules table a row "Lesson shape" (the 5 parts, the 150-word limit, `tests/linux-lesson.test.ts`) and add `lib/linux-lesson.ts` to the Structure table. Update `docs/ARCHITECTURE.md` for the page voice switcher, `nextTopic`, and the lesson check.
- [ ] **Step 3: Run `npm test`, `python3 -m unittest scripts/test_checks.py`, `npm run build`, and the 4 `out` checks.** Expected: all pass, `OK 140 pages checked, 0 skipped`.
- [ ] **Step 4: Set the spec status** to `implemented`. Commit `docs(linux): finish the Linux revamp`.
