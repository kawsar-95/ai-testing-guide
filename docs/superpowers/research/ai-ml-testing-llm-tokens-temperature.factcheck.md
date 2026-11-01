# Fact check: AI/ML Testing, Tokens, Probabilities, and Temperature

Page: `content/ai-ml-testing/llm-tokens-temperature.mdx`. Data: `scripts/ai_ml_testing_pages_p1a.py`. Checker: an agent that did not write the page. Date: 2026-11-02. Each source was opened on this date.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://docs.anthropic.com/en/docs/build-with-claude/token-counting | yes (301 to platform.claude.com) | Anthropic docs |
| 2 | https://docs.anthropic.com/en/api/messages | yes (301 to platform.claude.com) | Anthropic docs. Title in the library ("Temperature") does not match: the page no longer documents `temperature`. |
| 3 | https://arxiv.org/abs/2307.03172 | yes | arXiv paper by its authors |

Each source 1–3 is cited at least one time. Each cite number has a source. `anthropic-prompt` was removed from the list (no claim it supports).

## Claims (Technical text)

| # | Claim | Cite | Verdict | Quote from the source |
|---|---|---|---|---|
| 1 | Token counting returns the number of tokens a text uses; count depends on the text, not a fixed rule. | 1 | FAIL, fixed: the docs call the count an estimate, and it depends on the model too. Now: "gives the number of input tokens ... the docs call that number an estimate", plus the 30% tokenizer fact. | "The token count is an **estimate**." |
| 2 | Claude 4.7 and later: about 30% more tokens for the same text (added). | 1 | PASS | "approximately 30 percent more tokens than on earlier models" |
| 3 | Embedding, probability per token, one token at a time. | none | PASS: labeled tutorial's own explanation. | n/a |
| 4 | Temperature 0 takes the top token; above 0 flattens the distribution. | 2 | FAIL, fixed: S2 no longer documents `temperature`. Cite removed; labeled as the tutorial's own simplified explanation. | n/a |
| 5 | 500 English words vs 500 words of code or Bengali give very different token counts. | none | FAIL, fixed: no source. Now: cost and rate limits are reasons to count (cited), and "measure your own text, in each language and format". | "Proactively manage rate limits and costs" |
| 6 | Counting endpoint lets an app measure a prompt before sending it. | 1 | PASS | "before you send it to Claude" |
| 7 | "The generation loop is a repetition of three steps" with four steps listed. | none | FAIL, fixed: now "four steps" in all 3 voices; loop labeled tutorial's own model. | n/a |
| 8 | At temperature 0 the draw is argmax. | 2 | FAIL, fixed: not in S2. Now "close to argmax", labeled tutorial's own, no cite. | n/a |
| 9 | `max_tokens` caps output; hitting it truncates; `stop_reason` shows it. | 2 | PASS (cite moved here) | "we exceeded the requested `max_tokens` or the model's maximum" |
| 10 | System prompt is counted in input tokens on every turn. | 3 → 1 | FAIL, fixed: was cited to the prompt engineering overview, which does not say it. Now cited to token counting, which counts `system` with the messages. | "including support for system prompts" |
| 11 | Long-context research: models attend reliably to beginning and end; "put the important part last". | anthropic-prompt → 3 | FAIL, fixed: wrong source; and the paper says beginning or end, not "last". Now cites the paper; advice is "do not bury it in the middle". | "highest when relevant information occurs at the beginning or end" |
| 12 | Code: `client.messages.count_tokens(model=..., messages=[...])`, `count.input_tokens`. | none | FAIL, fixed: `PROMPT` was undefined in the snippet. Added `PROMPT = "..."`. Method and field match S1. | `client.messages.count_tokens(`, `"input_tokens"` |
| 13 | Code: `temperature=temperature` with `claude-sonnet-4-6`. | none | PASS: Sonnet 4.6 still accepts `temperature` (Sonnet 5.5 migration guide says remove it only when moving off 4.6 or earlier). | "Claude Sonnet 4.6 or earlier ... Remove `temperature`" |
| 14 | "At 0 it is often 1, at 1 it is usually 5" distinct answers. | none | FAIL, fixed: no source. Now "Expect fewer distinct answers at 0 than at 1; the exact numbers depend on the model and the prompt." | n/a |
| 15 | Code: `assert message.stop_reason != "max_tokens"`. | none | FAIL, fixed: `LONG_QUESTION` undefined; added. Added that with `max_tokens=60` the assert is likely to fail on purpose. `stop_reason` value matches S2. | `"max_tokens"` |
| 16 | "The most common false pass in an LLM test suite". | none | FAIL, fixed: no source; now "a common false pass". | n/a |
| 17 | Mistake 1: "200,000 tokens is not 200,000 words; for prose it is more, for code and Bengali far fewer". | 1 | FAIL, fixed: "for prose it is more" is wrong (prose uses more than one token per word on average) and not in S1. Now: words that fit depend on text and tokenizer; 30% more tokens on Claude 4.7+. | "approximately 30 percent more tokens" |
| 18 | Mistake 3: assert on `stop_reason`. | 2 | PASS | `stop_reason` values list |
| 19 | Mistake 4: system prompt is part of the input. | anthropic-prompt → 1 | FAIL, fixed: re-cited to token counting. | "including support for system prompts" |
| 20 | Mistake 5: the middle is least reliably attended; put the instruction at the end. | none → 3 | FAIL, fixed: cite added; advice now "start or the end". | "significantly degrades when models must access relevant information in the middle" |
| 21 | Mistake 6: temperature 0 reduces variation but does not remove it. | none | FAIL, fixed: no library source. Now advice: "Check it with repeated runs before a test depends on it." | n/a |
| 22 | Tips, Key words. | none | PASS: tutorial advice; tip about instruction position changed to "start or the end" to match the paper. | n/a |

## Notes

- Wanted source (not added): "Claude Opus 5.5 migration guide", Anthropic (Claude API docs), https://platform.claude.com/docs/en/models/opus-5-5/migration-guide. It says sampling parameters (`temperature`, `top_p`, `top_k`) are removed on the newest Claude models, and that `temperature = 0` "never guaranteed identical outputs". With it, the page could cite the temperature-0 behavior and warn that the code fails with a 400 error on Sonnet 5 and later models.
- Library fix wanted: `anthropic-temp` title is "Temperature", but the page is the Messages API reference and no longer documents `temperature`.

Open FAILs: 0
