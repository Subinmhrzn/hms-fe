import { useGetAllPatientKycsQuery } from "@/api/patient-kyc/patient-kyc.queries";
import { useForm, useWatch } from "react-hook-form";
import type { PatientKycFilterFormValues } from "./patient-kyc.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { patient_kyc_filter_schema } from "./patient-kyc-filter.schema";

const defaultValues: PatientKycFilterFormValues = {
  status: "",
};

export const usePatientKyc = () => {
  const { control } = useForm({
    defaultValues,
    resolver: zodResolver(patient_kyc_filter_schema),
  });

  const value = useWatch({ control, name: "status" });
  const status = value === "all" || value === "" ? undefined : value;
  const { data: patientKycsData = [], isLoading: isPatientKycsLoading } =
    useGetAllPatientKycsQuery(status);

  return { patientKycsData, isPatientKycsLoading, control };
};
