import { SearchPalette } from "@/components/navigation/SearchPalette";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageTransition } from "@/components/motion/PageTransition";

export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <SiteShell searchSlot={<SearchPalette />}>
      <PageTransition>{children}</PageTransition>
    </SiteShell>
  );
}
