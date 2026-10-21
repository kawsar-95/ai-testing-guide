import Link from "next/link";
import type { FlatModule } from "@/lib/modules/flat";
import type { FlatModuleId } from "@/lib/modules/registry";
import { Callout } from "@/components/mdx/Callout";
import { DoneMark } from "./DoneMark";
import { ProgressSummary } from "./ProgressSummary";

const LABEL = "font-mono text-[11px] font-medium uppercase tracking-[0.2em]";

/** The home page of a flat module: the header, the progress bar (with progress), and one entry for each item. */
export function FlatModuleHome({ module: m }: { module: FlatModule<FlatModuleId> }) {
  const ui = m.ui;
  const topics = m.pages.filter((page) => page.kind === "topic").length;
  const note = (
    <Callout type="note">
      <p>{ui.sourceNote}</p>
    </Callout>
  );
  return (
    <div className="mx-auto max-w-4xl px-4 pt-10 pb-6 sm:px-6 sm:pt-14">
      <header className="max-w-3xl">
        <p className={`${LABEL} text-accent`}>{ui.eyebrow(topics)}</p>
        <h1 className="mt-3 font-display text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.025em] text-balance text-text">
          {ui.heading}
        </h1>
        <p className="mt-4 text-[17px] leading-relaxed text-pretty text-text-dim sm:text-lg sm:leading-relaxed">
          {ui.lede}
        </p>
      </header>

      {m.progress ? (
        <div className="mt-6 max-w-3xl space-y-6">
          <ProgressSummary moduleId={m.id} ids={m.lessonIds} />
          {note}
        </div>
      ) : (
        <div className="mt-6 max-w-3xl">{note}</div>
      )}

      <section aria-labelledby={ui.itemsHeadingId} className="mt-9 sm:mt-10">
        <h2 id={ui.itemsHeadingId} className={`${LABEL} border-b border-border-strong pb-3 text-text-dim`}>
          {ui.itemsHeading}
        </h2>
        <ol className="m-0 list-none p-0">
          {m.items.map((item) => (
            <li key={item.slug} className="border-b border-border py-4">
              <p className={`${LABEL} text-accent`}>
                {item.kind === "practice" ? ui.practiceEyebrow : ui.itemEyebrow(item.number)}
                {m.progress && item.kind === "topic" ? <DoneMark moduleId={m.id} id={item.slug} /> : null}
              </p>
              <h3 className="mt-1 font-display text-xl font-medium leading-snug text-text">
                <Link href={item.href} className="text-text no-underline hover:text-accent">
                  {item.title}
                </Link>
              </h3>
              <p className="mt-1 max-w-3xl text-[15px] leading-relaxed text-pretty text-text-dim">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
