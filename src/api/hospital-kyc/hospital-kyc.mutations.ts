import { useMutation } from "@tanstack/react-query";
import { createHospitalKyc, verifyHospitalKyc } from "./hospital-kyc";
import { HOSPITAL_KYC_API } from "./hospital-kyc.api";

export const useCreateHospitalKycMutation = () =>
  useMutation({
    mutationFn: createHospitalKyc,
    meta: {
      successMessage: "Hospital KYC created!",
      errorMessage: "Failed to create KYC",
    },
  });

export const useVerifyHospitalKycMutation = () =>
  useMutation({
    mutationFn: verifyHospitalKyc,
    meta: {
      invalidatesQuery: [HOSPITAL_KYC_API.GET_ALL_HOSPITAL_KYCS],
      successMessage: "Hospital KYC status updated",
      errorMessage: "Failed to update KYC status",
    },
  });
