import { Role } from "@/constants";
import { getUser } from "@/utils/auth";
import { MyPatientKyc } from "../my-patient-kyc";
import { MyDoctorKyc } from "../my-doctor-kyc/my-doctor-kyc";
import { MyHospitalKyc } from "../my-hospital-kyc";

export const MyKyc = () => {
  const user = getUser();
  const role = user?.role;

  if (role === Role.Patient) {
    return <MyPatientKyc />;
  } else if (role === Role.Doctor) {
    return <MyDoctorKyc />;
  } else if (role === Role.HospitalAdmin) {
    return <MyHospitalKyc />;
  }

  return null;
};
