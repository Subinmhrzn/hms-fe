export type CreateHospitalKycRequestDto = {
  hospitalName: string;
  licenseNumber: string;
  contactNumber: string;
  emergencyContact: string;
  address: string;
  licenseDocumentUrl: string;
};

export type CreateHospitalKycResponseDto = {
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
};
