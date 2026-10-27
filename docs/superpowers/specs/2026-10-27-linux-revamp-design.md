# Linux module revamp: design

Date: 2026-10-27. Status: waiting for owner review.

## Problem

The Linux module gives the learner too much at once (cognitive load):

- Each topic is a long, dense text with many flags and edge cases.
- Each topic has three voices, and a switcher in every section.
- 103 topics in 12 stages give no clear path. The learner cannot tell what to learn first or when a stage is done.

Today the pages already show one `##` topic at a time (`SectionFocus`). So the load is inside each topic and in the lack of a path. Splitting the pages into 103 routes would not fix this.

## Goal

A learner finishes one small step, knows what comes next, and does not feel lost.

## Scope

In scope:

- All 103 topics of the 12 stages get the lesson shape below.
- One page-level voice choice on Linux pages.
- A "Continue" path on `/linux/`.

Out of scope:

- New routes. The 12 stage routes, `lib/linux/stages.ts`, the progress key `linux-progress`, search, the sitemap, and the precache stay.
- Cutting topics.
- The other modules, including their voice switchers.
- The "Permissions Cheat Sheet" topic keeps its original wording and has no voices.

## 1. The lesson shape

Each `##` topic has this shape in its `<Technical>` panel:

| Part | Content |
|---|---|
| Goal | One line: what the learner can do after the topic. |
| Core | The short Technical text, with one command. Cites stay on the facts. |
| Try it | One small, safe exercise with the expected output. |
| Why testers care | The existing "Why it matters for testing" tip, at most 2 lines. |
| Go deeper | A closed `<details>` block with the flags, edge cases, and extra cites. |

Rules:

- The text before the `<details>` block has 150 words or fewer (code blocks do not count).
- Each `<details>` closing tag is at column 0 (see "MDX gotcha" in `CLAUDE.md`).
- Each "Try it" command is run in a throw-away shell, and the output on the page is the real output. No command changes the system outside the current directory, `/tmp`, or a user-level process.
- `<Layman>` and `<Bangla>` follow the same shape and add no fact that `<Technical>` does not give. The existing voice rules stay.
- `tests/linux-lesson.test.ts` (new) checks the shape of every Linux topic except the cheat sheet: a Goal line, a "Try it" label, one `<details>` block, and the word limit.

## 2. Voices

- On a Linux stage page, the switcher of each section is hidden (CSS, scoped by an attribute on `article[data-content]`, for example `data-voice-scope="page"`).
- A new switcher at the top of the page sets the voice of every section of the page. It has the same three voices.
- The site default (`voice` key) can hold only `technical` or `bangla`, so the page choice has its own key, `linux-voice` (`technical`, `layman`, or `bangla`). A saved page choice wins on Linux pages. Without one, the page follows the site default. A change of the site default (the header button) clears the page choice.
- The panels stay in the HTML. Search, the fact-check, and `tests/voice-source.test.ts` do not change.
- Other modules keep their per-section switchers.

## 3. The path

- `/linux/` gets a "Continue" button. A client component reads `linux-progress`, finds the first topic that is not done, and links to `/linux/<stage>/#<anchor>`. If all topics are done, it shows a done message.
- Each stage on `/linux/` shows one goal line (from `description` in `lib/linux/stages.ts`) and the number badge. Stage 1 has a "Start here" marker.
- The 12 topic checklists stay closed.
- All new strings have a Bangla twin in `lib/bn/linux.ts`.

## 4. Rollout

1. Build the shared parts: the lesson test, the page voice switcher, the Continue button, and `docs/ARCHITECTURE.md` and `CLAUDE.md` updates.
2. Pilot: rewrite `shell-basics` (7 topics). The owner reviews it. The shape changes here if needed.
3. Rewrite the other 11 stages, one agent for each stage. A different agent fact-checks the Technical text, and one checks the voices.
4. A stage is done when `docs/superpowers/research/linux-<stage>.factcheck.md` and `linux-<stage>.voices.factcheck.md` both end with `Open FAILs: 0`.
5. Checks per stage: `npm test`, `npm run build`, and the four Python checks.

## Risks

- The 103 rewrites are a large text job. The count of 150 words may be wrong for some topics. The pilot tests the number.
- Each stage needs a new fact-check and a voices fact-check. The Bangla text is the slowest part.
- "Try it" commands can behave differently on macOS, BusyBox, or other shells. Each page says when a command is GNU-only.
- Moving text into "Go deeper" must keep each cite number used and each source cited at least once, or `check_sources.py` fails.

## Open questions

None at this time.
