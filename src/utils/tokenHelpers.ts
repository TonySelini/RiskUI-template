import { LOCAL_STORAGE_KEYS } from "./consts";

const CUSTOM_TIMEOUT_IN_SECONDS = 24 * 60 * 60; // 24 hours

export const isTokenValid = (
  lastLogginTime: number,
  timeoutInSeconds = CUSTOM_TIMEOUT_IN_SECONDS
): boolean => {
  try {
    const currentTime = getCurrentDateTime();
    // Apply custom expiration timeout
    const tokenExpirationTime = lastLogginTime + timeoutInSeconds;
    return currentTime < tokenExpirationTime;
  } catch (_error) {
    return false;
  }
};

export const getCurrentDateTime = (): number => {
  return Math.floor(Date.now() / 1000);
};

export const clearTokenSotrage = () => {
  localStorage.removeItem(LOCAL_STORAGE_KEYS.GOOGLE_TOKEN_TIMESTAMP); // todo: this will be moved to the server side
  localStorage.removeItem(LOCAL_STORAGE_KEYS.GOOGLE_PROFILE);
};
