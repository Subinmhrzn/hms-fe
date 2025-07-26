import { HttpClient } from "@/lib/axios/http-client";
import type { SignupRequestDto, SignupResponseDto } from "./auth.types";
import { AUTH_API } from "./auth.api";

export const signup = (data: SignupRequestDto) => {
  return HttpClient.post<SignupResponseDto>(AUTH_API.SIGNUP, data);
};
