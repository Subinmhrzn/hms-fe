import { useForm } from "react-hook-form";
import type { DoctorKycFormValues } from "./doctor-kyc.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { doctor_kyc_schema } from "./doctor-kyc.schema";
import { useNavigate } from "react-router";
import { Route } from "@/routes";
import { useCreateDoctorKycMutation } from "@/api/doctor-kyc/doctor-kyc.mutations";
import { LocalStorage } from "@/utils";
import { LocalStorageKey } from "@/constants";
import type { User } from "@/api/user/user.types";

const defaultValues: DoctorKycFormValues = {
  fullName: "",
  address: "",
  dob: "",
  phoneNumber: "",
  specialization: "",
  experiencedYear: "",
  licenseImageUrl: "",
  licenseNumber: "",
};

export const useDoctorKyc = () => {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm({
    defaultValues,
    resolver: zodResolver(doctor_kyc_schema),
  });

  const { mutateAsync: createDoctorKyc, isPending: isCreatingDoctorKyc } =
    useCreateDoctorKycMutation();

  const updateKycStatusInLocalStorage = () => {
    const storedUser = LocalStorage.get(LocalStorageKey.USER);
    if (!storedUser) {
      navigate(Route.Auth.Signup);
    } else {
      LocalStorage.set(LocalStorageKey.USER, {
        ...storedUser,
        isKycFilled: true,
      } as User);
    }
  };

  const onSubmit = handleSubmit(async (data) => {
    await createDoctorKyc(data);
    updateKycStatusInLocalStorage();
    navigate(Route.Auth.Login);
  });

  return {
    control,
    onSubmit,
    isCreatingDoctorKyc,
  };
};
