import type z from "zod";
import type { useLoginForm } from "./use-login-form";
import type { login_form_schema } from "./login-form.schema";

export type LoginFormViewProps = ReturnType<typeof useLoginForm>;

export type LoginFormValues = z.infer<typeof login_form_schema>;
