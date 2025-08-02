import type { FieldValues } from "react-hook-form";
import { InputFieldView } from "./input-field-view";
import type { InputFieldProps } from "./input-field.types";
import { useInputField } from "./use-input-field";

export const InputField = <TFieldValues extends FieldValues>(
  props: InputFieldProps<TFieldValues>,
) => {
  const logic = useInputField({ name: props.name, control: props.control });
  return <InputFieldView {...props} {...logic} />;
};
