import { PatientBookingsView } from "./patient-bookings-view";
import { usePatientBookings } from "./use-patient-bookings";

export const PatientBookings = () => {
  const logic = usePatientBookings();
  return <PatientBookingsView {...logic} />;
};
