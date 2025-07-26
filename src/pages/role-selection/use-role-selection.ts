import { useUpdateRoleMutation } from "@/api/user/user.mutations";
import { Role, SearchParamsKey } from "@/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router";
import { update_role_schema } from "./role-selection.schema";
import type { UpdateRoleValues } from "./role-selection.types";
import toast from "react-hot-toast";
import { Route } from "@/routes";

const defaultValues: UpdateRoleValues = {
  role: undefined,
};

export const useRoleSelection = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const userId = searchParams.get(SearchParamsKey.RoleSelection.UserId) || "";

  const { control, handleSubmit } = useForm({
    defaultValues,
    resolver: zodResolver(update_role_schema),
  });

  const { mutateAsync: updateRole, isPending: isUpdatingRole } =
    useUpdateRoleMutation();

  const onSubmit = handleSubmit(async (data) => {
    if (!userId) {
      toast.error("Not a user");
      return;
    }
    if (!data.role) {
      toast.error("Role not selected");
      return;
    }
    await updateRole({
      userId,
      role: data.role as unknown as typeof Role,
    });
    navigate(
      `${Route.User.PatientKyc}?${SearchParamsKey.UserKyc.UserId}=${userId}`
    );
  });

  return {
    control,
    onSubmit,
    isUpdatingRole,
  };
};
