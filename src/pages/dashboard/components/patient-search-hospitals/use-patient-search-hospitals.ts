import { useGetAllHospitalKycsQuery } from "@/api/hospital-kyc/hospital-kyc.queries";
import { VerificationStatus } from "@/constants/verification-status";

export const usePatientSearchHospitals = () => {
  const { data: hospitalsData = [], isLoading: isLoadingHospitalsData } =
    useGetAllHospitalKycsQuery(VerificationStatus.IsVerified);

  return {
    hospitalsData,
    isLoadingHospitalsData,
  };
};
