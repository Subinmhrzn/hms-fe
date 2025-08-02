import { DashboardView } from "./dashboard-view";
import { useDashboard } from "./use-dashboard";

export const Dashboard = () => {
  const logic = useDashboard();
  return <DashboardView {...logic} />;
};
