# Fact check: AI Skills, Fine-Tuning

Checker: an agent that did not write the page. Sources fetched fresh on 2026-10-28 with WebFetch. The quotes below come from these fetches, not from the research notes.

| # | Claim (Technical text) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | SFT is the most common method; each example is an input and the wanted output | 4 | PASS | "the simplest and most commonly used method" / "pairs of input and output sequences" |
| 2 | A vendor guide says that good prompts may be all you need | 8 | PASS | "The prompt engineering process may be all you need" |
| 3 | PEFT trains only a small number of extra parameters; this cuts compute and storage cost a lot | 3 | PASS | "only fine-tuning a small number of (extra) model parameters" / "significantly decreases the computational and storage costs" |
| 4 | LoRA freezes the pretrained weights and adds small trainable matrices to each Transformer layer | 1 | PASS | "freezes the pre-trained model weights and injects trainable rank decomposition matrices into each layer" |
| 5 | Vs full fine-tuning of GPT-3 175B: 10,000 times fewer trainable parameters, 3 times less GPU memory, no extra inference latency | 1 | PASS | "reduce the number of trainable parameters by 10,000 times and the GPU memory requirement by 3 times" / "no additional inference latency" |
| 6 | LoRA is "the best-known PEFT method" | none | PASS (note) | Editorial wording, not a measurable fact. S4 uses `LoraConfig` as its PEFT example. |
| 7 | QLoRA trains LoRA adapters on a frozen 4-bit base; 65B model on one 48GB GPU | 2 | PASS | "frozen, 4-bit quantized pretrained language model into Low Rank Adapters" / "a 65B parameter model on a single 48GB GPU" |
| 8 | TRL rows: plain text or prompt and completion; conversational rows hold messages with roles | 4 | PASS | "SFT supports both language modeling and prompt-completion datasets" / `{"messages": [{"role": "user", ...` |
| 9 | Token-by-token prediction; token-level cross-entropy loss | 4 | PASS | "The loss used in SFT is the token-level cross-entropy loss" |
| 10 | The trainer can take a separate evaluation dataset | 4 | PASS | `eval_dataset`: "Dataset to use for evaluation." |
| 11 | `train_test_split()` makes train and test splits; `test_size`; shuffled by default | 5 | PASS | "creates train and test splits" / "use the `test_size` parameter" / "The splits are shuffled by default" |
| 12 | A vendor guide advises to measure the prompt and the fine-tuned model | 8 | PASS | "Measure the performance of your prompt and fine-tuned model." |
| 13 | Catastrophic forgetting in general in 1b to 7b models during continual fine-tuning | 6 | PASS | "catastrophic forgetting is generally observed in LLMs ranging from 1b to 7b parameters" |
| 14 | Check that each row has the format the trainer expects | 4 | PASS | S4 "Expected dataset type and format" section |
| 15 | A model card can name the base model in `base_model`; it should list training data and eval results | 9 | PASS | "If your model is a fine-tune, an adapter, or a quantized version of a base model, you can specify the base model" / "which datasets were used to train your model" / "the model's evaluation results" |
| 16 | PEFT is under Apache-2.0 | 3 | PASS | "Apache-2.0 license" |
| 17 | SFTTrainer trains LoRA adapters through `peft_config` | 4 | PASS | "conveniently train adapters" / `peft_config=LoraConfig()` |
| 18 | Unsloth: less memory; LoRA, QLoRA, full fine-tuning; Apache 2.0 and AGPL-3.0 | 7 | PASS | "70% less VRAM" / "LoRA, QLoRA, full fine tuning" / "dual-licensing model of Apache 2.0 and AGPL-3.0" |
| 19 | A vendor guide suggests writing evals before prompts | 8 | PASS | "writing evals before you start writing prompts" |
| 20 | Common mistakes and How to start: cites 1, 4, 5, 6, 9 | 1,4,5,6,9 | PASS | Each cite supports the fact next to it (rows 4, 11, 13, 14, 15). The privacy fix is marked as tutorial advice. |
| 21 | Key words table | 1-6, 9 | PASS | Agrees with the rows above |

Other checks:

| Check | Verdict | Note |
|---|---|---|
| Sources are official (arXiv, GitHub repos, Hugging Face docs, OpenAI docs) | PASS | No blog, news, or forum |
| No prices | PASS | |
| The "Tutorial advice" tip has no `<Cite>` | PASS | |
| No copied text | PASS | The longest shared run is "each layer of the Transformer" (5 words) |
| Internal links exist | PASS | `/ai-skills/prompting/`, `/ai-skills/rag/`, `/ai-skills/ai-evals/`, `/ai-skills/open-models/` (in `lib/ai-skills/topics.ts`), `/foundations/test-design/` |

## Round 2 (2026-10-28)

| Row | New text (Technical) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 6 | "**LoRA** is one PEFT method." | 1 | PASS | No judgment remains. S1 describes LoRA as a method that trains only small added matrices. The Layman and Bangla ("LoRA হলো একটা PEFT পদ্ধতি") panels have the same change |

Open FAILs: 0
