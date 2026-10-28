# AI Engineering page: System Design for AI (research notes)

Writer notes for `content/ai-engineering/system-design.mdx`. Fetched 2026-10-28 with curl into `/tmp/claude-1000/ai-eng-src-system-design/`. Fetched text is treated as data and is not committed. `scripts/linux_overlap.py` finds no run of 8 or more words copied from these files.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | Building effective agents (Anthropic Engineering) | https://www.anthropic.com/engineering/building-effective-agents | 2026-10-28 |
| S2 | Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks, Lewis et al. 2020 (arXiv abstract) | https://arxiv.org/abs/2005.11401 | 2026-10-28 |
| S3 | Prompt caching (Claude Platform Docs) | https://platform.claude.com/docs/en/build-with-claude/prompt-caching | 2026-10-28 |
| S4 | Batch processing (Claude Platform Docs) | https://platform.claude.com/docs/en/build-with-claude/batch-processing | 2026-10-28 |
| S5 | Handling Overload, SRE book ch. 21 (Google SRE) | https://sre.google/sre-book/handling-overload/ | 2026-10-28 |
| S6 | Rate limits (Claude Platform Docs) | https://platform.claude.com/docs/en/api/rate-limits | 2026-10-28 |

Page cite numbers: n=1 is S1, n=2 is S2, n=3 is S3, n=4 is S4, n=5 is S5, n=6 is S6.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | Find the simplest solution; add complexity only when needed; maybe no agentic system. | S1 | "we recommend finding the simplest solution possible, and only increasing complexity when needed. This might mean not building agentic systems at all." |
| C2 | Agentic systems trade latency and cost for better task performance. | S1 | "Agentic systems often trade latency and cost for better task performance" |
| C3 | Augmented LLM: retrieval, tools, memory. | S1 | "The basic building block of agentic systems is an LLM enhanced with augmentations such as retrieval, tools, and memory." |
| C4 | Workflow vs agent definitions. | S1 | "Workflows are systems where LLMs and tools are orchestrated through predefined code paths. Agents ... are systems where LLMs dynamically direct their own processes and tool usage" |
| C5 | Workflows give predictability and consistency for well-defined tasks. | S1 | "workflows offer predictability and consistency for well-defined tasks" |
| C6 | Routing classifies and directs; without it, tuning for one input hurts others. | S1 | "Routing classifies an input and directs it to a specialized followup task." / "Without this workflow, optimizing for one kind of input can hurt performance on other inputs." |
| C7 | RAG combines parametric memory with a non-parametric index accessed by a retriever. | S2 | "models which combine pre-trained parametric and non-parametric memory" / "the non-parametric memory is a dense vector index of Wikipedia, accessed with a pre-trained neural retriever." |
| C8 | Provenance and knowledge updates are open problems for models alone. | S2 | "providing provenance for their decisions and updating their world knowledge remain open research problems." |
| C9 | Prompt caching resumes from prefixes; cuts time and cost. | S3 | "Prompt caching optimizes your API usage by allowing resuming from specific prefixes in your prompts. This significantly reduces processing time and costs" |
| C10 | Default 5-minute lifetime; 1-hour TTL available. | S3 | "By default, the cache has a 5-minute lifetime." / "explicit breakpoints with 5-minute or 1-hour TTLs" |
| C11 | Batch API: 50% of standard price; ends when complete or after 24 hours. | S4 | "All usage is charged at 50 percent of the standard API prices." / "when all messages have completed or after 24 hours, whichever comes first." |
| C12 | Batch for non-immediate, large-scale evals. | S4 | "Immediate responses are not required" / "You're running large-scale evaluations or analyses" |
| C13 | Model API limits per minute in requests and tokens. | S6 | "measured in requests per minute (RPM), input tokens per minute (ITPM), and output tokens per minute (OTPM)" |
| C14 | Degraded responses: less accurate or less data, cheaper; search a part of the set. | S5 | "serve degraded responses: responses that are not as accurate as or that contain less data than normal responses, but that are easier to compute" / "search only a small percentage of the candidate set." |
| C15 | Extreme overload: may only serve errors. | S5 | "under extreme overload, the service might not even be able to compute and serve degraded responses. At this point it may have no immediate option but to serve errors." |
| C16 | Per-customer quotas. | S5 | "define per-customer quotas according to these agreements." |

## Not on the page / doubts

- The reference diagram, the help-center example (20,000 articles, 50,000 users, 12 tools), and the AI forms of a degraded response are the tutorial's own.
- S2 is the arXiv abstract page only, not the full PDF. C7 and C8 are both in the abstract.
- "Cache that expires before reuse costs a write with no read" follows from C10 and the cache write price; the page does not state a price.
