import type z from "zod";
import { useHospitalSearchDoctor } from "./use-hospital-search-doctor";
import type { hospital_doctor_search_schema } from "./hospital-search-doctor.schema";
import type {
  add_doctor_schema,
  availability_schema,
} from "./add-doctor.schema";

export type HospitalSearchDoctorViewProps = ReturnType<
  typeof useHospitalSearchDoctor
>;

export type HospitalSearchDoctorFormValues = z.infer<
  typeof hospital_doctor_search_schema
>;

export type AddDoctorFormValues = z.infer<typeof add_doctor_schema>;
export type AddDoctorAvailabilityValues = z.infer<typeof availability_schema>;
