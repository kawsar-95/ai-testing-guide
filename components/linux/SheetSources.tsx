import { T } from "@/components/i18n/T";
import { EditLink } from "@/components/content/EditLink";
import { SHELL_BN } from "@/lib/bn/shell";
import type { Source } from "@/lib/page";
import { sourceAccessed, sourcesHeading } from "@/lib/ui";

/**
 * The sources of a command sheet as a compact list: one line for each source,
 * in as many columns as fit. A sheet cites 20 to 50 pages, and the list of
 * `Sources` (two lines and a rule for each) would be longer than the sheet
 * itself. Item k has the id `src-k`, as in `Sources`, so the `[k]` chips of the
 * cards jump to it. The publisher is in the title of the link; the day the
 * sources were checked is in the heading, because it is the same for all of them.
 * With `editHref`, the "Suggest an edit" link sits on the heading row.
 */
export function SheetSources({ sources, editHref }: { sources: Source[]; editHref?: string }) {
  if (sources.length === 0) return null;
  const accessed = sources[0].accessed;
  return (
    <section aria-labelledby="sources" className="mt-10 border-t border-border pt-5">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h2
          id="sources"
          className="scroll-mt-20 font-display text-xl font-medium tracking-[-0.01em] text-text"
        >
          <T en={sourcesHeading} bn={SHELL_BN.sourcesHeading} />
          <span className="ml-3 font-mono text-xs font-normal tracking-normal text-text-dim">
            {sources.length} · <T en={sourceAccessed(accessed)} bn={SHELL_BN.sourceAccessed(accessed)} />
          </span>
        </h2>
        {editHref ? <EditLink href={editHref} /> : null}
      </div>
      <ol role="list" className="mt-3 list-none columns-1 gap-x-8 p-0 sm:columns-2 xl:columns-3">
        {sources.map((source, index) => (
          <li
            key={`${index}-${source.url}`}
            id={`src-${index + 1}`}
            className="flex scroll-mt-20 break-inside-avoid gap-2 text-[13px] leading-snug target:bg-accent/10"
          >
            <span className="w-7 shrink-0 py-[3px] text-right font-mono text-[11px] leading-[1.6] text-text-dim">
              [{index + 1}]
            </span>
            <a
              href={source.url}
              target="_blank"
              rel="noreferrer noopener"
              title={`${source.title} · ${source.publisher}`}
              className="min-w-0 truncate py-[3px] text-text underline decoration-border-strong underline-offset-4 hover:text-accent"
            >
              {source.title}
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
