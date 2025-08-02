import { DoctorKycDetailView } from './doctor-kyc-detail-view';
import { useDoctorKycDetail } from './use-doctor-kyc-detail';

export const DoctorKycDetail = () => {
  const logic = useDoctorKycDetail();
  return <DoctorKycDetailView {...logic} />;
};
