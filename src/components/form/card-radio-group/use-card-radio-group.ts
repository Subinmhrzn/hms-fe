import { useController, type FieldValues } from "react-hook-form";
import type { UseCardRadioGroupProps } from "./card-radio-group.types";

export const useCardRadioGroup = <TFieldValues extends FieldValues>(
  props: UseCardRadioGroupProps<TFieldValues>
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
