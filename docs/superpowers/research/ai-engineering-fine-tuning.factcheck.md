# Fact-check: content/ai-engineering/fine-tuning.mdx

Checked 2026-10-28 by an agent that did not write the page. All 6 sources were fetched fresh. The OpenAI URLs redirect (301) to `developers.openai.com/api/docs/guides/...`; the content is the same guide. The quotes of the research notes were not trusted.

Sources: [1] OpenAI Supervised fine-tuning, [2] OpenAI Fine-tuning best practices, [3] LoRA paper (arXiv 2106.09685), [4] Hugging Face PEFT LoRA guide, [5] Hugging Face TRL SFT Trainer, [6] RAG paper (arXiv 2005.11401).

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | SFT trains a model on your examples; result is a custom model that gives your style and content more reliably | 1 | PASS | "The result is a customized model that more reliably produces your desired style and content." |
| 2 | Each SFT example is a prompt and the correct answer | 1 | PASS | "Upload a training dataset containing example prompts and desired model output" |
| 3 | Good uses: classification, nuanced translation, specific format, instruction-following fixes | 1 | PASS | Table "Best for": "Classification", "Nuanced translation", "Generating content in a specific format", "Correcting instruction-following failures" |
| 4 | Knowledge in the weights: hard to show provenance and to update world knowledge | 6 | PASS | "providing provenance for their decisions and updating their world knowledge remain open research problems." |
| 5 | Retrieval is often better for facts that change | none | PASS | Marked "Tutorial's own view". |
| 6 | SFT has four parts (dataset, upload, job, evaluate) | 1 | PASS | "Supervised fine-tuning has four major parts: Build your training dataset ... Upload a training dataset ... Create a fine-tuning job ... Evaluate your results" |
| 7 | Set up evals first | 1 | PASS | "Only invest in fine-tuning after setting up evals." |
| 8 | Evals show if the fine-tuned model beats the base model | 1 | PASS | "To see if your fine-tuned model performs better than the original base model, use evals." |
| 9 | JSONL, one complete JSON object on each line | 1 | PASS | "one complete JSON structure on every line of the training data file" |
| 10 | Minimum 10 examples | 1 | PASS | "The minimum number of examples you can provide for fine-tuning is 10" |
| 11 | 50 to 100 examples improve many tasks; start with 50 | 1 | PASS | "We see improvements from fine-tuning on 50–100 examples"; "We recommend starting with 50 well-crafted demonstrations" |
| 12 | Chat format line with `messages`, `role`, `content` | 1 | PASS | Source examples: `{"messages":[{"role":"user","content":"What is the weather in San Francisco?"},{"role":"assistant",...}]}` |
| 13 | Quality over size | 2 | PASS | "a smaller amount of high-quality data is generally more effective than a larger amount of low-quality data" |
| 14 | 60% refusals vs 5% real use gives too many refusals | 2 | PASS | "If 60% of the assistant responses in the data says "I cannot answer this," ... you will likely get an overabundance of refusals." |
| 15 | Job needs `model` and `training_file`; supervised is the default | 1 | PASS | "A training file (training_file) ID."; "Supervised fine-tuning is the default." |
| 16 | curl to `/v1/fine_tuning/jobs` with `training_file` and `model` | 1 | PASS | Source: `curl https://api.openai.com/v1/fine_tuning/jobs ... -d '{ "training_file": "file-...", "model": "gpt-4.1-nano-2025-04-14" }'`. Same endpoint and fields. |
| 17 | Model id `gpt-4.1-mini-2025-04-14` is valid for SFT | 1 | PASS | "Use with" table lists "gpt-4.1-mini-2025-04-14". The guide's own example uses `gpt-4.1-nano-2025-04-14`, which "shut down on October 23, 2026", so the page's choice of mini is correct. |
| 18 | The job returns a `fine_tuned_model` ID that starts with `ft:` | 1 | PASS | "The job contains a fine_tuned_model property, which is your new fine-tuned model's unique ID."; example `"ft:gpt-4.1-nano-2025-04-14:openai::BTz2REMH"` |
| 19 | Hyperparameters: epochs, learning rate multiplier, batch size; epoch = one full pass | 2 | PASS | "An epoch is a single complete pass through your entire training dataset"; sections for learning rate multiplier and batch size. |
| 20 | OpenAI is winding down fine-tuning; no new users; eligible customers until January 6, 2027 | 1 | FAIL | Dates PASS: "OpenAI is winding down the fine-tuning platform. The platform is no longer accessible to new users. Eligible existing customers can create training jobs until January 6, 2027, unless the base model shuts down earlier." The page dropped the condition "unless the base model shuts down earlier". The base model of the code (`gpt-4.1-mini-2025-04-14`) shuts down on January 14, 2027. Add the condition and that date. |
| 21 | Full fine-tuning retrains all parameters | 3 | PASS | "full fine-tuning, which retrains all model parameters" |
| 22 | LoRA freezes the original weights and trains small matrices in each layer | 3, 4 | PASS | [3] "freezes the pre-trained model weights and injects trainable rank decomposition matrices into each layer"; [4] "two smaller matrices (called update matrices)" |
| 23 | GPT-3 175B: 10,000 times fewer trainable parameters, 3 times less GPU memory, no extra inference latency | 3 | PASS | "reduce the number of trainable parameters by 10,000 times and the GPU memory requirement by 3 times"; "no additional inference latency" |
| 24 | Frozen base means many small adapters for different tasks | 4 | PASS | "The original pre-trained weights are kept frozen, which means you can have multiple lightweight and portable LoRA models for various downstream tasks built on top of them." |
| 25 | TRL trains a LoRA adapter when you pass `LoraConfig` to `SFTTrainer` | 5 | PASS | Source code: `trainer = SFTTrainer("Qwen/Qwen3-0.6B", train_dataset=dataset, peft_config=LoraConfig(),)` |
| 26 | Code: imports, `trl-lib/Capybara`, `Qwen/Qwen3-0.6B`, `peft_config=LoraConfig()` | 5 | PASS | Same imports, dataset, model, and argument as the source's PEFT example. |
| 27 | SFT loss is next-token prediction with cross-entropy | 5 | PASS | "The loss used in SFT is the token-level cross-entropy loss"; "the model is trained to predict the next token given the previous ones." |
| 28 | Prompt-completion dataset: loss on completion tokens only, by default | 5 | PASS | "By default, the trainer computes the loss on the completion tokens only, ignoring the prompt tokens." |
| 29 | Bug sorting is classification, a good fit for SFT | 1 | PASS | "Classification" is in "Best for". The numbers (200 reports, 81%, 50, 20) are an invented example, not facts. |
| 30 | Carve out holdout data before the job, with the same mix as training | 1 | PASS | "Before running your fine-tuning job, carve out data from the same training dataset ... Make sure the training and holdout data have roughly the same diversity of user input types and model responses." |
| 31 | Ship only if it beats the prompt; keep the eval | none | PASS | Marked "Tutorial's own view". |
| 32 | No evals: cannot tell if better | 1 | PASS | See 7 and 8. |
| 33 | If 50 examples do nothing, rethink task or prompt | 1 | PASS | "If 50 examples have no impact, rethink your task or prompt before adding training data." |
| 34 | Grammar, logic, style errors in the data are learned | 2 | PASS | "If your model has grammar, logic, or style issues, check if your data has any of the same issues." |
| 35 | Answers with facts not in the prompt teach invention | 2 | PASS | "Make sure your training examples contain all of the information needed for the response" ... "the model may learn to hallucinate information." |
| 36 | 70% labeler agreement caps the model | 2 | PASS | "if people only agreed on 70% of extracted snippets, the model would likely not be able to do better than this." |
| 37 | Weights knowledge is hard to update | 6 | PASS | See 4. |
| 38 | "What a tester can check" | none | PASS | Callout says "These checks are the tutorial's own advice." |
| 39 | Key words table (fine-tuning, SFT, JSONL, epoch, holdout, LoRA, adapter) | 1–4 | PASS | Each row restates claims 1, 2, 9, 19, 30, 22, 24. |

Copy check: `scripts/linux_overlap.py` (8-word runs) on the page against the text of all 6 sources: no run of 8 or more words. PASS.

## Re-check (after the fix)

| # | Changed text | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 20 | "Eligible existing customers can create jobs until January 6, 2027, unless the base model shuts down earlier. The model of the example, `gpt-4.1-mini-2025-04-14`, and its fine-tuned versions shut down on January 14, 2027" | 1 | PASS | "Eligible existing customers can create training jobs until January 6, 2027, unless the base model shuts down earlier."; "gpt-4.1-2025-04-14, gpt-4.1-mini-2025-04-14, and their fine-tuned versions shut down on January 14, 2027." |

The research notes (row C13) now have the full quote. Copy check after the fix: no run of 8 or more words. `node --test tests/voice-source.test.ts tests/ai-engineering.test.ts`: 29 pass, 0 fail.

Open FAILs: 0
