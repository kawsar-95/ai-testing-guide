import Link from "next/link";
import { T } from "@/components/i18n/T";
import { ARCHITECTURE_UI_BN } from "@/lib/bn/architecture";
import { COURSE_UI_BN } from "@/lib/bn/course";
import { K6_UI_BN } from "@/lib/bn/k6";
import { FUNDAMENTALS_UI_BN } from "@/lib/bn/fundamentals";
import { LINUX_UI_BN } from "@/lib/bn/linux";
import { SHELL_BN } from "@/lib/bn/shell";
import { SYSTEM_DESIGN_UI_BN } from "@/lib/bn/system-design";
import { FundamentalsSidebarList } from "@/components/fundamentals/FundamentalsSidebarList";
import { LinuxSidebarList } from "@/components/linux/LinuxSidebarList";
import { FUNDAMENTALS_HOME } from "@/lib/fundamentals/chapters";
import { FUNDAMENTALS_UI } from "@/lib/fundamentals/ui";
import { LINUX_HOME } from "@/lib/linux/stages";
import { LINUX_UI } from "@/lib/linux/ui";
import { FlatSidebarList } from "@/components/modules/FlatSidebarList";
import { FLAT_MODULES, type FlatModuleId } from "@/lib/modules/registry";
import { crossToTutorial } from "@/lib/ui";
import { SidebarList } from "./SidebarList";

type Section = "tutorial" | "linux" | "fundamentals" | FlatModuleId;

/** For each section: its home, the text of the link to it, and the arrow of that link. */
const FLAT_CROSS_BN: Record<FlatModuleId, string> = {
  "system-design": SYSTEM_DESIGN_UI_BN.crossTo,
  architecture: ARCHITECTURE_UI_BN.crossTo,
  course: COURSE_UI_BN.crossTo,
  k6: K6_UI_BN.crossTo,
};

const SECTIONS: readonly { id: Section; href: string; label: string; bn: string; arrow: string }[] = [
  { id: "tutorial", href: "/", label: crossToTutorial, bn: SHELL_BN.crossToTutorial, arrow: "←" },
  { id: "linux", href: LINUX_HOME, label: LINUX_UI.crossToLinux, bn: LINUX_UI_BN.crossToLinux, arrow: "→" },
  { id: "fundamentals", href: FUNDAMENTALS_HOME, label: FUNDAMENTALS_UI.crossToFundamentals, bn: FUNDAMENTALS_UI_BN.crossToFundamentals, arrow: "→" },
  ...FLAT_MODULES.map((m) => ({ id: m.id, href: m.home, label: m.ui.crossTo, bn: FLAT_CROSS_BN[m.id], arrow: "→" })),
];

function sectionOf(activePath: string | null): Section {
  if (activePath?.startsWith(LINUX_HOME)) return "linux";
  if (activePath?.startsWith(FUNDAMENTALS_HOME)) return "fundamentals";
  return FLAT_MODULES.find((m) => activePath?.startsWith(m.home))?.id ?? "tutorial";
}

/**
 * The list of the sidebar and the drawer. It shows the list of the current
 * section: the tutorial parts, the Linux stages, the Fundamentals chapters,
 * or the pages of a flat module. Above the list, one link to each other section.
 */
export function NavList({
  activePath,
  onNavigate,
}: {
  activePath: string | null;
  onNavigate?: () => void;
}) {
  const current = sectionOf(activePath);
  const flat = FLAT_MODULES.find((m) => m.id === current);
  return (
    <>
      <div className="flex flex-wrap gap-1.5 px-3 pt-4">
        {SECTIONS.filter((section) => section.id !== current).map((section) => (
          <Link
            key={section.id}
            href={section.href}
            onClick={onNavigate}
            className="flex items-center gap-1 rounded-full border border-border px-2.5 py-1 text-[12.5px] text-text-dim no-underline transition-colors hover:border-accent hover:text-accent"
          >
            <span>
              <T en={section.label} bn={section.bn} />
            </span>
            <span aria-hidden="true">{section.arrow}</span>
          </Link>
        ))}
      </div>
      {current === "linux" ? (
        <LinuxSidebarList activePath={activePath} onNavigate={onNavigate} />
      ) : current === "fundamentals" ? (
        <FundamentalsSidebarList activePath={activePath} onNavigate={onNavigate} />
      ) : flat ? (
        <FlatSidebarList key={flat.id} module={flat} activePath={activePath} onNavigate={onNavigate} />
      ) : (
        <SidebarList activePath={activePath} onNavigate={onNavigate} />
      )}
    </>
  );
}
