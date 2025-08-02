import { PatientSearchHospitalDoctorsView } from './patient-search-hospital-doctors-view';
import { usePatientSearchHospitalDoctors } from './use-patient-search-hospital-doctors';

export const PatientSearchHospitalDoctors = () => {
  const logic = usePatientSearchHospitalDoctors();
  return <PatientSearchHospitalDoctorsView {...logic} />;
};
