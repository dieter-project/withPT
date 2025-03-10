// src/lib/api/api-client.ts
"use client";

import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

const setAuthHeader = (
  config: InternalAxiosRequestConfig,
  token: string | null,
) => {
  if (config.headers && token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
};

// 클라이언트 사이드 쿠키 유틸리티
const getCookie = (name: string): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(";").shift() || null;
  }
  return null;
};

const setCookie = (name: string, value: string) => {
  document.cookie = `${name}=${value}; path=/; SameSite=Lax; ${
    process.env.NODE_ENV === "production" ? "Secure;" : ""
  }`;
};

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Cache-Control": "no-cache",
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = getCookie("access");
    return setAuthHeader(config, accessToken);
  },
  (error: AxiosError) => Promise.reject(error),
);

api.interceptors.response.use(
  response => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = getCookie("refreshToken");
        const response = await axios.post(`${BASE_URL}/api/v1/oauth/reissue`, {
          refresh: refreshToken,
        });

        const newAccessToken = response.data.accessToken;
        setCookie("access", newAccessToken);

        return api(setAuthHeader(originalRequest, newAccessToken));
      } catch (refreshError) {
        window.location.href = "/login";
        return Promise.reject({
          message: "Session expired. Please login again.",
          status: 401,
        });
      }
    }

    if (!error.response) {
      return Promise.reject({
        message: "Network error. Please check your connection.",
        status: 500,
      });
    }

    return Promise.reject(error);
  },
);

export const apiClient = {
  async get<T>(url: string, config = {}) {
    const response = await api.get<T>(url, config);
    return response.data;
  },

  async post<T>(url: string, data?: any, config = {}) {
    const response = await api.post<T>(url, data, config);
    return response.data;
  },

  async put<T>(url: string, data?: any, config = {}) {
    const response = await api.put<T>(url, data, config);
    return response.data;
  },

  async delete<T>(url: string, config = {}) {
    const response = await api.delete<T>(url, config);
    return response.data;
  },
};
