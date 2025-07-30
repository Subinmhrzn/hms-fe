import { useMutation } from "@tanstack/react-query";
import { uploadFile } from "./files";

export const useUploadFileMutation = () =>
  useMutation({
    mutationFn: uploadFile,
    meta: {
      successMessage: "File Uploaded",
      errorMessage: "File upload failed!",
    },
  });
