import type { ColumnDef } from "@tanstack/react-table";
import type { Appointment } from "./hospital-patient-bookings.types";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { VerificationStatus } from "@/constants/verification-status";
import { Button } from "@/components/ui/button";
import { CheckmarkIcon, ErrorIcon } from "react-hot-toast";
import { CheckIcon, XIcon } from "lucide-react";

export const appointmentColumns: ColumnDef<Appointment>[] = [
  { header: "S.N.", cell: ({ row }) => <>{row.index + 1}</> },
  { accessorKey: "patientName", header: "Hospital" },
  { accessorKey: "doctorFullName", header: "Doctor" },
  { accessorKey: "timeSlot", header: "Time Slot" },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <Badge
          className={cn("uppercase text-foreground", {
            "bg-amber-400": status === VerificationStatus.Pending,
            "bg-green-400": status === VerificationStatus.Confirmed,
            "bg-red-400": status === VerificationStatus.Cancelled,
          })}
        >
          {status}
        </Badge>
      );
    },
  },
  {
    header: "Actions",
    cell: ({ row }) => {
      const status = row.original.status;
      return status === VerificationStatus.Pending ? (
        <div className="flex gap-1 items-center">
          <Button size="icon" variant="outline" className="text-green-500">
            <CheckIcon />
          </Button>
          <Button size="icon" variant="outline" className="text-red-500">
            <XIcon />
          </Button>
        </div>
      ) : status === VerificationStatus.Confirmed ? (
        <Button size="icon" variant="ghost">
          <CheckmarkIcon />
        </Button>
      ) : (
        <Button size="icon" variant="ghost">
          <ErrorIcon />
        </Button>
      );
    },
  },
];
