import type { FieldValues } from "react-hook-form";
import { SelectFieldView } from "./select-field-view";
import { useSelectField } from "./use-select-field";
import type { SelectFieldProps } from "./select-field.types";

export const SelectField = <TFieldValues extends FieldValues>(
  props: SelectFieldProps<TFieldValues>
) => {
  const logic = useSelectField({ name: props.name, control: props.control });
  return <SelectFieldView {...props} {...logic} />;
};
