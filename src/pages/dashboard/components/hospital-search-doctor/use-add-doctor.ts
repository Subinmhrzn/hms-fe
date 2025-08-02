import { useAddDoctorMutation } from "@/api/hospital-doctor/hospital-doctor.mutations";
import { useFieldArray, useForm } from "react-hook-form";
import type {
  AddDoctorAvailabilityValues,
  AddDoctorFormValues,
} from "./hospital-search-doctor.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { add_doctor_schema } from "./add-doctor.schema";
import { useNavigate } from "react-router";
import { Route } from "@/routes";

const availabilityDefaultValues = {
  day: "",
  from: "",
  to: "",
} as AddDoctorAvailabilityValues[number];

const defaultValues: AddDoctorFormValues = {
  availability: [availabilityDefaultValues] as AddDoctorAvailabilityValues,
};

export const useAddDoctor = (doctorLicenseNumber: string) => {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm({
    defaultValues,
    resolver: zodResolver(add_doctor_schema),
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "availability",
  });

  const { mutateAsync: addDoctor, isPending: isAddingDoctor } =
    useAddDoctorMutation();

  const onAddAvailabilityField = () => {
    append(availabilityDefaultValues);
  };

  const onRemoveAvailabilityField = (index: number) => {
    remove(index);
  };

  const onSubmit = handleSubmit(async (data) => {
    await addDoctor({
      doctorLicenseNumber,
      availability: data.availability,
    });
    navigate(Route.Dashboard.HospitalMyDoctors);
  });

  return {
    onSubmit,
    isAddingDoctor,
    control,
    fields,
    onAddAvailabilityField,
    onRemoveAvailabilityField,
  };
};
