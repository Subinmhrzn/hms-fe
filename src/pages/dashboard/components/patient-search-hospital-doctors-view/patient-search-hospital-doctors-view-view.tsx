import { Button } from "@/components/ui/button";
import { DoctorKycDetailList } from "../../shared/doctor-kyc-detail-list";
import type { PatientSearchHospitalDoctorsViewViewProps } from "./patient-search-hospital-doctors-view.types";
import { Badge } from "@/components/ui/badge";
import { generatePath, Link } from "react-router";
import { Route } from "@/routes";

export const PatientSearchHospitalDoctorsViewView: React.FC<
  PatientSearchHospitalDoctorsViewViewProps
> = ({
  hospitalId,
  isLoadingDoctorKycData,
  doctorKycData,
  doctorDataByHospitalAndDoctorId,
  isLoadingDoctorByHospitalAndDoctorId,
}) => {
  if (isLoadingDoctorKycData || isLoadingDoctorByHospitalAndDoctorId) {
    return <>Loading ...</>;
  }

  return (
    <>
      <DoctorKycDetailList doctorKycData={doctorKycData} />
      <div>
        <h3 className="text-xl font-medium">Availability</h3>
        {doctorDataByHospitalAndDoctorId?.availability.map((item, index) => (
          <Badge
            key={index}
            variant="outline"
          >{`${item.from}-${item.to} ${item.day}`}</Badge>
        ))}
      </div>

      <div className="w-full flex mt-8 gap-4">
        <Button className="flex-1">Book Now</Button>
        <Button variant="outline" className="flex-1" asChild>
          <Link
            to={generatePath(Route.Dashboard.PatientSearchHospitalDoctors, {
              hospitalId,
            })}
          >
            Cancel
          </Link>
        </Button>
      </div>
    </>
  );
};
