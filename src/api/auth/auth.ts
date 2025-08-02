import { HttpClient } from "@/lib/axios/http-client";
import type {
  LoginRequestDto,
  LoginResponseDto,
  RefreshResponseDto,
  SignupRequestDto,
  SignupResponseDto,
} from "./auth.types";
import { AUTH_API } from "./auth.api";

export const signup = (data: SignupRequestDto) => {
  return HttpClient.post<SignupResponseDto>(AUTH_API.SIGNUP, data);
};

export const login = (data: LoginRequestDto) => {
  return HttpClient.post<LoginResponseDto>(AUTH_API.LOGIN, data);
};

export const refresh = () => {
  return HttpClient.post<RefreshResponseDto>(AUTH_API.REFRESH);
};

export const logout = () => {
  return HttpClient.post(AUTH_API.LOGOUT);
};
