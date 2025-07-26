import { useMutation } from "@tanstack/react-query";
import { updateRole } from "./user";

export const useUpdateRoleMutation = () =>
  useMutation({
    mutationFn: updateRole,
    meta: {
      successMessage: "User role updated",
      errorMessage: "Failed to update user role",
    },
  });
