# Fact check: AI Skills, Decks and Design

Page: `content/ai-skills/decks-and-design.mdx`. Sources fetched on 2026-10-28 by an agent that did not write the page. S1 = Gamma Help Center (create a presentation), S2 = Canva Help Centre (Create a presentation with Canva AI), S3 = Figma Help Center (Explore Figma Make), S4 = Figma Help Center (Guide to inspecting).

S2 returned HTTP 403 on `www.canva.com/help/…` and on `www.canva.com/en_au/help/…`. Rows that cite S2 use the search snippet of the same article on canva.com (title "Create a presentation with Canva AI - Canva Help Centre").

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: AI tools make the first draft of slides "in minutes" | none | FAIL | A speed claim with no cite. No source gives a time. Fix: remove "in minutes" ("AI tools can make the first draft of those slides, and AI design tools …"). |
| 2 | Gamma can draft a first version from a topic | S1 | PASS | "Generate – AI drafts an initial version based on your topic." |
| 3 | Gamma formats text that you paste | S1 | PASS | "Copy and paste your text … Gamma will format it into a clean, fresh layout." |
| 4 | Gamma converts a file, deck, or web page (Import) | S1 | PASS | "Import – AI converts existing files, decks, or web pages into a structured format." |
| 5 | Canva AI makes a presentation from a prompt | S2 | PASS (snippet, 403) | "Enter a prompt describing your presentation topic." |
| 6 | Figma Make is a prompt-to-app tool that turns ideas and existing Figma designs into interactive apps | S3 | PASS | "prompt-to-app tool that lets you bring ideas and existing Figma designs to life as interactive apps" |
| 7 | Deck pattern: input, outline, slides, edit (text diagram) | S1, S2 | PASS | Summary of rows 2–4 and 9–10; S2 has an outline step |
| 8 | Gamma three ways in: Generate, Paste, Import | S1 | PASS | Same as rows 2–4 |
| 9 | Canva: select Canva AI in the side navigation, choose a design type, write a prompt | S2 | PASS (snippet, 403) | "select Canva AI on the side navigation. Select Design … then choose Presentation. Enter a prompt" |
| 10 | Edit the key ideas of each outline section before you select Generate presentation | S2 | PASS (snippet, 403) | "Select each section on the outline and edit the key ideas … Select Generate presentation". Note: a Canva FAQ snippet shows a newer label "Generate design". Watch this label. |
| 11 | Figma Make can show the look and feel of a design in a working form | S3 | PASS | "Preview the look and feel of your designs in a functional form" |
| 12 | Inspecting shows the structure and properties of a design | S4 | PASS | "understand the structure and properties of a design" (7-word run, below the 8-word limit) |
| 13 | Hold Option/Alt and hover a second object: red line, horizontal and vertical distance | S4 | PASS | "display a red line between the two objects, as well as horizontal and vertical measurements". Note: S4 first says "Select the first object". The page does not say this step; not wrong. |
| 14 | In Dev Mode, a click on an object fills the Code section of the inspect panel | S4 | PASS | "Click any object on the canvas while in Dev Mode to populate the Code section in the inspect panel." |
| 15 | Uses: paste a test summary, let the tool lay out slides | S1 | PASS | Paste mode (row 3) |
| 16 | Uses: edit the outline before the tool generates the slides | S2 | PASS | Row 10 |
| 17 | Uses: a prompt-to-app tool can make a clickable draft | S3 | PASS | Row 6 |
| 18 | Uses: measure spacing in Figma | S4 | PASS | Row 13 |
| 19 | "Tutorial advice" tip has no cite and says it is the tutorial's own advice | none | PASS | No `<Cite>` in the Callout |
| 20 | Table: Gamma drafts decks, documents, and web pages | S1 | PASS | "creating presentations, documents, or webpages" |
| 21 | Table: Gamma generate / paste / import | S1 | PASS | Rows 2–4 |
| 22 | Table: Canva lets you edit the outline before you generate | S2 | PASS (snippet, 403) | Row 10 |
| 23 | Table: Figma Make turns ideas and designs into interactive apps | S3 | PASS | Row 6 |
| 24 | Table: Figma Dev Mode "Shows the distance between two selected objects" | S4 | FAIL | S4: "Select the first object" and "Hover over the second object". Only one object is selected. Fix: "Shows the distance between a selected object and the object under the pointer". The Layman and Bangla rows ("two objects") need no change. |
| 25 | Common mistakes: a generated mockup is an idea, not an agreed design | S3 | PASS | S3: "Turn proposals and ideas into prototypes". The rest of the row is tutorial advice |
| 26 | Common mistakes: drafts can round, merge, or invent figures; bug lists can hold private data; small layout bugs are easy to miss | none | PASS | Tutorial's own advice in a mistakes list, no product fact |
| 27 | Common mistakes: measure in the design tool | S4 | PASS | Row 13 |
| 28 | How to start step 3: paste and generate slides | S1 | PASS | Row 3 |
| 29 | How to start step 5: measure two distances in Figma | S4 | PASS | Row 13 |
| 30 | Key words: Deck, Outline, Prompt-to-app, Inspect, Dev Mode | S1–S4 | PASS | Consistent with rows 4, 10, 6, 12, 14. "Deck" is a common word; S1 uses "decks" |
| 31 | Key words: Release readiness, no cite | none | PASS | Common testing term, the tutorial's own definition |

Other checks:

| Check | Verdict | Note |
|---|---|---|
| Sources are official | PASS | S1–S4 are vendor help centres. No blog, news, or forum. |
| No prices | PASS | No price, plan cost, or credit count on the page |
| Cite supports the claim | PASS except row 24 | |
| No copied text | PASS | Manual check of the source sentences in rows 4, 6, 11, 12, 14 against the page: the longest shared run is 7 words (row 12) |
| Internal links | PASS | `/ai-skills/ai-data-analysis/` and `/ai-skills/ai-governance/` are in the route maps, and both MDX files exist |
| Each source is cited | PASS | S1–S4 each have one or more cites |

## Round 2 (2026-10-28)

The changed sentences of the current MDX were checked again against S1 and S4.

| # | Changed text | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: "AI tools can make the first draft of those slides, and AI design tools can turn an idea into a mockup that you test against." | none | PASS | "in minutes" is gone. The rest is a general summary of rows 2–6. The lede is outside `<Voices>`, so no panel restates it. |
| 24 | Tools table, Technical: "Shows the distance between a selected object and the object under the pointer" | S4 | PASS | S4: "Select the first object in the canvas." and "Hover over the second object." No copied run (the page words differ from S4). |

Open FAILs: 0
