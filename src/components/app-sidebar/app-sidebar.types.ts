import type { LucideProps } from "lucide-react";
import { useAppSidebar } from "./use-app-sidebar";

export type AppSidebarViewProps = ReturnType<typeof useAppSidebar>;

export type LucideIcon = React.ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
>;

export type SidebarNavItem = {
  title: string;
  to: string;
  icon?: LucideIcon;
};
