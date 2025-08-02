import { Loader2Icon } from "lucide-react";
import type { DoctorKycViewProps } from "./doctor-kyc.types";
import { SelectField } from "@/components/form/select-field";
import { DataTable } from "@/components/data-table";
import { doctorKycColumns } from "./doctor-kyc-columns";
import { DoctorKycStatusFilterOptions } from "./doctor-kyc.constants";

export const DoctorKycView: React.FC<DoctorKycViewProps> = ({
  isDoctorKycsLoading,
  doctorKycsData,
  control,
}) => {
  if (isDoctorKycsLoading) {
    return (
      <div>
        <Loader2Icon className="animate-spin" />
        Loading Patients data
      </div>
    );
  }
  console.log({ doctorKycsData });

  return (
    <div className="container mx-auto py-10">
      <div className="max-w-2xs ml-auto">
        <SelectField
          control={control}
          label=""
          placeholder="Status"
          name="status"
          options={DoctorKycStatusFilterOptions}
        />
      </div>
      <div className="mt-4">
        <DataTable columns={doctorKycColumns} data={doctorKycsData} />
      </div>
    </div>
  );
};
