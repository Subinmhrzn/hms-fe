import { usePatientMedicalHistory } from "./use-patient-medical-history";

export type PatientMedicalHistoryViewProps = ReturnType<
  typeof usePatientMedicalHistory
>;

export type MedicalHistory = {
  uuid: string;
  hospitalName: string;
  doctorFullName: string;
  checkupDate: string;
};
