import { DoctorGivenPrescriptionsView } from './doctor-given-prescriptions-view';
import { useDoctorGivenPrescriptions } from './use-doctor-given-prescriptions';

export const DoctorGivenPrescriptions = () => {
  const logic = useDoctorGivenPrescriptions();
  return <DoctorGivenPrescriptionsView {...logic} />;
};
