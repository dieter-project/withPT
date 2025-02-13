import { api } from "@/utils/axios"

export const getRecord = async (date: string) => {
  return await api.get(`/api/v1/members/record?date=${date}`)
}