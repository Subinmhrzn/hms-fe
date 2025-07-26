import type { RouteObject } from "react-router";
import { Route } from "./routes.constants";
import { PatientKyc } from "@/pages/patient-kyc";

export const UserRoutes: RouteObject[] = [
  { path: Route.User.PatientKyc, element: <PatientKyc /> },
];
