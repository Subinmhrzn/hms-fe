import { useController, type FieldValues } from "react-hook-form";
import type { UseTextareaFieldProps } from "./textarea-field.types";
import { useState } from "react";

export const useTextareaField = <TFieldValues extends FieldValues>(
  props: UseTextareaFieldProps<TFieldValues>,
) => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    field,
    fieldState: { error },
  } = useController({
    name: props.name,
    control: props.control,
  });

  const togglePassword = () => setShowPassword((prev) => !prev);

  return {
    field,
    error,
    showPassword,
    togglePassword,
  };
};
