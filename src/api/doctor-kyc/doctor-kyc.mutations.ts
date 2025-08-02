import { useMutation } from "@tanstack/react-query";
import { createDoctorKyc, verifyDoctorKyc } from "./doctor-kyc";
import { DOCTOR_KYC_API } from "./doctor-kyc.api";

export const useCreateDoctorKycMutation = () =>
  useMutation({
    mutationFn: createDoctorKyc,
    meta: {
      successMessage: "Doctor KYC created!",
      errorMessage: "Failed to create KYC",
    },
  });

export const useVerifyDoctorKycMutation = () =>
  useMutation({
    mutationFn: verifyDoctorKyc,
    meta: {
      invalidatesQuery: [DOCTOR_KYC_API.GET_ALL_DOCTOR_KYCS],
      successMessage: "Doctor KYC status updated",
      errorMessage: "Failed to update KYC status",
    },
  });
