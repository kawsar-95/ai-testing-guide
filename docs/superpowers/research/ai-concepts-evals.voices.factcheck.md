# Voices fact check: ai-concepts/evals

Checked 2026-10-28 by an agent that did not write the voices. Each Layman and Bangla panel was compared with the Technical panel of the same section.

| Section | Check | Layman | Bangla | Notes |
|---|---|---|---|---|
| In plain words | No new fact; terms and NIST rule match | PASS | PASS | Layman and Bangla give the 6 terms as prose, same meanings. "steady results" / "ধারাবাহিকতা" = consistency; "correct work" / "কাজ ঠিক হওয়া" = task fidelity. |
| How it works | 20-50 tasks, edge cases, 3 graders, judge tips, trace, two suites, metrics | PASS | PASS | Numbers match (20-50, 1-5, 100 %). Bangla digits ২০, ৫০, ১, ৫, ১০০ are correct. |
| Trade-offs | pass@k / pass^k, 75 % → 42 %, volume over polish, strict vs flexible | FAIL → fixed | FAIL → fixed | Both said "it is best" to use more than one kind of check. Technical says "Many teams combine them". That is a new claim (a recommendation the Technical text does not give). |
| A real-life example | Invented label, 30 tasks, 10 traps, 5 runs, pass^5, CI | PASS | PASS | Layman and Bangla drop the "90 %" number and keep "pass well"; that removes a number, it adds no fact. |
| Common mistakes | 7 items match | PASS | PASS | |
| What a tester can check | Tutorial advice, no cites, same 9 items | PASS | PASS | |
| Key words | No voices (rule) | n/a | n/a | |

Fixed: Trade-offs, Layman: "It is best to use more than one kind of check" → "Many teams use more than one kind of check". Bangla: "একাধিক ধরনের check একসাথে ব্যবহার করা ভালো" → "অনেক টিম একাধিক ধরনের check একসাথে ব্যবহার করে". Re-checked against Technical: PASS.

## Bangla language

| Check | Verdict |
|---|---|
| The reader is addressed with আপনি (দেন, করুন, চান, দেখুন, আপনি জানবেন না) | PASS |
| Product names, code, and technical terms stay in English (eval, task, trial, grader, trace, harness, LLM judge, rubric, pass@k, pass^k, CI/CD, Playwright, latency, token, NIST) | PASS |
| Grammar and natural wording | PASS |
| Cites in Layman and Bangla use only numbers that Technical of the same section cites | PASS |

Open FAILs: 0
