import type { RouteObject } from "react-router";
import { Route } from "./routes.constants";
import { PatientKyc } from "@/pages/patient-kyc";
import { DoctorKyc } from "@/pages/doctor-kyc";
import { HospitalKyc } from "@/pages/hospital-kyc";

export const UserRoutes: RouteObject[] = [
  { path: Route.User.PatientKyc, element: <PatientKyc /> },
  { path: Route.User.DoctorKyc, element: <DoctorKyc /> },
  { path: Route.User.HospitalKyc, element: <HospitalKyc /> },
];
