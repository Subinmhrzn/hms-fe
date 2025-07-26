import type { Option } from "@/components/form/card-radio-group";
import { Role } from "@/constants";
import { BriefcaseMedicalIcon, HospitalIcon, UserIcon } from "lucide-react";

export const RoleOptions = [
  {
    value: Role.Patient,
    label: "Patient",
    description: "I'm a patient",
    icon: UserIcon,
  },
  {
    value: Role.Doctor,
    label: "Doctor",
    description: "I'm a legal doctor",
    icon: BriefcaseMedicalIcon,
  },
  {
    value: Role.HospitalAdmin,
    label: "Hospital",
    description: "Register as a Hospital Organization",
    icon: HospitalIcon,
  },
] as Option[];
