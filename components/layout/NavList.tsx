import Link from "next/link";
import { PrepSidebarList } from "@/components/prep/PrepSidebarList";
import { PREP_HOME } from "@/lib/prep/areas";
import { PREP_UI } from "@/lib/prep/ui";
import { SidebarList } from "./SidebarList";

/**
 * The list of the sidebar and the drawer. On a prep page it shows the areas.
 * Everywhere else it shows the tutorial parts. One link above the list
 * leads to the other section.
 */
export function NavList({
  activePath,
  onNavigate,
}: {
  activePath: string | null;
  onNavigate?: () => void;
}) {
  const inPrep = activePath !== null && activePath.startsWith(PREP_HOME);
  return (
    <>
      <div className="px-3 pt-6">
        <Link
          href={inPrep ? "/" : PREP_HOME}
          onClick={onNavigate}
          className="flex items-center justify-between rounded-md border border-border px-3 py-2 text-[13.5px] text-text-dim no-underline transition-colors hover:border-accent hover:text-accent"
        >
          <span>{inPrep ? PREP_UI.crossToTutorial : PREP_UI.crossToPrep}</span>
          <span aria-hidden="true">{inPrep ? "←" : "→"}</span>
        </Link>
      </div>
      {inPrep ? (
        <PrepSidebarList activePath={activePath} onNavigate={onNavigate} />
      ) : (
        <SidebarList activePath={activePath} onNavigate={onNavigate} />
      )}
    </>
  );
}
