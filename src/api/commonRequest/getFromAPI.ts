import { internalApiClient } from "../apiClient";

export const getFromAPI = async (
  url: string,
  { signal }: { signal?: AbortSignal } = {},
) => {
  try {
    const response = await internalApiClient.get(url, {
      timeout: 1000 * 30,
      signal: signal,
    });

    return response.data;
  } catch (error: any) {
    return error;
  }
};
