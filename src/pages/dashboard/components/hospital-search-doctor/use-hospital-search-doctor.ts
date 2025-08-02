import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { hospital_doctor_search_schema } from "./hospital-search-doctor.schema";
import type { HospitalSearchDoctorFormValues } from "./hospital-search-doctor.types";
import { useGetDoctorByLicenseMutation } from "@/api/doctor-kyc/doctor-kyc.queries";
import { useState } from "react";
import type { CreateDoctorKycResponseDto } from "@/api/doctor-kyc/doctor-kyc.types";

const defaultValues: HospitalSearchDoctorFormValues = {
  licenseNumber: "",
};

export const useHospitalSearchDoctor = () => {
  const [foundDoctor, setFoundDoctor] =
    useState<CreateDoctorKycResponseDto | null>(null);
  const { control, handleSubmit, setValue } = useForm({
    defaultValues,
    resolver: zodResolver(hospital_doctor_search_schema),
  });

  const { mutateAsync: getDoctorByLicenseNumber } =
    useGetDoctorByLicenseMutation();

  const onSubmit = handleSubmit(async (data) => {
    const { data: doctor } = await getDoctorByLicenseNumber(data.licenseNumber);
    setFoundDoctor(doctor);
    setValue("licenseNumber", "");
  });

  return {
    control,
    onSubmit,
    foundDoctor,
  };
};
