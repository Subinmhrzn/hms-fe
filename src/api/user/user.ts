import { HttpClient } from "@/lib/axios/http-client";
import { USER_API } from "./user.api";
import type { UpdateRoleRequestDto, UpdateRoleResponseDto } from "./user.types";

export const updateRole = (data: UpdateRoleRequestDto) => {
  return HttpClient.patch<UpdateRoleResponseDto>(USER_API.UPDATE_ROLE, data);
};
