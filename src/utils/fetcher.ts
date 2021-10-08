import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { API_ROUTES } from "../constants/apiConfig";
import { APP_DEF } from "../constants/appConfig";

const instance: AxiosInstance = axios.create({
  baseURL: API_ROUTES.baseUrl,
  timeout: 2000,
});

/**
 * Export the register method
 * we will store the retrieved token in local storage
 */
export const loginSignup = (
  email: string,
  password: string,
  mode: "login" | "register"
): Promise<AxiosResponse<never> | AxiosError<never> | undefined> => {
  return instance
    .post(
      mode === "login" ? API_ROUTES.login : API_ROUTES.register,
      { email, password },
      { headers: { "Content-Type": "application/json" } }
    )
    .then((response: AxiosResponse<any>) => {
      if (response && response.data.accessToken) {
        localStorage.setItem(APP_DEF.tokenKey, response.data.accessToken);
        const myDate = new Date();

        localStorage.setItem(
          APP_DEF.tokenExpiry,
          myDate.setHours(myDate.getHours() + 1).toString()
        );

        return response as AxiosResponse<never>;
      }
    })
    .catch((error: AxiosError) => {
      return Promise.reject(error);
    });
};

/**
 * Getter method
 */
export const get = async (
  url: string,
  params: Record<string, any>
): Promise<AxiosResponse<never>> => {
  try {
    return await instance.get(url, {
      params: {
        ...params,
        sl_token: localStorage.getItem(APP_DEF.tokenKey),
      },
    });
  } catch (error) {
    return Promise.reject();
  }
};