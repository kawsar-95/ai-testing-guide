import { useId, type ReactNode } from "react";

/**
 * An id for an SVG element, unique per diagram instance. The characters of `useId` that are
 * not valid in a `url(#id)` reference are removed.
 */
export function useDiagramId(prefix: string): string {
  return `${prefix}-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
}

/**
 * A diagram with a visible text description below it. The SVG (the child) has its own
 * <title>; the figcaption repeats the content as text for readers who skip the image.
 */
export function Figure({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <figure className="my-8 rounded-md border border-border bg-bg-raised p-4">
      {children}
      <figcaption className="mt-4 text-sm leading-relaxed text-text-dim">
        <strong className="font-semibold text-text">{title}.</strong> {description}
      </figcaption>
    </figure>
  );
}
