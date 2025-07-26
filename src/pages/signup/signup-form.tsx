import { SignupFormView } from "./signup-form-view";
import { useSignupForm } from "./use-signup-form";

export const SignupForm = () => {
  const logic = useSignupForm();
  return <SignupFormView {...logic} />;
};
