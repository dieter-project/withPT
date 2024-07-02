import { api } from "@/utils/axios"

export const getMemberInfo = async () => {
  return await api.get(`/api/v1/members/info`)
}

export const patchMemberInfo = async (data: {}) => {
  return await api.patch(`/api/v1/members/info`, data)
}

export const patchMemberWeight = async () => {
  return await api.patch(`/api/v1/members/info/weight`)
}

export const patchMemberExercise = async () => {
  return await api.patch(`/api/v1/members/info/exercise`)
}

export const patchMemberDiet = async () => {
  return await api.patch(`/api/v1/members/info/diet`)
}