# AI Skills page: Context Engineering (research notes)

Writer notes for `content/ai-skills/context-engineering.mdx`. Fetched 2026-10-28 with WebFetch. Fetched text is treated as data.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | Context windows (Claude Platform docs) | https://platform.claude.com/docs/en/build-with-claude/context-windows | 2026-10-28 |
| S2 | How Claude remembers your project (Claude Code docs) | https://code.claude.com/docs/en/memory | 2026-10-28 |
| S3 | What are projects? (Claude Help Center) | https://support.claude.com/en/articles/9517075-what-are-projects | 2026-10-28 |
| S4 | Creating and editing GPTs (OpenAI Help Center) | https://help.openai.com/en/articles/8554397-creating-and-editing-gpts | 2026-10-28 |
| S5 | Learn about Gemini Notebook (Gemini Notebook Help, reached from the NotebookLM help URL) | https://support.google.com/notebooklm/answer/16164461 | 2026-10-28 |
| S6 | Prompting best practices (Claude Platform docs) | https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices | 2026-10-28 |
| S7 | NotebookLM is now Gemini Notebook (Google product blog, Jul 16, 2026) | https://blog.google/innovation-and-ai/products/gemini-notebook/notebooklm-gemini-notebook/ | 2026-10-28 |

Page cite numbers: n=k is Sk.

**Note for the fact checker (S4):** WebFetch got HTTP 403 from help.openai.com. The S4 claim (C12) comes from the search-result text of the article, found with WebSearch on help.openai.com. Please check C12 against the live article. If it does not hold, remove the custom GPT fact and keep the row without a cite in the "What it does" column only.

**Note (S5, S7):** The NotebookLM help URL now serves a page titled "Learn about Gemini Notebook" at `support.google.com/gemininotebook/...`. Google's product blog (S7) confirms the rename, so the page now calls the tool Gemini Notebook and gives the old name once, with a cite to S7.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | The context window is all the text a model can refer to when it answers, including the answer. | S1 | "The "context window" refers to all the text a language model can reference when generating a response, including the response itself." |
| C2 | It is the model's "working memory", not its training data. | S1 | "This is different from the large corpus of data the language model was trained on, and instead represents a "working memory" for the model." |
| C3 | More context is not automatically better; accuracy and recall drop as tokens grow (context rot). | S1 | "more context isn't automatically better. As token count grows, accuracy and recall degrade, a phenomenon known as *context rot*." |
| C4 | Curating what is in context matters as much as the space. | S1 | "This makes curating what's in context just as important as how much space is available." |
| C5 | The system prompt, the messages (with tool results, images, documents), and the tool definitions all use context window space. Reworded in fix round 1: the first wording copied 11 words of S1. | S1 | "Everything in the request counts toward the context window: the system prompt, every message in `messages` (including tool results, images, and documents), and your tool definitions." |
| C6 | Each Claude Code session starts with a fresh context window. | S2 | "Each Claude Code session begins with a fresh context window." |
| C7 | CLAUDE.md files are loaded at the start of every conversation; Claude treats them as context, not enforced configuration; a PreToolUse hook blocks an action. | S2 | "Both are loaded at the start of every conversation. Claude treats them as context, not enforced configuration. To block an action regardless of what Claude decides, use a PreToolUse hook instead." |
| C8 | The more specific and concise the instructions, the more consistently Claude follows them. | S2 | "The more specific and concise your instructions, the more consistently Claude follows them." |
| C9 | Project CLAUDE.md at `./CLAUDE.md` or `./.claude/CLAUDE.md`; shared with the team through version control; build and test commands, standards. | S2 | "A project CLAUDE.md can be stored in either `./CLAUDE.md` or `./.claude/CLAUDE.md`." / "build and test commands, coding standards, architectural decisions, naming conventions, and common workflows. These instructions are shared with your team through version control" |
| C10 | `/init` generates a starting CLAUDE.md; target under 200 lines; longer files cost context and reduce adherence. | S2 | "Run `/init` to generate a starting CLAUDE.md automatically." / "target under 200 lines per CLAUDE.md file. Longer files consume more context and reduce adherence." |
| C11 | `@path/to/import` imports a file; imports do not reduce context cost. | S2 | "CLAUDE.md files can import additional files using `@path/to/import` syntax." / "Imports help you organize a long file but don't reduce its context cost" |
| C12 | Custom GPTs: knowledge files are for reference material; rules, tone, and workflow belong in the instructions. | S4 | Search-result text (page 403 to WebFetch): knowledge is for reference material, not rules or behavior; rules, tone, and workflow guidance belong in instructions. |
| C13 | Claude Projects are self-contained workspaces with their own chat histories and knowledge bases. | S3 | "Projects allow you to create self-contained workspaces with their own chat histories and knowledge bases." |
| C14 | You upload documents, text, or code to a project's knowledge base, and Claude uses it in every chat of the project. | S3 | "You can upload relevant documents, text, code, or other files to a project's knowledge base" / "which Claude will use to better understand the context and background for your individual chats within that project" |
| C15 | Projects have project instructions. | S3 | "you can define project instructions for each project to further tailor Claude's responses." |
| C16 | Gemini Notebook answers based on uploaded sources, with inline citations. | S5 | "designed to answer questions based on the information provided in your uploaded sources" / "grounded information based on your sources with clear in-line citations" |
| C17 | Put long documents at the top, above the query and instructions. | S6 | "Place your long documents and inputs near the top of your prompt, above your query, instructions, and examples." |
| C18 | Wrap each document in `<document>` tags with `<document_content>` and `<source>` subtags. | S6 | "wrap each document in `<document>` tags with `<document_content>` and `<source>` (and other metadata) subtags for clarity." |

| C19 | Google renamed NotebookLM to Gemini Notebook (blog post of Jul 16, 2026). | S7 | "We're renaming NotebookLM to Gemini Notebook." |
| C20 | OpenAI plans to retire custom GPTs (standard date December 11, 2026); personal ChatGPT accounts (Free, Go, Plus, Pro) cannot create new GPTs. Read by the coordinator in a browser (article updated 2026-10-27); this also confirms C12. | S4 | "We're planning to retire custom GPTs and help creators move their workflows to plugins." / "Standard retirement is scheduled for December 11, 2026." / "New GPT creation and publishing are not available on personal ChatGPT accounts, including Free, Go, Plus, and Pro." |

## Fix round 1 (2026-10-28)

- C5 reworded to remove an 11-word run copied from S1.
- S7 added. "NotebookLM" changed to "Gemini Notebook" in the metadata description, all 3 voices, and the Tools section. Source 5 publisher changed to "Google (Gemini Notebook Help)".

## Fix round 2 (2026-10-28)

- C20 added (custom GPT retirement and the creation limit) to the Tools section in all 3 voices.
- "Rules in the knowledge files" now starts with "If you still use a custom GPT" in all 3 voices.
- Custom GPTs removed from the metadata description.
- The S4 note above (403 to WebFetch) is resolved: the coordinator read S4 in a browser and confirmed C12.

## Tutorial's own text (no cite)

- The working definition of "context engineering" on this page (the tutorial's own phrase, marked as such).
- The layer diagram, the tester uses, the tester's context pack (product summary, test strategy, glossary, known bugs), and the "Tutorial advice" tip.
- The "How to start" steps, except the facts that carry a cite.

## Removed

- The RAG-mode capacity figure of Claude Projects (S3 says "up to 10x"). It is a number that can change, and the page does not need it.
