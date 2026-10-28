# Fact check: AI Skills, Image Generation

Checker: an agent that did not write the page. Sources fetched fresh on 2026-10-28 with WebFetch (S1 in 2 parts, offset 0 and 100000). The quotes below come from these fetches, not from the research notes.

| # | Claim (Technical text) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | OpenAI Image API can edit an image with a new prompt, part or all of it | 1 | PASS | "Modify existing images using a new prompt, either partially or entirely" |
| 2 | Limits: exact text, the same character across images, exact layouts | 1 | PASS | "can still struggle with precise text placement and clarity" / "may occasionally struggle to maintain visual consistency for recurring characters" / "difficulty placing elements precisely in structured or layout-sensitive compositions" |
| 3 | Many image models are diffusion models | none | PASS (note) | General statement, low risk |
| 4 | "The paper that made them popular describes them as models that build the output step by step, like a gradual decompression" | 8 | FAIL | S8 supports the description: "our models naturally admit a progressive lossy decompression scheme". S8 does not say that it made diffusion models popular, and no other source on the page says it |
| 5 | Diffusers: pretrained diffusion models for images, video, audio | 7 | PASS | "Diffusers provides pretrained diffusion models and the building blocks for custom image, video, and audio workflows." |
| 6 | `DiffusionPipeline` runs a model in a few lines and loads adapters such as LoRA | 7 | PASS | "supports few-line inference with pretrained checkpoints, plus adapters like LoRA" |
| 7 | Offloading and quantization let large models run with little memory | 7 | PASS | "keep large models runnable on memory-constrained devices" |
| 8 | Default `png`; `jpeg` and `webp` also possible | 1 | PASS | "The default format is `png`, but you can also request `jpeg` or `webp`." |
| 9 | Common sizes 1024x1024, 1536x1024, 1024x1536; custom sizes allowed | 1 | PASS (note) | "`1024x1024` (square), `1536x1024` (landscape), `1024x1536` (portrait)" / "support custom dimensions as `WIDTHxHEIGHT` strings". S1 gives custom sizes for named models only, not all models |
| 10 | A complex prompt can take up to 2 minutes | 1 | PASS | "Complex prompts may take up to 2 minutes to process." |
| 11 | All prompts and generated images are filtered by the content policy | 1 | PASS | "All prompts and generated images are filtered" |
| 12 | `moderation` has `auto` (default) and `low` | 1 | PASS | "you can control moderation strictness with the `moderation` parameter"; `auto` is the default, `low` is "Less restrictive filtering." |
| 13 | "A blocked request returns an error that says that it did not meet the safety requirements" | 1 | FAIL | In S1, "This request could not be completed because it did not meet safety requirements." is a suggested message for end users in the sample code (`hint := ...`), not the API error text. The API error has the code `moderation_blocked`, and its body has `moderation_details` |
| 14 | SynthID puts invisible watermarks into AI-made images, audio, text, video | 3 | PASS | "embedding digital watermarks directly into AI-generated images, audio, text or video" / "Watermarks that are imperceptible to humans" |
| 15 | All images from the Gemini API carry a SynthID watermark | 2 | PASS | "All generated images include a SynthID watermark." |
| 16 | C2PA is an open standard that records the origin and edits of a file | 4 | PASS | "to establish the origin and edits of digital content" |
| 17 | A C2PA manifest holds statements, is digitally signed, so a change can be detected | 5 | PASS | "contain one or more assertions" / "digitally signed to ensure their authenticity and integrity" / "tamper-evident" |
| 18 | Tester uses: formats and sizes; text can be wrong; blocked prompt gives a clear message; long timeouts | 1 | PASS | Rows 2, 8, 9, 10. S1 suggests a generic message for the end user on a blocked request |
| 19 | c2patool is a command-line tool for C2PA manifests | 6 | PASS | "a command line tool for working with C2PA manifests and media assets" |
| 20 | Edit, resize, re-save, and check the credentials | 5 | PASS | Credentials can be removed: "even if it is removed from the asset" |
| 21 | c2patool works with image, audio, video files; Apache-2.0 or MIT | 6 | PASS | "(audio, image or video files)" / "Apache-2.0, MIT licenses found" |
| 22 | Provenance is optional; a missing credential proves nothing; provenance alone cannot say if content is true | 5 | PASS | "Adding provenance to an asset is optional." / "provenance information alone cannot tell you whether the digital content is true" |
| 23 | Credentials can be removed from a file | 5 | PASS | "even if it is removed from the asset" |
| 24 | No-label mistake and the tip | none | PASS | Marked as the tutorial's advice |
| 25 | How to start: cites 1, 5, 6 | 1, 5, 6 | PASS (note) | Step 5 lists a blocked prompt, a slow answer, and the AI label with cite 1. S1 supports the first two only. Optional: move the cite before "and the visible AI label" |
| 26 | Key words table | 1, 3, 4, 5, 7, 8 | PASS | Agrees with the rows above. "Synthetic test data" is a plain definition with no cite |

Other checks:

| Check | Verdict | Note |
|---|---|---|
| Sources are official (OpenAI docs, Google AI docs, C2PA, CAI GitHub, Hugging Face docs, arXiv) | PASS | No blog, news, or forum |
| No prices | PASS | |
| The "Tutorial advice" tip has no `<Cite>` | PASS | |
| No copied text | PASS | No long shared word run found |
| Internal links exist | PASS | `/automate/playwright/`, `/ai-skills/open-models/`, `/ai-skills/ai-governance/`, `/ai-skills/voice-and-avatars/` |

## FAILs and proposed fixes

| Row | Exact text | Proposed fix |
|---|---|---|
| 4 | "The paper that made them popular describes them as models that build the output step by step, like a gradual decompression <Cite n={8} />." | "The DDPM paper describes them as models that build the output step by step, like a gradual decompression <Cite n={8} />." Change Layman ("The paper that made them popular describes them ...") and Bangla ("যে পেপার এগুলোকে জনপ্রিয় করেছে, সেটা বলে ..." → "DDPM পেপার বলে ...") the same way. |
| 13 | "A blocked request returns an error that says that it did not meet the safety requirements <Cite n={1} />." | "A blocked request returns an error with the code `moderation_blocked` <Cite n={1} />." Change Layman ("A blocked request returns an error. The error says that the request did not meet the safety requirements") and Bangla ("ব্লক হওয়া রিকুয়েস্ট একটা এরর ফেরত দেয়। এরর বলে, রিকুয়েস্টটা safety শর্ত পূরণ করেনি") the same way. Update C7 of the research notes. |

## Round 2 (2026-10-28)

I fetched S1 again on 2026-10-28 (offsets 0 and 100000).

| Row | New text (Technical) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 4 | "The DDPM paper describes them as models that build the output step by step, like a gradual decompression" | 8 | PASS | S8 is "Denoising Diffusion Probabilistic Models" (DDPM): "our models naturally admit a progressive lossy decompression scheme". The "made them popular" claim is gone |
| 9 | "Common sizes are 1024x1024, 1536x1024, and 1024x1536, and some models also allow custom sizes" | 1 | PASS | S1 gives the 3 sizes, and "Both models also support custom dimensions as `WIDTHxHEIGHT` strings" for named models only. "Some models" matches |
| 13 | "A blocked request returns an error with the code `moderation_blocked`" | 1 | PASS | S1 sample code checks `error.code == "moderation_blocked"`. The error body has `moderation_details` |
| 25 | Step 5: "add tests for a blocked prompt and a slow answer <Cite n={1} />, and for the visible AI label." | 1 | PASS | The cite now covers only the blocked prompt and the slow answer, which S1 supports (rows 10, 13). The AI label has no cite |

All 3 panels have the same changes (Bangla: "DDPM পেপার বলে", "কিছু মডেলে নিজের পছন্দের সাইজও চলে", "`moderation_blocked` কোড সহ একটা এরর", step 5 cite before "আর চোখে পড়ার মতো AI লেবেলেরও").

Open FAILs: 0
