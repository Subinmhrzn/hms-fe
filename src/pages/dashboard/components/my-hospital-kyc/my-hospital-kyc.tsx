import { MyHospitalKycView } from "./my-hospital-kyc-view";
import { useMyHospitalKyc } from "./use-my-hospital-kyc";

export const MyHospitalKyc = () => {
  const logic = useMyHospitalKyc();
  return <MyHospitalKycView {...logic} />;
};
