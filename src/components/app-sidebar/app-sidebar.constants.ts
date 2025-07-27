import { Route } from "@/routes";
import { LayoutDashboardIcon } from "lucide-react";
import type { SidebarNavItem } from "./app-sidebar.types";

export const SidebarNavItems: SidebarNavItem[] = [
  { title: "Dashboard", to: Route.Dashboard.Index, icon: LayoutDashboardIcon },
] as const;
