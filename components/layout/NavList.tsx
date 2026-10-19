import Link from "next/link";
import { FundamentalsSidebarList } from "@/components/fundamentals/FundamentalsSidebarList";
import { LinuxSidebarList } from "@/components/linux/LinuxSidebarList";
import { FUNDAMENTALS_HOME } from "@/lib/fundamentals/chapters";
import { FUNDAMENTALS_UI } from "@/lib/fundamentals/ui";
import { LINUX_HOME } from "@/lib/linux/stages";
import { LINUX_UI } from "@/lib/linux/ui";
import { SystemDesignSidebarList } from "@/components/system-design/SystemDesignSidebarList";
import { SYSTEM_DESIGN_HOME } from "@/lib/system-design/cases";
import { SYSTEM_DESIGN_UI } from "@/lib/system-design/ui";
import { crossToTutorial } from "@/lib/ui";
import { SidebarList } from "./SidebarList";

type Section = "tutorial" | "linux" | "fundamentals" | "system-design";

/** For each section: its home, the text of the link to it, and the arrow of that link. */
const SECTIONS: readonly { id: Section; href: string; label: string; arrow: string }[] = [
  { id: "tutorial", href: "/", label: crossToTutorial, arrow: "←" },
  { id: "linux", href: LINUX_HOME, label: LINUX_UI.crossToLinux, arrow: "→" },
  { id: "fundamentals", href: FUNDAMENTALS_HOME, label: FUNDAMENTALS_UI.crossToFundamentals, arrow: "→" },
  { id: "system-design", href: SYSTEM_DESIGN_HOME, label: SYSTEM_DESIGN_UI.crossToSystemDesign, arrow: "→" },
];

function sectionOf(activePath: string | null): Section {
  if (activePath?.startsWith(LINUX_HOME)) return "linux";
  if (activePath?.startsWith(FUNDAMENTALS_HOME)) return "fundamentals";
  if (activePath?.startsWith(SYSTEM_DESIGN_HOME)) return "system-design";
  return "tutorial";
}

/**
 * The list of the sidebar and the drawer. It shows the list of the current
 * section: the tutorial parts, the Linux stages, the Fundamentals chapters,
 * or the System Design case studies. Above the list, one link to each other section.
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
      {current === "linux" ? (
        <LinuxSidebarList activePath={activePath} onNavigate={onNavigate} />
      ) : current === "fundamentals" ? (
        <FundamentalsSidebarList activePath={activePath} onNavigate={onNavigate} />
      ) : current === "system-design" ? (
        <SystemDesignSidebarList activePath={activePath} onNavigate={onNavigate} />
      ) : (
        <SidebarList activePath={activePath} onNavigate={onNavigate} />
      )}
    </>
  );
}
