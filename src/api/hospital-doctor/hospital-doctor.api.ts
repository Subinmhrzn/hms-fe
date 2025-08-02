const BASE = "/hospital-doctor";

export const HOSPITAL_DOCTOR_API = {
  ADD_DOCTOR: `${BASE}/add`,
  GET_ADDED_DOCTORS: `${BASE}`,
  GET_ADDED_DOCTORS_BY_HOSPITAL_ID: `${BASE}/hospitalId/:id`,
} as const;
