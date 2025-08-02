const BASE = "/patient-kyc";

export const PATIENT_KYC_API = {
  CREATE_PATIENT_KYC: `${BASE}`,
  GET_ALL_PATIENT_KYCS: `${BASE}`,
  GET_PATIENT_KYC_BY_ID: `${BASE}/:id`,
  VERIFY_PATIENT_KYC: `${BASE}/verify/:id`,
  GET_MY_PATIENT_KYC: `${BASE}/me`,
} as const;
