import { DataTable } from "@/components/data-table";
import type { HospitalPatientBookingsViewProps } from "./hospital-patient-bookings.types";
import { appointmentColumns } from "./hospital-patient-bookings.columns";
import { appointmentData } from "./hospital-patient-bookings.constants";

export const HospitalPatientBookingsView: React.FC<
  HospitalPatientBookingsViewProps
> = () => {
  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold">Patient Bookings</h2>
      <div className="mt-4">
        <DataTable columns={appointmentColumns} data={appointmentData} />
      </div>
    </div>
  );
};
