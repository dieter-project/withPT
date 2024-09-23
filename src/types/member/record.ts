export interface WeightRecord {
  weight: number,
  uploadDate: string
}

export interface BodyInfoRecord {
  bmi: number,
  bodyFatPercentage: number,
  skeletalMuscle: number,
  uploadDate: string
}

export type WorkoutType = {
  id: number,
  title: string,
  weight: number,
  exerciseSet: number,
  times: number,
  exerciseTime: number,
  bodyParts: string,
  exerciseType: string
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

interface DietInfos {
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
