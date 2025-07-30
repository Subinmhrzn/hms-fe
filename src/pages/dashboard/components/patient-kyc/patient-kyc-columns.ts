import type { ColumnDef } from "@tanstack/react-table";
import type { PatientKyc } from "./patient-kyc.types";

export const patientKycColumns: ColumnDef<PatientKyc>[] = [
  { accessorKey: "fullName", header: "Full name" },
  { accessorKey: "address", header: "Address" },
  { accessorKey: "bloodGroup", header: "Blood Group" },
];
