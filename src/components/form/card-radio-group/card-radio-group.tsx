import type { FieldValues } from "react-hook-form";
import { CardRadioGroupView } from "./card-radio-group-view";
import { useCardRadioGroup } from "./use-card-radio-group";
import type { CardRadioGroupProps } from "./card-radio-group.types";

export const CardRadioGroup = <TFieldValues extends FieldValues>(
  props: CardRadioGroupProps<TFieldValues>
) => {
  const logic = useCardRadioGroup({
    name: props.name,
    control: props.control,
  });
  return <CardRadioGroupView {...props} {...logic} />;
};
