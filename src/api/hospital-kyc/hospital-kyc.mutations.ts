import { useMutation } from "@tanstack/react-query";
import { createHospitalKyc } from "./hospital-kyc";

export const useCreateHospitalKycMutation = () =>
  useMutation({
    mutationFn: createHospitalKyc,
    meta: {
      successMessage: "Hospital KYC created!",
      errorMessage: "Failed to create KYC",
    },
  });
