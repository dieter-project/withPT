import { OauthRequest, SignupRequest } from "@/types/common/auth";
import { api } from "@/utils/axios";

export const requestKakaoLogin = async (data: OauthRequest) => {
  return await api.post("/api/v1/oauth/kakao", data);
};

export const requestSignup = async (data: SignupRequest) => {
  return await api.post('/api/v1/members/sign-up', data)
}

export const logout = async () => {
  return await api.post(`/api/v1/oauth/logout`);
};
