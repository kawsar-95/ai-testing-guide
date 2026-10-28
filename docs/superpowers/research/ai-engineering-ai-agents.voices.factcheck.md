# Voices fact-check: content/ai-engineering/ai-agents.mdx

Checked 2026-10-28 by an agent that did not write the voices. Each `<Layman>` and `<Bangla>` panel was compared with the `<Technical>` panel of the same block. `node --test tests/voice-source.test.ts` passes.

| # | Section | Voice | What the panel says (checked against Technical) | Verdict | Reason |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | Agent loop [3]; workflow vs agent [1]; augmented LLM; simplest solution; cost and time [1] | PASS | The table becomes 2 sentences; same facts. |
| 2 | In plain words | Bangla | Same | PASS | "augmented LLM" stays in English. |
| 3 | How it works | Layman | 5-step loop [2][1]; stop rule, human feedback [1]; tool fields, `tool_use`, `tool_result` [2]; client and server tools [2]; tools need care [1] | PASS | "Ground truth from the real world" restates "from the environment". |
| 4 | How it works | Bangla | Same | PASS | Field names stay in English. |
| 5 | A real-life example | Layman | Triage agent; ground truth [1]; excessive agency [4]; narrow tools [4]; ask first [5]; 15 steps [1] | PASS | "Freedom" restates "autonomy". |
| 6 | A real-life example | Bangla | Same | FAIL, fixed | First check: the system-prompt rule used the তুমি imperative ("জিজ্ঞেস করো"). |
| 7 | Common mistakes | Layman | 7 mistakes [1][1][4][4][4][2][4] | FAIL, fixed | First check: the stop-rule bullet had the unsupported "can loop and spend money for a long time" (Technical row 20 of the fact-check). |
| 8 | Common mistakes | Bangla | Same | FAIL, fixed | Same as row 7 ("অনেকক্ষণ লুপে ঘুরে টাকা খরচ করতে পারে"). The quoted tool label "যেকোনো shell কমান্ড চালাও" is a name of a tool type, not an address to the reader; kept. |
| 9 | What a tester can check | Layman | "Tutorial's own advice" and 8 ideas | PASS | Same. |
| 10 | What a tester can check | Bangla | Same | PASS | আপনি imperatives. |

## Re-check

- Row 6: now "তার আগে ইউজারকে জিজ্ঞেস করতে হবে". PASS.
- Rows 7 and 8: the bullet now says that Anthropic adds stop conditions (a limit on the number of iterations) to keep control, that agents cost more, and that errors can add up, with `<Cite n={1} />` twice, as Technical. Bangla: "এজেন্টকে নিয়ন্ত্রণে রাখতে Anthropic থামার শর্ত যোগ করে, যেমন সর্বোচ্চ কতবার লুপ চলবে ... এজেন্টের খরচও বেশি, আর অনেক ধাপে ভুল জমতে পারে". PASS.

FAILs found: 3. Fixed: 3.

Open FAILs: 0
