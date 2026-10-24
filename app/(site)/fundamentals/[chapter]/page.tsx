import type { Metadata } from "next";
import type { MDXContent } from "mdx/types";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CHAPTERS, FUNDAMENTALS_HOME, getChapter } from "@/lib/fundamentals/chapters";
import type { FundamentalsChapter } from "@/lib/fundamentals/chapters";
import { FUNDAMENTALS_UI } from "@/lib/fundamentals/ui";
import { FUNDAMENTALS_UI_BN as BN } from "@/lib/bn/fundamentals";
import { T } from "@/components/i18n/T";
import { getOutline } from "@/lib/outline";
import { getReadingMinutesByVersion } from "@/lib/reading-time";
import { editUrl } from "@/lib/page";
import type { PageInfo } from "@/lib/page";
import { ContentsButton } from "@/components/layout/ContentsButton";
import { ChapterLayout } from "@/components/content/ChapterLayout";
import { ChapterTools } from "@/components/content/ChapterTools";
import { BackToTop } from "@/components/content/BackToTop";
import { MetaLine } from "@/components/content/MetaLine";
import { ReadingProgress } from "@/components/content/ReadingProgress";
import { Sources } from "@/components/content/Sources";
import { FundamentalsProgressSummary } from "@/components/fundamentals/FundamentalsProgressSummary";
import { TopicChecklist } from "@/components/fundamentals/TopicChecklist";
import { VersionSwitch } from "@/components/fundamentals/VersionSwitch";

type MdxPage = { default: MDXContent; metadata: Metadata; page?: PageInfo };

const LABEL = "font-mono text-[11px] font-medium uppercase tracking-[0.2em]";
const NAV_LINK = "text-accent underline underline-offset-2";

export const dynamicParams = false;

export function generateStaticParams() {
  return CHAPTERS.map((chapter) => ({ chapter: chapter.slug }));
}

/** Loads content/fundamentals/<chapter>.mdx. A param that is not a chapter gets a 404. */
async function loadChapter(slug: string): Promise<MdxPage> {
  if (!getChapter(slug)) notFound();
  return import(`@/content/fundamentals/${slug}.mdx`);
}

export async function generateMetadata({ params }: PageProps<"/fundamentals/[chapter]">): Promise<Metadata> {
  const { chapter: slug } = await params;
  const { metadata } = await loadChapter(slug);
  return metadata;
}

function ChapterNav({ chapter }: { chapter: FundamentalsChapter }) {
  const previous = CHAPTERS[chapter.number - 2];
  const next = CHAPTERS[chapter.number];
  return (
    <nav
      aria-labelledby="chapter-nav-label"
      className="mt-10 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-border pt-6 text-[15px]"
    >
      <span id="chapter-nav-label" className="sr-only">
        <T en={FUNDAMENTALS_UI.chapterNav} bn={BN.chapterNav} />
      </span>
      {previous ? (
        <Link href={previous.href} className={NAV_LINK}>
          <span aria-hidden="true">← </span>
          <span className="sr-only">
            <T en={FUNDAMENTALS_UI.previousChapter} bn={BN.previousChapter} />:{" "}
          </span>
          {previous.title}
        </Link>
      ) : (
        <span />
      )}
      <Link href={FUNDAMENTALS_HOME} className={NAV_LINK}>
        <T en={FUNDAMENTALS_UI.allChapters} bn={BN.allChapters} />
      </Link>
      {next ? (
        <Link href={next.href} className={NAV_LINK}>
          <span className="sr-only">
            <T en={FUNDAMENTALS_UI.nextChapter} bn={BN.nextChapter} />:{" "}
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

export default async function ChapterPage({ params }: PageProps<"/fundamentals/[chapter]">) {
  const { chapter: slug } = await params;
  const chapter = getChapter(slug);
  if (!chapter) notFound();
  const { default: Content, page: info } = await loadChapter(slug);
  const outline = getOutline("fundamentals", slug);
  const sections = outline.filter((item) => item.level === 2).length;
  const ids = chapter.topics.map((topic) => topic.id);

  return (
    <>
      <ReadingProgress />
      <ChapterLayout outline={outline} route={chapter.href}>
        <ContentsButton />
        <p className={`mb-3 ${LABEL} text-accent`}>
          <T en={FUNDAMENTALS_UI.chapterEyebrow(chapter.number)} bn={BN.chapterEyebrow(chapter.number)} />
        </p>
        {/* On a phone the checklist at the end of the page shows the same progress. */}
        <div className="mb-6 hidden chapter:block">
          <FundamentalsProgressSummary ids={ids} title={chapter.title} />
        </div>
        {chapter.hasVersions ? (
          <div className="mb-6">
            <VersionSwitch />
          </div>
        ) : null}
        <article data-content className="mdx">
          <Content
            components={{
              PageMeta: () =>
                info ? (
                  <>
                    <MetaLine
                      sections={sections}
                      sources={info.sources.length}
                      updated={info.updated}
                      editHref={editUrl("fundamentals", slug)}
                    />
                    <ChapterTools route={chapter.href} minutes={getReadingMinutesByVersion("fundamentals", slug)} />
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
            <T en={FUNDAMENTALS_UI.checklistHeading} bn={BN.checklistHeading} />
          </h2>
          <div className="mt-4">
            <TopicChecklist chapter={chapter} />
          </div>
        </section>
        <ChapterNav chapter={chapter} />
      </ChapterLayout>
      <BackToTop />
    </>
  );
}
