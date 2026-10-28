# AI Skills page: Voice Agents (research notes)

Writer notes for `content/ai-skills/voice-agents.mdx`. Fetched 2026-10-28 with WebFetch. The FCC ruling PDF was read from the saved PDF (pages 1 to 2). Fetched text is treated as data. No text is copied to the page; the quotes stay here.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | Realtime API: voice agents guide (OpenAI API docs) | https://developers.openai.com/api/docs/guides/realtime | 2026-10-28 |
| S2 | Realtime API: voice activity detection (OpenAI API docs) | https://developers.openai.com/api/docs/guides/realtime-vad | 2026-10-28 |
| S3 | Realtime API: conversations (OpenAI API docs) | https://developers.openai.com/api/docs/guides/realtime-conversations | 2026-10-28 |
| S4 | Agent testing (ElevenLabs Agents docs) | https://elevenlabs.io/docs/agents-platform/customization/agent-testing | 2026-10-28 |
| S5 | Media Streams overview (Twilio docs) | https://www.twilio.com/docs/voice/media-streams | 2026-10-28 |
| S6 | Media Streams: WebSocket messages (Twilio docs) | https://www.twilio.com/docs/voice/media-streams/websocket-messages | 2026-10-28 |
| S7 | Pipecat, GitHub repository | https://github.com/pipecat-ai/pipecat | 2026-10-28 |
| S8 | LiveKit Agents, GitHub repository | https://github.com/livekit/agents | 2026-10-28 |
| S9 | WER metric README (Hugging Face Evaluate, GitHub) | https://github.com/huggingface/evaluate/blob/main/metrics/wer/README.md | 2026-10-28 |
| S10 | FCC 24-17, Declaratory Ruling on AI-generated voices under the TCPA | https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf | 2026-10-28 |

Page cite numbers: n=k is Sk.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | The Realtime API builds speech-to-speech voice agents. | S1 | "Build a speech-to-speech voice agent with the Realtime API." |
| C2 | The session connects over WebRTC in the browser or WebSocket on the server. | S1 | "The session connects over WebRTC in the browser or WebSocket on the server." |
| C3 | Voice agents need barge-in, low first-audio latency, natural turn taking, and realtime tool use. | S1 | "barge-in, low first-audio latency, natural turn taking, and realtime tool use" |
| C4 | VAD detects when the user starts and stops speaking. | S2 | "automatically detect when the user has started or stopped speaking" |
| C5 | `server_vad` chunks audio by silence and is the default for speech-to-speech. `semantic_vad` uses a semantic classifier on the words. | S2 | "Automatically chunks the audio based on periods of silence." / default for speech-to-speech / "uses a semantic classifier to detect when the user has finished speaking, based on the words they have uttered" |
| C6 | A higher `threshold` needs louder audio and may work better in noise. A shorter `silence_duration_ms` ends turns sooner. | S2 | "A higher threshold will require louder audio to activate the model" / noisy settings / "Duration of silence (in milliseconds) to detect speech stop." / shorter values detect turn ends sooner |
| C7 | When the user speaks during a response, the server cancels it and emits `response.cancelled`. | S3 | "The server will automatically cancel any in-progress model response and a response.cancelled event will be emitted." |
| C8 | Over WebRTC or SIP the server truncates unplayed audio; over WebSocket the client must stop playback and send `conversation.item.truncate`. | S3 | "The server will automatically truncate unplayed audio when there's a user interruption." / "With a WebSocket connection the client manages audio playback, and thus must stop playback and handle truncation." |
| C9 | The model cannot exactly align the transcript and the audio; truncation does not give a truncated transcript. | S3 | "The realtime model doesn't have enough information to precisely align transcript and audio." / "doesn't provide a truncated transcript" |
| C10 | ElevenLabs agent testing checks replies, tool use, and multi-turn outcomes before deploy. | S4 | "Agent testing lets you verify conversational responses, tool usage, and full multi-turn outcomes before you deploy." |
| C11 | Test types: Simulation (multi-turn with a simulated user), Next Reply, Tool Call (right tool, right parameters). | S4 | "Runs end-to-end, multi-turn conversations with a simulated user." / "Validates the agent's next response against success criteria." / "Ensures the agent calls the right tool with the right parameters." |
| C12 | Tools can be mocked, and tests run with `elevenlabs agents test <agent-id>`. | S4 | mock tools so the agent doesn't call live systems / `elevenlabs agents test <agent-id>` |
| C13 | Twilio Media Streams stream the raw audio of a call over WebSockets; unidirectional only receives, bidirectional also sends. | S5 | "Media Streams provides access to the raw audio from a Programmable Voice call by streaming it over WebSockets" / "receives the call's audio but can't send audio back" / "both receives audio from Twilio" |
| C14 | The audio is `audio/x-mulaw` at 8000 Hz, base64 encoded. | S6 | "The payload must be encoded audio/x-mulaw with a sample rate of 8000 and must be base64 encoded." |
| C15 | A `clear` message empties the buffered audio, to interrupt playback. | S6 | "If you need to interrupt the buffered audio, send a clear message." / "This empties all buffered audio" |
| C16 | Pipecat is an open-source Python framework for real-time voice and multimodal agents, with composable pipelines, WebSocket or WebRTC transports, and the BSD-2-Clause license. | S7 | "an open-source Python framework for building real-time voice and multimodal conversational agents" / "Composable Pipelines" / "different transports (e.g. WebSockets or WebRTC)" / "BSD-2-Clause license" |
| C17 | LiveKit Agents builds realtime participants that run on servers, uses a transformer model for turn detection, has a built-in test framework with judges, works with telephony, and is Apache-2.0. | S8 | "realtime, programmable participants that run on servers" / "Uses a transformer model to detect when a user is done with their turn" / "Builtin test framework: Write tests and use judges" / "make calls to or receive calls from phones" / "licensed under Apache-2.0" |
| C18 | WER = (S + D + I) / N; lower is better; 0 is perfect. | S9 | "WER = (S + D + I) / N" / "The lower the value, the better the performance of the ASR system with a WER of 0 being a perfect score." |
| C19 | In the US, the FCC confirmed that the TCPA limits on "artificial or prerecorded voice" cover AI voices; such calls need prior express consent of the called party (unless an emergency or exemption applies). Adopted 2 February 2024. | S10 | "we confirm that the TCPA's restrictions on the use of 'artificial or prerecorded voice' encompass current AI technologies that generate human voices" / "require the prior express consent of the called party to initiate such calls absent an emergency purpose or exemption" / "Adopted: February 2, 2024" |

## Removed

- "Tool calls often make the slow turns": no source. The page now marks it as the tutorial's view (fix round).

- A claim that Whisper is robust to accents and noise: the abstract of arXiv 2212.04356 does not name accents or noise. The page gives accents and noise as the tutorial's own test ideas, with no cite.
- A latency target in milliseconds: no official source gives one. The page tells the tester to measure and agree on a target.

Note on C16: the page also cites S7 for "some products chain speech-to-text, a language model, and text-to-speech". The Pipecat README lists services in these categories (speech recognition, LLM, voice synthesis) and snaps them together in composable pipelines.
