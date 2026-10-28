# Voices fact check: harness / guardrails (round 1)

Each Layman and Bangla panel was compared with the Technical panel of the same block. The checker did not write the voices.

| Section | Panel | Verdict | Note |
|---|---|---|---|
| Guardrails in the OpenAI Agents SDK | Layman | FAIL | Bullet 1 "On the **input** of the user, before the first agent works on it." Technical says the input guardrail runs in parallel with the agent by default (S2: "runs concurrently with the agent's execution"). "before the first agent works on it" is true only with `run_in_parallel=False`, and the panel itself says so 2 paragraphs later. Fix: "On the **input** of the user, for the first agent only." The other bullets, the tripwire, and the parallel paragraph match. Cite 2 only. |
| Guardrails in the OpenAI Agents SDK | Bangla | FAIL | Same problem: "ইউজারের **input**-এ, প্রথম এজেন্ট কাজ শুরু করার আগে।" Fix: "ইউজারের **input**-এ, শুধু প্রথম এজেন্টের জন্য।" The rest passes: `InputGuardrailTripwireTriggered`, `run_in_parallel=True`, OpenAI Agents SDK stay in English. |
| Human approval | Layman | PASS | Same facts: pause, `needs_approval`, approve or reject, continue from the same place, standard rejection text, trusted storage. Cite 3. |
| Human approval | Bangla | PASS | Same facts, cite 3. `needs_approval`, approve, reject, human-in-the-loop stay in English. |
| Hooks in Claude Code | Layman | PASS | Same 5 events in plain words (after success and after failure in one bullet). `rm -rf` example, no decision, silent hook does not approve. Cite 1. |
| Hooks in Claude Code | Bangla | PASS | Same facts. Event names `UserPromptSubmit`, `PreToolUse`, `PostToolUse`, `PostToolUseFailure`, `Stop` and `rm -rf` stay in English. Cite 1. |
| What a tester can check | Layman | FAIL | Last bullet "A broken hook. It must not let the action through." Technical says the call "must go to the normal permission flow, not be approved". The normal flow can still allow the call (for example by an allow rule), so a tester who follows the Layman text expects a block and reports a false bug. Fix: "A broken or silent hook. It must not approve the action by itself. The normal permission rules decide." The other bullets match; the Parallel mode bullet is left out, which is allowed. |
| What a tester can check | Bangla | FAIL | Same problem: "একটা নষ্ট hook। সেটা যেন কাজটা পার হতে না দেয়।" Fix: "একটা নষ্ট বা চুপ থাকা hook। সেটা নিজে থেকে কাজটা approve করবে না। স্বাভাবিক permission rule সিদ্ধান্ত নেবে।" |

## Round 2 (2026-10-28)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| Guardrails in the OpenAI Agents SDK | Layman | PASS | "On the **input** of the user, for the first agent only." Matches Technical: "only for the first agent in the chain". It no longer conflicts with the parallel default. |
| Guardrails in the OpenAI Agents SDK | Bangla | PASS | "ইউজারের **input**-এ, শুধু প্রথম এজেন্টের জন্য।" Same fact. |
| What a tester can check | Layman | PASS | "A broken or silent hook. It must not approve the action by itself. The normal permission rules decide." Matches Technical: "The call must go to the normal permission flow, not be approved". |
| What a tester can check | Bangla | PASS | "একটা নষ্ট বা চুপ থাকা hook। সেটা নিজে থেকে কাজটা approve করবে না। স্বাভাবিক permission rule সিদ্ধান্ত নেবে।" Same fact. hook, approve, permission rule stay in English. |

Open FAILs: 0
