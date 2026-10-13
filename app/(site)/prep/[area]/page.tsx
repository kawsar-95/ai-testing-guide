import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AREAS, PREP_HOME, getArea } from "@/lib/prep/areas";
import { itemsOf } from "@/lib/prep/items";
import { hasLevels } from "@/lib/prep/prefs";
import type { McqItem, PrepArea, QaItem, TaskItem } from "@/lib/prep/types";
import { PREP_UI } from "@/lib/prep/ui";
import { LevelFilter } from "@/components/prep/LevelFilter";
import { McqQuiz } from "@/components/prep/McqQuiz";
import { ProgressSummary } from "@/components/prep/ProgressSummary";
import { QaTable } from "@/components/prep/QaTable";
import { TaskTable } from "@/components/prep/TaskTable";
import { ViewToggle } from "@/components/prep/ViewToggle";

const LABEL = "font-mono text-[11px] font-medium uppercase tracking-[0.2em]";
const NAV_LINK = "text-accent underline underline-offset-2";

export const dynamicParams = false;

export function generateStaticParams() {
  return AREAS.map((area) => ({ area: area.slug }));
}

export async function generateMetadata({ params }: PageProps<"/prep/[area]">): Promise<Metadata> {
  const { area: slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();
  return { title: area.title, description: area.description };
}

function AreaNav({ area, number }: { area: PrepArea; number: number }) {
  const previous = AREAS[number - 2];
  const next = AREAS[number];
  return (
    <nav aria-label={PREP_UI.areaNav} className="mt-16 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-border pt-6 text-[15px]">
      {previous ? (
        <Link href={previous.href} className={NAV_LINK}>
          <span aria-hidden="true">← </span>
          <span className="sr-only">{PREP_UI.previousArea}: </span>
          {previous.title}
        </Link>
      ) : (
        <span />
      )}
      <Link href={PREP_HOME} className={NAV_LINK}>
        {PREP_UI.allAreas}
      </Link>
      {next ? (
        <Link href={next.href} className={NAV_LINK}>
          <span className="sr-only">{PREP_UI.nextArea}: </span>
          {next.title}
          <span aria-hidden="true"> →</span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}

/** One area of Interview Prep: its progress and its items. Params that are not an area get a 404. */
export default async function AreaPage({ params }: PageProps<"/prep/[area]">) {
  const { area: slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();
  const number = AREAS.indexOf(area) + 1;
  const items = itemsOf(area.slug);
  const ids = items.map((item) => item.id);
  const qaItems = items.filter((item): item is QaItem => item.kind === "qa");
  const showLevels = hasLevels(qaItems);

  let body;
  if (items.length === 0) {
    body = <p className="text-text-dim">{PREP_UI.areaEmpty}</p>;
  } else if (area.kind === "mcq") {
    body = <McqQuiz items={items.filter((item): item is McqItem => item.kind === "mcq")} />;
  } else if (area.kind === "task") {
    body = <TaskTable items={items.filter((item): item is TaskItem => item.kind === "task")} />;
  } else {
    body = <QaTable items={qaItems} />;
  }

  const showControls = items.length > 0 && area.kind !== "mcq";

  return (
    <div className="mx-auto max-w-6xl px-5 pt-14 pb-8 sm:px-8 sm:pt-20">
      <header className="max-w-3xl">
        <p className={`${LABEL} text-accent`}>{PREP_UI.areaEyebrow(number)}</p>
        <h1 className="mt-5 font-display text-[clamp(2.5rem,8vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.03em] text-balance text-text">
          {area.title}
        </h1>
        <p className="mt-8 text-lg leading-relaxed text-pretty text-text-dim sm:text-xl sm:leading-relaxed">
          {area.description}
        </p>
      </header>

      <div className="mt-8 max-w-3xl">
        <ProgressSummary ids={ids} />
      </div>

      {showControls ? (
        // The view toggle is hidden below md. A row that holds only the toggle would leave a gap there.
        <div
          className={`mt-8 flex-wrap items-center gap-x-6 gap-y-3 ${showLevels ? "flex" : "hidden md:flex"}`}
        >
          <ViewToggle />
          {showLevels ? <LevelFilter /> : null}
        </div>
      ) : null}

      <section aria-label={area.title} className="mt-8">
        {body}
      </section>

      <AreaNav area={area} number={number} />
    </div>
  );
}
