import { api } from "@/utils/axios"

export const deleteBookmark = async (data: {}) => {
  return await api.delete(`/api/v1/members/record/exercise/bookmark`, data)
}

export const getBookmarks = async () => {
  return await api.get(`/api/v1/members/record/exercise/bookmark`)
}

export const getBookmark = async (bookmarkId: number) => {
  return await api.get(`/api/v1/members/record/exercise/bookmark/${bookmarkId}`)
}

export const patchBookmark = async (bookmarkId: number) => {
  return await api.patch(`/api/v1/members/record/exercise/bookmark/${bookmarkId}`)
}

export const postBookmark = async (data: {}) => {
  return await api.post(`/api/v1/members/record/exercise/bookmark`, data)
}