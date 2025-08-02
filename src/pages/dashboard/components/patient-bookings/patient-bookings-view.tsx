import { DataTable } from "@/components/data-table";
import type { PatientBookingsViewProps } from "./patient-bookings.types";
import { appointmentColumns } from "./patient-bookings.columns";
import { appointmentData } from "./patient-bookings.constants";

export const PatientBookingsView: React.FC<PatientBookingsViewProps> = () => {
  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold">My Appointments</h2>
      <div className="mt-4">
        <DataTable columns={appointmentColumns} data={appointmentData} />
      </div>
    </div>
  );
};
