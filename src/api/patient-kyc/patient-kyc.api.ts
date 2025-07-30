const BASE = "/patient-kyc";

export const PATIENT_KYC_API = {
  CREATE_PATIENT_KYC: `${BASE}`,
  GET_ALL_PATIENT_KYCS: `${BASE}`,
} as const;
