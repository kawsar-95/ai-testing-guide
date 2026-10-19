import type { Metadata } from "next";
import type { MDXContent } from "mdx/types";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ARCHITECTURE_HOME, PRACTICE_IDS, TOPICS, getTopic } from "@/lib/architecture/topics";
import type { ArchitectureTopic } from "@/lib/architecture/topics";
import { ARCHITECTURE_UI } from "@/lib/architecture/ui";
import { getOutline } from "@/lib/outline";
import { editUrl } from "@/lib/page";
import type { PageInfo } from "@/lib/page";
import { ArchitectureProgressSummary } from "@/components/architecture/ArchitectureProgressSummary";
import { MarkDoneButton } from "@/components/architecture/MarkDoneButton";
import { PracticeQuestion } from "@/components/architecture/PracticeQuestion";
import { BackToTop } from "@/components/content/BackToTop";
import { MetaLine } from "@/components/content/MetaLine";
import { ReadingProgress } from "@/components/content/ReadingProgress";
import { Sources } from "@/components/content/Sources";
import { SectionNav } from "@/components/navigation/SectionNav";

type MdxPage = { default: MDXContent; metadata: Metadata; page?: PageInfo };

const LABEL = "font-mono text-[11px] font-medium uppercase tracking-[0.2em]";
const NAV_LINK = "text-accent underline underline-offset-2";

export const dynamicParams = false;

export function generateStaticParams() {
  return TOPICS.map((item) => ({ topic: item.slug }));
}

/** Loads content/architecture/<topic>.mdx. A param that is not a topic gets a 404. */
async function loadTopic(slug: string): Promise<MdxPage> {
  if (!getTopic(slug)) notFound();
  return import(`@/content/architecture/${slug}.mdx`);
}

export async function generateMetadata({ params }: PageProps<"/architecture/[topic]">): Promise<Metadata> {
  const { topic } = await params;
  const { metadata } = await loadTopic(topic);
  return metadata;
}

function TopicNav({ item }: { item: ArchitectureTopic }) {
  const previous = TOPICS[item.number - 2];
  const next = TOPICS[item.number];
  return (
    <nav
      aria-label={ARCHITECTURE_UI.topicNav}
      className="mt-10 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-border pt-6 text-[15px]"
    >
      {previous ? (
        <Link href={previous.href} className={NAV_LINK}>
          <span aria-hidden="true">← </span>
          <span className="sr-only">{ARCHITECTURE_UI.previousTopic}: </span>
          {previous.title}
        </Link>
      ) : (
        <span />
      )}
      <Link href={ARCHITECTURE_HOME} className={NAV_LINK}>
        {ARCHITECTURE_UI.allTopics}
      </Link>
      {next ? (
        <Link href={next.href} className={NAV_LINK}>
          <span className="sr-only">{ARCHITECTURE_UI.nextTopic}: </span>
          {next.title}
          <span aria-hidden="true"> →</span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}

export default async function TopicPage({ params }: PageProps<"/architecture/[topic]">) {
  const { topic } = await params;
  const item = getTopic(topic);
  if (!item) notFound();
  const { default: Content, page: info } = await loadTopic(topic);
  const outline = getOutline("architecture", topic);
  const sections = outline.filter((entry) => entry.level === 2).length;
  const practice = item.kind === "practice";

  return (
    <>
      <ReadingProgress />
      <div className="mx-auto w-full max-w-[728px] px-4 py-7 sm:px-6 sm:py-10 xl:grid xl:max-w-[1012px] xl:grid-cols-[minmax(0,680px)_220px] xl:gap-16">
        <div className="min-w-0">
          <p className={`mb-3 ${LABEL} text-accent`}>
            {practice ? ARCHITECTURE_UI.practiceEyebrow : ARCHITECTURE_UI.topicEyebrow(item.number)}
          </p>
          <article data-content className="mdx">
            <Content
              components={{
                PracticeQuestion,
                PageMeta: () =>
                  info ? (
                    <>
                      <MetaLine
                        sections={sections}
                        sources={info.sources.length}
                        updated={info.updated}
                        editHref={editUrl("architecture", topic)}
                      />
                      {practice ? (
                        <div className="my-6">
                          <ArchitectureProgressSummary ids={PRACTICE_IDS} kind="practice" />
                        </div>
                      ) : null}
                    </>
                  ) : null,
              }}
            />
          </article>
          {practice ? null : <MarkDoneButton id={item.slug} />}
          {info ? <Sources sources={info.sources} /> : null}
          <TopicNav item={item} />
        </div>
        <aside className="hidden xl:block">
          <SectionNav items={outline} />
        </aside>
      </div>
      <BackToTop />
    </>
  );
}
