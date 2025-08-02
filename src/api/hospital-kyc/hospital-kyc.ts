import { HttpClient } from "@/lib/axios/http-client";
import type {
  CreateHospitalKycRequestDto,
  CreateHospitalKycResponseDto,
  VerifyHospitalKycRequestDto,
} from "./hospital-kyc.types";
import { HOSPITAL_KYC_API } from "./hospital-kyc.api";
import { generatePath } from "react-router";

export const createHospitalKyc = (data: CreateHospitalKycRequestDto) => {
  return HttpClient.post<CreateHospitalKycResponseDto>(
    HOSPITAL_KYC_API.CREATE_HOSPITAL_KYC,
    data,
  );
};

export const getAllHospitalKycs = (status?: string) => {
  return HttpClient.get<CreateHospitalKycResponseDto[]>(
    HOSPITAL_KYC_API.GET_ALL_HOSPITAL_KYCS,
    { params: { status } },
  );
};

export const getHospitalKycById = (id: string = "") => {
  return HttpClient.get<CreateHospitalKycResponseDto>(
    generatePath(HOSPITAL_KYC_API.GET_HOSPITAL_KYC_BY_ID, { id }),
  );
};

export const verifyHospitalKyc = (data: VerifyHospitalKycRequestDto) => {
  const { id, ...rest } = data;
  return HttpClient.patch<CreateHospitalKycResponseDto>(
    generatePath(HOSPITAL_KYC_API.VERIFY_HOSPITAL_KYC, { id }),
    rest,
  );
};

export const getMyHospitalKyc = () => {
  return HttpClient.get<CreateHospitalKycResponseDto>(
    HOSPITAL_KYC_API.GET_MY_HOSPITAL_KYC,
  );
};
