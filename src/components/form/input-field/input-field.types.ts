import type { Control, FieldValues, Path } from "react-hook-form";
import { useInputField } from "./use-input-field";

export type InputFieldProps<TFieldValues extends FieldValues> =
  React.ComponentProps<"input"> & {
    name: Path<TFieldValues>;
    control: Control<TFieldValues>;
    label: string;
    placeholder?: string;
    type?: React.ComponentProps<"input">["type"];
    required?: boolean;
  };

export type InputFieldViewProps<TFieldValues extends FieldValues> = ReturnType<
  typeof useInputField<TFieldValues>
> &
  InputFieldProps<TFieldValues>;

export type UseInputFieldProps<TFieldValues extends FieldValues> = Pick<
  InputFieldProps<TFieldValues>,
  "name" | "control"
>;
