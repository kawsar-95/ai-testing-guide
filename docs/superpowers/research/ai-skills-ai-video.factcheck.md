# Fact check: AI Skills, AI Video

Sources fetched fresh on 2026-10-28 with WebFetch. S1 = Descript "Edit like a doc", S2 = Descript "Remove filler words", S3 = Runway API "Using the API", S4 = Riverside FAQ, S5 = Playwright "Videos". All 5 are the vendor's own docs or help pages. No blog, news, or forum. The page gives no price.

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Descript lets you edit a video by editing its script, the transcript | S1 | PASS | "In Descript, you edit your content simply by editing your script." |
| 2 | Runway's API can make a video from an image with a text prompt | S3 | PASS | "generate a video from an image using the text prompt" |
| 3 | A generated video is never evidence of a bug | none | PASS | The tutorial's own view, no source fact |
| 4 | The tool transcribes; delete a word in the script and it goes from the audio or video | S1 | PASS | "Delete a word from the transcript, and that word disappears from your audio or video." |
| 5 | You can restore removed media later | S1 | PASS | "select Restore removed media" |
| 6 | Descript finds filler words such as "um" and "uh" | S2 | PASS | "automatically detects common filler words like "um" and "uh"" |
| 7 | Delete removes the text and the audio of each filler word | S2 | PASS | "Removes both the text and audio of the filler word." |
| 8 | Riverside records each participant's audio and video on their own device | S4 | PASS | "Each participant's audio and video are recorded directly on their own device." |
| 9 | Up to 10 people on separate audio and video tracks | S4 | PASS | "record up to 10 participants (9 guests + the host) on separate, high-quality audio and video tracks" |
| 10 | Each screen share is saved on its own track | S4 | PASS | "each screen share is recorded locally on its own track" |
| 11 | Clean, separate tracks make editing easier | none | PASS | A general remark, not a source fact; no cite is needed |
| 12 | Send an image and a text prompt; the model makes a short clip | S3 | PASS | S3 example sends an image and a prompt to `gen4.5`. "Short" is the tutorial's word; S3 gives no length in the quoted text, and the page gives no number |
| 13 | The image-to-video call requires a prompt image | S3 | PASS | "`POST /v1/image_to_video` requires `promptImage`." |
| 14 | You get a task ID to check the task status | S3 | PASS | "the task ID ... which you can use to fetch the task status" |
| 15 | Playwright can record a video of each test | S5 | PASS | "Playwright Test can record videos for your tests"; `'on'`: "Record video for each test." |
| 16 | `retain-on-failure` records every test, keeps only videos of failed tests | S5 | PASS | "Record video for each test, but remove all videos from successful test runs." |
| 17 | Files go to the test output folder, typically `test-results` | S5 | PASS | "Video files will appear in the test output directory, typically `test-results`." |
| 18 | Tester uses: cut dead time by transcript (S1), `retain-on-failure` (S5), remove filler words (S2), separate tracks (S4) | S1, S2, S4, S5 | PASS | Each cite points to the row above that supports it |
| 19 | Tools table: Descript, Runway, Riverside, Playwright facts | S1, S3, S4, S5 | PASS | Same facts as rows 1, 2, 8, 15 |
| 20 | Common mistakes: restore removed media (S1), generated clip (S3), `retain-on-failure` or `on-first-retry` (S5) | S1, S3, S5 | PASS | `'on-first-retry'`: "Record video only when retrying a test for the first time." |
| 21 | How to start: `video: 'retain-on-failure'`, videos in `test-results` | S5 | PASS | S5: the `video` option of the Playwright config; directory as in row 17 |
| 22 | Key words table | S1 to S5 | PASS | Same facts as rows 1, 6, 2, 8, 16 |

Other checks:

| Check | Verdict | Note |
|---|---|---|
| Sources are official | PASS | Vendor help centers and docs (Descript, Runway, Riverside, Playwright) |
| No prices | PASS | None on the page |
| No copied text | PASS | Each page sentence compared with its quote above. The longest shared run is 5 words ("a video from an image"). No run of 8 words |
| "Tutorial advice" tip has no cite | PASS | The Callout has no `<Cite>` |
| Internal links | PASS | `/automate/playwright/` is in the route maps |
| Each source is cited | PASS | S1 to S5 all cited |

## Round 2 (2026-10-28)

The writer reworded 2 sentences that were close to the source wording. I re-read the current MDX. The source quotes are from rows 2 and 17.

| Changed text | Cite | Verdict | Note |
|---|---|---|---|
| "Runway's API, for example, can turn an image and a text prompt into a video" (In plain words) | S3 | PASS | S3: "generate a video from an image using the text prompt". Same fact. The longest shared run is 3 words |
| "The API turns an image and a text prompt into a video" (Tools to try) | S3 | PASS | Same as above |
| "Turning an image and a text prompt into a video" (Key words, Image-to-video) | S3 | PASS | Same as above |
| "Playwright saves the files in its test output folder, which is usually `test-results`" (How it works) | S5 | PASS | S5: "Video files will appear in the test output directory, typically `test-results`." Same fact. The longest shared run is 3 words ("test output folder" vs "test output directory") |

Open FAILs: 0
