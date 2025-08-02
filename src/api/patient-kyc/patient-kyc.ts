import { HttpClient } from "@/lib/axios/http-client";
import type {
  CreatePatientKycRequestDto,
  CreatePatientKycResponseDto,
  VerifyPatientKycRequestDto,
} from "./patient-kyc.types";
import { PATIENT_KYC_API } from "./patient-kyc.api";
import { generatePath } from "react-router";

export const createPatientKyc = (data: CreatePatientKycRequestDto) => {
  return HttpClient.post<CreatePatientKycResponseDto>(
    PATIENT_KYC_API.CREATE_PATIENT_KYC,
    data,
  );
};

export const getAllPatientKycs = (status?: string) => {
  return HttpClient.get<CreatePatientKycResponseDto[]>(
    PATIENT_KYC_API.GET_ALL_PATIENT_KYCS,
    { params: { status } },
  );
};

export const getPatientKycById = (id: string = "") => {
  return HttpClient.get<CreatePatientKycResponseDto>(
    generatePath(PATIENT_KYC_API.GET_PATIENT_KYC_BY_ID, { id }),
  );
};

export const verifyPatientKyc = (data: VerifyPatientKycRequestDto) => {
  const { id, ...rest } = data;
  return HttpClient.patch<CreatePatientKycResponseDto>(
    generatePath(PATIENT_KYC_API.VERIFY_PATIENT_KYC, { id }),
    rest,
  );
};

export const getMyPatientKyc = () => {
  return HttpClient.get<CreatePatientKycResponseDto>(
    PATIENT_KYC_API.GET_MY_PATIENT_KYC,
  );
};
