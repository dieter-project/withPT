import { api } from "@/utils/axios"

export const logout = async () => {
  return await api.post(`/api/v1/oauth/logout`);
}