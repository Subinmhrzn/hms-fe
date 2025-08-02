import { DoctorKycView } from "./doctor-kyc-view";
import { useDoctorKyc } from "./use-doctor-kyc";

export const DoctorKyc = () => {
  const logic = useDoctorKyc();
  return <DoctorKycView {...logic} />;
};
