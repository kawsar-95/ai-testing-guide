import Link from "next/link";
import { T } from "@/components/i18n/T";
import { reveal } from "@/components/motion/reveal";
import { DoneMark } from "@/components/modules/DoneMark";
import { progressIdOf, resolvePage } from "@/lib/ai-roadmap/resolve";
import type { Roadmap } from "@/lib/ai-roadmap/roadmaps";
import { AI_ROADMAP_UI } from "@/lib/ai-roadmap/ui";
import { AI_ROADMAP_UI_BN } from "@/lib/bn/ai-roadmap";
import { partNumber } from "@/lib/ui";
import { StageProgress } from "./StageProgress";

const LABEL = "font-mono text-[12px] font-medium tracking-normal";

/** The stages of one roadmap: for each stage the outcome, what to know first, and its pages in reading order. */
export function RoadmapStages({ roadmap }: { roadmap: Roadmap }) {
  const flat = progressIdOf(roadmap.id);
  let number = 0;
  return (
    <div>
      {roadmap.stages.map((stage, index) => (
        <section key={stage.title} id={`stage-${index + 1}`} aria-labelledby={`stage-${index + 1}-title`} className="mt-10 scroll-mt-24 first:mt-0">
          <p className={`${LABEL} text-text-dim`} {...reveal("up", 0)}>
            <T en={AI_ROADMAP_UI.stageLabel(index + 1)} bn={AI_ROADMAP_UI_BN.stageLabel(index + 1)} />
            {flat ? (
              <>
                {" "}
                <StageProgress moduleId={flat} slugs={stage.pages} />
              </>
            ) : null}
          </p>
          <h2 id={`stage-${index + 1}-title`} className="mt-1 font-display text-2xl font-medium leading-snug text-text">
            {stage.title}
          </h2>
          <dl className="mt-3 grid max-w-3xl gap-x-4 gap-y-1 text-[15px] leading-relaxed text-text-dim sm:grid-cols-[8.5rem_minmax(0,1fr)]">
            <dt className={`${LABEL} pt-0.5 text-text-faint`}>
              <T en={AI_ROADMAP_UI.outcomeLabel} bn={AI_ROADMAP_UI_BN.outcomeLabel} />
            </dt>
            <dd className="m-0">{stage.outcome}</dd>
            <dt className={`${LABEL} pt-0.5 text-text-faint`}>
              <T en={AI_ROADMAP_UI.needsLabel} bn={AI_ROADMAP_UI_BN.needsLabel} />
            </dt>
            <dd className="m-0">{stage.needs}</dd>
          </dl>
          <ol className="m-0 mt-4 list-none border-t border-border p-0">
            {stage.pages.map((slug) => {
              const page = resolvePage(roadmap.id, slug);
              if (!page) throw new Error(`${roadmap.id}: unknown page ${slug}`);
              number += 1;
              return (
                <li key={slug} className="row-hover border-b border-border">
                  <div className="grid grid-cols-[2.25rem_minmax(0,1fr)_auto] items-baseline gap-x-3 py-3">
                    <span aria-hidden="true" className="font-mono text-[12px] tabular-nums text-text-faint">
                      {partNumber(number)}
                    </span>
                    <div className="min-w-0">
                      <h3 className="m-0 font-display text-xl font-medium leading-snug text-text">
                        <Link href={page.href} className="text-text no-underline hover:text-accent">
                          {page.title}
                        </Link>
                      </h3>
                      <p className="mt-0.5 max-w-3xl text-[15px] leading-relaxed text-pretty text-text-dim">{page.description}</p>
                    </div>
                    {flat ? <DoneMark moduleId={flat} id={slug} /> : null}
                  </div>
                </li>
              );
            })}
          </ol>
        </section>
      ))}
    </div>
  );
}
