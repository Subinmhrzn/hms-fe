import type { FieldValues } from "react-hook-form";
import type { DatePickerFieldViewProps } from "./date-picker-field.types";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";

export const DatePickerFieldView = <TFieldValues extends FieldValues>(
  props: DatePickerFieldViewProps<TFieldValues>,
) => {
  const date = props.field.value;
  const onSelect = props.field.onChange;

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor={props.name} className="px-1">
        {props.label}
      </Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id={props.name}
            variant="outline"
            data-empty={!date}
            className="data-[empty=true]:text-muted-foreground w-full justify-start text-left font-normal"
          >
            <CalendarIcon />
            {date ? (
              format(date, "PPP")
            ) : (
              <span>{props?.placeholder || "Pick a date"} </span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(val) => onSelect(val?.toString())}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
