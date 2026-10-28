# Voices fact check: AI Skills, Context Engineering

Each Layman and Bangla panel was compared with the Technical panel of the same block (6 blocks, 12 panels).

| Block | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | PASS | PASS | Same facts: context window, working memory, context rot, the tutorial's own definition, tester background. Cite 1 only. Layman "gets less accurate and forgets more" restates "accuracy and recall drop"; no fact changed |
| How it works | PASS | PASS | Same facts and cites 1 to 6. The layer code block becomes a sentence with the same 4 layers. Both repeat the NotebookLM / "help link" sentence of Technical; change them together with the Technical fix (main report, row 19) |
| How a tester uses it | PASS | PASS | Same 4 uses, cites 2, 3, 5. The Hooks link is left out (navigation). The tip is a plain paragraph, still marked as the tutorial's own advice, with no cite. Layman "live database" = Technical "production database"; Bangla keeps "production database" |
| Tools to try | PASS | PASS | Same 4 tools and facts as a list, cites 2 to 5. NotebookLM name: change with the Technical fix |
| Common mistakes | PASS | PASS | Same 5 mistakes and fixes, cites 1, 2, 4, 6 |
| How to start | PASS | PASS | Same 5 steps, cites 2, 3. Step 5 names the AI research page without a link |

Checks done:
- No fact, number, name, example, or cite that Technical of the same block lacks.
- Each `<Cite n>` in Layman and Bangla uses an `n` that Technical of the same block cites (script check: 0 misses).
- Bangla keeps Claude Code, CLAUDE.md, `/init`, `@path/to/import`, Claude Project, custom GPT, NotebookLM, Gemini Notebook, PreToolUse hook, token, context window, context rot, `<document>`, `<source>`, `<document_content>` in English.
- Bangla uses আপনি / আপনার; no তুমি, তোমার, তুই, or তোর (grep: 0 hits).

The voices add no new error. The 2 FAILs of the main report (copied run, NotebookLM rename) are Technical FAILs. Apply the rename fix to Layman and Bangla too, in the same blocks.

Round 1 result: Open FAILs: 0.

## Round 2 (2026-10-28)

The writer changed the context-window sentence and the Gemini Notebook text in the 3 panels. Each changed Layman and Bangla sentence was compared with the current Technical sentence of the same block.

| Block | Changed text | Verdict | Note |
|---|---|---|---|
| How it works | Layman 86: "The system prompt, every message (with tool results, images, and documents), and the tool definitions all take space in the context window <Cite n={1} />." | PASS | Same fact and cite as Technical line 64 |
| How it works | Bangla 99: "একটা request-এর সবকিছু context window-এর জায়গা নেয়: ..." (not changed) | PASS | Same fact as Technical; not a copy of the English source |
| How it works | Layman 92: "Gemini Notebook was called NotebookLM until July 2026 <Cite n={7} />. It answers from the sources that you upload, and it shows citations in the text <Cite n={5} />." | PASS | Same facts and cites 7, 5 as Technical line 79 |
| How it works | Bangla 105: "Gemini Notebook-এর নাম July 2026 পর্যন্ত ছিল NotebookLM <Cite n={7} />। এটা আপনার আপলোড করা সোর্স থেকে উত্তর দেয় আর লেখার ভেতরেই citation দেখায় <Cite n={5} />।" | PASS | Same facts and cites 7, 5. Product names in English |
| How a tester uses it | Layman 134, Bangla 147: "Gemini Notebook" in place of "NotebookLM", cite 5 | PASS | Same as Technical line 119 |
| Tools to try | Layman 178, Bangla 188: "Gemini Notebook (Google)", cite 5 | PASS | Same as Technical line 168 |

Checks done again (script): each `<Cite n>` in Layman and Bangla uses an `n` that Technical of the same block cites (cite 7 is in Technical of "How it works"); Bangla has no তুমি, তোমার, তুই, or তোর.

## Round 3 (2026-10-28)

| Section | Panel | Check | Verdict |
|---|---|---|---|
| Tools to try | Layman (177) | Same 3 facts as Technical 167 (retire, December 11, 2026, no new GPTs on personal accounts), cite 4 only, which Technical cites | PASS |
| Tools to try | Bangla (187) | Same 3 facts, cite 4 only. Product names and the date stay in English. No তুমি. | PASS |
| Common mistakes | Layman (219), Bangla (232) | The new "If you still use a custom GPT" opening matches Technical 206. No new fact. | PASS |

Open FAILs: 0
