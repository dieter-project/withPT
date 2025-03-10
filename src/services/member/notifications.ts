import { api } from "@/utils/axios"

export const reqGetNotifications = async () => {
  return await api.get(`/api/v1/notifications`)
}