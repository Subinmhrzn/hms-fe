import type { Control, FieldValues, Path } from "react-hook-form";
import { useTextareaField } from "./use-textarea-field";

export type TextareaFieldProps<TFieldValues extends FieldValues> = {
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  label: string;
  placeholder?: string;
  type?: React.ComponentProps<"input">["type"];
  required?: boolean;
};

export type TextareaFieldViewProps<TFieldValues extends FieldValues> =
  ReturnType<typeof useTextareaField<TFieldValues>> &
    TextareaFieldProps<TFieldValues>;

export type UseTextareaFieldProps<TFieldValues extends FieldValues> = Pick<
  TextareaFieldProps<TFieldValues>,
  "name" | "control"
>;
