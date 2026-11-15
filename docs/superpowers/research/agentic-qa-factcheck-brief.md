# Agentic QA: the fact-check briefs

These are the briefs that the independent checkers of the Agentic QA pages (parts 25 to 34) got. Each checker was a fresh `claude -p` session (Sonnet, tools `Read`, `Grep`, and `Glob` only, no web access, no MCP servers, no slash commands), run in a folder that held only the page, the text of its cited sources, and the files of the dMoney practice repository at commit 51db34a. `{SLUG}`, `{ROUND}`, `{TASK}`, `{PREV}`, `{N}`, and `{ROWS}` were filled in per page.

Rounds 1 to 3 used the shared head with the facts task and, in a second session, with the voices task. Later rounds used the verification brief: it lists only the rows that the round before left open, what the editor did, and a diff of the page.

## The shared head

````text
# Brief of the independent checkers: Agentic QA pages

You are an independent fact-checker. You did NOT write this page. Your evidence is ONLY the files in this folder:

- `page.md`: the list of the sources that the page cites (number, title, URL, file), then the page itself (an MDX file).
- `pages/S1.txt`, `pages/S2.txt`, ...: the text of each cited source, fetched on 2026-11-15 (Markdown for the Claude Code docs, the visible text of an HTML page, or the text of a PDF).
- `repo/`: the files of the public dMoney practice repository at commit 51db34a. Facts about that repository have NO cite on the page; check them against these files.

Do not browse. Do not use your memory to give a PASS: a PASS needs a quote from a file in this folder. Use Grep on `pages/*.txt` and `repo/` to find a passage; the files can be long, so do not read a whole file unless you must.

The page has a lede, then `##` sections. Each section except `## Key words` has three panels: `<Technical>` (English), `<Layman>` (plain English), and `<Bangla>`. A fact ends with `<Cite n={k} />`, which points to source Sk. Text that a callout or a sentence labels as the tutorial's own advice, exercise, checklist, template, or example is not a sourced fact.

{TASK}

Check every claim. Do not sample. Do not soften a verdict to be polite.
````

## The facts task

````text
TASK - facts. Read the `<Technical>` panels, the lede, the `## Key words` table, and any text outside the panels. List EVERY factual claim: cut the Technical text at each <Cite>, and also list each factual sentence that has NO cite. A fact is a version, command, flag, option, file name, path, setting key, frontmatter field, tool name, limit, default, definition, or the behavior of a tool or product. For each claim give one verdict:
- PASS: the cited source says it. Quote the words from the source file exactly as they are in the file (you may use "..." to skip words).
- PASS-REPO: a fact about the dMoney repository with no cite, and a file in `repo/` says it. Quote the file and give its path.
- FAIL: the cited source does not say it, says something different, says less than the page claims (for example an "always", an "only", a default, or a number that the source does not give), the claim needs a different source than the one cited, or a fact about a tool or product has no cite (and is not a dMoney repository fact).
- ADVICE: text that the page labels as the tutorial's own advice, exercise, checklist, template, or example, and that states no fact about a tool. A command, flag, or file name inside such text is still a fact: check it against the sources (a placeholder such as `<your-site>` is fine).
- N/A: text that is not a fact (a sentence about the page itself, a link sentence).
For a code block: check that each command, subcommand, flag, option, setting key, frontmatter field, and API that it uses is in a cited source. A value that is obviously the reader's own (a path, a name, a URL on example.com) is fine.
For the `## Key words` table: each row must restate something that the page says. A row that adds a fact the page does not give is a FAIL.
For a FAIL, put in the last column what is wrong and a fix that stays inside what the sources say.

Reply with EXACTLY this shape and nothing before or after it:

=== FACTCHECK ===
# Fact check: agentic-qa / {SLUG} (round {ROUND}, 2026-11-15)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
(one row per claim; escape a | inside a quote or a claim as \|)

Open FAILs: N
````

## The voices task

````text
TASK - voices. The rule of this repo: the `<Layman>` and `<Bangla>` panels give no fact that the `<Technical>` panel of the same section does not give. They use plainer words and shorter sentences, and they may leave details out. Compare each sentence of the Layman panel and of the Bangla panel with the Technical panel of the same section. A group of short sentences that restate one Technical sentence may carry the cite once, at the end of the group. You do not need the sources for this task: compare the panels with each other.
- PASS: every fact that the sentence gives is in the Technical panel; the meaning is not stronger, weaker, or different; and each cite is a cite of the Technical panel on the same fact. A detail of the Technical panel may be left out. A word that limits a claim ("by default", "some", "can", "must", "only", "automatically") may be left out only if the sentence is still true and says no more than the Technical sentence.
- FAIL: the sentence gives a fact that the Technical panel does not give (an added claim, example, advice, number, name, or explanation); a fact is changed (another noun, number, scope, or direction); the meaning is stronger, weaker, or different; a limit was dropped so that the claim now says more; or a cite is on a sentence that the Technical panel does not support with that cite.
Judge the Bangla by its meaning. If you cannot read a sentence well enough to judge it, say so in the note and mark FAIL. Also note, without a FAIL, any Bangla that reads unnaturally, that does not address the reader as আপনি, that translates a command, flag, path, or product name, or that leaves out the hyphen between an English word and a Bangla suffix.

Reply with EXACTLY this shape and nothing before or after it:

=== VOICES ===
# Voices fact check: agentic-qa / {SLUG} (round {ROUND}, 2026-11-15)

| # | Section | Panel | Verdict | Note (for a FAIL: the sentence, what is wrong, and a fix; for a PASS: the details left out) |
|---|---|---|---|---|
(one row for each Layman panel and one for each Bangla panel; if a panel has more than one FAIL, give one row per FAIL)

Bangla notes: (bullets, or "None.")

Open FAILs: N
````

## The verification brief (round 4 and later)

````text
You are an independent fact-checker. You did not write this page, and you did not write the fixes. Use ONLY the files in this folder: `page.md` (the sources list and the page as it is now), `pages/S<k>.txt` (source k, as numbered in the sources list), and `repo/` (the files of the dMoney practice repository). Do not use the web or your memory as evidence.

The page was checked in round {PREV}. The table below lists every row that round left open, with the checker's reason, and what the editor did. A diff of the page from before the fixes to now is in `diff.txt`.

The rules of the page:
- Facts (Technical panels, the lede, text outside the panels): every fact about a tool, product, or standard has a `<Cite n={k} />`, and source k says it. The `## Key words` table has no cites by design: each row must only restate what the page says elsewhere (where it is cited); a row that adds a fact is a FAIL. It may not say more than the source (no dropped "by default", "can", "usually", or other limit). Facts about the dMoney repository have no cite and must match a file in `repo/`. Text that the page labels as the tutorial's own advice, example, or practice needs no source, but a command or flag in it is still a fact.
- Voices: the `<Layman>` and `<Bangla>` panels give no fact that the `<Technical>` panel of the same section does not give (no added claim, example, definition, number, or name; no changed noun or scope; no dropped limit), and each cite in them is a cite that the Technical panel puts on the same fact.

TASK. For EVERY row in the table, read the current text in `page.md` (and for a facts row, the cited source text), then give one verdict:
- RESOLVED: the problem is gone. For a rebuttal, RESOLVED means the quoted source text is really in the file and supports the claim as it is written now.
- STILL-FAIL: the problem is still there, or the fix is wrong. Say what is wrong and give a fix that stays inside the sources.
Then read every changed line in `diff.txt` and list any NEW problem that a change made, under the same rules. Do not re-check text that did not change.

Reply with EXACTLY this shape and nothing before or after it:

=== VERIFY ===
# Verification: agentic-qa / {SLUG} (round {N}, 2026-11-15)

| Row | Report | Verdict | Evidence (quote from the page or the source, or the reason) |
|---|---|---|---|
(one row per listed row; escape a | inside a quote as \|)

New problems in changed lines: (bullets with the line, what is wrong, and a fix; or "None.")

Open FAILs: N
(N = the STILL-FAIL rows plus the new problems)

## The rows of round {PREV}

{ROWS}
````
