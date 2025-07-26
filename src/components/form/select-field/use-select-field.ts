import { useController, type FieldValues } from "react-hook-form";
import type { UseSelectFieldProps } from "./select-field.types";

export const useSelectField = <TFieldValues extends FieldValues>(
  props: UseSelectFieldProps<TFieldValues>
) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name: props.name,
    control: props.control,
  });

  return {
    field,
    error,
  };
};
