# Fact check: AI/ML Testing, Prompt Engineering Fundamentals

Page: `content/ai-ml-testing/prompt-engineering-basics.mdx` (data: `scripts/ai_ml_testing_pages_p1b.py`). Checker: an agent that did not write the page. Date: 2026-11-02. Each source was opened on this date.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview | yes (301 to platform.claude.com) | Anthropic docs |
| 2 | https://arxiv.org/abs/2201.11903 | yes | Paper by its authors (Wei et al.) |
| 3 | https://arxiv.org/abs/2203.11171 | yes | Paper by its authors (Wang et al.) |
| (old 4) | https://www.anthropic.com/engineering/evaluating-ai-systems | yes, but wrong page | FAIL, fixed: the URL is "Challenges in evaluating AI systems", not "Define success criteria and build evaluations". Removed from this page; its claims now cite source 1. |

Each source 1 to 3 is cited at least one time. Each cite number has a source.

## Claims (Technical text)

| # | Claim | Cite | Verdict | Quote from the source |
|---|---|---|---|---|
| 1 | Anthropic's overview says: be clear and direct, give context, define the output format, give examples. | 1 | FAIL, fixed: the overview is now an index page; it does not say "define the output format". Now: the overview points to techniques "from clarity and examples to XML structuring, role prompting, and prompt chaining". The four-part list is labelled the tutorial's own. | "from clarity and examples to XML structuring, role prompting, thinking" |
| 2 | Two good examples beat a paragraph of instructions. | none | FAIL, fixed: no source. Now "in the tutorial's experience ... often do more". | Labeled. |
| 3 | The CoT paper found gains on arithmetic and symbolic tasks. | 2 | PASS (now also names commonsense and "large enough models") | "arithmetic, commonsense, and symbolic reasoning tasks" |
| 4 | A model in a language it handles less well hallucinates more, because confidence and fluency are separate. | none | FAIL, fixed: no source. Now tutorial advice: "Test every language you ship in, separately"; labelled as not a finding of the sources. | Labeled. |
| 5 | A prompt conditions the next-token prediction; a vague prompt gives the most likely answer for a vague context. | none | PASS as labelled tutorial explanation ("the tutorial's own view"). | Labeled. |
| 6 | A format instruction makes the format the most likely continuation (cited to source 1). | 1 | FAIL, fixed: source 1 does not say this. Cite removed; paragraph is in the labelled tutorial view; "works so reliably / rarely has to recover" softened to "tends to work well". | n/a |
| 7 | The model will follow the example rather than the words. | none | FAIL, fixed: no source. Now "can follow", inside the labelled tutorial view. | Labeled. |
| 8 | CoT: gains on multi-step arithmetic and symbolic reasoning. | 2 | PASS | "arithmetic, commonsense, and symbolic reasoning tasks" |
| 9 | Self-consistency samples several reasoning paths and takes the most consistent answer; adds accuracy. | 3 | PASS | "selects the most consistent answer" |
| 10 | Self-consistency adds cost. | 3 | PASS (it samples several paths instead of one greedy decode; now "more model calls") | "samples a diverse set of reasoning paths" |
| 11 | A model is stronger in languages it saw most data in; weakness shows as fabricated specifics. | none | FAIL, fixed: no source. Now "In the tutorial's view, quality can differ between languages". | Labeled. |
| 12 | A prompt change needs before-and-after measurement (cited to old source 4). | 4 | FAIL, fixed: old source 4 does not say this. Now cites source 1: the guide assumes success criteria and empirical tests first. | "Some ways to empirically test against those criteria" |
| 13 | Code: prompt template, variants dict, per-language loop. | none | PASS: plain Python; `evaluate`, `prompt_for`, `EN_CASES` are placeholders, not a library API. | n/a |
| 14 | Mistake 2: "Return JSON" is weaker than one example (cited to source 1). | 1 | FAIL, fixed: not in source 1. Now "often weaker", labelled tutorial advice; cite now supports only "the overview lists examples among its core techniques". | "from clarity and examples" |
| 15 | Mistake 3: put the instruction after a long context. | none | FAIL, fixed: unsourced claim. Now "In the tutorial's experience, it helps". | Labeled. |
| 16 | Mistake 4: when examples and instruction disagree, the model follows the example. | none | FAIL, fixed: absolute claim with no source. Now "often follows". | Tutorial advice. |
| 17 | Mistake 6: a fluent wrong justification is a common failure (cite 2). | 2 | FAIL, fixed: the paper does not say "common". Now: "The paper itself notes that there is no guarantee that the reasoning path is correct". | "there is no guarantee of correct reasoning paths" |
| 18 | Tip: "never translate the prompts but keep the expected answers in English". | none | FAIL, fixed: the sentence could be read as "never translate the prompts". Now: "Do not translate only the prompts and leave the expected answers in English." | Tutorial advice. |
| 19 | Key words: definitions of prompt, few-shot, CoT, self-consistency. | 2, 3 | PASS | "selects the most consistent answer" |

No prices. No real names in new text.

Open FAILs: 0
