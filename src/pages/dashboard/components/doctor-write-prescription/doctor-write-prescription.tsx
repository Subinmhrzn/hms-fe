import { DoctorWritePrescriptionView } from './doctor-write-prescription-view';
import { useDoctorWritePrescription } from './use-doctor-write-prescription';

export const DoctorWritePrescription = () => {
  const logic = useDoctorWritePrescription();
  return <DoctorWritePrescriptionView {...logic} />;
};
