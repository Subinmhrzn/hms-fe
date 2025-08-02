import { Loader2Icon } from "lucide-react";
import type { HospitalKycViewProps } from "./hospital-kyc.types";
import { SelectField } from "@/components/form/select-field";
import { DataTable } from "@/components/data-table";
import { hospitalKycColumns } from "./hospital-kyc-columns";
import { HospitalKycStatusFilterOptions } from "./hospital-kyc.constants";

export const HospitalKycView: React.FC<HospitalKycViewProps> = ({
  isHospitalKycsLoading,
  hospitalKycsData,
  control,
}) => {
  if (isHospitalKycsLoading) {
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
          options={HospitalKycStatusFilterOptions}
        />
      </div>
      <div className="mt-4">
        <DataTable columns={hospitalKycColumns} data={hospitalKycsData} />
      </div>
    </div>
  );
};
