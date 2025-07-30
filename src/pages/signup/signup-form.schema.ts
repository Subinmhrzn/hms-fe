import z from "zod";

export const signup_form_schema = z.object({
  username: z.string().min(1, "Username is required"),
  email: z.email().min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
});
