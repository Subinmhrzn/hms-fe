import type z from "zod";
import { useDoctorKycDetail } from "./use-doctor-kyc-detail";
import type { doctor_kyc_rejected_schema } from "./doctor-kyc-detail.schema";

export type DoctorKycDetailViewProps = ReturnType<typeof useDoctorKycDetail>;

export type DoctorKycDetailRejectedFormValues = z.infer<
  typeof doctor_kyc_rejected_schema
>;
