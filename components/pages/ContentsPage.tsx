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

/** The progress bar of a module. System Design has no progress. Same ids as the module home pages. */
const PROGRESS: Partial<Record<ModuleId, ReactNode>> = {
  linux: <LinuxProgressSummary ids={ALL_TOPIC_IDS} />,
  fundamentals: <FundamentalsProgressSummary ids={ALL_FUNDAMENTALS_TOPIC_IDS} />,
  ...Object.fromEntries(PROGRESS_MODULES.map((m) => [m.id, <ProgressSummary key={m.id} moduleId={m.id} ids={m.lessonIds} />])),
};

function Card({ id, title, meta, children }: { id: string; title: ReactNode; meta: ReactNode; children: ReactNode }) {
  return (
    <section aria-labelledby={id} className="rounded-2xl border border-border bg-bg-raised p-5 shadow-sm sm:p-6">
      <div className="flex items-baseline justify-between gap-4">
        <h3 id={id} className="font-display text-2xl font-semibold leading-tight text-text">
          {title}
        </h3>
        <p className="shrink-0 font-mono text-[12px] text-text-faint">{meta}</p>
      </div>
      {children}
    </section>
  );
}

function PageList({ pages, start = 1 }: { pages: readonly { href: string; title: string }[]; start?: number }) {
  return (
    <ol className="m-0 mt-4 list-none border-t border-border p-0">
      {pages.map((page, i) => (
        <li key={page.href} className="border-b border-border last:border-b-0">
          <Link
            href={page.href}
            className="group flex items-baseline gap-3 py-2.5 text-[15px] text-text no-underline hover:text-accent"
          >
            <span className="w-7 shrink-0 font-mono text-[12px] text-text-faint tabular-nums group-hover:text-accent">
              {pad(start + i)}
            </span>
            <span className="min-w-0">{page.title}</span>
          </Link>
        </li>
      ))}
    </ol>
  );
}

/** The contents page: the stats, one card for each tutorial group, and one card for each module. */
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
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {GROUPS.map((group) => (
            <Card
              key={group.slug}
              id={`group-${group.slug}`}
              title={group.title}
              meta={<T en={CONTENTS_UI.groupMeta(group.pages.length)} bn={CONTENTS_UI_BN.groupMeta(group.pages.length)} />}
            >
              <PageList pages={group.pages} start={group.pages[0].part} />
            </Card>
          ))}
        </div>
      </section>

      <section aria-labelledby="contents-modules" className="mt-12">
        <h2 id="contents-modules" className={`${LABEL} border-b border-border-strong pb-3 text-text-dim`}>
          <T en={CONTENTS_UI.modulesHeading} bn={CONTENTS_UI_BN.modulesHeading} />
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {MODULES.map((module) => (
            <Card
              key={module.id}
              id={`module-${module.id}`}
              title={
                <Link href={module.href} className="text-text no-underline hover:text-accent">
                  {module.title}
                </Link>
              }
              meta={<T en={CONTENTS_UI.moduleMeta(module.pages.length)} bn={CONTENTS_UI_BN.moduleMeta(module.pages.length)} />}
            >
              <p className="mt-2 text-[15px] leading-relaxed text-pretty text-text-dim">
                <T en={module.tagline} bn={MODULE_TAGLINES_BN[module.id]} />
              </p>
              {PROGRESS[module.id] ? <div className="mt-4">{PROGRESS[module.id]}</div> : null}
              <PageList pages={module.pages} />
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
