import { useLocation } from "react-router";
import { SidebarNavItems } from "./app-sidebar.constants";
import { usePermissions } from "@/hooks/use-permissions";

export const useAppSidebar = () => {
  const { pathname } = useLocation();
  const isActiveRoute = (to: string) => to === pathname;

  const { hasRole } = usePermissions();

  const roleFilteredSidebarItems = SidebarNavItems.filter((item) =>
    hasRole(item.allowedRoles),
  );

  return { isActiveRoute, roleFilteredSidebarItems };
};
