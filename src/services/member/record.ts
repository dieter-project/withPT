import { api } from "@/utils/axios"

export const getRecord = async () => {
  return await api.get(`/api/v1/members/record`)
}