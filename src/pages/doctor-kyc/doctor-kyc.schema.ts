import z from "zod";

export const doctor_kyc_schema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  dob: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Date of birth must be a valid ISO date",
  }),
  address: z.string(),
  phoneNumber: z.string(),
  licenseNumber: z.string(),
  specialization: z.string(),
  experiencedYear: z.string(),
  licenseImageUrl: z.url(),
});
