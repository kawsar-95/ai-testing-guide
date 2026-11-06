import type { ReactNode } from "react";
import Link from "next/link";
import { CONTENTS_HOME } from "@/lib/contents";
import { MODULE_CARDS, START_STEPS, TUTORIAL_CARDS, WHY_ITEMS } from "@/lib/home";
import { HOME_UI } from "@/lib/ui";
import { T } from "@/components/i18n/T";
import { HOME_UI_BN, WHY_ITEMS_BN } from "@/lib/bn/home";
import { MODULE_TAGLINES_BN } from "@/lib/bn/stats";
import { MODULES } from "@/lib/stats";
import { AiLogos } from "./AiLogos";
import { StatsRow } from "./StatsRow";

const LABEL = "font-mono text-[11px] font-medium uppercase tracking-[0.2em]";

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

type Pair = readonly [en: string, bn: string];
type Card = (typeof TUTORIAL_CARDS)[number];

function SectionHeading({ id, eyebrow, title, sub }: { id: string; eyebrow: Pair; title: ReactNode; sub?: Pair }) {
  return (
    <header className="max-w-2xl">
      <p className={`${LABEL} text-accent`}>
        <T en={eyebrow[0]} bn={eyebrow[1]} />
      </p>
      <h2 id={id} className="mt-3 font-display text-[clamp(1.875rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.02em] text-balance text-text">
        {title}
      </h2>
      {sub ? (
        <p className="mt-3 text-[17px] leading-relaxed text-pretty text-text-dim">
          <T en={sub[0]} bn={sub[1]} />
        </p>
      ) : null}
    </header>
  );
}

/** The Bangla tagline of a module row. A tutorial group row has page titles, which stay English. */
function taglineBn(card: { tagline: string; href: string }): string {
  const module = MODULES.find((m) => m.href === card.href);
  return module ? MODULE_TAGLINES_BN[module.id] : card.tagline;
}

/**
 * A ruled list of numbered rows: the number, the title (the one link of the
 * row, stretched over it), the page count, and a two-line tagline. A row is
 * not a box: the hairlines are the only chrome.
 */
function CourseRows({ id, label, cards }: { id: string; label: Pair; cards: readonly Card[] }) {
  return (
    <div className="mt-10 first:mt-8">
      <h3 id={id} className={`${LABEL} border-b border-border-strong pb-3 text-text-dim`}>
        <T en={label[0]} bn={label[1]} />
      </h3>
      <ol aria-labelledby={id} className="m-0 grid list-none gap-x-12 p-0 md:grid-cols-2">
        {cards.map((card) => (
          <li key={card.n} data-home-row className="relative border-b border-border">
            <div className="grid grid-cols-[2.25rem_minmax(0,1fr)] items-baseline gap-x-3 py-4">
              <span aria-hidden="true" className="font-display text-[22px] font-bold leading-none text-accent-2 tabular-nums">
                {card.n}
              </span>
              <div className="min-w-0">
                <h4 className="m-0 flex items-baseline justify-between gap-3">
                  <Link
                    href={card.href}
                    className="font-display text-[19px] font-semibold leading-snug text-text no-underline after:absolute after:inset-0 after:content-[''] hover:text-accent"
                  >
                    {card.title}
                  </Link>
                  <span className="shrink-0 font-mono text-[12px] font-normal text-text-faint">
                    <T en={HOME_UI.cardCount(card.count)} bn={HOME_UI_BN.cardCount(card.count)} />
                  </span>
                </h4>
                <p data-home-tagline className="mt-1 line-clamp-2 text-[14px] leading-relaxed text-pretty text-text-dim">
                  <span className="i18n-en">{renderInlineCode(card.tagline)}</span>
                  <span className="i18n-bn" lang="bn">
                    {renderInlineCode(taglineBn(card))}
                  </span>
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** The landing page: the hero, why this guide, and the course structure as two ruled lists. */
export function HomePage() {
  return (
    <div>
      <section aria-labelledby="hero-heading" className="relative overflow-hidden border-b border-border">
        <div aria-hidden="true" className="hero-grid-bg" />
        <div className="relative z-10 mx-auto max-w-[1200px] px-4 pt-14 pb-14 sm:px-6 sm:pt-20 sm:pb-16">
          <p className={`${LABEL} text-accent`}>
            <T en={HOME_UI.eyebrow} bn={HOME_UI_BN.eyebrow} />
          </p>
          <h1
            id="hero-heading"
            className="mt-4 max-w-4xl font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.025em] text-balance text-text"
          >
            <span className="block">
              <AiLogos />
              <T en={HOME_UI.titleLine1} bn={HOME_UI_BN.titleLine1} />
            </span>
            <span className="block text-text-dim">
              <T en={HOME_UI.titleLine2Before} bn={HOME_UI_BN.titleLine2Before} /> <em className="hero-mark">{HOME_UI.titleMark}</em>
            </span>
          </h1>
          <p className="mt-6 max-w-[560px] text-[17px] leading-relaxed text-pretty text-text-dim sm:text-[19px]">
            <T en={HOME_UI.sub} bn={HOME_UI_BN.sub} />
          </p>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <Link href={START_STEPS[0].href} className="btn btn-primary">
              <T en={HOME_UI.startReading} bn={HOME_UI_BN.startReading} />
            </Link>
            <Link href={CONTENTS_HOME} className="btn btn-outline">
              <T en={HOME_UI.seeAll} bn={HOME_UI_BN.seeAll} /> <span aria-hidden="true">→</span>
            </Link>
          </div>
          <StatsRow className="mt-12" />
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <section aria-labelledby="why-heading" className="pt-14 sm:pt-16">
          <SectionHeading
            id="why-heading"
            eyebrow={[HOME_UI.whyEyebrow, HOME_UI_BN.whyEyebrow]}
            title={<T en={HOME_UI.whyTitle} bn={HOME_UI_BN.whyTitle} />}
          />
          <ul className="m-0 mt-8 grid list-none gap-x-10 gap-y-8 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_ITEMS.map((item, i) => (
              <li key={item.title} className="border-t border-border-strong pt-4">
                <h3 className="m-0 font-display text-[20px] font-semibold leading-snug text-text">
                  <T en={item.title} bn={WHY_ITEMS_BN[i].title} />
                </h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-pretty text-text-dim">
                  <T en={item.text} bn={WHY_ITEMS_BN[i].text} />
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="course-heading" className="pt-14 pb-4 sm:pt-16">
          <SectionHeading
            id="course-heading"
            eyebrow={[HOME_UI.courseEyebrow, HOME_UI_BN.courseEyebrow]}
            title={
              <T
                en={HOME_UI.courseTitle(TUTORIAL_CARDS.length, MODULE_CARDS.length)}
                bn={HOME_UI_BN.courseTitle(TUTORIAL_CARDS.length, MODULE_CARDS.length)}
              />
            }
            sub={[HOME_UI.courseSub, HOME_UI_BN.courseSub]}
          />
          <CourseRows id="course-tutorial" label={[HOME_UI.tutorialLabel, HOME_UI_BN.tutorialLabel]} cards={TUTORIAL_CARDS} />
          <CourseRows id="course-modules" label={[HOME_UI.modulesLabel, HOME_UI_BN.modulesLabel]} cards={MODULE_CARDS} />
        </section>
      </div>
    </div>
  );
}
