# Linux command sheets: design

Date: 2026-11-04. Status: implemented on branch `feat/linux-command-sheets` (draft PR #61 of `kawsar-95/ai-testing-guide`). It changes what a stage page shows. The lessons of `2026-10-27-linux-revamp-design.md` stay in the repo and are not shown.

## Problem

The module exists so that a learner knows the Linux commands. A stage page was a lesson for each topic, in three voices, with a "Try it" block and a closed "Go deeper" block: about 69,000 words for stages 1 to 7 alone, all voices counted. A learner could not see the commands of a stage at once. `/linux/` showed the title of stage 1 and no command on its first screen.

## Goal

A stage page is a sheet: one card for each topic, one row for each command, short and exact enough to read in one pass. `/linux/` shows every command, and each command links to its card.

## What the learner sees

- **Stage page.** Cards in a grid: 2 columns from 1248 px wide, 1 column below that. The page stops growing at 1680 px, so a 1920 px screen has 2 columns too. A row is the command and one short gloss. A word in capitals is the reader's own value (`FILE`). A red `!` marks a command that can destroy data. A `[n]` chip links to the official page that backs the card. A tick on a card records that you know it.
- **Home page.** A tile for each stage with its commands as chips (3 columns from 1280 px wide, 2 from 640 px, 1 below that), the progress, and `ContinueButton`. A chip opens the card of the stage page that teaches the command: the card named after the command (`grep`, `nano`) if there is one, else the first card that has it. The card that the address points to has a ring.
- **Language.** The header `বাংলা` button switches the gloss between English and Bangla. There is no Layman text and no switcher on the page.
- **Sources.** One line for each source, in up to 3 columns, below the cards.
- **Search.** A search for a command (`grep`, `nmcli`, `faillock`) finds its card. Both glosses are searchable.

## What did not change

The routes, the 12 stages, the 103 topics, the topic ids and anchors, and the `linux-progress` key. Saved progress and a link such as `/linux/files/#nano` keep working. `lib/linux/stages.ts` is still the one list of stages and topics; a card carries the title of its topic and a test checks the order.

## Format and rules

`lib/linux/sheets/<stage>.ts`, `lib/linux/sheet.ts`, and the "Command sheets" table in `CLAUDE.md` give the format and the rules. In short: a card has 2 to 8 rows; a command has 48 characters or fewer; an English gloss has 9 words or fewer; a Bangla gloss is in Bangla script; an ALL-CAPS word is a known placeholder or a known literal; every card cites an official page, and a path or a behaviour that no official page documents is left off. `tests/linux-sheets.test.ts` enforces them.

## Decisions

| Decision | Why |
|---|---|
| Two glosses (English and Bangla), no Layman | A gloss of 9 words has no room for a plain-English twin. The site has the English and Bangla toggle already. |
| The lessons stay, but are not shown | Deleting 12 lessons, their tests, their research notes, and the scripts that made them is a decision for the owner, not a part of a redesign. They are in `content/linux/` and `tests/linux-lesson.test.ts` still checks them. |
| A fact with no fetchable official page is left off | A card that cites a page which does not say the fact is a false cite. |
| The stage page has no "On this page" and no one-section-at-a-time view | The page is the glance. `ChapterLayout` has a `wide` mode for it. |
| The verifier is in the repo (`scripts/verify_linux_sheets.mjs`) | The claim "every flag is in a cited page" must be checkable by someone else. It needs the network, so it is not part of `npm test`. |

## Measured

At 1440 x 900. "After" is the production build (`out/`). "Before" was measured on the dev server, before the sources list and the home page were redone (Networking gave 4,414 px on both). On a stage page, "before" had the shared `Sources` list (two lines and a rule for each source). On the home page, it is the old roadmap list. "Before" was measured for these two pages only.

| Page | Before | After |
|---|---|---|
| Home | 4,036 px, no command on the first screen | 2,308 px, commands on the first screen |
| Shell Basics | not measured | 2,641 px |
| Text Processing | not measured | 4,280 px |
| Networking | 7,314 px | 4,414 px |
| Containers | not measured | 2,166 px |

The cards of a stage take 0.8 to 3.1 screens (Containers to Text Processing and Networking). **A stage page is not one screen.** Text Processing (20 topics, 109 rows) and Networking (15 topics, 110 rows) are the longest.

## Checks run

`npm test` (454 tests, 6 of them for the verifier), `npx tsc --noEmit`, `npm run build` (295 of 295 pages), the four Python checks (`check_routes`, `check_outline`, `check_sources` with `OK 269 pages checked, 0 skipped`, `check_links`), `node scripts/verify_linux_sheets.mjs` (701 rows, 345 flags, 0 problems), and a browser run of the chip flows on the static build (chip to card with a ring, `[n]` chip to its source line, a tick saved in `linux-progress` and shown on the home tile, Bangla on the home page), and no console error or failed request on the home, Shell Basics, Networking, and Containers pages in light, dark, and Bangla. See `docs/superpowers/research/linux-sheets.factcheck.md`.

## Not done

- A fact-check by someone who did not write the sheets, and a read of the Bangla by a reader of Bangla. Until then a sheet is not "Done" by the rule of `CLAUDE.md`.
- `/var/log/syslog` and `/var/log/auth.log` are not on the cards: no page that was fetched documents them. `/etc/default/grub` is not on a card yet: Debian Reference chapter 3 names it, so the row can be added (see the check report).
- A decision about the lessons: keep, or delete with `lib/linux-lesson.ts`, `TopicChecklist`, `LessonStage`, `studyMinutes`, the lesson tests, and the research scripts.
- Below 1248 px wide a stage page is one column, and 1.3 to 1.6 times as tall as at 1440 px (Text Processing: 4,280 px at 1440 px, 6,861 px at 1024 px). A narrow window gets the long page.
