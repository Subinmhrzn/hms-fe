import type { CreatePatientKycResponseDto } from "@/api/patient-kyc/patient-kyc.types";

export type PatientKycDetailListProps = {
  patientKycData: CreatePatientKycResponseDto | undefined;
};
