# Voices fact check: AI Skills, AI Governance

Each Layman and Bangla panel was compared with the Technical panel of the same block (6 blocks, 12 panels), by an agent that did not write the page.

| Block | Layman | Bangla | Notes |
| --- | --- | --- | --- |
| In plain words | PASS | PASS | Same three questions, same facts; cites 1, 3, 4, 5 as in Technical |
| How it works | PASS | PASS | The table becomes a list with the same facts and cites 1, 2, 4, 5, 7, 8, 9. The text diagram is left out, but its three mappings are in the bullets. "Numbers, descriptions, or both" for quantitative, qualitative, or mixed is a fair restatement |
| How a tester uses it | PASS | PASS | Same four uses and cites 5, 6, 8, 9. The tip text is the same; it is a plain paragraph, not a Callout, and has no cite |
| Tools to try | PASS | PASS | Same table, same cites |
| Common mistakes | FAIL | FAIL | See FAIL 1. Rest PASS. Layman "the log itself becomes private" for "sensitive" is acceptable |
| How to start | PASS | PASS | Same 5 steps, cites 8, 5, 2 |

Checks done:
- Cites in Layman and Bangla use only n values that Technical cites in the same block.
- Bangla keeps tool names, acronyms, code, and settings in English (NIST AI RMF, ISO/IEC 42001, OWASP, LLM01, `deny`, `Read(./.env)`, `CLAUDE_CODE_ENABLE_TELEMETRY=1`, `OTEL_LOG_USER_PROMPTS=1`, managed settings).
- Bangla addresses the reader with আপনি (আপনার, করুন, সরান). No তুমি form (scripted grep: 0).

## FAILs

1. Common mistakes, "Treating a framework as a checklist", Layman and Bangla.
   - Layman: "The AI RMF asks you to map the context of each system first <Cite n={2} />." It drops "voluntary" that Technical gives (lost fact), and it repeats the Technical overstatement (Technical FAIL 1).
   - Bangla: "AI RMF আগে প্রতিটা সিস্টেমের প্রেক্ষাপট ম্যাপ করতে বলে <Cite n={2} />।" Same two problems.
   - Fix, after the Technical fix: Layman "The AI RMF is voluntary. Its actions are not a checklist. Most users start with the map function, which sets the context of each system <Cite n={2} />." Bangla "AI RMF স্বেচ্ছামূলক, আর এর কাজগুলো কোনো চেকলিস্ট নয়। বেশিরভাগ ব্যবহারকারী map ফাংশন দিয়ে শুরু করেন, যা প্রতিটা সিস্টেমের প্রেক্ষাপট ঠিক করে <Cite n={2} />।"

## Round 2 (2026-10-28)

I compared the changed panels with the current Technical text of the same block.

| Block | Panel | Changed sentence | Verdict | Note |
|---|---|---|---|---|
| Common mistakes | Layman | "The AI RMF is voluntary. Its actions are not a checklist. Most users start with the map function. It sets the context of each system <Cite n={2} />." | PASS | Same 4 facts as Technical R2-1; cite 2 only |
| Common mistakes | Bangla | "AI RMF স্বেচ্ছামূলক, আর এর কাজগুলো কোনো চেকলিস্ট নয়। বেশিরভাগ ব্যবহারকারী map ফাংশন দিয়ে শুরু করেন, যা প্রতিটা সিস্টেমের প্রেক্ষাপট ঠিক করে <Cite n={2} />।" | PASS | Same facts; `AI RMF` and `map` in English; respectful form (শুরু করেন, করুন) |
| How it works | Layman | "By default, Claude Code also keeps session transcripts on your computer for 30 days, in `~/.claude/projects/` <Cite n={7} />." | PASS | Same fact as Technical; cite 7 |
| How it works | Layman | OTEL sentence (not changed: "The prompt text is hidden by default. `OTEL_LOG_USER_PROMPTS=1` adds it") | PASS | Same fact as the new Technical; cite 9 |
| How it works | Bangla | Transcripts and OTEL sentences (not changed) | PASS | Same facts as the new Technical (30 days, `~/.claude/projects/`, hidden by default, `OTEL_LOG_USER_PROMPTS=1`); cites 7 and 9; আপনার কম্পিউটারে |

FAIL 1 is closed. No other panel changed.

Open FAILs: 0
