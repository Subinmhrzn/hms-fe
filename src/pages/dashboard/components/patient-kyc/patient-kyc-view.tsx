import { DataTable } from "@/components/data-table";
import type { PatientKycViewProps } from "./patient-kyc.types";
import { patientKycColumns } from "./patient-kyc-columns";
import { Loader2Icon } from "lucide-react";

export const PatientKycView: React.FC<PatientKycViewProps> = ({
  isPatientKycsLoading,
  patientKycsData,
}) => {
  if (isPatientKycsLoading) {
    return (
      <div>
        <Loader2Icon className="animate-spin" />
        Loading Patients data
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={patientKycColumns} data={patientKycsData} />
    </div>
  );
};
