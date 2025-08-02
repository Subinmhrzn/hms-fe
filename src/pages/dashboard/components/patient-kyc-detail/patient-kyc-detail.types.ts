import type z from "zod";
import { usePatientKycDetail } from "./use-patient-kyc-detail";
import type { patient_kyc_rejected_schema } from "./patient-kyc-detail.schema";

export type PatientKycDetailViewProps = ReturnType<typeof usePatientKycDetail>;

export type PatientKycDetailRejectedFormValues = z.infer<
  typeof patient_kyc_rejected_schema
>;
