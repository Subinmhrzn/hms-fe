import { PatientSearchHospitalsView } from './patient-search-hospitals-view';
import { usePatientSearchHospitals } from './use-patient-search-hospitals';

export const PatientSearchHospitals = () => {
  const logic = usePatientSearchHospitals();
  return <PatientSearchHospitalsView {...logic} />;
};
