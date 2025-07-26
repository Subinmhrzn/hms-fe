import type { FieldValues } from "react-hook-form";
import { DatePickerFieldView } from "./date-picker-field-view";
import { useDatePickerField } from "./use-date-picker-field";
import type { DatePickerFieldProps } from "./date-picker-field.types";

export const DatePickerField = <TFieldValues extends FieldValues>(
  props: DatePickerFieldProps<TFieldValues>
) => {
  const logic = useDatePickerField({
    name: props.name,
    control: props.control,
  });
  return <DatePickerFieldView {...props} {...logic} />;
};
