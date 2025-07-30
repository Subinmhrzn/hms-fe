import type { User } from "@/api/user/user.types";
import { useOutletContext } from "react-router";

export const useProtectedRoute = () => {
  return useOutletContext() as { user: User };
};
