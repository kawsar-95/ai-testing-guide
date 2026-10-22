# Voice fact-check: Service Discovery (round 2, 2026-10-22)

Page: `content/course/service-discovery.mdx`. I did not write the Layman or Bangla panels. This report replaces any older one.

Method: for each `<Voices>` block I compared `<Layman>` and `<Bangla>` with `<Technical>` of the same `##` section. FAIL means a fact, number, name, example or cite that Technical does not give; a dropped hedge that changes the meaning; a wrong or misleading statement; a `<Cite n>` that Technical of the block does not cite; wrong, ungrammatical or unfinished Bangla; a break of the Bangla style rule (তুমি, common concept words left in English, an acronym or product or command name in Bangla letters); or a Layman sentence over 25 words. An omission is not a FAIL. I did not re-check the sources: the Technical claims are in `course-service-discovery.factcheck.md`. The `## Key words` section has no voices.

Mechanical checks (script over all sections, and `git show HEAD:` for the committed text):

- Each of the 7 `<Technical>` bodies matches the text of the same section in `HEAD`. `## Key words` is unchanged. No removed non-blank Technical line.
- The set of `<Cite n>` and the number of cites are equal in Technical, Layman, and Bangla of every block.
- No `TODO`. No Markdown heading in Layman or Bangla. No `তুমি` in the file. No Layman sentence over 25 words.
- Section headings are bold labels in Layman and Bangla, never `#` headings.

| # | Section | Voice | Verdict | Reason |
|---|---|---|---|---|
| 1 | In plain words | Layman | PASS | Same facts, numbers and cites as Technical; sentences are short and plain |
| 2 | In plain words | Bangla | PASS | Same facts, numbers and cites as Technical; correct Bangla, আপনি, style rule kept; Consul, HashiCorp, Kubernetes kept in English |
| 3 | When you need it | Layman | PASS | Same facts, numbers and cites as Technical; sentences are short and plain |
| 4 | When you need it | Bangla | FAIL | "Kubernetes ডক্স করে" uses the informal "ডক্স" and has no possessive, so it reads as "Kubernetes does docs". Fixed to "Kubernetes-এর ডকুমেন্টেশন তোলে" |
| 5 | How it works | Layman | PASS | Same facts, numbers and cites as Technical; sentences are short and plain; the check table is turned into bullets, no heading |
| 6 | How it works | Bangla | FAIL | (1) "অ্যাড্রেস দিয়ে নয়।" is an unfinished sentence: fixed to "অ্যাড্রেস দিয়ে চায় না।". (2) "এর ডক্স বলে": informal "ডক্স", fixed to "ডকুমেন্টেশন". (3) "Kubernetes এর জন্য আলাদা রাখা একটি পুল" reads as "a pool set aside for Kubernetes", but Technical says "a pool set aside for this" (for this IP use). Fixed to "Kubernetes এই কাজের জন্য আলাদা রাখা একটি পুল". The other paragraphs PASS (HTTP 200 to 299, 429, exit code 0 and 1, TTL, SRV, headless all match) |
| 7 | Client-side and server-side discovery | Layman | PASS | Same facts, numbers and cites as Technical; sentences are short and plain; the pattern table is turned into bullets |
| 8 | Client-side and server-side discovery | Bangla | PASS | Same facts, numbers and cites as Technical; correct Bangla, আপনি, style rule kept |
| 9 | A real-life example | Layman | PASS | Same facts, numbers and cites as Technical; sentences are short and plain |
| 10 | A real-life example | Bangla | PASS | Same facts, numbers and cites as Technical; correct Bangla, আপনি, style rule kept |
| 11 | Common mistakes | Layman | PASS | Same facts, numbers and cites as Technical; sentences are short and plain |
| 12 | Common mistakes | Bangla | PASS | Same facts, numbers and cites as Technical; correct Bangla, আপনি, style rule kept |
| 13 | What a tester can check | Layman | PASS | Same facts, numbers and cites as Technical; sentences are short and plain; callout kept, no cites |
| 14 | What a tester can check | Bangla | PASS | Same facts, numbers and cites as Technical; correct Bangla, আপনি, style rule kept; callout kept, no cites |

## Re-check

I fixed each FAIL by editing only the Layman or Bangla panel text, then re-read the changed lines. Each fixed line now matches its Technical sentence, keeps its cite, and follows the style rule. The failed rows are re-checked here:

- When you need it, Bangla: PASS after the fix.
- How it works, Bangla: PASS after the fix.

FAILs found: 2. Fixed: 2.

Open FAILs: 0
