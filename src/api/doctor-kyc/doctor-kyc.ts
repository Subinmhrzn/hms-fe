import { HttpClient } from "@/lib/axios/http-client";
import type {
  CreateDoctorKycRequestDto,
  CreateDoctorKycResponseDto,
} from "./doctor-kyc.types";
import { DOCTOR_KYC_API } from "./doctor-kyc.api";

export const createDoctorKyc = (data: CreateDoctorKycRequestDto) => {
  return HttpClient.post<CreateDoctorKycResponseDto>(
    DOCTOR_KYC_API.CREATE_DOCTOR_KYC,
    data,
  );
};
