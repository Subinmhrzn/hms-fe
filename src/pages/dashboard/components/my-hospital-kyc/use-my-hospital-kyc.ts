import { useGetMyHospitalKyc } from "@/api/hospital-kyc/hospital-kyc.queries";

export const useMyHospitalKyc = () => {
  const { data: hospitalKycData, isLoading: isLoadingHospitalKyc } =
    useGetMyHospitalKyc();

  return {
    hospitalKycData,
    isLoadingHospitalKyc,
  };
};
