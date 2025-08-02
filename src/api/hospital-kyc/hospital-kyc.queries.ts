import { useQuery } from "@tanstack/react-query";
import { HOSPITAL_KYC_API } from "./hospital-kyc.api";
import {
  getAllHospitalKycs,
  getMyHospitalKyc,
  getHospitalKycById,
} from "./hospital-kyc";

export const useGetAllHospitalKycsQuery = (status?: string) => {
  return useQuery({
    queryKey: [HOSPITAL_KYC_API.GET_ALL_HOSPITAL_KYCS, status],
    queryFn: () => getAllHospitalKycs(status),
    select: (response) => response.data,
  });
};

export const useGetHospitalKycByIdQuery = (id?: string) => {
  return useQuery({
    queryKey: [HOSPITAL_KYC_API.GET_HOSPITAL_KYC_BY_ID, id],
    queryFn: () => getHospitalKycById(id),
    select: (response) => response.data,
    enabled: !!id,
  });
};

export const useGetMyHospitalKyc = () => {
  return useQuery({
    queryKey: [HOSPITAL_KYC_API.GET_MY_HOSPITAL_KYC],
    queryFn: getMyHospitalKyc,
    select: (response) => response.data,
  });
};
