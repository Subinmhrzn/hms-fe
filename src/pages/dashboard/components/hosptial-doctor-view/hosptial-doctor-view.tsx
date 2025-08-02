import { HosptialDoctorViewView } from './hosptial-doctor-view-view';
import { useHosptialDoctorView } from './use-hosptial-doctor-view';

export const HosptialDoctorView = () => {
  const logic = useHosptialDoctorView();
  return <HosptialDoctorViewView {...logic} />;
};
