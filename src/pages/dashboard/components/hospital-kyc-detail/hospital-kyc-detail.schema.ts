import z from "zod";

export const hospital_kyc_rejected_schema = z.object({
  rejectedReason: z.string(),
});
