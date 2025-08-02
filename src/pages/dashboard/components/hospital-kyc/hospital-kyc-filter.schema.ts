import z from "zod";

export const hospital_kyc_filter_schema = z.object({
  status: z.string(),
});
