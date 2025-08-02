import type { CreateDoctorKycResponseDto } from "@/api/doctor-kyc/doctor-kyc.types";
import { useDoctorKyc } from "./use-doctor-kyc";
import type z from "zod";
import type { doctor_kyc_filter_schema } from "./doctor-kyc-filter.schema";

export type DoctorKycViewProps = ReturnType<typeof useDoctorKyc>;

export type DoctorKyc = CreateDoctorKycResponseDto;

export type DoctorKycFilterFormValues = z.infer<
  typeof doctor_kyc_filter_schema
>;
