import { useVerifyDoctorKycMutation } from "@/api/doctor-kyc/doctor-kyc.mutations";
import { useGetDoctorKycByIdQuery } from "@/api/doctor-kyc/doctor-kyc.queries";
import { Route } from "@/routes";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import type { DoctorKycDetailRejectedFormValues } from "./doctor-kyc-detail.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { doctor_kyc_rejected_schema } from "./doctor-kyc-detail.schema";
import { VerificationStatus } from "@/constants/verification-status";

const defaultValues: DoctorKycDetailRejectedFormValues = {
  rejectedReason: "",
};

export const useDoctorKycDetail = () => {
  const navigate = useNavigate();
  const { doctorKycId: id } = useParams<{ doctorKycId: string }>();
  console.log({ id });
  const { data: doctorKycData, isLoading: isLoadingDoctorKycData } =
    useGetDoctorKycByIdQuery(id);

  const { control, handleSubmit } = useForm({
    defaultValues,
    resolver: zodResolver(doctor_kyc_rejected_schema),
  });

  const { mutateAsync: verifyDoctorKyc, isPending: isVerifyingDoctorKyc } =
    useVerifyDoctorKycMutation();

  const verifyDoctorKycStatus = async (
    status: string,
    rejectedReason?: string,
  ) => {
    if (!id) {
      console.error("No id present");
      return;
    }
    await verifyDoctorKyc({
      id,
      status,
      rejectedReason,
    });
    navigate(Route.Dashboard.DoctorKyc);
  };

  const onReject = handleSubmit(async (data) => {
    await verifyDoctorKycStatus(
      VerificationStatus.Rejected,
      data.rejectedReason,
    );
  });

  return {
    doctorKycData,
    isLoadingDoctorKycData,
    verifyDoctorKycStatus,
    isVerifyingDoctorKyc,
    control,
    onReject,
  };
};
