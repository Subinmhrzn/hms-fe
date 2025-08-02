import { DataTable } from "@/components/data-table";
import type { PatientKycViewProps } from "./patient-kyc.types";
import { Loader2Icon } from "lucide-react";
import { patientKycColumns } from "./patient-kyc-columns";
import { SelectField } from "@/components/form/select-field";
import { PatientKycStatusFilterOptions } from "./patient-kyc.constants";

export const PatientKycView: React.FC<PatientKycViewProps> = ({
  isPatientKycsLoading,
  patientKycsData,
  control,
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
      <div className="max-w-2xs ml-auto">
        <SelectField
          control={control}
          label=""
          placeholder="Status"
          name="status"
          options={PatientKycStatusFilterOptions}
        />
      </div>
      <div className="mt-4">
        <DataTable columns={patientKycColumns} data={patientKycsData} />
      </div>
    </div>
  );
};
