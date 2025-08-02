const BASE = "/doctor-kyc";

export const DOCTOR_KYC_API = {
  CREATE_DOCTOR_KYC: `${BASE}`,
  GET_ALL_DOCTOR_KYCS: `${BASE}`,
  GET_DOCTOR_KYC_BY_ID: `${BASE}/:id`,
  VERIFY_DOCTOR_KYC: `${BASE}/verify/:id`,
  GET_MY_DOCTOR_KYC: `${BASE}/me`,
  GET_BY_LICENSE_NUMBER: `${BASE}/by-license-number`,
} as const;
