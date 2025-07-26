import type { Control, FieldValues, Path } from "react-hook-form";
import { useCardRadioGroup } from "./use-card-radio-group";

export type Option = {
  label: string;
  value: string;
  description: string;
  icon: React.FC;
};

export type CardRadioGroupProps<TFieldValues extends FieldValues> = {
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  options: Option[];
};

export type CardRadioGroupViewProps<TFieldValues extends FieldValues> =
  ReturnType<typeof useCardRadioGroup<TFieldValues>> &
    CardRadioGroupProps<TFieldValues>;

export type UseCardRadioGroupProps<TFieldValues extends FieldValues> = Pick<
  CardRadioGroupProps<TFieldValues>,
  "name" | "control"
>;
