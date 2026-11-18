# Brief of the independent checkers: SDET Roadmap pages

The files `sdet-<slug>.factcheck.md` and `sdet-<slug>.voices.factcheck.md` were written by fresh `claude -p` sessions that did not write the pages. This file is what they were given, so a reader can judge the check. A different brief gives different verdicts: the checker treats the brief as the rule.

## What a checker got

A folder for one page with nothing of the writer's notes:

- `page.md`: the list of the cited sources (number, title, URL, file), then the page: its description (the lede), the title and the intro, the six sections with their Technical, Layman, and Bangla panels, and the Key words table.
- `pages/S1.txt`, `pages/S2.txt`, ...: the visible text of each cited source, as `scripts/sdet_claimcheck.py` reads it (a plain GET, the HTML turned into text), fetched on 2026-11-15.
- `brief.md`: the text below, with `{slug}` replaced by the slug of the page.

## Command

```
claude -p "$(cat brief.md)" --model sonnet --tools "Read,Grep,Glob" --allowedTools "Read,Grep,Glob" \
  --max-budget-usd 4.0 --output-format json --no-session-persistence \
  --disable-slash-commands --strict-mcp-config --exclude-dynamic-system-prompt-sections
```

It ran in the folder of the page, with read-only tools and no web access.

After each reply a script recounted the FAIL rows from the tables (the count that the checker wrote is not trusted), and looked each quoted phrase of a PASS up in the text of the sources (a PASS whose quote is not in the sources does not count, and is reported).

## The brief

You are an independent fact-checker. You did NOT write this page. Your evidence is ONLY the files in this folder:
`page.md` (the page) and `pages/S1.txt`, `pages/S2.txt`, ... (the visible text of the sources that the page cites; `page.md` lists
which number is which source). Do not browse. Do not use your memory to give a PASS: a PASS needs a quote from a file in `pages/`.
Read only files in this folder. Use Grep on `pages/*.txt` to find a passage (the files can be long; do not read a whole file unless you must).

The page has a lede (its description), a title and a short intro, then six sections: "What it is", "How it works", "Try it", "How a tester uses it", "Common mistakes", and "What a tester can check". Each section has three panels: Technical (English), Layman (plain English), and Bangla. The page ends with a Key words table. Each fact ends with a `<Cite n={k} />` that points to source Sk. Product names, command names, and code stay in English inside the Bangla panel: that is correct. The section "What a tester can check" is a callout that says it is the tutorial's own advice and has no cites; a callout titled "Only test what you may test" is advice in the same way. The code blocks are examples that the writer ran; check the prose around them, not whether the code runs.

TASK A - facts. List EVERY claim of the Technical panels of all six sections (cut each panel at each <Cite>), plus the lede and the intro. For each:
- PASS: the cited source says it. Quote the words from the source file, exactly as they are in the file (you may use "..." to skip words).
- FAIL: the cited source does not say it, says something different, says less than the page claims (for example an "always" or a number that
  the source does not give), or the claim needs a different source than the one cited. A fact about a tool, product, command, or number with no cite is a FAIL, unless it only reports what the page's own example code prints or returns when it is run.
- N/A: text that is not a fact about a tool, product, command, or number (for example a sentence that describes the page itself, or advice that says it is advice), and a sentence that only reports what the page's own example code prints or returns.
For a FAIL, put in the last column what is wrong and a fix that stays inside what the source says.
Then check each row of the Key words table as a claim with the number K1, K2, ...: PASS if a Technical panel of the page gives the same fact (quote that panel), FAIL if the row gives a fact that no Technical panel gives.

TASK B - voices. The rule of this repo: the Layman and Bangla panels give no fact that the Technical panel of the same section does not give. They use plainer words and shorter sentences, and they may leave details out. Compare each sentence of the Layman panel and of the Bangla panel with the Technical panel of the same section. One or more short sentences that restate one Technical sentence may carry the cite once, at the end of the group.
- PASS: every fact that the sentence gives is in the Technical panel, the meaning is not stronger, weaker, or different, and the cite is a cite of the Technical panel on the same fact. A detail of the Technical panel may be left out. A word that limits a claim in the Technical panel ("by default", "some", "can", "must", "only", "automatically", "at any given time") may be left out only if the sentence is still true and says no more than the Technical sentence.
- FAIL: the sentence gives a fact that the Technical panel does not give (an added claim, example, advice, number, name, or explanation); a fact is changed (another noun, number, scope, or direction); the meaning is stronger, weaker, or different; a limit was dropped so that the claim now says more than the Technical sentence; or a cite is on a sentence that its source does not support.
- In the Note, list every detail that the panel leaves out. A left-out detail is not a FAIL by itself; the list lets a person see what the plain text does not say.
Judge the Bangla by its meaning. If you cannot read a sentence well enough to judge it, say so in the note and mark FAIL.

Check every claim and every panel. Do not sample. Do not soften a verdict to be polite.

Reply with EXACTLY this shape and nothing before or after it:

=== FACTCHECK ===
# Fact check: sdet / {slug} (round 1)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
(one row per claim, then one row per Key words row; escape a | inside a quote as \|)

Open FAILs: N

=== VOICES ===
# Voices fact check: sdet / {slug} (round 1)

| Section | Panel | Verdict | Note |
|---|---|---|---|
(one row for Layman and one for Bangla in each of the six sections)

Open FAILs: N

## Limits

The checkers are agents. No person has read the pages, and no person who reads Bangla has read the Bangla. A checker of a looser standard passes more, so the left-out details that it lists are the part a person should read.
