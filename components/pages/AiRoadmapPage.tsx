import Link from "next/link";
import { T } from "@/components/i18n/T";
import { reveal } from "@/components/motion/reveal";
import { moduleHome } from "@/lib/ai-roadmap/resolve";
import { AI_ROADMAP_HOME, MASTER_PATH, ROADMAPS, getRoadmap, roadmapPageCount } from "@/lib/ai-roadmap/roadmaps";
import { AI_ROADMAP_UI } from "@/lib/ai-roadmap/ui";
import { AI_ROADMAP_UI_BN } from "@/lib/bn/ai-roadmap";
import { RoadmapStages } from "@/components/ai-roadmap/RoadmapStages";

const LABEL = "font-mono text-[12px] font-medium tracking-normal";
const H1 = "mt-3 font-display text-[clamp(2.25rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.025em] text-balance text-text";
const LEDE = "mt-4 text-[17px] leading-relaxed text-pretty text-text-dim sm:text-lg sm:leading-relaxed";

/** /ai-roadmap/: the full path across the modules, then one row for each module roadmap. */
export function AiRoadmapPage() {
  const ui = AI_ROADMAP_UI;
  const bn = AI_ROADMAP_UI_BN;
  return (
    <div className="mx-auto max-w-4xl px-4 pt-10 pb-8 sm:px-6 sm:pt-14">
      <header className="max-w-3xl" {...reveal("up", 0)}>
        <p className={`${LABEL} text-accent`}>
          <T en={ui.eyebrow} bn={bn.eyebrow} />
        </p>
        <h1 className={H1}>
          <T en={ui.heading} bn={bn.heading} />
        </h1>
        <p className={LEDE}>
          <T en={ui.lede} bn={bn.lede} />
        </p>
        <p className="mt-4 text-[13px] leading-relaxed text-pretty text-text-faint">
          <T en={ui.progressNote} bn={bn.progressNote} />
        </p>
      </header>

      <section aria-labelledby="master-heading" className="mt-10">
        <h2 id="master-heading" className={`${LABEL} border-b border-border-strong pb-3 text-text-dim`}>
          <T en={ui.masterHeading} bn={bn.masterHeading} />
        </h2>
        <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-text-dim">
          <T en={ui.masterLede} bn={bn.masterLede} />
        </p>
        <ol className="m-0 mt-2 list-none p-0">
          {MASTER_PATH.map((step, i) => (
            <li key={step.title} className="border-b border-border py-4" {...reveal("up", i)}>
              <div className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-3">
                <span aria-hidden="true" className="pt-1 font-mono text-[12px] tabular-nums text-text-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="m-0 font-display text-xl font-medium leading-snug text-text">{step.title}</h3>
                  <p className="mt-0.5 max-w-3xl text-[15px] leading-relaxed text-text-dim">{step.outcome}</p>
                  <ul className="m-0 mt-2 flex list-none flex-wrap gap-x-5 gap-y-1 p-0 text-[14px]">
                    {step.steps.map((ref) => {
                      const roadmap = getRoadmap(ref.id)!;
                      return (
                        <li key={`${ref.id}-${ref.stage}`}>
                          <Link href={`${AI_ROADMAP_HOME}${ref.id}/#stage-${ref.stage}`} className="text-accent underline underline-offset-2">
                            {roadmap.title}: {roadmap.stages[ref.stage - 1].title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="roadmaps-heading" className="mt-12">
        <h2 id="roadmaps-heading" className={`${LABEL} border-b border-border-strong pb-3 text-text-dim`}>
          <T en={ui.roadmapsHeading} bn={bn.roadmapsHeading} />
        </h2>
        <ul className="m-0 list-none p-0">
          {ROADMAPS.map((roadmap, i) => (
            <li key={roadmap.id} className="row-hover border-b border-border" {...reveal("up", i)}>
              <div className="py-3.5">
                <h3 className="m-0 font-display text-xl font-medium leading-snug text-text">
                  <Link href={`${AI_ROADMAP_HOME}${roadmap.id}/`} className="text-text no-underline hover:text-accent">
                    {roadmap.title}
                  </Link>
                </h3>
                <p className="mt-0.5 max-w-3xl text-[15px] leading-relaxed text-text-dim">{roadmap.summary}</p>
                <p className="mt-1 font-mono text-[12px] tracking-normal text-text-faint">
                  <T
                    en={ui.moduleMeta(roadmap.stages.length, roadmapPageCount(roadmap))}
                    bn={bn.moduleMeta(roadmap.stages.length, roadmapPageCount(roadmap))}
                  />
                  {" · "}
                  <Link href={moduleHome(roadmap.id)} className="text-accent underline underline-offset-2">
                    <T en={ui.openModule} bn={bn.openModule} />
                  </Link>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
