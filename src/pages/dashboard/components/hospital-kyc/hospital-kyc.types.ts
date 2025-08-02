import type { CreateHospitalKycResponseDto } from "@/api/hospital-kyc/hospital-kyc.types";
import { useHospitalKyc } from "./use-hospital-kyc";
import type z from "zod";
import type { hospital_kyc_filter_schema } from "./hospital-kyc-filter.schema";

export type HospitalKycViewProps = ReturnType<typeof useHospitalKyc>;

export type HospitalKyc = CreateHospitalKycResponseDto;

export type HospitalKycFilterFormValues = z.infer<
  typeof hospital_kyc_filter_schema
>;
