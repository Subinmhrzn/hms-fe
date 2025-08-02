import { useQuery } from "@tanstack/react-query";
import { HOSPITAL_DOCTOR_API } from "./hospital-doctor.api";
import {
  getAddedDoctors,
  getAddedDoctorsByHospitalId,
  getDoctorByHospitalAndDoctorId,
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

export const useGetDoctorByHospitalAndDoctorId = (
  hospitalId: string,
  doctorId: string,
) => {
  return useQuery({
    queryKey: [HOSPITAL_DOCTOR_API, hospitalId, doctorId],
    queryFn: () => getDoctorByHospitalAndDoctorId(hospitalId, doctorId),
    select: (response) => response.data,
    enabled: !!hospitalId && !!doctorId,
  });
};
