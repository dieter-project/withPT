import { api } from "@/utils/axios"

export const getChatRooms = async () => {
  return await api.get(`/api/v1/chat/rooms`)
}