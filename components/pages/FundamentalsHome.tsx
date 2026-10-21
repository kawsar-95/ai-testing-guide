import Link from "next/link";
import { ALL_FUNDAMENTALS_TOPIC_IDS, CHAPTERS } from "@/lib/fundamentals/chapters";
import { FUNDAMENTALS_UI } from "@/lib/fundamentals/ui";
import { Callout } from "@/components/mdx/Callout";
import { ChapterProgress } from "@/components/fundamentals/ChapterProgress";
import { FundamentalsProgressSummary } from "@/components/fundamentals/FundamentalsProgressSummary";
import { TopicChecklist } from "@/components/fundamentals/TopicChecklist";

const LABEL = "font-mono text-[11px] font-medium uppercase tracking-[0.2em]";

/** The home page of the Fundamentals module: the overall progress and one section for each chapter. */
export function FundamentalsHome() {
  return (
    <div className="mx-auto max-w-4xl px-4 pt-10 pb-6 sm:px-6 sm:pt-14">
      <header className="max-w-3xl">
        <p className={`${LABEL} text-accent`}>
          {FUNDAMENTALS_UI.eyebrow(CHAPTERS.length, ALL_FUNDAMENTALS_TOPIC_IDS.length)}
        </p>
        <h1 className="mt-3 font-display text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.025em] text-balance text-text">
          {FUNDAMENTALS_UI.heading}
        </h1>
        <p className="mt-4 text-[17px] leading-relaxed text-pretty text-text-dim sm:text-lg sm:leading-relaxed">
          {FUNDAMENTALS_UI.lede}
        </p>
      </header>

      <div className="mt-6 max-w-3xl">
        <Callout type="note">
          <p>{FUNDAMENTALS_UI.privacyNote}</p>
        </Callout>
      </div>

      <div className="mt-6">
        <FundamentalsProgressSummary ids={ALL_FUNDAMENTALS_TOPIC_IDS} />
      </div>

      <section aria-labelledby="chapters-heading" className="mt-9 sm:mt-10">
        <h2 id="chapters-heading" className={`${LABEL} border-b border-border-strong pb-3 text-text-dim`}>
          {FUNDAMENTALS_UI.chaptersHeading}
        </h2>
        {CHAPTERS.map((chapter) => (
          <section
            key={chapter.slug}
            aria-labelledby={`chapter-${chapter.slug}`}
            className="border-b border-border py-5"
          >
            <p className={`${LABEL} text-accent`}>{FUNDAMENTALS_UI.chapterEyebrow(chapter.number)}</p>
            <h3
              id={`chapter-${chapter.slug}`}
              className="mt-1 font-display text-xl font-medium leading-snug text-text"
            >
              <Link href={chapter.href} className="text-text no-underline hover:text-accent">
                {chapter.title}
              </Link>
            </h3>
            <p className="mt-1 max-w-3xl text-[15px] leading-relaxed text-pretty text-text-dim">
              {chapter.description}
            </p>
            <p className="mt-3 font-mono text-[12px] text-text-dim">
              {FUNDAMENTALS_UI.chapterMeta(chapter.topics.length)}
            </p>
            <div className="mt-3 max-w-sm">
              <ChapterProgress ids={chapter.topics.map((topic) => topic.id)} title={chapter.title} />
            </div>
            <div className="mt-4">
              <TopicChecklist chapter={chapter} />
            </div>
          </section>
        ))}
      </section>
    </div>
  );
}
