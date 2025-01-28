import { APP_CONFIG } from "@tx/configs";
import axios, { AxiosError, AxiosPromise } from "axios";

export const axiosInstance = axios.create({
  baseURL: APP_CONFIG.BASE_URL,
  // headers: {
  //   "x-api-key": APP_CONFIG.X_API,
  //   "x-platform": APP_CONFIG.PLATFORM,
  //   "x-channel": APP_CONFIG.CHANNEL,
  //   "Accept-Language": "ar",
  // },
});

export const HTTP = {
  async post<T>(url: string, data?: any): AxiosPromise<T> {
    const response = await axiosInstance.post(url, data);
    return response;
  },
  async get<T>(url: string, params?: any): AxiosPromise<T> {
    const response = await axiosInstance.get(url, {
      params: params,
    });
    return response;
  },
  async put<T>(url: string, data: any, ignoreBase?: boolean): AxiosPromise<T> {
    const response = await axiosInstance.put(url, data, {
      baseURL: ignoreBase ? "" : axiosInstance.defaults.baseURL,
    });
    return response;
  },
  async delete<T>(url: string, data: any): AxiosPromise<T> {
    const response = await axiosInstance.delete(url, {
      data: data,
    });
    return response;
  },
};

export default HTTP;
