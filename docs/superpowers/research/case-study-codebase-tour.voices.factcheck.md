# Voices fact-check: content/case-study/codebase-tour.mdx

Second pass, 2026-10-27, by an agent that did not write the voices. Each `<Layman>` and `<Bangla>` panel was compared with the `<Technical>` panel of the same block after the writer's fixes (9 sections with voices; Key words has none). Line numbers are lines of the page. The Technical text has its own report (`case-study-codebase-tour.factcheck.md`); a panel that repeats a Technical FAIL is listed as "inherits" and is not counted as a new voices FAIL.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| What the repository is (37-73) | PASS | PASS | Three layers, bKash or Nagad, REST API and web app, five roles match. The "where it lives" column is dropped; no new fact. |
| The folder map (77-117) | PASS | PASS | Same 7 entries. `GRAPHIFY_SETUP.md` row: Layman 101 and Bangla 114 say it explains how to install graphify, that graphify builds a knowledge graph of the code, and that the graph is not in the public repository, as Technical 88 does. Fixed from the first pass. |
| The backend (121-225) | PASS | PASS | OTP 4 digits, 2 minutes, Admin and SYSTEM skip, dev switch, no balance column, append-only ledger, credits minus debits, `Commissions` and `TransactionLimits` (Layman 186, Bangla 213 now match Technical 152), `FOR UPDATE`, 3 ledger rows, rollback all agree. Layman and Bangla drop the file table, the `sequelizeModel/` seed detail, "not the same account", and the minimum amount (now in Technical step 4); they merge steps. This loses facts and adds none. |
| The web app (229-270) | PASS | PASS | Role folders, axios headers, expiry check, 401 logout, `middleware.ts` and the `token` cookie, `e2e/`, JWT and secret-key header agree. Components table, BRD README, and cookie sentence are dropped; no new fact. |
| The AI layer (274-334) | PASS | PASS | Same 7 skills, same subagent limits, same three MCP servers. Hook: Layman 310 and Bangla 329 say it runs a `graphify query` and adds the result to the context; Technical 291 adds the argument and no-argument cases. This is a shorter statement of the same behavior, no new fact. Bangla 324 and 327 now write "design" in Latin letters. Cites 1 to 4 are all cited in Technical. |
| How the layers work together (338-391) | PASS | PASS | Fixed from the first pass: Technical 351 now says what `analyze-requirement` does ("turns an issue into acceptance criteria"), so Layman 366 and Bangla 381 add no fact. Eight reports, 17 / 5 / 2, PR #8, PR #9, chain order all match. The Technical note "(in each sub-project)" is dropped in both panels; no new fact. |
| The test code (395-426) | PASS | PASS | 0 to 3 to 10 users in one minute, reuse and rotate senders, dev OTP bypass and local copy only, one setup project for each role, cite 5 (also in Technical), OTP from Gmail after the login started, 10 minutes of JWT left. |
| The class notes (430-475) | PASS | PASS | 8 notes and the same 8 topics. Rows 2 and 4 match Technical 438 and 440 in meaning: `GRAPHIFY_SETUP.md` and the `CLAUDE.md` file of each sub-project; "the five matching skills: four in `.claude/skills/`, and `analyze-requirement` in each sub-project" (Layman 454; Bangla 468 says the same and keeps the skill name and paths in Latin). R65 is fixed in the Technical report. |
| Take-aways (479-507) | PASS | PASS | 5 points match; the hook point now reads "a step that must run before a skill starts" in Technical 485, Layman 494, and Bangla 503. The "catch more mistakes" sentence is dropped in the two voices; no new fact. |

## FAILs

None. R65 is fixed in all three panels (440, 454, 468) and agrees with Technical line 351.

## Other checks

- Cites: every `<Cite n>` in Layman and Bangla (AI layer 1 to 4; test code 5) is also used in the Technical panel of the same block. PASS.
- Names and numbers: 3 layers, 5 roles, 4-digit OTP, 2 minutes, 3 ledger rows, 7 skills, 2 subagents, 3 MCP servers, 8 notes, 17 / 5 / 2, PR #8, PR #9, 0 to 3 to 10, one minute, 10 minutes: equal in Technical, Layman, and Bangla. PASS.
- Bangla keeps in English: all paths and file names (including `GRAPHIFY_SETUP.md`), `FOR UPDATE`, `SKILL.md`, `NEXT_PUBLIC_API_URL`, headers, `graphify query`, skill and agent names, JWT, OTP, REST API, MCP, k6, Playwright, Gmail, PR numbers, role names, and now "design" (lines 324, 327). PASS.
- Bangla addresses the reader with আপনি ("দেখুন", "রাখুন", "ব্যবহার করুন", "চালান"). PASS.
- `lang="bn"` and panel structure are checked by `tests/voice-source.test.ts`, not here.

Open FAILs: 0
