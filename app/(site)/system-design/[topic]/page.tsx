import type { Metadata } from "next";
import type { MDXContent } from "mdx/types";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CASES, SYSTEM_DESIGN_HOME, getCase } from "@/lib/system-design/cases";
import type { SystemDesignCase } from "@/lib/system-design/cases";
import { SYSTEM_DESIGN_UI } from "@/lib/system-design/ui";
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

type MdxPage = { default: MDXContent; metadata: Metadata; page?: PageInfo };

const LABEL = "font-mono text-[11px] font-medium uppercase tracking-[0.2em]";
const NAV_LINK = "text-accent underline underline-offset-2";

export const dynamicParams = false;

export function generateStaticParams() {
  return CASES.map((item) => ({ topic: item.slug }));
}

/** Loads content/system-design/<topic>.mdx. A param that is not a case gets a 404. */
async function loadCase(slug: string): Promise<MdxPage> {
  if (!getCase(slug)) notFound();
  return import(`@/content/system-design/${slug}.mdx`);
}

export async function generateMetadata({ params }: PageProps<"/system-design/[topic]">): Promise<Metadata> {
  const { topic } = await params;
  const { metadata } = await loadCase(topic);
  return metadata;
}

function CaseNav({ item }: { item: SystemDesignCase }) {
  const previous = CASES[item.number - 2];
  const next = CASES[item.number];
  return (
    <nav
      aria-label={SYSTEM_DESIGN_UI.caseNav}
      className="mt-10 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-border pt-6 text-[15px]"
    >
      {previous ? (
        <Link href={previous.href} className={NAV_LINK}>
          <span aria-hidden="true">← </span>
          <span className="sr-only">{SYSTEM_DESIGN_UI.previousCase}: </span>
          {previous.title}
        </Link>
      ) : (
        <span />
      )}
      <Link href={SYSTEM_DESIGN_HOME} className={NAV_LINK}>
        {SYSTEM_DESIGN_UI.allCases}
      </Link>
      {next ? (
        <Link href={next.href} className={NAV_LINK}>
          <span className="sr-only">{SYSTEM_DESIGN_UI.nextCase}: </span>
          {next.title}
          <span aria-hidden="true"> →</span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}

export default async function CasePage({ params }: PageProps<"/system-design/[topic]">) {
  const { topic } = await params;
  const item = getCase(topic);
  if (!item) notFound();
  const { default: Content, page: info } = await loadCase(topic);
  const outline = getOutline("system-design", topic);
  const sections = outline.filter((entry) => entry.level === 2).length;

  return (
    <>
      <ReadingProgress />
      <ChapterLayout outline={outline} route={item.href}>
        <ContentsButton />
        <p className={`mb-3 ${LABEL} text-accent`}>{SYSTEM_DESIGN_UI.caseEyebrow(item.number)}</p>
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
                      editHref={editUrl("system-design", topic)}
                    />
                    <ChapterTools route={item.href} minutes={getReadingMinutes("system-design", topic)} />
                  </>
                ) : null,
            }}
          />
        </article>
        {info ? <Sources sources={info.sources} /> : null}
        <CaseNav item={item} />
      </ChapterLayout>
      <BackToTop />
    </>
  );
}
