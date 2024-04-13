import { api } from "@/utils/axios"

export const getAMeal = async (params: string) => {
  return await api.get(`/api/v1/members/diet/${params}`)
}