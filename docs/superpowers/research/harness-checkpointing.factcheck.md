# Fact check: harness / checkpointing (round 1)

Sources fetched fresh with curl on 2026-10-28 (Markdown versions of each URL). Each source URL returns HTTP 200: S1 https://code.claude.com/docs/en/checkpointing, S2 https://code.claude.com/docs/en/how-claude-code-works, S3 https://code.claude.com/docs/en/agent-sdk/file-checkpointing, S4 https://docs.langchain.com/oss/python/langgraph/checkpointers, S5 https://docs.langchain.com/oss/python/langgraph/persistence. The checker did not write the page.

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | The model does not keep state. If the process stops, the work in the loop is lost unless the harness saved it. | none | FAIL | A fact with no cite. See fix 1. |
| 2 | Text diagram (save, interruption, load, resume) | - | PASS | Illustration of the support-agent example. No new fact. |
| 3 | Persistence matters to continue a conversation, resume after an interruption, recover from a failure, remember information across interactions | S5 | PASS | "It matters when an agent needs to continue a conversation, resume after an interruption, recover from a failure, or remember information across interactions." |
| 4 | Checkpoints let a person view the state at any time; human-in-the-loop needs this | S4 | PASS | "Checkpointers are needed for these workflows as the person has to be able to view the state of a graph at any point in time" |
| 5 | Claude Code checkpoints the files that the agent changed; LangGraph checkpoints the run state | none | FAIL | Both facts have no cite in this list. Sections 2 and 3 support them with cites, but this list does not. See fix 2. |
| 6 | Claude Code captures the state of the code before each prompt that starts a turn | S1 | PASS | "checkpointing automatically captures the state of your code before each prompt you send that starts a turn" |
| 7 | Before Claude edits a file, it snapshots the current contents | S2 | PASS | "Before Claude edits a file, it snapshots the current contents." |
| 8 | File snapshots for the 100 most recent checkpoints of a session | S1 | PASS | "Claude Code keeps file snapshots for the 100 most recent checkpoints in a session." |
| 9 | `/rewind` or `Esc` two times with an empty prompt opens the rewind menu | S1 | PASS | "Run `/rewind`, or press `Esc` twice when the prompt input is empty, to open the rewind menu." |
| 10 | Restore code and conversation, only conversation, or only code | S1 | PASS | "Restore code and conversation", "Restore conversation", "Restore code" |
| 11 | Checkpoints saved with the conversation; `/rewind` works after `claude --continue` or `claude --resume` | S1, S2 | PASS | S1: "Claude Code saves checkpoints with the conversation, so you can still run `/rewind` after you resume a session". S2: "Resuming a session with `claude --continue` or `claude --resume` reopens it". |
| 12 | A file that only Bash commands changed is not tracked | S1 | PASS | "A file that only Bash commands changed isn't tracked and stays as it is." |
| 13 | Actions on remote systems (databases, APIs, deployments) cannot be checkpointed | S2 | PASS | "Actions that affect remote systems (databases, APIs, deployments) can't be checkpointed." |
| 14 | Changes outside Claude Code are normally not captured | S1 | PASS | "Manual changes you make to files outside of Claude Code and edits from other concurrent sessions are normally not captured" |
| 15 | Checkpoints are for quick recovery in a session; keep using Git | S1 | PASS | "Checkpoints are designed for quick, session-level recovery. For permanent version history ... continue using version control, such as Git" |
| 16 | Agent SDK option `enable_file_checkpointing=True` (Python), `enableFileCheckpointing: true` (TypeScript) | S3 | PASS | Options table: "Enable checkpointing \| `enable_file_checkpointing=True` \| `enableFileCheckpointing: true` \| Tracks file changes for rewinding" |
| 17 | `rewind_files()` / `rewindFiles()` with the checkpoint UUID | S3 | PASS | "call `rewind_files()` (Python) or `rewindFiles()` (TypeScript) with your checkpoint UUID" |
| 18 | File rewinding restores files on disk; it does not rewind the conversation | S3 | PASS | "File rewinding restores files on disk to a previous state. It does not rewind the conversation itself." |
| 19 | A checkpointer saves a snapshot of graph state at each super-step, organized into threads | S4 | PASS | "A checkpointer saves a snapshot of graph state at each super-step, organized into **threads**." |
| 20 | You must give a `thread_id` in the `configurable` part of the config | S4 | PASS | "you **must** specify a `thread_id` as part of the `configurable` portion of the config" |
| 21 | Code: `config = {"configurable": {"thread_id": ...}}` and `graph.invoke(input, config)` | S4, S5 | PASS | S4: `config: RunnableConfig = {"configurable": {"thread_id": "1"}}` then `graph.invoke({"foo": "", "bar":[]}, config)`. Same shape. The `("user", "...")` tuple is a valid LangChain message form for a `messages` state. Non-blocking: S5 uses the dict form `{"role": "user", "content": "..."}`, which matches the docs exactly. |
| 22 | If a node fails at a super-step, restart from the last successful step | S4 | PASS | "if one or more nodes fail at a given superstep, you can restart your graph from the last successful step." |
| 23 | Time travel: replay earlier runs to review or debug a step | S4 | PASS | "allowing users to replay prior graph executions to review and / or debug specific graph steps" |
| 24 | "What a tester can check" callout | - | N/A | Tutorial advice. |
| 25 | Key words: Checkpoint, Rewind, `/rewind`, File checkpointing, Checkpointer, Time travel | S1, S3, S4 | PASS | Restate rows 9, 16, 19, 23. |
| 26 | Key words: `thread_id` is "the LangGraph key under which the checkpoints of one run are saved" | S4 | FAIL | A thread holds many runs, not one. S4: "It contains the accumulated state of a sequence of runs." See fix 3. |
| 27 | Lede (support agent resumes with the saved lookup result) | - | PASS | Example and summary of rows 3 and 19. No new fact. |

## Proposed fixes

1. Row 1: add a source and a cite.
   - New source 6: `{ title: 'Using the Messages API', publisher: 'Claude API documentation', url: 'https://platform.claude.com/docs/en/build-with-claude/working-with-messages', accessed: '2026-10-28' }`. The URL returns HTTP 200.
   - Quote: "The Messages API is stateless, which means that you always send the full conversational history to the API."
   - Text: "The model does not keep state: the Messages API is stateless <Cite n={6} />. If the process stops, the work in the loop is lost, unless the harness saved it."
2. Row 5: add the cites to the list.
   - "A checkpoint of the **files** that the agent changed, so you can undo the changes. Claude Code does this <Cite n={1} />."
   - "A checkpoint of the **run state**, so the run can continue later. LangGraph does this <Cite n={4} />."
   - Add the same cites to the Layman and Bangla paragraphs (cites 1 and 4 are then in Technical).
3. Row 26: replace the Meaning with "The LangGraph key of a thread. The checkpoints of a sequence of runs (for example one conversation) are saved under it."

FAIL summary: 1 (no cite), 5 (no cite), 26 (a thread is not one run).

## Round 2 (2026-10-28)

Re-checked the changed lines of content/harness/checkpointing.mdx against the sources fetched in round 1, and against S6 (https://platform.claude.com/docs/en/build-with-claude/working-with-messages, HTTP 200).

- Row 1: the page now says "The Messages API is stateless <Cite n={6} />, so the model does not keep state." S6 is in `page.sources`. S6: "The Messages API is stateless". The next sentence (work is lost unless the harness saved it) follows from this fact. PASS.
- Row 5: "Claude Code does this <Cite n={1} />" and "LangGraph does this <Cite n={4} />". S1: "Claude Code automatically tracks Claude's file edits as you work, allowing you to quickly undo changes". S4: "A checkpointer saves a snapshot of graph state at each super-step". PASS.
- Row 21: the example now uses `{"role": "user", "content": "Where is my order?"}`. S5 uses the same form: `{"messages": [{"role": "user", "content": "Hi, my name is Bob."}]}` with `{"configurable": {"thread_id": "thread-1"}}`. PASS. The non-blocking note is closed.
- Row 26: the Key words row now says "The LangGraph key of a thread. The checkpoints of a sequence of runs (for example one conversation) are saved under it." S4: "It contains the accumulated state of a sequence of runs." PASS.
- The tester tip now uses `thread_id` in Layman. It is tutorial advice (N/A).

Open FAILs: 0
