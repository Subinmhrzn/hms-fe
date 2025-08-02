import { MyPatientKycView } from './my-patient-kyc-view';
import { useMyPatientKyc } from './use-my-patient-kyc';

export const MyPatientKyc = () => {
  const logic = useMyPatientKyc();
  return <MyPatientKycView {...logic} />;
};
