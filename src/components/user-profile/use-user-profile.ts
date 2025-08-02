import { useLogoutMutation } from "@/api/auth/auth.mutations";
import { LocalStorageKey } from "@/constants";
import { Route } from "@/routes";
import { LocalStorage } from "@/utils";
import { getUser } from "@/utils/auth";
import { useNavigate } from "react-router";

export const useUserProfile = () => {
  const navigate = useNavigate();
  const user = getUser();
  const { mutateAsync: logout } = useLogoutMutation();

  if (!user) {
    navigate(Route.Auth.Login);
  }

  const onLogout = async () => {
    await logout();
    LocalStorage.remove(LocalStorageKey.ACCESS_TOKEN);
    LocalStorage.remove(LocalStorageKey.USER);
    navigate(Route.Auth.Login);
  };

  const userInitial = user?.email.slice(0, 1);

  return { user, userInitial, onLogout };
};
