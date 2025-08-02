export type CreateDoctorKycRequestDto = {
  fullName: string;
  dob: string;
  address: string;
  phoneNumber: string;
  licenseNumber: string;
  specialization: string;
  experiencedYear: string;
  licenseImageUrl: string;
};

export type CreateDoctorKycResponseDto = {
  uuid: string;
  userId: string;
  fullName: string;
  dob: string;
  address: string;
  phoneNumber: string;
  licenseNumber: string;
  specialization: string;
  experiencedYear: string;
  licenseImageUrl: string;
  status: string;
  verifiedAt?: Date;
  verifiedBy?: string;
  rejectedReason?: string;
};

export type GetAllDoctorKycResponseDto = CreateDoctorKycResponseDto[];

export type VerifyDoctorKycRequestDto = {
  id: string;
  status: string;
  rejectedReason?: string;
};
