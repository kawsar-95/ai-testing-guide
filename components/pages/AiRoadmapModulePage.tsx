import Link from "next/link";
import { T } from "@/components/i18n/T";
import { reveal } from "@/components/motion/reveal";
import { RoadmapStages } from "@/components/ai-roadmap/RoadmapStages";
import { moduleHome } from "@/lib/ai-roadmap/resolve";
import { AI_ROADMAP_HOME, roadmapPageCount, type Roadmap } from "@/lib/ai-roadmap/roadmaps";
import { AI_ROADMAP_UI } from "@/lib/ai-roadmap/ui";
import { AI_ROADMAP_UI_BN } from "@/lib/bn/ai-roadmap";

const LABEL = "font-mono text-[12px] font-medium tracking-normal";

/** /ai-roadmap/<module>/: the stages of one module. */
export function AiRoadmapModulePage({ roadmap }: { roadmap: Roadmap }) {
  const ui = AI_ROADMAP_UI;
  const bn = AI_ROADMAP_UI_BN;
  return (
    <div className="mx-auto max-w-4xl px-4 pt-10 pb-8 sm:px-6 sm:pt-14">
      <header className="max-w-3xl" {...reveal("up", 0)}>
        <p className={`${LABEL} text-accent`}>
          <Link href={AI_ROADMAP_HOME} className="text-accent no-underline hover:underline">
            <T en={ui.allRoadmaps} bn={bn.allRoadmaps} />
          </Link>
          {" · "}
          <T en={ui.moduleMeta(roadmap.stages.length, roadmapPageCount(roadmap))} bn={bn.moduleMeta(roadmap.stages.length, roadmapPageCount(roadmap))} />
        </p>
        <h1 className="mt-3 font-display text-[clamp(2.25rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.025em] text-balance text-text">
          {roadmap.title} roadmap
        </h1>
        <p className="mt-4 text-[17px] leading-relaxed text-pretty text-text-dim sm:text-lg sm:leading-relaxed">{roadmap.summary}</p>
        <p className="mt-4 text-[14px]">
          <Link href={moduleHome(roadmap.id)} className="text-accent underline underline-offset-2">
            <T en={ui.openModule} bn={bn.openModule} />
          </Link>
          {" · "}
          <Link href={AI_ROADMAP_HOME} className="text-accent underline underline-offset-2">
            <T en={ui.fullPath} bn={bn.fullPath} />
          </Link>
        </p>
      </header>
      <div className="mt-10">
        <RoadmapStages roadmap={roadmap} />
      </div>
    </div>
  );
}
