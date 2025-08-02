import type { User } from "../user/user.types";

export type SignupRequestDto = {
  email: string;
  password: string;
};

export type LoginRequestDto = Pick<SignupRequestDto, "email" | "password">;

export type SignupResponseDto = {
  accessToken: string;
  user: User;
};

export type LoginResponseDto = {
  accessToken: string;
  user: User;
};

export type RefreshResponseDto = {
  accessToken: string;
};
