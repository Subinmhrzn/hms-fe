import { InputField } from "@/components/form/input-field";
import type { HospitalSearchDoctorViewProps } from "./hospital-search-doctor.types";
import { Button } from "@/components/ui/button";
import { DoctorKycDetailList } from "../../shared/doctor-kyc-detail-list";
import { AddDoctorButtonWithDialog } from "./add-doctor-button-with-dialog";

export const HospitalSearchDoctorView: React.FC<
  HospitalSearchDoctorViewProps
> = ({ control, onSubmit, foundDoctor }) => {
  return (
    <>
      <h2 className="text-2xl mt-4 font-bold">Search Doctor</h2>
      <form onSubmit={onSubmit}>
        <div className="flex gap-2">
          <div className="flex-1">
            <InputField
              control={control}
              name="licenseNumber"
              label=""
              placeholder="Doctor's License Number"
            />
          </div>
          <div className="self-end">
            <Button type="submit" variant="outline">
              Search
            </Button>
          </div>
        </div>
      </form>
      {foundDoctor && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold">Results</h2>
          <DoctorKycDetailList doctorKycData={foundDoctor} />
          <div className="w-full mt-8 flex gap-4">
            <AddDoctorButtonWithDialog
              doctorLicenseNumber={foundDoctor.licenseNumber}
            />
            <Button variant="outline" className="flex-1">
              Cancel
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
