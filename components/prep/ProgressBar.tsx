import type { CSSProperties } from "react";

/**
 * A bar with `role="progressbar"`. The fill is an SVG rect that scales from
 * the left, so it grows into place without a layout.
 */
export function ProgressBar({
  value,
  label,
  valueText,
  thin = false,
  className = "",
}: {
  /** An integer from 0 to 100. */
  value: number;
  label: string;
  /** Text for screen readers, for example `Done 2 · Remaining 6`. */
  valueText?: string;
  /** 4 px high instead of 8 px, for a bar inside a list row. */
  thin?: boolean;
  className?: string;
}) {
  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuenow={value}
      aria-valuetext={valueText}
      aria-valuemin={0}
      aria-valuemax={100}
      className={`${thin ? "h-1" : "h-2"} overflow-hidden rounded-full ${className}`}
    >
      <svg aria-hidden="true" className="block h-full w-full">
        <rect width="100%" height="100%" className="fill-border" />
        {/* The fill scales from the left, so it grows without a layout. */}
        <rect
          width="100%"
          height="100%"
          className="progress-fill fill-accent"
          style={{ "--fill": value / 100 } as React.CSSProperties}
        />
      </svg>
    </div>
  );
}
