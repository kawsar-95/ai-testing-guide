import type { Metadata } from "next";
import type { MDXComponents, MDXContent } from "mdx/types";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { FlatItem, FlatModule } from "@/lib/modules/flat";
import type { FlatModuleId } from "@/lib/modules/registry";
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
import { MarkDoneButton } from "./MarkDoneButton";
import { T } from "@/components/i18n/T";
import { FLAT_UI_BN } from "@/lib/bn/flat";
import { ProgressSummary } from "./ProgressSummary";

export type MdxPage = { default: MDXContent; metadata: Metadata; page?: PageInfo };
type Load = (slug: string) => Promise<MdxPage>;
type Params = Promise<{ topic: string }>;

const LABEL = "font-mono text-[11px] font-medium uppercase tracking-[0.2em]";
const NAV_LINK = "text-accent underline underline-offset-2";

/** The static params of the `[topic]` route: one for each page of the module. */
export function staticParams(m: FlatModule) {
  return m.pages.map((item) => ({ topic: item.slug }));
}

/** Loads the MDX of a page. A slug that is not a page of the module gets a 404. */
function loadPage(m: FlatModule, load: Load, slug: string): Promise<MdxPage> {
  if (!m.get(slug)) notFound();
  return load(slug);
}

/** The `generateMetadata` of the `[topic]` route: the metadata of the MDX file. */
export function metadataFor(m: FlatModule, load: Load) {
  return async ({ params }: { params: Params }): Promise<Metadata> => {
    const { topic } = await params;
    const { metadata } = await loadPage(m, load, topic);
    return metadata;
  };
}

function ItemNav({ module: m, item }: { module: FlatModule<FlatModuleId>; item: FlatItem }) {
  const bn = FLAT_UI_BN[m.id];
  const { previous, next } = m.neighbours(item.slug);
  return (
    <nav
      aria-labelledby="item-nav-label"
      className="mt-10 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-border pt-6 text-[15px]"
    >
      <span id="item-nav-label" className="sr-only">
        <T en={m.ui.itemNav} bn={bn.itemNav} />
      </span>
      {previous ? (
        <Link href={previous.href} className={NAV_LINK}>
          <span aria-hidden="true">← </span>
          <span className="sr-only">
            <T en={m.ui.previousItem} bn={bn.previousItem} />:{" "}
          </span>
          {previous.title}
        </Link>
      ) : (
        <span />
      )}
      <Link href={m.home} className={NAV_LINK}>
        <T en={m.ui.allItems} bn={bn.allItems} />
      </Link>
      {next ? (
        <Link href={next.href} className={NAV_LINK}>
          <span className="sr-only">
            <T en={m.ui.nextItem} bn={bn.nextItem} />:{" "}
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

/** One page of a flat module: the MDX text in the chapter layout, with the module's eyebrow and prev/next. */
export async function FlatTopicPage({
  module: m,
  load,
  params,
  components,
}: {
  module: FlatModule<FlatModuleId>;
  load: Load;
  params: Params;
  components?: MDXComponents;
}) {
  const { topic } = await params;
  const item = m.get(topic);
  if (!item) notFound();
  const { default: Content, page: info } = await loadPage(m, load, topic);
  const outline = getOutline(m.id, topic);
  const sections = outline.filter((entry) => entry.level === 2).length;
  const practice = item.kind === "practice";

  return (
    <>
      <ReadingProgress />
      <ChapterLayout outline={outline} route={item.href}>
        <ContentsButton />
        <p className={`mb-3 ${LABEL} text-accent`}>
          {practice ? (
            <T en={m.ui.practiceEyebrow ?? ""} bn={FLAT_UI_BN[m.id].practiceEyebrow ?? ""} />
          ) : (
            <T en={m.ui.itemEyebrow(item.number)} bn={FLAT_UI_BN[m.id].itemEyebrow(item.number)} />
          )}
        </p>
        <article data-content className="mdx">
          <Content
            components={{
              ...components,
              PageMeta: () =>
                info ? (
                  <>
                    <MetaLine
                      sections={sections}
                      sources={info.sources.length}
                      updated={info.updated}
                      editHref={editUrl(m.id, topic)}
                    />
                    <ChapterTools route={item.href} minutes={getReadingMinutes(m.id, topic)} />
                    {practice && m.progress?.extraIds ? (
                      <div className="my-6">
                        <ProgressSummary moduleId={m.id} ids={m.progress.extraIds} kind="practice" />
                      </div>
                    ) : null}
                  </>
                ) : null,
            }}
          />
        </article>
        {m.progress && item.kind === "topic" ? <MarkDoneButton moduleId={m.id} id={item.slug} /> : null}
        {info ? <Sources sources={info.sources} /> : null}
        <ItemNav module={m} item={item} />
      </ChapterLayout>
      <BackToTop />
    </>
  );
}
