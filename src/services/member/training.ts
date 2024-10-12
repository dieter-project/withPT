import { api } from "@/utils/axios"


//personal trainers info
export const getPersonalTrainers = async (id: number) => {
  return await api.get(`/api/v1/gyms/personal-trainings/members/${id}/trainers`)
}

export const getPersonalTrainerAwards = async (id: number, page: number, size: number, sort: string) => {
  return await api.get(`/api/v1/trainers/${id}/awards?page=${page}&size=${size}&sort=${sort}`)
}

//lesson
export const getLessonsDays = async (paramsObj: {}) => {
  const params = new URLSearchParams(paramsObj).toString()
  return await api.get(`/api/v1/lessons/member-schedules?${params}`)
}

export const getLessonsMonthly = async (paramsObj: {}) => {
  const params = new URLSearchParams(paramsObj).toString()
  return await api.get(`/api/v1/lessons/member-schedules/monthly?${params}`)
}