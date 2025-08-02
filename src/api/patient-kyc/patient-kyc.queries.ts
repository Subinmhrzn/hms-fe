import { useQuery } from "@tanstack/react-query";
import { PATIENT_KYC_API } from "./patient-kyc.api";
import {
  getAllPatientKycs,
  getMyPatientKyc,
  getPatientKycById,
} from "./patient-kyc";

export const useGetAllPatientKycsQuery = (status?: string) => {
  return useQuery({
    queryKey: [PATIENT_KYC_API.GET_ALL_PATIENT_KYCS, status],
    queryFn: () => getAllPatientKycs(status),
    select: (response) => response.data,
  });
};

export const useGetPatientKycByIdQuery = (id?: string) => {
  return useQuery({
    queryKey: [PATIENT_KYC_API.GET_PATIENT_KYC_BY_ID, id],
    queryFn: () => getPatientKycById(id),
    select: (response) => response.data,
    enabled: !!id,
  });
};

export const useGetMyPatientKyc = () => {
  return useQuery({
    queryKey: [PATIENT_KYC_API.GET_MY_PATIENT_KYC],
    queryFn: getMyPatientKyc,
    select: (response) => response.data,
  });
};
