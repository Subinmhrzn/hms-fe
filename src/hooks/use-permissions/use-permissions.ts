import { useProtectedRoute } from "@/components/protected-route";
import {
  RolePermissions,
  type PermissionType,
  type RoleType,
} from "@/constants";

export const usePermissions = () => {
  const { user } = useProtectedRoute();

  const hasRole = (roles: RoleType[]) => {
    return roles.some((role) => role === user.role);
  };

  const hasPermission = (permissions: PermissionType[]) => {
    if (!user.role) return false;
    return RolePermissions[user.role as keyof typeof RolePermissions].some(
      (permission) => permissions.includes(permission),
    );
  };

  return {
    hasRole,
    hasPermission,
  };
};
