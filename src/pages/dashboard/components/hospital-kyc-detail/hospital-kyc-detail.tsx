import { HospitalKycDetailView } from "./hospital-kyc-detail-view";
import { useHospitalKycDetail } from "./use-hospital-kyc-detail";

export const HospitalKycDetail = () => {
  const logic = useHospitalKycDetail();
  return <HospitalKycDetailView {...logic} />;
};
