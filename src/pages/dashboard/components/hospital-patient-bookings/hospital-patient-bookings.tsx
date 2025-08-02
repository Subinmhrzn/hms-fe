import { HospitalPatientBookingsView } from './hospital-patient-bookings-view';
import { useHospitalPatientBookings } from './use-hospital-patient-bookings';

export const HospitalPatientBookings = () => {
  const logic = useHospitalPatientBookings();
  return <HospitalPatientBookingsView {...logic} />;
};
