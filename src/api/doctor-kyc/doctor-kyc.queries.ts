import { useMutation, useQuery } from "@tanstack/react-query";
import { DOCTOR_KYC_API } from "./doctor-kyc.api";
import {
  getAllDoctorKycs,
  getMyDoctorKyc,
  getDoctorKycById,
  getDoctorByLicenseNumber,
} from "./doctor-kyc";

export const useGetAlldoctorKycsQuery = (status?: string) => {
  return useQuery({
    queryKey: [DOCTOR_KYC_API.GET_ALL_DOCTOR_KYCS, status],
    queryFn: () => getAllDoctorKycs(status),
    select: (response) => response.data,
  });
};

export const useGetDoctorKycByIdQuery = (id?: string) => {
  return useQuery({
    queryKey: [DOCTOR_KYC_API.GET_DOCTOR_KYC_BY_ID, id],
    queryFn: () => getDoctorKycById(id),
    select: (response) => response.data,
    enabled: !!id,
  });
};

export const useGetMydoctorKyc = () => {
  return useQuery({
    queryKey: [DOCTOR_KYC_API.GET_MY_DOCTOR_KYC],
    queryFn: getMyDoctorKyc,
    select: (response) => response.data,
  });
};

export const useGetDoctorByLicenseNumber = (licenseNumber: string) => {
  return useQuery({
    queryKey: [DOCTOR_KYC_API.GET_BY_LICENSE_NUMBER, licenseNumber],
    queryFn: () => getDoctorByLicenseNumber(),
    select: (response) => response.data,
    enabled: !!licenseNumber,
  });
};

export const useGetDoctorByLicenseMutation = () => {
  return useMutation({
    mutationFn: getDoctorByLicenseNumber,
  });
};
