import { useForm } from "react-hook-form";
import type { PatientKycFormValues } from "./patient-kyc.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { patient_kyc_schema } from "./patient-kyc.schema";
import { DocumentTypeOptions } from "./patient-kyc.constants";
import { useCreatePatientKycMutation } from "@/api/patient-kyc/patient-kyc.mutations";
import { useNavigate } from "react-router";
import { Route } from "@/routes";
import type { User } from "@/api/user/user.types";
import { LocalStorage } from "@/utils";
import { LocalStorageKey } from "@/constants";

const defaultValues: PatientKycFormValues = {
  username: "",
  fullName: "",
  address: "",
  bloodGroup: "",
  dob: "",
  documentFrontImageUrl: "",
  documentBackImageUrl: "",
  documentNumber: "",
  documentType: "",
  emergencyContact: "",
  phoneNumber: "",
};

export const usePatientKyc = () => {
  const navigate = useNavigate();
  const { control, handleSubmit, watch } = useForm({
    defaultValues,
    resolver: zodResolver(patient_kyc_schema),
  });

  const selectedDocumentType = watch("documentType");
  const selectedDocumentLabel = selectedDocumentType
    ? DocumentTypeOptions.find((item) => item.value === selectedDocumentType)
        ?.label
    : "Document";

  const { mutateAsync: createPatientKyc, isPending: isCreatingPatientKyc } =
    useCreatePatientKycMutation();

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
    await createPatientKyc(data);
    updateKycStatusInLocalStorage();
    navigate(Route.Auth.Login);
  });

  return {
    control,
    onSubmit,
    selectedDocumentLabel,
    isCreatingPatientKyc,
  };
};
