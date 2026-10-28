# Fact check: AI Skills, Voice Agents

Checker: an agent that did not write the page. Sources fetched fresh on 2026-10-28 with WebFetch. S10 (FCC PDF) was read with `pdftotext`. The quotes below come from these fetches, not from the research notes.

| # | Claim (Technical text) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Hard parts: barge-in, fast first audio, natural turns, tools during the call | 1 | PASS | "barge-in, low first-audio latency, natural turn taking, and realtime tool use" |
| 2 | Some products chain speech-to-text, a language model, and text-to-speech | 7 | PASS | The Pipecat services table lists "Speech-to-Text", "LLMs", and "Text-to-Speech"; "Composable Pipelines: Build complex behavior from modular components" |
| 3 | Others use one speech-to-speech model, such as the OpenAI Realtime API | 1 | PASS | "Build a speech-to-speech voice agent with the Realtime API." |
| 4 | Realtime API connects over WebRTC in the browser or WebSocket on a server | 1 | PASS | "The session connects over WebRTC in the browser or WebSocket on the server." |
| 5 | Twilio Media Streams send the raw call audio to your WebSocket server; bidirectional can send audio back | 5 | PASS | "provides access to the raw audio from a Programmable Voice call by streaming it over WebSockets" / "both receives audio from Twilio and can send audio to Twilio" |
| 6 | Phone audio is `audio/x-mulaw` at 8000 Hz, base64 | 6 | PASS | "The payload must be encoded `audio/x-mulaw` with a sample rate of `8000` and must be base64 encoded." |
| 7 | "which is lower quality than app audio" | none | PASS (note) | Not in S6. It is an inference from the 8000 Hz rate. Low risk. Optional: add "(the tutorial's view)" |
| 8 | VAD finds when the caller starts and stops speaking | 2 | PASS | "automatically detect when the user has started or stopped speaking" |
| 9 | `server_vad` splits at silences; `semantic_vad` uses a classifier on the words | 2 | PASS | "Automatically chunks the audio based on periods of silence." / "uses a semantic classifier to detect when the user has finished speaking" |
| 10 | Higher `threshold` needs louder speech, can help in noise; shorter `silence_duration_ms` ends the turn sooner | 2 | PASS | "will require louder audio to activate the model" (noisy environments) / "With shorter values turns will be detected more quickly." |
| 11 | Caller speaks: server cancels the answer and sends `response.cancelled` | 3 | PASS | "The server will automatically cancel any in-progress model response and a `response.cancelled` event will be emitted." |
| 12 | WebRTC: server cuts unplayed audio; WebSocket: your code stops playback and sends `conversation.item.truncate` | 3 | PASS | "The server will automatically truncate unplayed audio" / "must stop playback and handle truncation" with `conversation.item.truncate` |
| 13 | On Twilio, a `clear` message empties the audio buffer | 6 | PASS | "This empties all buffered audio" |
| 14 | The model cannot exactly match transcript and audio; a cut answer gets no cut transcript | 3 | PASS | "doesn't have enough information to precisely align transcript and audio" / "doesn't provide a truncated transcript" |
| 15 | A fast first audio is a core need | 1 | PASS | Same as row 1 |
| 16 | "Tool calls often make the slow turns." (How a tester uses it, item 1) | none | FAIL | A general claim about latency with no cite. No fetched source says it. The notes removed latency facts that have no source; this sentence stayed |
| 17 | Interruption test; compare `silence_duration_ms` and `semantic_vad` | 3, 2 | PASS | Rows 10, 11 |
| 18 | WER = substitutions + deletions + insertions over words in the reference; lower is better, 0 is perfect | 9 | PASS | "WER = (S + D + I) / N" / "N is the number of words in the reference" / "with a WER of 0 being a perfect score" |
| 19 | Check right tool and right parameters | 4 | PASS | "Ensures the agent calls the right tool with the right parameters" |
| 20 | ElevenLabs: simulations with a simulated user, next-reply tests, tool-call tests, mocked tools | 4 | PASS | "multi-turn conversations with a simulated user" / "Validates the agent's next response" / mock strategies "Mock all tools", "Mock selected tools" |
| 21 | Tests run with `elevenlabs agents test <agent-id>` | 4 | PASS | `elevenlabs agents test agent_7101k5...` |
| 22 | LiveKit Agents: test framework with judges; transformer turn detection; Apache-2.0 | 8 | PASS | "Write tests and use judges" / "Uses a transformer model to detect when a user is done with their turn" / "licensed under Apache-2.0" |
| 23 | Pipecat: open-source Python framework, composable pipelines, BSD-2-Clause | 7 | PASS | "an open-source Python framework for building real-time voice and multimodal conversational agents" / "BSD-2-Clause license" |
| 24 | FCC: AI voices are "artificial" voices under the TCPA; prior express consent unless emergency or exemption | 10 | PASS | "the TCPA's restrictions on the use of 'artificial or prerecorded voice' encompass current AI technologies that generate human voices" / "prior express consent of the called party to initiate such calls absent an emergency purpose or exemption" (Adopted: February 2, 2024) |
| 25 | Common mistakes and How to start: cites 2, 3, 4, 6, 9 | 2-9 | PASS | Each cite supports the fact next to it. The test-data fix is marked as tutorial advice |
| 26 | Key words table | 1, 2, 3, 5, 9, 10 | PASS | Agrees with the rows above |

Other checks:

| Check | Verdict | Note |
|---|---|---|
| Sources are official (OpenAI docs, ElevenLabs docs, Twilio docs, GitHub repos, FCC) | PASS | FCC is a regulator. No blog, news, or forum |
| No prices | PASS | |
| The "Tutorial advice" tip has no `<Cite>` | PASS | |
| No copied text | PASS | No long shared word run found |
| Internal links exist | PASS | `/ai-skills/ai-agents/`, `/automate/headless/`, `/ai-skills/ai-governance/` |

## FAILs and proposed fixes

| Row | Exact text | Proposed fix |
|---|---|---|
| 16 | "Tool calls often make the slow turns." | Mark it as the tutorial's view: "In the tutorial's view, tool calls are a common cause of slow turns, so log them." Or remove the sentence. Change Layman ("Tool calls often cause the slow turns.") and Bangla ("ধীর পালাগুলো প্রায়ই টুল কলের কারণে হয়।") the same way. |

## Round 2 (2026-10-28)

| Row | New text (Technical) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 16 | "In the tutorial's view, tool calls are a common cause of slow turns, so log them." | none | PASS | The claim is now marked as the tutorial's own view, with no cite. Layman: "In the tutorial's view, tool calls often cause slow turns. So log them." Bangla: "টিউটোরিয়ালের মতে, ধীর পালার একটা সাধারণ কারণ হলো টুল কল। তাই সেগুলো লগ করুন।" All 3 panels mark it the same way |

Open FAILs: 0
