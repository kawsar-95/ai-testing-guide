# AI Skills page: Fine-Tuning (research notes)

Writer notes for `content/ai-skills/fine-tuning.mdx`. Fetched 2026-10-28 with WebFetch. Fetched text is treated as data. No text is copied to the page; the quotes stay here.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | LoRA: Low-Rank Adaptation of Large Language Models (arXiv 2106.09685) | https://arxiv.org/abs/2106.09685 | 2026-10-28 |
| S2 | QLoRA: Efficient Finetuning of Quantized LLMs (arXiv 2305.14314) | https://arxiv.org/abs/2305.14314 | 2026-10-28 |
| S3 | PEFT, GitHub repository (Hugging Face) | https://github.com/huggingface/peft | 2026-10-28 |
| S4 | TRL docs: SFT Trainer (Hugging Face) | https://huggingface.co/docs/trl/sft_trainer | 2026-10-28 |
| S5 | Datasets docs: Process (Hugging Face) | https://huggingface.co/docs/datasets/process | 2026-10-28 |
| S6 | An Empirical Study of Catastrophic Forgetting in Large Language Models During Continual Fine-tuning (arXiv 2308.08747) | https://arxiv.org/abs/2308.08747 | 2026-10-28 |
| S7 | Unsloth, GitHub repository | https://github.com/unslothai/unsloth | 2026-10-28 |
| S8 | Model optimization guide (OpenAI API docs) | https://developers.openai.com/api/docs/guides/model-optimization | 2026-10-28 |
| S9 | Model Cards (Hugging Face Hub docs) | https://huggingface.co/docs/hub/model-cards | 2026-10-28 |

Page cite numbers: n=k is Sk.

Note: S8 also says that OpenAI is winding down its fine-tuning platform. The page does not use OpenAI as a tool to try, and it does not state this news fact (it can change). S8 is cited only for the general advice (prompting may be enough; measure the prompt and the fine-tuned model with evals).

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | Supervised fine-tuning (SFT) is the simplest and most common way to adapt a language model to a dataset. It trains on input and output pairs. | S4 | "Supervised Fine-Tuning (SFT) is the simplest and most commonly used method to adapt a language model to a target dataset." / "trained in a fully supervised fashion using pairs of input and output sequences" |
| C2 | Prompting alone may be all you need. Fine-tuning can allow shorter prompts. | S8 | "The prompt engineering process may be all you need in order to get great results for your use case." / "You can use shorter prompts with fewer examples and context data" |
| C3 | Write evals early, and measure the prompt and the fine-tuned model on test data. | S8 | "You might even consider writing evals before you start writing prompts." / "Measure the performance of your prompt and fine-tuned model" |
| C4 | PEFT trains only a small number of (extra) parameters, not all of them. This cuts compute and storage cost. | S3 | "only fine-tuning a small number of (extra) model parameters instead of all the model's parameters" / "This significantly decreases the computational and storage costs." |
| C5 | PEFT is under the Apache-2.0 license. | S3 | "Apache-2.0 license" |
| C6 | LoRA freezes the pretrained weights and injects trainable rank decomposition matrices into each Transformer layer. | S1 | "freezes the pre-trained model weights and injects trainable rank decomposition matrices into each layer of the Transformer architecture" |
| C7 | Compared with full fine-tuning of GPT-3 175B, LoRA cut trainable parameters by 10,000 times and GPU memory by 3 times, with no extra inference latency. | S1 | "can reduce the number of trainable parameters by 10,000 times and the GPU memory requirement by 3 times" / "no additional inference latency" |
| C8 | QLoRA backpropagates through a frozen 4-bit quantized model into LoRA adapters. It fine-tuned a 65B model on one 48GB GPU. | S2 | "QLoRA backpropagates gradients through a frozen, 4-bit quantized pretrained language model into Low Rank Adapters" / "finetune a 65B parameter model on a single 48GB GPU" |
| C9 | SFTTrainer takes standard and conversational data, as language modeling or prompt-completion. Conversational rows hold messages with roles. | S4 | "SFT supports both language modeling and prompt-completion datasets." / "compatible with both standard and conversational dataset formats" / example `{"messages": [{"role": "user", ...}, {"role": "assistant", ...}]}` |
| C10 | The SFT loss is token-level cross-entropy. | S4 | "The loss used in SFT is the token-level cross-entropy loss" |
| C11 | SFTTrainer takes an `eval_dataset`. | S4 | "eval_dataset ... Dataset to use for evaluation." |
| C12 | SFTTrainer can train LoRA adapters through `peft_config`. | S4 | "allowing any user to conveniently train adapters" / `peft_config=LoraConfig()` |
| C13 | `train_test_split()` makes train and test splits; `test_size` sets the size; splits are shuffled by default. | S5 | "The train_test_split() function creates train and test splits" / "use the test_size parameter" / "The splits are shuffled by default" |
| C14 | Catastrophic forgetting is generally seen in LLMs from 1b to 7b parameters during continual fine-tuning. | S6 | "catastrophic forgetting is generally observed in LLMs ranging from 1b to 7b parameters" |
| C15 | Unsloth supports LoRA, QLoRA, and full fine-tuning. | S7 | "Supports reinforcement learning, LoRA, QLoRA, full fine tuning" |
| C16 | Unsloth uses Apache 2.0 and AGPL-3.0 (dual licensing). | S7 | "Unsloth uses a dual-licensing model of Apache 2.0 and AGPL-3.0." |
| C17 | A model card can name the base model of a fine-tune or adapter (`base_model`). | S9 | "If your model is a fine-tune, an adapter, or a quantized version of a base model, you can specify the base model" |
| C18 | A model card should describe intended uses, limitations, the training datasets, and evaluation results. | S9 | "its intended uses & potential limitations" / "which datasets were used to train your model" / "the model's evaluation results" |

## Removed

- "LoRA is the best-known PEFT method": no source. The page now says "one PEFT method" (fix round).

- A minimum or suggested number of training examples (OpenAI SFT guide: 10 minimum, 50 suggested). Removed: it is vendor-specific and the vendor is winding down the platform.
