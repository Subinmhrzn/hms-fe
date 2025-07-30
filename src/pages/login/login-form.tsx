import { LoginFormView } from "./login-form-view";
import { useLoginForm } from "./use-login-form";

export const LoginForm = () => {
  const logic = useLoginForm();
  return <LoginFormView {...logic} />;
};
