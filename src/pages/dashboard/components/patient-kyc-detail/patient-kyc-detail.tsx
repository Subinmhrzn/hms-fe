import { PatientKycDetailView } from './patient-kyc-detail-view';
import { usePatientKycDetail } from './use-patient-kyc-detail';

export const PatientKycDetail = () => {
  const logic = usePatientKycDetail();
  return <PatientKycDetailView {...logic} />;
};
