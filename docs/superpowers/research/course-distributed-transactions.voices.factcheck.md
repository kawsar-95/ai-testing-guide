# Voice fact-check: Distributed Transactions (round 2, Bangla term style, 2026-10-22)

Page: `content/course/distributed-transactions.mdx`. I did not write this page or its voices. This report replaces the earlier one.

Method: I read the 6 `<Voices>` blocks (the "Key words" section has no voices). For each `<Layman>` and `<Bangla>` panel I compared every sentence with the `<Technical>` panel of the same block. FAIL rules: a fact, number, name, example or cite that Technical does not give; a dropped hedge; a wrong or misleading statement; a wrong, ungrammatical or unfinished Bangla sentence; a Bangla panel that breaks the course term style; a Layman sentence over 25 words. An omission is not a FAIL.

Automated checks (script, all blocks):

- Each `<Technical>` body equals the `<Technical>` body of the same section in `git show HEAD:content/course/distributed-transactions.mdx` (non-blank lines): PASS for 6 of 6.
- Every `<Cite n>` in Layman and Bangla is cited in Technical of the same block: PASS.
- No heading in any Layman or Bangla panel (the Technical `###` headings "Two-phase commit" and "Saga" are bold labels in the voices), no TODO, no তুমি: PASS.
- Layman sentence length: the script flagged one line of 32 words in "How it works". It is the bold label "What 2PC gives you, as the docs state it." (8 words) plus a sentence of 23 words. PASS.
- No acronym, protocol, product, command, or identifier in Bangla letters (2PC, ACID, PostgreSQL, `PREPARE TRANSACTION`, `COMMIT PREPARED`, `ROLLBACK PREPARED`, `VACUUM`, `max_prepared_transactions`, `pg_prepared_xacts` stay Latin): PASS.

Notes:

- The code block (the `text` diagram of the 2PC messages) and the choreography/orchestration table are not in Layman or Bangla as such. The table becomes a list with the same good and bad points and cites. The diagram is an omission, not a FAIL.
- The hedges "very high probability", "probably should not", and "can make the database shut down" are kept in both voices. The Bangla keeps the quote "very high probability" in English and adds "probability (সম্ভাবনা)", which is a gloss and not a new fact.
- Page key terms (saga, pivot transaction, compensating transaction, idempotent, choreography, orchestration) stay in English in Bangla as names of patterns. The Key words table of the page does the same.

| # | Section | Voice | What the panel says (checked against Technical) | Verdict | Reason |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | Distributed transaction, ACID does not directly apply [5]; two ways: 2PC and saga | PASS | Same facts and cite. |
| 2 | In plain words | Bangla | Same; "ডিস্ট্রিবিউটেড ট্রানজেকশন (distributed transaction)", "কমিট (commit)", "আন্ডু (undo)" | PASS | Natural Bangla, আপনি not needed here. |
| 3 | When you need it | Layman | One user action touches more than one database or service | PASS | Same sentence. |
| 4 | When you need it | Bangla | Same, with "অর্ডার", "পেমেন্ট" | PASS | Meaning matches. |
| 5 | How it works | Layman | PostgreSQL 2PC blocks and the "probably should not use" hedge [1]; steps 1 to 3 [1]; different session [1][2][3]; "very high probability" [1]; locks, VACUUM, wraparound [1]; off by default, 0, server start [4]; `pg_prepared_xacts` [1]; saga, compensation, pivot [5][6]; choreography and orchestration [5] | PASS | Same facts, numbers (200 bytes, 0) and cites. |
| 6 | How it works | Bangla | Same | FAIL | (a) "একটা **external transaction manager**-কে ... atomic গ্লোবাল ট্রানজেকশন" leaves "external transaction manager" and "atomic" in English, while the same paragraph writes "ট্রানজেকশন ম্যানেজার" in Bangla letters, so the term is split in two forms. (b) "Orchestrator একটা point of failure" is a bare English phrase with no Bangla form. Term style. Facts and cites are right. |
| 7 | A real-life example | Layman | Order and payment services, pending, confirmed, compensating step, inconsistent between steps [6], each service commits its own step, a compensating step can fail [5] | PASS | Marked "tutorial's own". |
| 8 | A real-life example | Bangla | Same | PASS | "কনসিসটেন্ট হওয়ার কথা" matches "it should become consistent". |
| 9 | Common mistakes | Layman | Four mistakes [5][1][1][6] | PASS | Same. |
| 10 | Common mistakes | Bangla | Same | FAIL | (a) "built-in আইসোলেশন" leaves a plain word in English. (b) "অপরিবর্তনীয় ধাপ" for "irreversible steps": "অপরিবর্তনীয়" means "unchangeable", not "cannot be reversed", so the meaning is misleading for a step that cannot be undone. |
| 11 | What a tester can check | Layman | "Not from a source" line and four ideas | PASS | Same ideas, no cites. |
| 12 | What a tester can check | Bangla | Same four ideas | PASS | "ব্লকড (blocked)", "কুয়েরি" correct. |

## Re-check

I fixed the 2 FAIL rows by editing only the Bangla panels:

- Row 6: now "**এক্সটারনাল ট্রানজেকশন ম্যানেজার**-কে (external transaction manager) ... অ্যাটমিক (atomic) গ্লোবাল ট্রানজেকশন" and "Orchestrator হলো ফেইলিউরের একটা বিন্দু (point of failure)". PASS.
- Row 10: now "বিল্ট-ইন (built-in) আইসোলেশন" and "**যে ধাপ ফেরানো যায় না তা আগে রাখা।**". The new text means "a step that cannot be reversed", the same as Technical. PASS.

After the edits I ran the script again: Technical still equals HEAD in 6 of 6 sections, the cites are unchanged, no new heading, no TODO.

FAILs found: 2. Fixed: 2.

Open FAILs: 0
