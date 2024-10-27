import { api } from "@/utils/axios";

export const requestKakaoLogin = async (data: OauthRequest) => {
  return await api.post("/api/v1/oauth/kakao", data);
};

export const logout = async () => {
  return await api.post(`/api/v1/oauth/logout`);
};
