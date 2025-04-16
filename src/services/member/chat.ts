import { api } from "@/utils/axios";

export const reqGetChatRooms = async () => {
  return await api.get(`/api/v1/chat/rooms`);
};

export const reqGetChatRoomContent = async (roomId: number) => {
  return await api.get(`/api/v1/chat/rooms/${roomId}`);
};

export const reqPostChatRoom = async (data: { id: number }) => {
  return await api.post(`/api/v1/chat/room/create`, data);
};
