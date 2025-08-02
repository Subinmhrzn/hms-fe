import { useForm, useWatch } from "react-hook-form";
import type { DoctorKycFilterFormValues } from "./doctor-kyc.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { doctor_kyc_filter_schema } from "./doctor-kyc-filter.schema";
import { useGetAlldoctorKycsQuery } from "@/api/doctor-kyc/doctor-kyc.queries";

const defaultValues: DoctorKycFilterFormValues = {
  status: "",
};

export const useDoctorKyc = () => {
  const { control } = useForm({
    defaultValues,
    resolver: zodResolver(doctor_kyc_filter_schema),
  });

  const value = useWatch({ control, name: "status" });
  const status = value === "all" || value === "" ? undefined : value;
  const { data: doctorKycsData = [], isLoading: isDoctorKycsLoading } =
    useGetAlldoctorKycsQuery(status);

  return { doctorKycsData, isDoctorKycsLoading, control };
};
