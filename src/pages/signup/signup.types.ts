import type z from "zod";
import type { signup_form_schema } from "./signup-form.schema";
import type { useSignupForm } from "./use-signup-form";

export type SignupFormViewProps = ReturnType<typeof useSignupForm> & {
  className?: React.ComponentProps<"div">["className"];
};

export type SignupFormValues = z.infer<typeof signup_form_schema>;
