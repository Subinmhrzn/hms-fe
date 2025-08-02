import { HospitalKycView } from "./hospital-kyc-view";
import { useHospitalKyc } from "./use-hospital-kyc";

export const HospitalKyc = () => {
  const logic = useHospitalKyc();
  return <HospitalKycView {...logic} />;
};
