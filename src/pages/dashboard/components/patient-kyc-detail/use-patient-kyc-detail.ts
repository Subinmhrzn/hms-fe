import { useVerifyPatientKycMutation } from "@/api/patient-kyc/patient-kyc.mutations";
import { useGetPatientKycByIdQuery } from "@/api/patient-kyc/patient-kyc.queries";
import { Route } from "@/routes";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import type { PatientKycDetailRejectedFormValues } from "./patient-kyc-detail.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { patient_kyc_rejected_schema } from "./patient-kyc-detail.schema";
import { VerificationStatus } from "@/constants/verification-status";

const defaultValues: PatientKycDetailRejectedFormValues = {
  rejectedReason: "",
};

export const usePatientKycDetail = () => {
  const navigate = useNavigate();
  const { patientKycId: id } = useParams<{ patientKycId: string }>();
  const { data: patientKycData, isLoading: isLoadingPatientKycData } =
    useGetPatientKycByIdQuery(id);

  const { control, handleSubmit } = useForm({
    defaultValues,
    resolver: zodResolver(patient_kyc_rejected_schema),
  });

  const { mutateAsync: verifyPatientKyc, isPending: isVerifyingPatientKyc } =
    useVerifyPatientKycMutation();

  const verifyPatientKycStatus = async (
    status: string,
    rejectedReason?: string,
  ) => {
    if (!id) {
      console.error("No id present");
      return;
    }
    await verifyPatientKyc({
      id,
      status,
      rejectedReason,
    });
    navigate(Route.Dashboard.PatientKyc);
  };

  const onReject = handleSubmit(async (data) => {
    await verifyPatientKycStatus(
      VerificationStatus.Rejected,
      data.rejectedReason,
    );
  });

  return {
    patientKycData,
    isLoadingPatientKycData,
    verifyPatientKycStatus,
    isVerifyingPatientKyc,
    control,
    onReject,
  };
};
