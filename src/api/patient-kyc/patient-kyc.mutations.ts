import { useMutation } from "@tanstack/react-query";
import { createPatientKyc, verifyPatientKyc } from "./patient-kyc";
import { PATIENT_KYC_API } from "./patient-kyc.api";

export const useCreatePatientKycMutation = () =>
  useMutation({
    mutationFn: createPatientKyc,
    meta: {
      successMessage: "Patient KYC created!",
      errorMessage: "Failed to create KYC",
    },
  });

export const useVerifyPatientKycMutation = () =>
  useMutation({
    mutationFn: verifyPatientKyc,
    meta: {
      invalidatesQuery: [PATIENT_KYC_API.GET_ALL_PATIENT_KYCS],
      successMessage: "Patient KYC status updated",
      errorMessage: "Failed to update KYC status",
    },
  });
