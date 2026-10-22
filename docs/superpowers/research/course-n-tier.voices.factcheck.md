# Voice fact-check: N-tier Architecture (round 1, 2026-10-22)

Page: `content/course/n-tier.mdx`. I did not write the Layman and Bangla panels.

Method: I read the 7 `<Voices>` blocks. For each `<Layman>` and `<Bangla>` panel, I compared each claim with the `<Technical>` panel of the same `##` section. A fact, number, name, example, or cite that Technical does not give is a FAIL. A dropped hedge that changes the meaning is a FAIL. A wrong or confusing Bangla meaning is a FAIL. A Layman sentence of more than 25 words is a FAIL. An omission is not a FAIL. Every `<Cite n={1}>` in a voice panel matches a cite in Technical (the only source is source 1). I did not re-check the sources: the Technical claims are not changed.

Mechanical checks:

- No `TODO` placeholder is left (`grep -c TODO` gives 0).
- No Markdown heading in any `<Layman>` or `<Bangla>` panel.
- `git diff -U0 content/course/n-tier.mdx | grep '^-' | grep -v '^---'` shows no removed non-blank line. The Technical text is unchanged.
- Sentence length of Layman, checked with a script: one sentence is over 25 words (row 7).

| # | Section | Voice | Result | Reason |
|---|---|---|---|---|
| 1 | In plain words | Layman | PASS | The table became a list. Same claims, same cites. |
| 2 | In plain words | Bangla | PASS | Same claims. "ঐচ্ছিক" = optional. "রাখতেই হবে এমন নয়" = "you do not have to". |
| 3 | How it works | Layman | PASS | The 3 tiers, the "goes down, comes back up" line, the full-diagram sentences, strict, relaxed, closed, and open all match Technical. No new fact. |
| 4 | How it works | Bangla | PASS | Same. "বেশি coupling" = "more couplings". "এতে ... dependency কম থাকে" = "limits the dependencies". |
| 5 | When you need it | Layman | PASS | The 3 cases and the 5 benefits match. "The style is common ..." and "So it suits ..." are the same claim in two sentences. |
| 6 | When you need it | Bangla | PASS | Same claims. "শেখার বাধা কম" = "smaller learning curve" (acceptable). |
| 7 | Challenges | Layman | FAIL | The last sentence has 34 words ("For security, it suggests a firewall ... only from a middle tier"). Not plain. |
| 8 | Challenges | Bangla | PASS | The 4 challenges and the good practices match. "নিরাপত্তার সীমানা হিসেবে আলাদা subnet" is correct. |
| 9 | A real-life example | Layman | PASS | "Now think of a middle tier ..." keeps the conditional of Technical ("If the middle tier only copied ..."). |
| 10 | A real-life example | Bangla | PASS | "এবার ভাবুন ..." keeps the conditional. Same cite. |
| 11 | Common mistakes | Layman | PASS | The 5 points match. The two "tutorial's own inference/reading" hedges are not in this section. |
| 12 | Common mistakes | Bangla | PASS | Same. "নিজে নিজে deploy করা যায় না" = "cannot deploy on their own". |
| 13 | What a tester can check | Layman | PASS | The 5 ideas match. No cite. The "tutorial's own advice" line is kept. |
| 14 | What a tester can check | Bangla | PASS | Same. "একটি tier ভেঙে দিন" is a literal "Break one tier". It is understandable here, because the next sentence says "stop the middle tier". |

Round 1: 1 FAIL (row 7).

## Re-check

| Row | Fix | Result |
|---|---|---|
| 7 | The Layman text now says "For security, it suggests three things [1]:" and gives a list of 3 short items: the firewall in front of the web tier, a separate subnet for each tier as a security boundary, and access to the data tier only from a middle tier. The facts and the cite are the same. | PASS |

I ran the sentence-length script again: no Layman sentence in this page is over 25 words. `node --test tests/voice-source.test.ts tests/course.test.ts` passes.

Open FAILs: 0
