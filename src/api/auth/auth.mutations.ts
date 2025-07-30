import { useMutation } from "@tanstack/react-query";
import { login, signup } from "./auth";

export const useSignupMutation = () =>
  useMutation({
    mutationFn: signup,
    meta: {
      successMessage: "User registered",
      errorMessage: "User registration failed",
    },
  });

export const useLoginMutation = () =>
  useMutation({
    mutationFn: login,
    meta: {
      successMessage: "Logged In!",
      errorMessage: "Login failed",
    },
  });
