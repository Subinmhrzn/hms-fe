import { LocalStorageKey } from "@/constants";
import { ENV, LocalStorage } from "@/utils";
import axios from "axios";
import type { QueueItem } from "./axios.types";
import { refresh } from "@/api/auth";
import { Route } from "@/routes";

const ONE_MINUTE = 1 * 60 * 1000;

export const Api = axios.create({
  baseURL: ENV.VITE_API_URL,
  timeout: ONE_MINUTE,
  withCredentials: true,
});

Api.interceptors.request.use(async (config) => {
  const token = LocalStorage.get(LocalStorageKey.ACCESS_TOKEN);
  console.log({ token });
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

let isRefreshing = false;
let failedQueue: QueueItem[] = [];

const processQueue = (error: unknown, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else if (token) {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

Api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Check if error is 401 and we haven't already tried to refresh
    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest._retry
    ) {
      if (isRefreshing) {
        // If already refreshing, queue the request
        return new Promise<string>((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token: string) => {
            if (originalRequest.headers) {
              originalRequest.headers.Authorization = `Bearer ${token}`;
            }
            return Api(originalRequest);
          })
          .catch((err: unknown) => {
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        // Call refresh endpoint - the HTTP-only cookie will be sent automatically
        const { data } = await refresh();
        const accessToken = data.accessToken;

        // Store new access token
        LocalStorage.set(LocalStorageKey.ACCESS_TOKEN, accessToken);

        // Update default authorization header
        if (Api.defaults.headers.common) {
          Api.defaults.headers.common["Authorization"] =
            `Bearer ${accessToken}`;
        }

        // Process queued requests
        processQueue(null, accessToken);

        // Retry original request with new token
        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        }
        return Api(originalRequest);
      } catch (refreshError) {
        // Refresh failed - clear tokens and redirect to login
        processQueue(refreshError, null);
        LocalStorage.remove(LocalStorageKey.ACCESS_TOKEN);
        LocalStorage.remove(LocalStorageKey.USER);

        // Redirect to login page or dispatch logout action
        window.location.href = Route.Auth.Login;

        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  },
);
