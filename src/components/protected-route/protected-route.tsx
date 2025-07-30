import { Route } from "@/routes";
import { getUser } from "@/utils/auth";
import { Navigate, Outlet } from "react-router";

export const ProtectedRoute = () => {
  const user = getUser();
  return user ? (
    <Outlet context={{ user }} />
  ) : (
    <Navigate to={Route.Auth.Login} />
  );
};
