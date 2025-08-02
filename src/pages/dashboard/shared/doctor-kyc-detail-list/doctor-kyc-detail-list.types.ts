import type { CreateDoctorKycResponseDto } from "@/api/doctor-kyc/doctor-kyc.types";

export type DoctorKycDetailListProps = {
  doctorKycData: CreateDoctorKycResponseDto | undefined;
};
