export interface WeightRecordRequest {
  weight: number,
  uploadDate: string
}

export interface BodyInfoRecordRequest {
  bmi: number,
  bodyFatPercentage: number,
  skeletalMuscle: number,
  uploadDate: string
}

export interface Weight {
  recentUploadDate: string,
  weight: number
}

export interface BodyInfo {
  bmi: number,
  bodyFatPercentage: number,
  skeletalMuscle: number,
  recentUploadDate: string
}

export type WorkoutPayload = {
  uploadDate: string,
  title: string,
  weight: number,
  bodyRecordDate: string
}
