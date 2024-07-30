import { api } from "@/utils/axios"

export const getDiet = async (params: string) => {
  return await api.get(`/api/v1/members/record/diets?uploadDate=${params}`)
}

export const getDiets = async (dietId: number, dietInfoId: number) => {
  return await api.get(`/api/v1/members/record/diets/${dietId}/dietInfos/${dietInfoId}`)
}

export const patchDiets = async (dietId: number, dietInfoId: number, data: {}) => {
  return await api.patch(`/api/v1/members/record/diets/${dietId}/dietInfos/${dietInfoId}`, data)
}

export const postDiet = async (data: {}) => {
  return await api.patch(`/api/v1/members/record/diets`, data)
}