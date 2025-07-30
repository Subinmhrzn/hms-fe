import type { FieldValues } from "react-hook-form";
import type { InputFileFieldViewProps } from "./input-file-field.types";
import { ImageIcon, Loader2Icon, XIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export const InputFileFieldView = <TFieldValues extends FieldValues>({
  getInputProps,
  getRootProps,
  name,
  label,
  placeholder,
  handleRemoveFile,
  field,
  isUploadingFile,
}: InputFileFieldViewProps<TFieldValues>) => {
  return (
    <section className="container max-h-48">
      <div className="space-y-3">
        <Label htmlFor={name}>{label}</Label>
        {isUploadingFile ? (
          <div className="border border-dashed py-4 px-2 rounded-md min-h-48 grid place-items-center cursor-pointer">
            <Loader2Icon className="animate-spin" />
          </div>
        ) : field.value ? (
          <aside className="relative">
            <div className="grid place-items-center">
              <img src={field.value} className="object-contain h-48" />
            </div>
            <div className="absolute -top-4 right-0">
              <Button size="icon" onClick={handleRemoveFile} variant="ghost">
                <XIcon className="text-destructive" size={16} />
              </Button>
            </div>
          </aside>
        ) : (
          <div
            {...getRootProps({ className: "dropzone" })}
            className="border border-dashed py-4 px-2 rounded-md min-h-48 grid place-items-center cursor-pointer"
          >
            <div className="max-w-sm text-center grid place-items-center gap-2">
              <input {...getInputProps()} />
              <ImageIcon size={32} className="text-muted-foreground" />
              <p className="text-sm text-muted-foreground max-w-2xs">
                {placeholder ||
                  "Drag & drop some files here, or click to select files"}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
