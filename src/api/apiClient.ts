import axios, { type AxiosInstance } from "axios";

const baseUrl = import.meta.env.VITE_INTERNAL_API_URL;

export const internalApiClient: AxiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 30 * 1000,
  headers: {
    "Content-Type": "application/json",
  },
});
