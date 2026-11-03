import type { LinuxStage } from "@/lib/linux/stages";
import { splitCmd } from "@/lib/linux/sheet";
import type { SheetCard, SheetRow, StageSheet as Sheet } from "@/lib/linux/sheet";
import { LINUX_UI } from "@/lib/linux/ui";
import { LINUX_UI_BN as BN } from "@/lib/bn/linux";
import { T } from "@/components/i18n/T";
import { Cite } from "@/components/mdx/Cite";
import { DoneToggle } from "./DoneToggle";

/** A command. The words that stand for your own value (FILE, PID, …) are set apart. */
function Cmd({ cmd }: { cmd: string }) {
  return (
    <code className="whitespace-pre-wrap text-text [overflow-wrap:anywhere]">
      {splitCmd(cmd).map((part, i) =>
        part.variable ? (
          <var key={i} className="not-italic text-accent-2">
            {part.text}
          </var>
        ) : (
          part.text
        ),
      )}
    </code>
  );
}

function Row({ row }: { row: SheetRow }) {
  const [cmd, en, bn, warn] = row;
  return (
    <div className="grid grid-cols-1 border-t border-border py-1 first:border-t-0 first:pt-0 last:pb-0 @min-[22rem]:col-span-2 @min-[22rem]:grid-cols-subgrid">
      <dt className="min-w-0 font-mono text-[13px] leading-snug @min-[22rem]:min-w-28">
        <Cmd cmd={cmd} />
      </dt>
      <dd className="m-0 min-w-0 text-[13.5px] leading-snug text-text-dim">
        {warn ? (
          <>
            <span aria-hidden="true" className="mr-1.5 font-mono font-semibold text-danger">
              !
            </span>
            <span className="sr-only">
              <T en={LINUX_UI.warnLabel} bn={BN.warnLabel} />:{" "}
            </span>
          </>
        ) : null}
        <T en={en} bn={bn} />
      </dd>
    </div>
  );
}

function Card({
  stage,
  index,
  card,
  numberOf,
}: {
  stage: LinuxStage;
  index: number;
  card: SheetCard;
  numberOf: (key: string) => number;
}) {
  const topic = stage.topics[index];
  return (
    <section
      id={topic.anchor}
      aria-labelledby={`${topic.anchor}-title`}
      className="group @container flex scroll-mt-20 flex-col rounded-[10px] border border-border bg-bg-raised p-4 shadow-sm has-checked:border-accent/60"
    >
      <header className="flex items-center gap-2.5">
        <span
          aria-hidden="true"
          className="grid size-6 shrink-0 place-items-center rounded-full bg-accent-soft font-mono text-[12px] font-semibold text-accent group-has-checked:bg-accent group-has-checked:text-bg"
        >
          {index + 1}
        </span>
        <h2
          id={`${topic.anchor}-title`}
          className="min-w-0 grow font-sans text-[15px] font-semibold leading-snug text-text"
        >
          {topic.title}
        </h2>
        <DoneToggle id={topic.id} title={topic.title} />
      </header>
      <dl className="m-0 mt-2.5 grid grid-cols-1 @min-[22rem]:grid-cols-[fit-content(46%)_minmax(0,1fr)] @min-[22rem]:gap-x-4">
        {card.rows.map((row) => (
          <Row key={row[0]} row={row} />
        ))}
      </dl>
      <p className="m-0 mt-auto flex flex-wrap justify-end gap-1 pt-2.5">
        {card.src.map((key) => (
          <Cite key={key} n={numberOf(key)} />
        ))}
      </p>
    </section>
  );
}

/**
 * The glance sheet of a stage: one card for each topic, with one row for each
 * command. The cards flow left to right, then down, in the order of the topic
 * numbers, in as many columns as fit (a card is at least 28rem wide), so a
 * whole stage is on one screen or two. The rows of a card sit side by side when its text is
 * at least 22rem wide, and stack below that (a phone).
 */
export function StageSheet({
  stage,
  sheet,
  numberOf,
}: {
  stage: LinuxStage;
  sheet: Sheet;
  numberOf: (key: string) => number;
}) {
  return (
    <div className="sheet grid grid-cols-[repeat(auto-fill,minmax(min(100%,28rem),1fr))] gap-4">
      {sheet.cards.map((card, index) => (
        <Card key={card.topic} stage={stage} index={index} card={card} numberOf={numberOf} />
      ))}
    </div>
  );
}
