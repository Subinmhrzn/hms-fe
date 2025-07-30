import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { SignupFormValues } from "./signup.types";
import { signup_form_schema } from "./signup-form.schema";
import { useSignupMutation } from "@/api/auth/auth.mutations";
import { useNavigate } from "react-router";
import { Route } from "@/routes";
import { saveAuthDataInLocalStorage } from "@/utils/auth";

const defaultValues: SignupFormValues = {
  username: "",
  email: "",
  password: "",
};

export const useSignupForm = () => {
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm({
    defaultValues,
    resolver: zodResolver(signup_form_schema),
  });

  const { mutateAsync: signup, isPending: isSigningUp } = useSignupMutation();

  const onSubmit = handleSubmit(async (data) => {
    const { data: signupData } = await signup(data);
    saveAuthDataInLocalStorage(signupData.accessToken, signupData.user);
    navigate(Route.Auth.RoleSelection);
  });

  return {
    control,
    onSubmit,
    isSigningUp,
  };
};
