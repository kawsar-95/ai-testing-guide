# Fact check: AI Skills, Voice and Avatars

Checker: an agent that did not write the page. Sources fetched again on 2026-10-28 with WebFetch. S1 = ElevenLabs Voice Cloning docs, S2 = ElevenLabs Text to Speech docs, S3 = HeyGen Help Center "Recording your Consent Video", S4 = Synthesia Help Center "What is a custom avatar?", S5 = European Commission AI Act page. All 5 are official vendor or EU pages. No blog, news, or forum.

| # | Claim (Technical) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | ElevenLabs TTS gives lifelike audio with natural intonation and pacing | S2 | PASS | "turns text into lifelike audio with nuanced intonation, pacing and emotional awareness" |
| 2 | Instant Voice Cloning works from short samples | S1 | PASS | "create voice clones from shorter samples near instantaneously" |
| 3 | Professional Voice Cloning trains a more realistic model | S1 | PASS | "train a more realistic model of your voice" |
| 4 | Synthesia: a custom avatar is an avatar with your likeness | S4 | PASS | "your personalized avatar with your likeness" |
| 5 | EU AI Act: people should know when they interact with a machine | S5 | PASS | "made aware that they are interacting with a machine" |
| 6 | EU AI Act: deep fakes must be clearly labelled | S5 | PASS | "clearly and visibly labelled, namely deep fakes". S5 says the rules apply from August 2026, before the page date |
| 7 | ElevenLabs returns `mp3` by default | S2 | PASS | "The default response format is `mp3`." |
| 8 | Also PCM, Opus, and μ-law and A-law at 8 kHz, made for telephony | S2 | PASS | μ-law and A-law: "8kHz sample rate", "Optimized for telephony applications"; PCM and Opus listed |
| 9 | Stability and Similarity control how consistent the voice is | S2 | PASS | "Stability and Similarity help control the consistency" |
| 10 | Text diagram (text + voice + settings to audio) | S2 | PASS | Restates rows 7 to 9 |
| 11 | Professional Voice Clones need verification that the voice is yours | S1 | PASS | "require a verification process to confirm that the voice belongs to you" |
| 12 | They can only clone your own voice | S1 | PASS | "You can only create a Professional Voice Clone of your own voice." |
| 13 | HeyGen asks for a short consent video for every video-based Digital Twin | S3 | PASS | "for every video-based Digital Twin created, users must record a short consent video" |
| 14 | The person in the avatar records their own consent | S3 | PASS | "that person must record their own consent video" |
| 15 | They read the consent text exactly as written | S3 | PASS | "read it exactly as written" |
| 16 | Synthesia requires explicit consent from the person whose likeness is used | S4 | FAIL (copy) | Fact is right: "We require explicit consent from the person whose likeness is used to create the avatar." The page copies a 10-word run ("require(s) explicit consent from the person whose likeness is used") in How it works and in the Tools table |
| 17 | ElevenLabs policies forbid illegal or harmful use | S1 | PASS | "prohibit malicious use of our technology towards any purpose which can be deemed illegal or harmful" |
| 18 | AI Act adds the duty to label deep fakes | S5 | PASS | Same as row 6 |
| 19 | Tester uses: Stability settings, 8 kHz μ-law for phone systems | S2 | PASS | Same as rows 8 and 9 |
| 20 | Tester uses: test the disclosure (spoken notice, visible label) | S5 | PASS | Cite supports the disclosure duty; the examples are the tutorial's own test ideas |
| 21 | Tester uses: consent-step cases incl. a script not read exactly | S3 | PASS | Same as row 15 |
| 22 | Tutorial advice tip has no cite | none | PASS | No `<Cite>` in the Callout |
| 23 | Tools table: ElevenLabs μ-law and A-law at 8 kHz for telephony | S2 | PASS | Same as row 8 |
| 24 | Tools table: HeyGen consent video for every video-based Digital Twin | S3 | PASS | Same as row 13 |
| 25 | Tools table: Synthesia explicit consent | S4 | FAIL (copy) | Same run as row 16 |
| 26 | Mistakes: PVC can only clone your own voice | S1 | PASS | Same as row 12 |
| 27 | Mistakes: AI Act requires labels for deep fakes | S5 | PASS | Same as row 6 |
| 28 | Mistakes: "A phone system may reject or distort `mp3` input"; "A cloned voice can be used to trick a help desk"; "Real users speak with noise, accents, and pauses" | none | PASS | Hedged general statements that support the tutorial's own fixes, not product facts. The fix in the format row cites S2 for μ-law at 8 kHz |
| 29 | How to start: format your system needs; AI disclosure test | S2, S5 | PASS | Same as rows 8 and 5 |
| 30 | Key words (TTS, voice cloning, avatar, consent video, deep fake, μ-law) | S1–S5 | PASS | Consistent with the rows above |

Other checks:

| Check | Verdict | Note |
|---|---|---|
| No prices | PASS | No price on the page |
| Each source is cited and each cite has a source | PASS | Cites 1 to 5 used; 5 sources |
| Internal links | PASS | `/ai-skills/ai-governance/` is in the route maps and `content/ai-skills/ai-governance.mdx` exists |
| Copied text (8 words or more) | FAIL | Rows 16 and 25. Other close phrases are 5 words or fewer ("the voice belongs to you", "every video-based Digital Twin") |

## FAILs and proposed fixes

1. Rows 16 and 25 (one copy problem, two places).
   - How it works, Technical: "Synthesia requires explicit consent from the person whose likeness is used <Cite n={4} />."
     Fix: "Synthesia makes an avatar of a person only with that person's explicit consent <Cite n={4} />."
   - Tools to try, Technical table: "Requires explicit consent from the person whose likeness is used <Cite n={4} />"
     Fix: "Needs the explicit consent of the person in the avatar <Cite n={4} />"

Round 1 result: Open FAILs: 1

## Round 2 (2026-10-28)

I read the current MDX again and compared it with S4 ("We require explicit consent from the person whose likeness is used to create the avatar.").

| Row | New text (Technical) | Cite | Verdict | Note |
|---|---|---|---|---|
| 16 | "Synthesia makes an avatar of a person only with that person's explicit consent" | S4 | PASS | The fact is still supported. The longest run shared with S4 is "explicit consent" (2 words) |
| 25 | Tools table: "Needs the explicit consent of the person in the avatar" | S4 | PASS | The fact is still supported. The longest run shared with S4 is "explicit consent" (2 words) |

FAIL 1 is closed.

Open FAILs: 0
