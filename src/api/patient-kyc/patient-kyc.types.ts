export type CreatePatientKycRequestDto = {
  username: string;
  fullName: string;
  dob: string;
  address: string;
  phoneNumber: string;
  emergencyContact: string;
  bloodGroup: string;
  documentType: string;
  documentNumber: string;
  documentFrontImageUrl: string;
  documentBackImageUrl: string;
};

export type CreatePatientKycResponseDto = {
  uuid: string;
  userId: string;
  username: string;
  fullName: string;
  dob: string;
  address: string;
  phoneNumber: string;
  emergencyContact: string;
  bloodGroup: string;
  documentType: string;
  documentNumber: string;
  documentFrontImageUrl: string;
  documentBackImageUrl: string;
  status: string;
  verifiedAt?: Date;
  verifiedBy?: string;
};

export type GetAllPatientKycResponseDto = CreatePatientKycRequestDto[];
