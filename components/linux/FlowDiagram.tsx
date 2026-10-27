import { Figure } from "@/components/fundamentals/diagrams/Figure";

type Step = { title: string; note?: string };

/**
 * A diagram of boxes in a list, with an arrow between boxes (`between`) or none. It is plain
 * HTML, so it reflows on a phone and a screen reader reads it as a list. The description below
 * it is page text: it must only restate facts that the section already cites.
 */
export function FlowDiagram({
  title,
  description,
  steps,
  between = "↓",
}: {
  title: string;
  description: string;
  steps: Step[];
  /** The arrow text between boxes. An empty string gives a grid with no arrows. */
  between?: string;
}) {
  const grid = between === "";
  return (
    <Figure title={title} description={description}>
      <ol
        className={
          grid
            ? "grid gap-3 sm:grid-cols-3"
            : "mx-auto flex max-w-md list-none flex-col items-stretch p-0"
        }
      >
        {steps.map((step, i) => (
          <li key={step.title} className="m-0 list-none p-0">
            {i > 0 && !grid ? (
              <span aria-hidden="true" className="block py-1 text-center font-mono text-sm text-accent">
                {between}
              </span>
            ) : null}
            <div className="rounded-md border border-border-strong bg-bg-raised-2 px-4 py-3 text-center">
              <p className="m-0 font-mono text-[14px] font-semibold text-text">{step.title}</p>
              {step.note ? <p className="m-0 mt-1 text-sm text-text-dim">{step.note}</p> : null}
            </div>
          </li>
        ))}
      </ol>
    </Figure>
  );
}
