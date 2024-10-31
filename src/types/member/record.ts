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
  exerciseSet: number,
  exerciseTime: number,
  times: number,
  bookmarkYn: boolean,
  bodyParts: string,
  specificBodyParts: string[], 
  exerciseType: string,
}

export type WorkoutType = {
  id: number,
  title: string,
  weight: number,
  times: number,
  bodyParts: string,
  exerciseSet: number,
  exerciseTime: number,
  exerciseType: string
}

export interface WorkoutRecord {
  id: number;
  remainingExerciseCountToTarget: number;
  uploadDate: string;
  exerciseInfos: WorkoutType[]
}

export interface WorkoutInfo {
  id: number;
  uploadDate: string;
  exerciseInfo: WorkoutType
}

export interface DietRquestDate {
  uploadDate: string,
  dietCategory: string,
  dietTime: string,
  dietFoods: DietFood[]
}

export interface DietRecord {
  id: number,
  dietInfos: DietInfos[],
  feedback: string | null,
  targetDietType: string,
  uploadDate: string,
  totalCalorie: number,
  totalCarbohydrate: number,
  totalFat: number,
  totalProtein: number,
}

export interface DietInfos {
  dietCategory: string
  dietFoods: DietFoodItems[]
  dietTime: string
  id: number
  images: []
  totalCalorie: number
  totalCarbohydrate: number
  totalFat: number
  totalProtein: number
}

interface DietFoodItems {
  id: number,
  name: string,
  capacity: number,
  calories: number,
  carbohydrate: number,
  fat: number,
  protein: number,
  units: string
}

export interface DietFood {
  name: string | null,
  capacity: number | null,
  units: string | null,
  calories: number | null,
  carbohydrate: number | null,
  protein: number | null,
  fat: number | null
}
