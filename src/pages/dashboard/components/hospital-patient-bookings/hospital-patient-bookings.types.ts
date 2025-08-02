import { useHospitalPatientBookings } from "./use-hospital-patient-bookings";

export type HospitalPatientBookingsViewProps = ReturnType<
  typeof useHospitalPatientBookings
>;

export type Appointment = {
  uuid: string;
  patientName: string;
  doctorFullName: string;
  timeSlot: string;
  status: string;
};
