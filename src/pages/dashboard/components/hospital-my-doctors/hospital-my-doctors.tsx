import { HospitalMyDoctorsView } from './hospital-my-doctors-view';
import { useHospitalMyDoctors } from './use-hospital-my-doctors';

export const HospitalMyDoctors = () => {
  const logic = useHospitalMyDoctors();
  return <HospitalMyDoctorsView {...logic} />;
};
