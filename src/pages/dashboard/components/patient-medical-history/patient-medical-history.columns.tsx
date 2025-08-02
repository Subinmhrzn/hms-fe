import type { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { EyeIcon } from "lucide-react";
import type { MedicalHistory } from "./patient-medical-history.types";

export const medicalHistoryColumns: ColumnDef<MedicalHistory>[] = [
  { header: "S.N.", cell: ({ row }) => <>{row.index + 1}</> },
  { accessorKey: "hospitalName", header: "Hospital" },
  { accessorKey: "doctorFullName", header: "Doctor" },
  { accessorKey: "checkupDate", header: "Checkup Date" },
  {
    header: "Actions",
    cell: () => {
      return (
        <Button size="icon" variant="ghost">
          <EyeIcon />
        </Button>
      );
    },
  },
];
