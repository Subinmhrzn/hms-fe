import type { Control, FieldValues, Path } from "react-hook-form";
import { useSelectField } from "./use-select-field";

export type Option = {
  label: string;
  value: string;
};

export type SelectFieldProps<TFieldValues extends FieldValues> = {
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  label: string;
  placeholder?: string;
  required?: boolean;
  options: Option[];
};

export type SelectFieldViewProps<TFieldValues extends FieldValues> = ReturnType<
  typeof useSelectField<TFieldValues>
> &
  SelectFieldProps<TFieldValues>;

export type UseSelectFieldProps<TFieldValues extends FieldValues> = Pick<
  SelectFieldProps<TFieldValues>,
  "name" | "control"
>;
