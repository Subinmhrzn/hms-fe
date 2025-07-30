import type { RouteObject } from "react-router";
import { Route } from "./routes.constants";
import { Dashboard } from "@/pages/dashboard";
import { PatientKyc } from "@/pages/dashboard/components/patient-kyc";
import { DashboardLayout } from "@/layouts/dashboard-layout";

export const DashboardRoutes: RouteObject[] = [
  {
    path: Route.Dashboard.Index,
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      {
        path: Route.Dashboard.PatientKyc,
        element: <PatientKyc />,
      },
    ],
  },
];
