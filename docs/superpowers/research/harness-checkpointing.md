# Research notes: Checkpointing

Page: `content/harness/checkpointing.mdx`. Module: AI Harnesses. Date: 2026-10-28.

The base is the owner's image "AI Harnesses: 6 must know terms". Its card for this topic gives the scope and the example. Each fact on the page comes from the sources below.

## Sources

| ID | Title | URL |
|---|---|---|
| S1 | Checkpointing | https://code.claude.com/docs/en/checkpointing |
| S2 | How Claude Code works | https://code.claude.com/docs/en/how-claude-code-works |
| S3 | Rewind file changes with checkpointing | https://code.claude.com/docs/en/agent-sdk/file-checkpointing |
| S4 | Checkpointers (LangGraph) | https://docs.langchain.com/oss/python/langgraph/checkpointers |
| S5 | Persistence (LangGraph) | https://docs.langchain.com/oss/python/langgraph/persistence |

## Claims

| Claim | Source | Quote |
|---|---|---|
| Why persistence | S5 | "It matters when an agent needs to continue a conversation, resume after an interruption, recover from a failure, or remember information across interactions." |
| Human-in-the-loop needs state | S4 | "the person has to be able to view the state of a graph at any point in time" |
| Checkpoint before each prompt | S1 | "captures the state of your code before each prompt you send that starts a turn." |
| Snapshot before an edit | S2 | "Before Claude edits a file, it snapshots the current contents." |
| 100 checkpoints | S1 | "Claude Code keeps file snapshots for the 100 most recent checkpoints in a session." |
| /rewind and Esc Esc | S1 | "Run /rewind, or press Esc twice when the prompt input is empty, to open the rewind menu." |
| Three restore options | S1 | "Restore code and conversation / Restore conversation / Restore code" |
| Rewind after resume | S1 | "Claude Code saves checkpoints with the conversation, so you can still run /rewind after you resume a session" |
| --continue / --resume | S2 | "Resuming a session with claude --continue or claude --resume reopens it under the same session ID" |
| Bash changes not tracked | S1 | "A file that only Bash commands changed isn't tracked and stays as it is." |
| Remote actions | S2 | "Actions that affect remote systems (databases, APIs, deployments) can't be checkpointed." |
| External changes | S1 | "Manual changes you make to files outside of Claude Code and edits from other concurrent sessions are normally not captured" |
| Keep Git | S1 | "For permanent version history and collaboration, continue using version control, such as Git" |
| SDK option | S3 | "enable_file_checkpointing=True / enableFileCheckpointing: true / Tracks file changes for rewinding" |
| rewind_files | S3 | "call rewind_files() (Python) or rewindFiles() (TypeScript) with your checkpoint UUID" |
| Files only | S3 | "File rewinding restores files on disk to a previous state. It does not rewind the conversation itself." |
| Super-step snapshots | S4 | "A checkpointer saves a snapshot of graph state at each super-step, organized into threads." |
| thread_id required | S4 | "you must specify a thread_id as part of the configurable portion of the config" |
| Fault tolerance | S4 | "you can restart your graph from the last successful step." |
| Time travel | S4 | "replay prior graph executions to review and / or debug specific graph steps." |
