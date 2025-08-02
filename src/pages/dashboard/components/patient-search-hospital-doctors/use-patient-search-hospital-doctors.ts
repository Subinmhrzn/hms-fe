import { useGetAddedDoctorsByHospitalIdQuery } from "@/api/hospital-doctor/hospital-doctor.queries";
import { useParams } from "react-router";

export const usePatientSearchHospitalDoctors = () => {
  const { hospitalId = "" } = useParams<{ hospitalId: string }>();
  const { data: hospitalDoctors = [], isLoading: isLoadingHospitalDoctors } =
    useGetAddedDoctorsByHospitalIdQuery(hospitalId);

  return {
    isLoadingHospitalDoctors,
    hospitalDoctors,
  };
};
