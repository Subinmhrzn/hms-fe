import { HttpClient } from "@/lib/axios/http-client";
import { HOSPITAL_DOCTOR_API } from "./hospital-doctor.api";
import type {
  AddDoctorRequestDto,
  AddDoctorResponseDto,
  GetAddedDoctorDto,
  GetAddedDoctorsResponseDto,
} from "./hospital-doctor.types";
import { generatePath } from "react-router";

export const addDoctor = async (data: AddDoctorRequestDto) => {
  return await HttpClient.post<AddDoctorResponseDto>(
    HOSPITAL_DOCTOR_API.ADD_DOCTOR,
    data,
  );
};

export const getAddedDoctors = async () => {
  return await HttpClient.get<GetAddedDoctorsResponseDto>(
    HOSPITAL_DOCTOR_API.GET_ADDED_DOCTORS,
  );
};

export const getAddedDoctorsByHospitalId = async (hospitalId: string) => {
  return await HttpClient.get<GetAddedDoctorsResponseDto>(
    generatePath(HOSPITAL_DOCTOR_API.GET_ADDED_DOCTORS_BY_HOSPITAL_ID, {
      id: hospitalId,
    }),
  );
};

export const getDoctorByHospitalAndDoctorId = async (
  hospitalId: string,
  doctorId: string,
) => {
  return await HttpClient.get<GetAddedDoctorDto>(
    HOSPITAL_DOCTOR_API.GET_DOCTOR_BY_HOSPITAL_AND_DOCTOR_ID,
    { params: { hospitalId, doctorId } },
  );
};
