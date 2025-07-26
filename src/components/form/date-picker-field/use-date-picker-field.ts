import { useController, type FieldValues } from "react-hook-form";
import type { UseInputFieldProps } from "./date-picker-field.types";

export const useDatePickerField = <TFieldValues extends FieldValues>(
  props: UseInputFieldProps<TFieldValues>
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
