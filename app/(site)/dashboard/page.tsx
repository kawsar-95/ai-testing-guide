import type { Metadata } from "next";
import { DashboardPage } from "@/components/pages/DashboardPage";
import { DASHBOARD_UI } from "@/lib/dashboard";

export const metadata: Metadata = {
  title: DASHBOARD_UI.siteTitle,
  description: DASHBOARD_UI.description,
};

export default function Page() {
  return <DashboardPage />;
}
