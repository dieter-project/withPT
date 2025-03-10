import { api } from "@/utils/axios"

export const reqGetMemberInfo = async () => {
  return await api.get(`/api/v1/members/info`)
}

export const reqPatchMemberInfo = async (data: {}) => {
  return await api.patch(`/api/v1/members/info`, data)
}

export const reqPatchMemberWeight = async (data: {}) => {
  return await api.patch(`/api/v1/members/info/weight`, data)
}

export const reqPatchMemberExercise = async (data: {}) => {
  return await api.patch(`/api/v1/members/info/exercise`, data)
}

export const reqPatchMemberDiet = async (data: {}) => {
  return await api.patch(`/api/v1/members/info/diet`, data)
}