import { useProtectedRoute } from "../protected-route";
import type { RoleProtectedRouteProps } from "./role-protected-routes.types";
import { Navigate } from "react-router";
import { Route } from "@/routes";

export const RoleProtectedRoute: React.FC<RoleProtectedRouteProps> = ({
  children,
  allowedRoles,
}) => {
  const { user } = useProtectedRoute();

  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    return <Navigate to={Route.Auth.Login} replace />;
  }

  return children;
};
