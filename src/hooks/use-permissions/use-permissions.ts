import {
  RolePermissions,
  type PermissionType,
  type RoleType,
} from "@/constants";
import { getUser } from "@/utils/auth";

export const usePermissions = () => {
  const user = getUser();

  const hasRole = (roles: RoleType[]) => {
    if (!user) return;
    return roles.some((role) => role === user.role);
  };

  const hasPermission = (permissions: PermissionType[]) => {
    if (!user || !user.role) return false;
    return RolePermissions[user.role as keyof typeof RolePermissions].some(
      (permission) => permissions.includes(permission),
    );
  };

  return {
    hasRole,
    hasPermission,
  };
};
