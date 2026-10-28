# Fact check: AI Skills, Meeting Intelligence

The checker did not write the page. All 4 sources were fetched fresh on 2026-10-28 with WebFetch. S1 = Gong "Capture and analyze calls", S2 = Gong "Understanding recording consent", S3 = Fathom "Can the Fathom Notetaker join my calls without me?", S4 = Fireflies "How to add Fireflies to an ongoing meeting".

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Gong records, transcribes, and analyzes calls | 1 | PASS | "automatically records, transcribes, and analyzes your calls" |
| 2 | Gong call summary has a recap, key points, and next steps | 1 | PASS | "a structured summary that includes a recap, key points and next steps" |
| 3 | Meeting intelligence definition; ask questions of the transcript; meeting as a source of requirements | none | PASS | The tutorial's own framing, no source fact |
| 4 | Most tools join as a bot participant; Fireflies asks to join or to be admitted, shows in the participant list, takes notes | 4 | PASS | "Fireflies asks to join or be admitted to the meeting" ... "appears in the participant list and begins taking notes" |
| 5 | In Google Meet, the host must admit Fireflies before it can join | 4 | FAIL (copy) | Fact is right: "On Google Meet, the host must admit Fireflies before it can join." The page copies a run of 11 words ("Google Meet, the host must admit Fireflies before it can join"). |
| 6 | Fathom records Zoom, Microsoft Teams, or Google Meet only when you are on the call | 3 | PASS | "Fathom can only record a Zoom, Microsoft Teams, or Google Meet call if you are also present on the call." The shared 8-word run is the list of product names only, so it is not counted as copied text. |
| 7 | Fathom leaves when the meeting ends | 3 | PASS | "If the meeting ends, Fathom will automatically exit as well." |
| 8 | Text diagram (audio, bot, transcript, summary, search) | 1, 4 | PASS | Restates rows 1, 2, 4, 9 |
| 9 | In Gong you can search the transcript for words or phrases | 1 | PASS | "Search for specific words or phrases." |
| 10 | Gong can find patterns across many calls | 1 | PASS | "can identify patterns across calls to create actionable insights" |
| 11 | Gong highlights key topics, objections, and commitments | 1 | PASS | "Gong highlights key topics, objections, and commitments" (6-word run, below the copy limit) |
| 12 | Gong consent page can ask for consent before a web call is recorded | 2 | PASS | "only recorded if all participants consent to being recorded via the Gong consent page" |
| 13 | Gong can notify with an audio prompt and a pre-call email | 2 | PASS | "An audio prompt, played when participants join a web conference call" ... "Pre-call emails sent 10 minutes ahead" |
| 14 | Phone calls: you must tell the other side out loud | 2 | PASS | "you must verbally inform your customers that the call is being recorded" (integrated telephony) |
| 15 | Before you record, you must understand and follow the consent laws | 2 | PASS | "Before recording any calls, you must understand and comply with:" |
| 16 | Tester uses: summary next steps as a checklist; search for "edge case", "what if", "later"; Gong patterns across calls | 1 | PASS | Cites point to the summary, search, and pattern features of rows 2, 9, 10. The uses are the tutorial's own. |
| 17 | Tutorial advice tip has no cite | none | PASS | No `<Cite>` in the Callout |
| 18 | Tools table (Gong, Fathom, Fireflies facts) | 1, 3, 4 | PASS | Same facts as rows 2, 6, 4 |
| 19 | Consent rules depend on where the people are; a tool's help tells you to follow them | 2 | PASS | "If your customer is in a different state or country from you, typically the stricter consent law applies" |
| 20 | Mistakes: summary can drop a condition; transcripts can hold names; owner for notes | none | PASS | The tutorial's own advice, no source fact |
| 21 | How to start step 2: use the tool's consent notice | 2 | PASS | Consent page, audio prompt, pre-call email (rows 12, 13) |
| 22 | Key words: transcript, summary, notetaker bot, consent page | 1, 1, 4, 2 | PASS | Same facts as rows 9, 2, 4, 12 |
| 23 | Internal links `/ai-skills/prompting/`, `/ai-skills/ai-governance/` | none | PASS | Both routes are in the route maps. `content/ai-skills/prompting.mdx` is not written yet; it is a planned page of the module. |
| 24 | Sources are official | all | PASS | All 4 are vendor help centers (help.gong.io, help.fathom.video, guide.fireflies.ai). No blog, news, or forum. |
| 25 | No prices | all | PASS | The page gives no price. S1 says only "Available on: Any Gong plan". |

## FAILs

Row 5. Technical, `## How it works`: "In Google Meet, the host must admit Fireflies before it can join <Cite n={4} />."
Proposed fix: "In Google Meet, Fireflies can enter only after the host lets it in <Cite n={4} />."

## Round 2 (2026-10-28)

The writer changed the Fireflies and Fathom sentences. The checker compared each changed sentence with the S3 and S4 quotes fetched in round 1.

| # | Changed text | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| R2-1 | "Fireflies first asks for access to the meeting. After that, it is listed with the other people in the call and writes notes" | 4 | PASS | "asks to join or be admitted" ... "appears in the participant list and begins taking notes". No run of 8 or more words is copied. |
| R2-2 | "In Google Meet, Fireflies can enter only after the host lets it in" (row 5 fix) | 4 | PASS | "the host must admit Fireflies before it can join". Row 5 is closed. |
| R2-3 | "Fathom records calls on Zoom, Microsoft Teams, and Google Meet only when you are also on the call, and it leaves when the meeting ends" | 3 | PASS | "can only record a Zoom, Microsoft Teams, or Google Meet call if you are also present on the call" ... "Fathom will automatically exit as well". The 8-word name run of row 6 is gone. |
| R2-4 | Tools table, Fathom row: "Records calls on Zoom, Microsoft Teams, and Google Meet only when you are on the call" | 3 | PASS | Same fact as R2-3 |

Open FAILs: 0
