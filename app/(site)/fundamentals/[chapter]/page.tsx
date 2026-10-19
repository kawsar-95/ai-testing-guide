import type { Metadata } from "next";
import type { MDXContent } from "mdx/types";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CHAPTERS, FUNDAMENTALS_HOME, getChapter } from "@/lib/fundamentals/chapters";
import type { FundamentalsChapter } from "@/lib/fundamentals/chapters";
import { FUNDAMENTALS_UI } from "@/lib/fundamentals/ui";
import { getOutline } from "@/lib/outline";
import { editUrl } from "@/lib/page";
import type { PageInfo } from "@/lib/page";
import { BackToTop } from "@/components/content/BackToTop";
import { MetaLine } from "@/components/content/MetaLine";
import { ReadingProgress } from "@/components/content/ReadingProgress";
import { Sources } from "@/components/content/Sources";
import { FundamentalsProgressSummary } from "@/components/fundamentals/FundamentalsProgressSummary";
import { TopicChecklist } from "@/components/fundamentals/TopicChecklist";
import { VersionSwitch } from "@/components/fundamentals/VersionSwitch";
import { SectionNav } from "@/components/navigation/SectionNav";

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
      aria-label={FUNDAMENTALS_UI.chapterNav}
      className="mt-16 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-border pt-6 text-[15px]"
    >
      {previous ? (
        <Link href={previous.href} className={NAV_LINK}>
          <span aria-hidden="true">← </span>
          <span className="sr-only">{FUNDAMENTALS_UI.previousChapter}: </span>
          {previous.title}
        </Link>
      ) : (
        <span />
      )}
      <Link href={FUNDAMENTALS_HOME} className={NAV_LINK}>
        {FUNDAMENTALS_UI.allChapters}
      </Link>
      {next ? (
        <Link href={next.href} className={NAV_LINK}>
          <span className="sr-only">{FUNDAMENTALS_UI.nextChapter}: </span>
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
      <div className="mx-auto w-full max-w-[728px] px-4 py-12 sm:px-6 sm:py-16 xl:grid xl:max-w-[1012px] xl:grid-cols-[minmax(0,680px)_220px] xl:gap-16">
        <div className="min-w-0">
          <p className={`mb-5 ${LABEL} text-accent`}>{FUNDAMENTALS_UI.chapterEyebrow(chapter.number)}</p>
          <div className="mb-8">
            <FundamentalsProgressSummary ids={ids} label={FUNDAMENTALS_UI.chapterProgressLabel(chapter.title)} />
          </div>
          {chapter.hasVersions ? (
            <div className="mb-8">
              <VersionSwitch />
            </div>
          ) : null}
          <article data-content className="mdx">
            <Content
              components={{
                PageMeta: () =>
                  info ? (
                    <MetaLine
                      sections={sections}
                      sources={info.sources.length}
                      updated={info.updated}
                      editHref={editUrl("fundamentals", slug)}
                    />
                  ) : null,
              }}
            />
          </article>
          {info ? <Sources sources={info.sources} /> : null}
          <section aria-labelledby="checklist-heading" className="mt-16">
            <h2
              id="checklist-heading"
              className={`${LABEL} border-b border-border-strong pb-3 text-text-dim`}
            >
              {FUNDAMENTALS_UI.checklistHeading}
            </h2>
            <div className="mt-4">
              <TopicChecklist chapter={chapter} />
            </div>
          </section>
          <ChapterNav chapter={chapter} />
        </div>
        <aside className="hidden xl:block">
          <SectionNav items={outline} />
        </aside>
      </div>
      <BackToTop />
    </>
  );
}
