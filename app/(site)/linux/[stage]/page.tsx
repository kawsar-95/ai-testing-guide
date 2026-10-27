import type { Metadata } from "next";
import type { MDXContent } from "mdx/types";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LINUX_HOME, STAGES, formatMinutes, getStage, studyMinutes } from "@/lib/linux/stages";
import type { LinuxStage } from "@/lib/linux/stages";
import { LINUX_UI } from "@/lib/linux/ui";
import { LINUX_UI_BN as BN } from "@/lib/bn/linux";
import { T } from "@/components/i18n/T";
import { getOutline } from "@/lib/outline";
import { getReadingMinutes } from "@/lib/reading-time";
import { editUrl } from "@/lib/page";
import type { PageInfo } from "@/lib/page";
import { ContentsButton } from "@/components/layout/ContentsButton";
import { ChapterLayout } from "@/components/content/ChapterLayout";
import { ChapterTools } from "@/components/content/ChapterTools";
import { BackToTop } from "@/components/content/BackToTop";
import { MetaLine } from "@/components/content/MetaLine";
import { ReadingProgress } from "@/components/content/ReadingProgress";
import { Sources } from "@/components/content/Sources";
import { LinuxProgressSummary } from "@/components/linux/LinuxProgressSummary";
import { TopicChecklist } from "@/components/linux/TopicChecklist";
import { PageVoiceSwitcher } from "@/components/voice/PageVoiceSwitcher";

type MdxPage = { default: MDXContent; metadata: Metadata; page?: PageInfo };

const LABEL = "font-mono text-[11px] font-medium uppercase tracking-[0.2em]";
/** "2 h 20 min" in Bangla units. */
const bnMinutes = (text: string) => text.replace(" h", " ঘণ্টা").replace(" min", " মিনিট");
const NAV_LINK = "text-accent underline underline-offset-2";

export const dynamicParams = false;

export function generateStaticParams() {
  return STAGES.map((stage) => ({ stage: stage.slug }));
}

/** Loads content/linux/<stage>.mdx. A param that is not a stage gets a 404. */
async function loadStage(slug: string): Promise<MdxPage> {
  if (!getStage(slug)) notFound();
  return import(`@/content/linux/${slug}.mdx`);
}

export async function generateMetadata({ params }: PageProps<"/linux/[stage]">): Promise<Metadata> {
  const { stage: slug } = await params;
  const { metadata } = await loadStage(slug);
  return metadata;
}

function StageNav({ stage }: { stage: LinuxStage }) {
  const previous = STAGES[stage.number - 2];
  const next = STAGES[stage.number];
  return (
    <nav
      aria-labelledby="stage-nav-label"
      className="mt-10 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-border pt-6 text-[15px]"
    >
      <span id="stage-nav-label" className="sr-only">
        <T en={LINUX_UI.stageNav} bn={BN.stageNav} />
      </span>
      {previous ? (
        <Link href={previous.href} className={NAV_LINK}>
          <span aria-hidden="true">← </span>
          <span className="sr-only">
            <T en={LINUX_UI.previousStage} bn={BN.previousStage} />:{" "}
          </span>
          {previous.title}
        </Link>
      ) : (
        <span />
      )}
      <Link href={LINUX_HOME} className={NAV_LINK}>
        <T en={LINUX_UI.allStages} bn={BN.allStages} />
      </Link>
      {next ? (
        <Link href={next.href} className={NAV_LINK}>
          <span className="sr-only">
            <T en={LINUX_UI.nextStage} bn={BN.nextStage} />:{" "}
          </span>
          {next.title}
          <span aria-hidden="true"> →</span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}

export default async function StagePage({ params }: PageProps<"/linux/[stage]">) {
  const { stage: slug } = await params;
  const stage = getStage(slug);
  if (!stage) notFound();
  const { default: Content, page: info } = await loadStage(slug);
  const outline = getOutline("linux", slug);
  const sections = outline.filter((item) => item.level === 2).length;
  const ids = stage.topics.map((topic) => topic.id);

  return (
    <>
      <ReadingProgress />
      <ChapterLayout outline={outline} route={stage.href}>
        <ContentsButton />
        <p className={`mb-3 ${LABEL} text-accent`}>
          <T en={LINUX_UI.stageEyebrow(stage.number)} bn={BN.stageEyebrow(stage.number)} />
        </p>
        {/* On a phone the checklist at the end of the page shows the same progress. */}
        <div className="mb-6 hidden chapter:block">
          <LinuxProgressSummary ids={ids} title={stage.title} />
        </div>
        <aside className="mb-8 rounded-md border border-border bg-bg-raised p-4">
          <h2 className={`${LABEL} text-accent`}>
            <T en={LINUX_UI.inThisStage} bn={BN.inThisStage} />
          </h2>
          <p className="mt-1 font-mono text-[12px] text-text-dim">
            <T
              en={LINUX_UI.inThisStageMeta(stage.topics.length, formatMinutes(studyMinutes(stage)))}
              bn={BN.inThisStageMeta(stage.topics.length, bnMinutes(formatMinutes(studyMinutes(stage))))}
            />
          </p>
          <ol className="mt-3 grid list-none gap-x-6 gap-y-1 p-0 text-[15px] sm:grid-cols-2">
            {stage.topics.map((topic, i) => (
              <li key={topic.id} className="m-0 p-0">
                <a href={`#${topic.anchor}`} className="text-text no-underline hover:text-accent">
                  <span className="mr-2 font-mono text-[12px] text-accent">{i + 1}</span>
                  {topic.title}
                </a>
              </li>
            ))}
          </ol>
        </aside>
        <PageVoiceSwitcher />
        <article data-content className="mdx linux-topics">
          <Content
            components={{
              PageMeta: () =>
                info ? (
                  <>
                    <MetaLine
                      sections={sections}
                      sources={info.sources.length}
                      updated={info.updated}
                      editHref={editUrl("linux", slug)}
                    />
                    <ChapterTools route={stage.href} minutes={getReadingMinutes("linux", slug)} />
                  </>
                ) : null,
            }}
          />
        </article>
        {info ? <Sources sources={info.sources} /> : null}
        <section aria-labelledby="checklist-heading" className="mt-10">
          <h2
            id="checklist-heading"
            className={`${LABEL} border-b border-border-strong pb-3 text-text-dim`}
          >
            <T en={LINUX_UI.checklistHeading} bn={BN.checklistHeading} />
          </h2>
          <div className="mt-4">
            <TopicChecklist stage={stage} />
          </div>
        </section>
        <StageNav stage={stage} />
      </ChapterLayout>
      <BackToTop />
    </>
  );
}
