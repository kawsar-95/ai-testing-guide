import Link from "next/link";
import { CASES } from "@/lib/system-design/cases";
import { SYSTEM_DESIGN_UI } from "@/lib/system-design/ui";

/**
 * The case studies of the System Design module for the sidebar and the
 * drawer. It uses the same classes as LinuxSidebarList, so all lists look
 * like one design.
 */
export function SystemDesignSidebarList({
  activePath,
  onNavigate,
}: {
  activePath: string | null;
  onNavigate?: () => void;
}) {
  return (
    <nav aria-label={SYSTEM_DESIGN_UI.sidebarNav} className="px-3 py-4">
      <ol className="m-0 list-none space-y-px p-0">
        {CASES.map((item) => {
          const active = item.href === activePath;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                onClick={onNavigate}
                className={
                  "group block rounded-r-md border-l-2 px-3 py-1.5 no-underline transition-colors " +
                  (active
                    ? "border-accent bg-bg-raised"
                    : "border-transparent hover:border-border-strong hover:bg-bg-raised/60")
                }
              >
                <span
                  className={
                    "block font-mono text-[10.5px] uppercase tracking-[0.12em] " +
                    (active ? "text-accent" : "text-text-faint")
                  }
                >
                  {SYSTEM_DESIGN_UI.sidebarCaseLabel(item.number)}
                </span>
                <span
                  className={
                    "mt-0.5 block text-[13.5px] leading-snug " +
                    (active ? "text-text" : "text-text-dim group-hover:text-text")
                  }
                >
                  {item.title}
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
