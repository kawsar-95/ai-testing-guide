# Fact check: AI/ML Testing, Prompt Testing

Page: `content/ai-ml-testing/prompt-testing.mdx` (data: `scripts/ai_ml_testing_pages_p1b.py`). Checker: an agent that did not write the page. Date: 2026-11-02. Each source was opened on this date.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview | yes (301 to platform.claude.com) | Anthropic docs |
| 2 | https://owasp.org/www-project-top-10-for-large-language-model-applications/ | yes | OWASP |
| (old 3) | https://www.anthropic.com/engineering/evaluating-ai-systems | yes, but wrong page | FAIL, fixed: the page is "Challenges in evaluating AI systems". Removed from this page. |

Each source 1 and 2 is cited at least one time. Each cite number has a source.

## Claims (Technical text)

| # | Claim | Cite | Verdict | Quote from the source |
|---|---|---|---|---|
| 1 | The input space of a natural-language interface is unbounded; test classes of inputs. | none | PASS as tutorial method. | n/a |
| 2 | The 5 classes (happy path, edge cases, ambiguity, out of scope, adversarial). | none | PASS as tutorial method. | n/a |
| 3 | A documented failure record makes the prompt change reviewable (cited to old source 3). | old 3 | FAIL, fixed: the old source does not say this. Cite removed; the sentence is labelled "This method is the tutorial's own." | Labeled. |
| 4 | Anthropic's guidance recommends being explicit, giving context, defining the format, and gives examples of where models reliably fail. | 1 | FAIL, fixed: the overview does not list these and has no list of "where models reliably fail". Now: the overview sets the order success criteria, empirical test, draft prompt. | "Some ways to empirically test against those criteria" |
| 5 | Taxonomy row "language ... sign language". | none | FAIL, fixed: sign language is not a text input of an LLM feature. Removed in all 3 voices. | n/a |
| 6 | One input per row usually finds the failure; the catalogue is the regression suite. | none | PASS as tutorial method. | n/a |
| 7 | Slot attacks (empty, oversized, contradicting, malformed). | none | PASS as tutorial method. | n/a |
| 8 | OWASP lists prompt injection as the first risk for LLM applications. | 2 | PASS | "LLM01: Prompt Injection" |
| 9 | OWASP distinguishes the direct form from the indirect form. | 2 | FAIL, fixed: the cited page does not describe the two forms. Now: OWASP lists it first as "manipulating an LLM through crafted inputs" (cited); the direct/indirect split is labelled as the tutorial's own terms. Wanted source: the OWASP LLM01 risk page (see the final report). | "Manipulating LLMs via crafted inputs" |
| 10 | The failure record must name the layer (retriever example). | none | PASS as tutorial method. | n/a |
| 11 | Code: `FAILURE_CASES` list, pytest-style test function, YAML-like failure row. | none | PASS: plain Python; `run_model`, `matches`, `record` are placeholders. The failure row puts an injection inside a "form" case and a delimiter fix; no tool option is claimed. | n/a |
| 12 | Common mistakes 1 to 6. | none | PASS as tutorial advice; no tool fact. | n/a |
| 13 | Tip: a cheaper model that passes the catalogue is a cost win. | none | PASS: no price given. | n/a |
| 14 | Key words: direct and indirect prompt injection. | none | PASS: definitions match the tutorial terms in the text. | n/a |

No prices. No real names in new text.

Open FAILs: 0
