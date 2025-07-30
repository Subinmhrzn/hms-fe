export const Route = {
  Index: "/",
  Auth: {
    Signup: "/auth/signup",
    Login: "/auth/login",
    RoleSelection: "/auth/role-selection",
  },
  User: {
    PatientKyc: "/user/patient-kyc",
    DoctorKyc: "/user/doctor-kyc",
    HospitalKyc: "/user/hospital-kyc",
  },
  Dashboard: {
    Index: "/dashboard",
    PatientKyc: "/dashboard/patient-kyc",
    DoctorKyc: "/dashboard/doctor-kyc",
    HospitalKyc: "/dashboard/hospital-kyc",
  },
  NotFound: "*",
};
