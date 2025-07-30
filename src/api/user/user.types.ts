import type { Role } from "@/constants";

export type User = {
  uuid: string;
  username: string;
  email: string;
  role: string;
  isRoleSelected?: boolean;
  isKycFilled?: boolean;
  isKycVerified?: boolean;
};

export type UpdateRoleRequestDto = { role: typeof Role };
export type UpdateRoleResponseDto = User;
