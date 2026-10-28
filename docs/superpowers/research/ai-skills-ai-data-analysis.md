# Research notes: AI Skills, AI Data Analysis

Page: `content/ai-skills/ai-data-analysis.mdx`. All sources accessed 2026-10-28.

## Sources

| ID | Title | Publisher | URL |
|---|---|---|---|
| S1 | Code Interpreter | OpenAI API docs | https://developers.openai.com/api/docs/guides/tools-code-interpreter |
| S2 | Create and edit files with Claude | Claude Help Center | https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude |
| S3 | Collaborate with Gemini in Google Sheets | Google Docs Editors Help | https://support.google.com/docs/answer/14218565?hl=en |
| S4 | Use the AI function in Google Sheets | Google Docs Editors Help | https://support.google.com/docs/answer/15877199?hl=en |

The ChatGPT help article "Data analysis with ChatGPT" (help.openai.com) returned HTTP 403, so the page cites the OpenAI API docs of the same tool (Code Interpreter).

## Claims

| Claim | Source | Quote |
|---|---|---|
| Code Interpreter lets a model write and run Python in a sandbox | S1 | "allows models to write and run Python code in a sandboxed environment" |
| It processes data files and makes graphs | S1 | "Processing files with diverse data and formatting"; "Generating files with data and images of graphs" |
| CSV is a supported file type | S1 | `.csv` is in the supported file list |
| Claude writes Python scripts for data analysis | S2 | "Claude can create Python scripts for data analysis." |
| Claude makes charts as image files | S2 | "Claude can create data visualizations in image files like PNG." |
| Upload CSV and TSV for analysis | S2 | "You can also upload CSV, TSV, and other files for data analysis and visualization." |
| Review the output | S2 | "You may need to review and refine Claude's outputs to meet your exact requirements." |
| Hidden instructions in files can trick Claude; monitor it | S2 | "monitor Claude while using the feature" |
| Gemini side panel: suggested prompt or your own | S3 | "In the side panel, select a suggested prompt or write your own prompt." |
| Example: identify trends | S3 | "Identify trends in this table." |
| Generated chart does not update with the data | S3 | "The generated chart doesn't link or respond to changes in the original data set that was used to generate it." |
| You can check the analysis steps | S3 | "To check the analysis steps:" |
| Gemini can be wrong | S3, S4 | "Gemini features may suggest inaccurate or inappropriate information." |
| AI function syntax `=AI("prompt", [range])` | S4 | "`=AI(\"prompt\", [optional range])`" (page syntax) |
| AI function can categorize, including sentiment | S4 | "categorizes your data into groups. This includes sentiment analysis." |
| AI function can summarize | S4 | "analyzes the content of your spreadsheet and extracts important key takeaways" |

## Removed

- Upload size limits and file counts (they change; the help pages disagree).
- The 350-cell limit of the AI function (a limit that can change).
