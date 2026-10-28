# Voices fact check: AI Skills, Vibe Coding

Each Layman and Bangla panel was compared with the Technical panel of the same block (6 blocks, 12 panels).

| Block | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | PASS | PASS | Same definition, same 4 tools, same internal-tool advice. Cites 1, 1, 2, 3, 4, 5 as in Technical |
| How it works | PASS | PASS | The text diagram is only in Technical; Layman and Bangla give the same loop in prose with the diagram's example ("the export button gives an empty file"), so no fact is lost. Same 3 safety nets and the closing limit. Cites 2, 4, 5, 3, 6, 6, 5 |
| How a tester uses it | PASS | PASS | Same 4 uses, same examples, cites 6, 6, 1. The tip is a plain paragraph in Layman and Bangla, still marked as the tutorial's own advice, no cite. The Bangla prompt "লেখো, তারপর ঠিক করো" is the prompt text to the agent, not an address to the reader; the reader is addressed with আপনি |
| Tools to try | PASS | PASS | Table in Technical, list in Layman and Bangla. Same 4 tools and facts, cites 3, 2, 4, 5 |
| Common mistakes | PASS | PASS | Same 5 mistakes and fixes, cites 1, 6, 6, 4, 5. Bangla "টেস্ট এনভায়রনমেন্টে চালান" (run in a test environment) keeps the meaning of "point the new tool at a test environment" |
| How to start | PASS | PASS | Same 5 steps, cite 1. Layman and Bangla leave out the "To go deeper" links to Prompting and CLAUDE.md; that is a reading pointer, not a fact |

Checks done:
- No fact, number, name, example, or cite that Technical of the same block lacks. Every `<Cite n>` in Layman and Bangla is an `n` that Technical of the same block cites.
- Bangla keeps tool names (Replit Agent, Lovable, Cursor, Claude Code, GitHub, GitLab, Bitbucket, Git), `Esc`, `SPEC.md`, JUnit XML, API, IDE, and terms such as checkpoint, commit, deploy, and mock server in English letters.
- Bangla uses আপনি; grep finds no তুমি, তোমার, তুই, or তোর.
- Note: the 4 FAILs of `ai-skills-vibe-coding.factcheck.md` (rows 3, 7, 14, 31) are in the Technical text. Layman and Bangla repeat rows 14 and 31 ("Checkpoints undo file changes only", "Checkpoint শুধু ফাইলের পরিবর্তন ফেরায়"). They match Technical, so they are not voice FAILs here, but the fix must go into all 3 panels.

## Round 2 (2026-10-28)

The changed sentences of the Round 1 fact-check fixes, compared with Technical of the same block.

| Block | Changed text | Verdict | Reason |
|---|---|---|---|
| In plain words, Layman | "You still lead. The agent writes the code. You judge if the result does its job <Cite n={1} />." | PASS | Same fact and cite as Technical |
| In plain words, Layman | "**Claude Code** is an AI agent that you use from your terminal <Cite n={5} />." | PASS | Same text as Technical |
| In plain words, Bangla | "নেতৃত্ব তবুও আপনার। এজেন্ট কোড লেখে, আর ফলাফল তার কাজ করছে কিনা তা আপনি বিচার করেন <Cite n={1} />।" | PASS | Same fact and cite; আপনি |
| In plain words, Bangla | "**Claude Code** আপনার টার্মিনালে চলা একটা এজেন্ট <Cite n={5} />।" (unchanged) | PASS | Matches the new Technical fact (an agent in your terminal) |
| How it works, Layman | "Claude Code checkpoints undo file changes only. They cannot undo changes to a database, an API, or a deployment <Cite n={5} />." | PASS | Same scope (Claude Code) and cite as Technical |
| How it works, Bangla | "Claude Code-এর checkpoint শুধু ফাইলের পরিবর্তন ফেরায়। ডেটাবেস, API বা deployment-এর পরিবর্তন সে ফেরাতে পারে না <Cite n={5} />।" | PASS | Same scope and cite; Claude Code, API, deployment in English |
| Common mistakes, Layman | "Claude Code checkpoints do not undo database, API, or deployment changes <Cite n={5} />." | PASS | Same text as Technical |
| Common mistakes, Bangla | "Claude Code-এর checkpoint ডেটাবেস, API বা deployment-এর পরিবর্তন ফেরায় না <Cite n={5} />।" | PASS | Same scope and cite |

Checks done: cites are only n values that Technical of the same block cites; English names kept; grep finds no তুমি, তোমার, তুই, or তোর.

Open FAILs: 0
