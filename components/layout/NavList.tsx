import Link from "next/link";
import { LinuxSidebarList } from "@/components/linux/LinuxSidebarList";
import { PrepSidebarList } from "@/components/prep/PrepSidebarList";
import { LINUX_HOME } from "@/lib/linux/stages";
import { LINUX_UI } from "@/lib/linux/ui";
import { PREP_HOME } from "@/lib/prep/areas";
import { PREP_UI } from "@/lib/prep/ui";
import { SidebarList } from "./SidebarList";

type Section = "tutorial" | "prep" | "linux";

/** For each section: its home, the text of the link to it, and the arrow of that link. */
const SECTIONS: readonly { id: Section; href: string; label: string; arrow: string }[] = [
  { id: "tutorial", href: "/", label: PREP_UI.crossToTutorial, arrow: "←" },
  { id: "prep", href: PREP_HOME, label: PREP_UI.crossToPrep, arrow: "→" },
  { id: "linux", href: LINUX_HOME, label: LINUX_UI.crossToLinux, arrow: "→" },
];

function sectionOf(activePath: string | null): Section {
  if (activePath?.startsWith(PREP_HOME)) return "prep";
  if (activePath?.startsWith(LINUX_HOME)) return "linux";
  return "tutorial";
}

/**
 * The list of the sidebar and the drawer. It shows the list of the current
 * section: the tutorial parts, the prep areas, or the Linux stages. Above
 * the list, one link for each of the other two sections.
 */
export function NavList({
  activePath,
  onNavigate,
}: {
  activePath: string | null;
  onNavigate?: () => void;
}) {
  const current = sectionOf(activePath);
  return (
    <>
      <div className="space-y-2 px-3 pt-6">
        {SECTIONS.filter((section) => section.id !== current).map((section) => (
          <Link
            key={section.id}
            href={section.href}
            onClick={onNavigate}
            className="flex items-center justify-between rounded-md border border-border px-3 py-2 text-[13.5px] text-text-dim no-underline transition-colors hover:border-accent hover:text-accent"
          >
            <span>{section.label}</span>
            <span aria-hidden="true">{section.arrow}</span>
          </Link>
        ))}
      </div>
      {current === "prep" ? (
        <PrepSidebarList activePath={activePath} onNavigate={onNavigate} />
      ) : current === "linux" ? (
        <LinuxSidebarList activePath={activePath} onNavigate={onNavigate} />
      ) : (
        <SidebarList activePath={activePath} onNavigate={onNavigate} />
      )}
    </>
  );
}
