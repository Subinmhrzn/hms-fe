import type { CreateHospitalKycResponseDto } from "@/api/hospital-kyc/hospital-kyc.types";

export type HospitalKycDetailListProps = {
  hospitalKycData: CreateHospitalKycResponseDto | undefined;
};
