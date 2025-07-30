import { useUpdateRoleMutation } from "@/api/user/user.mutations";
import { LocalStorageKey, Role } from "@/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { update_role_schema } from "./role-selection.schema";
import type { UpdateRoleValues } from "./role-selection.types";
import toast from "react-hot-toast";
import { Route } from "@/routes";
import { LocalStorage } from "@/utils";
import type { User } from "@/api/user/user.types";

const defaultValues: UpdateRoleValues = {
  role: undefined,
};

export const useRoleSelection = () => {
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm({
    defaultValues,
    resolver: zodResolver(update_role_schema),
  });

  const { mutateAsync: updateRole, isPending: isUpdatingRole } =
    useUpdateRoleMutation();

  const updateRoleInStorage = (user: User) => {
    const storedUser = LocalStorage.get(LocalStorageKey.USER);
    if (!storedUser) {
      navigate(Route.Auth.Signup);
    } else {
      LocalStorage.set(LocalStorageKey.USER, user);
    }
  };

  const onSubmit = handleSubmit(async (data) => {
    if (!data.role) {
      toast.error("Please select a role");
      return;
    }
    const { data: updatedUser } = await updateRole({
      role: data.role as unknown as typeof Role,
    });
    updateRoleInStorage(updatedUser);

    if (data.role === "patient") {
      navigate(Route.User.PatientKyc);
    } else if (data.role === "doctor") {
      navigate(Route.User.DoctorKyc);
    } else if (data.role === "hospitalAdmin") {
      navigate(Route.User.HospitalKyc);
    } else {
      navigate(Route.Dashboard.Index);
    }
  });

  return {
    control,
    onSubmit,
    isUpdatingRole,
  };
};
