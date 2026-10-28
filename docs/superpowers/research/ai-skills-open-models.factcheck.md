# Fact check: AI Skills, Open Models

Checker: an agent that did not write the page. Sources fetched fresh on 2026-10-28 with WebFetch. The quotes below come from these fetches, not from the research notes.

| # | Claim (Technical text) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | OSI defines open source AI with four freedoms: use, study, modify, share | 1 | PASS | "Use the system for any purpose" / "Study how the system works" / "Modify the system for any purpose" / "Share the system for others to use" |
| 2 | OSI asks for more than weights: detailed data information and the complete code to train and run | 1 | PASS | "Sufficiently detailed information about the data used to train the system" / "The complete source code used to train and run the system." |
| 3 | Ollama runs open models such as Qwen, Gemma, and gpt-oss | 2 | PASS | "Get up and running with Kimi, GLM, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models." |
| 4 | "`ollama run <model>` downloads a model and opens a chat with it" | 2 | FAIL | S2 says only "Run and chat with Gemma 4" (`ollama run gemma4`). S2 and the official CLI page (docs.ollama.com/cli) do not say that `ollama run` downloads a model. The CLI page lists "Download a model" under `ollama pull`. An official source for the automatic download was not found (search found only third-party pages). |
| 5 | Ollama has a REST API to run and manage models | 2 | PASS | "Ollama has a REST API for running and managing models." |
| 6 | `vllm serve <model>` starts an HTTP server that supports OpenAI APIs | 4 | PASS | "vLLM provides an HTTP server that is compatible with many interfaces!" / "We currently support the following OpenAI APIs:" / `vllm serve NousResearch/Meta-Llama-3-8B-Instruct` |
| 7 | Local API at `http://localhost:11434/api`; OpenAI-compatible at `/v1` | 3 | PASS | Base URL table: "http://localhost:11434/api", OpenAI compatibility "http://localhost:11434/v1" |
| 8 | Local requests need no API key | 3 | PASS | "Cloud requests need an API key. Local requests do not." |
| 9 | Many test tools only need a new base URL, because the API looks like the OpenAI API | 3 | PASS (note) | Follows from row 7 ("OpenAI compatibility"). Reasoning, not a new fact |
| 10 | After sign-in, the local server can also send requests to cloud models | 3 | PASS | "To use cloud models through your local server, sign in to Ollama" |
| 11 | A model card is the `README.md` of the repo, with metadata at the top | 5 | PASS | "You can find a model card as the `README.md` file in any model repo." / "a YAML section at the top that contains metadata" |
| 12 | It should describe intended uses, limits, training data, eval results; the page shows the license | 5 | PASS | "its intended uses & potential limitations" / "which datasets were used to train your model" / "the model's evaluation results" / "Displaying the model's license." |
| 13 | Mistral-7B-Instruct-v0.3 has no moderation mechanisms | 9 | PASS | "It does not have any moderation mechanisms." |
| 14 | Ollama: MIT license; downloads for macOS, Windows, Linux; Docker image | 2 | PASS | "MIT license" / installers for macOS, Windows, Linux / "The official Ollama Docker image `ollama/ollama` is available on Docker Hub." |
| 15 | Hub: a custom license shows as `other` with a name and a link | 5 | PASS | "specify a custom license by adding `other` as the license value and specifying the name and a link" |
| 16 | Llama 3: separate license from Meta above 700 million MAU | 6 | PASS | "greater than 700 million monthly active users ... you must request a license from Meta" |
| 17 | Llama 3: show "Built with Meta Llama 3"; follow the Acceptable Use Policy | 6 | PASS | "prominently display 'Built with Meta Llama 3'" / "adhere to the Acceptable Use Policy for the Llama Materials" |
| 18 | Gemma: Prohibited Use Policy; distributors must pass on the use limits; Gemma 4 has a separate license | 7 | PASS | "Gemma Prohibited Use Policy" / "You must include the use restrictions referenced in Section 3.2 as an enforceable provision in any agreement" / "For Gemma 4 terms, see the Gemma 4 license." |
| 19 | Qwen3-8B: Apache-2.0; Ollama, LM Studio, MLX-LM, llama.cpp for local use; vLLM for an OpenAI-compatible endpoint | 8 | PASS | "License: apache-2.0" / "Ollama, LMStudio, MLX-LM, llama.cpp, and KTransformers have also supported Qwen3" / "`vllm>=0.8.5` ... to create an OpenAI-compatible API endpoint" |
| 20 | Mistral-7B-Instruct-v0.3: Apache-2.0 | 9 | PASS | "License: apache-2.0" |
| 21 | Common mistakes and How to start: cites 2, 3, 5, 6, 7, 9 | 2-9 | PASS | Each cite supports the fact next to it. "One model for every job" is marked as tutorial advice. Step 2 cites S2 for `ollama run`, which S2 shows |
| 22 | Key words table | 1, 2, 4, 5, 6 | PASS | Agrees with the rows above |

Other checks:

| Check | Verdict | Note |
|---|---|---|
| Sources are official (OSI, Ollama GitHub and docs, vLLM docs, Hugging Face docs, Meta license page, Google terms, vendor model cards) | PASS | No blog, news, or forum |
| No prices | PASS | |
| The "Tutorial advice" tip has no `<Cite>` | PASS | |
| No copied text | PASS | No long shared word run found |
| Internal links exist | PASS | `/getting-started/models/`, `/automate/headless/`, `/ai-skills/ai-evals/`, `/ai-skills/ai-governance/` |

## FAILs and proposed fixes

| Row | Exact text | Proposed fix |
|---|---|---|
| 4 | "`ollama run <model>` downloads a model and opens a chat with it <Cite n={2} />." (How it works) | "`ollama run <model>` runs a model and opens a chat with it <Cite n={2} />." Make the same change in Layman ("downloads a model and opens a chat with it") and Bangla ("একটা মডেল ডাউনলোড করে তার সাথে চ্যাট খোলে" → "একটা মডেল চালায় আর তার সাথে চ্যাট খোলে"). Alternative: add docs.ollama.com/cli as a source and write "`ollama pull <model>` downloads a model, and `ollama run <model>` runs it and opens a chat". |

## Round 2 (2026-10-28)

The writer changed the sentence of row 4 in all 3 panels and added source 10 (Ollama docs, CLI reference, https://docs.ollama.com/cli). I fetched S10 again on 2026-10-28.

| Row | New text (Technical) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 4 | "`ollama pull <model>` downloads a model <Cite n={10} />, and `ollama run <model>` runs a model and opens a chat with it <Cite n={2} />." | 10, 2 | PASS | S10 lists `ollama pull gemma4` under "Download a model". S2: "Run and chat with Gemma 4" (`ollama run gemma4`) |
| - | S10 is official (docs.ollama.com) and is cited | 10 | PASS | Source 10 is the 10th entry of `page.sources`. Cite 10 is used in all 3 panels |
| - | How to start step 2 ("run one small model with `ollama run <model>`") | 2 | PASS | Not changed. S2 supports it |

The Layman text is the same as Technical. The Bangla text ("`ollama pull <model>` একটা মডেল ডাউনলোড করে ... `ollama run <model>` একটা মডেল চালায় আর তার সাথে চ্যাট খোলে") has the same facts and cites.

Open FAILs: 0
