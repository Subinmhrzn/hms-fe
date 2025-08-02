import { MyDoctorKycView } from "./my-doctor-kyc-view";
import { useMyDoctorKyc } from "./use-my-doctor-kyc";

export const MyDoctorKyc = () => {
  const logic = useMyDoctorKyc();
  return <MyDoctorKycView {...logic} />;
};
