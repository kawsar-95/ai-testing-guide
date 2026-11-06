import type { ReactNode } from "react";
import { ProgressBar } from "./ProgressBar";

/**
 * The readout of a progress summary: the text on the left, the percentage on
 * the right, and the bar under them. It has no box on purpose: a readout is
 * not a card. `compact` is the percentage as inline text for a row of a list
 * (it is valid inside a `<summary>`); the full text is for screen readers.
 */
export function ProgressReadout({
  text,
  percentText,
  value,
  label,
  valueText,
  compact = false,
}: {
  /** The words of the summary, for example `0 of 55 topics done`. */
  text: ReactNode;
  percentText: string;
  /** An integer from 0 to 100. */
  value: number;
  label: string;
  valueText: string;
  compact?: boolean;
}) {
  if (compact) {
    return (
      <span className="font-mono text-[12px] tabular-nums text-text-faint">
        <span aria-hidden="true">{percentText}</span>
        <span className="sr-only">
          {label}: {valueText}
        </span>
      </span>
    );
  }
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <p className="m-0 font-mono text-[13px] text-text-dim">{text}</p>
        <p className="m-0 font-display text-xl font-medium tabular-nums text-text">{percentText}</p>
      </div>
      <ProgressBar value={value} label={label} valueText={valueText} className="mt-2" />
    </div>
  );
}
