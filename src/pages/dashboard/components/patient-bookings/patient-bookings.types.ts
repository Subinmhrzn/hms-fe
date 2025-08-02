import { usePatientBookings } from "./use-patient-bookings";

export type PatientBookingsViewProps = ReturnType<typeof usePatientBookings>;

export type Appointment = {
  uuid: string;
  hospitalName: string;
  doctorFullName: string;
  timeSlot: string;
  status: string;
};
