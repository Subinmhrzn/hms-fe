import z from "zod";

export const doctor_kyc_rejected_schema = z.object({
  rejectedReason: z.string(),
});
