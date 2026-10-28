# Fact check: AI Skills, Context Engineering

Sources fetched fresh on 2026-10-28 (curl and WebFetch). S1 = Claude Platform docs "Context windows", S2 = Claude Code docs "How Claude remembers your project" (memory), S3 = Claude Help Center "What are projects?", S4 = OpenAI Help Center "Creating and editing GPTs", S5 = Google help "Learn about Gemini Notebook" (the NotebookLM help URL), S6 = Claude Platform docs "Prompting best practices". All 6 are vendor docs or vendor help centers.

Fetch notes:
- S4 returned HTTP 403 to curl and to WebFetch (also the related help.openai.com page "Troubleshooting GPTs"). Rows 17 and 31 rest on search-result text from help.openai.com (two WebSearch runs limited to that domain). No word-for-word quote was available.
- S5: `support.google.com/notebooklm/answer/16164461` returns 301 to `support.google.com/gemininotebook/answer/16164461`. `notebooklm.google.com` returns 301 to `notebook.google.com`. The Google blog post "NotebookLM is now Gemini Notebook" (blog.google, Jul 16, 2026) says: "We're renaming NotebookLM to Gemini Notebook." See row 19.

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Context window = all text the model can refer to, the answer too | S1 | PASS | "all the text a language model can reference when generating a response, including the response itself" |
| 2 | "Working memory", not the training data | S1 | PASS | "different from the large corpus of data the language model was trained on, and instead represents a 'working memory'" |
| 3 | As token count grows, accuracy and recall drop: context rot | S1 | PASS | "As token count grows, accuracy and recall degrade, a phenomenon known as context rot." |
| 4 | What goes in is as important as the window size | S1 | PASS | "This makes curating what's in context just as important as how much space is available." |
| 5 | Definition of context engineering is the tutorial's own | none | PASS | Marked as the tutorial's own |
| 6 | Everything in a request counts: system prompt, every message (tool results, images, documents), tool definitions | S1 | FAIL (copy) | Fact is right: "Everything in the request counts toward the context window: the system prompt, every message in `messages` (including tool results, images, and documents), and your tool definitions." But the page copies an 11-word run: "request counts toward the context window: the system prompt, every message" |
| 7 | Layer picture | none | PASS | Marked as the tutorial's own picture |
| 8 | A new Claude Code session has an empty context window | S2 | PASS | "Each Claude Code session begins with a fresh context window." |
| 9 | CLAUDE.md carries knowledge across sessions; loads at the start of every conversation | S2 | PASS | "Two mechanisms carry knowledge across sessions" / "Both are loaded at the start of every conversation." |
| 10 | Project CLAUDE.md at `./CLAUDE.md` or `./.claude/CLAUDE.md`, shared through version control | S2 | PASS | "A project CLAUDE.md can be stored in either `./CLAUDE.md` or `./.claude/CLAUDE.md`" / "shared with your team through version control" |
| 11 | `/init` writes a first version | S2 | PASS | "Run `/init` to generate a starting CLAUDE.md automatically." |
| 12 | Under 200 lines per file; longer files use more context and are followed less well | S2 | PASS | "target under 200 lines per CLAUDE.md file. Longer files consume more context and reduce adherence." |
| 13 | Link `/configure/claude-md/` | none | PASS | Route is in `lib/nav.ts` |
| 14 | Claude Project = separate workspace with own chat history and knowledge base | S3 | PASS | "Projects allow you to create self-contained workspaces with their own chat histories and knowledge bases." |
| 15 | Upload documents and write project instructions; Claude uses them in each chat of the project | S3 | PASS | "knowledge base, which Claude will use to better understand the context and background for your individual chats within that project" / "you can define project instructions for each project" |
| 16 | `@path/to/import`; an import does not lower the context cost | S2 | PASS | "CLAUDE.md files can import additional files using `@path/to/import` syntax." / "Imports ... don't reduce its context cost, because imported files load together with the CLAUDE.md that imports them." |
| 17 | Custom GPT: instructions hold rules, tone, workflow; knowledge files hold reference material | S4 | PASS (search text, page 403) | help.openai.com search-result text for this article: use knowledge for reference material, not rules or behavior; put rules, tone, and workflow guidance in instructions. Two separate searches gave the same text. Not checked word for word |
| 18 | NotebookLM answers from uploaded sources with inline citations | S5 | PASS (fact) | "Chat with your notebook to get grounded information based on your sources with clear in-line citations" |
| 19 | "Its help link now opens the Gemini Notebook help" (and the page calls the product "NotebookLM" everywhere: metadata, How it works, How a tester uses it, Tools table) | S5 | FAIL | The redirect is true, but the sentence hides the real fact. Google renamed the product: "We're renaming NotebookLM to Gemini Notebook." (blog.google, Jul 16, 2026). S5 never says "NotebookLM", so S5 alone does not support a claim about a product with that name. The reader looks for "NotebookLM" and does not find it |
| 20 | Long documents at the top, above the question and instructions | S6 | PASS | "Place your long documents and inputs near the top of your prompt, above your query, instructions, and examples." |
| 21 | `<document>` with `<source>` and `<document_content>` | S6 | PASS | "wrap each document in `<document>` tags with `<document_content>` and `<source>` (and other metadata) subtags" |
| 22 | Test context pack; put it in CLAUDE.md or import it with `@` | S2 | PASS | Same quotes as rows 10 and 16; the pack is the tutorial's own idea |
| 23 | Upload reference files to a Claude Project | S3 | PASS | "Within each project, you can upload documents" |
| 24 | NotebookLM if you want each answer to show where it came from | S5 | PASS (fact) | Same quote as row 18. Name: see row 19 |
| 25 | CLAUDE.md is context, not enforced configuration; block with a PreToolUse hook | S2 | PASS | "Claude treats them as context, not enforced configuration. To block an action regardless of what Claude decides, use a PreToolUse hook instead." |
| 26 | Link `/extend/hooks/` | none | PASS | Route is in `lib/nav.ts` |
| 27 | Specific and concise instructions are followed more consistently | S2 | PASS | "The more specific and concise your instructions, the more consistently Claude follows them." |
| 28 | "Tutorial advice" tip | none | PASS | Marked as the tutorial's own advice; no `<Cite>` |
| 29 | Tools table: CLAUDE.md, Claude Projects, NotebookLM rows | S2, S3, S5 | PASS (facts) | Same quotes as rows 9, 15, 18. NotebookLM name: see row 19 |
| 30 | Mistakes: a full wiki export fills the window and lowers accuracy | S1 | PASS | Follows from row 3 ("accuracy and recall degrade") |
| 31 | Custom GPT row of the table, and the "Rules in the knowledge files" mistake | S4 | PASS (search text, page 403) | Same as row 17 |
| 32 | Mistakes: 200 lines; `@` import still loads; context not enforced; documents first | S2, S6 | PASS | Same quotes as rows 12, 16, 25, 20 |
| 33 | How to start: `/init`; upload long documents to a Project | S2, S3 | PASS | Same quotes as rows 11, 23 |
| 34 | Link `/ai-skills/ai-research/` | none | PASS | Slug is in `lib/ai-skills/topics.ts` |
| 35 | Key words (5 rows) | S1, S2, S3 | PASS | Same quotes as rows 1, 3, 9, 15; the context engineering row is marked as the tutorial's own |

Other checks:
- Sources: all official. No prices (grep: 0 hits).
- Copy check: a script compared every 8-word run of the Technical and Layman text with the fetched text of S1, S2, S3, S5, S6. One hit (row 6). S4 could not be fetched, so it was not in the copy check.
- The "Tutorial advice" tip has no cite.

Advisory (not counted as a FAIL, not verified word for word): the help.openai.com search-result text for S4 also says that OpenAI plans to retire custom GPTs, and that new GPT creation is not available on personal ChatGPT plans. If this is true, the page should say so, because the page sends readers to custom GPTs. The writer should open S4 in a browser and check.

## Fixes

| Row | Fix |
|---|---|
| 6 | Rewrite: "The system prompt, every message (with tool results, images, and documents), and the tool definitions all use space in the context window <Cite n={1} />." Layman and Bangla do not copy the run and need no change |
| 19 | Add a source: `{ title: 'NotebookLM is now Gemini Notebook', publisher: 'Google (The Keyword blog)', url: 'https://blog.google/innovation-and-ai/products/gemini-notebook/notebooklm-gemini-notebook/', accessed: '2026-10-28' }` as source 7. Replace "NotebookLM answers ... Its help link now opens the Gemini Notebook help <Cite n={5} />." with "Gemini Notebook (until July 2026 named NotebookLM) <Cite n={7} /> answers from the sources that you upload and shows inline citations <Cite n={5} />." Use "Gemini Notebook" in the metadata, How a tester uses it, the Tools table, the source 5 publisher, and all 3 voices. Update the research notes S5 note |

Round 1 result: Open FAILs: 2.

## Round 2 (2026-10-28)

The writer changed the page for rows 6 and 19. Each changed sentence was checked again against S1, S5, and the new source 7 (S7 = Google, "NotebookLM is now Gemini Notebook", blog.google, fetched fresh with curl, HTTP 200).

| # | Changed text | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| R2-1 | Technical line 64: "The system prompt, every message (with tool results, images, and documents), and the tool definitions all use space in the context window" | S1 | PASS (fixes row 6) | Same fact as "Everything in the request counts toward the context window: the system prompt, every message ... and your tool definitions." The copy script finds no 8-word run from S1 |
| R2-2 | Layman line 86: same sentence with "take space" | S1 | PASS | Same fact; no copied run |
| R2-3 | Source 7 added: Google, "NotebookLM is now Gemini Notebook", blog.google | S7 | PASS | Official Google blog. "We're renaming NotebookLM to Gemini Notebook. It's the same standalone product" (Jul 16, 2026) |
| R2-4 | Technical line 79: "Gemini Notebook (named NotebookLM until July 2026) <Cite n={7} /> answers from the sources that you upload and shows inline citations <Cite n={5} />." | S7, S5 | PASS (fixes row 19) | S7: rename on Jul 16, 2026. S5: "grounded information based on your sources with clear in-line citations" |
| R2-5 | Metadata description, How a tester uses it (line 119), Tools table (line 168): "Gemini Notebook" in place of "NotebookLM" | S5 | PASS | Same facts as rows 18, 24, 29; the name now matches S5 |
| R2-6 | Source 5 publisher: "Google (Gemini Notebook Help)" | S5 | PASS | The page title is "Learn about Gemini Notebook - Gemini Notebook Help". The URL still is the old notebooklm help URL; it redirects (301) to the same page, so it is not broken |

Other checks of Round 2:
- "NotebookLM" now shows only in the rename sentences and in the title of source 7.
- Every source 1 to 7 has a cite, and every cite has a source.
- Copy check again over the whole page (Technical and Layman) against S1, S2, S3, S5, S6, S7: only URL strings match.
- The custom GPT advisory of Round 1 is still open as an advisory; it is not a FAIL.

Round 2 result: rows 6 and 19 are fixed. No new FAIL.

## Round 3 (2026-10-28)

The checker read source 4 (help.openai.com, "Creating and editing GPTs", updated 2026-10-27) in the built-in browser, because curl and WebFetch get HTTP 403. The checker did not write the page.

| # | Claim (panel, line) | Cite | Verdict | Quote from source 4 |
|---|---|---|---|---|
| R3-1 | Instructions hold rules and workflow; knowledge files hold reference material (Technical 167, Layman 177, Bangla 187, and Common mistakes 206, 219, 232). This was checked on search text only before. | 4 | PASS | "Use knowledge for reference material, not rules or behavior. Put rules, tone, and workflow guidance in instructions." |
| R3-2 | OpenAI plans to retire custom GPTs (Technical 167; Layman 177 says "shut down"; Bangla 187 says "বন্ধ করার পরিকল্পনা") | 4 | PASS | "We're planning to retire custom GPTs and help creators move their workflows to plugins." |
| R3-3 | The standard retirement date is December 11, 2026 (167, 177, 187) | 4 | PASS | "Standard retirement is scheduled for December 11, 2026." |
| R3-4 | Personal ChatGPT accounts can no longer create new GPTs (167, 177, 187) | 4 | PASS | "New GPT creation and publishing are not available on personal ChatGPT accounts, including Free, Go, Plus, and Pro." |
| R3-5 | Copy check of the new sentences | - | PASS | The longest run shared with the quotes above is "personal ChatGPT accounts" (3 words). |
| R3-6 | The metadata description no longer recommends custom GPTs | - | PASS | The description lists CLAUDE.md, Claude Projects, and Gemini Notebook. |

The advisory of Round 1 (custom GPT retirement) is closed: the page now states it.

Open FAILs: 0
