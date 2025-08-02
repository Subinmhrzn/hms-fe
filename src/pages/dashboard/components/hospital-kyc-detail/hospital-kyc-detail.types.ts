import type z from "zod";
import { useHospitalKycDetail } from "./use-hospital-kyc-detail";
import type { hospital_kyc_rejected_schema } from "./hospital-kyc-detail.schema";

export type HospitalKycDetailViewProps = ReturnType<
  typeof useHospitalKycDetail
>;

export type HospitalKycDetailRejectedFormValues = z.infer<
  typeof hospital_kyc_rejected_schema
>;
