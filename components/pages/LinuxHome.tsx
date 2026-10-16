import Link from "next/link";
import { ALL_TOPIC_IDS, STAGES, formatMinutes, studyMinutes } from "@/lib/linux/stages";
import { LINUX_UI } from "@/lib/linux/ui";
import { Callout } from "@/components/mdx/Callout";
import { LinuxProgressSummary } from "@/components/linux/LinuxProgressSummary";
import { StageProgress } from "@/components/linux/StageProgress";
import { TopicChecklist } from "@/components/linux/TopicChecklist";

const LABEL = "font-mono text-[11px] font-medium uppercase tracking-[0.2em]";

/** The home page of the Linux module: the overall progress and one section for each stage. */
export function LinuxHome() {
  return (
    <div className="mx-auto max-w-4xl px-5 pt-14 pb-8 sm:px-8 sm:pt-20">
      <header className="max-w-3xl">
        <p className={`${LABEL} text-accent`}>
          {LINUX_UI.eyebrow(STAGES.length, ALL_TOPIC_IDS.length)}
        </p>
        <h1 className="mt-5 font-display text-[clamp(2.5rem,8vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.03em] text-balance text-text">
          {LINUX_UI.heading}
        </h1>
        <p className="mt-8 text-lg leading-relaxed text-pretty text-text-dim sm:text-xl sm:leading-relaxed">
          {LINUX_UI.lede}
        </p>
      </header>

      <div className="mt-8 max-w-3xl">
        <Callout type="note">
          <p>{LINUX_UI.privacyNote}</p>
        </Callout>
      </div>

      <div className="mt-6">
        <LinuxProgressSummary ids={ALL_TOPIC_IDS} />
      </div>

      <section aria-labelledby="stages-heading" className="mt-14 sm:mt-16">
        <h2 id="stages-heading" className={`${LABEL} border-b border-border-strong pb-3 text-text-dim`}>
          {LINUX_UI.stagesHeading}
        </h2>
        {STAGES.map((stage) => (
          <section
            key={stage.slug}
            aria-labelledby={`stage-${stage.slug}`}
            className="border-b border-border py-8"
          >
            <p className={`${LABEL} text-accent`}>{LINUX_UI.stageEyebrow(stage.number)}</p>
            <h3
              id={`stage-${stage.slug}`}
              className="mt-2 font-display text-2xl font-medium leading-snug text-text"
            >
              <Link href={stage.href} className="text-text no-underline hover:text-accent">
                {stage.title}
              </Link>
            </h3>
            <p className="mt-2 max-w-3xl text-[15px] leading-relaxed text-pretty text-text-dim">
              {stage.description}
            </p>
            <p className="mt-3 font-mono text-[12px] text-text-dim">
              {LINUX_UI.stageMeta(stage.topics.length, formatMinutes(studyMinutes(stage)))}
            </p>
            <div className="mt-3 max-w-sm">
              <StageProgress ids={stage.topics.map((topic) => topic.id)} title={stage.title} />
            </div>
            <div className="mt-4">
              <TopicChecklist stage={stage} />
            </div>
          </section>
        ))}
      </section>
    </div>
  );
}
