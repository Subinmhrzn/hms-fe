import { SidebarProvider } from "@/components/ui/sidebar";
import type { DashboardViewProps } from "./dashboard.types";
import { AppSidebar } from "@/components/app-sidebar";

export const DashboardView: React.FC<DashboardViewProps> = () => {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
    </SidebarProvider>
  );
};
