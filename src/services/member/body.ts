import { api } from "@/utils/axios"

export const getBody = async (params: string) => {
  return await api.get(`/api/v1/members/body?dateTime=${params}`)
}

export const getBodyImage = async (params: string) => {
  return await api.get(`/api/v1/members/body/image?dateTime=${params}`)
}

export const getBodyImages = async () => {
  return await api.get('/api/v1/members/body/images')
}

export const postBody = async (data: {}) => {
  return await api.post('/api/v1/members/body', data)
}

export const postWeight = async (data: {}) => {
  return await api.post('/api/v1/members/body/weight', data)
}

export const postBodyImage = async (params: string, data: {}) => {
  return await api.post(`/api/v1/members/body/image?dateTime=${params}`, data, {
    headers: {
      "Content-Type": 'multipart/form-data'
    }
  })
}