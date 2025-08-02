import { VerificationStatus } from "@/constants/verification-status";
import type { Appointment } from "./patient-bookings.types";

export const appointmentData: Appointment[] = [
  {
    uuid: "1",
    hospitalName: "Grandy Hospital",
    doctorFullName: "Dr. Rahul Kumar(123-123)",
    status: VerificationStatus.Pending,
    timeSlot: "12:00 - 14:00",
  },
  {
    uuid: "2",
    hospitalName: "Green City Hospital",
    doctorFullName: "Dr. Sohail Shah(123-124)",
    status: VerificationStatus.Confirmed,
    timeSlot: "07:00 - 08:00",
  },
  {
    uuid: "3",
    hospitalName: "Vayoda Hospital",
    doctorFullName: "Dr. Sunil Shrestha(123-125)",
    status: VerificationStatus.Cancelled,
    timeSlot: "20:00 - 21:00",
  },
];
