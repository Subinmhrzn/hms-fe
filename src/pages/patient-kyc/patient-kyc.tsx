import { PatientKycView } from './patient-kyc-view';
import { usePatientKyc } from './use-patient-kyc';

export const PatientKyc = () => {
  const logic = usePatientKyc();
  return <PatientKycView {...logic} />;
};
