import type { Role } from "@/constants";

export type UpdateRoleRequestDto = { userId: string; role: typeof Role };
export type UpdateRoleResponseDto = { uuid: string; role: typeof Role };
