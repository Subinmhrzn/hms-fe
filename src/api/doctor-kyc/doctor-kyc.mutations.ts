import { useMutation } from "@tanstack/react-query";
import { createDoctorKyc } from "./doctor-kyc";

export const useCreateDoctorKycMutation = () =>
  useMutation({
    mutationFn: createDoctorKyc,
    meta: {
      successMessage: "Doctor KYC created!",
      errorMessage: "Failed to create KYC",
    },
  });
