# Voice fact-check: Security for AI Systems

Page: `content/ai-engineering/security.mdx`. Checked 2026-10-28 by an agent that did not write the page or its voices.

Method: I read the 5 `<Voices>` blocks (the "Key words" section has no voices). For each `<Layman>` and `<Bangla>` panel I compared every sentence with the `<Technical>` panel of the same block. FAIL rules: a fact, number, name, example, or cite that Technical does not give; a lost warning or hedge; a wrong or misleading statement; a Bangla sentence that is wrong or can be read two ways; code or product names not in English; no আপনি form. An omission is not a FAIL.

Automated checks (script, all blocks):

- Every `<Cite n>` in Layman and Bangla is cited in Technical of the same block: PASS for 5 of 5.
- No heading in a Layman or Bangla panel: PASS.
- No তুমি in the Bangla panels: PASS. The imperative forms "চালাও", "আনো", "লেখো", "করো" occur only inside quotes, as the text of a tool name or a planted instruction.
- No Layman sentence over 25 words (the bold lead-in of a list item not counted): PASS.

| # | Section | Panel | Verdict | Reason |
|---|---|---|---|---|
| 1 | In plain words | Layman | PASS | Same 4 parts, same facts (header auth, system prompt not a secret, 3 root causes, OS sandbox), same cites 4, 2, 1, 7, 1. |
| 2 | In plain words | Bangla | FAIL | "কী আর পাসওয়ার্ড" uses কী for "key". In Bangla কী also means "what", so the line can be read as a question. Product and code names (Claude API, Bash sandbox, Claude Code) are in English. |
| 3 | How it works | Layman | PASS | Keys, Kubernetes Secrets, the 5 OWASP steps, token passthrough, and the sandbox match Technical. The damage-limit hedge ("do not stop the problem") is kept. Cites 4, 5, 1, 6, 7. |
| 4 | How it works | Bangla | FAIL | "Claude API কী নেয় `Authorization: Bearer` হেডারে" reads as "What does the Claude API take in the header?". Same কী problem in "কী বানানো হয়" and "অ্যাপ চলার সময় কী পড়ে". The facts otherwise match, and `x-api-key`, `bubblewrap`, `sandbox.failIfUnavailable`, RBAC, and etcd stay in English. |
| 5 | A real-life example | Layman | PASS | Same case, same 3 fixes (the table becomes a list), same rate-limit note. |
| 6 | A real-life example | Bangla | PASS | Same facts. "indirect prompt injection", OAuth, and Send stay in English. |
| 7 | Common mistakes | Layman | PASS | Same 6 mistakes. "may not always follow them" keeps the hedge. |
| 8 | Common mistakes | Bangla | FAIL | "সিস্টেম প্রম্পটে কী রাখা" and "কী-ও ফাঁস হয়" have the same কী problem. Facts match. |
| 9 | What a tester can check | Layman | PASS | Same 6 ideas. It keeps "the tutorial's own advice". |
| 10 | What a tester can check | Bangla | FAIL | "**কী খুঁজুন।**" reads as "Search for what?"; "উত্তরে কী, পাসওয়ার্ড" has the same problem. Facts match and it keeps "টিউটোরিয়ালের নিজের পরামর্শ". |

Changes from the Technical fix: the Technical fact-check marked 2 sentences as the tutorial's own view (the 4-part split and the advice to read the key from the environment). I made the same change in Layman and Bangla, so they do not state these as facts.

FAILs found: 4 (rows 2, 4, 8, 10). All are the same word problem.

## Re-check (after the fixes)

| # | Changed text | Verdict | Reason |
|---|---|---|---|
| 2 | "**সিক্রেট (secret)**: key আর পাসওয়ার্ড কোথায় থাকে।" | PASS | "key" in English, as for other technical terms. |
| 4 | "**Key আর সিক্রেট।** Claude API, API key নেয় `Authorization: Bearer` হেডারে।" / "API key বানানো হয় Console-এ।" / "এই টিউটোরিয়ালের পরামর্শ: অ্যাপ চলার সময় API key পড়ে একটা environment variable থেকে। API key কখনও সোর্স কোডে রাখবেন না।" | PASS | One reading only. The advice is marked as the tutorial's own, as in Technical. It uses আপনি (রাখবেন). |
| 8 | "**সিস্টেম প্রম্পটে key রাখা।** প্রম্পট ফাঁস হলে key-ও ফাঁস হয়। OWASP বলে: key, ডেটাবেসের নাম ..." | PASS | One reading only. |
| 10 | "**Key খুঁজুন।**" / "উত্তরে key, পাসওয়ার্ড ..." | PASS | One reading only. |
| 1-2 | "This tutorial splits security for an AI system into 4 parts." / "এই টিউটোরিয়াল একটা AI সিস্টেমের সিকিউরিটিকে 4টা অংশে ভাগ করে:" | PASS | Matches the Technical fix. |

The 2 remaining কী on the page mean "what" ("মডেল কী করতে পারে", "কে কী করতে পারবে"), which is correct.

After the edits I ran the script again: the cites are unchanged, no heading, no তুমি. `node --test tests/voice-source.test.ts tests/ai-engineering.test.ts`: 29 pass, 0 fail.

Open FAILs: 0
