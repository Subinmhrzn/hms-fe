import type { LucideProps } from "lucide-react";
import { useAppSidebar } from "./use-app-sidebar";
import type { RoleType } from "@/constants";

export type AppSidebarViewProps = ReturnType<typeof useAppSidebar>;

export type LucideIcon = React.ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
>;

export type SidebarNavItem = {
  title: string;
  to: string;
  icon?: LucideIcon;
  allowedRoles: RoleType[];
};
