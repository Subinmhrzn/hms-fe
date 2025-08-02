import { useDoctorGivenPrescriptions } from "./use-doctor-given-prescriptions";

export type DoctorGivenPrescriptionsViewProps = ReturnType<
  typeof useDoctorGivenPrescriptions
>;

export type Prescription = {
  uuid: string;
  patientUsername: string;
  patientSymptoms: string;
  diagnosis: string;
  prescription: string;
  prescriptionDate: string;
};
