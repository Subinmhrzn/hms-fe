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
};
