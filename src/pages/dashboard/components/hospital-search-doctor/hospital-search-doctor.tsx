import { HospitalSearchDoctorView } from "./hospital-search-doctor-view";
import { useHospitalSearchDoctor } from "./use-hospital-search-doctor";

export const HospitalSearchDoctor = () => {
  const logic = useHospitalSearchDoctor();
  return <HospitalSearchDoctorView {...logic} />;
};
