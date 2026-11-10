import Link from "next/link";
import { T } from "@/components/i18n/T";
import { AGENT_MEMORY_UI_BN } from "@/lib/bn/agent-memory";
import { AI_AGENTS_UI_BN } from "@/lib/bn/ai-agents";
import { ARCHITECTURE_UI_BN } from "@/lib/bn/architecture";
import { COURSE_UI_BN } from "@/lib/bn/course";
import { K6_UI_BN } from "@/lib/bn/k6";
import { AI_ENGINEERING_UI_BN } from "@/lib/bn/ai-engineering";
import { AI_CONCEPTS_UI_BN } from "@/lib/bn/ai-concepts";
import { AI_ML_TESTING_UI_BN } from "@/lib/bn/ai-ml-testing";
import { AI_SKILLS_UI_BN } from "@/lib/bn/ai-skills";
import { DEVOPS_UI_BN } from "@/lib/bn/devops";
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
import { CONTENTS_HOME } from "@/lib/contents";
import { FLAT_MODULES, type FlatModuleId } from "@/lib/modules/registry";
import { crossToTutorial, navAllModules } from "@/lib/ui";
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
  "ai-concepts": AI_CONCEPTS_UI_BN.crossTo,
  "agent-memory": AGENT_MEMORY_UI_BN.crossTo,
  "ai-agents": AI_AGENTS_UI_BN.crossTo,
  "ai-ml-testing": AI_ML_TESTING_UI_BN.crossTo,
  devops: DEVOPS_UI_BN.crossTo,
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
 * The list of the sidebar and the drawer: the name of the current module (a
 * link to its home), a link to /contents/ for the other modules, and the pages
 * of the current module. Only that one module is rendered, so the rail does
 * not list every module a second time (the header and /contents/ do).
 * `allModules` is false in the drawer, which already shows the Contents link.
 */
export function NavList({
  activePath,
  onNavigate,
  allModules = true,
}: {
  activePath: string | null;
  onNavigate?: () => void;
  allModules?: boolean;
}) {
  const current = sectionOf(activePath);
  const section = SECTIONS.find((s) => s.id === current)!;
  return (
    <div className="px-3 pt-4">
      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5 px-3">
        {/* min-h-6: both links are 24 px targets, like every other link of the rail. */}
        <Link
          href={section.href}
          onClick={onNavigate}
          className="inline-flex min-h-6 min-w-6 items-center font-display text-[17px] font-medium leading-snug text-text no-underline hover:text-accent"
        >
          <T en={section.label} bn={section.bn} />
        </Link>
        {allModules ? (
          <Link
            href={CONTENTS_HOME}
            onClick={onNavigate}
            className="inline-flex min-h-6 shrink-0 items-center font-mono text-[11px] uppercase tracking-[0.12em] text-text-faint no-underline hover:text-accent"
          >
            <T en={navAllModules} bn={SHELL_BN.navAllModules} />
          </Link>
        ) : null}
      </div>
      {list(current)}
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
