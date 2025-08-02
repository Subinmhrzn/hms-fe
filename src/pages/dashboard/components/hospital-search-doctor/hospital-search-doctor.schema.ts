import z from "zod";

export const hospital_doctor_search_schema = z.object({
  licenseNumber: z.string(),
});
