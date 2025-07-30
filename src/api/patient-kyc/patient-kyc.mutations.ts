import { useMutation } from "@tanstack/react-query";
import { createPatientKyc } from "./patient-kyc";

export const useCreatePatientKycMutation = () =>
  useMutation({
    mutationFn: createPatientKyc,
    meta: {
      successMessage: "Patient KYC created!",
      errorMessage: "Failed to create KYC",
    },
  });
