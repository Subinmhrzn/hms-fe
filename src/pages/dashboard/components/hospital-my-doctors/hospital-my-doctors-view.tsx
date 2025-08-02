import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { HospitalMyDoctorsViewProps } from "./hospital-my-doctors.types";
import { Badge } from "@/components/ui/badge";
import { BriefcaseMedicalIcon, EyeIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generatePath, Link } from "react-router";
import { Route } from "@/routes";
import { DoctorCard } from "../../shared/doctor-card";

export const HospitalMyDoctorsView: React.FC<HospitalMyDoctorsViewProps> = ({
  addedDoctors,
  isAddedDoctorsLoading,
}) => {
  if (isAddedDoctorsLoading) {
    return <>Loading...</>;
  }

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold">Our Added Doctors</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {addedDoctors.map((item) => (
          <Link
            key={item.uuid}
            to={generatePath(Route.Dashboard.HospitalDoctorView, {
              doctorKycId: item.doctor.uuid,
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
