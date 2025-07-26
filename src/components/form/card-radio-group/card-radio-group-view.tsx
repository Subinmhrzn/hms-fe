import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import type { CardRadioGroupViewProps } from "./card-radio-group.types";
import { Label } from "@/components/ui/label";
import type { FieldValues } from "react-hook-form";
import { cn } from "@/lib/utils";

export const CardRadioGroupView = <TFieldValues extends FieldValues>(
  props: CardRadioGroupViewProps<TFieldValues>
) => {
  return (
    <RadioGroup
      value={props.field.value || ""}
      onValueChange={(val) => props.field.onChange(val)}
    >
      {props.options.map((item) => {
        const IconComponent = item.icon;
        const isSelected = props.field.value === item.value;

        return (
          <div key={item.value} className="flex items-center space-x-2">
            <RadioGroupItem
              value={item.value}
              id={item.value}
              className="sr-only"
            />
            <Label
              htmlFor={item.value}
              className={cn(
                "w-full flex gap-4 cursor-pointer rounded-lg border-2 p-6 transition-all duration-200 peer-focus-visible:ring-2 peer-focus-visible:ring-border peer-focus-visible:ring-offset-2",
                {
                  "border-primary bg-primary/10 shadow-md": isSelected,
                  "border-border bg-background hover:bg-primary/10 hover:border-border/50 hover:shadow-sm":
                    !isSelected,
                }
              )}
            >
              <IconComponent />
              <div className="flex-1 min-w-0">
                <h3 className="text-base">{item.label}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </Label>
          </div>
        );
      })}
    </RadioGroup>
  );
};
