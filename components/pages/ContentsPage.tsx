import type { ReactNode } from "react";
import Link from "next/link";
import { FundamentalsProgressSummary } from "@/components/fundamentals/FundamentalsProgressSummary";
import { LinuxProgressSummary } from "@/components/linux/LinuxProgressSummary";
import { ProgressSummary } from "@/components/modules/ProgressSummary";
import { T } from "@/components/i18n/T";
import { CONTENTS_UI_BN } from "@/lib/bn/contents";
import { MODULE_TAGLINES_BN } from "@/lib/bn/stats";
import { CONTENTS_UI } from "@/lib/contents";
import { ALL_FUNDAMENTALS_TOPIC_IDS } from "@/lib/fundamentals/chapters";
import { ALL_TOPIC_IDS } from "@/lib/linux/stages";
import { PROGRESS_MODULES } from "@/lib/modules/registry";
import { GROUPS } from "@/lib/nav";
import { MODULES, type ModuleId } from "@/lib/stats";
import { StatsRow } from "./StatsRow";

const LABEL = "font-mono text-[11px] font-medium uppercase tracking-[0.2em]";
const pad = (n: number) => String(n).padStart(2, "0");

/** The percentage of a module, as inline text. System Design has no progress. Same ids as the module home pages. */
const PROGRESS: Partial<Record<ModuleId, ReactNode>> = {
  linux: <LinuxProgressSummary ids={ALL_TOPIC_IDS} compact />,
  fundamentals: <FundamentalsProgressSummary ids={ALL_FUNDAMENTALS_TOPIC_IDS} compact />,
  ...Object.fromEntries(PROGRESS_MODULES.map((m) => [m.id, <ProgressSummary key={m.id} moduleId={m.id} ids={m.lessonIds} compact />])),
};

/**
 * One row of the index: a closed `<details>` with the title, the count (and the
 * progress), and the tagline. Opened, it shows a link to the home of the group
 * or module and every page in columns. A row is a hairline, not a box.
 */
function IndexRow({
  id,
  title,
  href,
  meta,
  tagline,
  pages,
  start = 1,
}: {
  id: string;
  title: string;
  href: string;
  meta: ReactNode;
  tagline?: ReactNode;
  pages: readonly { href: string; title: string }[];
  start?: number;
}) {
  return (
    <li id={id} className="scroll-mt-20 border-b border-border">
      <details className="group">
        <summary className="group/sum grid cursor-pointer list-none grid-cols-[1.25rem_minmax(0,1fr)] items-baseline gap-x-2 py-4 [&::-webkit-details-marker]:hidden">
          <span aria-hidden="true" className="text-[14px] leading-none text-text-dim transition-transform group-open:rotate-90">
            ▸
          </span>
          <span className="min-w-0">
            <span className="flex flex-wrap items-baseline justify-between gap-x-4">
              <span className="font-display text-[21px] font-semibold leading-snug text-text group-hover/sum:text-accent">{title}</span>
              <span className="font-mono text-[12px] text-text-faint">{meta}</span>
            </span>
            {tagline ? (
              <span className="mt-0.5 line-clamp-2 block text-[14px] leading-relaxed text-pretty text-text-dim">{tagline}</span>
            ) : null}
          </span>
        </summary>
        <div className="pb-5 pl-[1.75rem]">
          <Link
            href={href}
            className="inline-flex min-h-6 items-center font-mono text-[12px] uppercase tracking-[0.12em] text-accent no-underline hover:underline"
          >
            <T en={CONTENTS_UI.openModule} bn={CONTENTS_UI_BN.openModule} />
            <span aria-hidden="true">&nbsp;→</span>
          </Link>
          <ol className="m-0 mt-2 grid list-none gap-x-8 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {pages.map((page, i) => (
              <li key={page.href}>
                <Link
                  href={page.href}
                  className="group/page flex min-h-6 items-baseline gap-2.5 py-1 text-[14px] leading-snug text-text-dim no-underline hover:text-accent"
                >
                  <span className="w-6 shrink-0 font-mono text-[11px] tabular-nums text-text-faint group-hover/page:text-accent">
                    {pad(start + i)}
                  </span>
                  <span className="min-w-0">{page.title}</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </details>
    </li>
  );
}

/** The contents page: the stats, then the tutorial groups and the modules as one ruled index of closed rows. */
export function ContentsPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 pt-10 pb-8 sm:px-6 sm:pt-14">
      <header className="max-w-3xl">
        <p className={`${LABEL} text-accent`}>
          <T en={CONTENTS_UI.eyebrow} bn={CONTENTS_UI_BN.eyebrow} />
        </p>
        <h1 className="mt-3 font-display text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.025em] text-balance text-text">
          <T en={CONTENTS_UI.heading} bn={CONTENTS_UI_BN.heading} />
        </h1>
        <p className="mt-4 max-w-[600px] text-[17px] leading-relaxed text-pretty text-text-dim sm:text-lg">
          <T en={CONTENTS_UI.lede} bn={CONTENTS_UI_BN.lede} />
        </p>
        <StatsRow className="mt-8" />
      </header>

      <section aria-labelledby="contents-tutorial" className="mt-12">
        <h2 id="contents-tutorial" className={`${LABEL} border-b border-border-strong pb-3 text-text-dim`}>
          <T en={CONTENTS_UI.tutorialHeading} bn={CONTENTS_UI_BN.tutorialHeading} />
        </h2>
        <ol className="m-0 list-none p-0">
          {GROUPS.map((group) => (
            <IndexRow
              key={group.slug}
              id={`group-${group.slug}`}
              title={group.title}
              href={group.pages[0].href}
              meta={<T en={CONTENTS_UI.groupMeta(group.pages.length)} bn={CONTENTS_UI_BN.groupMeta(group.pages.length)} />}
              pages={group.pages}
              start={group.pages[0].part}
            />
          ))}
        </ol>
      </section>

      <section aria-labelledby="contents-modules" className="mt-12">
        <h2 id="contents-modules" className={`${LABEL} border-b border-border-strong pb-3 text-text-dim`}>
          <T en={CONTENTS_UI.modulesHeading} bn={CONTENTS_UI_BN.modulesHeading} />
        </h2>
        <ol className="m-0 list-none p-0">
          {MODULES.map((module) => (
            <IndexRow
              key={module.id}
              id={`module-${module.id}`}
              title={module.title}
              href={module.href}
              meta={
                <>
                  <T en={CONTENTS_UI.moduleMeta(module.pages.length)} bn={CONTENTS_UI_BN.moduleMeta(module.pages.length)} />
                  {PROGRESS[module.id] ? <> · {PROGRESS[module.id]}</> : null}
                </>
              }
              tagline={<T en={module.tagline} bn={MODULE_TAGLINES_BN[module.id]} />}
              pages={module.pages}
            />
          ))}
        </ol>
      </section>
    </div>
  );
}
