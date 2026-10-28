# Research notes: AI Skills, AI Video

Page: `content/ai-skills/ai-video.mdx`. All sources accessed 2026-10-28.

## Sources

| ID | Title | Publisher | URL |
|---|---|---|---|
| S1 | Edit like a doc | Descript Help Center | https://help.descript.com/getting-started/edit-like-a-doc |
| S2 | Remove filler words | Descript Help Center | https://help.descript.com/hc/en-us/articles/10164806394509-Remove-filler-words |
| S3 | Using the API | Runway API docs | https://docs.dev.runwayml.com/guides/using-the-api/ |
| S4 | Frequently Asked Questions | Riverside | https://riverside.com/faq |
| S5 | Videos | Playwright docs | https://playwright.dev/docs/videos |

The Runway help center (help.runwayml.com) returned HTTP 403, so the page cites the Runway API docs.

## Claims

| Claim | Source | Quote |
|---|---|---|
| Descript: edit the video by editing the script | S1 | "edit your content simply by editing your script" |
| Deleting a word removes it from the media; the cut can be restored | S1 | Restore through "Restore removed media" |
| Descript detects filler words such as "um" and "uh" | S2 | page: filler words such as "um" and "uh" |
| Delete removes text and audio of the filler word | S2 | "Removes both the text and audio of the filler word" |
| Runway: make a video from an image with a text prompt | S3 | "generate a video from an image using the text prompt" |
| Image-to-video endpoint needs an image | S3 | "`POST /v1/image_to_video` requires `promptImage`" |
| Task ID to fetch the status | S3 | "the task ID ... which you can use to fetch the task status" |
| Riverside records each participant on their own device | S4 | "Each participant's audio and video are recorded directly on their own device." |
| Up to 10 people on separate tracks | S4 | up to 10 participants (9 guests plus the host) on separate audio and video tracks |
| Screen shares saved on their own track | S4 | each screen share is saved on its own local track |
| Playwright records videos of tests | S5 | "With Playwright you can record videos for your tests." |
| `retain-on-failure` keeps videos only of failed tests | S5 | "'retain-on-failure' - Record video for each test, but remove all videos from successful test runs." |
| `on-first-retry` | S5 | "'on-first-retry' - Record video only when retrying a test for the first time." |
| Videos go to the test output folder, typically `test-results` | S5 | "Video files will appear in the test output directory, typically `test-results`." |

## Removed

- Runway model names, clip lengths, and credit costs (they change often).
- Descript Underlord features (the help center marks it beta).
