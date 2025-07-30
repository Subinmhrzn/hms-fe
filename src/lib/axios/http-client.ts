import { AxiosError } from "axios";
import type { AxiosRequestConfig, AxiosResponse } from "axios";
import { Api } from "./axios";
import type { ApiErrorType, MethodType } from "./axios.types";

export const HttpClient = {
  get: <T>(url: string, config?: AxiosRequestConfig<T>) =>
    createRequest<T>("get", url, undefined, config),
  post: <T>(url: string, data?: unknown, config?: AxiosRequestConfig<T>) =>
    createRequest<T>("post", url, data, config),
  put: <T>(url: string, data?: unknown, config?: AxiosRequestConfig<T>) =>
    createRequest<T>("put", url, data, config),
  patch: <T>(url: string, data?: unknown, config?: AxiosRequestConfig<T>) =>
    createRequest<T>("patch", url, data, config),
  delete: <T>(url: string, config?: AxiosRequestConfig<T>) =>
    createRequest<T>("delete", url, undefined, config),
};

export class HttpError extends Error {
  statusCode?: number;
  details?: unknown;

  constructor(message: string, statusCode?: number, details?: unknown) {
    super(message);
    this.name = "HttpError";
    this.statusCode = statusCode;
    this.details = details;
  }
}

const createRequest = async <TData>(
  method: MethodType,
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig<TData>,
): Promise<AxiosResponse<TData>> => {
  try {
    switch (method) {
      case "get":
      case "delete":
        return await Api[method]<TData>(url, config);
      case "post":
      case "put":
      case "patch":
        return await Api[method]<TData>(url, data, config);
      default:
        throw new HttpError("Method not supported");
    }
  } catch (err) {
    let message = "Something went wrong";
    let statusCode: number | undefined;
    let details: unknown;

    if (err instanceof AxiosError) {
      statusCode = err.response?.status;
      const responseData = err.response?.data as ApiErrorType;

      if (!responseData) {
        message = err.message;
      } else if (typeof responseData?.message === "string") {
        message = responseData.message;
      } else {
        message = "Unexpected server error";
        details = responseData;
      }
    } else if (err instanceof Error) {
      message = err.message;
    } else if (typeof err === "string") {
      message = err;
    }

    throw new HttpError(message, statusCode, details);
  }
};
