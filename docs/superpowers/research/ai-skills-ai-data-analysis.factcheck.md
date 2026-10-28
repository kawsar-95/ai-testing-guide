# Fact check: AI Data Analysis

Page: `content/ai-skills/ai-data-analysis.mdx`. All 4 sources were fetched again on 2026-10-28 by an agent that did not write the page (WebFetch, and curl to a scratch folder for the copy check). S1 = OpenAI Code Interpreter guide, S2 = Claude Help Center "Create and edit files with Claude", S3 = Google Docs Editors Help "Collaborate with Gemini in Google Sheets", S4 = Google Docs Editors Help "Use the AI function in Google Sheets".

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Code Interpreter lets a model write and run Python code in a sandbox | S1 | PASS | "allows models to write and run Python code in a sandboxed environment" |
| 2 | Claude can write Python scripts for data analysis | S2 | PASS | "Claude can create Python scripts for data analysis." |
| 3 | In Sheets, Gemini works in a side panel; pick a suggested prompt or write your own | S3 | PASS | "In the side panel, select a suggested prompt or write your own prompt." |
| 4 | Gemini features may suggest inaccurate information | S3 | PASS | "Gemini features may suggest inaccurate or inappropriate information." |
| 5 | Code Interpreter can process data files; `.csv` is a supported type | S1 | PASS | "Processing files with diverse data and formatting"; the Supported files table lists `.csv` (`text/csv`) |
| 6 | Claude accepts CSV, TSV, and other files for analysis and charts | S2 | PASS | "upload CSV, TSV, and other files for data analysis and visualization" |
| 7 | Claude can make charts as image files such as PNG | S2 | PASS | "data visualizations in image files like PNG" |
| 8 | Code Interpreter can make files with data and images of graphs | S1 | PASS | "Generating files with data and images of graphs" |
| 9 | In Sheets, you can open the analysis steps that Gemini used | S3 | PASS | The data analysis section: "To check the analysis steps", click "Analysis steps" |
| 10 | Cell formula `=AI("prompt", [range])` | S4 | PASS | Syntax `AI("prompt",[optional range])`; the range is optional, shown with brackets on the page |
| 11 | `=AI()` can sort text into groups, including sentiment analysis | S4 | PASS | "categorizes your data into groups"; this "includes sentiment analysis" |
| 12 | `=AI()` can pull key takeaways from the sheet | S4 | PASS | "extracts important key takeaways" |
| 13 | A chart that Gemini inserts does not update when the source data changes | S3 | PASS | "The generated chart doesn't link or respond to changes in the original data set" |
| 14 | Tester uses (test results, flaky data, defect trends, k6) | S4 for `=AI()` | PASS | Tutorial examples; the one fact (`=AI()` groups titles) is row 11 |
| 15 | Tools table: 4 rows, each fact repeats rows 1, 6, 9, 11 | S1–S4 | PASS | Same quotes as those rows |
| 16 | Common mistakes: tool can be wrong (S3), stale chart (S3) | S3 | PASS | Rows 4 and 13 |
| 17 | Claude's help warns that hidden instructions in files can try to trick it, and asks you to monitor it | S2 | PASS | "inconspicuously add instructions via external files or websites that trick Claude"; "we recommend you monitor Claude while using the feature" |
| 18 | How to start step 3: read the analysis steps | S3 | PASS | Row 9 |
| 19 | Key words: Code Interpreter, Sandbox (S1), `=AI()` (S4), Analysis steps (S3); CSV and Flaky test are common terms with no cite | S1, S3, S4 | PASS | Same quotes as rows 1, 9, 10 |

Other checks:

| Check | Verdict | Note |
|---|---|---|
| Sources are official | PASS | OpenAI API docs, Claude Help Center, Google Docs Editors Help (2 pages). No blog, news, or forum. |
| No prices | PASS | The page gives no price or plan cost. |
| Each cite points to the source that supports the claim | PASS | Rows 1–19 |
| No copied text | PASS | `scripts/linux_overlap.py` on the 4 fetched texts: no run found. Longest shared run seen by hand: "a suggested prompt or write your own" (7 words, row 3). |
| "Tutorial advice" tip has no `<Cite>` | PASS | The tip says it is the tutorial's own advice and has no cite. |
| Internal links | PASS | `/k6/`, `/ai-skills/ai-governance/`, `/ai-skills/prompting/` are in the route maps. `content/ai-skills/prompting.mdx` is not written yet; the route exists in `scripts/ai-skills-route-map.json`, so the link resolves when that page is added. |
| Every source is cited | PASS | S1–S4 each have a cite. |

Open FAILs: 0
