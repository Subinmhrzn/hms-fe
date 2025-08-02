import type { ColumnDef } from "@tanstack/react-table";
import type { HospitalKyc } from "./hospital-kyc.types";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { VerificationStatus } from "@/constants/verification-status";
import { Button } from "@/components/ui/button";
import { generatePath, Link } from "react-router";
import { EyeIcon } from "lucide-react";
import { Route } from "@/routes";

export const hospitalKycColumns: ColumnDef<HospitalKyc>[] = [
  { header: "S.N.", cell: ({ row }) => <>{row.index + 1}</> },
  { accessorKey: "hospitalName", header: "Hospital Name" },
  { accessorKey: "licenseNumber", header: "License Number" },
  { accessorKey: "contactNumber", header: "Contact Number" },
  { accessorKey: "emergencyContact", header: "Emergency Contact" },
  { accessorKey: "address", header: "Address" },
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
      console.log({ row });
      const hospitalKycId = row.original.uuid;
      return (
        <Button asChild size="icon" variant="ghost">
          <Link
            to={generatePath(Route.Dashboard.HospitalKycDetail, {
              hospitalKycId,
            })}
          >
            <EyeIcon size={16} />
          </Link>
        </Button>
      );
    },
  },
];
