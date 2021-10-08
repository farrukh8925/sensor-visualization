import { APP_DEF } from "../constants/appConfig";

/**
 * Determines whether token exists in local storage
 * - If it does, check time validity as well.
 * @returns Boolean
 */
export const isTokenValid = (): Boolean => {
  const tokenKey = localStorage.getItem(APP_DEF.tokenKey);
  const tokenExpiry = localStorage.getItem(APP_DEF.tokenExpiry);

  if (tokenKey && tokenExpiry) {
    const date = new Date();

    if (Number(tokenExpiry) > date.getTime()) {
      return true;
    } else {
      localStorage.clear();
    }
  }
  return false;
};
