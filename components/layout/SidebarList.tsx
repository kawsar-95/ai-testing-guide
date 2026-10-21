import Link from "next/link";
import { GROUPS } from "@/lib/nav";
import { partLabel, partNumber, partsNav } from "@/lib/ui";

/** The export uses trailing slashes, but usePathname may not return one. */
export function withTrailingSlash(pathname: string | null): string | null {
  if (pathname === null) return null;
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

/**
 * All the parts in their groups. A plain component without hooks, so the
 * server ChapterLayout can render it as the Suspense fallback and the client
 * ChapterList and MobileNav can render it with the active path.
 */
export function SidebarList({
  activePath,
  onNavigate,
}: {
  activePath: string | null;
  onNavigate?: () => void;
}) {
  return (
    <nav aria-label={partsNav} className="px-3 py-4">
      {GROUPS.map((group) => (
        <div key={group.slug} className="mb-4 last:mb-0">
          <p className="mb-1 px-3 font-mono text-[11px] uppercase tracking-[0.16em] text-text-faint">
            {group.title}
          </p>
          <ol className="m-0 list-none space-y-px p-0">
            {group.pages.map((page) => {
              const active = page.href === activePath;
              return (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    aria-current={active ? "page" : undefined}
                    onClick={onNavigate}
                    className={
                      "group flex items-baseline gap-2.5 rounded-r-md border-l-2 px-3 py-1.5 no-underline transition-colors " +
                      (active
                        ? "border-accent bg-bg-raised"
                        : "border-transparent hover:border-border-strong hover:bg-bg-raised/60")
                    }
                  >
                    <span
                      className={
                        "w-5 shrink-0 font-mono text-[10.5px] tabular-nums " +
                        (active ? "text-accent" : "text-text-faint")
                      }
                    >
                      <span className="sr-only">{partLabel(page.part)}</span>
                      <span aria-hidden="true">{partNumber(page.part)}</span>
                    </span>
                    <span
                      className={
                        "min-w-0 text-[13.5px] leading-snug " +
                        (active ? "text-text" : "text-text-dim group-hover:text-text")
                      }
                    >
                      {page.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
      ))}
    </nav>
  );
}
