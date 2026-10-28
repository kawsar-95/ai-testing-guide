# Voices fact check: AI Concepts, Guardrails (`content/ai-concepts/guardrails.mdx`)

Checked: 2026-10-28, by an agent that did not write the voices. Each Layman and Bangla panel was checked against the Technical panel of the same section.

| Section | Voice | Check | Verdict | Note |
|---|---|---|---|---|
| In plain words | Layman | No new fact; cites 1, 2, 3 are in Technical | PASS | "Nobody knows a sure way to prevent prompt injection" is a fair plain form of "unclear if any fool-proof method exists". |
| In plain words | Bangla | No new fact; terms in English (agent, tool, prompt injection, excessive agency, RAG, fine-tuning); আপনি imperatives (দেবেন না, ধরে নিন, রাখুন) | PASS | "আছে কি না, তা পরিষ্কার নয়" matches the source exactly. |
| How it works | Layman | The numbered list matches the 6 boxes of the diagram; deny/ask/allow order, Seatbelt/bubblewrap, empty allowed list, SSH keys all match | PASS | |
| How it works | Bangla | Same facts, same cites (1–6); product names (Claude Code, Seatbelt, bubblewrap, macOS, Linux) in English | PASS | |
| Trade-offs | Layman | 84% matches; `bypassPermissions` and containers/VMs match; "files with passwords and keys" restates "credential files" | PASS | |
| Trade-offs | Bangla | ৮৪% matches 84% | FAIL (language) | "sandbox শুধু shell command ঢাকে" was not natural Bangla. Fixed: "sandbox শুধু shell command-এর ওপর কাজ করে". Re-checked: PASS. |
| A real-life example | Layman | Says it is an invented example; 4 steps match the Technical steps; same cites | PASS | |
| A real-life example | Bangla | Says it is invented (বানানো উদাহরণ); 4 steps match; Manual mode, `.env`, Playwright in English | PASS | The planted line uses তুমি because it quotes the attacker text to the AI. The text to the reader uses আপনি (ধরুন). |
| Common mistakes | Layman | 7 bullets match the 7 Technical bullets and cites | PASS | |
| Common mistakes | Bangla | 7 bullets match; terms in English | PASS | |
| What a tester can check | Layman | Same 7 checks; no cites (Tutorial advice); attack texts stay harmless (CANARY, show hidden instructions) | PASS | |
| What a tester can check | Bangla | Same 7 checks; no cites; harmless example texts | PASS | |
| Key words | – | No voices (by rule) | PASS | |

FAILs found: 1. Fixed: 1 (Bangla wording in the Trade-offs table).

Open FAILs: 0
