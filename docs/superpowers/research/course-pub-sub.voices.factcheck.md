# Voice fact-check: Publish-Subscribe (round 2, 2026-10-22)

Page: `content/course/pub-sub.mdx`. I did not write the Layman or Bangla panels. This report replaces any older one.

Method: for each `<Voices>` block I compared `<Layman>` and `<Bangla>` with `<Technical>` of the same `##` section. FAIL means a fact, number, name, example or cite that Technical does not give; a dropped hedge that changes the meaning; a wrong or misleading statement; a `<Cite n>` that Technical of the block does not cite; wrong, ungrammatical or unfinished Bangla; a break of the Bangla style rule (তুমি, common concept words left in English, an acronym or product or command name in Bangla letters); or a Layman sentence over 25 words. An omission is not a FAIL. I did not re-check the sources: the Technical claims are in `course-pub-sub.factcheck.md`. The `## Key words` section has no voices.

Mechanical checks (script over all sections, and `git show HEAD:` for the committed text):

- Each of the 8 `<Technical>` bodies matches the text of the same section in `HEAD`. `## Key words` is unchanged. No removed non-blank Technical line.
- The set of `<Cite n>` and the number of cites are equal in Technical, Layman, and Bangla of every block.
- No `TODO`. No Markdown heading in Layman or Bangla. No `তুমি` in the file. No Layman sentence over 25 words.
- Section headings are bold labels in Layman and Bangla, never `#` headings.

| # | Section | Voice | Verdict | Reason |
|---|---|---|---|---|
| 1 | In plain words | Layman | PASS | Same facts, numbers and cites as Technical; sentences are short and plain |
| 2 | In plain words | Bangla | PASS | Same facts, numbers and cites as Technical; correct Bangla, আপনি, style rule kept; ইভেন্ট, কিউ, ব্রোকার etc. in Bangla letters, pub/sub kept in English |
| 3 | When you need it | Layman | PASS | Same facts, numbers and cites as Technical; sentences are short and plain; "three cases" matches the three "when" conditions |
| 4 | When you need it | Bangla | FAIL | "Google এর" has a space before the suffix; the other rows write "Pub/Sub-এ" with a hyphen. Fixed to "Google-এর". The rest PASS |
| 5 | How it works | Layman | PASS | Same facts, numbers and cites as Technical; sentences are short and plain |
| 6 | How it works | Bangla | PASS | Same facts, numbers and cites as Technical; correct Bangla, আপনি, style rule kept; "ack" is written অ্যাক after the defined term অ্যাকনলেজমেন্ট (acknowledgment বা ack): a short form of a common word, not an acronym, so accepted |
| 7 | Delivery, duplicates, and order | Layman | PASS | Same facts, numbers and cites as Technical; sentences are short and plain; longest sentence has 20 words |
| 8 | Delivery, duplicates, and order | Bangla | PASS | Same facts, numbers and cites as Technical; correct Bangla, আপনি, style rule kept; hedges "might" and "rare, but possible" kept |
| 9 | When not to use it | Layman | PASS | Same facts, numbers and cites as Technical; sentences are short and plain |
| 10 | When not to use it | Bangla | PASS | Same facts, numbers and cites as Technical; correct Bangla, আপনি, style rule kept |
| 11 | A real-life example | Layman | PASS | Same facts, numbers and cites as Technical; sentences are short and plain |
| 12 | A real-life example | Bangla | PASS | Same facts, numbers and cites as Technical; correct Bangla, আপনি, style rule kept; example is marked as the tutorial's own |
| 13 | Common mistakes | Layman | PASS | Same facts, numbers and cites as Technical; sentences are short and plain |
| 14 | Common mistakes | Bangla | PASS | Same facts, numbers and cites as Technical; correct Bangla, আপনি, style rule kept |
| 15 | What a tester can check | Layman | PASS | Same facts, numbers and cites as Technical; sentences are short and plain; callout kept, no cites |
| 16 | What a tester can check | Bangla | PASS | Same facts, numbers and cites as Technical; correct Bangla, আপনি, style rule kept; callout kept, no cites |

## Re-check

I fixed each FAIL by editing only the Layman or Bangla panel text, then re-read the changed lines. Each fixed line now matches its Technical sentence, keeps its cite, and follows the style rule. The failed rows are re-checked here:

- When you need it, Bangla: PASS after the fix.

FAILs found: 1. Fixed: 1.

Open FAILs: 0
