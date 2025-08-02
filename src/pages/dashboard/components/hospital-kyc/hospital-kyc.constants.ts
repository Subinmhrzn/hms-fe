import { VerificationStatus } from "@/constants/verification-status";

export const HospitalKycStatusFilterOptions = [
  { label: "ALL", value: "all" },
  { label: "ISVERIFIED", value: VerificationStatus.IsVerified },
  { label: "PENDING", value: VerificationStatus.Pending },
  { label: "REJECTED", value: VerificationStatus.Rejected },
];
