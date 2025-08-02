import { useGetDoctorKycByIdQuery } from "@/api/doctor-kyc/doctor-kyc.queries";
import { useGetDoctorByHospitalAndDoctorId } from "@/api/hospital-doctor/hospital-doctor.queries";
import { useParams } from "react-router";

export const usePatientSearchHospitalDoctorsView = () => {
  const { hospitalId = "", doctorId = "" } = useParams<{
    hospitalId: string;
    doctorId: string;
  }>();

  const {
    data: doctorDataByHospitalAndDoctorId,
    isLoading: isLoadingDoctorByHospitalAndDoctorId,
  } = useGetDoctorByHospitalAndDoctorId(hospitalId, doctorId);
  const { data: doctorKycData, isLoading: isLoadingDoctorKycData } =
    useGetDoctorKycByIdQuery(doctorId);

  return {
    hospitalId,
    doctorKycData,
    isLoadingDoctorKycData,
    doctorDataByHospitalAndDoctorId,
    isLoadingDoctorByHospitalAndDoctorId,
  };
};
