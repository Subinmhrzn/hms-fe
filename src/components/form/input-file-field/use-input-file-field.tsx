import { useController, type FieldValues } from "react-hook-form";
import type { UseInputFileFieldProps } from "./input-file-field.types";
import { useDropzone } from "react-dropzone";
import { useUploadFileMutation } from "@/api/files/files.mutations";

export const useInputFileField = <TFieldValues extends FieldValues>(
  props: UseInputFileFieldProps<TFieldValues>,
) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name: props.name,
    control: props.control,
  });

  const { mutateAsync: uploadFile, isPending: isUploadingFile } =
    useUploadFileMutation();

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    multiple: false,
    onDrop: async (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        const { data: uploadFileData } = await uploadFile(file);
        const url = uploadFileData.url;

        field.onChange(url);
      }
    },
  });

  const handleRemoveFile = () => {
    field.onChange(null);
  };

  return {
    getRootProps,
    getInputProps,
    error,
    field,
    handleRemoveFile,
    isUploadingFile,
  };
};
