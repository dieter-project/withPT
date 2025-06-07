import { api } from "@/utils/axios"

export const getExerciseByDate = async (params: string) => {
  return await api.get(`/api/v1/members/record/exercises?uploadDate=${params}`)
}

export const getExercise = async (exerciseId: number, exerciseInfoId: number) => {
  return await api.get(`/api/v1/members/record/exercises/${exerciseId}/exercise-info/${exerciseInfoId}`)
}

export const getExerciseNameCheck = async (params: number) => {
  return await api.get(`/api/v1/members/record/exercises/check?title${params}`)
}

export const patchExercise = async (exerciseId: number) => {
  return await api.patch(`/api/v1/members/record/exercises/${exerciseId}`)
}

export const postExercise = async (data: FormData) => {
  return await api.post('/api/v1/members/record/exercises', data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

export const deleteExercise = async (exerciseId: number, exerciseInfoId: number) => {
  return await api.delete(`/api/v1/members/record/exercises/${exerciseId}/exercise-info/${exerciseInfoId}`)
}

export const deleteExerciseImage = async (url: number) => {
  return await api.delete(`/api/v1/members/record/exercises?url${url}`)
}
