import z from "zod";

export const patient_kyc_filter_schema = z.object({
  status: z.string(),
});
