import { HttpClient } from "@/lib/axios/http-client";
import { FILE_API } from "./files.api";
import type { UploadFileResponseDto } from "./files.types";

export const uploadFile = (file: File) => {
  return HttpClient.post<UploadFileResponseDto>(
    FILE_API.UPLOAD_FILE,
    { file },
    { headers: { "Content-Type": "multipart/form-data" } },
  );
};
