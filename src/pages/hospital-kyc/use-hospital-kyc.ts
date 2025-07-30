import { useForm } from "react-hook-form";
import type { HospitalKycFormValues } from "./hospital-kyc.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { hospital_kyc_schema } from "./hospital-kyc.schema";
import { useNavigate } from "react-router";
import { Route } from "@/routes";
import { useCreateHospitalKycMutation } from "@/api/hospital-kyc/hospital-kyc.mutations";
import { LocalStorage } from "@/utils";
import { LocalStorageKey } from "@/constants";
import type { User } from "@/api/user/user.types";

const defaultValues: HospitalKycFormValues = {
  address: "",
  contactNumber: "",
  emergencyContact: "",
  hospitalName: "",
  licenseDocumentUrl: "",
  licenseNumber: "",
};

export const useHospitalKyc = () => {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm({
    defaultValues,
    resolver: zodResolver(hospital_kyc_schema),
  });

  const { mutateAsync: createHospitalKyc, isPending: isCreatingHospitalKyc } =
    useCreateHospitalKycMutation();

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
    await createHospitalKyc(data);
    updateKycStatusInLocalStorage();
    navigate(Route.Dashboard.Index);
  });

  return {
    control,
    onSubmit,
    isCreatingHospitalKyc,
  };
};
