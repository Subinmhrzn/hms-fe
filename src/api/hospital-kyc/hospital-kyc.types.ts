export type CreateHospitalKycRequestDto = {
  hospitalName: string;
  licenseNumber: string;
  contactNumber: string;
  emergencyContact: string;
  address: string;
  licenseDocumentUrl: string;
};

export type CreateHospitalKycResponseDto = {
  uuid: string;
  userId: string;
  hospitalName: string;
  licenseNumber: string;
  contactNumber: string;
  emergencyContact: string;
  address: string;
  licenseDocumentUrl: string;

  status?: string;
  verifiedAt?: Date;
  verifiedBy?: string;
  rejectedReason?: string;
};

export type GetAllHospitalKycResponseDto = CreateHospitalKycResponseDto[];

export type VerifyHospitalKycRequestDto = {
  id: string;
  status: string;
  rejectedReason?: string;
};
