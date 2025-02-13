import { api } from "@/utils/axios"

export const getMemberInfo = async () => {
  return await api.get(`/api/v1/members/info`)
}

export const patchMemberInfo = async (data: {}) => {
  return await api.patch(`/api/v1/members/info`, data)
}

export const patchMemberWeight = async (data: {}) => {
  return await api.patch(`/api/v1/members/info/weight`, data)
}

export const patchMemberExercise = async (data: {}) => {
  return await api.patch(`/api/v1/members/info/exercise`, data)
}

export const patchMemberDiet = async (data: {}) => {
  return await api.patch(`/api/v1/members/info/diet`, data)
}