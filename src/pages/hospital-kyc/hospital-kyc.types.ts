import type z from "zod";
import { useHospitalKyc } from "./use-hospital-kyc";
import type { hospital_kyc_schema } from "./hospital-kyc.schema";

export type HospitalKycViewProps = ReturnType<typeof useHospitalKyc>;

export type HospitalKycFormValues = z.infer<typeof hospital_kyc_schema>;
