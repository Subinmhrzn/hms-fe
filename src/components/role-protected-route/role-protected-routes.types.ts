import type { PropsWithChildren } from "react";

export type RoleProtectedRouteProps = PropsWithChildren & {
  allowedRoles: string[];
};
