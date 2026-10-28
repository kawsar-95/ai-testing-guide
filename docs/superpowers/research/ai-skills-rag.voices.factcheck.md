# Voices fact check: AI Skills, Your Own Data (RAG)

Each Layman and Bangla panel was compared with the Technical panel of the same block (6 blocks, 12 panels).

| Block | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | PASS | PASS | Same facts: definition, runtime retrieval into the context window, 2020 paper, two memories, two open problems, uses, limits. Cites 2 and 1 only. Layman "search index of Wikipedia" simplifies "dense vector index"; no fact changed |
| How it works | PASS | PASS | Same two stages, chunks, embeddings, Voyage AI, pgvector, nearest neighbor search, `input_type`, citations facts. Cites 3, 7, 2, 4 only. Layman and Bangla replace the text diagram with a prose summary of the same flow; no fact added or lost |
| How a tester uses it | PASS | PASS | Same 4 uses, context recall and faithfulness definitions, same example question, cites 6, 5, 4, 2. Layman and Bangla leave out the `/ai-skills/ai-evals/` link; it is navigation, not a fact. The tip is a plain paragraph, still marked as the tutorial's own advice, with no cite |
| Tools to try | PASS | PASS | Same 4 tools and facts, cites 3, 7, 4, 5 |
| Common mistakes | PASS | PASS | Same 5 mistakes and fixes, cites 6, 2, 3, 4, 2. Both repeat "Voyage AI docs" from Technical; fix them with the Technical fix (see the main fact-check report, row 34) |
| How to start | PASS | PASS | Same 5 steps and "20" questions, cites 4, 6, 5. Step 5 leaves out the Evals link; no fact lost |

Checks done:
- No fact, number, name, example, or cite that Technical of the same block lacks.
- Each `<Cite n>` in Layman and Bangla uses an `n` that Technical of the same block cites.
- Bangla keeps RAG, chunk, embedding, vector store, pgvector, Postgres, Voyage AI, Anthropic, Claude, API, PDF, `input_type`, context recall, faithfulness, Ragas, and context window in English letters.
- Bangla uses আপনি / আপনার; no তুমি, তোমার, তুই, or তোর (grep: 0 hits).

Round 1 result: Open FAILs: 0.

## Round 2 (2026-10-28)

The writer changed the embedding sentences in all 3 panels. Each changed Layman and Bangla sentence was compared with the current Technical sentence of the same block.

| Block | Changed text | Verdict | Note |
|---|---|---|---|
| How it works | Layman 77: "Anthropic makes no embedding model of its own. Its docs name Voyage AI as one provider" | PASS | Same words as Technical line 60. Change it together with the Technical fix ("offers no"); see the main report, row R2-2 |
| How it works | Bangla 90: "Anthropic-এর নিজের কোনো embedding model নেই।" (not changed) | PASS | Says "has no embedding model of its own". It adds no fact, and it is nearer to S3 than the current Technical text. After the Technical fix, "Anthropic নিজের কোনো embedding model দেয় না" matches "offers no" exactly (optional) |
| Common mistakes | Layman 194: "The Claude embeddings docs say to set `input_type` to query or document for search, and not to leave it out" | PASS | Same fact and cite 3 as Technical line 185 |
| Common mistakes | Bangla 203: "Claude-এর embeddings ডকস বলে retrieval-এর জন্য `input_type`-কে query বা document সেট করতে, বাদ না দিতে" | PASS | Same fact and cite 3 as Technical line 185. Claude, embeddings, `input_type`, query, document stay in English |

Checks done (Round 2):
- The changed Layman and Bangla sentences give no fact that Technical of the same block lacks, and lose none.
- Cites: only n=3, which Technical cites in the same blocks.
- Bangla still uses আপনি only; no তুমি, তোমার, তুই, or তোর (grep: 0 hits).

## Round 3 (2026-10-28)

The writer changed "makes no" to "offers no" in the Technical text (line 60), and the Layman text (line 77) and the Bangla text (line 90) follow it. Each sentence was compared with the Technical sentence of the same block.

| Block | Changed text | Verdict | Note |
|---|---|---|---|
| How it works | Layman 77: "Anthropic offers no embedding model of its own. Its docs name Voyage AI as one provider" | PASS | Same words as Technical line 60. Cite 3 only, which Technical cites |
| How it works | Bangla 90: "Anthropic নিজের কোনো embedding model দেয় না। এর ডকস একটা প্রোভাইডার হিসেবে Voyage AI-এর নাম দেয়" | PASS | "দেয় না" = "does not offer", so it matches "offers no". It adds no fact. Anthropic, embedding model, Voyage AI stay in English |
| Tools | Bangla 170: "Anthropic নিজের কোনো embedding model দেয় না বলে Claude ডকস একে একটা প্রোভাইডার হিসেবে উল্লেখ করে" | PASS | Matches Technical line 162 ("because Anthropic offers no embedding model of its own"). Cite 3 only |

Bangla still uses আপনি only; no তুমি, তোমার, তুই, or তোর in the changed lines.

Open FAILs: 0
