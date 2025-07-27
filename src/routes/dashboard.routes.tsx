import type { RouteObject } from "react-router";
import { Route } from "./routes.constants";
import { Dashboard } from "@/pages/dashboard";

export const DashboardRoutes: RouteObject[] = [
  {
    path: Route.Dashboard.Index,
    element: <Dashboard />,
  },
];
