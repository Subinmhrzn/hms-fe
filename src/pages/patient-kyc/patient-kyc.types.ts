import type z from "zod";
import { usePatientKyc } from "./use-patient-kyc";
import type { patient_kyc_schema } from "./patient-kyc.schema";

export type PatientKycViewProps = ReturnType<typeof usePatientKyc>;

export type PatientKycFormValues = z.infer<typeof patient_kyc_schema>;
