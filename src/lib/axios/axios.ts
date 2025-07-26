import { ENV } from "@/utils";
import axios from "axios";

const ONE_MINUTE = 1 * 60 * 1000;

export const Api = axios.create({
  baseURL: ENV.VITE_API_URL,
  timeout: ONE_MINUTE,
});

Api.interceptors.request.use(async (config) => {
  //   const token = await getAccessTokenSilently();
  //   config.headers.Authorization = `Bearer ${token}`;
  return config;
});
