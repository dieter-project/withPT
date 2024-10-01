import { api } from "@/utils/axios"

export const getChatRooms = async () => {
  return await api.get(`/api/v1/chat/rooms`)
}

export const postChatRoom = async (params: {}) => {
  return await api.post(`/api/v1/chat/room/create`, params)
}

