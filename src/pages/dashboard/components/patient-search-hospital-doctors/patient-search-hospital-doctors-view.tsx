import type { PatientSearchHospitalDoctorsViewProps } from "./patient-search-hospital-doctors.types";
import { DoctorCard } from "../../shared/doctor-card";
import { generatePath, Link } from "react-router";
import { Route } from "@/routes";

export const PatientSearchHospitalDoctorsView: React.FC<
  PatientSearchHospitalDoctorsViewProps
> = ({ hospitalDoctors, isLoadingHospitalDoctors }) => {
  if (isLoadingHospitalDoctors) {
    return <>Loading ...</>;
  }

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold">Hospital Doctors</h2>
      <div className="mt-4">
        {hospitalDoctors.map((item) => (
          <Link
            key={item.uuid}
            to={generatePath(Route.Dashboard.PatientSearchHospitalDoctorsView, {
              hospitalId: item.hospitalId,
              doctorId: item.doctor.uuid,
            })}
            className="group"
          >
            <DoctorCard doctor={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};
