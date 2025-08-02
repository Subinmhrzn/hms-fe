import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { DoctorCardProps } from "./doctor-card.types";
import { BriefcaseMedicalIcon, PhoneIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  return (
    <Card className="max-w-sm group-hover:bg-gray-200">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <h3>{doctor.doctor.fullName}</h3>
        </CardTitle>
        <CardDescription className="flex doctors-center gap-2">
          <BriefcaseMedicalIcon size={16} />
          {doctor.doctorLicenseNumber}
        </CardDescription>
        <CardDescription className="flex doctors-center gap-2">
          <PhoneIcon size={16} />
          {doctor.doctor.phoneNumber}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 flex-wrap">
          {doctor.availability.map((a, i) => (
            <Badge
              key={i}
              variant="outline"
            >{`${a.from}-${a.to} ${a.day}`}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
