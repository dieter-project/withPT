import axios, {
  AxiosError,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from "axios";
import { getCookie, setCookie } from "./cookie";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Cache-Control": "no-cache",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    withCredentials: true,
  },
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = getCookie("access");

    if (config.headers && accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
      return config;
    } else {
      return config;
    }
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  async response => {
    return response;
  },
  async error => {
    console.log("error: ", error);
    if (error.response.status === 401) {
      if (error.config._retry) {
        return Promise.reject(error);
      }

      error.config._retry = true;

      const token = getCookie("access");
      const refreshToken = getCookie("refreshToken");

      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/oauth/reissue`,
          {
            refresh: refreshToken,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );
        if (response.status === 200 && response.data.accessToken) {
          setCookie("access", response.data.accessToken, { path: "/" });
          error.config.headers[
            "Authorization"
          ] = `${response.data.accessToken}`;
          return api.request(error.config);
        } else {
          window.location.href = "/member/login";
          return Promise.reject(error);
        }
      } catch (e) {
        window.location.href = "/member/login";
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  },
);
