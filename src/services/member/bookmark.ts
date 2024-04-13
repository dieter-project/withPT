import { api } from "@/utils/axios"

export const deleteBookmark = async (params: {}) => {
  return await api.delete(`/api/v1/members/exercise/bookmark`, { params })
}

export const getBookmarks = async () => {
  return await api.get(`/api/v1/members/exercise/bookmark`)
}

export const getBookmark = async (params: string) => {
  return await api.get(`/api/v1/members/exercise/bookmark/${params}`)
}

export const patchBookmark = async (params: string) => {
  return await api.patch(`/api/v1/members/exercise/bookmark/${params}`)
}

export const postBookmark = async (params: {}) => {
  return await api.post(`/api/v1/members/exercise/bookmark`, { params })
}