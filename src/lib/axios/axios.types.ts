export type MethodType = "get" | "post" | "put" | "patch" | "delete";

// TODO: change this to your API response type
export type ApiErrorType = {
  message: string;
  error: string;
  statusCode: number;
};

export type QueueItem = {
  resolve: (token: string) => void;
  reject: (error: unknown) => void;
};
