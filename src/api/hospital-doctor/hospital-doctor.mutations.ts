import { useMutation } from "@tanstack/react-query";
import { addDoctor } from "./hospital-doctor";

export const useAddDoctorMutation = () => {
  return useMutation({
    mutationFn: addDoctor,
    meta: {
      successMessage: "Added doctor successfully",
      errorMessage: "Add doctor failed",
    },
  });
};
