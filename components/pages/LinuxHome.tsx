import Link from "next/link";
import { commandIndex } from "@/lib/linux/sheet";
import { getSheet } from "@/lib/linux/sheets";
import { ALL_TOPIC_IDS, STAGES } from "@/lib/linux/stages";
import { LINUX_UI } from "@/lib/linux/ui";
import { LINUX_UI_BN as BN } from "@/lib/bn/linux";
import { T } from "@/components/i18n/T";
import { ContinueButton } from "@/components/linux/ContinueButton";
import { LinuxProgressSummary } from "@/components/linux/LinuxProgressSummary";
import { StageProgress } from "@/components/linux/StageProgress";

const LABEL = "font-mono text-[11px] font-medium uppercase tracking-[0.2em]";

/**
 * The home page of the Linux module: a map of every command. Each stage is a
 * tile with the commands of its sheet as chips, and a chip links to the card
 * of the stage page that teaches it.
 */
export function LinuxHome() {
  const tiles = STAGES.map((stage) => {
    const sheet = getSheet(stage.slug);
    const anchors = stage.topics.map((topic) => topic.anchor);
    return { stage, commands: sheet ? commandIndex(sheet, anchors) : [] };
  });
  const commandTotal = new Set(tiles.flatMap(({ commands }) => commands.map(({ name }) => name))).size;

  return (
    <div className="mx-auto max-w-6xl px-4 pt-6 pb-6 sm:px-6 sm:pt-9">
      <header className="grid gap-x-12 gap-y-6 lg:grid-cols-[minmax(0,1fr)_21rem] lg:items-end">
        <div className="max-w-3xl">
          <p className={`${LABEL} text-accent`}>
            <T
              en={LINUX_UI.eyebrow(STAGES.length, ALL_TOPIC_IDS.length, commandTotal)}
              bn={BN.eyebrow(STAGES.length, ALL_TOPIC_IDS.length, commandTotal)}
            />
          </p>
          <h1 className="mt-3 font-display text-[clamp(2rem,4.5vw,3rem)] font-bold leading-[1.05] tracking-[-0.025em] text-balance text-text">
            <T en={LINUX_UI.heading} bn={BN.heading} />
          </h1>
          <p className="mt-3 text-[17px] leading-relaxed text-pretty text-text-dim">
            <T en={LINUX_UI.lede} bn={BN.lede} />
          </p>
          <div className="mt-4">
            <ContinueButton />
          </div>
        </div>
        <div>
          <LinuxProgressSummary ids={ALL_TOPIC_IDS} />
          <p className="mt-2 text-[12px] leading-snug text-text-faint">
            <T en={LINUX_UI.privacyNote} bn={BN.privacyNote} />
          </p>
        </div>
      </header>

      <section aria-labelledby="stages-heading" className="mt-9">
        <h2 id="stages-heading" className={`${LABEL} border-b border-border-strong pb-3 text-text-dim`}>
          <T en={LINUX_UI.stagesHeading} bn={BN.stagesHeading} />
        </h2>
        <ol role="list" className="mt-4 grid list-none gap-4 p-0 sm:grid-cols-2 xl:grid-cols-3">
          {tiles.map(({ stage, commands }) => (
            <li key={stage.slug} className="flex">
              <section
                aria-labelledby={`stage-${stage.slug}`}
                className="flex w-full flex-col rounded-[10px] border border-border bg-bg-raised p-4 shadow-sm"
              >
                <div className="flex items-start gap-2.5">
                  <span
                    aria-hidden="true"
                    className="grid size-7 shrink-0 place-items-center rounded-full bg-accent-soft font-mono text-[12px] font-semibold text-accent"
                  >
                    {stage.number}
                  </span>
                  <div className="min-w-0 grow">
                    <h3
                      id={`stage-${stage.slug}`}
                      className="font-sans text-[16px] font-semibold leading-snug text-text"
                    >
                      <Link href={stage.href} className="text-text no-underline hover:text-accent">
                        {stage.title}
                      </Link>
                      {stage.number === 1 && (
                        <span className={`${LABEL} ml-2 align-middle text-accent-2`}>
                          <T en={LINUX_UI.startHere} bn={BN.startHere} />
                        </span>
                      )}
                    </h3>
                    <p className="mt-0.5 font-mono text-[12px] text-text-dim">
                      <T
                        en={LINUX_UI.sheetMeta(stage.topics.length, commands.length)}
                        bn={BN.sheetMeta(stage.topics.length, commands.length)}
                      />
                    </p>
                  </div>
                </div>
                <div className="mt-3">
                  <StageProgress ids={stage.topics.map((topic) => topic.id)} title={stage.title} />
                </div>
                <ul
                  role="list"
                  aria-labelledby={`stage-${stage.slug}`}
                  className="m-0 mt-3 flex list-none flex-wrap gap-1 p-0"
                >
                  {commands.map(({ name, anchor }) => (
                    <li key={name}>
                      <Link
                        href={`${stage.href}#${anchor}`}
                        className="inline-flex min-h-6 items-center rounded-md border border-border bg-bg px-1.5 font-mono text-[12px] text-text no-underline hover:border-accent hover:text-accent"
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
