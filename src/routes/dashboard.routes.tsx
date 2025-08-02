import type { RouteObject } from "react-router";
import { Route } from "./routes.constants";
import { Dashboard } from "@/pages/dashboard";
import { PatientKyc } from "@/pages/dashboard/components/patient-kyc";
import { DashboardLayout } from "@/layouts/dashboard-layout";
import { PatientKycDetail } from "@/pages/dashboard/components/patient-kyc-detail";
import { MyKyc } from "@/pages/dashboard/components/my-kyc";
import { DoctorKyc } from "@/pages/dashboard/components/doctor-kyc";
import { DoctorKycDetail } from "@/pages/dashboard/components/doctor-kyc-detail";
import { HospitalKyc } from "@/pages/dashboard/components/hospital-kyc";
import { HospitalKycDetail } from "@/pages/dashboard/components/hospital-kyc-detail";
import { HospitalSearchDoctor } from "@/pages/dashboard/components/hospital-search-doctor";
import { HospitalMyDoctors } from "@/pages/dashboard/components/hospital-my-doctors";
import { HosptialDoctorView } from "@/pages/dashboard/components/hosptial-doctor-view";
import { PatientSearchHospitals } from "@/pages/dashboard/components/patient-search-hospitals";
import { PatientSearchHospitalDoctors } from "@/pages/dashboard/components/patient-search-hospital-doctors";
import { PatientSearchHospitalDoctorsView } from "@/pages/dashboard/components/patient-search-hospital-doctors-view";

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
      {
        path: Route.Dashboard.DoctorKyc,
        element: <DoctorKyc />,
      },
      {
        path: Route.Dashboard.HospitalKyc,
        element: <HospitalKyc />,
      },
      {
        path: Route.Dashboard.PatientKycDetail,
        element: <PatientKycDetail />,
      },
      {
        path: Route.Dashboard.DoctorKycDetail,
        element: <DoctorKycDetail />,
      },
      {
        path: Route.Dashboard.HospitalKycDetail,
        element: <HospitalKycDetail />,
      },
      {
        path: Route.Dashboard.MyKyc,
        element: <MyKyc />,
      },
      {
        path: Route.Dashboard.HospitalSearchDoctor,
        element: <HospitalSearchDoctor />,
      },
      {
        path: Route.Dashboard.HospitalMyDoctors,
        element: <HospitalMyDoctors />,
      },
      {
        path: Route.Dashboard.HospitalDoctorView,
        element: <HosptialDoctorView />,
      },
      {
        path: Route.Dashboard.PatientSearchHospitals,
        element: <PatientSearchHospitals />,
      },
      {
        path: Route.Dashboard.PatientSearchHospitalDoctors,
        element: <PatientSearchHospitalDoctors />,
      },
      {
        path: Route.Dashboard.PatientSearchHospitalDoctorsView,
        element: <PatientSearchHospitalDoctorsView />,
      },
    ],
  },
];
