import { VerificationStatus } from "@/constants/verification-status";
import type { Appointment } from "./hospital-patient-bookings.types";

export const appointmentData: Appointment[] = [
  {
    uuid: "1",
    patientName: "Ganesh Kumar (ganesh_kumar)",
    doctorFullName: "Dr. Rahul Kumar(123-123)",
    status: VerificationStatus.Pending,
    timeSlot: "12:00 - 14:00",
  },
  {
    uuid: "2",
    patientName: "Ram Yadav (ram_123)",
    doctorFullName: "Dr. Sohail Shah(123-124)",
    status: VerificationStatus.Confirmed,
    timeSlot: "07:00 - 08:00",
  },
  {
    uuid: "3",
    patientName: "Maheswar Man Pradhan (mah_man_pradh)",
    doctorFullName: "Dr. Sunil Shrestha(123-125)",
    status: VerificationStatus.Cancelled,
    timeSlot: "20:00 - 21:00",
  },
  {
    uuid: "4",
    patientName: "Sikshya Manandhar (siksh_mndr)",
    doctorFullName: "Dr. Riya Shrestha(123-126)",
    status: VerificationStatus.Cancelled,
    timeSlot: "08:00 - 10:00",
  },
  {
    uuid: "5",
    patientName: "Dinesh Acharya (dnes_acharya)",
    doctorFullName: "Dr. Neha Kakkar(123-127)",
    status: VerificationStatus.Pending,
    timeSlot: "10:00 - 12:00",
  },
  {
    uuid: "6",
    patientName: "Priya Rai (pri_rai)",
    doctorFullName: "Dr. Shilpa Shetty(123-128)",
    status: VerificationStatus.Pending,
    timeSlot: "06:00 - 08:00",
  },
  {
    uuid: "6",
    patientName: "Priya Rai (priya_rai)",
    doctorFullName: "Dr. Mahima Maharjan(123-129)",
    status: VerificationStatus.Confirmed,
    timeSlot: "15:00 - 17:00",
  },
];
