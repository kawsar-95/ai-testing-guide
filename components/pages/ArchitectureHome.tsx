import Link from "next/link";
import { LESSON_IDS, TOPICS } from "@/lib/architecture/topics";
import { ARCHITECTURE_UI } from "@/lib/architecture/ui";
import { ArchitectureProgressSummary } from "@/components/architecture/ArchitectureProgressSummary";
import { TopicDoneMark } from "@/components/architecture/TopicDoneMark";
import { Callout } from "@/components/mdx/Callout";

const LABEL = "font-mono text-[11px] font-medium uppercase tracking-[0.2em]";

/** The home page of the Architecture module: the progress bar and one entry for each topic. */
export function ArchitectureHome() {
  return (
    <div className="mx-auto max-w-4xl px-5 pt-14 pb-8 sm:px-8 sm:pt-20">
      <header className="max-w-3xl">
        <p className={`${LABEL} text-accent`}>{ARCHITECTURE_UI.eyebrow(LESSON_IDS.length)}</p>
        <h1 className="mt-5 font-display text-[clamp(2.5rem,8vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.03em] text-balance text-text">
          {ARCHITECTURE_UI.heading}
        </h1>
        <p className="mt-8 text-lg leading-relaxed text-pretty text-text-dim sm:text-xl sm:leading-relaxed">
          {ARCHITECTURE_UI.lede}
        </p>
      </header>

      <div className="mt-8 max-w-3xl space-y-6">
        <ArchitectureProgressSummary ids={LESSON_IDS} />
        <Callout type="note">
          <p>{ARCHITECTURE_UI.sourceNote}</p>
        </Callout>
      </div>

      <section aria-labelledby="topics-heading" className="mt-14 sm:mt-16">
        <h2 id="topics-heading" className={`${LABEL} border-b border-border-strong pb-3 text-text-dim`}>
          {ARCHITECTURE_UI.topicsHeading}
        </h2>
        <ol className="m-0 list-none p-0">
          {TOPICS.map((item) => (
            <li key={item.slug} className="border-b border-border py-6">
              <p className={`${LABEL} text-accent`}>
                {item.kind === "practice" ? ARCHITECTURE_UI.practiceEyebrow : ARCHITECTURE_UI.topicEyebrow(item.number)}
                {item.kind === "topic" ? <TopicDoneMark id={item.slug} /> : null}
              </p>
              <h3 className="mt-2 font-display text-2xl font-medium leading-snug text-text">
                <Link href={item.href} className="text-text no-underline hover:text-accent">
                  {item.title}
                </Link>
              </h3>
              <p className="mt-2 max-w-3xl text-[15px] leading-relaxed text-pretty text-text-dim">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
