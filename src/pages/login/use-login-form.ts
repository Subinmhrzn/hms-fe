import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { login_form_schema } from "./login-form.schema";
import type { LoginFormValues } from "./login.types";
import { useLoginMutation } from "@/api/auth/auth.mutations";
import { saveAuthDataInLocalStorage } from "@/utils/auth";
import { Route } from "@/routes";
import { useNavigate } from "react-router";
import { Role } from "@/constants";

const defaultValues: LoginFormValues = {
  email: "",
  password: "",
};

export const useLoginForm = () => {
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm({
    defaultValues,
    resolver: zodResolver(login_form_schema),
  });

  const { mutateAsync: login, isPending: isLoggingIn } = useLoginMutation();

  const onSubmit = handleSubmit(async (data) => {
    const { data: loginData } = await login(data);
    saveAuthDataInLocalStorage(loginData.accessToken, loginData.user);
    if (loginData.user.role === Role.SystemAdmin) {
      navigate(Route.Dashboard.Index);
    }

    if (loginData.user?.isRoleSelected) {
      if (loginData.user?.isKycFilled) {
        navigate(Route.Dashboard.Index);
      } else {
        if (loginData.user.role === Role.Patient) {
          navigate(Route.User.PatientKyc);
        } else if (loginData.user.role === Role.Doctor) {
          navigate(Route.User.DoctorKyc);
        } else if (loginData.user.role === Role.HospitalAdmin) {
          navigate(Route.User.HospitalKyc);
        } else {
          navigate(Route.Dashboard.Index);
        }
      }
    } else {
      navigate(Route.Auth.RoleSelection);
    }
  });

  return {
    control,
    onSubmit,
    isLoggingIn,
  };
};
