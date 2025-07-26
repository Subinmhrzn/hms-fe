import type z from "zod";
import type { update_role_schema } from "./role-selection.schema";
import type { useRoleSelection } from "./use-role-selection";

export type RoleSelectionViewProps = ReturnType<typeof useRoleSelection>;

export type UpdateRoleValues = z.infer<typeof update_role_schema>;
