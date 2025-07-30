import { Route } from "@/routes";
import { LayoutDashboardIcon } from "lucide-react";
import type { SidebarNavItem } from "./app-sidebar.types";

export const SidebarNavItems: SidebarNavItem[] = [
  { title: "Dashboard", to: Route.Dashboard.Index, icon: LayoutDashboardIcon },
  {
    title: "Patient KYC",
    to: Route.Dashboard.PatientKyc,
    icon: LayoutDashboardIcon,
  },
  {
    title: "Doctor KYC",
    to: Route.Dashboard.DoctorKyc,
    icon: LayoutDashboardIcon,
  },
  {
    title: "Hospital KYC",
    to: Route.Dashboard.HospitalKyc,
    icon: LayoutDashboardIcon,
  },
] as const;
