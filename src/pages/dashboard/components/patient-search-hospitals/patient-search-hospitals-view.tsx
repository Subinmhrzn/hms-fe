import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { PatientSearchHospitalsViewProps } from "./patient-search-hospitals.types";
import { MapPinIcon, PhoneIcon } from "lucide-react";
import { generatePath, Link } from "react-router";
import { Route } from "@/routes";

export const PatientSearchHospitalsView: React.FC<
  PatientSearchHospitalsViewProps
> = ({ isLoadingHospitalsData, hospitalsData }) => {
  if (isLoadingHospitalsData) {
    return <>Loading ...</>;
  }

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold">Hospitals</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {hospitalsData.map((hospital) => (
          <Link
            key={hospital.uuid}
            to={generatePath(Route.Dashboard.PatientSearchHospitalDoctors, {
              hospitalId: hospital.userId,
            })}
            className="group"
          >
            <Card className="group-hover:bg-gray-200">
              <CardHeader>
                <CardTitle>{hospital.hospitalName}</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <MapPinIcon size={16} />
                  {hospital.address}
                </CardDescription>
                <CardDescription className="flex items-center gap-2">
                  <PhoneIcon size={16} />
                  {hospital.contactNumber}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};
