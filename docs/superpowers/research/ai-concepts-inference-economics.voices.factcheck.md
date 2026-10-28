# Voices fact-check: content/ai-concepts/inference-economics.mdx

Checked 2026-10-28 by an agent that did not write the voices. Each Layman and Bangla panel was compared with the Technical panel of the same section: no new fact, the same numbers and names, the same cites, Bangla natural and in the আপনি form, technical terms and code in English.

| # | Section | Voice | Check | Verdict | Note |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | Inference, tokens, MTok, the 3 bill parts, Sonnet 5.5 $2/$10, OpenAI same price for short prompts, date, cost per finished task | PASS | Same facts and cites (1, 5, 1, 1, 6). It does not give the OpenAI dollar figures or the long-context price; fewer facts is allowed. |
| 2 | In plain words | Bangla | Same | PASS | "Thinking token-এর বিল হয় output token হিসেবে" matches. "বাজেট করার আগে আপনি ... দেখে নিন" uses আপনি. "৫ গুণ" = 5x. |
| 3 | In plain words | Layman, Bangla | 5x sentence after the Technical fix | PASS | Both now say "for the two list prices below" ("নিচের দুটো লিস্ট প্রাইসে"), the same scope as Technical. |
| 4 | How it works | Layman | Meter, prefix, 1.25x / 2x / 0.1x / 0.05x / 0.025x, 5-minute default with free refresh, usage fields, OpenAI default caching and 95%, batch 50% / 1 h / 24 h, stacking, effort defaults, `max_tokens` | PASS | All numbers and model names match. The three usage fields are described in words; no new fact. |
| 5 | How it works | Bangla | Same | PASS | Numbers and names match. `effort`, `max_tokens`, `cached_tokens` stay in English. "ইঙ্গিত, কড়া সীমা নয়" = "a signal, not a strict budget". |
| 6 | Trade-offs | Layman | Four levers as a list, payoff after one / two reads | PASS | Same facts as the table; Haiku 4.5 $1/$5 and Opus 5.5 $4/$20 match. |
| 7 | Trade-offs | Bangla | Same | PASS | "যে ইউজার অপেক্ষা করছেন, তাঁর জন্য" is natural and polite. |
| 8 | A real-life example | Layman | Prices, 200 failures, 20,000 + 3,000 + 1,000 tokens, $0.056, $11.20, $5.60, $0.066, $0.018, $3.648, $0.0228, $2.848, $0.0285, about $3.65 | PASS | All numbers match the Technical block and my recomputation. It omits the "all calls inside the 5-minute lifetime" assumption; that is an omission, not a new fact. |
| 9 | A real-life example | Bangla | Same | PASS | All numbers match. "এটা একটা বানানো উদাহরণ" keeps the invented-example statement. |
| 10 | Common mistakes | Layman | Seven mistakes: ratios, cache write cost, 1,024 tokens on Sonnet 5, effort change breaks cache, full thinking billed, 30% tokenizer, 24-hour batch, price per call | PASS | Same facts and cites. |
| 11 | Common mistakes | Bangla | Same | PASS | "up to 95%" kept as a quote in English. "পড়ুন", "লিখে রাখুন" use the আপনি form. |
| 12 | What a tester can check | Layman | `/usage` estimate, cache share and misses, `--output-format json`, `--max-budget-usd` with headroom, usage fields | PASS | Same facts; the tip has no cites and says it is the tutorial's own advice. |
| 13 | What a tester can check | Bangla | Same | PASS | Flags and `/usage` in English. Tip says "টিউটোরিয়ালের নিজের পরামর্শ", no cites. |

## Re-check

No FAIL in the voices. The one Technical fix (the 5x ratio scope) also changed the first sentence of the Layman and Bangla panels of "In plain words" so that all three voices give the same scope (row 3). `node --test tests/voice-source.test.ts tests/ai-concepts.test.ts`: 27 pass, 0 fail.

FAILs found: 0.

Open FAILs: 0
