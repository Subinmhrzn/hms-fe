import type { FieldValues } from "react-hook-form";
import type { TextareaFieldViewProps } from "./textarea-field.types";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const TextareaFieldView = <TFieldValues extends FieldValues>(
  props: TextareaFieldViewProps<TFieldValues>,
) => {
  return (
    <div className="grid gap-3">
      <Label htmlFor={props.name}>{props.label}</Label>
      <div className="relative">
        <Textarea
          id={props.name}
          placeholder={props?.placeholder || ""}
          required={props?.required || false}
          rows={9}
          {...props.field}
        />
      </div>
    </div>
  );
};
