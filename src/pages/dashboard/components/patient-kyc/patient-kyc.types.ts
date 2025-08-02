import type { CreatePatientKycResponseDto } from "@/api/patient-kyc/patient-kyc.types";
import { usePatientKyc } from "./use-patient-kyc";
import type z from "zod";
import type { patient_kyc_filter_schema } from "./patient-kyc-filter.schema";

export type PatientKycViewProps = ReturnType<typeof usePatientKyc>;

export type PatientKyc = CreatePatientKycResponseDto;

export type PatientKycFilterFormValues = z.infer<
  typeof patient_kyc_filter_schema
>;
