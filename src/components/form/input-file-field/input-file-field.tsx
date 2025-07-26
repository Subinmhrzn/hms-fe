import type { FieldValues } from "react-hook-form";
import { InputFileFieldView } from "./input-file-field-view";
import type { InputFileFieldProps } from "./input-file-field.types";
import { useInputFileField } from "./use-input-file-field";

export const InputFileField = <TFieldValues extends FieldValues>(
  props: InputFileFieldProps<TFieldValues>
) => {
  const logic = useInputFileField({
    name: props.name,
    control: props.control,
  });
  return <InputFileFieldView {...props} {...logic} />;
};
