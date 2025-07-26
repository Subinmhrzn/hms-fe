import type { Control, FieldValues, Path } from "react-hook-form";
import type { useDatePickerField } from "./use-date-picker-field";

export type DatePickerFieldProps<TFieldValues extends FieldValues> = {
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  label: string;
  placeholder?: string;
  required?: boolean;
};

export type DatePickerFieldViewProps<TFieldValues extends FieldValues> =
  ReturnType<typeof useDatePickerField<TFieldValues>> &
    DatePickerFieldProps<TFieldValues>;

export type UseInputFieldProps<TFieldValues extends FieldValues> = Pick<
  DatePickerFieldProps<TFieldValues>,
  "name" | "control"
>;
