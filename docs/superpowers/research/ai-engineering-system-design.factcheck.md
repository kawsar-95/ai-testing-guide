# Fact-check: content/ai-engineering/system-design.mdx

Checked 2026-10-28 by an agent that did not write the page. All 6 sources were fetched fresh as text. The quotes of the research notes were not trusted. Each quote below is from the fetched text.

Copy check: `python3 scripts/linux_overlap.py content/ai-engineering/system-design.mdx <raw-dir>` over the 6 fetched texts reports no copied word run.

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Find the simplest solution that works; add complexity only when needed | 1 | PASS | "we recommend finding the simplest solution possible, and only increasing complexity when needed." |
| 2 | Sometimes that means no agentic system at all | 1 | PASS | "This might mean not building agentic systems at all." |
| 3 | Agentic systems often give better task results for more latency and cost | 1 | PASS | "Agentic systems often trade latency and cost for better task performance" |
| 4 | Building block: augmented LLM = model with retrieval, tools, memory | 1 | PASS | "The basic building block of agentic systems is an LLM enhanced with augmentations such as retrieval, tools, and memory." |
| 5 | Workflow: LLM and tools run through predefined code paths (table, Key words) | 1 | PASS | "Workflows are systems where LLMs and tools are orchestrated through predefined code paths." |
| 6 | Agent: the LLM directs its own process and tool use (table, Key words) | 1 | PASS | "Agents, on the other hand, are systems where LLMs dynamically direct their own processes and tool usage" |
| 7 | Workflows give predictability and consistency for well-defined tasks | 1 | PASS | "workflows offer predictability and consistency for well-defined tasks" |
| 8 | Reference-shape diagram, read-only tools | none | PASS | Marked "Tutorial's own view". |
| 9 | RAG combines a model's own knowledge with an outside index that a retriever searches (also Key words) | 2 | PASS | "models which combine pre-trained parametric and non-parametric memory ... the non-parametric memory is a dense vector index of Wikipedia, accessed with a pre-trained neural retriever." |
| 10 | A model alone has trouble updating knowledge and showing where an answer came from | 2 | PASS | "providing provenance for their decisions and updating their world knowledge remain open research problems." |
| 11 | An index of your documents addresses both | 2 | PASS | "Pre-trained models with a differentiable access mechanism to explicit non-parametric memory can overcome this issue" |
| 12 | Routing classifies an input and sends it to a specialized task | 1 | PASS | "Routing classifies an input and directs it to a specialized followup task." |
| 13 | Without routing, tuning for one input kind can hurt others | 1 | PASS | "Without this workflow, optimizing for one kind of input can hurt performance on other inputs." |
| 14 | A repeated prefix can be cached; this cuts processing time and cost (also Key words) | 3 | PASS | "allowing resuming from specific prefixes in your prompts. This significantly reduces processing time and costs for repetitive tasks" |
| 15 | Default cache lifetime 5 minutes; 1-hour lifetime available | 3 | PASS | "By default, the cache has a 5-minute lifetime." and "Anthropic also offers a 1-hour cache duration" |
| 16 | Message Batches API for non-instant jobs (asynchronous; Key words) | 4 | PASS | "well-suited to tasks that do not require immediate responses" and "submit multiple requests together for asynchronous processing" |
| 17 | Batch charges 50% of the standard price / half price | 4 | PASS | "All usage is charged at 50 percent of the standard API prices." |
| 18 | A batch ends when all requests finish or after 24 hours | 4 | PASS | "You can access batch results when all messages have completed or after 24 hours, whichever comes first. Batches expire if processing does not complete within 24 hours." |
| 19 | Model API has limits in requests and tokens per minute | 6 | PASS | "measured in requests per minute (RPM), input tokens per minute (ITPM), and output tokens per minute (OTPM)" |
| 20 | Your design needs a plan for overload too | none | FAIL | Advice given as fact, no cite and not marked. |
| 21 | Degraded responses: less accurate or less data, cheaper to compute, e.g. search part of the data (also Key words) | 5 | PASS | "serve degraded responses: responses that are not as accurate as or that contain less data than normal responses, but that are easier to compute. For example: Instead of searching an entire corpus" |
| 22 | Under extreme overload, the service may have to return errors | 5 | PASS | "under extreme overload, the service might not even be able to compute and serve degraded responses. At this point it may have no immediate option but to serve errors." |
| 23 | Per-customer quotas so one client cannot take all capacity | 5 | PASS | "define per-customer quotas according to these agreements" |
| 24 | For an AI app, a degraded response can be a smaller model, fewer chunks, or a retry message | none | FAIL | An applied example with no cite. Only the next sentence was marked as the tutorial's own view. |
| 25 | Decide the degraded mode in the design | none | PASS | Marked "Tutorial's own view". |
| 26 | Example: company, 20,000 articles, 50,000 users, version 1 with 13 tools | none | PASS | An invented scenario, not a claim about a real system. |
| 27 | Example steps 1 to 4: router, RAG with source article, cached prefix, batch at half price | 1, 2, 3, 4 | PASS | Same mechanisms as claims 12, 9 and 10, 14, 17. |
| 28 | Example step 5: on 429s, serve a degraded answer | 5, 6 | PASS | Rate limits: "If you exceed any of the rate limits, you will get a [429 error]"; SRE quote of claim 21. |
| 29 | Mistake: an agent for a fixed task; a workflow is more predictable | 1 | PASS | Quote of claim 7. |
| 30 | Mistake: one prompt for every question; routing separates them | 1 | PASS | Quote of claim 13. |
| 31 | Mistake: no source; a model alone cannot easily show where an answer came from | 2 | PASS | Quote of claim 10. The sentence about the tester follows from it. |
| 32 | Mistake: bulk jobs pay full price, batch charges 50% | 4 | PASS | Quote of claim 17. |
| 33 | Mistake: under heavy load a service may only return errors | 5 | PASS | Quote of claim 22. The advice after it is marked as the tutorial's own view. |
| 34 | Mistake: cache lives 5 minutes; rarer traffic pays to write without reading | 3 | PASS | "By default, the cache has a 5-minute lifetime." and "Cache write tokens with a 5-minute TTL are 1.25 times the base input tokens price." |
| 35 | Tester tips | none | PASS | The callout says "These test ideas are the tutorial's own advice." |

Claims checked: 35. FAILs: 2 (claims 20 and 24).

## Fixes

| # | Fix |
|---|---|
| 20 | Added `<Cite n={5} />` to the sentence. SRE: "Gracefully handling overload conditions is fundamental to running a reliable serving system." |
| 24 | Moved the "Tutorial's own view:" marker to the start of the AI-app example, so it covers the example and the advice. Same change in Layman and Bangla. |

## Re-check

| # | Verdict | Quote or reason |
|---|---|---|
| 20 | PASS | Source 5: "Gracefully handling overload conditions is fundamental to running a reliable serving system." |
| 24 | PASS | The sentence now starts with "Tutorial's own view: for an AI app, ...". |

Open FAILs: 0
