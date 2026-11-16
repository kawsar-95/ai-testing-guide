# Voices fact check: Test Execution & Bug Investigation

Page: `content/agentic-qa/test-execution.mdx`. Every round below was written by a fresh `claude -p` session that did not write the page and did not make the fixes (claude-sonnet-5-5, tools Read, Grep, and Glob only, no web access). Its evidence was only the page, the text of the sources that the page cites (fetched on 2026-11-15), and the files of the dMoney repository at commit 51db34a. Rounds 1 to 3 checked the whole page; the briefs are in `agentic-qa-factcheck-brief.md`. Each later round got only the rows that the round before it left open, what the editor did, and a diff of the page, and it also checked every changed line. Between rounds, the orchestrating session, which did not write the page, fixed or rebutted each FAIL; the research note (`agentic-qa-test-execution.md`) lists each fix. The rounds are kept as the checkers wrote them, with config values from the practice repository replaced by `<redacted>`. The voices rule is the one in `CLAUDE.md`: the `সহজ English` (Layman) and `বাংলা` (Bangla) panels give no fact that the Technical panel of the same section does not give. No person who reads Bangla has read the Bangla.

## Voices fact check: agentic-qa / test-execution (round 1, 2026-11-15)

| # | Section | Panel | Verdict | Note (for a FAIL: the sentence, what is wrong, and a fix; for a PASS: the details left out) |
|---|---|---|---|---|
| 1 | Choose a browser tool for the agent | Layman | FAIL | "Claude reads the page as a text tree of its parts, not as a picture." Technical says only "structured accessibility snapshots, not screenshots". "Text tree" is an added explanation. Fix: "Claude reads the page as a structured snapshot, not as a screenshot." |
| 2 | Choose a browser tool for the agent | Layman | FAIL | "The Playwright MCP README says a command-line tool uses fewer tokens." Technical says "a CLI with skills is more token-efficient than MCP". The limit "with skills" was dropped, so the claim is broader. Fix: "a command-line tool with skills uses fewer tokens than MCP". |
| 3 | Choose a browser tool for the agent | Bangla | PASS | Left out: the "keeps it off with an API key or token" detail, the table's "good for" column, and the "than MCP" comparison (implied). |
| 4 | Drive the browser with agent-browser | Layman | PASS | Left out: the "first time" limit on the download, the `pdf`, `download`, `diff` commands, the daemon, and `agent-browser mcp`. "Button" for "target" only narrows the claim. "Test copy of Chrome" is a fair paraphrase of "Chrome for Testing". |
| 5 | Drive the browser with agent-browser | Bangla | PASS | Left out: the `pdf`, `download`, `diff` commands and `agent-browser mcp`. |
| 6 | Check the result in three layers | Layman | FAIL | "The MySQL MCP server can keep only the read tools with `MCP_PERMISSIONS=list,read,utility`." Technical says it keeps only the list, read, and utility tools. "Read tools" is a different and narrower set, and it hides that utility tools stay. Fix: "keep only the list, read, and utility tools". |
| 7 | Check the result in three layers | Bangla | PASS | Left out: `readOnlyHint` and `destructiveHint`, and the "fresh snapshot" detail. |
| 8 | Collect evidence | Layman | FAIL | "Console log. This is the list of browser messages." The Technical panel gives no such definition. It is an added explanation. Fix: delete the sentence. |
| 9 | Collect evidence | Layman | FAIL | "Network log. This is the list of calls the page made." Same problem: an added explanation that is not in Technical. Fix: delete the sentence. |
| 10 | Collect evidence | Layman | FAIL | "Use agent-browser `network` or Playwright MCP `browser_network_requests`. <Cite 2>" The only cite is 2. In Technical, the agent-browser `network` fact carries cite 1. Fix: put Cite 1 after "agent-browser `network`" and Cite 2 after the Playwright MCP tool. |
| 11 | Collect evidence | Layman | FAIL | "`--redact-url-params` hides the values of chosen URL parts." Technical says it replaces the values "with `<redacted>` in tool responses". The limit "in tool responses" was dropped, so the claim is broader. Fix: "hides the values of chosen URL parts in tool responses". |
| 12 | Collect evidence | Bangla | FAIL | "`--redact-url-params` নির্দিষ্ট URL parameter-এর মান `<redacted>` দিয়ে বদলে দেয়।" The limit "in tool responses" was dropped, so the claim is broader. Fix: add "tool response-এ". Left out in the rest: `--isolated`, the "Ask for focus" paragraph, and the tool parameters. |
| 13 | Investigate a failure | Layman | PASS | Left out: the term table's exact wording and the layer-to-symptom table. "Real cause" for "root cause" is fair. |
| 14 | Investigate a failure | Bangla | PASS | Left out: the layer-to-symptom table. |
| 15 | Write the defect report | Layman | FAIL | "It acts with your own rights, so give it as few as it needs. <Cite 18>" "It" is the Atlassian MCP server. Technical says "MCP clients act with your existing permissions", and Atlassian asks you to use least privilege. The subject changed from client to server. Fix: "MCP clients act with your own rights, so give them as few as they need." |
| 16 | Write the defect report | Bangla | PASS | Left out: the Jira permission group names and the Atlassian "asks" attribution. |
| 17 | A defect report template | Layman | PASS | Left out: the template fields and the "one defect per report" detail. "How much harm" for "impact on the stakeholders" is looser but acceptable. "Adds two parts" matches the template's "Layer and likely cause" and "Duplicates checked" sections. |
| 18 | A defect report template | Bangla | PASS | Left out: the template fields. |
| 19 | Record the execution results | Layman | PASS | Left out: the JSON example, the "include" wording on the metrics, and the Markdown column list. |
| 20 | Record the execution results | Bangla | PASS | Left out: the JSON example. |
| 21 | Guardrails while tests run | Layman | FAIL | "When a test fails, it may change the app so the test passes. That hides the bug." "That hides the bug" is not in the Technical panel of this section. It appears only in Common mistakes. Fix: delete the sentence. |
| 22 | Guardrails while tests run | Bangla | PASS | Left out: the example JSON and the "no broad Bash patterns" advice. |
| 23 | Practice | Layman | PASS | Left out: the "security flaws" and "never deploy" details, the `dmoneydb` name, and the prompt text. |
| 24 | Practice | Bangla | PASS | Left out: the prompt text and the results statuses. |
| 25 | Common mistakes | Layman | PASS | Left out: the "logged-in pages" limit on the GIF claim, and the "shell commands can still change files" attribution in item 4 (the Technical panel says the same). |
| 26 | Common mistakes | Bangla | PASS | Left out: nothing that changes the meaning. |

Note on row 21: in the same section, the Layman sentence "Claude can still change files with shell commands" leaves out "protected". The context keeps it true, so I did not fail it. Also in that section, "An `Edit` rule covers file edits and new files" narrows "also covers `Write`". It stays true, so it passes.

Bangla notes:
- Row 12 (Collect evidence) is the only Bangla FAIL.
- Every Bangla panel uses আপনি, or imperative forms that fit it.
- Commands, flags, paths, and product names stay in English. I found no hyphen errors.
- In "A defect report template", "Syllabus এ দুটিকে…" has "এ" written with a space. It means "these two", not the suffix "-এ". A reader could briefly misread it as the "Syllabus-এ" suffix. Consider "Syllabus এই দুটিকে…".
- "তাই শুধু নিজের machine-এ চালান" in Practice adds a causal "so". The Technical panel states the two facts side by side. It is acceptable and I did not fail it.

Open FAILs after round 1: 10

Script check of round 1: 26 rows, 10 FAIL rows.

## Voices fact check: agentic-qa / test-execution (round 2, 2026-11-15)

| # | Section | Panel | Verdict | Note (for a FAIL: the sentence, what is wrong, and a fix; for a PASS: the details left out) |
|---|---|---|---|---|
| 1 | Choose a browser tool for the agent | Layman | PASS | Left out: the table's "Good for" column, the Rust detail, and the `claude setup-token` name. Left out: the sentence that CI jobs cannot use Claude in Chrome. Left out: the Playwright MCP setup callout detail. |
| 2 | Choose a browser tool for the agent | Bangla | PASS | Same details left out as the Layman panel. All cites match the Technical panel. |
| 3 | Drive the browser with agent-browser | Layman | FAIL | "A click fails if the button is hidden, disabled, off screen, or covered." Technical says "the target", not "button". The noun is narrower, and the panel also drops "does not report success". Fix: "A click fails if the target is hidden, disabled, off screen, or covered." |
| 4 | Drive the browser with agent-browser | Bangla | PASS | Left out: `pdf`, `download`, `diff`, and the command groups. Left out: `agent-browser mcp`, and the "does not report success" detail. |
| 5 | Check the result in three layers | Layman | PASS | Left out: "read-only" on the database check (the later sentence "give read-only access" covers it). Left out: `extraHTTPHeaders`, `MCP_REQUIRE_READONLY_DB_USER` by name, and `readOnlyHint`/`destructiveHint`. Left out: the warning callout's "test environment" detail. |
| 6 | Check the result in three layers | Bangla | PASS | Left out: `readOnlyHint` and `destructiveHint`. All facts and cites match the Technical panel. |
| 7 | Collect evidence | Layman | PASS | Left out: `pdf`, the `level`/`filename`/`filter` parameters, and `--isolated`. Left out: the `evidence/<run-id>/<test-id>/` path and the "on logged-in pages" limit on the GIF claim (the claim is still true). |
| 8 | Collect evidence | Bangla | PASS | Left out: `--isolated`, the exact folder path, and the "on logged-in pages" limit. |
| 9 | Investigate a failure | Layman | PASS | Left out: the layer table. "Fault in a work product" is a looser wording of "imperfection or deficiency", but the meaning is the same. Left out: "Cut every step that is not needed" and the ISTQB wording of the false-positive and false-negative terms. |
| 10 | Investigate a failure | Bangla | PASS | Left out: the layer-to-symptom table and "API or business logic". |
| 11 | Write the defect report | Layman | PASS | Left out: `--state all`, `--title`, `--label`, and the Jira permission groups. Left out: "issuing organization" and "author's role". |
| 12 | Write the defect report | Bangla | PASS | Left out: the Atlassian "existing permissions" detail is shortened to "আপনার নিজের permission". Left out: the warning callout. |
| 13 | A defect report template | Layman | PASS | Left out: the template text itself. "It adds two parts to the list" is not stated in the Technical prose, but it can be read from the template's "Layer and likely cause" and "Duplicates checked" sections. "How much harm" is a plainer wording of "impact on the stakeholders". |
| 14 | A defect report template | Bangla | PASS | Same as the Layman panel. The two extra parts can be read from the Technical template. |
| 15 | Record the execution results | Layman | PASS | Left out: the JSON example and the `run`, `build`, and `started` fields. |
| 16 | Record the execution results | Bangla | PASS | Left out: the JSON example. "সহজে পড়তে পারে" adds a slight "easily" to the Technical "lets a person… read it". This is minor, and it is not a FAIL. |
| 17 | Guardrails while tests run | Layman | FAIL | "An `Edit` rule covers file edits and new files." Technical says an `Edit` rule also covers `Write`, and it never says "new files". `Write` is not only for new files, so the fact is changed. Fix: "An `Edit` rule covers file edits and also `Write`." |
| 18 | Guardrails while tests run | Layman | FAIL | "A `PreToolUse` hook is a script that runs before a tool call." Technical says a hook "runs before a tool call and can block it". Only the guide's example is a script. Defining the hook as a script is an added claim. Fix: "A `PreToolUse` hook runs before a tool call." |
| 19 | Guardrails while tests run | Layman | FAIL | "The guide warns that Claude can still change files with shell commands." Technical says "change protected files". Dropping "protected" makes the claim say more. Fix: "…can still change protected files with shell commands." |
| 20 | Guardrails while tests run | Bangla | PASS | Left out: the example JSON, the hook script detail, and "do not allow broad Bash patterns". |
| 21 | Practice | Layman | PASS | Left out: the sample prompt, `dmoneydb`, `test-executor-agent`, the result words `pass`/`failed`/`not executed`, and "security flaws". |
| 22 | Practice | Bangla | FAIL | Step 1: "একটি feature-এর পাঁচটি test case বাছুন, যেমন deposit।" Technical gives two options: take five from your test design, or ask Claude for five on one feature. The Bangla keeps only "one feature", so the scope is narrower. Fix: "আপনার test design থেকে, বা একটি feature-এর জন্য Claude-কে বলে পাঁচটি test case নিন, যেমন deposit।" |
| 23 | Common mistakes | Layman | PASS | Left out: the fix to "reproduce before you draft", the `MCP_REQUIRE_READONLY_DB_USER` name, and the "reaches the whole team" reason. |
| 24 | Common mistakes | Bangla | PASS | Left out: "reaches the whole team at once". All cites match the Technical panel. |

Bangla notes:
- The Bangla reads naturally overall, and it addresses the reader with আপনি-forms (imperatives such as "করুন"/"দিন").
- No command, flag, path, or product name is translated.
- English-word and Bangla-suffix hyphens are correct everywhere I checked (for example `--session`-এর, `curl`-ও, `.claude/settings.json`-এ).
- "Syllabus এ দুটিকে আলাদা field হিসেবে দেখায়" (template section) uses "এ" as a separate word. It reads as "in this", so it is acceptable, and it is not a FAIL.
- "সহজে পড়তে পারে" (results section) is a slight addition. It is noted above and is not a FAIL.
- I could read every Bangla sentence well enough to judge it.

Open FAILs after round 2: 5

Script check of round 2: 24 rows, 5 FAIL rows.

## Voices fact check: agentic-qa / test-execution (round 3, 2026-11-15)

| # | Section | Panel | Verdict | Note (for a FAIL: the sentence, what is wrong, and a fix; for a PASS: the details left out) |
|---|---|---|---|---|
| 1 | Choose a browser tool for the agent | Layman | PASS | Leaves out the table's "Good for" column, the "not supported in WSL" reason, and the CI-job conclusion. Each cite sits on a fact that the Technical panel gives with the same cite. |
| 2 | Choose a browser tool for the agent | Bangla | PASS | Same details left out as in the Layman panel. The meaning is the same. |
| 3 | Drive the browser with agent-browser | Layman | PASS | Leaves out `pdf`, `download`, `diff`, `agent-browser mcp`, the quick-start code, and the "daemon" detail. "Downloads a test copy of Chrome" drops "the first time", but it does not say more than the Technical sentence. |
| 4 | Drive the browser with agent-browser | Bangla | PASS | Leaves out the quick-start code, `pdf`, `download`, `diff`, and `agent-browser mcp`. |
| 5 | Check the result in three layers | Layman | PASS | Leaves out "for each test case that changes data", `extraHTTPHeaders`, `MCP_REQUIRE_READONLY_DB_USER`, and `readOnlyHint`/`destructiveHint`. "Stored row" is a plain word for the read-only query. |
| 6 | Check the result in three layers | Bangla | PASS | Leaves out "write each step down" and `readOnlyHint`/`destructiveHint`. |
| 7 | Collect evidence | Layman | FAIL | Sentence: "A Claude in Chrome GIF shows everything on screen, account details too. Check it before you share it." The Technical panel says: "Review it before you share it **outside your team**." The Layman sentence drops "outside your team", so the advice now covers any sharing. Fix: "Check it before you share it outside your team." |
| 8 | Collect evidence | Bangla | PASS | Leaves out "Ask for focus", `--isolated`, and the `evidence/<run-id>/<test-id>/` path. |
| 9 | Investigate a failure | Layman | PASS | Leaves out the layer table and the "Reproduce / Isolate / Find the cause / Decide" labels. "Fault" for "imperfection or deficiency" has the same meaning. |
| 10 | Investigate a failure | Bangla | PASS | Leaves out the layer table. "UI, API, data, environment, নাকি test নিজেই" matches the table's layers. |
| 11 | Write the defect report | Layman | PASS | Leaves out the issuing organization, the author's role, `--title`, `--label`, `--state all`, and the Jira permission groups. |
| 12 | Write the defect report | Bangla | PASS | Leaves out the Jira permission groups (`read_jira`, `write_jira`, `search_jira`). |
| 13 | A defect report template | Layman | PASS | Leaves out the template body. "It adds two parts to the list" is visible in the Technical template, which has "Layer and likely cause" and "Duplicates checked" and no CTFL counterpart. "How much harm it does" is a plain form of "impact on the stakeholders". |
| 14 | A defect report template | Bangla | PASS | Same as the Layman panel. Leaves out the template body. |
| 15 | Record the execution results | Layman | PASS | Leaves out the JSON example and "include" before the metric list. Sentence: "It counts tests that ran or did not run…". This is close to the limit, but it does not say "only". |
| 16 | Record the execution results | Bangla | PASS | Leaves out the JSON example. |
| 17 | Guardrails while tests run | Layman | PASS | Leaves out the Bash-rule detail, the `permissions` object, the settings JSON, and the "Hook decisions do not bypass deny and ask rules" sentence. |
| 18 | Guardrails while tests run | Bangla | PASS | Leaves out the `permissions` object and the settings JSON. The Bash-rule sentence is in the Technical panel, and cite 20 closes the group. |
| 19 | Practice | Layman | PASS | Leaves out the sample prompt, `dmoneydb`, the "security flaws" and "never deploy" details, the `test-executor-agent` result names, and the run-id paths. |
| 20 | Practice | Bangla | PASS | Leaves out the sample prompt, the "security flaws" and "never deploy" details, and the result names `pass`, `failed`, and `not executed`. |
| 21 | Common mistakes | Layman | FAIL | Sentence (item 5): "A Chrome GIF shows account details. <Cite 3>". The Technical panel says: "captures account details **on logged-in pages**." The Layman sentence drops the limit, so it says a GIF always shows account details. Fix: "A Chrome GIF shows account details on logged-in pages." |
| 22 | Common mistakes | Bangla | PASS | Keeps "logged-in page-এর" in item 5. Leaves out the fix details in items 1 and 3. |

Bangla notes:
- None. I read all 11 Bangla panels. I found no sentence that was unreadable or that carried a fact the Technical panel lacks. English product, command, flag, and path names stay in English, and the hyphens before Bangla suffixes are present. The reader is addressed as আপনি or by the imperative.

Open FAILs after round 3: 2

Script check of round 3: 22 rows, 2 FAIL rows.

## Verification of the open rows, facts and voices: agentic-qa / test-execution (round 4, 2026-11-15)

| Row | Report | Verdict | Evidence (quote from the page or the source, or the reason) |
|---|---|---|---|
| F27 | facts | RESOLVED | Page: "an environment containing hardware, instrumentation, simulators, software tools, and other support elements needed to perform a test. <Cite n={4} />". S4: "An environment containing hardware, instrumentation, simulators, software tools, and other support elements needed to perform a test." |
| F51 | facts | RESOLVED | Page: "does not meet its requirements within specified limits during its execution <Cite n={9} />". S9: "An event in which a component or system does not meet its requirements within specified limits during its execution." |
| F101 | facts | RESOLVED | Key words row: "Failure \| An event in which a component or system does not meet its requirements within specified limits during its execution". This matches S9. |
| F106 | facts | RESOLVED | Key words row: "Test environment \| An environment containing hardware, instrumentation, simulators, software tools, and other support elements needed to perform a test". This matches S4. |
| V7 | voices | RESOLVED | Layman: "Check it before you share it outside your team. <Cite n={3} />". The Technical panel says "Review it before you share it outside your team. <Cite n={3} />". S3 line 239: "review it before sharing it outside your team". |
| V21 | voices | RESOLVED | Layman item 5: "A Chrome GIF shows account details on logged-in pages. <Cite n={3} />". The Technical panel says "captures account details on logged-in pages". S3 line 239: "including account details on logged-in pages". |

New problems in changed lines:
- The Technical panel in "Investigate a failure" (line 327) now says "within specified limits during its execution". The Layman and Bangla panels of the same section were not updated, so they now drop that limit. Layman line 357 says "an event where the system does not do what its requirements say". Bangla line 372 says "execution-এর সময় component বা system তার requirement পূরণ করে না". Fix: Layman: "A **failure** is an event where a component or system does not meet its requirements within specified limits during its execution." Bangla: add the limit, for example "...execution-এর সময় নির্দিষ্ট সীমার মধ্যে component বা system তার requirement পূরণ করে না।"
- The Technical panel in "Check the result in three layers" (line 203) now lists "instrumentation" and "software tools". The Bangla panel (line 247) still lists "hardware, tool, simulator আর অন্যান্য সহায়ক উপাদান". It drops "instrumentation", and "tool" is not "software tools". Fix: "যে hardware, instrumentation, simulator, software tool আর অন্যান্য সহায়ক উপাদান লাগে।" The Layman panel (line 230, "the tools and parts a test needs") is looser than the Technical panel. Fix: "It is an environment with the hardware, instrumentation, simulators, software tools, and other support elements a test needs."

Open FAILs after round 4: 2

## Verification of the open rows, facts and voices: agentic-qa / test-execution (round 5, 2026-11-15)

| Row | Report | Verdict | Evidence (quote from the page or the source, or the reason) |
|---|---|---|---|
| N1 | voices | RESOLVED | Technical line 327 reads "does not meet its requirements within specified limits during its execution". Source S9 reads "An event in which a component or system does not meet its requirements within specified limits during its execution." Layman line 357 now reads "a component or system does not meet its requirements within specified limits while it runs". Bangla line 372 now reads "execution-এর সময় component বা system নির্দিষ্ট সীমার মধ্যে তার requirement পূরণ করে না". Both panels keep the limit and the scope. Both keep Cite 9, the same cite as the Technical panel. |
| N2 | voices | RESOLVED | Technical line 203 reads "hardware, instrumentation, simulators, software tools, and other support elements needed to perform a test". Source S4 says the same. Layman line 230 now reads "It has the hardware, instrumentation, simulators, software tools, and other support elements that a test needs". Bangla line 247 now reads "hardware, instrumentation, simulator, software tool আর অন্যান্য সহায়ক উপাদান". Both panels list all five items. Both keep Cite 4, the same cite as the Technical panel. |

New problems in changed lines: None.

Open FAILs after round 5: 0

Open FAILs: 0
