import Link from "next/link";
import { ALL_TOPIC_IDS, STAGES, formatMinutes, studyMinutes } from "@/lib/linux/stages";
import { LINUX_UI } from "@/lib/linux/ui";
import { LINUX_UI_BN as BN } from "@/lib/bn/linux";
import { T } from "@/components/i18n/T";
import { Callout } from "@/components/mdx/Callout";
import { LinuxProgressSummary } from "@/components/linux/LinuxProgressSummary";
import { StageProgress } from "@/components/linux/StageProgress";
import { TopicChecklist } from "@/components/linux/TopicChecklist";

const LABEL = "font-mono text-[11px] font-medium uppercase tracking-[0.2em]";

/** "2 h 20 min" in Bangla units. */
const bnMinutes = (text: string) => text.replace(" h", " ঘণ্টা").replace(" min", " মিনিট");

/** The home page of the Linux module: the overall progress and one section for each stage. */
export function LinuxHome() {
  return (
    <div className="mx-auto max-w-4xl px-4 pt-10 pb-6 sm:px-6 sm:pt-14">
      <header className="max-w-3xl">
        <p className={`${LABEL} text-accent`}>
          <T
            en={LINUX_UI.eyebrow(STAGES.length, ALL_TOPIC_IDS.length)}
            bn={BN.eyebrow(STAGES.length, ALL_TOPIC_IDS.length)}
          />
        </p>
        <h1 className="mt-3 font-display text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.025em] text-balance text-text">
          <T en={LINUX_UI.heading} bn={BN.heading} />
        </h1>
        <p className="mt-4 text-[17px] leading-relaxed text-pretty text-text-dim sm:text-lg sm:leading-relaxed">
          <T en={LINUX_UI.lede} bn={BN.lede} />
        </p>
      </header>

      <div className="mt-6 max-w-3xl">
        <Callout type="note">
          <p>
            <T en={LINUX_UI.privacyNote} bn={BN.privacyNote} />
          </p>
        </Callout>
      </div>

      <div className="mt-6">
        <LinuxProgressSummary ids={ALL_TOPIC_IDS} />
      </div>

      <section aria-labelledby="stages-heading" className="mt-9 sm:mt-10">
        <h2 id="stages-heading" className={`${LABEL} border-b border-border-strong pb-3 text-text-dim`}>
          <T en={LINUX_UI.stagesHeading} bn={BN.stagesHeading} />
        </h2>
        {STAGES.map((stage) => (
          <section
            key={stage.slug}
            aria-labelledby={`stage-${stage.slug}`}
            className="border-b border-border py-5"
          >
            <p className={`${LABEL} text-accent`}>
              <T en={LINUX_UI.stageEyebrow(stage.number)} bn={BN.stageEyebrow(stage.number)} />
            </p>
            <h3
              id={`stage-${stage.slug}`}
              className="mt-1 font-display text-xl font-medium leading-snug text-text"
            >
              <Link href={stage.href} className="text-text no-underline hover:text-accent">
                {stage.title}
              </Link>
            </h3>
            <p className="mt-1 max-w-3xl text-[15px] leading-relaxed text-pretty text-text-dim">
              {stage.description}
            </p>
            <p className="mt-3 font-mono text-[12px] text-text-dim">
              <T
                en={LINUX_UI.stageMeta(stage.topics.length, formatMinutes(studyMinutes(stage)))}
                bn={BN.stageMeta(stage.topics.length, bnMinutes(formatMinutes(studyMinutes(stage))))}
              />
            </p>
            <div className="mt-3 max-w-sm">
              <StageProgress ids={stage.topics.map((topic) => topic.id)} title={stage.title} />
            </div>
            {/* Closed: 103 checkboxes on one page are too much to read at once. */}
            <details className="mt-4">
              <summary className="cursor-pointer font-mono text-[12px] text-accent">
                <T en={LINUX_UI.checklistHeading} bn={BN.checklistHeading} />
              </summary>
              <div className="mt-2">
                <TopicChecklist stage={stage} />
              </div>
            </details>
          </section>
        ))}
      </section>
    </div>
  );
}
