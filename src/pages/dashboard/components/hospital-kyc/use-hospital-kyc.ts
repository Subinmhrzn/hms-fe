import { useForm, useWatch } from "react-hook-form";
import type { HospitalKycFilterFormValues } from "./hospital-kyc.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { hospital_kyc_filter_schema } from "./hospital-kyc-filter.schema";
import { useGetAllHospitalKycsQuery } from "@/api/hospital-kyc/hospital-kyc.queries";

const defaultValues: HospitalKycFilterFormValues = {
  status: "",
};

export const useHospitalKyc = () => {
  const { control } = useForm({
    defaultValues,
    resolver: zodResolver(hospital_kyc_filter_schema),
  });

  const value = useWatch({ control, name: "status" });
  const status = value === "all" || value === "" ? undefined : value;
  const { data: hospitalKycsData = [], isLoading: isHospitalKycsLoading } =
    useGetAllHospitalKycsQuery(status);

  return { hospitalKycsData, isHospitalKycsLoading, control };
};
