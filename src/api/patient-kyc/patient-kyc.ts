import { HttpClient } from "@/lib/axios/http-client";
import type {
  CreatePatientKycRequestDto,
  CreatePatientKycResponseDto,
} from "./patient-kyc.types";
import { PATIENT_KYC_API } from "./patient-kyc.api";

export const createPatientKyc = (data: CreatePatientKycRequestDto) => {
  return HttpClient.post<CreatePatientKycResponseDto>(
    PATIENT_KYC_API.CREATE_PATIENT_KYC,
    data,
  );
};

export const getAllPatientKycs = () => {
  return HttpClient.get<CreatePatientKycResponseDto[]>(
    PATIENT_KYC_API.GET_ALL_PATIENT_KYCS,
  );
};
