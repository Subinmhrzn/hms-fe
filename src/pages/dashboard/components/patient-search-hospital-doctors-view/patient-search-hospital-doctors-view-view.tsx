import { Button } from "@/components/ui/button";
import { DoctorKycDetailList } from "../../shared/doctor-kyc-detail-list";
import type { PatientSearchHospitalDoctorsViewViewProps } from "./patient-search-hospital-doctors-view.types";

export const PatientSearchHospitalDoctorsViewView: React.FC<
  PatientSearchHospitalDoctorsViewViewProps
> = ({ isLoadingDoctorKycData, doctorKycData }) => {
  if (isLoadingDoctorKycData) {
    return <>Loading ...</>;
  }

  return (
    <>
      <DoctorKycDetailList doctorKycData={doctorKycData} />
      <div className="w-full flex mt-8 gap-4">
        <Button className="flex-1">Book Now</Button>
        <Button variant="outline" className="flex-1">
          Cancel
        </Button>
      </div>
    </>
  );
};
