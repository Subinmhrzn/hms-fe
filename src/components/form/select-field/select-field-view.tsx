import type { FieldValues } from "react-hook-form";
import type { SelectFieldViewProps } from "./select-field.types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export const SelectFieldView = <TFieldValues extends FieldValues>(
  props: SelectFieldViewProps<TFieldValues>
) => {
  return (
    <div className="grid gap-3">
      <Label htmlFor={props.name}>{props.label}</Label>
      <Select
        defaultValue={props.field.value}
        onValueChange={props.field.onChange}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder={props?.placeholder || "Select"} />
        </SelectTrigger>
        <SelectContent>
          {props.options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
