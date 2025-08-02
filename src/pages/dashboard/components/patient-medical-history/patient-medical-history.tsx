import { PatientMedicalHistoryView } from './patient-medical-history-view';
import { usePatientMedicalHistory } from './use-patient-medical-history';

export const PatientMedicalHistory = () => {
  const logic = usePatientMedicalHistory();
  return <PatientMedicalHistoryView {...logic} />;
};
