import z from "zod";

export const hospital_kyc_schema = z.object({
  hospitalName: z.string().min(1, "Hospital name is required"),
  licenseNumber: z.string().min(1, "License number is required"),
  contactNumber: z.string(),
  emergencyContact: z.string(),
  address: z.string(),
  licenseDocumentUrl: z.url(),
});
