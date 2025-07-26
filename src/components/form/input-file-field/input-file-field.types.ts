import type { Control, FieldValues, Path } from "react-hook-form";
import { useInputFileField } from "./use-input-file-field";

export type InputFileFieldProps<TFieldValues extends FieldValues> = {
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  label: string;
  placeholder?: string;
};

export type InputFileFieldViewProps<TFieldValues extends FieldValues> =
  ReturnType<typeof useInputFileField<TFieldValues>> &
    InputFileFieldProps<TFieldValues>;

export type UseInputFileFieldProps<TFieldValues extends FieldValues> = Pick<
  InputFileFieldProps<TFieldValues>,
  "name" | "control"
>;

export type FileWithPreview = File & {
  preview: string;
};
