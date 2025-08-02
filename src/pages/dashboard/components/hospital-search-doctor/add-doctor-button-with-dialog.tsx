import { AppDialog } from "@/components/app-dialog";
import { Button } from "@/components/ui/button";
import { useAddDoctor } from "./use-add-doctor";
import { SelectField } from "@/components/form/select-field";
import { DAY_OPTIONS } from "./add-doctor.constants";
import { InputField } from "@/components/form/input-field";
import { PlusCircleIcon, Trash2Icon } from "lucide-react";

export const AddDoctorButtonWithDialog: React.FC<{
  doctorLicenseNumber: string;
}> = ({ doctorLicenseNumber }) => {
  const {
    control,
    isAddingDoctor,
    onSubmit,
    fields,
    onAddAvailabilityField,
    onRemoveAvailabilityField,
  } = useAddDoctor(doctorLicenseNumber);

  return (
    <AppDialog
      button={<Button className="flex-1">Add Doctor</Button>}
      dialogTitle="Add Doctor"
      dialogDescription="Add this doctor to our hospital"
      onConfirm={onSubmit}
      isConfirming={isAddingDoctor}
    >
      <div className="space-y-4">
        {fields.map((field, index) => (
          <div
            key={field.id}
            className="grid grid-cols-[1fr_1fr_1fr_auto] gap-2"
          >
            <SelectField
              control={control}
              name={`availability.${index}.day`}
              label="Day"
              placeholder="Select day"
              options={DAY_OPTIONS}
            />
            <InputField
              control={control}
              label="From"
              name={`availability.${index}.from`}
              type="time"
              step="1"
              defaultValue="10:30:00"
              className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
            />
            <InputField
              control={control}
              label="To"
              name={`availability.${index}.to`}
              type="time"
              step="1"
              defaultValue="10:30:00"
              className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
            />
            {index !== 0 && (
              <Button
                size="icon"
                className="self-end"
                variant="destructive"
                onClick={() => onRemoveAvailabilityField(index)}
              >
                <Trash2Icon />
              </Button>
            )}
          </div>
        ))}
      </div>
      <Button
        type="button"
        variant="outline"
        className="w-full mt-4 border-dashed"
        onClick={onAddAvailabilityField}
      >
        <PlusCircleIcon />
        Add
      </Button>
    </AppDialog>
  );
};
