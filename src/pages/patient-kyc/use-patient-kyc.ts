import { useForm } from "react-hook-form";
import type { PatientKycFormValues } from "./patient-kyc.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { patient_kyc_schema } from "./patient-kyc.schema";
import { DocumentTypeOptions } from "./patient-kyc.constants";

const defaultValues: PatientKycFormValues = {
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
  userName: "",
};

export const usePatientKyc = () => {
  const { control, handleSubmit, watch } = useForm({
    defaultValues,
    resolver: zodResolver(patient_kyc_schema),
  });

  const selectedDocumentType = watch("documentType");
  const selectedDocumentLabel = selectedDocumentType
    ? DocumentTypeOptions.find((item) => item.value === selectedDocumentType)
        ?.label
    : "Document";
  console.log({ selectedDocumentType });
  console.log({ selectedDocumentLabel });

  const onSubmit = handleSubmit((data) => {
    console.log({ data });
  });

  return {
    control,
    onSubmit,
    selectedDocumentLabel,
  };
};
