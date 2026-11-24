import { GROUPS } from "@/lib/nav";
import type { NavPage } from "@/lib/nav";
import { partLabel } from "@/lib/ui";
import { SHELL_BN } from "@/lib/bn/shell";
import { T } from "@/components/i18n/T";

/** The eyebrow above the page title: `Part 08 · Configure`. */
export function PageHeader({ page }: { page: NavPage }) {
  const group = GROUPS.find((g) => g.slug === page.group);
  return (
    <p className="mb-3 font-mono text-[12px] font-medium tracking-normal text-text-faint">
      <T en={partLabel(page.part)} bn={SHELL_BN.partLabel(page.part)} /> · {group?.title ?? page.group}
    </p>
  );
}
