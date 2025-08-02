import { HttpClient } from "@/lib/axios/http-client";
import type {
  CreateDoctorKycRequestDto,
  CreateDoctorKycResponseDto,
  VerifyDoctorKycRequestDto,
} from "./doctor-kyc.types";
import { DOCTOR_KYC_API } from "./doctor-kyc.api";
import { generatePath } from "react-router";

export const createDoctorKyc = (data: CreateDoctorKycRequestDto) => {
  return HttpClient.post<CreateDoctorKycResponseDto>(
    DOCTOR_KYC_API.CREATE_DOCTOR_KYC,
    data,
  );
};

export const getAllDoctorKycs = (status?: string) => {
  return HttpClient.get<CreateDoctorKycResponseDto[]>(
    DOCTOR_KYC_API.GET_ALL_DOCTOR_KYCS,
    { params: { status } },
  );
};

export const getDoctorKycById = (id: string = "") => {
  return HttpClient.get<CreateDoctorKycResponseDto>(
    generatePath(DOCTOR_KYC_API.GET_DOCTOR_KYC_BY_ID, { id }),
  );
};

export const verifyDoctorKyc = (data: VerifyDoctorKycRequestDto) => {
  const { id, ...rest } = data;
  return HttpClient.patch<CreateDoctorKycResponseDto>(
    generatePath(DOCTOR_KYC_API.VERIFY_DOCTOR_KYC, { id }),
    rest,
  );
};

export const getMyDoctorKyc = () => {
  return HttpClient.get<CreateDoctorKycResponseDto>(
    DOCTOR_KYC_API.GET_MY_DOCTOR_KYC,
  );
};

export const getDoctorByLicenseNumber = (licenseNumber: string = "") => {
  console.log({ licenseNumber });
  return HttpClient.get<CreateDoctorKycResponseDto>(
    DOCTOR_KYC_API.GET_BY_LICENSE_NUMBER,
    { params: { licenseNumber } },
  );
};
