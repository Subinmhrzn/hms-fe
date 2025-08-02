import { Route } from "@/routes";
import {
  BookIcon,
  GraduationCapIcon,
  HospitalIcon,
  InfoIcon,
  LayoutDashboardIcon,
  SearchIcon,
  UserIcon,
} from "lucide-react";
import type { SidebarNavItem } from "./app-sidebar.types";
import { Role } from "@/constants";

export const SidebarNavItems: SidebarNavItem[] = [
  {
    title: "Dashboard",
    to: Route.Dashboard.Index,
    icon: LayoutDashboardIcon,
    allowedRoles: [],
  },
  {
    title: "Patient KYC",
    to: Route.Dashboard.PatientKyc,
    icon: UserIcon,
    allowedRoles: [Role.SystemAdmin],
  },
  {
    title: "Doctor KYC",
    to: Route.Dashboard.DoctorKyc,
    icon: GraduationCapIcon,
    allowedRoles: [Role.SystemAdmin],
  },
  {
    title: "Hospital KYC",
    to: Route.Dashboard.HospitalKyc,
    icon: HospitalIcon,
    allowedRoles: [Role.SystemAdmin],
  },
  {
    title: "My Kyc",
    to: Route.Dashboard.MyKyc,
    icon: InfoIcon,
    allowedRoles: [Role.Patient, Role.Doctor, Role.HospitalAdmin],
  },
  {
    title: "Search Doctor",
    to: Route.Dashboard.HospitalSearchDoctor,
    icon: SearchIcon,
    allowedRoles: [Role.HospitalAdmin],
  },
  {
    title: "My Doctors",
    to: Route.Dashboard.HospitalMyDoctors,
    icon: GraduationCapIcon,
    allowedRoles: [Role.HospitalAdmin],
  },
  {
    title: "Hospitals",
    to: Route.Dashboard.PatientSearchHospitals,
    icon: HospitalIcon,
    allowedRoles: [Role.Patient],
  },
  {
    title: "My Appointments",
    to: Route.Dashboard.PatientBookings,
    icon: BookIcon,
    allowedRoles: [Role.Patient],
  },
  {
    title: "Patient Bookings",
    to: Route.Dashboard.HospitalPatientBookings,
    icon: BookIcon,
    allowedRoles: [Role.HospitalAdmin],
  },
  {
    title: "My Medical History",
    to: Route.Dashboard.PatientMedicalHistory,
    icon: BookIcon,
    allowedRoles: [Role.Patient],
  },
] as const;
