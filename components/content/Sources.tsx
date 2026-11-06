import { T } from "@/components/i18n/T";
import { SHELL_BN } from "@/lib/bn/shell";
import type { Source } from "@/lib/page";
import { sourceAccessed, sourcesHeading } from "@/lib/ui";
import { EditLink } from "./EditLink";

/**
 * The numbered list of sources at the end of a page. Item k has the id
 * `src-k`: the `<Cite n={k} />` links in the body jump to it. The heading is
 * rendered here, not in the MDX, so it is not part of the "On this page" list.
 * With `editHref`, the "Suggest an edit" link sits on the heading row.
 */
export function Sources({ sources, editHref }: { sources: Source[]; editHref?: string }) {
  if (sources.length === 0) return null;
  return (
    <section aria-labelledby="sources" className="mt-12 border-t border-border pt-6">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h2
          id="sources"
          className="scroll-mt-20 font-display text-2xl font-medium tracking-[-0.01em] text-text"
        >
          <T en={sourcesHeading} bn={SHELL_BN.sourcesHeading} />
        </h2>
        {editHref ? <EditLink href={editHref} /> : null}
      </div>
      <ol role="list" className="mt-4 list-none divide-y divide-border p-0">
        {sources.map((source, index) => (
          <li
            key={`${index}-${source.url}`}
            id={`src-${index + 1}`}
            className="grid scroll-mt-20 grid-cols-[2.75rem_minmax(0,1fr)] gap-x-2 py-3 text-sm leading-relaxed target:bg-accent/10"
          >
            <span className="pl-1 font-mono text-xs leading-relaxed text-text-dim">[{index + 1}]</span>
            <div className="min-w-0">
              <a
                href={source.url}
                target="_blank"
                rel="noreferrer noopener"
                className="text-text underline decoration-border-strong underline-offset-4 [overflow-wrap:anywhere] hover:text-accent"
              >
                {source.title}
              </a>
              <p className="mt-0.5 font-mono text-xs text-text-dim">
                {source.publisher} · <T en={sourceAccessed(source.accessed)} bn={SHELL_BN.sourceAccessed(source.accessed)} />
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
