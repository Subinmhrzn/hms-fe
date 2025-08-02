import { useGetDoctorKycByIdQuery } from "@/api/doctor-kyc/doctor-kyc.queries";
import { useParams } from "react-router";

export const useHosptialDoctorView = () => {
  const { doctorKycId } = useParams<{ doctorKycId: string }>();
  const { data: doctorKycData, isLoading: isDoctorKycDataLoading } =
    useGetDoctorKycByIdQuery(doctorKycId);

  return {
    doctorKycData,
    isDoctorKycDataLoading,
  };
};
