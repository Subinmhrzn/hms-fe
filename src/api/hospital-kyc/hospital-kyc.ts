import { HttpClient } from "@/lib/axios/http-client";
import type {
  CreateHospitalKycRequestDto,
  CreateHospitalKycResponseDto,
} from "./hospital-kyc.types";
import { HOSPITAL_KYC_API } from "./hospital-kyc.api";

export const createHospitalKyc = (data: CreateHospitalKycRequestDto) => {
  return HttpClient.post<CreateHospitalKycResponseDto>(
    HOSPITAL_KYC_API.CREATE_HOSPITAL_KYC,
    data,
  );
};
