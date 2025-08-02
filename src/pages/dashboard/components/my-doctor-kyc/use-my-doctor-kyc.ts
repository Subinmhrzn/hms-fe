import { useGetMydoctorKyc } from "@/api/doctor-kyc/doctor-kyc.queries";

export const useMyDoctorKyc = () => {
  const { data: doctorKycData, isLoading: isLoadingDoctorKyc } =
    useGetMydoctorKyc();

  return {
    doctorKycData,
    isLoadingDoctorKyc,
  };
};
