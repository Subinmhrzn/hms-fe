import { useController, type FieldValues } from "react-hook-form";
import type { UseInputFieldProps } from "./input-field.types";
import { useState } from "react";

export const useInputField = <TFieldValues extends FieldValues>(
  props: UseInputFieldProps<TFieldValues>
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
