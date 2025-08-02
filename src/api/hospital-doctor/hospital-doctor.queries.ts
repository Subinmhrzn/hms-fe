import { useQuery } from "@tanstack/react-query";
import { HOSPITAL_DOCTOR_API } from "./hospital-doctor.api";
import {
  getAddedDoctors,
  getAddedDoctorsByHospitalId,
} from "./hospital-doctor";

export const useGetAddedDoctorsQuery = () => {
  return useQuery({
    queryKey: [HOSPITAL_DOCTOR_API],
    queryFn: getAddedDoctors,
    select: (response) => response.data,
  });
};

export const useGetAddedDoctorsByHospitalIdQuery = (hospitalId: string) => {
  return useQuery({
    queryKey: [HOSPITAL_DOCTOR_API],
    queryFn: () => getAddedDoctorsByHospitalId(hospitalId),
    select: (response) => response.data,
    enabled: !!hospitalId,
  });
};
