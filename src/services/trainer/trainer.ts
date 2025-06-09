import { api } from "@/utils/axios";

export const reqGetTrainerInfo = async (trainerId: number) => {
  return await api.get(`/api/v1/trainers/${trainerId}/info`);
};
