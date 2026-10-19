# System Architecture Foundations Module: Design

Date: 2026-10-20. Status: approved by the owner in chat ("start", be quick).

## 1. Goal

A new module that teaches the building blocks of system architecture in plain words, for QA engineers and SDETs. The base is the owner's notes (`docs/superpowers/research/architecture-owner-notes.md`) and the owner's 19 images. The owner owns both and allows their use on the site. If an official source explains a fact better, the page uses and cites that source.

Success: a reader can learn one topic in about 5 min, see the owner's diagram, understand when the idea matters and what breaks, and get test ideas. The reader can tick each topic and each practice question as done.

## 2. Routes and data

The module is at `/architecture/`. It has 21 routes: the home, 19 topic pages, and the practice page.

`lib/architecture/topics.ts` is the one ordered list (slug, title, description). It drives the sidebar, the home page, prev/next, search (group `architecture`), the sitemap, the precache, and the progress ids. `lib/architecture/ui.ts` has the English strings. `scripts/architecture-route-map.json` is the identity map of the 21 routes.

| # | Slug | Title (the `#` heading) | Image |
|---|---|---|---|
| 01 | `why-system-design` | Why System Design Matters | `01-why-system-design.webp` |
| 02 | `requirements` | Functional and Non-functional Requirements | `02-requirements.webp` |
| 03 | `single-server` | Single Server Architecture | `03-single-server.webp` |
| 04 | `vertical-scaling` | Vertical Scaling | `04-vertical-scaling.webp` |
| 05 | `horizontal-scaling` | Horizontal Scaling | `05-horizontal-scaling.webp` |
| 06 | `load-balancer` | Load Balancer | `06-load-balancer.webp` |
| 07 | `stateless-service` | Stateless Service | `07-stateless-service.webp` |
| 08 | `object-storage` | File Storage and Object Storage | `08-object-storage.webp` |
| 09 | `cdn` | CDN for Static Content | `09-cdn.webp` |
| 10 | `cloud-architecture` | Basic Cloud Architecture | `10-cloud-architecture.webp` |
| 11 | `database-replication` | Database Replication and Read/Write Splitting | `11-database-replication.webp` |
| 12 | `caching` | Caching with Redis | `12-caching.webp` |
| 13 | `distributed-cache` | Distributed Cache | `13-distributed-cache.webp` |
| 14 | `rate-limiting` | Rate Limiting | `14-rate-limiting.webp` |
| 15 | `message-queue` | Message Queue and Async Processing | `15-message-queue.webp` |
| 16 | `idempotency` | Idempotency | `16-idempotency.webp` |
| 17 | `api-gateway` | API Gateway | `17-api-gateway.webp` |
| 18 | `monolith-microservices` | Monolith, Modular Monolith, and Microservices | `18-monolith-microservices.webp` |
| 19 | `observability` | Monitoring and Observability | `19-observability.webp` |
| 20 | `practice` | Practice Questions | none |

The images are in `public/images/architecture/` (WebP, 1400 px wide or less).

## 3. Topic page shape

File: `content/architecture/<slug>.mdx`. The order is fixed:

```mdx
export const metadata = { title: '…', description: '…' }
export const page = {
  updated: '2026-10-20',
  sources: [
    { title: '…', publisher: '…', url: 'https://…', accessed: '2026-10-20' },
  ],
}

# <Title from the table>

<Lede: one paragraph, plain words, one everyday analogy.>

<PageMeta />

## In plain words
<What it is, 2–4 short paragraphs. Facts have <Cite n={k} />.>

<MdxImage src="/images/architecture/NN-slug.webp" alt="<describe the diagram>" />

## When you need it
<A list.>

## A real-life example
<The owner's LMS story, retold in plain words. It is the tutorial's own example: no <Cite>.>

## Common mistakes
<A list. Each item says what goes wrong and why.>

## What a tester can check
<Callout type="tip" title="Tutorial advice"> with 4–6 concrete test ideas. No <Cite>.</Callout>

## Key words
| Word | Meaning |
```

Rules:

- Length: about 500–900 words of prose for each page. Short sentences, common words (ASD-STE100 style). Explain every term the first time.
- Keep the owner's ideas and examples. You can reword, reorder, and add a missing important point.
- Components: `Callout`, `Cite`, `MdxImage`, `InfoCard`, `CardGrid`, GFM tables, fenced code blocks (`text` for diagrams). No inline `style`.
- MDX gotcha: when a component body ends in a list, put the closing tag at column 0.
- Internal links: `/architecture/<slug>/`.

## 4. Sources

- The owner's notes are the base text. They are not a public source, so they get no `<Cite>`.
- Each factual claim (a definition, a behavior, a status code, a header, a product feature, a number) has a `<Cite n>` to an official source: vendor docs (AWS, Google Cloud, Microsoft Azure Architecture Center, Redis, NGINX, Cloudflare docs or Learning Center, Stripe docs), IETF RFCs, MDN, OpenTelemetry, Prometheus, and the Google SRE books (sre.google). No blogs, forums, Medium, or AI summaries.
- The LMS examples, the "What a tester can check" tips, and the advice in "Common mistakes" are the tutorial's own words. They need no cite. A callout with the tutorial's own advice says so in its title.
- Each source in `page.sources` has at least 1 cite. Each cite points to a source.
- Research notes: `docs/superpowers/research/architecture-<slug>.md`: the sources (S1, S2, …) and a claims table with a short quote for each claim.
- Fact-check report: `docs/superpowers/research/architecture-<slug>.factcheck.md`: one row per cited claim, with the cite, PASS or FAIL, and the quote. It ends with `Open FAILs: N`. An agent that did not write the page writes the report.
- Done: a page is done only when its report ends with `Open FAILs: 0`.

## 5. Practice page

`content/architecture/practice.mdx` has the owner's 30 questions, in the owner's order. Each question is one component:

```mdx
<PracticeQuestion n={1} topic="single-server" question="Design a simple LMS for 500 students. Which components will you use?">
Model answer in Markdown (3–8 sentences or a short list). Facts have <Cite n={k} />.
</PracticeQuestion>
```

- `topic` is the slug of the topic page that the question practices. `npm test` checks it.
- The component shows the number, the question, a link to the topic page, the model answer in a closed `<details>`, and a "done" tick.
- The page has the normal `page.sources`, `<PageMeta />`, and a lede. It has one `##` heading for each group of questions: `## Basics` (1–5), `## Caching, CDN, and databases` (6–10), `## Reliability and async work` (11–16), `## Security and gateways` (17–20), `## Monitoring` (21–25), `## Trade-offs` (26–30).

## 6. Progress

The shared store in `lib/prep/progress.ts` with the `localStorage` key `architecture-progress`.

- Topic ids: the 19 topic slugs. Each topic page shows a "Mark this topic as done" button after the text. The home shows "N of 19 topics done" and a tick for each done topic. The sidebar shows a tick too.
- Practice ids: `practice-01` to `practice-30`. The practice page shows "N of 30 questions done".

## 7. Shell

- Header link "Architecture". `NavList` gets a fourth section with `ArchitectureSidebarList`.
- `app/(site)/architecture/page.tsx` (home) and `app/(site)/architecture/[topic]/page.tsx` (topic and practice), like the System Design module: the meta line, the Sources list, the reading progress, back to top, and prev/next.
- Search, sitemap, and the PWA precache include the 21 routes.
- Checks: `check_routes.py`, `check_outline.py`, and `check_sources.py` read the new route map. `check_sources.py out` must print `OK 70 pages checked, 0 skipped`.

## 8. Tests

`tests/architecture.test.ts`: 20 entries in order, unique slugs, each has an MDX file and each MDX file has an entry, each image `src` is a file in `public/`, each `PracticeQuestion` has a known `topic` and numbers 1–30 appear one time each, the route map agrees with the list, and search and precache include the routes.
