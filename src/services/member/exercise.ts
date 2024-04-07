import { api } from "@/utils/axios"

export const getExercise = async (params: string) => {
  return await api.get(`/api/v1/members/exercise?dateTime=${params}`)
}