# Voice fact-check: The OSI Model (round 1, 2026-10-22)

Page: `content/course/osi.mdx`. I did not write the Layman and Bangla panels.

Method: I read the 6 `<Voices>` blocks. For each block and voice, I compared the panel with the `<Technical>` panel of the same `##` section. A fact, number, name, example or cite that Technical does not give is a FAIL. A dropped hedge, a wrong meaning, a confusing translation, and a long or not plain Layman sentence are also FAILs. An omission is not a FAIL. I did not re-check the sources. The Technical claims are for the fact-check of the page.

Mechanical checks (script and `git diff`):

- No `TODO` placeholder is left.
- No heading in a Layman or Bangla panel.
- Each `<Cite n>` in Layman and Bangla is cited by Technical of the same block (6 of 6 blocks).
- `git diff -U0 content/course/osi.mdx | grep '^-' | grep -v '^---'` prints nothing. Technical is unchanged.
- No Layman sentence is longer than 28 words.

Notes:

- Section 2: Layman and Bangla replace the text diagram with a 7-item list (same one-line text for each layer) and replace the OSI/Internet table with a 5-item list. The rows are the same. Both voices keep the sentence "These rows have no source" and the single cite [2]. PASS.
- Section 3 (When you need it): the Layman text is a word-for-word copy of Technical. The Technical sentences are already short and plain. I do not count this as a FAIL.
- Section 6: Layman and Bangla have no callout. They keep the line "the tutorial's own advice". PASS.

| # | Section | Voice | Claim | Verdict | Reason |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | OSI means Open Systems Interconnection; a common base for standards [1]; a map of ideas, not a recipe, not a test for products [1]; 7 layers numbered 7 to 1, stack, shared boundary, peers [1] | PASS | Each sentence restates one Technical sentence. |
| 2 | In plain words | Bangla | Same | FAIL (first check) | "উপরে ৭ থেকে নিচে ১ পর্যন্ত নম্বর দেওয়া" has no verb. The sentence is not complete. The meaning is "numbered from 7 to 1". |
| 3 | How it works | Layman | 7 layers with one-line roles; 7 layer descriptions [1]; Internet model has 4 layers, its application layer joins OSI Presentation and Application [2]; the match list is the tutorial's own, no source; only one link in the RFC [2] | PASS | Same text as Technical. The 5 match rows are the same as the table rows. |
| 4 | How it works | Bangla | Same | PASS | Terms stay in English. "যান্ত্রিক, বৈদ্যুতিক, কার্যগত ও পদ্ধতিগত" = mechanical, electrical, functional, procedural. |
| 5 | When you need it | Layman | Layers help to talk and to search; "which layer?"; wrong price is a high layer, a page that never loads may be a low layer; shared language | PASS | Same text as Technical. |
| 6 | When you need it | Bangla | Same | PASS | "উঁচু layer" and "নিচু layer" keep the hedge "may be" for the low layer ("হতে পারে"). |
| 7 | A real-life example | Layman | Learning platform, video lesson, 5 checks from Physical to Application, stop at the first layer that fails, put the layer in the title | PASS | Same 5 questions. Marked "the tutorial's own". |
| 8 | A real-life example | Bangla | Same | PASS | Meaning is right. |
| 9 | Common mistakes | Layman | 4 mistakes: 4 Internet layers [2]; OSI is not a build plan [1]; Telnet, FTP, SMTP, DNS, sub-layering [2]; IP makes no delivery promise [2]; TCP and UDP [2] | PASS | Same claims and cites. |
| 10 | Common mistakes | Bangla | Same | PASS | "ক্রম বদলাতে পারে" = reordered. "পারে" keeps the "may". |
| 11 | What a tester can check | Layman | 4 tips, "the tutorial's own, not from a source" | PASS | Same 4 tips. |
| 12 | What a tester can check | Bangla | Same | PASS | Meaning is right. |

## Re-check

I fixed 1 FAIL. I edited only the Bangla panel.

| # | Fix | Re-check |
|---|---|---|
| 2 | Bangla: "নম্বর দেওয়া হয়েছে" (a verb is added). | PASS. The sentence is complete. The meaning is the same as "numbered from 7 at the top to 1 at the bottom". |

After the edit: no heading in Layman or Bangla, no `TODO`, and every `<Cite n>` still matches Technical. Technical is unchanged (the `git diff` check prints nothing).

FAILs found: 1. Fixed: 1.

Open FAILs: 0
