import type { ColumnDef } from "@tanstack/react-table";
import type { DoctorKyc } from "./doctor-kyc.types";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { VerificationStatus } from "@/constants/verification-status";
import { Button } from "@/components/ui/button";
import { generatePath, Link } from "react-router";
import { EyeIcon } from "lucide-react";
import { Route } from "@/routes";
import { formatDate } from "@/utils";

export const doctorKycColumns: ColumnDef<DoctorKyc>[] = [
  { header: "S.N.", cell: ({ row }) => <>{row.index + 1}</> },
  { accessorKey: "licenseNumber", header: "License Number" },
  { accessorKey: "fullName", header: "Full name" },
  { accessorKey: "address", header: "Address" },
  {
    accessorKey: "dob",
    header: "DOB",
    cell: ({ row }) => {
      const dob = row.original.dob;
      return formatDate(dob);
    },
  },
  { accessorKey: "phoneNumber", header: "Phone Number" },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <Badge
          className={cn("uppercase text-foreground", {
            "bg-amber-400": status === VerificationStatus.Pending,
            "bg-green-400": status === VerificationStatus.IsVerified,
            "bg-red-400": status === VerificationStatus.Rejected,
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
      const doctorKycId = row.original.uuid;
      return (
        <Button asChild size="icon" variant="ghost">
          <Link
            to={generatePath(Route.Dashboard.DoctorKycDetail, {
              doctorKycId,
            })}
          >
            <EyeIcon size={16} />
          </Link>
        </Button>
      );
    },
  },
];
