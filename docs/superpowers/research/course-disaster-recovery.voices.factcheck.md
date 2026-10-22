# Voice fact-check: Disaster Recovery (round 2, Bangla term style, 2026-10-22)

Page: `content/course/disaster-recovery.mdx`. I did not write this page or its voices. This report replaces the earlier one.

Method: I read the 8 `<Voices>` blocks (the "Key words" section has no voices). For each `<Layman>` and `<Bangla>` panel I compared every sentence with the `<Technical>` panel of the same block. FAIL rules: a fact, number, name, example or cite that Technical does not give; a dropped hedge; a wrong or misleading statement; a wrong, ungrammatical or unfinished Bangla sentence; a Bangla panel that breaks the course term style; a Layman sentence over 25 words. An omission is not a FAIL.

Automated checks (script, all blocks):

- Each `<Technical>` body equals the `<Technical>` body of the same section in `git show HEAD:content/course/disaster-recovery.mdx` (non-blank lines): PASS for 8 of 8.
- Every `<Cite n>` in Layman and Bangla is cited in Technical of the same block: PASS.
- No heading in any Layman or Bangla panel, no TODO, no তুমি: PASS.
- No Layman sentence over 25 words: PASS.
- No acronym, product, or company name in Bangla letters (RTO, RPO, DR, HA, IaC, AWS, Azure stay Latin): PASS.

Notes:

- In "Trade-offs" the Technical panel has a table; Layman and Bangla use a list with the same four strategies and the same cites. No cell is lost. The sentence "The table follows the AWS text only" becomes "this list follows the AWS text only", which is correct for the new shape.
- The AWS strategy names (Backup and restore, Pilot light, Warm standby, Multi-site active/active, hot standby) stay in English in Bangla as names, as the page's Key words table does.
- The exact quotes "30 minutes of data" and "eight hours of downtime" stay in English in Bangla. Correct for a quote.

| # | Section | Voice | What the panel says (checked against Technical) | Verdict | Reason |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | Disaster is rare and major, larger than HA can absorb; examples; DR is the planning [5]; RTO and RPO [1]; units examples, zero is difficult and costly [5] | PASS | Same facts and cites. |
| 2 | In plain words | Bangla | Same facts; "ডিজাস্টার (disaster)", "হাই অ্যাভেইলেবিলিটি (high availability)", "বাস্তবসম্মত মান" | PASS | Meaning matches. "ransomware" stays Latin as a threat name. |
| 3 | When you need it | Layman | Objectives not set alone; cost vs loss, regulation exception; no DR can be valid for a less critical workload; DR part of the BCP [1] | PASS | Hedges kept. |
| 4 | When you need it | Bangla | Same | PASS | "চালু করবেন না" for "should not put it in place" is the same advice. |
| 5 | How it works | Layman | HA is not DR [4]; deletion copied [4]; line can move [5]; plan parts; failover/failback, backups, runbook [5] | PASS | Same facts and cites. |
| 6 | How it works | Bangla | Same | FAIL | "একটা runbook" and "infrastructure as code" are plain concept phrases left in English with no Bangla form, while the same list writes "কমিউনিকেশন প্ল্যান (communication plan)" in the new style. Term style. |
| 7 | Trade-offs | Layman | Four strategies, active/passive rule, hot standby, when backup and restore may be enough [2] | PASS | All numbers (four, three others) and cites match. |
| 8 | Trade-offs | Bangla | Same | FAIL | "ভালোভাবে আর্কিটেক্ট করা, highly available ওয়ার্কলোডের জন্য, ডিজাস্টার যদি একটা ডেটা সেন্টার হারানো হয়" is an awkward, near-ungrammatical clause, and "highly available" is left in English while the rest of the page writes অ্যাভেইলেবিলিটি in Bangla letters. Grammar and term style. |
| 9 | Testing disaster recovery | Layman | Test the DR setup, run failover regularly [3]; rare paths, quotas, few paths, drift [3]; human processes, simulation, RTO feasibility [5]; backup tests [2][5]; active/active loses a Region [2] | PASS | Same facts and cites. |
| 10 | Testing disaster recovery | Bangla | Same | PASS | "ড্রিল (drill)", "সিমুলেশন (simulation)", "কনফিগারেশন ড্রিফট (configuration drift)" correct. |
| 11 | A real-life example | Layman | Test-management tool; RPO 15 min, RTO 1 h; backup every 4 h; 4 h lost; replication and scaled-down copy; drill 90 min; automate | PASS | All numbers match and the example is marked "the tutorial's own". |
| 12 | A real-life example | Bangla | Same numbers | FAIL | "test-management টুল": "test" is a listed concept word and "management" a plain one, both left in English. Term style. |
| 13 | Common mistakes | Layman | Three mistakes, cites [4][5][3] | PASS | Same. |
| 14 | Common mistakes | Bangla | Same | PASS | Meaning matches. |
| 15 | What a tester can check | Layman | "Tutorial's own advice" line and six ideas | PASS | Same ideas, no cites, as in Technical. |
| 16 | What a tester can check | Bangla | Same six ideas | FAIL | "Runbook ও এসকেলেশন পাথ": "Runbook" is bare English in an otherwise Bangla-letter sentence. Term style. |

## Re-check

I fixed the 4 FAIL rows by editing only the Bangla panels:

- Row 6: "একটা runbook" is now "একটা রানবুক (runbook)"; "infrastructure as code" is now "ইনফ্রাস্ট্রাকচার অ্যাজ কোড (infrastructure as code)". PASS.
- Row 8: the clause is now "যে ওয়ার্কলোড ভালোভাবে আর্কিটেক্ট করা এবং হাইলি অ্যাভেইলেবল (highly available), তার ক্ষেত্রে ডিজাস্টার বলতে যদি একটা ডেটা সেন্টার হারানো বোঝায়, তবে AWS বলে ব্যাকআপ ও রিস্টোর (backup and restore) যথেষ্ট হতে পারে।" It reads as one complete sentence and matches Technical ("if the disaster is the loss of one data center ... may be enough"). PASS.
- Row 12: now "টেস্ট-ম্যানেজমেন্ট (test-management) টুল". PASS.
- Row 16: now "রানবুক (runbook) ও এসকেলেশন পাথ দেখুন।". PASS.

After the edits I ran the script again: Technical still equals HEAD in 8 of 8 sections, the cites are unchanged, no new heading, no TODO.

FAILs found: 4. Fixed: 4.

Open FAILs: 0
