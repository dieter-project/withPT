import { api } from "@/utils/axios"

export const getBody = async (params: string) => {
  return await api.get(`/api/v1/members/record/body-info?uploadDate=${params}`)
}

export const getBodyImage = async (params: string, data: {}) => {
  return await api.get(`/api/v1/members/record/body-info/image?uploadDate=${params}`, data)
}

export const getBodyImages = async () => {
  return await api.get('/api/v1/members/record/body-info/images')
}

export const postBody = async (data: {}) => {
  return await api.post('/api/v1/members/record/body-info/bodyInfo', data)
}

export const postWeight = async (data: {}) => {
  return await api.post('/api/v1/members/record/body-info/weight', data)
}

export const postBodyImage = async (data: FormData) => {
  return await api.post(`/api/v1/members/record/images/body-info`, data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}


export const deleteBodyImage = async (data: {}) => {
  return await api.delete(`/api/v1/members/record/body-info/image`, data)
}