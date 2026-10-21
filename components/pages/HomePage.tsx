import type { ReactNode } from "react";
import Link from "next/link";
import { CONTENTS_HOME } from "@/lib/contents";
import { COURSE_CARDS, START_STEPS, WHY_ITEMS } from "@/lib/home";
import { HOME_UI } from "@/lib/ui";
import { AiLogos } from "./AiLogos";
import { StatsRow } from "./StatsRow";

const LABEL = "font-mono text-[11px] font-medium uppercase tracking-[0.2em]";
const CARD = "rounded-2xl border border-border bg-bg-raised shadow-sm";

/** Render `text` with each backtick span as a small <code> element. */
function renderInlineCode(text: string): ReactNode[] {
  return text.split("`").map((part, i) =>
    i % 2 === 1 ? (
      <code key={i} className="rounded border border-border bg-bg-raised-2 px-1 py-px font-mono text-[0.85em]">
        {part}
      </code>
    ) : (
      part
    ),
  );
}

function SectionHeading({ id, eyebrow, title, sub }: { id: string; eyebrow: string; title: string; sub: string }) {
  return (
    <header className="max-w-2xl">
      <p className={`${LABEL} text-accent`}>{eyebrow}</p>
      <h2 id={id} className="mt-3 font-display text-[clamp(1.875rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.02em] text-balance text-text">
        {title}
      </h2>
      <p className="mt-3 text-[17px] leading-relaxed text-pretty text-text-dim">{sub}</p>
    </header>
  );
}

/** The landing page: the hero, the start steps, why this guide, and the course structure. */
export function HomePage() {
  return (
    <div>
      <section aria-labelledby="hero-heading" className="relative overflow-hidden border-b border-border">
        <div aria-hidden="true" className="hero-grid-bg" />
        <div className="relative z-10 mx-auto max-w-[1200px] px-4 pt-14 pb-14 sm:px-6 sm:pt-20 sm:pb-16">
          <p className={`${LABEL} text-accent`}>{HOME_UI.eyebrow}</p>
          <h1
            id="hero-heading"
            className="mt-4 max-w-4xl font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.025em] text-balance text-text"
          >
            <span className="block">
              <AiLogos />
              {HOME_UI.titleLine1}
            </span>
            <span className="block text-text-dim">
              {HOME_UI.titleLine2Before} <em className="hero-mark">{HOME_UI.titleMark}</em>
            </span>
          </h1>
          <p className="mt-6 max-w-[560px] text-[17px] leading-relaxed text-pretty text-text-dim sm:text-[19px]">
            {HOME_UI.sub}
          </p>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <Link href={START_STEPS[0].href} className="btn btn-primary">
              {HOME_UI.startReading}
            </Link>
            <Link href={CONTENTS_HOME} className="btn btn-outline">
              {HOME_UI.seeAll} <span aria-hidden="true">→</span>
            </Link>
          </div>
          <StatsRow className="mt-12" />
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <section aria-labelledby="start-heading" className="pt-14 sm:pt-16">
          <h2 id="start-heading" className={`${LABEL} border-b border-border-strong pb-3 text-text-dim`}>
            {HOME_UI.startHere}
          </h2>
          <ol className="m-0 mt-5 grid list-none gap-4 p-0 sm:grid-cols-3">
            {START_STEPS.map((step, i) => (
              <li key={step.href} data-start-step>
                <Link
                  href={step.href}
                  className={`${CARD} group block h-full px-5 py-4 no-underline transition-shadow hover:shadow-md`}
                >
                  <span className={`${LABEL} block text-text-faint`}>
                    {HOME_UI.step(i + 1)} · PART {String(step.part).padStart(2, "0")}
                  </span>
                  <span className="mt-1 block font-display text-xl font-semibold leading-snug text-text transition-colors group-hover:text-accent">
                    {step.title}
                  </span>
                  <span className="mt-1 block text-[14px] leading-relaxed text-text-dim">{step.tagline}</span>
                </Link>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="why-heading" className="pt-16 sm:pt-20">
          <SectionHeading id="why-heading" eyebrow={HOME_UI.whyEyebrow} title={HOME_UI.whyTitle} sub={HOME_UI.whySub} />
          <ul className="m-0 mt-10 grid list-none grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-6 p-0">
            {WHY_ITEMS.map((item) => (
              <li key={item.title} className={`${CARD} p-6 transition-shadow hover:shadow-md`}>
                <span
                  aria-hidden="true"
                  className="grid size-12 place-items-center rounded-xl bg-accent-soft text-2xl"
                >
                  {item.icon}
                </span>
                <h3 className="mt-4 font-display text-[22px] font-semibold leading-snug text-text">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-pretty text-text-dim">{item.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="course-heading" className="pt-16 pb-6 sm:pt-20">
          <SectionHeading
            id="course-heading"
            eyebrow={HOME_UI.courseEyebrow}
            title={HOME_UI.courseTitle}
            sub={HOME_UI.courseSub}
          />
          <ol className="m-0 mt-10 grid list-none gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {COURSE_CARDS.map((card) => (
              <li key={card.n} data-home-row className="relative">
                <div className={`${CARD} group flex h-full flex-col p-6 transition-shadow hover:shadow-md`}>
                  <span
                    aria-hidden="true"
                    className="font-display text-[44px] font-bold leading-none text-accent-2 tabular-nums"
                  >
                    {card.n}
                  </span>
                  <h3 className="mt-3 font-display text-[22px] font-semibold leading-snug text-text">
                    <Link
                      href={card.href}
                      className="text-text no-underline after:absolute after:inset-0 after:content-[''] group-hover:text-accent"
                    >
                      {card.title}
                    </Link>
                  </h3>
                  <p data-home-tagline className="mt-2 line-clamp-3 flex-1 text-[14px] leading-relaxed text-pretty text-text-dim">
                    {renderInlineCode(card.tagline)}
                  </p>
                  <p className="mt-4 font-mono text-[12px] text-text-faint">{HOME_UI.cardCount(card.count)}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}
