import type { ColumnDef } from "@tanstack/react-table";
import type { PatientKyc } from "./patient-kyc.types";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { VerificationStatus } from "@/constants/verification-status";
import { Button } from "@/components/ui/button";
import { generatePath, Link } from "react-router";
import { EyeIcon } from "lucide-react";
import { Route } from "@/routes";

export const patientKycColumns: ColumnDef<PatientKyc>[] = [
  { header: "S.N.", cell: ({ row }) => <>{row.index + 1}</> },
  { accessorKey: "username", header: "Username" },
  { accessorKey: "fullName", header: "Full name" },
  { accessorKey: "address", header: "Address" },
  { accessorKey: "bloodGroup", header: "Blood Group" },
  {
    accessorKey: "dob",
    header: "DOB",
    cell: ({ row }) => {
      const dob = row.original.dob;
      const date = Intl.DateTimeFormat("en-US", {
        dateStyle: "medium",
      }).format(new Date(dob));
      return date;
    },
  },
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
      const patientKycId = row.original.uuid;
      return (
        <Button asChild size="icon" variant="ghost">
          <Link
            to={generatePath(Route.Dashboard.PatientKycDetail, {
              patientKycId,
            })}
          >
            <EyeIcon size={16} />
          </Link>
        </Button>
      );
    },
  },
];
