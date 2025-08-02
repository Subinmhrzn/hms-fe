const BASE = "/hospital-kyc";

export const HOSPITAL_KYC_API = {
  CREATE_HOSPITAL_KYC: `${BASE}`,
  GET_ALL_HOSPITAL_KYCS: `${BASE}`,
  GET_HOSPITAL_KYC_BY_ID: `${BASE}/:id`,
  VERIFY_HOSPITAL_KYC: `${BASE}/verify/:id`,
  GET_MY_HOSPITAL_KYC: `${BASE}/me`,
} as const;
