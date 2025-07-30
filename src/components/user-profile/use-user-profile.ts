import { Route } from "@/routes";
import { getUser } from "@/utils/auth";
import { useNavigate } from "react-router";

export const useUserProfile = () => {
  const navigate = useNavigate();
  const user = getUser();

  if (!user) {
    navigate(Route.Auth.Login);
    return;
  }

  const userInitial = user.username.slice(0, 1);

  return { user, userInitial };
};
