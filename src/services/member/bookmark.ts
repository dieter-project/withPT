import { api } from "@/utils/axios";

export const deleteBookmark = async (data: {}) => {
  return await api.delete(`/api/v1/members/record/bookmarks`, data);
};

export const getBookmarks = async () => {
  return await api.get(`/api/v1/members/record/bookmarks`);
};

export const getBookmark = async (bookmarkId: number) => {
  return await api.get(`/api/v1/members/record/bookmarks/${bookmarkId}`);
};

export const patchBookmark = async (bookmarkId: number) => {
  return await api.patch(`/api/v1/members/record/bookmarks/${bookmarkId}`);
};

export const postBookmark = async (data: {}) => {
  return await api.post(`/api/v1/members/record/bookmarks`, data);
};

export const getBodyBookmarkCheck = async (params: {}) => {
  const query = new URLSearchParams(params).toString()
  return await api.get(
    `/api/v1/members/record/bookmarks/check-duplicate-title?${query}`,
  );
};
