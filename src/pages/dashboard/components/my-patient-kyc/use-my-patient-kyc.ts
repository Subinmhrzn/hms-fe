import { useGetMyPatientKyc } from "@/api/patient-kyc/patient-kyc.queries";

export const useMyPatientKyc = () => {
  const { data: patientKycData, isLoading: isLoadingPatientKyc } =
    useGetMyPatientKyc();

  return {
    patientKycData,
    isLoadingPatientKyc,
  };
};
