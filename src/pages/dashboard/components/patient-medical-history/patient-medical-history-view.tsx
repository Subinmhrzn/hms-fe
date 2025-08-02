import { DataTable } from "@/components/data-table";
import type { PatientMedicalHistoryViewProps } from "./patient-medical-history.types";
import { medicalHistoryColumns } from "./patient-medical-history.columns";
import { medicalHistoryData } from "./patient-medical-history.constants";

export const PatientMedicalHistoryView: React.FC<
  PatientMedicalHistoryViewProps
> = () => {
  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold">My Medical History</h2>
      <div className="mt-4">
        <DataTable columns={medicalHistoryColumns} data={medicalHistoryData} />
      </div>
    </div>
  );
};
