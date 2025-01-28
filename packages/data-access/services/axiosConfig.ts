import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { axiosInstance } from "@tx/util-helpers";
import { useAuthStore } from "../store/authStore";
import { APP_CONFIG } from "@tx/configs";
import { EtxProduct } from "@tx/util-models";
import { API_ROUTES } from "./apiRoutes";

interface IErrorResponse {
  message: string;
  errorCode: string;
}

axiosInstance.interceptors.response.use(
  (response) => {
    console.log(response);
    if (
      response.config.method !== "get" &&
      !response.config.url?.includes("files") &&
      response.config.baseURL !== ""
    )
      toast.success(response.data.message);
    return response;
  },
  (error: AxiosError<IErrorResponse>) => {
    if (error.config?.method !== "get")
      if (error.response?.data) toast.error(error?.response?.data?.message);
      else toast.error("عذرا، حدث خطأ ما حاول لاحقا");
    if (
      error?.response?.status === 401 ||
      (error?.response?.status === 403 &&
        error.config?.method === "get" &&
        error?.config?.url === "/account/profile")
    )
      useAuthStore.setState({ isAuthenticated: false });
    return Promise.reject(error);
  },
);
