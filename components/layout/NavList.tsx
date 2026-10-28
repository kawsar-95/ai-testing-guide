import Link from "next/link";
import { T } from "@/components/i18n/T";
import { AGENT_MEMORY_UI_BN } from "@/lib/bn/agent-memory";
import { ARCHITECTURE_UI_BN } from "@/lib/bn/architecture";
import { COURSE_UI_BN } from "@/lib/bn/course";
import { K6_UI_BN } from "@/lib/bn/k6";
import { AI_ENGINEERING_UI_BN } from "@/lib/bn/ai-engineering";
import { AI_SKILLS_UI_BN } from "@/lib/bn/ai-skills";
import { HARNESS_UI_BN } from "@/lib/bn/harness";
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
import { crossToTutorial, sidebarHome } from "@/lib/ui";
import { SidebarList } from "./SidebarList";

type Section = "tutorial" | "linux" | "fundamentals" | FlatModuleId;

/** The Bangla module names of the flat modules. */
const FLAT_NAME_BN: Record<FlatModuleId, string> = {
  "system-design": SYSTEM_DESIGN_UI_BN.crossTo,
  architecture: ARCHITECTURE_UI_BN.crossTo,
  course: COURSE_UI_BN.crossTo,
  k6: K6_UI_BN.crossTo,
  "ai-engineering": AI_ENGINEERING_UI_BN.crossTo,
  harness: HARNESS_UI_BN.crossTo,
  "ai-skills": AI_SKILLS_UI_BN.crossTo,
  "agent-memory": AGENT_MEMORY_UI_BN.crossTo,
};

const SECTIONS: readonly { id: Section; href: string; label: string; bn: string }[] = [
  { id: "tutorial", href: "/", label: crossToTutorial, bn: SHELL_BN.crossToTutorial },
  { id: "linux", href: LINUX_HOME, label: LINUX_UI.crossToLinux, bn: LINUX_UI_BN.crossToLinux },
  { id: "fundamentals", href: FUNDAMENTALS_HOME, label: FUNDAMENTALS_UI.crossToFundamentals, bn: FUNDAMENTALS_UI_BN.crossToFundamentals },
  ...FLAT_MODULES.map((m) => ({ id: m.id, href: m.home, label: m.ui.crossTo, bn: FLAT_NAME_BN[m.id] })),
];

function sectionOf(activePath: string | null): Section {
  if (activePath?.startsWith(LINUX_HOME)) return "linux";
  if (activePath?.startsWith(FUNDAMENTALS_HOME)) return "fundamentals";
  return FLAT_MODULES.find((m) => activePath?.startsWith(m.home))?.id ?? "tutorial";
}

/**
 * The list of the sidebar and the drawer: every module (the tutorial too) as
 * one collapsible section with its pages. The current module is open.
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
    <div className="px-3 pt-4">
      {SECTIONS.map((section) => (
        // key on current: a new module opens its section and closes the others
        <details key={`${section.id}-${current}`} open={section.id === current} className="group mb-1 border-b border-border pb-1 last:border-b-0">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-2 rounded-md px-3 py-2 text-[14px] font-medium text-text hover:bg-bg-raised/60 [&::-webkit-details-marker]:hidden">
            <T en={section.label} bn={section.bn} />
            <span aria-hidden="true" className="text-text-faint transition-transform group-open:rotate-90">
              ▸
            </span>
          </summary>
          <Link
            href={section.href}
            onClick={onNavigate}
            className="mx-3 mt-1 inline-block font-mono text-[11px] uppercase tracking-[0.12em] text-text-dim no-underline hover:text-accent"
          >
            <T en={sidebarHome} bn={SHELL_BN.sidebarHome} /> <span aria-hidden="true">→</span>
          </Link>
          {list(section.id)}
        </details>
      ))}
    </div>
  );

  function list(id: Section) {
    if (id === "tutorial") return <SidebarList activePath={activePath} onNavigate={onNavigate} />;
    if (id === "linux") return <LinuxSidebarList activePath={activePath} onNavigate={onNavigate} />;
    if (id === "fundamentals") return <FundamentalsSidebarList activePath={activePath} onNavigate={onNavigate} />;
    const m = FLAT_MODULES.find((f) => f.id === id)!;
    return <FlatSidebarList key={m.id} module={m} activePath={activePath} onNavigate={onNavigate} />;
  }
}
