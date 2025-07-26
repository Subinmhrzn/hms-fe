import { useController, type FieldValues } from "react-hook-form";
import type {
  FileWithPreview,
  UseInputFileFieldProps,
} from "./input-file-field.types";
import { useDropzone } from "react-dropzone";
import { useEffect, useMemo } from "react";

export const useInputFileField = <TFieldValues extends FieldValues>(
  props: UseInputFileFieldProps<TFieldValues>
) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name: props.name,
    control: props.control,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    defaultValue: null as any,
  });

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    multiple: false,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        field.onChange(
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
      }
    },
  });

  const file = useMemo(
    () =>
      field.value && typeof field.value === "object" && "preview" in field.value
        ? (field.value as unknown as FileWithPreview)
        : null,
    [field.value]
  );

  const handleRemoveFile = () => {
    field.onChange(null);
  };

  useEffect(() => {
    // Make sure to revoke the data uri to avoid memory leaks, will run on unmount
    return () => {
      if (file && file.preview) {
        URL.revokeObjectURL(file.preview);
      }
    };
  }, [file]);

  return {
    getRootProps,
    getInputProps,
    error,
    field,
    file,
    handleRemoveFile,
  };
};
