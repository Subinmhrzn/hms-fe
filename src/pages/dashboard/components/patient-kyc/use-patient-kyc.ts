import { useGetAllPatientKycsQuery } from "@/api/patient-kyc/patient-kyc.queries";

export const usePatientKyc = () => {
  const { data: patientKycsData = [], isLoading: isPatientKycsLoading } =
    useGetAllPatientKycsQuery();

  return { patientKycsData, isPatientKycsLoading };
};
