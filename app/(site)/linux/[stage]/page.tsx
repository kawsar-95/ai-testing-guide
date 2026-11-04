import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LINUX_HOME, STAGES, getStage } from "@/lib/linux/stages";
import type { LinuxStage } from "@/lib/linux/stages";
import { getSheet } from "@/lib/linux/sheets";
import { commandNames, numberSources, sheetEditUrl, sheetMinutes } from "@/lib/linux/sheet";
import type { StageSheet as Sheet } from "@/lib/linux/sheet";
import { LINUX_UI } from "@/lib/linux/ui";
import { LINUX_UI_BN as BN } from "@/lib/bn/linux";
import { T } from "@/components/i18n/T";
import { ContentsButton } from "@/components/layout/ContentsButton";
import { ChapterLayout } from "@/components/content/ChapterLayout";
import { ChapterTools } from "@/components/content/ChapterTools";
import { BackToTop } from "@/components/content/BackToTop";
import { MetaLine } from "@/components/content/MetaLine";
import { StageProgress } from "@/components/linux/StageProgress";
import { SheetSources } from "@/components/linux/SheetSources";
import { StageSheet } from "@/components/linux/StageSheet";

const LABEL = "font-mono text-[11px] font-medium uppercase tracking-[0.2em]";
const NAV_LINK = "text-accent underline underline-offset-2";

export const dynamicParams = false;

export function generateStaticParams() {
  return STAGES.map((stage) => ({ stage: stage.slug }));
}

export async function generateMetadata({ params }: PageProps<"/linux/[stage]">): Promise<Metadata> {
  const { stage: slug } = await params;
  const stage = getStage(slug);
  if (!stage) notFound();
  return { title: stage.title, description: stage.description };
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

/**
 * A stage page: the command sheet of the stage (lib/linux/sheets/<stage>.ts),
 * one card for each topic and one row for each command, on a wide layout with
 * no "On this page" and no one-section-at-a-time focus.
 */
function SheetStage({ stage, sheet }: { stage: LinuxStage; sheet: Sheet }) {
  const { list: sources, numberOf } = numberSources(sheet);
  const commands = commandNames(sheet).length;
  const ids = stage.topics.map((topic) => topic.id);

  return (
    <>
      <ChapterLayout route={stage.href} wide>
        <ContentsButton />
        <header className="mb-6 flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
          <div className="max-w-2xl">
            <p className={`${LABEL} text-accent`}>
              <T en={LINUX_UI.stageEyebrow(stage.number)} bn={BN.stageEyebrow(stage.number)} />
              {" · "}
              <T en={LINUX_UI.sheetMeta(stage.topics.length, commands)} bn={BN.sheetMeta(stage.topics.length, commands)} />
            </p>
            <h1 className="mt-2 font-display text-[clamp(1.9rem,4.5vw,2.6rem)] font-medium leading-[1.08] tracking-[-0.025em] text-balance text-text">
              {stage.title}
            </h1>
            <p className="mt-2 text-[16px] leading-relaxed text-pretty text-text-dim">{stage.description}</p>
            <p className="mt-2 text-[13px] leading-relaxed text-text-faint">
              <T en={LINUX_UI.legend} bn={BN.legend} />
            </p>
          </div>
          <div className="w-full sm:w-64">
            <StageProgress ids={ids} title={stage.title} />
          </div>
        </header>

        <StageSheet stage={stage} sheet={sheet} numberOf={numberOf} />

        <MetaLine
          sections={stage.topics.length}
          sources={sources.length}
          updated={sheet.updated}
          editHref={sheetEditUrl(stage.slug)}
        />
        <ChapterTools route={stage.href} minutes={sheetMinutes(sheet)} />
        <SheetSources sources={sources} />
        <StageNav stage={stage} />
      </ChapterLayout>
      <BackToTop />
    </>
  );
}

export default async function StagePage({ params }: PageProps<"/linux/[stage]">) {
  const { stage: slug } = await params;
  const stage = getStage(slug);
  const sheet = stage ? getSheet(slug) : undefined;
  if (!stage || !sheet) notFound();
  return <SheetStage stage={stage} sheet={sheet} />;
}
