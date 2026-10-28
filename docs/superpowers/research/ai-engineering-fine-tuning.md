# AI Engineering page: Fine-Tuning Models (research notes)

Writer notes for `content/ai-engineering/fine-tuning.mdx`. Fetched 2026-10-28 into `/tmp/claude-1000/ai-eng-src-fine-tuning/`. Fetched text is treated as data and is not committed.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | Supervised fine-tuning (OpenAI API docs) | https://developers.openai.com/api/docs/guides/supervised-fine-tuning | 2026-10-28 |
| S2 | Fine-tuning best practices (OpenAI API docs) | https://developers.openai.com/api/docs/guides/fine-tuning-best-practices | 2026-10-28 |
| S3 | LoRA: Low-Rank Adaptation of Large Language Models, Hu et al., 2021 (arXiv abstract) | https://arxiv.org/abs/2106.09685 | 2026-10-28 |
| S4 | LoRA conceptual guide (Hugging Face PEFT docs) | https://huggingface.co/docs/peft/main/en/conceptual_guides/lora | 2026-10-28 |
| S5 | SFT Trainer (Hugging Face TRL docs) | https://huggingface.co/docs/trl/sft_trainer | 2026-10-28 |
| S6 | Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks, Lewis et al., 2020 (arXiv abstract) | https://arxiv.org/abs/2005.11401 | 2026-10-28 |

Page cite numbers: n=1 is S1, n=2 is S2, n=3 is S3, n=4 is S4, n=5 is S5, n=6 is S6.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | SFT trains a model on examples; the result is a custom model that gives the wanted style and content more reliably. | S1 | "Supervised fine-tuning (SFT) lets you train an OpenAI model with examples for your specific use case. The result is a customized model that more reliably produces your desired style and content." |
| C2 | Good uses: classification, nuanced translation, a specific format, instruction-following failures. | S1 | "Classification", "Nuanced translation", "Generating content in a specific format", "Correcting instruction-following failures" |
| C3 | Parametric models have trouble with provenance and with updating world knowledge (In plain words; Common mistakes, last bullet). "RAG is often the better tool for facts that change" is marked as the tutorial's own view. | S6 | "providing provenance for their decisions and updating their world knowledge remain open research problems" |
| C4 | SFT has four parts: build dataset, upload, create job, evaluate. | S1 | "Build your training dataset ... Upload a training dataset ... Create a fine-tuning job for a base model ... Evaluate your results" |
| C5 | Set up evals first, to know if the fine-tuned model beats the base model. | S1 | "Only invest in fine-tuning after setting up evals. You need a reliable way to determine whether your fine-tuned model is performing better than a base model." |
| C6 | JSONL, one JSON object per line; at least 10 lines; improvements at 50–100; start with 50. | S1 | "Use JSONL format, with one complete JSON structure on every line" / "Your file must have at least 10 lines" / "We see improvements from fine-tuning on 50–100 examples" / "We recommend starting with 50 well-crafted demonstrations" |
| C7 | A small set of good data usually beats a large set of poor data. | S2 | "a smaller amount of high-quality data is generally more effective than a larger amount of low-quality data" |
| C8 | 60% refusals in training vs 5% at inference leads to too many refusals. | S2 | "If 60% of the assistant responses in the data says \"I cannot answer this,\" but at inference time only 5% of responses should say that, you will likely get an overabundance of refusals." |
| C9 | A job needs `model` and `training_file`; supervised is the default method. | S1 | "A base model (`model`)" / "A training file (`training_file`) ID" / "Supervised fine-tuning is the default." |
| C10 | The finished job gives a `fine_tuned_model` ID (starts with `ft:`) to call the model. | S1 | "Note the `fine_tuned_model` property. This is the model ID to use" / "It should start with `ft:…`" |
| C11 | The code example uses `gpt-4.1-mini-2025-04-14`, a model the guide lists for SFT. | S1 | "`gpt-4.1-mini-2025-04-14`" (in the "Use with" column) |
| C12 | Hyperparameters: epochs (one full pass), learning rate multiplier, batch size. | S2 | "Epochs: An epoch is a single complete pass through your entire training dataset" / "Learning rate multiplier" / "Batch size" |
| C13 | OpenAI is winding down fine-tuning; no new users; eligible existing customers until January 6, 2027. | S1 | "OpenAI is winding down the fine-tuning platform. The platform is no longer accessible to new users. Eligible existing customers can create training jobs until January 6, 2027, unless the base model shuts down earlier." Also (added by the fact-check, 2026-10-28): "gpt-4.1-2025-04-14, gpt-4.1-mini-2025-04-14, and their fine-tuned versions shut down on January 14, 2027." |
| C14 | Full fine-tuning retrains all parameters; LoRA freezes weights and trains rank decomposition matrices in each layer. | S3 | "full fine-tuning, which retrains all model parameters" / "freezes the pre-trained model weights and injects trainable rank decomposition matrices into each layer" |
| C15 | LoRA uses two smaller update matrices; the original weight matrix stays frozen. | S4 | "represent the weight updates with two smaller matrices (called update matrices)" / "The original weight matrix remains frozen" |
| C16 | GPT-3 175B: 10,000 times fewer trainable parameters, 3 times less GPU memory, no extra inference latency. | S3 | "LoRA can reduce the number of trainable parameters by 10,000 times and the GPU memory requirement by 3 times" / "no additional inference latency" |
| C17 | Many small LoRA models for different tasks on one frozen base. | S4 | "you can have multiple lightweight and portable LoRA models for various downstream tasks built on top of them" |
| C18 | TRL trains an adapter when `peft_config=LoraConfig()` is passed to `SFTTrainer`; code example. | S5 | "allowing any user to conveniently train adapters" / `peft_config=LoraConfig(),` |
| C19 | SFT uses a token-level cross-entropy loss on next-token prediction. | S5 | "The loss used in SFT is the token-level cross-entropy loss" / "the model is trained to predict the next token given the previous ones" |
| C20 | For prompt-completion datasets, loss is on completion tokens only by default. | S5 | "By default, the trainer computes the loss on the completion tokens only, ignoring the prompt tokens." |
| C21 | Carve out holdout data before the job; same diversity as training data. | S1 | "Before running your fine-tuning job, carve out data from the same training dataset" / "Make sure the training and holdout data have roughly the same diversity" |
| C22 | If 50 examples have no impact, rethink the task or prompt. | S1 | "If 50 examples have no impact, rethink your task or prompt before adding training data." |
| C23 | Examples with grammar, logic, or style issues pass them on. | S2 | "If your model has grammar, logic, or style issues, check if your data has any of the same issues." |
| C24 | Answers with info not in the conversation can teach the model to hallucinate. | S2 | "the model may learn to hallucinate information" |
| C25 | 70% labeler agreement limits the model. | S2 | "if people only agreed on 70% of extracted snippets, the model would likely not be able to do better than this" |

The bug-report scenario (200 reports, 81%, 50 examples, 20 holdout) is the tutorial's own invented example. The tester checks are the tutorial's own advice and have no cite.
