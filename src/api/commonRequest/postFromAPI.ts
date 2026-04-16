import { internalApiClient } from "../apiClient";

export const postToAPI = async <T>(url: string, data?: T) => {
  try {
    const response = await internalApiClient.post(url, data);
    return response.data;
  } catch (error: any) {
    return error;
  }
};
