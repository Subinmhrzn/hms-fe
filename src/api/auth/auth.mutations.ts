import { useMutation } from "@tanstack/react-query";
import { signup } from "./auth";

export const useSignupMutation = () =>
  useMutation({
    mutationFn: signup,
    meta: {
      successMessage: "User registered",
      errorMessage: "User registration failed",
    },
  });
