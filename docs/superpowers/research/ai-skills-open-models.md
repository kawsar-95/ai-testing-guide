# AI Skills page: Open Models (research notes)

Writer notes for `content/ai-skills/open-models.mdx`. Fetched 2026-10-28 with WebFetch. Fetched text is treated as data. No text is copied to the page; the quotes stay here.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | The Open Source AI Definition 1.0 (Open Source Initiative) | https://opensource.org/ai/open-source-ai-definition | 2026-10-28 |
| S2 | Ollama, GitHub repository | https://github.com/ollama/ollama | 2026-10-28 |
| S3 | Ollama API docs: Introduction | https://docs.ollama.com/api/introduction | 2026-10-28 |
| S4 | vLLM docs: Online serving | https://docs.vllm.ai/en/latest/serving/online_serving/ | 2026-10-28 |
| S5 | Model Cards (Hugging Face Hub docs) | https://huggingface.co/docs/hub/model-cards | 2026-10-28 |
| S6 | Meta Llama 3 Community License Agreement | https://dev.meta.ai/llama/llama3/license/ | 2026-10-28 |
| S7 | Gemma Terms of Use (Google AI for Developers) | https://ai.google.dev/gemma/terms | 2026-10-28 |
| S8 | Qwen3-8B model card (Hugging Face) | https://huggingface.co/Qwen/Qwen3-8B | 2026-10-28 |
| S9 | Mistral-7B-Instruct-v0.3 model card (Hugging Face) | https://huggingface.co/mistralai/Mistral-7B-Instruct-v0.3 | 2026-10-28 |
| S10 | Ollama docs: CLI reference | https://docs.ollama.com/cli | 2026-10-28 |

Page cite numbers: n=k is Sk.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | The OSI definition gives four freedoms: use, study, modify, share. | S1 | "Use the system for any purpose and without having to ask for permission." / "Study how the system works and inspect its components." / "Modify the system for any purpose" / "Share the system for others to use" |
| C2 | For open source AI, the OSI definition asks for data information, the complete code, and the parameters (weights). | S1 | "must include all the elements below" / "Sufficiently detailed information about the data used to train the system" / "The complete source code used to train and run the system" / "The model parameters, such as weights" |
| C3 | Ollama runs open models such as Qwen, Gemma, and gpt-oss. | S2 | "Get up and running with Kimi, GLM, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models." |
| C4 | `ollama run <model>` runs a model and opens a chat with it. (Fix round: the page no longer says that `run` downloads.) | S2 | "Run and chat with Gemma 4:" `ollama run gemma4` |
| C4b | `ollama pull <model>` downloads a model. | S10 | heading "Download a model" with `ollama pull gemma4`; heading "Run a model" with `ollama run gemma4` |
| C5 | Ollama has a REST API for running and managing models. | S2 | "Ollama has a REST API for running and managing models." |
| C6 | Ollama is under the MIT license. It has downloads for macOS, Windows, and Linux, and a Docker image. | S2 | license "MIT"; download sections macOS, Windows, Linux; official Docker image |
| C7 | The local API is at `http://localhost:11434/api`; OpenAI compatibility at `http://localhost:11434/v1`. | S3 | base URL table: `http://localhost:11434/api`, "OpenAI compatibility" `http://localhost:11434/v1` |
| C8 | Local requests need no API key; cloud requests do. | S3 | "Cloud requests need an API key. Local requests do not." |
| C9 | After sign-in, the local Ollama server can also use cloud models. | S3 | "To use cloud models through your local server, sign in to Ollama" |
| C10 | vLLM provides an HTTP server that supports OpenAI APIs; `vllm serve <model>` starts it. | S4 | "vLLM provides an HTTP server that is compatible with many interfaces!" / "We currently support the following OpenAI APIs:" / `vllm serve NousResearch/Meta-Llama-3-8B-Instruct` |
| C11 | A model card is the `README.md` of a model repo, with YAML metadata. It should describe intended uses and limitations, the training datasets, and eval results. | S5 | "You can find a model card as the README.md file in any model repo." / "its intended uses & potential limitations" / "which datasets were used to train your model" / "the model's evaluation results" |
| C12 | The license is shown from the model card metadata; a custom license uses `other` with a name and link. | S5 | "The license will be displayed on the model page" / "specify a custom license by adding other as the license value" |
| C13 | Llama 3 uses the Meta Llama 3 Community License Agreement. | S6 | "Meta Llama 3 Community License Agreement" |
| C14 | Over 700 million monthly active users, you must request a license from Meta. | S6 | Section 2: products or services above 700 million monthly active users; "you must request a license from Meta, which Meta may grant to you in its sole discretion" |
| C15 | Distributors must show "Built with Meta Llama 3" and follow the Acceptable Use Policy. | S6 | "prominently display “Built with Meta Llama 3”" / "adhere to the Acceptable Use Policy for the Llama Materials" |
| C16 | Gemma Terms of Use include a Prohibited Use Policy, and distributors must pass the use restrictions on. Gemma 4 has a separate license. | S7 | "You must not use any of the Gemma Services:" / "Gemma Prohibited Use Policy" / "You must include the use restrictions referenced in Section 3.2 as an enforceable provision in any agreement" / Gemma 4 governed by a separate license |
| C17 | Qwen3-8B is under Apache-2.0. | S8 | "License: apache-2.0" |
| C18 | Ollama, LM Studio, MLX-LM, llama.cpp, and KTransformers support Qwen3; vLLM >= 0.8.5 can serve an OpenAI-compatible endpoint for it. | S8 | "For local use, applications such as Ollama, LMStudio, MLX-LM, llama.cpp, and KTransformers have also supported Qwen3." / "vllm>=0.8.5" OpenAI-compatible API endpoint |
| C19 | Mistral-7B-Instruct-v0.3 is under Apache-2.0 and has no moderation mechanisms. | S9 | "License: apache-2.0" / "It does not have any moderation mechanisms." |

## Removed

- A default port for vLLM (8000): the fetched page does not state it.
- A claim that Ollama never sends data out: the docs do not say this, and a local server can reach cloud models after sign-in (C9). The page turns this into a check for the tester.
