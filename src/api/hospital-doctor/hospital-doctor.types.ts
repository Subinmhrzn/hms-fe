import type { CreateDoctorKycResponseDto } from "../doctor-kyc/doctor-kyc.types";

export type TimeSlotDto = {
  day: string;
  from: string;
  to: string;
};

export type AddDoctorRequestDto = {
  doctorLicenseNumber: string;
  availability: TimeSlotDto[];
};

export type AddDoctorResponseDto = AddDoctorRequestDto & {
  uuid: string;
  hospitalId: string;
};

export type GetAddedDoctorDto = AddDoctorResponseDto & {
  doctor: CreateDoctorKycResponseDto;
};

export type GetAddedDoctorsResponseDto = GetAddedDoctorDto[];
