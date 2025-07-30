import { AppSidebarView } from "./app-sidebar-view";
import { useAppSidebar } from "./use-app-sidebar";

export const AppSidebar = () => {
  const logic = useAppSidebar();
  return <AppSidebarView {...logic} />;
};
