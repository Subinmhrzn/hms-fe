import z from "zod";

export const doctor_kyc_filter_schema = z.object({
  status: z.string(),
});
