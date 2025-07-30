import z from "zod";

export const patient_kyc_schema = z.object({
  username: z.string().min(1, "Username is required"),
  fullName: z.string().min(1, "Full name is required"),
  dob: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Date of birth must be a valid ISO date",
  }),
  address: z.string(),
  phoneNumber: z.string(),
  emergencyContact: z.string(),
  bloodGroup: z.string(),
  documentType: z.string(),
  documentNumber: z.string(),
  documentFrontImageUrl: z.url(),
  documentBackImageUrl: z.url(),
});
