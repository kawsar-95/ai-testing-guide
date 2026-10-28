# Voice fact-check: Data Governance (2026-10-28)

Page: `content/ai-engineering/data-governance.mdx`. I did not write this page or its voices.

Method: I read the 5 `<Voices>` blocks (the "Key words" section has no voices). For each `<Layman>` and `<Bangla>` panel I compared every sentence with the `<Technical>` panel of the same block. FAIL rules: a fact, number, name, example or cite that Technical does not give; a lost warning or hedge; a wrong or misleading statement; Bangla that puts a code or product name in Bangla letters, or does not use আপনি. An omission is not a FAIL.

Automated checks (script, all blocks):

- Every `<Cite n>` in Layman and Bangla is cited in Technical of the same block: PASS.
- No heading in a Layman or Bangla panel: PASS (`tests/voice-source.test.ts` passes).
- No তুমি / তোমার in Bangla: PASS. Imperatives use the আপনি form (পড়ুন, শুরু করুন, দেখুন, খুঁজে পান).
- Product and code names stay in English in Bangla: OWASP, NIST, LLM, Anthropic, OpenAI, ZDR, Kubernetes, API, HR, ID, example.com: PASS.
- No Layman sentence over 25 words: one 33-word list sentence in "How it works" was split (round 2).

| # | Section | Voice | What the panel says (checked against Technical) | Verdict | Reason |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | 4 questions as a list; OWASP data list [2]; 3 NIST outcomes [1] | FAIL | "There is a list of all AI systems". Technical says "an inventory of AI systems". "all" adds a claim that NIST Govern 1.6 does not make. |
| 2 | In plain words | Bangla | Same facts | FAIL | "সব AI সিস্টেমের একটা তালিকা" ("a list of all AI systems"): the same added "all". |
| 3 | How it works | Layman | Data map in words; sanitization, pattern matching, prompt-injection warning [2]; Anthropic and ZDR [3]; OpenAI [4]; least privilege [2]; audit trail [5] | PASS | Same facts and cites. The diagram is restated in words with the same 6 places. The prompt-injection warning is kept. |
| 4 | How it works | Bangla | Same | PASS | Same facts, cites, and the 30-day number. "টিউটোরিয়ালের নিজের মত" marks the same opinions as Technical. |
| 5 | A real-life example | Layman | Hospital assistant; 4 changes [2][3][5]; 14 days; NIST [1] | PASS | Same facts and numbers. |
| 6 | A real-life example | Bangla | Same | PASS | Same. "ঢাকা প্রম্পট" for "redacted prompt" keeps the meaning. |
| 7 | Common mistakes | Layman | 5 mistakes [1][2][3][4][5] | PASS | Same; "ways to keep a list of AI systems" matches "mechanisms to inventory". |
| 8 | Common mistakes | Bangla | Same | PASS | Same facts and cites. |
| 9 | What a tester can check | Layman | 6 tips, tutorial advice, fake data only | PASS | Same tips; the "Tutorial advice" label is kept as a sentence. |
| 10 | What a tester can check | Bangla | Same | PASS | Same tips, fake-data warning kept. |

## Changes after the Technical fact-check

The Technical fixes F1 (4-question framing marked as the tutorial's view), F2 (retrieval filter marked as the tutorial's view), and F3 (full OpenAI retention exception) were made in all 3 voices. Checked: Layman and Bangla now carry the same marker and the same exception.

## Re-check

| # | Section | Voice | Fix | Verdict |
|---|---|---|---|---|
| 1 | In plain words | Layman | "There is a list of the AI systems" | PASS |
| 2 | In plain words | Bangla | "AI সিস্টেমগুলোর একটা তালিকা (inventory) থাকে" | PASS |
| 3 | How it works | Layman | 33-word sentence split into "goes to many places. They are ..."; the OpenAI exception split into short sentences with the same 2 conditions | PASS |
| 4 | How it works | Bangla | OpenAI exception: "যদি না আইন আরও বেশি সময় চায়, বা তাদের সার্ভিস বা অন্যদের সুরক্ষার জন্য আরও বেশি সময় যুক্তিসঙ্গতভাবে দরকার হয়" | PASS |

Open FAILs: 0
