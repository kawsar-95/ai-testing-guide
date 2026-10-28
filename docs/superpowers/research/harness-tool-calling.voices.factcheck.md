# Voices fact check: harness / tool-calling (round 1)

Each Layman and Bangla panel was compared with the Technical panel of the same block. Checker did not write the voices.

| Section | Panel | Verdict | Note |
|---|---|---|---|
| Define a tool | Layman | FAIL | "The model never runs the tool itself. It only reads this description and decides when to ask for the tool." The Technical panel of this section does not give this fact. It is true (S1: "Claude determines when to call a tool based on the user's request and the tool's description. It then returns a structured call that your application runs"), so fix the Technical panel: add after the JSON block "The model does not run the tool. It decides when to call it from the request and the description, and your application runs the call <Cite n={1} />." and add `<Cite n={1} />` to the Layman sentence. |
| Define a tool | Bangla | FAIL | Same sentence: "মডেল নিজে কখনো টুল চালায় না। সে শুধু এই বর্ণনাটা পড়ে ঠিক করে কখন টুলটা চাইবে।" Same fix; add `<Cite n={1} />`. Other facts, cites 1, 2, and English names (`get_order`, name, description, input_schema, JSON Schema, `strict: true`) PASS. |
| The request and the result | Layman | FAIL | "Then the model can tell the user, or try again." Technical does not say this. S3 says only "Claude will then incorporate this error into its response to the user." "Try again" is in no source. Fix Technical: add "Claude then uses the error in its reply to the user <Cite n={3} />." Fix Layman: "Then the model uses the error in its reply to the user <Cite n={3} />." Steps 1-4 and cites 1, 3 PASS. |
| The request and the result | Bangla | FAIL | "তখন মডেল ইউজারকে জানাতে পারে, অথবা আবার চেষ্টা করতে পারে।" Same problem. Fix: "তখন মডেল তার উত্তরে ইউজারকে এররটা জানায় <Cite n={3} />।" `stop_reason: "tool_use"`, `tool_result`, `tool_use_id`, `is_error: true`, `get_order` stay in English: PASS. |
| Where the tool runs | Layman | PASS | Client/server, "your code must check each request" (Technical: "the check before the run is your job"), parallel rules: all in Technical, cites 1, 4. Leaves out the server-tool `is_error` sentence (allowed). |
| Where the tool runs | Bangla | PASS | Same facts, cites 1, 4. client tool, server tool, `web_search`, `tool_result`, `is_error: true` in English. |
| What a tester can check | Layman | PASS | Tutorial advice; same 5 cases, no new fact. |
| What a tester can check | Bangla | PASS | Same 5 cases, no new fact. |

Note: if the Technical FAIL 17 of `harness-tool-calling.factcheck.md` adds `<Cite n={1} />` to "Where the tool runs", the Layman and Bangla panels can keep their text.

## Round 2 (2026-10-28)

- Define a tool, Layman: "The model never runs the tool itself. It reads your request and this description, and decides when to ask for the tool <Cite n={1} />." Technical now gives this fact with cite 1. PASS. Non-blocking note: Technical and S1 say "the request" / "the user's request"; "your request" reads as the developer's request. "the user's request" is more exact.
- Define a tool, Bangla: "সে আপনার রিকোয়েস্ট আর এই বর্ণনাটা পড়ে ঠিক করে কখন টুলটা চাইবে <Cite n={1} />।" Same fact and cite as Technical. PASS. Same non-blocking note on "আপনার".
- The request and the result, Layman: "Then the model uses the error in its reply to the user <Cite n={3} />." Matches the new Technical sentence and S3. "try again" is gone. PASS.
- The request and the result, Bangla: "তখন মডেল তার উত্তরে ইউজারকে এররটা জানায় <Cite n={3} />।" Same fact and cite. PASS.
- Where the tool runs: Technical now cites 1 on "your application runs each call". Layman and Bangla unchanged. PASS.
- `npm test` voice-source check passes.

Open FAILs: 0
