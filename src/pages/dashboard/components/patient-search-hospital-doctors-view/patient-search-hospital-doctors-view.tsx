import { PatientSearchHospitalDoctorsViewView } from './patient-search-hospital-doctors-view-view';
import { usePatientSearchHospitalDoctorsView } from './use-patient-search-hospital-doctors-view';

export const PatientSearchHospitalDoctorsView = () => {
  const logic = usePatientSearchHospitalDoctorsView();
  return <PatientSearchHospitalDoctorsViewView {...logic} />;
};
