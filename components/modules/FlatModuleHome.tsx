import Link from "next/link";
import type { FlatModule } from "@/lib/modules/flat";
import type { FlatModuleId } from "@/lib/modules/registry";
import { Callout } from "@/components/mdx/Callout";
import { T } from "@/components/i18n/T";
import { FLAT_UI_BN } from "@/lib/bn/flat";
import { DoneMark } from "./DoneMark";
import { LinkDoneToggle } from "./LinkDoneToggle";
import { ProgressSummary } from "./ProgressSummary";

const LABEL = "font-mono text-[11px] font-medium uppercase tracking-[0.2em]";

/** The home page of a flat module: the header, the progress bar (with progress), and one entry for each item. */
export function FlatModuleHome({ module: m }: { module: FlatModule<FlatModuleId> }) {
  const ui = m.ui;
  const bn = FLAT_UI_BN[m.id];
  const topics = m.items.filter((item) => item.kind === "topic" || item.kind === "link").length;
  const note = (
    <Callout type="note">
      <p>
        <T en={ui.sourceNote} bn={bn.sourceNote} />
      </p>
      {ui.projectLink && bn.projectLink ? (
        <p>
          <a href={ui.projectLink.href}>
            <T en={ui.projectLink.label} bn={bn.projectLink.label} />
          </a>
        </p>
      ) : null}
    </Callout>
  );
  return (
    <div className="mx-auto max-w-4xl px-4 pt-10 pb-6 sm:px-6 sm:pt-14">
      <header className="max-w-3xl">
        <p className={`${LABEL} text-accent`}>
          <T en={ui.eyebrow(topics)} bn={bn.eyebrow(topics)} />
        </p>
        <h1 className="mt-3 font-display text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.025em] text-balance text-text">
          <T en={ui.heading} bn={bn.heading} />
        </h1>
        <p className="mt-4 text-[17px] leading-relaxed text-pretty text-text-dim sm:text-lg sm:leading-relaxed">
          <T en={ui.lede} bn={bn.lede} />
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
          <T en={ui.itemsHeading} bn={bn.itemsHeading} />
        </h2>
        {m.groups().map(({ part, items }) => {
          // Under a part heading, the item titles go one level down.
          const Title = part ? "h4" : "h3";
          const list = (
            <ol key="all" className="m-0 list-none p-0">
              {items.map((item) => (
                <li key={item.slug} className="border-b border-border py-4">
                  <p className={`${LABEL} text-accent`}>
                    {item.kind === "practice" ? (
                      <T en={ui.practiceEyebrow ?? ""} bn={bn.practiceEyebrow ?? ""} />
                    ) : (
                      <T en={ui.itemEyebrow(item.number)} bn={bn.itemEyebrow(item.number)} />
                    )}
                    {m.progress && item.kind === "topic" ? <DoneMark moduleId={m.id} id={item.slug} /> : null}
                    {m.progress && item.kind === "link" ? (
                      // In the eyebrow, not in the heading, so the button text is not part of the heading name.
                      <span className="ml-2 inline-flex align-middle">
                        <LinkDoneToggle moduleId={m.id} id={item.slug} title={item.title} />
                      </span>
                    ) : null}
                  </p>
                  <Title className="mt-1 font-display text-xl font-medium leading-snug text-text">
                    <Link href={item.href} className="text-text no-underline hover:text-accent">
                      {item.title}
                    </Link>
                  </Title>
                  <p className="mt-1 max-w-3xl text-[15px] leading-relaxed text-pretty text-text-dim">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          );
          if (!part) return list;
          return (
            <div key={part.num}>
              <h3 className={`${LABEL} mt-8 text-text-dim`}>
                <T en={`PART ${part.num}`} bn={`পার্ট ${part.num}`} /> · {part.title}
              </h3>
              {list}
            </div>
          );
        })}
      </section>
    </div>
  );
}
