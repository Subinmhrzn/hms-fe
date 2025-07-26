import z from "zod";

export const patient_kyc_schema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  userName: z.string().min(1, "Username is required"),
  dob: z.iso.date().min(1, "Date of birth is required"),
  address: z.string(),
  phoneNumber: z.string(),
  emergencyContact: z.string(),
  bloodGroup: z.string(),
  documentType: z.string(),
  documentNumber: z.string(),
  documentFrontImageUrl: z.url(),
  documentBackImageUrl: z.url(),
});
