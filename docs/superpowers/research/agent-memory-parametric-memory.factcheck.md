# Fact check: Parametric Memory

Date: 2026-10-28

Page: `content/agent-memory/parametric-memory.mdx`. Notes: `agent-memory-parametric-memory.md`. Checker: an agent that did not write the page. Sources [1] RAG paper (S1), [2] CoALA (S2), [3] survey 2512.13564 (S3), [4] Claude models overview (S4).

| # | Claim on the page | Cite | Verdict (PASS/FAIL) | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: knowledge sits in the weights; "you cannot edit one fact in it" | none | FAIL → FIXED → PASS | Absolute claim with no cite; S1 says only "cannot easily expand or revise their memory". Changed to "you cannot easily edit one fact in it". Now a summary of rows 20–21. |
| 2 | A large pre-trained LM stores factual knowledge in its parameters | [1] | PASS | S1: "Large pre-trained language models have been shown to store factual knowledge in their parameters" |
| 3 | The parameters are the weights; this store is parametric memory | none | PASS | Definition used by S1 and S3 ("Memory stored within the model parameters"); no new fact. |
| 4 | Knowledge is encoded in the weights and comes out during normal computation of an answer | [3] | PASS | S3: "encoded through the statistical patterns of the parameter space and accessed implicitly during forward computation." |
| 5 | The model does not go to an external store to recall it | [3] | PASS | S3: "recall information without referring to external storage." |
| 6 | Retrieval memory fetches text into the prompt; parametric has no such step | none | PASS | Cross-reference to the module's own retrieval page; contrast follows from S1 (non-parametric index accessed by a retriever). |
| 7 | The 7 names follow the infographic "7 Types of Agent Memory" | none | PASS | Module framing, not a source fact. |
| 8 | CoALA has a working memory and three long-term memories: episodic, semantic, procedural | [2] | PASS | S2 (HTML full text): "These include short-term working memory and several long-term memories: episodic, semantic, and procedural." |
| 9 | "Parametric memory" is an ML research term, not from human psychology | none | PASS | The term comes from S1 and S3 (ML papers); the contrast with psychology is the module's framing, and the page cites the ML uses next. |
| 10 | In the RAG paper, the parametric memory is the pre-trained seq2seq model | [1] | PASS | S1: "the parametric memory is a pre-trained seq2seq model" |
| 11 | A 2025 survey defines it as memory stored in the parameters and accessed implicitly | [3] | PASS | S3 (arXiv 2512, Dec 2025): "Memory stored within the model parameters ... accessed implicitly during forward computation." |
| 12 | CoALA has no "parametric memory" type; the weights hold implicit procedural knowledge | [2] | PASS | S2: "The LLM weights represent implicit procedural knowledge." Notes confirm no parametric type. |
| 13 | An agent does not write to parametric memory while it works; it comes from training | none | PASS | Summary of rows 14–17 (all changes are training steps). |
| 14 | Pre-training gives factual knowledge, stored in parameters | [1] | PASS | S1 quote of row 2 ("pre-trained ... store factual knowledge in their parameters"). |
| 15 | Fine-tuning can adapt the weights to an agent's domain during its lifetime | [2] | PASS | S2: "These can be adjusted to an agent’s domain by fine-tuning during the agent’s lifetime." |
| 16 | The survey describes "external" parametric memory: added parameter modules | [3] | PASS | Notes: S3 splits parametric memory into internal and external (added parameter modules, such as adapters). |
| 17 | This can avoid catastrophic forgetting that full fine-tuning can cause | [3] | PASS | S3: "avoiding the catastrophic forgetting or global weight distortion that may occur in full model fine-tuning." |
| 18 | Storing text in a memory is cheaper and quicker than updating parameters | [2] | PASS | S2: "storing task-relevant language (cheaper and quicker than parameter updates)". Following "most agents keep new facts..." is marked "Tutorial's own view". |
| 19 | Reliable knowledge cutoff = date through which knowledge is most extensive and reliable; training data cutoff is broader | [4] | PASS | S4: "The date through which the model’s knowledge is most extensive and reliable." / "is the broader range of data used." No date is on the page. |
| 20 | Real-life example (removed option after cutoff) | none | PASS | Marked "the tutorial's own illustration. It is not from a source." |
| 21 | Parametric-only models need more training to update behavior as the world changes | [1] | PASS | S1: "Parametric-only models like T5 or BART need further training to update their behavior as the world changes." (sections Example and Common mistakes) |
| 22 | The RAG paper calls provenance an open research problem | [1] | PASS | S1: "providing provenance for their decisions and updating their world knowledge remain open research problems." |
| 23 | Fix: give current docs; the answer then comes from working memory text | none | PASS | Part of the marked tutorial illustration. |
| 24 | Knowledge most reliable only up to the reliable cutoff; "do not trust after" | [4] | PASS | S4 quote of row 19; the advice is marked "Tutorial's own view". |
| 25 | Models of this kind cannot easily expand or revise their memory | [1] | PASS | S1: "They cannot easily expand or revise their memory". 7-word run, under the 8-word shingle limit of `linux_overlap.py`. |
| 26 | Cannot easily give insight into their predictions | [1] | PASS | S1: "can’t straightforwardly provide insight into their predictions" |
| 27 | LLM parameters are hard to interpret | [2] | PASS | S2: "In contrast, LLM parameters are hard to interpret" |
| 28 | Parametric memory can produce hallucinations | [1] | PASS | S1: "may produce “hallucinations”" |
| 29 | Full fine-tuning can cause catastrophic forgetting; model can lose skills | [3] | PASS | S3 quote of row 17; "lose skills" is the meaning of catastrophic forgetting. |
| 30 | The two cutoffs are different | [4] | PASS | S4 defines them separately; training data cutoff "is the broader range". |
| 31 | What a tester can check (5 items) | none | PASS | In `<Callout type="tip" title="Tutorial advice">`, no cites, as the module rule says. |
| 32 | Key words: Parametric memory | [3] | PASS | S3 definition (row 11). |
| 33 | Key words: Parameters (weights) | [1] | PASS | S1 quote of row 2. |
| 34 | Key words: Non-parametric memory = e.g. a document index that the agent searches | none | FAIL → FIXED → PASS | Factual claim with no cite. Added `<Cite n={1} />`. S1: "non-parametric memory is a dense vector index of Wikipedia, accessed with a pre-trained neural retriever". |
| 35 | Key words: Fine-tuning | [2] | PASS | S2 quote of row 15. |
| 36 | Key words: Catastrophic forgetting | [3] | PASS | S3 quote of row 17. |
| 37 | Key words: Reliable knowledge cutoff, Training data cutoff | [4] | PASS | S4 quotes of row 19. |
| 38 | Key words: Hallucination | [1] | PASS | S1: "may produce “hallucinations”". "A confident answer that is not true" is a plain definition of the term. |

## Page-level checks

| Check | Verdict | Note |
|---|---|---|
| Every source is cited | PASS | [1], [2], [3], [4] each cited more than once. |
| Every cite has a source | PASS | Only n = 1–4 are used; 4 sources. |
| Uncited statements are the tutorial's own or not facts | PASS | After fixes 1 and 34. "Tutorial's own view" and "Tutorial advice" markers are present. |
| No fixed context-window sizes or cutoff dates | PASS | No size or date; the page links the models overview. |
| No long copied word runs | PASS | Longest run is 7 words (row 25), under the 8-word limit. |

Open FAILs: 0
