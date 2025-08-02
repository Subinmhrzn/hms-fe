import { useMutation } from "@tanstack/react-query";
import { login, logout, signup } from "./auth";

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

export const useLogoutMutation = () =>
  useMutation({
    mutationFn: logout,
    meta: {
      successMessage: "Logged out",
      errorMessage: "Logout failed",
    },
  });
