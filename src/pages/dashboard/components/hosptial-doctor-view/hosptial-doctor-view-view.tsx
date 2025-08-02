import { DoctorKycDetailList } from "../../shared/doctor-kyc-detail-list";
import type { HosptialDoctorViewViewProps } from "./hosptial-doctor-view.types";

export const HosptialDoctorViewView: React.FC<HosptialDoctorViewViewProps> = ({
  doctorKycData,
  isDoctorKycDataLoading,
}) => {
  if (isDoctorKycDataLoading) {
    return <>Loading...</>;
  }

  return <DoctorKycDetailList doctorKycData={doctorKycData} />;
};
