import { useGetDoctorKycByIdQuery } from "@/api/doctor-kyc/doctor-kyc.queries";
import { useParams } from "react-router";

export const usePatientSearchHospitalDoctorsView = () => {
  const { doctorId } = useParams<{ hospitalId: string; doctorId: string }>();
  const { data: doctorKycData, isLoading: isLoadingDoctorKycData } =
    useGetDoctorKycByIdQuery(doctorId);

  return {
    doctorKycData,
    isLoadingDoctorKycData,
  };
};
