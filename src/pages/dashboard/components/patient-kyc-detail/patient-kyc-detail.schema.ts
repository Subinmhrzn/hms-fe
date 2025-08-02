import z from "zod";

export const patient_kyc_rejected_schema = z.object({
  rejectedReason: z.string(),
});
