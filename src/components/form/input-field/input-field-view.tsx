import { EyeIcon, EyeOffIcon } from "lucide-react";
import type { FieldValues } from "react-hook-form";
import type { InputFieldViewProps } from "./input-field.types";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const InputFieldView = <TFieldValues extends FieldValues>(
  props: InputFieldViewProps<TFieldValues>
) => {
  return (
    <div className="grid gap-3">
      <Label htmlFor={props.name}>{props.label}</Label>
      <div className="relative">
        <Input
          id={props.name}
          placeholder={props?.placeholder || ""}
          type={props.showPassword ? "text" : props.type}
          required={props?.required || false}
          {...props.field}
        />
        {props.type === "password" && (
          <Button
            asChild
            onClick={props.togglePassword}
            type="button"
            size="icon"
            variant="ghost"
          >
            <span className="absolute top-1/2 -translate-y-1/2 right-0">
              {props.showPassword ? (
                <EyeOffIcon size={16} />
              ) : (
                <EyeIcon size={16} />
              )}
            </span>
          </Button>
        )}
      </div>
    </div>
  );
};
