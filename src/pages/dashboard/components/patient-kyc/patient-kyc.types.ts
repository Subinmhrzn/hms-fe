import type { CreatePatientKycResponseDto } from "@/api/patient-kyc/patient-kyc.types";
import { usePatientKyc } from "./use-patient-kyc";

export type PatientKycViewProps = ReturnType<typeof usePatientKyc>;

export type PatientKyc = CreatePatientKycResponseDto;
