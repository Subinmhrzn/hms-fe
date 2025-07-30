import { useQuery } from "@tanstack/react-query";
import { PATIENT_KYC_API } from "./patient-kyc.api";
import { getAllPatientKycs } from "./patient-kyc";

export const useGetAllPatientKycsQuery = () => {
  return useQuery({
    queryKey: [PATIENT_KYC_API.GET_ALL_PATIENT_KYCS],
    queryFn: getAllPatientKycs,
    select: (response) => response.data,
  });
};
