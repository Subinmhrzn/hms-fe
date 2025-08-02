import { Route } from "@/routes";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import type { HospitalKycDetailRejectedFormValues } from "./hospital-kyc-detail.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { hospital_kyc_rejected_schema } from "./hospital-kyc-detail.schema";
import { VerificationStatus } from "@/constants/verification-status";
import { useGetHospitalKycByIdQuery } from "@/api/hospital-kyc/hospital-kyc.queries";
import { useVerifyHospitalKycMutation } from "@/api/hospital-kyc/hospital-kyc.mutations";

const defaultValues: HospitalKycDetailRejectedFormValues = {
  rejectedReason: "",
};

export const useHospitalKycDetail = () => {
  const navigate = useNavigate();
  const { hospitalKycId: id } = useParams<{ hospitalKycId: string }>();
  const { data: hospitalKycData, isLoading: isLoadingHospitalKycData } =
    useGetHospitalKycByIdQuery(id);

  const { control, handleSubmit } = useForm({
    defaultValues,
    resolver: zodResolver(hospital_kyc_rejected_schema),
  });

  const { mutateAsync: verifyHospitalKyc, isPending: isVerifyingHospitalKyc } =
    useVerifyHospitalKycMutation();

  const verifyHospitalKycStatus = async (
    status: string,
    rejectedReason?: string,
  ) => {
    if (!id) {
      console.error("No id present");
      return;
    }
    await verifyHospitalKyc({
      id,
      status,
      rejectedReason,
    });
    navigate(Route.Dashboard.HospitalKyc);
  };

  const onReject = handleSubmit(async (data) => {
    await verifyHospitalKycStatus(
      VerificationStatus.Rejected,
      data.rejectedReason,
    );
  });

  return {
    hospitalKycData,
    isLoadingHospitalKycData,
    verifyHospitalKycStatus,
    isVerifyingHospitalKyc,
    control,
    onReject,
  };
};
