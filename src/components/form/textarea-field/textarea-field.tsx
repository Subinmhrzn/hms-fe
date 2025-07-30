import type { FieldValues } from "react-hook-form";
import { TextareaFieldView } from "./textarea-field-view";
import type { TextareaFieldProps } from "./textarea-field.types";
import { useTextareaField } from "./use-textarea-field";

export const TextareaField = <TFieldValues extends FieldValues>(
  props: TextareaFieldProps<TFieldValues>,
) => {
  const logic = useTextareaField({ name: props.name, control: props.control });
  return <TextareaFieldView {...props} {...logic} />;
};
