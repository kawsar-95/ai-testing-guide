import type { Metadata } from "next";
import { FundamentalsHome } from "@/components/pages/FundamentalsHome";
import { FUNDAMENTALS_UI } from "@/lib/fundamentals/ui";

export const metadata: Metadata = {
  title: FUNDAMENTALS_UI.siteTitle,
  description: FUNDAMENTALS_UI.description,
};

export default function Page() {
  return <FundamentalsHome />;
}
