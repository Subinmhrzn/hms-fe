import type z from "zod";
import { useDoctorKyc } from "./use-doctor-kyc";
import type { doctor_kyc_schema } from "./doctor-kyc.schema";

export type DoctorKycViewProps = ReturnType<typeof useDoctorKyc>;

export type DoctorKycFormValues = z.infer<typeof doctor_kyc_schema>;
